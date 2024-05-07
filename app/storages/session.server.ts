import { createCookieSessionStorage } from '@remix-run/cloudflare';

interface ISession {
  session: string | null;
}

interface ISessionStorage {
  getSession: () => ISession;
  setSession: (session: ISession) => void;
  commit: () => Promise<string>;
  logout: () => Promise<string>;
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
    expires: new Date(Date.now() + 60_000),
    maxAge: 60 * 60 * 24 * 30,
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
    logout: () => sessionStorage.destroySession(session),
  };
}

export { getSessionStorage, SESSION_NAME };
export type { ISession, ISessionStorage };
