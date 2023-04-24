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

export class WorkFeatures<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description return work features
   *
   * @tags dictionaries
   * @name WorkFeaturesList
   * @request GET:/work-features
   */
  workFeaturesList = (params: RequestParams = {}) =>
    this.request<EntityCommonDictionary[], ControllersEmptyResponse>({
      path: `/work-features`,
      method: 'GET',
      format: 'json',
      ...params,
    });
}
