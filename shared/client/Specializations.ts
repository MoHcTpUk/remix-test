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
  EntityCommonDictionary,
  InternalControllersErrResponse,
} from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Specializations<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description return specializations
   *
   * @tags dictionaries
   * @name SpecializationsList
   * @request GET:/specializations
   */
  specializationsList = (
    query?: {
      /** title */
      title?: string;
      /** id or ids */
      ids?: string[];
    },
    params: RequestParams = {},
  ) =>
    this.request<EntityCommonDictionary[], ControllersEmptyResponse>({
      path: `/specializations`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * @description return job positions for chosen specializations
   *
   * @tags dictionaries
   * @name JobPositionsDetail
   * @request GET:/specializations/{specialization_id}/job-positions
   */
  jobPositionsDetail = (
    specializationId: string,
    query?: {
      /** title */
      title?: string;
      /** position id or ids */
      position_ids?: string[];
    },
    params: RequestParams = {},
  ) =>
    this.request<
      EntityCommonDictionary[],
      InternalControllersErrResponse | ControllersEmptyResponse
    >({
      path: `/specializations/${specializationId}/job-positions`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
}
