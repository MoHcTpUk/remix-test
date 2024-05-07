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

import { Dictionary, Location, LocationID } from './dictionary-contracts';
import { HttpClient, RequestParams } from './http-client-v2';

export class DictionaryApi<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Request to get location
   *
   * @tags dictionary
   * @name GetLocation
   * @summary Get location (city)
   * @request GET:/api/v2/locations/{id}
   */
  getLocation = (id: LocationID, params: RequestParams = {}) =>
    this.request<Location, any>({
      path: `/api/v2/locations/${id}`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * @description Request to get list of company specializations
   *
   * @tags dictionary
   * @name GetCompanySpecializations
   * @summary Get company specializations
   * @request GET:/api/v2/company-specializations
   */
  getCompanySpecializations = (params: RequestParams = {}) =>
    this.request<Dictionary, any>({
      path: `/api/v2/company-specializations`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * @description Request to get list of languages of notify
   *
   * @tags dictionary
   * @name GetLanguagesOfNotify
   * @summary Get languages of notify
   * @request GET:/api/v2/languages-of-notify
   */
  getLanguagesOfNotify = (params: RequestParams = {}) =>
    this.request<Dictionary, any>({
      path: `/api/v2/languages-of-notify`,
      method: 'GET',
      format: 'json',
      ...params,
    });
}
