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
  EntityCreateResumeRequest,
  EntityResume,
  InternalControllersErrResponse,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Resume<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description create resume for current user
   *
   * @tags resume
   * @name ResumeCreate
   * @request POST:/resume
   */
  resumeCreate = (request: EntityCreateResumeRequest, params: RequestParams = {}) =>
    this.request<EntityResume, InternalControllersErrResponse | ControllersEmptyResponse>({
      path: `/resume`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
