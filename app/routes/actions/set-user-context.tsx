import type { ActionFunction, LoaderFunction } from '@remix-run/cloudflare';
import { json, redirect } from '@remix-run/cloudflare';
import { isUserContext } from 'public/interfaces/iUserContext';

import { getUserContextStorage } from '~/storages/userContext.server';

export const action: ActionFunction = async ({ request }) => {
  const userContextSession = await getUserContextStorage(request);
  const form = await request.clone().formData();
  const contextRaw = form.get('context');
  const userContext: unknown = JSON.parse(contextRaw?.toString() ?? '');

  if (!isUserContext(userContext)) {
    return json({
      success: false,
      message: `UserContext value of ${contextRaw?.toString() ?? ''} is not a valid UserContext`,
    });
  }

  userContextSession.setUserContext(userContext);
  return json({ success: true }, { headers: { 'Set-Cookie': await userContextSession.commit() } });
};

export const loader: LoaderFunction = () => redirect('/', { status: 404 });
