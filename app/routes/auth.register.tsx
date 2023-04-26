import type { ActionArgs } from '@remix-run/cloudflare';
import { redirect } from '@remix-run/cloudflare';
import { useActionData } from '@remix-run/react';
import type { IUser } from 'public/interfaces/iUserContext';
import type { EntitySignUpRequest } from 'shared/client/data-contracts';
import { UserService } from 'shared/client/UserService';

import { RegisterPage } from '~/components/pages/Auth/Register';
import { sessionStorage } from '~/storages/session.server';
import { getUserContextSession } from '~/storages/userContext.server';
import { badRequest } from '~/utils/request.server';
import {
  validateEmail,
  validatePassword,
  validatePasswordConfirm,
  validatePolicy,
} from '~/utils/validations';

export interface ISignUpResponse {
  fields: EntitySignUpRequest;
  formError: null | string;
  fieldErrors: {
    email: string | undefined;
    password: string | undefined;
    passwordConfirm: string | undefined;
    policy: string | undefined;
  };
}

function isErrorType(object: unknown): object is ISignUpResponse {
  return (object as ISignUpResponse)?.fieldErrors !== undefined;
}

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();
  const userContextSession = await getUserContextSession(request);

  const email = formData.get('email')?.toString();
  const password = formData.get('password')?.toString();
  const passwordConfirm = formData.get('password_confirmation')?.toString();
  const first_name = formData.get('first_name')?.toString();
  const last_name = formData.get('last_name')?.toString();
  const policy = formData.get('policy')?.toString();

  const locale = userContextSession.getUserContext()?.language;

  const fields: EntitySignUpRequest = { email, first_name, last_name, locale, password };

  const fieldErrors = {
    email: validateEmail(email),
    password: validatePassword(password),
    passwordConfirm: validatePasswordConfirm(password, passwordConfirm),
    policy: validatePolicy(policy),
  };

  if (Object.values(fieldErrors).some(Boolean)) {
    return badRequest({ fieldErrors, fields, formError: null });
  }

  try {
    const client = new UserService();
    const signUpResult = await client.registrationCreate(fields);

    const sessionCookie = signUpResult.headers.get('Set-Cookie');

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
      fields,
      formError: `Form not submitted correctly.`,
    });
  }
};

export default function Register() {
  const actionData = useActionData<typeof action>();
  let errors: ISignUpResponse | null = null;
  if (isErrorType(actionData)) {
    errors = actionData;
  }

  return <RegisterPage actionData={errors as ISignUpResponse} />;
}
