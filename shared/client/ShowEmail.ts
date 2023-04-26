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

export class ShowEmail<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description return dictionary for show email
   *
   * @tags dictionaries
   * @name ShowEmailList
   * @request GET:/show-email
   */
  showEmailList = (params: RequestParams = {}) =>
    this.request<EntityCommonDictionary[], ControllersEmptyResponse>({
      path: `/show-email`,
      method: 'GET',
      format: 'json',
      ...params,
    });
}
