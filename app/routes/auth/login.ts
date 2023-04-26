import type { ActionArgs } from '@remix-run/cloudflare';
import { redirect } from '@remix-run/cloudflare';
import type { IUser } from 'public/interfaces/iUserContext';
import type { EntitySignInRequest } from 'shared/client/data-contracts';
import { UserService } from 'shared/client/UserService';
import Routes from 'shared/routing/routes';

import { getSessionStorage } from '~/storages/session.server';
import { getUserContextStorage } from '~/storages/userContext.server';
import { badRequest } from '~/utils/request.server';
import { validateEmail, validatePassword } from '~/utils/validations';

export const action = async ({ request }: ActionArgs) => {
  const form = await request.formData();
  const email = form.get('email')?.toString();
  const password = form.get('password')?.toString();
  const creds: EntitySignInRequest = { email, password };

  if (typeof email !== 'string' || typeof password !== 'string') {
    return badRequest({
      fieldErrors: null,
      fields: null,
      formError: `Form not submitted correctly.`,
    });
  }

  const fieldErrors = {
    email: validateEmail(email),
    password: validatePassword(password),
  };

  if (Object.values(fieldErrors).some(Boolean)) {
    return badRequest({ fieldErrors, creds, formError: null });
  }

  try {
    const client = new UserService();
    const signInResult = await client.loginCreate(creds);

    const sessionCookie = signInResult.headers.get('Set-Cookie');
    const sessionStorage = await getSessionStorage(request);
    const session = sessionStorage.getSession();
    session.session = sessionCookie;
    sessionStorage.setSession(session);

    client.auth(session);
    const userInfo = (await client.infoList()).data;
    const userContextStorage = await getUserContextStorage(request);
    const userContext = userContextStorage.getUserContext();

    userContext.user = {
      id: userInfo.id,
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      email: userInfo.email,
      isAuthenticated: true,
    } as IUser;

    userContextStorage.setUserContext(userContext);

    const headers: HeadersInit = new Headers();

    headers.append('Set-Cookie', await userContextStorage.commit());
    headers.append('Set-Cookie', await sessionStorage.commit());

    return redirect(Routes.user.root, {
      status: 302,
      headers,
    });
  } catch (error) {
    return badRequest({
      fieldErrors: null,
      fields: creds,
      formError: `Username/Password combination is incorrect`,
    });
  }
};
