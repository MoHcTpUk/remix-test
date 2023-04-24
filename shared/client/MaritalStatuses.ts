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

export class MaritalStatuses<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description return marital statuses
   *
   * @tags dictionaries
   * @name MaritalStatusesList
   * @request GET:/marital-statuses
   */
  maritalStatusesList = (params: RequestParams = {}) =>
    this.request<EntityCommonDictionary[], ControllersEmptyResponse>({
      path: `/marital-statuses`,
      method: 'GET',
      format: 'json',
      ...params,
    });
}
