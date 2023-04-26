import { createCookieSessionStorage } from '@remix-run/cloudflare';
import type { IUserContext } from 'public/interfaces/iUserContext';
import { isUserContext } from 'public/interfaces/iUserContext';

import { defaultUserContext } from '../../public/defaultUserContext';

interface IUserContextSessions {
  getUserContext: () => IUserContext;
  setUserContext: (userContext: IUserContext) => void;
  commit: () => Promise<string>;
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
      const rawSession = session.get(SESSION_NAME) as string;

      if (!rawSession) return defaultUserContext();

      const userContext = JSON.parse(rawSession) as string;
      return isUserContext(userContext) ? (userContext as IUserContext) : defaultUserContext();
    },
    setUserContext: (userContext: IUserContext) =>
      session.set(SESSION_NAME, JSON.stringify(userContext)),
    commit: () => userContextStorage.commitSession(session),
  };
}

export { getUserContextStorage, SESSION_NAME };
export type { IUserContextSessions };
