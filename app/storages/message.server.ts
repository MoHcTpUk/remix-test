import type { Session } from '@remix-run/cloudflare';
import { createCookieSessionStorage } from '@remix-run/cloudflare';

import type { MessageEnum } from '~/types/enums/messageEnum';

export type ToastMessage = { message: string; title: string; type: MessageEnum };

const SESSION_NAME = 'messageContext';

interface IMessageContextSessions {
  setSuccessMessage: (message?: string, title?: string) => void;
  setErrorMessage: (message?: string, title?: string) => void;
  commit: () => Promise<string>;
  logout: () => Promise<string>;
  get: () => ToastMessage;
}

export const messageContextStorage = createCookieSessionStorage({
  cookie: {
    name: '__message',
    path: '/',
    httpOnly: true,
    sameSite: 'lax',
    secure: true,
    expires: new Date(Date.now() + 60_000),
    maxAge: 60 * 60 * 24 * 30,
  },
});

async function getMessageContext(request: Request): Promise<IMessageContextSessions> {
  const session = await messageContextStorage.getSession(request.headers.get('Cookie'));
  return {
    setSuccessMessage: (message?: string, title?: string) =>
      session.flash('toastMessage', { message, title, type: 'success' } as ToastMessage),
    setErrorMessage: (message?: string, title?: string) =>
      session.flash('toastMessage', { message, title, type: 'error' } as ToastMessage),
    commit: () => messageContextStorage.commitSession(session),
    logout: () => messageContextStorage.destroySession(session),
    get: () => session.get('toastMessage') as ToastMessage,
  };
}

export function setSuccessMessage(session: Session, message: string, title: string) {
  session.flash('toastMessage', { message, title, type: 'success' } as ToastMessage);
}

export function setErrorMessage(session: Session, message: string, title: string) {
  session.flash('toastMessage', { message, title, type: 'error' } as ToastMessage);
}

export { getMessageContext, SESSION_NAME };
export type { IMessageContextSessions };
