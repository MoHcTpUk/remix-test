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

import {
  ControllersEmptyResponse,
  InternalServicesModelsSourceOfInformation,
} from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class SourceOfInformation<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description return source of information
   *
   * @tags source-of-information
   * @name SourceOfInformationList
   * @request GET:/source_of_information
   */
  sourceOfInformationList = (params: RequestParams = {}) =>
    this.request<InternalServicesModelsSourceOfInformation[], ControllersEmptyResponse>({
      path: `/source_of_information`,
      method: 'GET',
      format: 'json',
      ...params,
    });
}
