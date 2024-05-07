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
  EntityGetVacanciesResponse,
  EntityProvideAccessToVacancyResponse,
  EntityRequestPersonalDataResponse,
  EntityVacancy,
  InternalControllersErrResponse,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Vacancies<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description return published vacancies
   *
   * @tags vacancy
   * @name VacanciesList
   * @request GET:/vacancies
   */
  vacanciesList = (
    query?: {
      /** show company's vacancies */
      company_id?: string;
      /** 0 [last 24 hours], 1 [last 5 days], 2 [last 14 days], 3 [last month] */
      date_of_post?: 0 | 1 | 2 | 3;
      /** specialization id(s) */
      specialization?: string[];
      /** 657.89 */
      salary_estimate_from?: number;
      /** currency id */
      currency?: string;
      /** employment id(s) */
      employment?: string[];
      /** features id(s) */
      features?: string[];
      /** education level id(s) */
      education_level?: string[];
      /** work experience id(s) */
      work_experience?: string[];
      /** search by job title */
      search_by_job_tile?: string;
      /** search by city */
      search_by_city?: string;
      /** include archived vacancies */
      show_archived?: boolean;
      /** show vacancies created by the current user */
      only_my?: boolean;
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
      EntityGetVacanciesResponse,
      ControllersEmptyResponse | InternalControllersErrResponse
    >({
      path: `/vacancies`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * @description Request by json personal data
   *
   * @tags vacancy
   * @name RequestPersonalDataDetail
   * @summary Request personal data of vacancy
   * @request GET:/vacancies/request-personal-data/{id}
   */
  requestPersonalDataDetail = (
    id: string,
    query: {
      /** en or th */
      locale?: string;
      /** resume id */
      resume_id: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<EntityRequestPersonalDataResponse, void>({
      path: `/vacancies/request-personal-data/${id}`,
      method: 'GET',
      query: query,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description return published or created by current user vacancy
   *
   * @tags vacancy
   * @name VacanciesDetail
   * @request GET:/vacancies/{id}
   */
  vacanciesDetail = (id: string, params: RequestParams = {}) =>
    this.request<EntityVacancy, InternalControllersErrResponse | ControllersEmptyResponse>({
      path: `/vacancies/${id}`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * @description delete vacancy by id
   *
   * @tags vacancy
   * @name VacanciesDelete
   * @request DELETE:/vacancies/{id}
   */
  vacanciesDelete = (id: string, params: RequestParams = {}) =>
    this.request<
      ControllersEmptyResponse,
      InternalControllersErrResponse | ControllersEmptyResponse
    >({
      path: `/vacancies/${id}`,
      method: 'DELETE',
      format: 'json',
      ...params,
    });
  /**
   * @description archive vacancy by id
   *
   * @tags vacancy
   * @name ArchiveCreate
   * @request POST:/vacancies/{id}/archive
   */
  archiveCreate = (id: string, params: RequestParams = {}) =>
    this.request<
      ControllersEmptyResponse,
      InternalControllersErrResponse | ControllersEmptyResponse
    >({
      path: `/vacancies/${id}/archive`,
      method: 'POST',
      format: 'json',
      ...params,
    });
  /**
   * @description Provide by json access
   *
   * @tags vacancy
   * @name ProvideDetail
   * @summary Provide access to vacancy
   * @request GET:/vacancies/{id}/provide
   */
  provideDetail = (
    id: string,
    query: {
      /** user id (who want access) */
      user_id: string;
      /** en or th */
      locale?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<EntityProvideAccessToVacancyResponse, void>({
      path: `/vacancies/${id}/provide`,
      method: 'GET',
      query: query,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description publish vacancy by id
   *
   * @tags vacancy
   * @name PublishCreate
   * @request POST:/vacancies/{id}/publish
   */
  publishCreate = (id: string, params: RequestParams = {}) =>
    this.request<
      ControllersEmptyResponse,
      InternalControllersErrResponse | ControllersEmptyResponse
    >({
      path: `/vacancies/${id}/publish`,
      method: 'POST',
      format: 'json',
      ...params,
    });
  /**
   * @description unarchive vacancy by id
   *
   * @tags vacancy
   * @name UnarchiveCreate
   * @request POST:/vacancies/{id}/unarchive
   */
  unarchiveCreate = (id: string, params: RequestParams = {}) =>
    this.request<
      ControllersEmptyResponse,
      InternalControllersErrResponse | ControllersEmptyResponse
    >({
      path: `/vacancies/${id}/unarchive`,
      method: 'POST',
      format: 'json',
      ...params,
    });
  /**
   * @description unpublish vacancy by id
   *
   * @tags vacancy
   * @name UnpublishCreate
   * @request POST:/vacancies/{id}/unpublish
   */
  unpublishCreate = (id: string, params: RequestParams = {}) =>
    this.request<
      ControllersEmptyResponse,
      InternalControllersErrResponse | ControllersEmptyResponse
    >({
      path: `/vacancies/${id}/unpublish`,
      method: 'POST',
      format: 'json',
      ...params,
    });
}
