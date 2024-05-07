import { createCookieSessionStorage } from '@remix-run/cloudflare';

import type { IUserContext } from '~/types/interfaces/iUserContext';
import { isUserContext } from '~/types/interfaces/iUserContext';

import { defaultUserContext } from '../../public/defaultUserContext';

interface IUserContextSessions {
  getUserContext: () => IUserContext;
  setUserContext: (userContext: IUserContext) => void;
  commit: () => Promise<string>;
  logout: () => Promise<string>;
}

// TODO: Security - add cookie secrets

// const sessionSecret = process.env.SESSION_SECRET;
// if (!sessionSecret) {
//   throw new Error('SESSION_SECRET must be set');
// }

const SESSION_NAME = 'userContext';

const userContextStorage = createCookieSessionStorage({
  cookie: {
    name: 'user_context',
    secure: true,
    expires: new Date(Date.now() + 60_000),
    maxAge: 60 * 60 * 24 * 30,
    // secrets: [sessionSecret],
    sameSite: 'lax',
    path: '/',
    httpOnly: true,
  },
});

async function getUserContextStorage(request: Request): Promise<IUserContextSessions> {
  const session = await userContextStorage.getSession(request.headers.get('Cookie'));
  return {
    getUserContext: () => {
      const rawSession = session.get(SESSION_NAME);

      if (!rawSession) return defaultUserContext();

      const userContext: IUserContext = JSON.parse(rawSession);
      return isUserContext(userContext) ? userContext : defaultUserContext();
    },
    setUserContext: (userContext: IUserContext) =>
      session.set(SESSION_NAME, JSON.stringify(userContext)),
    commit: () => userContextStorage.commitSession(session),
    logout: () => userContextStorage.destroySession(session),
  };
}

export { getUserContextStorage, SESSION_NAME };
export type { IUserContextSessions };
