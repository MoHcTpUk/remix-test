/* eslint-disable no-return-await */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import type { EntityCommonDictionary } from 'shared/client/data-contracts';
import { Genders } from 'shared/client/Genders';
import { Location } from 'shared/client/Location';
import { Specializations } from 'shared/client/Specializations';

import { BaseReferenceService } from './baseReferenceService';

export default class ReferenceService extends BaseReferenceService {
  // #region Map
  private gendersMapCache: Map<string, EntityCommonDictionary> = new Map();

  private specializationsMapCache: Map<string, EntityCommonDictionary> = new Map();

  private locationMapCache: Map<string, EntityCommonDictionary> = new Map();
  // #endregion

  // #region Clients
  private gendersClient = new Genders();

  private specializationsClient = new Specializations();

  private locationClient = new Location();

  // #endregion

  public get gendersMap(): Promise<Map<string, EntityCommonDictionary>> {
    return (async () =>
      await this.fetchItems(
        this.gendersMapCache,
        async () => await this.gendersClient.gendersList(),
      ))();
  }

  public get specializationsMap(): Promise<Map<string, EntityCommonDictionary>> {
    return (async () =>
      await this.fetchItems(
        this.specializationsMapCache,
        async () => await this.specializationsClient.specializationsList(),
      ))();
  }

  public get locationMap(): Promise<Map<string, EntityCommonDictionary>> {
    return (async () =>
      await this.fetchItems(
        this.locationMapCache,
        async () => await this.locationClient.locationList(),
      ))();
  }
}
