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

import { Vacancy, VacancyID } from './vacancies-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client-v2';

export class VacanciesV2<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Request to get vacancies
   *
   * @tags Vacancies
   * @name GetVacancies
   * @summary Get vacancies
   * @request GET:/api/v2/vacancies
   * @secure
   */
  getVacancies = (query?: { only_my?: boolean }, params: RequestParams = {}) =>
    this.request<{ data: Vacancy[]; page_tokens?: string[]; max_pages: number }, any>({
      path: `/api/v2/vacancies`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Request to create new vacancy
   *
   * @tags Vacancies
   * @name PostVacancies
   * @summary Create vacancy
   * @request POST:/api/v2/vacancies
   * @secure
   */
  postVacancies = (data?: Vacancy, query?: { source?: VacancyID }, params: RequestParams = {}) =>
    this.request<Vacancy, any>({
      path: `/api/v2/vacancies`,
      method: 'POST',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Request to get vacancy
   *
   * @tags Vacancies
   * @name GetVacancy
   * @summary Get vacancy
   * @request GET:/api/v2/vacancies/{id}
   * @secure
   */
  getVacancy = (id: VacancyID, params: RequestParams = {}) =>
    this.request<Vacancy, any>({
      path: `/api/v2/vacancies/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Request to update vacancy info
   *
   * @tags Vacancies
   * @name PatchVacancy
   * @summary Update vacancy
   * @request PATCH:/api/v2/vacancies/{id}
   * @secure
   */
  patchVacancy = (id: VacancyID, data: Vacancy, params: RequestParams = {}) =>
    this.request<Vacancy, any>({
      path: `/api/v2/vacancies/${id}`,
      method: 'PATCH',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Request to delete vacancy
   *
   * @tags Vacancies
   * @name DeleteVacancy
   * @summary Delete vacancy
   * @request DELETE:/api/v2/vacancies/{id}
   * @secure
   */
  deleteVacancy = (id: VacancyID, params: RequestParams = {}) =>
    this.request<Vacancy, any>({
      path: `/api/v2/vacancies/${id}`,
      method: 'DELETE',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Requests access to hidden fields
   *
   * @tags Vacancies
   * @name PostVacanciesAccess
   * @summary Request Access
   * @request POST:/api/v2/vacancies/{id}/access
   * @secure
   */
  postVacanciesAccess = (id: VacancyID, params: RequestParams = {}) =>
    this.request<Vacancy, any>({
      path: `/api/v2/vacancies/${id}/access`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    });
}
