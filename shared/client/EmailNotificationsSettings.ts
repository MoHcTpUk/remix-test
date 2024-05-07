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

import { ControllersEmptyResponse, EntityCommonDictionary } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class EmailNotificationsSettings<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description return dictionary for email notification settings
   *
   * @tags dictionaries
   * @name EmailNotificationsSettingsList
   * @request GET:/email-notifications-settings
   */
  emailNotificationsSettingsList = (params: RequestParams = {}) =>
    this.request<EntityCommonDictionary[], ControllersEmptyResponse>({
      path: `/email-notifications-settings`,
      method: 'GET',
      format: 'json',
      ...params,
    });
}
