import { createCookieSessionStorage, redirect } from '@remix-run/cloudflare';
import { apiCall } from './apiCall';

const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: 'session',
  },
});

export async function getSession(request: Request) {
  const cookie = request.headers.get('Cookie');
  return sessionStorage.getSession(cookie);
}

// export async function requireSession(
//   request: Request,
//   redirectTo: string = new URL(request.url).pathname,
// ) {
//   const cookies = await getSession(request);
//   const session = cookies.get('session');
//   if (!session || typeof session !== 'string') {
//     const searchParams = new URLSearchParams([['redirectTo', redirectTo]]);
//     throw redirect(`/?${searchParams}`);
//   }
//   return session;
// }

export async function getUser(request: Request) {
  try {
    const user = await apiCall('https://upjob.com/api/v1/user-service/info');
    return user;
  } catch {
    throw logout(request);
  }
}

export async function logout(request: Request) {
  const session = await getSession(request);
  return redirect('/login', {
    headers: {
      'Set-Cookie': await sessionStorage.destroySession(session),
    },
  });
}
