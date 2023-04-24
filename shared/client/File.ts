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

import { ControllersEmptyResponse, ModelsUploadResponse } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class File<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Upload file (only jpeg)
   *
   * @tags upload
   * @name UploadCreate
   * @request POST:/file/upload
   */
  uploadCreate = (
    data: {
      /**
       * file to upload
       * @format binary
       */
      file: File;
    },
    params: RequestParams = {},
  ) =>
    this.request<ModelsUploadResponse, ControllersEmptyResponse>({
      path: `/file/upload`,
      method: 'POST',
      body: data,
      type: ContentType.FormData,
      format: 'json',
      ...params,
    });
}
