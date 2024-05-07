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

export class Genders<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description return genders
   *
   * @tags dictionaries
   * @name GendersList
   * @request GET:/genders
   */
  gendersList = (params: RequestParams = {}) =>
    this.request<EntityCommonDictionary[], ControllersEmptyResponse>({
      path: `/genders`,
      method: 'GET',
      format: 'json',
      ...params,
    });
}
