/* tslint:disable */
/* eslint-disable */
import type { ISession } from '~/storages/session.server';
import { API_BASE } from '~/utils/constants';

import type { BaseAPI, FetchParams, RequestContext } from './v2/runtime';
import { Configuration } from './v2/runtime';

export class ClientFactory {
  static createClient<TClient extends BaseAPI>(
    type: new (configuration: Configuration) => TClient,
    session?: ISession,
  ) {
    const authToken = session?.session?.split(';').at(0);

    const authMiddleware = async (req: RequestContext): Promise<FetchParams> => {
      console.log('req', req);
      console.log('authToken', authToken);

      return Promise.resolve({
        ...req,
        init: {
          ...req.init,
          headers: {
            ...(req.init.headers || {}),
            Cookie: authToken || '',
          },
        },
      });
    };

    const clientInstance = new type(new Configuration({ basePath: API_BASE }));

    return clientInstance.withPreMiddleware(authMiddleware);
  }
}
