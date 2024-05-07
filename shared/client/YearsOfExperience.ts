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

export class YearsOfExperience<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description return education level
   *
   * @tags dictionaries
   * @name YearsOfExperienceList
   * @request GET:/years-of-experience
   */
  yearsOfExperienceList = (params: RequestParams = {}) =>
    this.request<EntityCommonDictionary[], ControllersEmptyResponse>({
      path: `/years-of-experience`,
      method: 'GET',
      format: 'json',
      ...params,
    });
}
