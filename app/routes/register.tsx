import { ActionArgs, LoaderArgs, json, redirect } from '@remix-run/cloudflare';
import { LanguageEnum } from 'public/enums/languageEnum';
import { Api, EntitySignUpRequest } from 'shared/client';
import { RegisterPage } from '~/components/pages/Auth/Register';
import { getUserContextSession } from '~/storages/userContext.server';
import { validateEmail } from '~/utils/validations';

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();
  const userContextSession = await getUserContextSession(request);

  const email = formData.get('email')?.toString();
  const password = formData.get('password')?.toString();
  const first_name = formData.get('first_name')?.toString();
  const last_name = formData.get('last_name')?.toString();
  const locale = userContextSession.getUserContext()?.language;

  const fields: EntitySignUpRequest = { email, password, first_name, last_name, locale };

  if (!validateEmail(email)) {
    return json({ errors: { email: 'Email is invalid', password: null } }, { status: 400 });
  }

  if (typeof password !== 'string' || password.length === 0) {
    return json({ errors: { email: null, password: 'Password is required' } }, { status: 400 });
  }

  if (password.length < 8) {
    return json({ errors: { email: null, password: 'Password is too short' } }, { status: 400 });
  }

  const client = new Api();
  // dirt hack to bypass issue when swagger generator make only http client but server require https
  client.baseUrl = 'https://upjob.com/api/v1';
  const signInResult = await client.userService.registrationCreate(fields);
  const sessionCookie = signInResult.headers.get('Set-Cookie')?.split(';').at(0);

  const session = await sessionStorage.getSession();
  session.set('session', sessionCookie);
  const headers: HeadersInit = sessionCookie
    ? { 'Set-Cookie': await sessionStorage.commitSession(session) }
    : {};

  return redirect('/account', {
    status: 302,
    headers,
  });
};

export default function Register() {
  return <RegisterPage />;
}
