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

export class Location<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description return locations
   *
   * @tags countries
   * @name LocationList
   * @request GET:/location
   */
  locationList = (
    query?: {
      /** title */
      title?: string;
      /** id or ids */
      ids?: string[];
    },
    params: RequestParams = {},
  ) =>
    this.request<
      EntityCommonDictionary[],
      InternalControllersErrResponse | ControllersEmptyResponse
    >({
      path: `/location`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
}
