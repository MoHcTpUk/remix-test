// app/sessions.js

import { createCookieSessionStorage } from '@remix-run/cloudflare';

const { getSession, commitSession, destroySession } = createCookieSessionStorage({
  // a Cookie from `createCookie` or the CookieOptions to create one
  cookie: {
    name: 'formsStorage',
    httpOnly: true,
    path: '/',
    sameSite: 'lax',
    secure: true,
  },
});

export { commitSession, destroySession, getSession };
