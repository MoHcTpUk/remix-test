import type { ActionArgs } from '@remix-run/cloudflare';
import { redirect } from '@remix-run/cloudflare';
import type { EntitySignInRequest } from 'shared/client';
import { Api } from 'shared/client';
import { badRequest, } from '~/utils/request.server';

function validateEmail(email: unknown) {
  if (typeof email !== 'string' || email.length < 3 || !email.includes('@')) {
    return `Usernames must be at least 3 characters long`;
  }
}

function validatePassword(password: unknown) {
  if (typeof password !== 'string' || password.length < 6) {
    return `Passwords must be at least 6 characters long`;
  }
}

export const action = async ({ request }: ActionArgs) => {
  const form = await request.formData();
  const email = form.get('email')?.toString();
  const password = form.get('password')?.toString();

  if (typeof email !== 'string' || typeof password !== 'string') {
    return badRequest({
      fieldErrors: null,
      fields: null,
      formError: `Form not submitted correctly.`,
    });
  }

  // const fieldErrors = {
  //   email: validateEmail(email),
  //   password: validatePassword(password),
  // };

  // if (Object.values(fieldErrors).some(Boolean)) {
  //   return badRequest({ fieldErrors, fields, formError: null });
  // }

  const creds: EntitySignInRequest = { email, password };

  try {
    const client = new Api()
    // dirt hack to bypass issue when swagger generator make only http client but server require https
    client.baseUrl = 'https://upjob.com/api/v1'
    const signInResult = await client.userService.loginCreate(creds)
    const sessionCookie = signInResult.headers.get('Set-Cookie');
    const headers: HeadersInit = sessionCookie ? { 'Set-Cookie': sessionCookie } : {};

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
