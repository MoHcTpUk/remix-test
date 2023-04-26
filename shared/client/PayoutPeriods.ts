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

export class PayoutPeriods<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description return payout periods
   *
   * @tags dictionaries
   * @name PayoutPeriodsList
   * @request GET:/payout-periods
   */
  payoutPeriodsList = (params: RequestParams = {}) =>
    this.request<EntityCommonDictionary[], ControllersEmptyResponse>({
      path: `/payout-periods`,
      method: 'GET',
      format: 'json',
      ...params,
    });
}
