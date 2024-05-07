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

export class LanguageLevel<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description return language levels
   *
   * @tags languages
   * @name LanguageLevelList
   * @request GET:/language-level
   */
  languageLevelList = (params: RequestParams = {}) =>
    this.request<EntityCommonDictionary[], ControllersEmptyResponse>({
      path: `/language-level`,
      method: 'GET',
      format: 'json',
      ...params,
    });
}
