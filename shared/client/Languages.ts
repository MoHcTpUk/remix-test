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

export class Languages<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description return languages
   *
   * @tags languages
   * @name LanguagesList
   * @request GET:/languages
   */
  languagesList = (params: RequestParams = {}) =>
    this.request<EntityCommonDictionary[], ControllersEmptyResponse>({
      path: `/languages`,
      method: 'GET',
      format: 'json',
      ...params,
    });
}
