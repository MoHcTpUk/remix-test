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
  EntityCreateFeedbackRequest,
  InternalControllersErrResponse,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Feedback<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description create feedback
   *
   * @tags feedback
   * @name FeedbackCreate
   * @request POST:/feedback
   */
  feedbackCreate = (request: EntityCreateFeedbackRequest, params: RequestParams = {}) =>
    this.request<
      ControllersEmptyResponse,
      InternalControllersErrResponse | ControllersEmptyResponse
    >({
      path: `/feedback`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
