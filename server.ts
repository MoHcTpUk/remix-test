/* eslint-disable @typescript-eslint/no-explicit-any */
import { createPagesFunctionHandler } from '@remix-run/cloudflare-pages';
import * as build from '@remix-run/dev/server-build';

import ReferenceService from '~/services/reference/referenceService';
import { getSessionStorage } from '~/storages/session.server';
import { getUserContextStorage } from '~/storages/userContext.server';

const referenceService = new ReferenceService();

export async function onRequest(context: EventContext<any, any, any>) {
  const userContext = await getUserContextStorage(context.request);
  const session = await getSessionStorage(context.request);

  const handleRequest = createPagesFunctionHandler({
    build,
    mode: process.env.NODE_ENV,
    getLoadContext(context) {
      return {
        env: context.env,
        userContext: userContext.getUserContext(),
        session: session.getSession(),
        references: referenceService,
      };
    },
  });

  const response = await handleRequest(context);

  return response;
}
