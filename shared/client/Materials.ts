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
  EntityFindPublishedByTypeResponse,
  EntityMaterial,
  InternalControllersErrResponse,
} from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Materials<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description return articles for the main page and articles page
   *
   * @tags materials
   * @name ArticlesList
   * @request GET:/materials/articles
   */
  articlesList = (
    query?: {
      /**
       * minimum value: 0, maximum value: 100
       * @min 0
       * @max 100
       * @default 10
       */
      limit?: number;
      /**
       * format: 2006-01-02T15:04:05
       * @format date
       */
      scroll?: string;
      /** is article in main page */
      onmainpage?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<EntityFindPublishedByTypeResponse, ControllersEmptyResponse>({
      path: `/materials/articles`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * @description return article by id
   *
   * @tags materials
   * @name ArticlesDetail
   * @request GET:/materials/articles/{id}
   */
  articlesDetail = (id: string, params: RequestParams = {}) =>
    this.request<EntityMaterial, InternalControllersErrResponse | ControllersEmptyResponse>({
      path: `/materials/articles/${id}`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * @description return news for the main page and news page
   *
   * @tags materials
   * @name NewsList
   * @request GET:/materials/news
   */
  newsList = (
    query?: {
      /**
       * minimum value: 0, maximum value: 100
       * @min 0
       * @max 100
       * @default 10
       */
      limit?: number;
      /**
       * format: 2006-01-02T15:04:05
       * @format date
       */
      scroll?: string;
      /** is news in main page */
      onmainpage?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<EntityFindPublishedByTypeResponse, ControllersEmptyResponse>({
      path: `/materials/news`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * @description return news by id
   *
   * @tags materials
   * @name NewsDetail
   * @request GET:/materials/news/{id}
   */
  newsDetail = (id: string, params: RequestParams = {}) =>
    this.request<EntityMaterial, InternalControllersErrResponse | ControllersEmptyResponse>({
      path: `/materials/news/${id}`,
      method: 'GET',
      format: 'json',
      ...params,
    });
}
