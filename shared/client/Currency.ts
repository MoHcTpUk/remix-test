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

export class Currency<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description return currencies
   *
   * @tags dictionaries
   * @name CurrencyList
   * @request GET:/currency
   */
  currencyList = (params: RequestParams = {}) =>
    this.request<EntityCommonDictionary[], ControllersEmptyResponse>({
      path: `/currency`,
      method: 'GET',
      format: 'json',
      ...params,
    });
}
