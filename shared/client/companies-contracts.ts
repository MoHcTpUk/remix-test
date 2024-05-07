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
 * Company id
 * @format uuid
 * @example 45f98e23-582a-4180-801f-0b5c6b66f655
 */
export type CompanyID = string;

export interface Company {
  /** Company id */
  id?: CompanyID;

  /**
   * @format uri
   * @example 2023/5/V6dSf7.jpg
   */
  logo_uri?: string;

  /** @example ACME */
  name?: string;
  specialization_id?: SpecializationID;
  specialization_name?: MultiLingualValue;

  /** @example +6621321888 */
  phone?: string;

  /**
   * @format uuid
   * @example 8acb2016-3d57-489d-bf65-8347cc17668a
   */
  city_id?: string;
  city_name?: MultiLingualValue;

  /** @example 9/123-124 Moo1 */
  address?: string;

  /** @example 84330 */
  zip_code?: string;

  /**
   * @format uri
   * @example https://acme.com
   */
  website?: string;
  number_of_employees_id?: NumberOfEmployeesID;
  number_of_employees_name?: MultiLingualValue;

  /** @example The Acme Corporation is a fictional corporation that features prominently in the Road Runner/Wile E. Coyote animated shorts as a running gag featuring outlandish products that fail or backfire catastrophically at the worst possible times. */
  description?: string;

  /**
   * Publication flag
   * @example false
   */
  published?: boolean;

  /** @format int32 */
  number_of_vacancies?: number;

  /**
   * Deletion flag
   * @example false
   */
  deleted?: boolean;
}

/**
 * @example
 */
export type SpecializationID = string;

/**
 * @format uuid
 * @example 1d7da288-421d-4449-a489-f4579b83eefa
 */
export type NumberOfEmployeesID = string;

export interface MultiLingualValue {
  /** @example some title */
  en?: string;

  /** @example some title */
  th?: string;
}
