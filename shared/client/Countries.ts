/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { ControllersEmptyResponse, EntityCommonDictionary } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Countries<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description return countries
   *
   * @tags countries
   * @name CountriesList
   * @request GET:/countries
   */
  countriesList = (params: RequestParams = {}) =>
    this.request<EntityCommonDictionary[], ControllersEmptyResponse>({
      path: `/countries`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * @description return regions
   *
   * @tags countries
   * @name RegionsDetail
   * @request GET:/countries/{country_id}/regions
   */
  regionsDetail = (countryId: string, params: RequestParams = {}) =>
    this.request<EntityCommonDictionary[], ControllersEmptyResponse>({
      path: `/countries/${countryId}/regions`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * @description return locations
   *
   * @tags countries
   * @name RegionsLocationDetail
   * @request GET:/countries/{country_id}/regions/{region_id}/location
   */
  regionsLocationDetail = (countryId: string, regionId: string, params: RequestParams = {}) =>
    this.request<EntityCommonDictionary[], ControllersEmptyResponse>({
      path: `/countries/${countryId}/regions/${regionId}/location`,
      method: 'GET',
      format: 'json',
      ...params,
    });
}
