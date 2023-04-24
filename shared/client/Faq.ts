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

import { ControllersEmptyResponse, EntityFaq } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Faq<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description returns questions for the question page
   *
   * @tags faq
   * @name GetFaq
   * @request GET:/faq
   */
  getFaq = (
    query?: {
      /**
       * minimum value: 0, maximum value: 100
       * @min 0
       * @max 100
       * @default 10
       */
      limit?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<EntityFaq[], ControllersEmptyResponse>({
      path: `/faq`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
}
