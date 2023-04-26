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

import { ControllersEmptyResponse, InternalServicesModelsEmployee } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Employee<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description return number of employees
   *
   * @tags dictionaries
   * @name NumbersList
   * @request GET:/employee/numbers
   */
  numbersList = (params: RequestParams = {}) =>
    this.request<InternalServicesModelsEmployee[], ControllersEmptyResponse>({
      path: `/employee/numbers`,
      method: 'GET',
      format: 'json',
      ...params,
    });
}
