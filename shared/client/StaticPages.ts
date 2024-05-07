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

import { ControllersEmptyResponse, EntityStaticPage } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class StaticPages<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description return static page by urn
   *
   * @tags static-pages
   * @name StaticPagesDetail
   * @request GET:/static-pages/{urn}
   */
  staticPagesDetail = (urn: string, params: RequestParams = {}) =>
    this.request<EntityStaticPage, ControllersEmptyResponse>({
      path: `/static-pages/${urn}`,
      method: 'GET',
      format: 'json',
      ...params,
    });
}
