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

import { EntityMainPageResponse } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Init<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description get main page feed
   *
   * @tags init
   * @name IndexList
   * @summary Main page feed
   * @request GET:/init/index
   */
  indexList = (params: RequestParams = {}) =>
    this.request<EntityMainPageResponse, any>({
      path: `/init/index`,
      method: 'GET',
      format: 'json',
      ...params,
    });
}
