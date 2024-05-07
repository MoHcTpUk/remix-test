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

/**
 * Location id
 * @format uuid
 * @example 8acb2016-3d57-489d-bf65-8347cc17668a
 */
export type LocationID = string;

export interface Location {
  /** Location id */
  ID: LocationID;
  name: MultiLingualValue;

  /**
   * @format uuid
   * @example 5e5622cf-9e35-4e4b-913c-f44c9d55fda4
   */
  region_id: string;
  region_name: MultiLingualValue;

  /**
   * @format uuid
   * @example 3f6da6ce-0738-45e6-bfa5-2c0f42f9d62a
   */
  country_id: string;
  country_name: MultiLingualValue;
}

export type Dictionary = { id: string; value: MultiLingualValue }[];

export type MultiLingualValue = any;
