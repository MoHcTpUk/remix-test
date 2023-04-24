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

export class EducationLevel<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description return education level
   *
   * @tags dictionaries
   * @name EducationLevelList
   * @request GET:/education-level
   */
  educationLevelList = (params: RequestParams = {}) =>
    this.request<EntityCommonDictionary[], ControllersEmptyResponse>({
      path: `/education-level`,
      method: 'GET',
      format: 'json',
      ...params,
    });
}
