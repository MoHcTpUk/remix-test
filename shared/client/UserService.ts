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
  EntityForgotPasswordRequest,
  EntityGetMeResponse,
  EntityGetUserInfoResponse,
  EntityResetPasswordRequest,
  EntitySignInRequest,
  EntitySignUpRequest,
  EntityUpdateUserInfoRequest,
  UsersControllersErrResponse,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class UserService<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description restore password by email
   *
   * @tags user-service
   * @name ForgotPasswordCreate
   * @request POST:/user-service/forgot-password
   */
  forgotPasswordCreate = (request: EntityForgotPasswordRequest, params: RequestParams = {}) =>
    this.request<ControllersEmptyResponse, UsersControllersErrResponse | ControllersEmptyResponse>({
      path: `/user-service/forgot-password`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description verify secret that sent to email
   *
   * @tags user-service
   * @name ForgotPasswordVerifyDetail
   * @request GET:/user-service/forgot-password-verify/{secret}
   */
  forgotPasswordVerifyDetail = (secret: string, params: RequestParams = {}) =>
    this.request<any, UsersControllersErrResponse | ControllersEmptyResponse>({
      path: `/user-service/forgot-password-verify/${secret}`,
      method: 'GET',
      ...params,
    });
  /**
   * @description return info about current user
   *
   * @tags user-service
   * @name InfoList
   * @request GET:/user-service/info
   */
  infoList = (params: RequestParams = {}) =>
    this.request<EntityGetUserInfoResponse, ControllersEmptyResponse>({
      path: `/user-service/info`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * @description update info of current user
   *
   * @tags user-service
   * @name InfoUpdate
   * @request PUT:/user-service/info
   */
  infoUpdate = (request: EntityUpdateUserInfoRequest, params: RequestParams = {}) =>
    this.request<ControllersEmptyResponse, UsersControllersErrResponse | ControllersEmptyResponse>({
      path: `/user-service/info`,
      method: 'PUT',
      body: request,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description return user info by id
   *
   * @tags user-service
   * @name InfoDetail
   * @request GET:/user-service/info/{id}
   */
  infoDetail = (id: string, params: RequestParams = {}) =>
    this.request<EntityGetUserInfoResponse, ControllersEmptyResponse>({
      path: `/user-service/info/${id}`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * @description sign in with email and password
   *
   * @tags user-service
   * @name LoginCreate
   * @request POST:/user-service/login
   */
  loginCreate = (request: EntitySignInRequest, params: RequestParams = {}) =>
    this.request<ControllersEmptyResponse, UsersControllersErrResponse | void>({
      path: `/user-service/login`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description sign in with facebook
   *
   * @tags user-service
   * @name LoginFacebookList
   * @request GET:/user-service/login/facebook
   */
  loginFacebookList = (params: RequestParams = {}) =>
    this.request<any, UsersControllersErrResponse>({
      path: `/user-service/login/facebook`,
      method: 'GET',
      ...params,
    });
  /**
   * @description sign in with google
   *
   * @tags user-service
   * @name LoginGoogleList
   * @request GET:/user-service/login/google
   */
  loginGoogleList = (params: RequestParams = {}) =>
    this.request<any, UsersControllersErrResponse>({
      path: `/user-service/login/google`,
      method: 'GET',
      ...params,
    });
  /**
   * @description sign out
   *
   * @tags user-service
   * @name LogoutCreate
   * @request POST:/user-service/logout
   */
  logoutCreate = (params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/user-service/logout`,
      method: 'POST',
      ...params,
    });
  /**
   * @description return info about current user
   *
   * @tags user-service
   * @name GetUserService
   * @request GET:/user-service/me
   */
  getUserService = (params: RequestParams = {}) =>
    this.request<EntityGetMeResponse, ControllersEmptyResponse>({
      path: `/user-service/me`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * @description sign up with email and password
   *
   * @tags user-service
   * @name RegistrationCreate
   * @request POST:/user-service/registration
   */
  registrationCreate = (request: EntitySignUpRequest, params: RequestParams = {}) =>
    this.request<ControllersEmptyResponse, UsersControllersErrResponse>({
      path: `/user-service/registration`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description confirm email
   *
   * @tags user-service
   * @name RegistrationConfirmDetail
   * @request GET:/user-service/registration/confirm/{hash}
   */
  registrationConfirmDetail = (hash: string, params: RequestParams = {}) =>
    this.request<any, UsersControllersErrResponse>({
      path: `/user-service/registration/confirm/${hash}`,
      method: 'GET',
      ...params,
    });
  /**
   * @description callback for sign in with facebook
   *
   * @tags user-service
   * @name RegistrationFacebookCallbackList
   * @request GET:/user-service/registration/facebook/callback
   */
  registrationFacebookCallbackList = (
    query: {
      /** code */
      code: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<any, UsersControllersErrResponse>({
      path: `/user-service/registration/facebook/callback`,
      method: 'GET',
      query: query,
      ...params,
    });
  /**
   * @description callback for sign in with google
   *
   * @tags user-service
   * @name RegistrationGoogleCallbackList
   * @request GET:/user-service/registration/google/callback
   */
  registrationGoogleCallbackList = (
    query: {
      /** code */
      code: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<any, UsersControllersErrResponse>({
      path: `/user-service/registration/google/callback`,
      method: 'GET',
      query: query,
      ...params,
    });
  /**
   * @description reset password
   *
   * @tags user-service
   * @name ResetPasswordCreate
   * @request POST:/user-service/reset-password
   */
  resetPasswordCreate = (request: EntityResetPasswordRequest, params: RequestParams = {}) =>
    this.request<ControllersEmptyResponse, UsersControllersErrResponse | ControllersEmptyResponse>({
      path: `/user-service/reset-password`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
}
