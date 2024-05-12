import '@remix-run/node';

import type { DataFunctionArgs } from '@remix-run/cloudflare';

import type ReferenceService from '~/services/reference/referenceService';
import type { ISession } from '~/storages/session.server';
import type { IUserContext } from '~/types/interfaces/iUserContext';

declare module '@remix-run/cloudflare' {
  export interface LoaderArgs extends DataFunctionArgs {
    context: { userContext: IUserContext; session: ISession; references: ReferenceService };
  }

  export interface ActionArgs extends DataFunctionArgs {
    context: { userContext: IUserContext; session: ISession; references: ReferenceService };
  }
}
