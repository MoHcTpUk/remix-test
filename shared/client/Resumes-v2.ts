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

import { Resume, ResumeID } from './resumes-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client-v2';

export class ResumesV2<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Request to get resumes
   *
   * @tags Resumes
   * @name GetResumes
   * @summary Get resumes
   * @request GET:/api/v2/resumes
   * @secure
   */
  getResumes = (
    query?: { max_page_size?: number; pages?: number[]; page_token?: string; only_my?: boolean },
    params: RequestParams = {},
  ) =>
    this.request<{ data: Resume[]; page_tokens?: string[]; max_pages: number }, any>({
      path: `/api/v2/resumes`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Request to create new resume
   *
   * @tags Resumes
   * @name PostResume
   * @summary Create resume
   * @request POST:/api/v2/resumes
   * @secure
   */
  postResume = (data?: Resume, query?: { source?: ResumeID }, params: RequestParams = {}) =>
    this.request<Resume, any>({
      path: `/api/v2/resumes`,
      method: 'POST',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Request to get resume
   *
   * @tags Resumes
   * @name GetResume
   * @summary Get resume
   * @request GET:/api/v2/resumes/{id}
   * @secure
   */
  getResume = (id: ResumeID, params: RequestParams = {}) =>
    this.request<Resume, any>({
      path: `/api/v2/resumes/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Request to update resume
   *
   * @tags Resumes
   * @name PatchResume
   * @summary Update resume
   * @request PATCH:/api/v2/resumes/{id}
   * @secure
   */
  patchResume = (id: ResumeID, data: Resume, params: RequestParams = {}) =>
    this.request<Resume, any>({
      path: `/api/v2/resumes/${id}`,
      method: 'PATCH',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Request to delete resume
   *
   * @tags Resumes
   * @name DeleteResume
   * @summary Delete resume
   * @request DELETE:/api/v2/resumes/{id}
   * @secure
   */
  deleteResume = (id: ResumeID, data: Resume, params: RequestParams = {}) =>
    this.request<Resume, any>({
      path: `/api/v2/resumes/${id}`,
      method: 'DELETE',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Requests access to hidden fields
   *
   * @tags Resumes
   * @name PostResumesAccess
   * @summary Request Access
   * @request POST:/api/v2/resumes/{id}/access
   * @secure
   */
  postResumesAccess = (id: ResumeID, params: RequestParams = {}) =>
    this.request<Resume, any>({
      path: `/api/v2/resumes/${id}/access`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    });
}
