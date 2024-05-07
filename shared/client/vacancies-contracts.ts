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
 * Vacancy id
 * @format uuid
 * @example 9fe0763d-d934-4a2a-a120-6c412e7114f7
 */
export type VacancyID = string;

export interface Vacancy {
  /** Vacancy id */
  id: VacancyID;

  /**
   * @format uri
   * @example 2023/5/V6dSf7.jpg
   */
  company_logo_uri?: string;

  /**
   * Vacancy editable for current user
   * @example true
   */
  can_edit?: boolean;
  vacancy_page?: VacancyPage;
  contacts?: Contacts;
  location?: Location;
  requirements?: Requirements;
  responses_vacancy?: ResponsesVacancy;
  additional_skills?: AdditionalSkills;

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

export interface VacancyPage {
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

export interface Contacts {
  /**
   * Company id
   * @format uuid
   * @example 45f98e23-582a-4180-801f-0b5c6b66f655
   */
  company_id?: string;

  /**
   * Company name
   * @example ACME
   */
  company_name?: string;

  /**
   * Contact phone
   * @example +6621321888
   */
  contact_phone?: string;

  /**
   * Name of contact person
   * @example Ainur
   */
  first_name?: string;

  /**
   * Last name of contact person
   * @example Peretz
   */
  last_name?: string;

  /**
   * How did you know about us? (id)
   * @format uuid
   * @example f36ea2e3-02c6-4341-933e-e2c8a9793466
   */
  source_of_discovery_id?: string;
  source_of_discovery_name?: MultiLingualValue;
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
   * City/Town id
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
   * Language of notify id
   * @format uuid
   * @example 34e0f066-f0bf-426e-b4bd-492927202727
   */
  language_of_notify_id?: string;
  language_of_notify_name?: MultiLingualValue;

  /**
   * Number of Employees id
   * @format uuid
   * @example 1d7da288-421d-4449-a489-f4579b83eefa
   */
  number_of_employees_id?: string;
  number_of_employees_name?: MultiLingualValue;
}

export interface Requirements {
  education?: Education[];
  work_experience?: WorkExperience[];
  language?: Language[];
}

export interface Education {
  /**
   * Education id
   * @format uuid
   * @example 81b37c5e-7b17-48f4-a33d-d25c196a54f5
   */
  education_id?: string;
  education_name?: MultiLingualValue;

  /**
   * Level of education id
   * @format uuid
   * @example 450a8e24-394b-4374-bded-844892ddc723
   */
  level_id?: string;
  level_name?: MultiLingualValue;

  /**
   * Specialization id
   * @format uuid
   * @example 7052791d-f5b6-4d80-8119-02658bbfbb9e
   */
  specialization_id?: string;
  specialization_name?: MultiLingualValue;
}

export interface WorkExperience {
  /**
   * Work experience id
   * @format uuid
   * @example 81b37c5e-7b17-48f4-a33d-d25c196a54f5
   */
  work_experience_id?: string;
  work_experience_name?: MultiLingualValue;

  /**
   * Period of work id
   * @format uuid
   * @example 06e4d7c0-3902-4a4b-80bc-1d93fb705447
   */
  period_of_work_id?: string;
  period_of_work_name?: MultiLingualValue;

  /**
   * Specialization id
   * @format uuid
   * @example 7052791d-f5b6-4d80-8119-02658bbfbb9e
   */
  specialization_id?: string;
  specialization_name?: MultiLingualValue;
}

export interface Language {
  /**
   * Language knowledge id
   * @format uuid
   * @example
   */
  language_knowledge_id?: string;
  language_knowledge_name?: MultiLingualValue;

  /**
   * Language id
   * @format uuid
   * @example 34e0f066-f0bf-426e-b4bd-492927202727
   */
  language_id?: string;
  language_name?: MultiLingualValue;

  /**
   * Level id
   * @format uuid
   * @example 7caa6408-ddad-4296-9be6-2960a0cce928
   */
  level_id?: string;
  level_name?: MultiLingualValue;
}

export interface ResponsesVacancy {
  /**
   * Response can be done by (id)
   * @format uuid
   * @example 3bbcbfb7-edea-4705-b532-5074a25dc724
   */
  response_can_be_done_by_id?: string;
  response_can_be_done_by_name?: MultiLingualValue;

  /**
   * Email for the response
   * @example responses@acme.com
   */
  email_for_the_responses?: string;

  /**
   * Get email notifications for (id)
   * @format uuid
   * @example e1435bb3-f092-45c2-966c-8ee9dccb5587
   */
  get_email_notifications_for_id?: string;
  get_email_notifications_for_name?: MultiLingualValue;

  /**
   * Compliance of requirements (id)
   * @format uuid
   * @example 90891d95-b9ec-465a-becd-f370c9c1bf2d
   */
  compliance_of_requirements_id?: string;
  compliance_of_requirements_name?: MultiLingualValue;

  /**
   * Show phone number for verified employees only
   * @example true
   */
  show_phone_number?: boolean;

  /**
   * Show email for verified employees only
   * @example true
   */
  show_email?: boolean;
}

export interface AdditionalSkills {
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

  /**
   * Other licenses
   * @example [""]
   */
  other_licenses?: string[];
}

export interface MultiLingualValue {
  /** @example some title */
  en?: string;

  /** @example some title */
  th?: string;
}
