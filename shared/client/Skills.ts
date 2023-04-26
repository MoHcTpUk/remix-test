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

export class Skills<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description return skills
   *
   * @tags dictionaries
   * @name SkillsList
   * @request GET:/skills
   */
  skillsList = (
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
      path: `/skills`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
}
