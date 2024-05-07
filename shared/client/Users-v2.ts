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

import { UpdateUserInfo, UserInfo } from './users-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Users<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Request to update current user info
   *
   * @tags user-service
   * @name PatchUsersMe
   * @summary Update current user info
   * @request PATCH:/api/v2/users/me
   */
  patchUsersMe = (data: UpdateUserInfo, params: RequestParams = {}) =>
    this.request<UserInfo, any>({
      path: `/api/v2/users/me`,
      method: 'PATCH',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
