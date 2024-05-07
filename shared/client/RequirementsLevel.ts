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

export class RequirementsLevel<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description return dictionary for show requirements level
   *
   * @tags dictionaries
   * @name RequirementsLevelList
   * @request GET:/requirements-level
   */
  requirementsLevelList = (params: RequestParams = {}) =>
    this.request<EntityCommonDictionary[], ControllersEmptyResponse>({
      path: `/requirements-level`,
      method: 'GET',
      format: 'json',
      ...params,
    });
}
