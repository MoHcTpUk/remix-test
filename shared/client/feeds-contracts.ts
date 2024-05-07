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

export interface GetFeedsResponse {
  data?: Data;
  error?: object;
}

export interface Data {
  popular_companies: PopularCompany[];
  news: News[];
  articles: Article[];
}

export interface PopularCompany {
  icon_uri: string;
  id: string;
  name: string;
  vacancies_count: number;
}

export interface News {
  image_uri: string;
  id: string;
  title_en: string;
  title_th: string;

  /** @format date */
  published_at: string;
}

export interface Article {
  image_uri: string;
  id: string;
  title_en: string;
  title_th: string;

  /** @format date */
  published_at: string;
}
