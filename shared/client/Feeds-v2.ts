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

import { GetFeedsResponse } from './feeds-contracts';
import { HttpClient, RequestParams } from './http-client-v2';

export class Feeds<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Returns all feeds
   *
   * @name GetFeeds
   * @summary Returns all feeds
   * @request GET:/api/v2/feeds
   */
  getFeeds = (params: RequestParams = {}) =>
    this.request<GetFeedsResponse, any>({
      path: `/api/v2/feeds`,
      method: 'GET',
      format: 'json',
      ...params,
    });
}
