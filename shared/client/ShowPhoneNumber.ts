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

export class ShowPhoneNumber<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description return dictionary for show phone number
   *
   * @tags dictionaries
   * @name ShowPhoneNumberList
   * @request GET:/show-phone-number
   */
  showPhoneNumberList = (params: RequestParams = {}) =>
    this.request<EntityCommonDictionary[], ControllersEmptyResponse>({
      path: `/show-phone-number`,
      method: 'GET',
      format: 'json',
      ...params,
    });
}
