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

export class Relocations<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description return relocations
   *
   * @tags dictionaries
   * @name RelocationsList
   * @request GET:/relocations
   */
  relocationsList = (params: RequestParams = {}) =>
    this.request<EntityCommonDictionary[], ControllersEmptyResponse>({
      path: `/relocations`,
      method: 'GET',
      format: 'json',
      ...params,
    });
}
