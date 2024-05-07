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

export class Employments<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description return employments
   *
   * @tags dictionaries
   * @name EmploymentsList
   * @request GET:/employments
   */
  employmentsList = (params: RequestParams = {}) =>
    this.request<EntityCommonDictionary[], ControllersEmptyResponse>({
      path: `/employments`,
      method: 'GET',
      format: 'json',
      ...params,
    });
}
