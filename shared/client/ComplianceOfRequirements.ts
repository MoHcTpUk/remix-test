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

export class ComplianceOfRequirements<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description return dictionary for compliance of requirements
   *
   * @tags dictionaries
   * @name ComplianceOfRequirementsList
   * @request GET:/compliance-of-requirements
   */
  complianceOfRequirementsList = (params: RequestParams = {}) =>
    this.request<EntityCommonDictionary[], ControllersEmptyResponse>({
      path: `/compliance-of-requirements`,
      method: 'GET',
      format: 'json',
      ...params,
    });
}
