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

export class Religions<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description return religions
   *
   * @tags dictionaries
   * @name ReligionsList
   * @request GET:/religions
   */
  religionsList = (params: RequestParams = {}) =>
    this.request<EntityCommonDictionary[], ControllersEmptyResponse>({
      path: `/religions`,
      method: 'GET',
      format: 'json',
      ...params,
    });
}
