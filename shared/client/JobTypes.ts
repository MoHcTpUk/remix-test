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

export class JobTypes<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description return job types
   *
   * @tags dictionaries
   * @name JobTypesList
   * @request GET:/job-types
   */
  jobTypesList = (params: RequestParams = {}) =>
    this.request<EntityCommonDictionary[], ControllersEmptyResponse>({
      path: `/job-types`,
      method: 'GET',
      format: 'json',
      ...params,
    });
}
