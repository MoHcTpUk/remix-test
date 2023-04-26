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

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>;

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>;
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = 'https://upjob.com/api/v1';
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: 'same-origin',
    headers: {},
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === 'number' ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join('&');
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => 'undefined' !== typeof query[key]);
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key),
      )
      .join('&');
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : '';
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string')
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== 'string' ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === 'object' && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ''}${path}${queryString ? `?${queryString}` : ''}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
        },
        signal: cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal,
        body: typeof body === 'undefined' || body === null ? null : payloadFormatter(body),
      },
    ).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
          .then((data) => {
            if (r.ok) {
              r.data = data;
            } else {
              r.error = data;
            }
            return r;
          })
          .catch((e) => {
            r.error = e;
            return r;
          });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Upjob API
 * @version 1.0
 * @baseUrl http://upjob.com/api/v1
 * @contact
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  citizenship = {
    /**
     * @description return citizenship
     *
     * @tags dictionaries
     * @name CitizenshipList
     * @request GET:/citizenship
     */
    citizenshipList: (
      query?: {
        /** title */
        title?: string;
        /** id or ids */
        ids?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<
        EntityCommonDictionary[],
        InternalControllersErrResponse | ControllersEmptyResponse
      >({
        path: `/citizenship`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),
  };
  companies = {
    /**
     * @description return companies
     *
     * @tags companies
     * @name CompaniesList
     * @request GET:/companies
     */
    companiesList: (
      query?: {
        /** show companies created by the current user */
        only_my?: boolean;
        /** show companies on main page */
        on_main_page?: boolean;
        /** search by company name & city */
        search_text?: string;
        /**
         * minimum value: 0, maximum value: 100
         * @min 0
         * @max 100
         * @default 10
         */
        limit?: number;
        /**
         * default value: 0
         * @default 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        EntityGetCompaniesResponse,
        ControllersEmptyResponse | InternalControllersErrResponse
      >({
        path: `/companies`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description create company
     *
     * @tags companies
     * @name CompaniesCreate
     * @request POST:/companies
     */
    companiesCreate: (request: EntityCreateCompanyRequest, params: RequestParams = {}) =>
      this.request<EntityCompany, InternalControllersErrResponse | ControllersEmptyResponse>({
        path: `/companies`,
        method: 'POST',
        body: request,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description return company by id
     *
     * @tags companies
     * @name CompaniesDetail
     * @request GET:/companies/{id}
     */
    companiesDetail: (id: string, params: RequestParams = {}) =>
      this.request<EntityCompany, InternalControllersErrResponse | ControllersEmptyResponse>({
        path: `/companies/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description delete company by id
     *
     * @tags companies
     * @name CompaniesDelete
     * @request DELETE:/companies/{id}
     */
    companiesDelete: (id: string, params: RequestParams = {}) =>
      this.request<
        ControllersEmptyResponse,
        InternalControllersErrResponse | ControllersEmptyResponse
      >({
        path: `/companies/${id}`,
        method: 'DELETE',
        format: 'json',
        ...params,
      }),
  };
  complianceOfRequirements = {
    /**
     * @description return dictionary for compliance of requirements
     *
     * @tags dictionaries
     * @name ComplianceOfRequirementsList
     * @request GET:/compliance-of-requirements
     */
    complianceOfRequirementsList: (params: RequestParams = {}) =>
      this.request<EntityCommonDictionary[], ControllersEmptyResponse>({
        path: `/compliance-of-requirements`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
  countries = {
    /**
     * @description return countries
     *
     * @tags countries
     * @name CountriesList
     * @request GET:/countries
     */
    countriesList: (params: RequestParams = {}) =>
      this.request<EntityCommonDictionary[], ControllersEmptyResponse>({
        path: `/countries`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description return regions
     *
     * @tags countries
     * @name RegionsDetail
     * @request GET:/countries/{country_id}/regions
     */
    regionsDetail: (countryId: string, params: RequestParams = {}) =>
      this.request<EntityCommonDictionary[], ControllersEmptyResponse>({
        path: `/countries/${countryId}/regions`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description return locations
     *
     * @tags countries
     * @name RegionsLocationDetail
     * @request GET:/countries/{country_id}/regions/{region_id}/location
     */
    regionsLocationDetail: (countryId: string, regionId: string, params: RequestParams = {}) =>
      this.request<EntityCommonDictionary[], ControllersEmptyResponse>({
        path: `/countries/${countryId}/regions/${regionId}/location`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
  currency = {
    /**
     * @description return currencies
     *
     * @tags dictionaries
     * @name CurrencyList
     * @request GET:/currency
     */
    currencyList: (params: RequestParams = {}) =>
      this.request<EntityCommonDictionary[], ControllersEmptyResponse>({
        path: `/currency`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
  drivingLicenses = {
    /**
     * @description return driving licenses
     *
     * @tags dictionaries
     * @name DrivingLicensesList
     * @request GET:/driving-licenses
     */
    drivingLicensesList: (params: RequestParams = {}) =>
      this.request<EntityCommonDictionary[], ControllersEmptyResponse>({
        path: `/driving-licenses`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
  educationLevel = {
    /**
     * @description return education level
     *
     * @tags dictionaries
     * @name EducationLevelList
     * @request GET:/education-level
     */
    educationLevelList: (params: RequestParams = {}) =>
      this.request<EntityCommonDictionary[], ControllersEmptyResponse>({
        path: `/education-level`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
  emailNotificationsSettings = {
    /**
     * @description return dictionary for email notification settings
     *
     * @tags dictionaries
     * @name EmailNotificationsSettingsList
     * @request GET:/email-notifications-settings
     */
    emailNotificationsSettingsList: (params: RequestParams = {}) =>
      this.request<EntityCommonDictionary[], ControllersEmptyResponse>({
        path: `/email-notifications-settings`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
  employee = {
    /**
     * @description return number of employees
     *
     * @tags dictionaries
     * @name NumbersList
     * @request GET:/employee/numbers
     */
    numbersList: (params: RequestParams = {}) =>
      this.request<InternalServicesModelsEmployee[], ControllersEmptyResponse>({
        path: `/employee/numbers`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
  employments = {
    /**
     * @description return employments
     *
     * @tags dictionaries
     * @name EmploymentsList
     * @request GET:/employments
     */
    employmentsList: (params: RequestParams = {}) =>
      this.request<EntityCommonDictionary[], ControllersEmptyResponse>({
        path: `/employments`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
  faq = {
    /**
     * @description returns questions for the question page
     *
     * @tags faq
     * @name GetFaq
     * @request GET:/faq
     */
    getFaq: (
      query?: {
        /**
         * minimum value: 0, maximum value: 100
         * @min 0
         * @max 100
         * @default 10
         */
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<EntityFaq[], ControllersEmptyResponse>({
        path: `/faq`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),
  };
  feedback = {
    /**
     * @description create feedback
     *
     * @tags feedback
     * @name FeedbackCreate
     * @request POST:/feedback
     */
    feedbackCreate: (request: EntityCreateFeedbackRequest, params: RequestParams = {}) =>
      this.request<
        ControllersEmptyResponse,
        InternalControllersErrResponse | ControllersEmptyResponse
      >({
        path: `/feedback`,
        method: 'POST',
        body: request,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  file = {
    /**
     * @description Upload file (only jpeg)
     *
     * @tags upload
     * @name UploadCreate
     * @request POST:/file/upload
     */
    uploadCreate: (
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
      }),
  };
  genders = {
    /**
     * @description return genders
     *
     * @tags dictionaries
     * @name GendersList
     * @request GET:/genders
     */
    gendersList: (params: RequestParams = {}) =>
      this.request<EntityCommonDictionary[], ControllersEmptyResponse>({
        path: `/genders`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
  init = {
    /**
     * @description get main page feed
     *
     * @tags init
     * @name IndexList
     * @summary Main page feed
     * @request GET:/init/index
     */
    indexList: (params: RequestParams = {}) =>
      this.request<EntityMainPageResponse, any>({
        path: `/init/index`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
  jobTypes = {
    /**
     * @description return job types
     *
     * @tags dictionaries
     * @name JobTypesList
     * @request GET:/job-types
     */
    jobTypesList: (params: RequestParams = {}) =>
      this.request<EntityCommonDictionary[], ControllersEmptyResponse>({
        path: `/job-types`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
  languageLevel = {
    /**
     * @description return language levels
     *
     * @tags languages
     * @name LanguageLevelList
     * @request GET:/language-level
     */
    languageLevelList: (params: RequestParams = {}) =>
      this.request<EntityCommonDictionary[], ControllersEmptyResponse>({
        path: `/language-level`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
  languages = {
    /**
     * @description return languages
     *
     * @tags languages
     * @name LanguagesList
     * @request GET:/languages
     */
    languagesList: (params: RequestParams = {}) =>
      this.request<EntityCommonDictionary[], ControllersEmptyResponse>({
        path: `/languages`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
  location = {
    /**
     * @description return locations
     *
     * @tags countries
     * @name LocationList
     * @request GET:/location
     */
    locationList: (
      query?: {
        /** title */
        title?: string;
        /** id or ids */
        ids?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<
        EntityCommonDictionary[],
        InternalControllersErrResponse | ControllersEmptyResponse
      >({
        path: `/location`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),
  };
  maritalStatuses = {
    /**
     * @description return marital statuses
     *
     * @tags dictionaries
     * @name MaritalStatusesList
     * @request GET:/marital-statuses
     */
    maritalStatusesList: (params: RequestParams = {}) =>
      this.request<EntityCommonDictionary[], ControllersEmptyResponse>({
        path: `/marital-statuses`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
  materials = {
    /**
     * @description return articles for the main page and articles page
     *
     * @tags materials
     * @name ArticlesList
     * @request GET:/materials/articles
     */
    articlesList: (
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
      }),

    /**
     * @description return article by id
     *
     * @tags materials
     * @name ArticlesDetail
     * @request GET:/materials/articles/{id}
     */
    articlesDetail: (id: string, params: RequestParams = {}) =>
      this.request<EntityMaterial, InternalControllersErrResponse | ControllersEmptyResponse>({
        path: `/materials/articles/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description return news for the main page and news page
     *
     * @tags materials
     * @name NewsList
     * @request GET:/materials/news
     */
    newsList: (
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
      }),

    /**
     * @description return news by id
     *
     * @tags materials
     * @name NewsDetail
     * @request GET:/materials/news/{id}
     */
    newsDetail: (id: string, params: RequestParams = {}) =>
      this.request<EntityMaterial, InternalControllersErrResponse | ControllersEmptyResponse>({
        path: `/materials/news/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
  payoutPeriods = {
    /**
     * @description return payout periods
     *
     * @tags dictionaries
     * @name PayoutPeriodsList
     * @request GET:/payout-periods
     */
    payoutPeriodsList: (params: RequestParams = {}) =>
      this.request<EntityCommonDictionary[], ControllersEmptyResponse>({
        path: `/payout-periods`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
  religions = {
    /**
     * @description return religions
     *
     * @tags dictionaries
     * @name ReligionsList
     * @request GET:/religions
     */
    religionsList: (params: RequestParams = {}) =>
      this.request<EntityCommonDictionary[], ControllersEmptyResponse>({
        path: `/religions`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
  relocations = {
    /**
     * @description return relocations
     *
     * @tags dictionaries
     * @name RelocationsList
     * @request GET:/relocations
     */
    relocationsList: (params: RequestParams = {}) =>
      this.request<EntityCommonDictionary[], ControllersEmptyResponse>({
        path: `/relocations`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
  requirementsLevel = {
    /**
     * @description return dictionary for show requirements level
     *
     * @tags dictionaries
     * @name RequirementsLevelList
     * @request GET:/requirements-level
     */
    requirementsLevelList: (params: RequestParams = {}) =>
      this.request<EntityCommonDictionary[], ControllersEmptyResponse>({
        path: `/requirements-level`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
  responseCanBeDoneBy = {
    /**
     * @description return dictionary for vacancy (response can be done by)
     *
     * @tags dictionaries
     * @name ResponseCanBeDoneByList
     * @request GET:/response-can-be-done-by
     */
    responseCanBeDoneByList: (params: RequestParams = {}) =>
      this.request<EntityCommonDictionary[], ControllersEmptyResponse>({
        path: `/response-can-be-done-by`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
  resume = {
    /**
     * @description create resume for current user
     *
     * @tags resume
     * @name ResumeCreate
     * @request POST:/resume
     */
    resumeCreate: (request: EntityCreateResumeRequest, params: RequestParams = {}) =>
      this.request<EntityResume, InternalControllersErrResponse | ControllersEmptyResponse>({
        path: `/resume`,
        method: 'POST',
        body: request,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  resumes = {
    /**
     * @description return published resumes
     *
     * @tags resume
     * @name ResumesList
     * @request GET:/resumes
     */
    resumesList: (
      query?: {
        /** 0 [last 24 hours], 1 [last 5 days], 2 [last 14 days], 3 [last month] */
        date_of_post?: 0 | 1 | 2 | 3;
        /** 657.89 */
        salary_estimate_to?: number;
        /** specialization id(s) */
        specialization?: string[];
        /** currency id */
        currency?: string;
        /** employment id(s) */
        employment?: string[];
        /** features id(s) */
        features?: string[];
        /** education level id(s) */
        education_level?: string[];
        /** search by job title */
        search_by_job_tile?: string;
        /** search by city */
        search_by_city?: string;
        /** show resumes created by the current user */
        only_my?: boolean;
        /**
         * minimum value: 0, maximum value: 100
         * @min 0
         * @max 100
         * @default 10
         */
        limit?: number;
        /**
         * default value: 0
         * @default 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        EntityGetResumesResponse,
        InternalControllersErrResponse | ControllersEmptyResponse
      >({
        path: `/resumes`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Request by json personal data
     *
     * @tags resume
     * @name RequestPersonalDataDetail
     * @summary Request personal data of resume
     * @request GET:/resumes/request-personal-data/{id}
     */
    requestPersonalDataDetail: (
      id: string,
      query: {
        /** en or th */
        locale?: string;
        /** vacancy id */
        vacancy_id: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<EntityRequestPersonalDataResponse, void>({
        path: `/resumes/request-personal-data/${id}`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description return published or created by current user resume
     *
     * @tags resume
     * @name ResumesDetail
     * @request GET:/resumes/{id}
     */
    resumesDetail: (id: string, params: RequestParams = {}) =>
      this.request<EntityResume, InternalControllersErrResponse | ControllersEmptyResponse>({
        path: `/resumes/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description delete resume by id
     *
     * @tags resume
     * @name ResumesDelete
     * @request DELETE:/resumes/{id}
     */
    resumesDelete: (id: string, params: RequestParams = {}) =>
      this.request<
        ControllersEmptyResponse,
        InternalControllersErrResponse | ControllersEmptyResponse
      >({
        path: `/resumes/${id}`,
        method: 'DELETE',
        format: 'json',
        ...params,
      }),

    /**
     * @description copy resume
     *
     * @tags resume
     * @name CopyCreate
     * @request POST:/resumes/{id}/copy
     */
    copyCreate: (id: string, params: RequestParams = {}) =>
      this.request<EntityResume, InternalControllersErrResponse | ControllersEmptyResponse>({
        path: `/resumes/${id}/copy`,
        method: 'POST',
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Provide by json access
     *
     * @tags resume
     * @name ProvideDetail
     * @summary Provide access to resume
     * @request GET:/resumes/{id}/provide
     */
    provideDetail: (
      id: string,
      query: {
        /** user id (who want access) */
        user_id: string;
        /** en or th */
        locale?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<EntityProvideAccessToResumeRequest, void>({
        path: `/resumes/${id}/provide`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description publish resume by id
     *
     * @tags resume
     * @name PublishCreate
     * @request POST:/resumes/{id}/publish
     */
    publishCreate: (id: string, params: RequestParams = {}) =>
      this.request<EntityResume, InternalControllersErrResponse | ControllersEmptyResponse>({
        path: `/resumes/${id}/publish`,
        method: 'POST',
        format: 'json',
        ...params,
      }),

    /**
     * @description unpublish resume by id
     *
     * @tags resume
     * @name UnpublishCreate
     * @request POST:/resumes/{id}/unpublish
     */
    unpublishCreate: (id: string, params: RequestParams = {}) =>
      this.request<EntityResume, InternalControllersErrResponse | ControllersEmptyResponse>({
        path: `/resumes/${id}/unpublish`,
        method: 'POST',
        format: 'json',
        ...params,
      }),
  };
  showEmail = {
    /**
     * @description return dictionary for show email
     *
     * @tags dictionaries
     * @name ShowEmailList
     * @request GET:/show-email
     */
    showEmailList: (params: RequestParams = {}) =>
      this.request<EntityCommonDictionary[], ControllersEmptyResponse>({
        path: `/show-email`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
  showPhoneNumber = {
    /**
     * @description return dictionary for show phone number
     *
     * @tags dictionaries
     * @name ShowPhoneNumberList
     * @request GET:/show-phone-number
     */
    showPhoneNumberList: (params: RequestParams = {}) =>
      this.request<EntityCommonDictionary[], ControllersEmptyResponse>({
        path: `/show-phone-number`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
  skills = {
    /**
     * @description return skills
     *
     * @tags dictionaries
     * @name SkillsList
     * @request GET:/skills
     */
    skillsList: (
      query?: {
        /** title */
        title?: string;
        /** id or ids */
        ids?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<
        EntityCommonDictionary[],
        InternalControllersErrResponse | ControllersEmptyResponse
      >({
        path: `/skills`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),
  };
  sourceOfInformation = {
    /**
     * @description return source of information
     *
     * @tags source-of-information
     * @name SourceOfInformationList
     * @request GET:/source_of_information
     */
    sourceOfInformationList: (params: RequestParams = {}) =>
      this.request<InternalServicesModelsSourceOfInformation[], ControllersEmptyResponse>({
        path: `/source_of_information`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
  specializations = {
    /**
     * @description return specializations
     *
     * @tags dictionaries
     * @name SpecializationsList
     * @request GET:/specializations
     */
    specializationsList: (
      query?: {
        /** title */
        title?: string;
        /** id or ids */
        ids?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<EntityCommonDictionary[], ControllersEmptyResponse>({
        path: `/specializations`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description return job positions for chosen specializations
     *
     * @tags dictionaries
     * @name JobPositionsDetail
     * @request GET:/specializations/{specialization_id}/job-positions
     */
    jobPositionsDetail: (
      specializationId: string,
      query?: {
        /** title */
        title?: string;
        /** position id or ids */
        position_ids?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<
        EntityCommonDictionary[],
        InternalControllersErrResponse | ControllersEmptyResponse
      >({
        path: `/specializations/${specializationId}/job-positions`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),
  };
  staticPages = {
    /**
     * @description return static page by urn
     *
     * @tags static-pages
     * @name StaticPagesDetail
     * @request GET:/static-pages/{urn}
     */
    staticPagesDetail: (urn: string, params: RequestParams = {}) =>
      this.request<EntityStaticPage, ControllersEmptyResponse>({
        path: `/static-pages/${urn}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
  userService = {
    /**
     * @description restore password by email
     *
     * @tags user-service
     * @name ForgotPasswordCreate
     * @request POST:/user-service/forgot-password
     */
    forgotPasswordCreate: (request: EntityForgotPasswordRequest, params: RequestParams = {}) =>
      this.request<
        ControllersEmptyResponse,
        UsersControllersErrResponse | ControllersEmptyResponse
      >({
        path: `/user-service/forgot-password`,
        method: 'POST',
        body: request,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description verify secret that sent to email
     *
     * @tags user-service
     * @name ForgotPasswordVerifyDetail
     * @request GET:/user-service/forgot-password-verify/{secret}
     */
    forgotPasswordVerifyDetail: (secret: string, params: RequestParams = {}) =>
      this.request<any, UsersControllersErrResponse | ControllersEmptyResponse>({
        path: `/user-service/forgot-password-verify/${secret}`,
        method: 'GET',
        ...params,
      }),

    /**
     * @description return info about current user
     *
     * @tags user-service
     * @name InfoList
     * @request GET:/user-service/info
     */
    infoList: (params: RequestParams = {}) =>
      this.request<EntityGetUserInfoResponse, ControllersEmptyResponse>({
        path: `/user-service/info`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description update info of current user
     *
     * @tags user-service
     * @name InfoUpdate
     * @request PUT:/user-service/info
     */
    infoUpdate: (request: EntityUpdateUserInfoRequest, params: RequestParams = {}) =>
      this.request<
        ControllersEmptyResponse,
        UsersControllersErrResponse | ControllersEmptyResponse
      >({
        path: `/user-service/info`,
        method: 'PUT',
        body: request,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description return user info by id
     *
     * @tags user-service
     * @name InfoDetail
     * @request GET:/user-service/info/{id}
     */
    infoDetail: (id: string, params: RequestParams = {}) =>
      this.request<EntityGetUserInfoResponse, ControllersEmptyResponse>({
        path: `/user-service/info/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description sign in with email and password
     *
     * @tags user-service
     * @name LoginCreate
     * @request POST:/user-service/login
     */
    loginCreate: (request: EntitySignInRequest, params: RequestParams = {}) =>
      this.request<ControllersEmptyResponse, UsersControllersErrResponse | void>({
        path: `/user-service/login`,
        method: 'POST',
        body: request,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description sign in with facebook
     *
     * @tags user-service
     * @name LoginFacebookList
     * @request GET:/user-service/login/facebook
     */
    loginFacebookList: (params: RequestParams = {}) =>
      this.request<any, UsersControllersErrResponse>({
        path: `/user-service/login/facebook`,
        method: 'GET',
        ...params,
      }),

    /**
     * @description sign in with google
     *
     * @tags user-service
     * @name LoginGoogleList
     * @request GET:/user-service/login/google
     */
    loginGoogleList: (params: RequestParams = {}) =>
      this.request<any, UsersControllersErrResponse>({
        path: `/user-service/login/google`,
        method: 'GET',
        ...params,
      }),

    /**
     * @description sign out
     *
     * @tags user-service
     * @name LogoutCreate
     * @request POST:/user-service/logout
     */
    logoutCreate: (params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/user-service/logout`,
        method: 'POST',
        ...params,
      }),

    /**
     * @description return info about current user
     *
     * @tags user-service
     * @name GetUserService
     * @request GET:/user-service/me
     */
    getUserService: (params: RequestParams = {}) =>
      this.request<EntityGetMeResponse, ControllersEmptyResponse>({
        path: `/user-service/me`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description sign up with email and password
     *
     * @tags user-service
     * @name RegistrationCreate
     * @request POST:/user-service/registration
     */
    registrationCreate: (request: EntitySignUpRequest, params: RequestParams = {}) =>
      this.request<ControllersEmptyResponse, UsersControllersErrResponse>({
        path: `/user-service/registration`,
        method: 'POST',
        body: request,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description confirm email
     *
     * @tags user-service
     * @name RegistrationConfirmDetail
     * @request GET:/user-service/registration/confirm/{hash}
     */
    registrationConfirmDetail: (hash: string, params: RequestParams = {}) =>
      this.request<any, UsersControllersErrResponse>({
        path: `/user-service/registration/confirm/${hash}`,
        method: 'GET',
        ...params,
      }),

    /**
     * @description callback for sign in with facebook
     *
     * @tags user-service
     * @name RegistrationFacebookCallbackList
     * @request GET:/user-service/registration/facebook/callback
     */
    registrationFacebookCallbackList: (
      query: {
        /** code */
        code: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, UsersControllersErrResponse>({
        path: `/user-service/registration/facebook/callback`,
        method: 'GET',
        query: query,
        ...params,
      }),

    /**
     * @description callback for sign in with google
     *
     * @tags user-service
     * @name RegistrationGoogleCallbackList
     * @request GET:/user-service/registration/google/callback
     */
    registrationGoogleCallbackList: (
      query: {
        /** code */
        code: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, UsersControllersErrResponse>({
        path: `/user-service/registration/google/callback`,
        method: 'GET',
        query: query,
        ...params,
      }),

    /**
     * @description reset password
     *
     * @tags user-service
     * @name ResetPasswordCreate
     * @request POST:/user-service/reset-password
     */
    resetPasswordCreate: (request: EntityResetPasswordRequest, params: RequestParams = {}) =>
      this.request<
        ControllersEmptyResponse,
        UsersControllersErrResponse | ControllersEmptyResponse
      >({
        path: `/user-service/reset-password`,
        method: 'POST',
        body: request,
        type: ContentType.Json,
        ...params,
      }),
  };
  vacancies = {
    /**
     * @description return published vacancies
     *
     * @tags vacancy
     * @name VacanciesList
     * @request GET:/vacancies
     */
    vacanciesList: (
      query?: {
        /** show company's vacancies */
        company_id?: string;
        /** 0 [last 24 hours], 1 [last 5 days], 2 [last 14 days], 3 [last month] */
        date_of_post?: 0 | 1 | 2 | 3;
        /** specialization id(s) */
        specialization?: string[];
        /** 657.89 */
        salary_estimate_from?: number;
        /** currency id */
        currency?: string;
        /** employment id(s) */
        employment?: string[];
        /** features id(s) */
        features?: string[];
        /** education level id(s) */
        education_level?: string[];
        /** work experience id(s) */
        work_experience?: string[];
        /** search by job title */
        search_by_job_tile?: string;
        /** search by city */
        search_by_city?: string;
        /** include archived vacancies */
        show_archived?: boolean;
        /** show vacancies created by the current user */
        only_my?: boolean;
        /**
         * minimum value: 0, maximum value: 100
         * @min 0
         * @max 100
         * @default 10
         */
        limit?: number;
        /**
         * default value: 0
         * @default 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        EntityGetVacanciesResponse,
        ControllersEmptyResponse | InternalControllersErrResponse
      >({
        path: `/vacancies`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Request by json personal data
     *
     * @tags vacancy
     * @name RequestPersonalDataDetail
     * @summary Request personal data of vacancy
     * @request GET:/vacancies/request-personal-data/{id}
     */
    requestPersonalDataDetail: (
      id: string,
      query: {
        /** en or th */
        locale?: string;
        /** resume id */
        resume_id: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<EntityRequestPersonalDataResponse, void>({
        path: `/vacancies/request-personal-data/${id}`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description return published or created by current user vacancy
     *
     * @tags vacancy
     * @name VacanciesDetail
     * @request GET:/vacancies/{id}
     */
    vacanciesDetail: (id: string, params: RequestParams = {}) =>
      this.request<EntityVacancy, InternalControllersErrResponse | ControllersEmptyResponse>({
        path: `/vacancies/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description delete vacancy by id
     *
     * @tags vacancy
     * @name VacanciesDelete
     * @request DELETE:/vacancies/{id}
     */
    vacanciesDelete: (id: string, params: RequestParams = {}) =>
      this.request<
        ControllersEmptyResponse,
        InternalControllersErrResponse | ControllersEmptyResponse
      >({
        path: `/vacancies/${id}`,
        method: 'DELETE',
        format: 'json',
        ...params,
      }),

    /**
     * @description archive vacancy by id
     *
     * @tags vacancy
     * @name ArchiveCreate
     * @request POST:/vacancies/{id}/archive
     */
    archiveCreate: (id: string, params: RequestParams = {}) =>
      this.request<
        ControllersEmptyResponse,
        InternalControllersErrResponse | ControllersEmptyResponse
      >({
        path: `/vacancies/${id}/archive`,
        method: 'POST',
        format: 'json',
        ...params,
      }),

    /**
     * @description Provide by json access
     *
     * @tags vacancy
     * @name ProvideDetail
     * @summary Provide access to vacancy
     * @request GET:/vacancies/{id}/provide
     */
    provideDetail: (
      id: string,
      query: {
        /** user id (who want access) */
        user_id: string;
        /** en or th */
        locale?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<EntityProvideAccessToVacancyResponse, void>({
        path: `/vacancies/${id}/provide`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description publish vacancy by id
     *
     * @tags vacancy
     * @name PublishCreate
     * @request POST:/vacancies/{id}/publish
     */
    publishCreate: (id: string, params: RequestParams = {}) =>
      this.request<
        ControllersEmptyResponse,
        InternalControllersErrResponse | ControllersEmptyResponse
      >({
        path: `/vacancies/${id}/publish`,
        method: 'POST',
        format: 'json',
        ...params,
      }),

    /**
     * @description unarchive vacancy by id
     *
     * @tags vacancy
     * @name UnarchiveCreate
     * @request POST:/vacancies/{id}/unarchive
     */
    unarchiveCreate: (id: string, params: RequestParams = {}) =>
      this.request<
        ControllersEmptyResponse,
        InternalControllersErrResponse | ControllersEmptyResponse
      >({
        path: `/vacancies/${id}/unarchive`,
        method: 'POST',
        format: 'json',
        ...params,
      }),

    /**
     * @description unpublish vacancy by id
     *
     * @tags vacancy
     * @name UnpublishCreate
     * @request POST:/vacancies/{id}/unpublish
     */
    unpublishCreate: (id: string, params: RequestParams = {}) =>
      this.request<
        ControllersEmptyResponse,
        InternalControllersErrResponse | ControllersEmptyResponse
      >({
        path: `/vacancies/${id}/unpublish`,
        method: 'POST',
        format: 'json',
        ...params,
      }),
  };
  vacancy = {
    /**
     * @description create vacancy
     *
     * @tags vacancy
     * @name VacancyCreate
     * @request POST:/vacancy
     */
    vacancyCreate: (request: EntityCreateVacancyRequest, params: RequestParams = {}) =>
      this.request<EntityVacancy, InternalControllersErrResponse | ControllersEmptyResponse>({
        path: `/vacancy`,
        method: 'POST',
        body: request,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  workFeatures = {
    /**
     * @description return work features
     *
     * @tags dictionaries
     * @name WorkFeaturesList
     * @request GET:/work-features
     */
    workFeaturesList: (params: RequestParams = {}) =>
      this.request<EntityCommonDictionary[], ControllersEmptyResponse>({
        path: `/work-features`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
  yearsOfExperience = {
    /**
     * @description return education level
     *
     * @tags dictionaries
     * @name YearsOfExperienceList
     * @request GET:/years-of-experience
     */
    yearsOfExperienceList: (params: RequestParams = {}) =>
      this.request<EntityCommonDictionary[], ControllersEmptyResponse>({
        path: `/years-of-experience`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
}
