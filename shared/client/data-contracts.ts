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

export type ControllersEmptyResponse = object;

export interface EntityCommonDictionary {
  en?: EntityTitleField;
  /** @example "5915aea0-cc50-48a0-9052-fa1593724ec7" */
  id?: string;
  th?: EntityTitleField;
}

export interface EntityCompany {
  /** @example "9/123-124 Moo1" */
  address?: string;
  /** @example true */
  canEdit?: boolean;
  /** @example "a909ded0-c6c5-4108-a01a-0c9f544370e8" */
  city?: string;
  /** @example "The Acme Corporation is a fictional corporation that features prominently in the Road Runner/Wile E. Coyote animated shorts as a running gag featuring outlandish products that fail or backfire catastrophically at the worst possible times." */
  description?: string;
  employee?: string;
  /** @example "4ba4fb61-85fa-491a-b63d-829afd14fa8f" */
  id?: string;
  /** @example "path_to_logo" */
  logo?: string;
  /** @example "ACME" */
  name?: string;
  /** @example true */
  onMainPage?: boolean;
  /** @example "+6621321888" */
  phone?: string;
  roles?: string[];
  users?: string[];
  vacancies?: EntityGetCompanyVacancies;
  /** @example "acme.com" */
  website?: string;
  /** @example "84330" */
  zip?: string;
  piblished?: boolean;
  number_of_employees_id?: string,
  number_of_employees_ID?: string,
  number_of_employees_name?: { en: string, th: string },
  city_id?: string
  city_ID?: string
  city_name?:  { en: string, th: string },
  zip_code?: string;
}

export interface EntityCreateCompanyRequest {
  /** @example "9/123-124 Moo1" */
  address?: string;
  /** @example "a909ded0-c6c5-4108-a01a-0c9f544370e8" */
  city?: string;
  /** @example "The Acme Corporation is a fictional corporation that features prominently in the Road Runner/Wile E. Coyote animated shorts as a running gag featuring outlandish products that fail or backfire catastrophically at the worst possible times." */
  description?: string;
  /** @example "8975e988-575b-4080-844e-c9bb9b03764b" */
  employee?: string;
  /** @example "4ba4fb61-85fa-491a-b63d-829afd14fa8f" */
  id?: string;
  /** @example "path_to_logo" */
  logo?: string;
  /** @example "ACME" */
  name?: string;
  /** @example "+6621321888" */
  phone?: string;
  /** @example "acme.com" */
  website?: string;
  /** @example "84330" */
  zip?: string;
}

export interface EntityCreateFeedbackRequest {
  /** @example "miranda.kertzmann@yahoo.com" */
  email?: string;
  /** @example "Miranda" */
  name?: string;
  /** @example "How can I place a vacancy?" */
  subject?: string;
  /** @example "Hi! I want to try to post a job...'" */
  text?: string;
}

export interface EntityCreateResumeRequest {
  additionalInformation?: EntityResumeAdditionalInformation;
  education?: EntityResumeEducation[];
  /** @example "b766bd4c-dd3e-478a-8539-57aee6665a61" */
  id?: string;
  information?: EntityResumeInformation;
  jobPosition?: EntityResumeJobPosition;
  location?: EntityResumeLocation;
  settings?: EntityResumeSettings;
  workExperience?: EntityResumeWorkExperience[];
}

export interface EntityCreateVacancyRequest {
  additional?: EntityVacancyAdditional;
  /** @example "862c9851-a1b9-44bd-988c-d0c99bf727c9" */
  companyId?: string;
  employer?: EntityVacancyEmployer;
  location?: EntityVacancyLocation;
  requirements?: EntityVacancyRequirements;
  responses?: EntityVacancyResponses;
  vacancy?: EntityVacancyInRequest;
  /** @example "e0fdaf30-ba59-4b55-9a25-9753934af91b" */
  vacancyId?: string;
}

export enum EntityEmailNotificationsType {
  Response = 0,
  Never = 1,
}

export interface EntityFaq {
  created_at?: string;
  en?: EntityMultiLanguageField;
  id?: string;
  published?: boolean;
  sort_order?: number;
  th?: EntityMultiLanguageField;
  updated_at?: string;
}

export interface EntityFindPublishedByTypeResponse {
  data?: EntityMaterial[];
  hasMore?: boolean;
}

export interface EntityForgotPasswordRequest {
  /** @example "miranda.kertzmann@yahoo.com" */
  email?: string;
  /** @example "en" */
  locale?: string;
}

export interface EntityGetCompaniesResponse {
  data?: EntityCompany[];
  /** @example true */
  hasMore?: boolean;
  /** @example 10 */
  limit?: number;
  /** @example 20 */
  offset?: number;
}

export interface EntityGetCompanyVacancies {
  /** @example ["url_to_all_vacancies"] */
  all?: string[];
  /** @example ["url_to_opened_vacancies"] */
  opened?: string[];
}

export interface EntityGetMeResponse {
  /** @example "miranda.kertzmann@yahoo.com" */
  email?: string;
  /** @example true */
  email_confirmed?: boolean;
  /** @example "Miranda" */
  first_name?: string;
  /** @example "Kertzmann" */
  last_name?: string;
}

export interface EntityGetResumesResponse {
  /** @example true */
  hasMore?: boolean;
  /** @example 10 */
  limit?: number;
  /** @example 20 */
  offset?: number;
  resumes?: EntityResume[];
}

export interface EntityGetUserInfoResponse {
  /** @example "1990-05-06" */
  birthday?: string;
  /** @example "ivan.ivanov@yahoo.com" */
  email?: string;
  /** @example true */
  emailConfirmed?: boolean;
  /** @example "Miranda" */
  firstName?: string;
  /** @example "4b93d655-974b-4725-a5da-f7f41ce6bff9" */
  gender?: string;
  /** @example "a5a2cd36-54a9-41a2-b8de-b0dcbdf75acc" */
  id?: string;
  /** @example "Kertzmann" */
  lastName?: string;
  notifications?: EntityNotifications;
  /** @example "+79274030000" */
  phone?: string;
  /** @example "path_to_photo" */
  photo?: string;
  /** @example "34e0f066-f0bf-426e-b4bd-492927202727" */
  primaryLanguage?: string;
}

export interface EntityGetVacanciesResponse {
  /** @example true */
  hasMore?: boolean;
  /** @example 10 */
  limit?: number;
  /** @example 20 */
  offset?: number;
  vacancies?: EntityVacancy[];
}

export enum EntityLang {
  Thai = 0,
  Eng = 1,
}

export interface EntityMainPageResponse {
  articles?: any;
  companies?: EntityGetCompaniesResponse;
  news?: EntityFindPublishedByTypeResponse;
  questions?: any;
}

export interface EntityMaterial {
  created_at?: string;
  en?: EntityMultiLanguageField;
  id?: string;
  image?: string;
  language?: EntityLang;
  onmainpage?: boolean;
  published?: boolean;
  published_at_utc?: string;
  source?: string;
  th?: EntityMultiLanguageField;
  thumbnail?: string;
  type?: number;
  updated_at?: string;
  urn?: string;
}

export interface EntityMessage {
  en?: string;
  th?: string;
}

export interface EntityMultiLanguageField {
  shorttext?: string;
  text?: string;
  title?: string;
}

export interface EntityNotifications {
  email?: boolean;
  phone?: boolean;
}

export interface EntityProvideAccessToResumeRequest {
  locale?: string;
  resumeID?: string;
  /** who want access */
  userID?: string;
}

export type EntityProvideAccessToVacancyResponse = object;

export interface EntityRequestPersonalDataResponse {
  message?: EntityMessage;
}

export interface EntityResetPasswordRequest {
  /** @example "qwerty123" */
  newPassword?: string;
}

export interface EntityResume {
  additionalInformation?: EntityResumeAdditionalInformation;
  /** @example true */
  canEdit?: boolean;
  education?: EntityResumeEducation[];
  /** @example "b766bd4c-dd3e-478a-8539-57aee6665a61" */
  id?: string;
  information?: EntityResumeInformation;
  jobPosition?: EntityResumeJobPosition;
  location?: EntityResumeLocation;
  /** @example false */
  published?: boolean;
  publishedTime?: string;
  settings?: EntityResumeSettings;
  workExperience?: EntityResumeWorkExperience[];
}

export interface EntityResumeAdditionalInformation {
  /**
   * citizenship table
   * @example "a1c1520f-85ef-4dbe-b45c-d41cfe9b8d48"
   */
  citizenship?: string;
  /**
   * driving_license table
   * @example ["c4582cf6-6b63-47b8-a59f-ea619c25f6ce","d3212cd6-665e-45a8-af12-f2f8935b2958"]
   */
  driveLicense?: string[];
  languages?: EntityResumeLanguages[];
  /**
   * marital_status table
   * @example "c0a8852f-cbca-425b-87ef-db65757ecfb2"
   */
  maritalStatus?: string;
  /** @example "some_other_licenses" */
  otherLicenses?: string;
  /**
   * religion table
   * @example "c733e043-8d34-4411-b2aa-803fb846fe03"
   */
  religion?: string;
  /**
   * skill table
   * @example ["38d3a236-eb5a-48a2-9859-06edf4a59cb5","ea109481-3c33-4992-81fc-8024eb8610c2"]
   */
  skills?: string[];
}

export interface EntityResumeDate {
  /** @example "2018" */
  from?: string;
  /** @example true */
  present?: boolean;
  /** @example "2019" */
  to?: string;
}

export interface EntityResumeEducation {
  date?: EntityResumeDate;
  /** @example "some_institution" */
  institution?: string;
  /** @example "feb29275-1d74-4225-8fba-41af5fbe83f3" */
  level?: string;
  /** @example "Program Developer" */
  position?: string;
  /** @example "9fba9d24-187c-44d4-809c-b95014d00e14" */
  specialization?: string;
}

export interface EntityResumeInformation {
  /** @example true */
  accept?: boolean;
  /** @example "1990-05-06" */
  birthday?: string;
  /** @example "miranda.kertzmann@yahoo.com" */
  email?: string;
  /** @example "Miranda" */
  firstName?: string;
  /** @example "4b93d655-974b-4725-a5da-f7f41ce6bff9" */
  gender?: string;
  /** @example "Kertzmann" */
  lastName?: string;
  /** @example "+6621321888" */
  phone?: string;
  /** @example "path_to_photo" */
  photo?: string;
  /** @example "34e0f066-f0bf-426e-b4bd-492927202727" */
  primaryLanguage?: string;
}

export interface EntityResumeJobPosition {
  /** @example "some_description" */
  description?: string;
  /** @example "eee0b815-1f22-48a6-89d8-4199097aa4ef" */
  employment?: string;
  /** @example "Program Developer" */
  position?: string;
  salary?: EntityResumeSalary;
  /** @example "9fba9d24-187c-44d4-809c-b95014d00e14" */
  specialization?: string;
  /**
   * work_feature table
   * @example ["2f985558-7462-4aca-8bfc-38bd3fdbd98b","cb8a3870-b274-423f-8f10-662d12777997"]
   */
  workType?: string[];
}

export interface EntityResumeLanguages {
  /** @example "5aae49e8-0496-418e-877a-628b3faf60dc" */
  language?: string;
  /** @example "88e4befa-a0ca-4cca-9d8e-ffc16ecb7fcf" */
  level?: string;
}

export interface EntityResumeLocation {
  /** @example "226 หมู่ 2 ถนน ภูเก็ต ตำบลตลาดใหญ่ อำเภอเมืองภูเก็ต ภูเก็ต 83000" */
  address?: string;
  /** @example "1564590b-b776-40a3-b28d-3b261452c0ea" */
  city?: string;
  /** @example "3f6da6ce-0738-45e6-bfa5-2c0f42f9d62a" */
  country?: string;
  /** @example "5e5622cf-9e35-4e4b-913c-f44c9d55fda4" */
  region?: string;
  /** @example "a34063cb-894c-4e35-ba7f-57b1a16b3927" */
  relocation?: string;
  /** @example "23a2f427-6b5e-418d-b28e-3f02d24cf631" */
  source?: string;
  /** @example true */
  trips?: boolean;
}

export interface EntityResumeSalary {
  /**
   * currency table
   * @example "0f9b9648-8b27-4802-9b7c-f43cffe92234"
   */
  currency?: string;
  /** @example 1000 */
  fixed?: number;
  /** @example 900 */
  from?: number;
  /**
   * payout_period table
   * @example "d69e2f46-3181-48c7-aaa8-a7ecc32fb71d"
   */
  payoutPeriod?: string;
  /** @example 1100 */
  to?: number;
}

export interface EntityResumeSettings {
  /** @example 0 */
  canResponse?: EntityShowTo;
  /** @example 1 */
  emailNotificationsType?: EntityEmailNotificationsType;
  /** @example 0 */
  showEmail?: EntityShowTo;
  /** @example 1 */
  showPhone?: EntityShowTo;
}

export interface EntityResumeWorkExperience {
  /** @example "some_company" */
  company?: string;
  date?: EntityResumeDate;
  /** @example "some_company" */
  description?: string;
  /** @example "" */
  position?: string;
  /** @example "9fba9d24-187c-44d4-809c-b95014d00e14" */
  specialization?: string;
}

export enum EntityShowTo {
  Anyone = 0,
  Nobody = 1,
}

export interface EntitySignInRequest {
  /** @example "miranda.kertzmann@yahoo.com" */
  email?: string;
  /** @example "qwerty123" */
  password?: string;
}

export interface EntitySignUpRequest {
  /** @example "miranda.kertzmann@yahoo.com" */
  email?: string;
  /** @example "Miranda" */
  first_name?: string;
  /** @example "Kertzmann" */
  last_name?: string;
  /** @example "en" */
  locale?: string;
  /** @example "qwerty123" */
  password?: string;
}

export interface EntityStaticPage {
  en?: EntityMultiLanguageField;
  id?: string;
  th?: EntityMultiLanguageField;
}

export interface EntityTitleField {
  /** @example "some title" */
  title?: string;
}

export interface EntityUpdateUserInfoRequest {
  /** @example "1990-01-02" */
  birthday?: string;
  /** @example "Miranda" */
  firstName?: string;
  /** @example "4b93d655-974b-4725-a5da-f7f41ce6bff9" */
  gender?: string;
  /** @example "Kertzmann" */
  lastName?: string;
  notifications?: EntityNotifications;
  /** @example "+79274030000" */
  phone?: string;
  /** @example "path_to_photo" */
  photo?: string;
  /** @example "34e0f066-f0bf-426e-b4bd-492927202727" */
  primaryLanguage?: string;
}

export interface EntityVacancy {
  additional?: EntityVacancyAdditional;
  /** @example false */
  archived?: boolean;
  /** @example true */
  canEdit?: boolean;
  /** @example "862c9851-a1b9-44bd-988c-d0c99bf727c9" */
  companyId?: string;
  /** @example "path_to_logo" */
  companyLogo?: string;
  employer?: EntityVacancyEmployer;
  /** @example "e0fdaf30-ba59-4b55-9a25-9753934af91b" */
  id?: string;
  location?: EntityVacancyLocation;
  /** @example true */
  published?: boolean;
  publishedTime?: string;
  requirements?: EntityVacancyRequirements;
  responses?: EntityVacancyResponses;
  vacancy?: EntityVacancyInRequest;
  /** @example "approved" */
  vacancyRequestStatus?: string;
}

export interface EntityVacancyAdditional {
  /** @example ["c4582cf6-6b63-47b8-a59f-ea619c25f6ce"] */
  drivingLicense?: string[];
  /** @example ["some license"] */
  otherLicenseNeeded?: string[];
  /** @example ["c3a31ca0-51f0-4207-a9e1-d27c3068cf10","f066702f-c89c-4aa8-b69e-2186c0923d8e"] */
  skills?: string[];
}

export interface EntityVacancyEducation {
  /**
   * education_level
   * @example "bee7cfc3-475f-43e3-8d19-adacb3164846"
   */
  levelOfEducation?: string;
  /**
   * dictionary_requirements_level
   * @example "f94a7b83-5461-4219-8831-e00ac051ee87"
   */
  obligatoriness?: string;
  /**
   * specialization
   * @example "7052791d-f5b6-4d80-8119-02658bbfbb9e"
   */
  specialization?: string;
}

export interface EntityVacancyEmployer {
  /** @example "ACME" */
  companyName?: string;
  /** @example "+6621321888" */
  contactPhone?: string;
  /** @example "Miranda" */
  firstName?: string;
  /** @example "23a2f427-6b5e-418d-b28e-3f02d24cf631" */
  infoSource?: string;
  /** @example "Kertzmann" */
  lastName?: string;
}

export interface EntityVacancyInRequest {
  /** @example "Lorem ipsum dolor sit amet, consectetur adipiscing elit." */
  description?: string;
  /** @example "eee0b815-1f22-48a6-89d8-4199097aa4ef" */
  employment?: string;
  salary?: EntityVacancySalary;
  /** @example "7052791d-f5b6-4d80-8119-02658bbfbb9e" */
  specialization?: string;
  /** @example "" */
  vacancyName?: string;
  /**
   * years_of_experience
   * @example ["cb8a3870-b274-423f-8f10-662d12777997"]
   */
  workFeatures?: string[];
}

export interface EntityVacancyLanguages {
  /**
   * language
   * @example "5aae49e8-0496-418e-877a-628b3faf60dc"
   */
  language?: string;
  /**
   * language_level
   * @example "88e4befa-a0ca-4cca-9d8e-ffc16ecb7fcf"
   */
  level?: string;
  /**
   * dictionary_requirements_level
   * @example "f94a7b83-5461-4219-8831-e00ac051ee87"
   */
  obligatoriness?: string;
}

export interface EntityVacancyLocation {
  /** @example "1564590b-b776-40a3-b28d-3b261452c0ea" */
  city?: string;
  /** @example "3f6da6ce-0738-45e6-bfa5-2c0f42f9d62a" */
  country?: string;
  /** @example "5aae49e8-0496-418e-877a-628b3faf60dc" */
  language?: string;
  /** @example "8975e988-575b-4080-844e-c9bb9b03764b" */
  numberOfEmployee?: string;
  /** @example "5e5622cf-9e35-4e4b-913c-f44c9d55fda4" */
  region?: string;
}

export interface EntityVacancyRequirements {
  educations?: EntityVacancyEducation[];
  languages?: EntityVacancyLanguages[];
  workExperiences?: EntityVacancyWorkExperiences[];
}

export interface EntityVacancyResponses {
  /** @example "c6c46043-7279-470d-9dc8-91c086e3d09a" */
  canBeDoneBy?: string;
  /** @example "90891d95-b9ec-465a-becd-f370c9c1bf2d" */
  complianceOfRequirements?: string;
  /** @example "miranda.kertzmann@yahoo.com" */
  email?: string;
  /** @example "6f7061a3-12b6-4b72-bee0-06d7c661ed0d" */
  notificationsSettings?: string;
  /** @example "e4062b46-d19a-4899-9a3e-277c9adc4863" */
  showEmail?: string;
  /** @example "0cac2d6a-de9e-4a83-9ee2-b911d2e4bf1a" */
  showPhoneNumber?: string;
}

export interface EntityVacancySalary {
  /** @example "0f9b9648-8b27-4802-9b7c-f43cffe92234" */
  currency?: string;
  /** @example "5000.00" */
  fixed?: string;
  /** @example "4499.99" */
  from?: string;
  /** @example "d69e2f46-3181-48c7-aaa8-a7ecc32fb71d" */
  payoutPeriod?: string;
  /** @example "9999.99" */
  to?: string;
}

export interface EntityVacancyWorkExperiences {
  /**
   * dictionary_requirements_level
   * @example "f94a7b83-5461-4219-8831-e00ac051ee87"
   */
  obligatoriness?: string;
  /**
   * years_of_experience
   * @example "c4e201ac-509e-463d-b34e-3334ce0343f5"
   */
  periodOfWork?: string;
  /**
   * specialization
   * @example "7052791d-f5b6-4d80-8119-02658bbfbb9e"
   */
  specialization?: string;
}

export interface InternalControllersErrFields {
  /** @example 12 */
  code?: number;
  /** @example "some additional info" */
  params?: string;
}

export interface InternalControllersErrResponse {
  error?: InternalControllersErrFields;
}

export interface InternalServicesModelsEmployee {
  en?: EntityTitleField;
  id?: string;
  th?: EntityTitleField;
}

export interface InternalServicesModelsSourceOfInformation {
  en?: EntityTitleField;
  id?: string;
  th?: EntityTitleField;
}

export interface ModelsUploadResponse {
  /** @example "2021/10/DVI6C7.jpg" */
  url?: string;
}

export interface UsersControllersErrFields {
  /** @example 12 */
  code?: number;
  /** @example "some additional info" */
  params?: string;
}

export interface UsersControllersErrResponse {
  error?: UsersControllersErrFields;
}

export interface LocationV2 {
  id?:           string;
  country_id?:   string;
  country_name?: Name;
  name?:         Name;
  region_id?:    string;
  region_name?:  Name;
}

export interface Name {
  en?: string;
  th?: string;
}
