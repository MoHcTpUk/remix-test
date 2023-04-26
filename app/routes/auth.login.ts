import type { ActionArgs } from '@remix-run/cloudflare';
import { redirect } from '@remix-run/cloudflare';
import type { IUser } from 'public/interfaces/iUserContext';
import type { EntitySignInRequest } from 'shared/client/data-contracts';
import { UserService } from 'shared/client/UserService';

import { sessionStorage } from '~/storages/session.server';
import { getUserContextSession } from '~/storages/userContext.server';
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
    const session = await sessionStorage.getSession();
    session.set('session', sessionCookie);

    client.authWithSession(session.get('session') as string);
    const userInfo = (await client.infoList()).data;
    const userContextSession = await getUserContextSession(request);
    const userContext = userContextSession.getUserContext();

    userContext.user = {
      id: userInfo.id,
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      email: userInfo.email,
      isAuthenticated: true,
    } as IUser;

    userContextSession.setUserContext(userContext);

    const headers: HeadersInit = new Headers();

    headers.append('Set-Cookie', await userContextSession.commit());
    headers.append('Set-Cookie', await sessionStorage.commitSession(session));

    return redirect('/account', {
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
