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
 * Resume id
 * @format uuid
 * @example 2ccbc1c1-2323-49bc-8b98-8614a32dd223
 */
export type ResumeID = string;

export interface Resume {
  /** Resume id */
  id: ResumeID;
  general_information?: GeneralInformation;
  location?: Location;
  job_position?: JobPosition;
  education?: Education[];
  work_experience?: WorkExperience[];
  additional_information?: AdditionalInformation;
  settings?: Settings;

  /**
   * Publication flag
   * @example false
   */
  published?: boolean;

  /**
   * Indicates if an access request has been made
   * @example true
   */
  access_requested?: boolean;

  /**
   * Deletion flag
   * @example false
   */
  deleted?: boolean;
}

export interface GeneralInformation {
  /**
   * Job seeker photo
   * @format uri
   * @example 2023/6/V6dSf7.jpg
   */
  photo_uri?: string;

  /**
   * First name
   * @example Ainur
   */
  first_name?: string;

  /**
   * Last name
   * @example Peretz
   */
  last_name?: string;

  /**
   * Gender id
   * @format uuid
   * @example ccac9dea-5a03-4ce6-9ef5-a26090544f3e
   */
  gender_id?: string;
  gender_name?: MultiLingualValue;

  /**
   * Birthdate
   * @format date
   * @example 1990-05-06
   */
  birthdate?: string;

  /**
   * Email
   * @format email
   * @example ainur.peretz@yahoo.com
   */
  email?: string;

  /**
   * Phone
   * @pattern ^\+[1-9]{1}[0-9]{3,14}$
   * @example +6621321888
   */
  phone?: string;

  /**
   * Language of notify id
   * @format uuid
   * @example 34e0f066-f0bf-426e-b4bd-492927202727
   */
  language_of_notify_id?: string;
  language_of_notify_name?: MultiLingualValue;
}

export interface Location {
  /**
   * Country id
   * @format uuid
   * @example 3f6da6ce-0738-45e6-bfa5-2c0f42f9d62a
   */
  country_id?: string;
  country_name?: MultiLingualValue;

  /**
   * Province/Region id
   * @format uuid
   * @example 5e5622cf-9e35-4e4b-913c-f44c9d55fda4
   */
  region_id?: string;
  region_name?: MultiLingualValue;

  /**
   * @format uuid
   * @example 8acb2016-3d57-489d-bf65-8347cc17668a
   */
  city_id?: string;
  city_name?: MultiLingualValue;

  /**
   * Address
   * @example 9/123-124 Moo1
   */
  address?: string;

  /**
   * @format uuid
   * @example
   */
  source_id?: string;
  source_name?: MultiLingualValue;

  /**
   * @format uuid
   * @example
   */
  relocation_id?: string;
  relocation_name?: MultiLingualValue;

  /** @example false */
  business_trips?: boolean;
}

export interface JobPosition {
  /**
   * Specialization id
   * @format uuid
   * @example 7052791d-f5b6-4d80-8119-02658bbfbb9e
   */
  specialization_id?: string;
  specialization_name?: MultiLingualValue;

  /**
   * Position
   * @example Software Developer
   */
  position?: string;

  /**
   * Employment type id
   * @format uuid
   * @example eee0b815-1f22-48a6-89d8-4199097aa4ef
   */
  employment_type_id?: string;
  employment_type_name?: MultiLingualValue;

  /** @example ["cb8a3870-b274-423f-8f10-662d12777997"] */
  work_feature_ids?: string[];
  work_feature_names?: MultiLingualValue[];

  /**
   * Salary payout period id
   * @format uuid
   * @example d69e2f46-3181-48c7-aaa8-a7ecc32fb71d
   */
  salary_payout_period_id?: string;
  salary_payout_period_name?: MultiLingualValue;

  /**
   * Salary fixed
   * @format float
   * @min 2
   * @max 7
   * @example 85000
   */
  salary_fixed?: number;

  /**
   * Salary from
   * @format float
   * @min 2
   * @max 7
   * @example 75000
   */
  salary_from?: number;

  /**
   * Salary to
   * @format float
   * @min 2
   * @max 7
   * @example 90000
   */
  salary_to?: number;

  /**
   * Currency id
   * @format uuid
   * @example 0f9b9648-8b27-4802-9b7c-f43cffe92234
   */
  currency_id?: string;
  currency_name?: MultiLingualValue;

  /**
   * Description
   * @example Responsibilities: Terms:
   */
  description?: string;
}

export interface Education {
  /**
   * Education level id
   * @format uuid
   * @example feb29275-1d74-4225-8fba-41af5fbe83f3
   */
  education_level_id?: string;
  education_level_name?: MultiLingualValue;

  /** @example  */
  institution?: string;

  /**
   * Specialization id
   * @format uuid
   * @example 7052791d-f5b6-4d80-8119-02658bbfbb9e
   */
  specialization_id?: string;
  specialization_name?: MultiLingualValue;

  /**
   * Position
   * @example Software Developer
   */
  position?: string;

  /** @example 2021 */
  start_year?: string;

  /** @example 2024 */
  end_year?: string;
  present?: boolean;
}

export interface WorkExperience {
  /**
   * Specialization id
   * @format uuid
   * @example 7052791d-f5b6-4d80-8119-02658bbfbb9e
   */
  specialization_id?: string;
  specialization_name?: MultiLingualValue;

  /**
   * Position
   * @example Software Developer
   */
  position?: string;

  /**
   * Company name
   * @example ACME company
   */
  company?: string;

  /** @example 2021 */
  from?: string;

  /** @example 2024 */
  to?: string;

  /**
   * Description
   * @example Responsibilities: Terms:
   */
  description?: string;
  present?: boolean;
}

export interface AdditionalInformation {
  languages?: Language[];

  /**
   * Skill ids
   * @example ["ea109481-3c33-4992-81fc-8024eb8610c2"]
   */
  skill_ids?: string[];
  skill_names?: MultiLingualValue[];

  /**
   * Driver license ids
   * @example ["c4582cf6-6b63-47b8-a59f-ea619c25f6ce"]
   */
  driver_license_ids?: string[];
  driver_license_names?: MultiLingualValue[];

  /** @example some another license */
  other_license?: string;

  /**
   * @format uuid
   * @example 6692e05f-ecc9-4eea-937b-1b2db68a9776
   */
  religion_id?: string;
  religion_name?: MultiLingualValue;

  /**
   * @format uuid
   * @example bee544f7-7d7b-4f70-9170-61a00951effc
   */
  marital_status_id?: string;
  marital_status_name?: MultiLingualValue;

  /**
   * @format uuid
   * @example 531c665d-2138-4616-94a1-67d6a2e4f988
   */
  citizenship_id?: string;
  citizenship_name?: MultiLingualValue;
}

export interface Language {
  /**
   * Language id
   * @format uuid
   * @example 34e0f066-f0bf-426e-b4bd-492927202727
   */
  language_id?: string;
  language_name?: MultiLingualValue;

  /**
   * @format uuid
   * @example
   */
  proficiency_level_id?: string;
  proficiency_level_name?: MultiLingualValue;
}

export interface Settings {
  show_resume_to?: 'nobody' | 'anyone';
  show_phone_number_to?: 'nobody' | 'anyone';
  show_email_to?: 'nobody' | 'anyone';
  email_notifications?: 'response' | 'never';
}

export interface MultiLingualValue {
  /** @example some title */
  en?: string;

  /** @example some title */
  th?: string;
}
