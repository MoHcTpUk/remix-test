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

export class DrivingLicenses<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description return driving licenses
   *
   * @tags dictionaries
   * @name DrivingLicensesList
   * @request GET:/driving-licenses
   */
  drivingLicensesList = (params: RequestParams = {}) =>
    this.request<EntityCommonDictionary[], ControllersEmptyResponse>({
      path: `/driving-licenses`,
      method: 'GET',
      format: 'json',
      ...params,
    });
}
