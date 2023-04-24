/* eslint-disable no-return-await */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import type { EntityCommonDictionary } from 'shared/client/data-contracts';
import { Genders } from 'shared/client/Genders';

import { BaseReferenceService } from './baseReferenceService';

export default class ReferenceService extends BaseReferenceService {
  // #region Map
  private gendersMapCache: Map<string, EntityCommonDictionary> = new Map();

  // #endregion

  // #region Clients
  private gendersClient = new Genders();

  // #endregion

  public get gendersMap(): Promise<Map<string, EntityCommonDictionary>> {
    return (async () =>
      await this.fetchItems(
        this.gendersMapCache,
        async () => await this.gendersClient.gendersList(),
      ))();
  }
}
