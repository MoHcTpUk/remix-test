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
  EntityGetResumesResponse,
  EntityProvideAccessToResumeRequest,
  EntityRequestPersonalDataResponse,
  EntityResume,
  InternalControllersErrResponse,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Resumes<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description return published resumes
   *
   * @tags resume
   * @name ResumesList
   * @request GET:/resumes
   */
  resumesList = (
    query?: {
      /** 0 [last 24 hours], 1 [last 5 days], 2 [last 14 days], 3 [last month] */
      date_of_post?: 0 | 1 | 2 | 3;
      /** 657.89 */
      salary_estimate_to?: number;
      /** specialization id(s) */
      specialization?: string[];
      /** currency id */
      currency?: string;
      /** employment id(s) */
      employment?: string[];
      /** features id(s) */
      features?: string[];
      /** education level id(s) */
      education_level?: string[];
      /** search by job title */
      search_by_job_tile?: string;
      /** search by city */
      search_by_city?: string;
      /** show resumes created by the current user */
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
      EntityGetResumesResponse,
      InternalControllersErrResponse | ControllersEmptyResponse
    >({
      path: `/resumes`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * @description Request by json personal data
   *
   * @tags resume
   * @name RequestPersonalDataDetail
   * @summary Request personal data of resume
   * @request GET:/resumes/request-personal-data/{id}
   */
  requestPersonalDataDetail = (
    id: string,
    query: {
      /** en or th */
      locale?: string;
      /** vacancy id */
      vacancy_id: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<EntityRequestPersonalDataResponse, void>({
      path: `/resumes/request-personal-data/${id}`,
      method: 'GET',
      query: query,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description return published or created by current user resume
   *
   * @tags resume
   * @name ResumesDetail
   * @request GET:/resumes/{id}
   */
  resumesDetail = (id: string, params: RequestParams = {}) =>
    this.request<EntityResume, InternalControllersErrResponse | ControllersEmptyResponse>({
      path: `/resumes/${id}`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * @description delete resume by id
   *
   * @tags resume
   * @name ResumesDelete
   * @request DELETE:/resumes/{id}
   */
  resumesDelete = (id: string, params: RequestParams = {}) =>
    this.request<
      ControllersEmptyResponse,
      InternalControllersErrResponse | ControllersEmptyResponse
    >({
      path: `/resumes/${id}`,
      method: 'DELETE',
      format: 'json',
      ...params,
    });
  /**
   * @description copy resume
   *
   * @tags resume
   * @name CopyCreate
   * @request POST:/resumes/{id}/copy
   */
  copyCreate = (id: string, params: RequestParams = {}) =>
    this.request<EntityResume, InternalControllersErrResponse | ControllersEmptyResponse>({
      path: `/resumes/${id}/copy`,
      method: 'POST',
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Provide by json access
   *
   * @tags resume
   * @name ProvideDetail
   * @summary Provide access to resume
   * @request GET:/resumes/{id}/provide
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
    this.request<EntityProvideAccessToResumeRequest, void>({
      path: `/resumes/${id}/provide`,
      method: 'GET',
      query: query,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description publish resume by id
   *
   * @tags resume
   * @name PublishCreate
   * @request POST:/resumes/{id}/publish
   */
  publishCreate = (id: string, params: RequestParams = {}) =>
    this.request<EntityResume, InternalControllersErrResponse | ControllersEmptyResponse>({
      path: `/resumes/${id}/publish`,
      method: 'POST',
      format: 'json',
      ...params,
    });
  /**
   * @description unpublish resume by id
   *
   * @tags resume
   * @name UnpublishCreate
   * @request POST:/resumes/{id}/unpublish
   */
  unpublishCreate = (id: string, params: RequestParams = {}) =>
    this.request<EntityResume, InternalControllersErrResponse | ControllersEmptyResponse>({
      path: `/resumes/${id}/unpublish`,
      method: 'POST',
      format: 'json',
      ...params,
    });
}
