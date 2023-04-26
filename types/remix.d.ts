import '@remix-run/node';

import type { DataFunctionArgs } from '@remix-run/cloudflare';
import type { IUserContext } from 'public/interfaces/iUserContext';

import type ReferenceService from '~/services/reference/referenceService';
import type { ISession } from '~/storages/session.server';

declare module '@remix-run/cloudflare' {
  export interface LoaderArgs extends DataFunctionArgs {
    context: { userContext: IUserContext; session: ISession; references: ReferenceService };
  }

  export interface ActionArgs extends DataFunctionArgs {
    context: { userContext: IUserContext; session: ISession; references: ReferenceService };
  }
}
