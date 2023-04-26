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
  EntityCompany,
  EntityCreateCompanyRequest,
  EntityGetCompaniesResponse,
  InternalControllersErrResponse,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Companies<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description return companies
   *
   * @tags companies
   * @name CompaniesList
   * @request GET:/companies
   */
  companiesList = (
    query?: {
      /** show companies created by the current user */
      only_my?: boolean;
      /** show companies on main page */
      on_main_page?: boolean;
      /** search by company name & city */
      search_text?: string;
      /**
       * minimum value: 0, maximum value: 100
       * @min 0
       * @max 100
       * @default 10
       */
      limit?: number;
      /**
       * default value: 0
       * @default 0
       */
      offset?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      EntityGetCompaniesResponse,
      ControllersEmptyResponse | InternalControllersErrResponse
    >({
      path: `/companies`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * @description create company
   *
   * @tags companies
   * @name CompaniesCreate
   * @request POST:/companies
   */
  companiesCreate = (request: EntityCreateCompanyRequest, params: RequestParams = {}) =>
    this.request<EntityCompany, InternalControllersErrResponse | ControllersEmptyResponse>({
      path: `/companies`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description return company by id
   *
   * @tags companies
   * @name CompaniesDetail
   * @request GET:/companies/{id}
   */
  companiesDetail = (id: string, params: RequestParams = {}) =>
    this.request<EntityCompany, InternalControllersErrResponse | ControllersEmptyResponse>({
      path: `/companies/${id}`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * @description delete company by id
   *
   * @tags companies
   * @name CompaniesDelete
   * @request DELETE:/companies/{id}
   */
  companiesDelete = (id: string, params: RequestParams = {}) =>
    this.request<
      ControllersEmptyResponse,
      InternalControllersErrResponse | ControllersEmptyResponse
    >({
      path: `/companies/${id}`,
      method: 'DELETE',
      format: 'json',
      ...params,
    });
}
