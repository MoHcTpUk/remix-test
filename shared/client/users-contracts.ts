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

export interface UpdateUserInfo {
  /**
   * @format uri
   * @example 2023/4/S5gSf7.jpg
   */
  photo?: string;

  /** @example Ainur */
  first_name?: string;

  /** @example Peretz */
  last_name?: string;

  /**
   * @format uuid
   * @example ccac9dea-5a03-4ce6-9ef5-a26090544f3e
   */
  gender?: string;

  /**
   * @format date
   * @example 1990-05-06
   */
  birthday?: string;

  /** @example +79270000000 */
  phone?: string;

  /**
   * @format uuid
   * @example 34e0f066-f0bf-426e-b4bd-492927202727
   */
  primary_language?: string;
  notifications?: Notifications;
}

export interface UserInfo {
  id: UserID;

  /**
   * @format uri
   * @example 2023/4/S5gSf7.jpg
   */
  photo: string;

  /** @example Ainur */
  first_name: string;

  /** @example Peretz */
  last_name: string;

  /**
   * @format uuid
   * @example ccac9dea-5a03-4ce6-9ef5-a26090544f3e
   */
  gender: string;

  /**
   * @format date
   * @example 1990-05-06
   */
  birthday: string;

  /**
   * @format email
   * @example ainur.peretz@yahoo.com
   */
  email: string;

  /** @example +79270000000 */
  phone: string;

  /**
   * @format uuid
   * @example 34e0f066-f0bf-426e-b4bd-492927202727
   */
  primary_language: string;
  notifications: Notifications;
}

/**
 * @format uuid
 * @example a5a2cd36-54a9-41a2-b8de-b0dcbdf75acc
 */
export type UserID = string;

export interface Notifications {
  email: boolean;
  phone: boolean;
}
