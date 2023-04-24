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
  EntityCreateVacancyRequest,
  EntityVacancy,
  InternalControllersErrResponse,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Vacancy<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description create vacancy
   *
   * @tags vacancy
   * @name VacancyCreate
   * @request POST:/vacancy
   */
  vacancyCreate = (request: EntityCreateVacancyRequest, params: RequestParams = {}) =>
    this.request<EntityVacancy, InternalControllersErrResponse | ControllersEmptyResponse>({
      path: `/vacancy`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
