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

import { Company, CompanyID, NumberOfEmployeesID, SpecializationID } from './companies-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client-v2';

export class CompaniesV2<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Request to get companies
   *
   * @tags Companies
   * @name GetCompanies
   * @summary Get companies
   * @request GET:/api/v2/companies
   * @secure
   */
  getCompanies = (
    query?: {
      max_page_size?: number;
      pages?: number[];
      page_token?: string;
      specializations?: SpecializationID[];
      number_of_employees?: NumberOfEmployeesID[];
      number_of_vacancies?: number;
      name?: string;
      location?: string;
      only_my?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<{ data: Company[]; page_tokens?: string[]; max_pages: number }, any>({
      path: `/api/v2/companies`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Request to create new company
   *
   * @tags Companies
   * @name PostCompanies
   * @summary Create company
   * @request POST:/api/v2/companies
   * @secure
   */
  postCompanies = (data?: Company, query?: { source?: CompanyID }, params: RequestParams = {}) =>
    this.request<Company, any>({
      path: `/api/v2/companies`,
      method: 'POST',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Request to get company
   *
   * @tags Companies
   * @name GetCompany
   * @summary Get company
   * @request GET:/api/v2/companies/{id}
   * @secure
   */
  getCompany = (id: CompanyID, params: RequestParams = {}) =>
    this.request<Company, any>({
      path: `/api/v2/companies/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Request to update company info
   *
   * @tags Companies
   * @name PatchCompany
   * @summary Update company
   * @request PATCH:/api/v2/companies/{id}
   * @secure
   */
  patchCompany = (id: CompanyID, data: Company, params: RequestParams = {}) =>
    this.request<Company, any>({
      path: `/api/v2/companies/${id}`,
      method: 'PATCH',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Request to delete company
   *
   * @tags Companies
   * @name DeleteCompany
   * @summary Delete company
   * @request DELETE:/api/v2/companies/{id}
   * @secure
   */
  deleteCompany = (id: CompanyID, params: RequestParams = {}) =>
    this.request<Company, any>({
      path: `/api/v2/companies/${id}`,
      method: 'DELETE',
      secure: true,
      format: 'json',
      ...params,
    });
}
