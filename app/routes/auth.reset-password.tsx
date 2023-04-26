import type { ActionArgs } from '@remix-run/cloudflare';
import { redirect } from '@remix-run/cloudflare';
import type { EntitySignUpRequest } from 'shared/client/data-contracts';
import { UserService } from 'shared/client/UserService';

import { sessionStorage } from '~/storages/session.server';
import { getUserContextSession } from '~/storages/userContext.server';
import { badRequest } from '~/utils/request.server';
import { validateEmail, validatePassword } from '~/utils/validations';

export interface IError {
  fields: EntitySignUpRequest;
  formError: null;
  fieldErrors: { password_confirmation: string | undefined; password: string | undefined };
}

// function isErrorType(object: any): object is IError {
//   return (object as IError)?.fieldErrors !== undefined;
// }

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();
  const userContextSession = await getUserContextSession(request);

  const email = formData.get('email')?.toString();
  const password = formData.get('password')?.toString();
  const first_name = formData.get('first_name')?.toString();
  const last_name = formData.get('last_name')?.toString();
  const locale = userContextSession.getUserContext()?.language?.toString();

  const fields: EntitySignUpRequest = { email, first_name, last_name, locale, password };

  const fieldErrors = {
    email: validateEmail(email),
    password: validatePassword(password),
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
    const headers: HeadersInit = sessionCookie
      ? { 'Set-Cookie': await sessionStorage.commitSession(session) }
      : {};

    return redirect('/account', {
      status: 302,
      headers,
    });
  } catch (error) {
    return badRequest({
      fieldErrors: null,
      formError: `Form not submitted correctly.`,
      fields,
    });
  }
};
