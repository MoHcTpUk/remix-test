import type { TypedResponse } from '@remix-run/cloudflare';
import { createCookieSessionStorage, redirect } from '@remix-run/cloudflare';

interface ISession {
  session: string | null;
}

interface ISessionStorage {
  getSession: () => ISession;
  setSession: (session: ISession) => void;
  commit: () => Promise<string>;
  logout: () => Promise<TypedResponse<never>>;
}

// TODO: Security - add cookie secrets

// const sessionSecret = process.env.SESSION_SECRET;
// if (!sessionSecret) {
//   throw new Error('SESSION_SECRET must be set');
// }

const SESSION_NAME = 'sessionStorage';

const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: SESSION_NAME,
    secure: true,
    sameSite: 'lax',
    path: '/',
    httpOnly: true,
  },
});

async function getSessionStorage(request: Request): Promise<ISessionStorage> {
  const session = await sessionStorage.getSession(request.headers.get('Cookie'));
  return {
    getSession: () => {
      const rawSession = session.get(SESSION_NAME) as string;

      if (!rawSession) return { session: null };

      const sessionValue = JSON.parse(rawSession) as ISession;
      return sessionValue || { session: null };
    },
    setSession: (userContext: ISession) => session.set(SESSION_NAME, JSON.stringify(userContext)),
    commit: () => sessionStorage.commitSession(session),
    logout: async () =>
      redirect('/login', {
        headers: {
          'Set-Cookie': await sessionStorage.destroySession(session),
        },
      }),
  };
}

export { getSessionStorage, SESSION_NAME };
export type { ISession, ISessionStorage };
