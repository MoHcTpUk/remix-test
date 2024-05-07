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

export class ResponseCanBeDoneBy<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description return dictionary for vacancy (response can be done by)
   *
   * @tags dictionaries
   * @name ResponseCanBeDoneByList
   * @request GET:/response-can-be-done-by
   */
  responseCanBeDoneByList = (params: RequestParams = {}) =>
    this.request<EntityCommonDictionary[], ControllersEmptyResponse>({
      path: `/response-can-be-done-by`,
      method: 'GET',
      format: 'json',
      ...params,
    });
}
