import { ActionArgs, json, redirect } from '@remix-run/cloudflare';
import { badRequest } from '~/utils/request.server';

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
  const email = form.get('email');
  const password = form.get('password');
  const fields = { email, password };

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
    return badRequest({ fieldErrors, fields, formError: null });
  }

  try {
    // добавить в env process.env.BASE_HOST
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    const requestOptions: Request | RequestInit | undefined = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(fields),
      redirect: 'follow',
    };

    const data = await fetch(`https://upjob.com/api/v1/user-service/login`, requestOptions);

    const sessionCookie = data.headers.get('Set-Cookie');
    const headers: HeadersInit = sessionCookie ? { 'Set-Cookie': sessionCookie } : {};
    return redirect('/account', {
      status: 302,
      headers,
    });
  } catch (error) {
    return badRequest({
      fieldErrors: null,
      fields,
      formError: `Username/Password combination is incorrect`,
    });
  }
};
