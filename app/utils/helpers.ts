import { useMatches } from '@remix-run/react';
import { useMemo } from 'react';
import type { EntityCommonDictionary, EntityCompany } from 'shared/client/data-contracts';
import type { Dictionary } from 'shared/client/dictionary-contracts';
import type { MultiLingualValue } from 'shared/client/vacancies-contracts';
import { ClientFactory } from 'shared/clientFactory';
import routes from 'shared/routing/routes';
import type { Company } from 'shared/v2/companies';
import type { DictionaryInner } from 'shared/v2/dictionary';
import { MediaApi } from 'shared/v2/media';
import type { Response, Statistics } from 'shared/v2/responses';
import type { Resume } from 'shared/v2/resumes';
import { type UserInfo, UserServiceApi } from 'shared/v2/users';
import type { Vacancy } from 'shared/v2/vacancies';
import * as url from 'url';
import { v4 as uuidv4 } from 'uuid';

import type ReferenceService from '~/services/reference/referenceService';
import type { ISession, ISessionStorage } from '~/storages/session.server';
import { getSessionStorage } from '~/storages/session.server';
import type { IUserContextSessions } from '~/storages/userContext.server';
import { getUserContextStorage } from '~/storages/userContext.server';
import type { LanguageEnum } from '~/types/enums/languageEnum';
import type { IUserContext } from '~/types/interfaces/iUserContext';

import { API_BASE_URL, DEFAULT_COMPANY_LOGO, DEFAULT_USER_AVATAR } from './constants';

/**
 * This should be used any time the redirect path is user-provided
 * (Like the query string on our login/signup pages). This avoids
 * open-redirect vulnerabilities.
 * @param {string} to The redirect destination
 * @param {string} defaultRedirect The redirect to use if the to is unsafe.
 */
export function safeRedirect(
  to: FormDataEntryValue | string | null | undefined,
  defaultRedirect: string = routes.root,
) {
  if (!to || typeof to !== 'string') {
    return defaultRedirect;
  }

  if (!to.startsWith('/') || to.startsWith('//')) {
    return defaultRedirect;
  }

  return to;
}

interface RouteMatch {
  id: string;
  path: string;
  location: Location;
  params: Record<string, string>;
  uri: string;
  data?: Record<string, unknown>;
}

/**
 * This base hook is used in other hooks to quickly search for specific data
 * across all loader data using useMatches.
 * @param {string} id The route id
 * @returns {JSON|undefined} The router data or undefined if not found
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useMatchesData(id: string): Record<string, any> | undefined {
  const matchingRoutes = useMatches();
  const route = useMemo<RouteMatch | undefined>(
    () => matchingRoutes.find((route) => route.id === id) as RouteMatch | undefined,
    [matchingRoutes, id],
  );
  return route?.data;
}

export function getValueLang(data?: MultiLingualValue | null, lang?: LanguageEnum) {
  if (data && lang) {
    return data?.[lang];
  }
  return data?.th;
}

export function getValueFromDictionaries(
  entries?: EntityCommonDictionary[],
  value?: string,
  lang?: LanguageEnum,
) {
  return entries?.find((item) => item.id === value)?.[lang || 'en']?.title;
}

export function getValueFromDictionariesNewWay(
  entries?: DictionaryInner[],
  value?: string,
  lang?: LanguageEnum,
) {
  return entries?.find((item) => item.id === value)?.value?.[lang || 'en'];
}

export function getIdFromDictionaries(entries?: EntityCommonDictionary[], value?: string) {
  return entries?.find((item) => item.id === value)?.id;
}

export function calculateAge(birthdate?: string) {
  if (!birthdate) return '';

  const today = new Date();
  const birthDate = new Date(birthdate);

  if (Number.isNaN(birthDate.getTime())) {
    throw new Error('Invalid birthdate');
  }

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age -= 1;
  }

  return age;
}

export function calculateTotalDurationWorkExperience(months?: number, lang?: LanguageEnum): string {
  if (months === undefined || !Number.isInteger(months) || months < 0) {
    return 'Invalid input';
  }

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  const yearLabel = lang === 'th' ? 'ปี' : 'year';
  const monthLabel = lang === 'th' ? 'เดือน' : 'month';
  const noExperienceLabel = lang === 'th' ? 'โดยไม่มีประสบการณ์' : 'with no experience';

  if (years === 0) {
    return remainingMonths !== 0
      ? `${remainingMonths} ${monthLabel}${remainingMonths !== 1 ? 's' : ''}`
      : `${noExperienceLabel}`;
  }
  if (remainingMonths === 0) {
    return years !== 0 ? `${years} ${yearLabel}${years !== 1 ? 's' : ''}` : '';
  }
  return `${years} ${yearLabel}${years !== 1 ? 's' : ''} ${remainingMonths} ${monthLabel}${
    remainingMonths !== 1 ? 's' : ''
  }`;
}

export function parseDate(dateString: string): Date | null {
  const dateParts = dateString.split('-');
  if (dateParts.length === 3) {
    const day = Number(dateParts[0]);
    const month = Number(dateParts[1]) - 1; // Month is zero-based in JavaScript Date
    const year = Number(dateParts[2]);
    if (Number.isInteger(day) && Number.isInteger(month) && Number.isInteger(year)) {
      return new Date(year, month, day);
    }
  }
  return null;
}

export function getTitleArray(data: EntityCommonDictionary[] | undefined, lang: 'en' | 'th') {
  if (!data) {
    return [];
  }
  return data.map((item) => {
    const id = item.id || '';
    const title = item[lang]?.title || '';
    return [id, title];
  });
}

export function extractTitles(array?: EntityCommonDictionary[], lang?: 'en' | 'th') {
  const result: [string, string][] = [];

  array?.forEach((obj) => {
    const { id } = obj;
    const title = obj[lang || 'en']?.title || 'No title specified';

    result.push([id as string, title]);
  });

  return result;
}

// used in dictionaries that come upon request from API v2
export function extractTitlesNewWay(
  array?: Dictionary | EntityCommonDictionary[],
  lang?: 'en' | 'th',
) {
  const result: [string, string][] = [];

  (array as Dictionary)?.forEach((obj) => {
    const { id } = obj;
    const title = obj.value?.[lang || 'en'] || 'No title specified';

    result.push([id, title]);
  });

  return result;
}

export function extractCompanyData(companies?: Company[]): [string, string][] {
  const result: [string, string][] = [];

  companies?.forEach((company) => {
    const companyID: string = company.id ?? '';
    const companyName: string = company.name ?? '';

    result.push([companyID, companyName]);
  });

  return result;
}

export function transformArray(entities?: EntityCompany[]): [string, string][] {
  return entities?.map((entity) => [entity?.id || '', entity?.name || '']) || [];
}
export function getFieldsFilledPercentage(userInfo: UserInfo): string {
  const totalFields = 11;
  const ignoredFields = ['user_id', 'primary_language', 'notifications', 'email_confirmed'];

  const filledCount = Object.keys(userInfo)
    .filter((field): field is keyof UserInfo => !ignoredFields.includes(field))
    .filter(
      (field): boolean =>
        userInfo[field] !== undefined &&
        userInfo[field] !== '' &&
        userInfo[field] !== null &&
        userInfo[field] !== '/images/user/avatarDefault.png' &&
        (typeof userInfo[field] !== 'object' ||
          Object.keys(userInfo[field] as object).every(
            (subField): boolean =>
              (userInfo[field] as object)[subField as keyof object] !== undefined &&
              (userInfo[field] as object)[subField as keyof object] !== '' &&
              (userInfo[field] as object)[subField as keyof object] !== null &&
              (typeof (userInfo[field] as object)[subField as keyof object] !== 'object' ||
                Object.keys((userInfo[field] as object)[subField as keyof object] as object).every(
                  (subSubField): boolean =>
                    (userInfo[field] as object)[subField as keyof object][
                      subSubField as keyof object
                    ] !== undefined &&
                    (userInfo[field] as object)[subField as keyof object][
                      subSubField as keyof object
                    ] !== '' &&
                    (userInfo[field] as object)[subField as keyof object][
                      subSubField as keyof object
                    ] !== null,
                )),
          )),
    ).length;

  const percentage = (filledCount / (totalFields - ignoredFields.length)) * 100;
  return percentage.toFixed(0);
}

export function findCompanyById(id?: string, companies?: Company[] | null): Company | undefined {
  if (companies) return companies.find((company) => company.id === id);
  return undefined;
}

export function compareArrays<T>(array1?: T[] | null, array2?: T[] | null): boolean {
  if (!array1 || !array2) {
    return false;
  }

  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i += 1) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
}

interface Context {
  userContext: IUserContext;
  session: ISession;
  references: ReferenceService;
}

export async function apiCall<T>(
  url: string,
  method: 'POST' | 'GET' | 'PATCH' | 'PUT' | 'DELETE',
  context?: Context,
  body?: object | null,
): Promise<T> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    Cookie: context?.session?.session?.split(';')[0] || '',
  };

  const options: RequestInit = {
    method,
    headers,
    body: body ? JSON.stringify(body) : null,
  };

  console.log('url', `${API_BASE_URL}${url}`);
  console.log('options', options);

  try {
    const response = await fetch(`${API_BASE_URL}${url}`, options).then((data) => data.json());
    console.log('response', response);
    return response as T;
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
}
export function decodeBase64ToFile(base64String: string): File | undefined {
  const commaIndex = base64String.indexOf(',');
  const base64Data = base64String.slice(commaIndex + 1);

  if (isBase64String(base64Data)) {
    const parts = base64String.split(',');
    const type = parts[0];
    const base64Data = parts[1];
    const fileName = `${uuidv4()}.${type}`;

    const mimeType = type.split(';')[0].split(':')[1];
    const blobImage = b64toBlob(base64Data, mimeType);
    const file = new File([blobImage], fileName, { type: mimeType });

    return file;
  }
  return undefined;
}

function b64toBlob(b64Data: string, contentType: string, sliceSize?: number) {
  const finalContentType = contentType || '';
  const finalSliceSize = sliceSize || 512;

  const byteCharacters = atob(b64Data);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += finalSliceSize) {
    const slice = byteCharacters.slice(offset, offset + finalSliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i += 1) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);

    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, { type: finalContentType });
  return blob;
}

export function isBase64String(str: string) {
  try {
    return btoa(atob(str)) === str;
  } catch (err) {
    return false;
  }
}

export async function getFileUrl(logo_uri?: string, context?: Context) {
  if (
    logo_uri === 'squareAvatarDefault.png' ||
    logo_uri === 'https://api.test.upjob.com/m/path_to_photo' ||
    logo_uri === 'path_to_photo' ||
    logo_uri === '/images/user/squareAvatarDefault.png' ||
    logo_uri === '/images/user/avatarDefault.png' ||
    logo_uri === DEFAULT_USER_AVATAR ||
    logo_uri === DEFAULT_COMPANY_LOGO
  ) {
    return null;
  }
  if (logo_uri?.startsWith('https://api.test.upjob.com/m')) {
    return logo_uri.split('/m/')[1];
  }

  const file = decodeBase64ToFile(logo_uri || '');
  let filUrl;

  try {
    if (file) {
      const form = new FormData();
      form.append('file', file);

      const fileBlob = new Blob([file], { type: file.type });
      const clientMediaV2 = ClientFactory.createClient(MediaApi, context?.session);
      const response = clientMediaV2.postFilesUpload({ file_name: fileBlob });
      const newFile = (await response).url;

      if (newFile) {
        filUrl = newFile;
      } else {
        filUrl = logo_uri !== '/images/user/avatarDefault.png' ? logo_uri?.split('/m/')[1] : null;
      }
    }
  } catch (error) {
    // Handle error
    console.error(error);
  }

  return filUrl;
}

type CollectDataArgument = {
  [key: string]: string | string[];
};

export function collectData(
  context: Context,
  ...args: CollectDataArgument[]
): object[] | undefined {
  const result: { [key: string]: string | object | undefined | null }[] = [];

  const maxArrayLength = Math.max(
    ...args.map((arg) => (Array.isArray(Object.values(arg)[0]) ? Object.values(arg)[0].length : 1)),
  );

  for (let i = 0; i < maxArrayLength; i += 1) {
    const obj: { [key: string]: string | object | undefined | null } = {};

    args.forEach((arg) => {
      const key = Object.keys(arg)[0];
      const value = Array.isArray(arg[key]) ? arg[key][i] || null : arg[key];

      if (checkDataKey(key)) {
        obj[key] = value ? { [context.userContext.language]: value } : null;
      } else if (Array.isArray(value)) {
        obj[key] = value !== undefined ? value[i] : undefined;
      } else {
        obj[key] = value ?? undefined;
      }
    });

    result.push(obj);
  }

  const filteredResult = result.filter((obj) => !Object.values(obj).every((value) => value === ''));
  return filteredResult;
}

const checkDataKey = (key: string) =>
  key === 'from' || key === 'to' || key === 'start_year' || key === 'end_year';

export function getImageUrl(arg: string | undefined | null, type?: 'company' | 'user'): string {
  if (
    !arg ||
    arg === '' ||
    arg === undefined ||
    arg === null ||
    arg === 'path_to_photo' ||
    arg === 'https://api.test.upjob.com/m/path_to_photo' ||
    arg === '/images/user/squareAvatarDefault.png' ||
    arg === '/images/user/avatarDefault.png' ||
    arg === DEFAULT_USER_AVATAR ||
    arg === DEFAULT_COMPANY_LOGO ||
    (arg.startsWith('https://api.test.upjob.com') && !arg.split('/m/')[1])
  ) {
    return type === 'company' ? DEFAULT_COMPANY_LOGO : DEFAULT_USER_AVATAR;
  }

  if (arg.startsWith('https://api.test.upjob.com')) {
    return arg;
  }

  if (arg.startsWith('https://upjob.com')) {
    return type === 'company' ? DEFAULT_COMPANY_LOGO : DEFAULT_USER_AVATAR;
  }

  return `https://api.test.upjob.com/m/${arg}`;
}

export function updateSearchString(searchString: string, id?: string): string {
  const idParam = 'id=';

  if (!searchString) {
    if (id) return `?${idParam}${id}`;
    return '';
  }

  if (!id || searchString.includes(idParam)) {
    const regex = new RegExp(`(${idParam}[^&]*)`);
    return searchString.replace(regex, id ? `${idParam}${id}` : '');
  }

  return `${searchString}&${idParam}${id}`;
}

export function removeLoginSearch(url: string) {
  const searchParams = new URLSearchParams(url.split('?')[1] || '');
  searchParams.delete('login');
  const newSearchParams = searchParams.toString();
  return `${url.split('?')[0]}${newSearchParams ? `?${newSearchParams}` : ''}`;
}

export function getPaginationPages(currentPage: string | null, max_pages: string | null) {
  let pages: number[] = [];
  const parsedCurrentPage = currentPage ? +currentPage : 1;

  if (!currentPage || parsedCurrentPage <= 3) {
    pages = [2, 3, 4, 5, -1];
  } else if (parsedCurrentPage && max_pages && parsedCurrentPage + 1 < +max_pages) {
    pages = [parsedCurrentPage - 1, parsedCurrentPage, parsedCurrentPage + 1, +max_pages];
  } else if (
    parsedCurrentPage &&
    max_pages &&
    (parsedCurrentPage === +max_pages ||
      parsedCurrentPage + 2 === +max_pages ||
      parsedCurrentPage + 1 === +max_pages)
  ) {
    pages = [+max_pages - 2, +max_pages - 1, +max_pages];
  } else {
    pages = [];
  }
  return pages;
}

export function getPaginationRange(pages: number[], max_pages?: number, pageTokens?: string[]) {
  const paginationRange: { page: number; token: string | undefined }[] = [];

  if (pageTokens) {
    // const maxPages = companies?.data?.max_pages;
    // const pageTokens = companies?.data?.page_tokens;
    const pageCount = Math.min(max_pages || 0, pages.length);

    for (let index = 0; index < pageCount; index += 1) {
      let page = pages[index];
      if (page === -1) {
        page = index === 0 ? 1 : max_pages || 1;
      }
      const token = pageTokens[index] || '';

      paginationRange.push({
        page,
        token,
      });
    }
  }

  // Add the default value for the first page
  paginationRange.unshift({
    page: 1,
    token: undefined,
  });

  return paginationRange;
}

export function getQueryParams(urlString: string): Record<string, string | string[]> {
  const parsedUrl = new url.URL(urlString);
  const queryParams = parsedUrl.searchParams;

  const params: Record<string, string | string[]> = {};
  queryParams.forEach((value, key) => {
    if (params[key]) {
      if (Array.isArray(params[key])) {
        (params[key] as string[]).push(value);
      } else {
        params[key] = [params[key] as string, value];
      }
    } else {
      params[key] = value;
    }
  });

  return params;
}

export function checkCompleteness(resume?: Resume | null, vacancy?: Vacancy | null) {
  if (resume) {
    const result = Boolean(
      resume?.general_information?.email &&
        resume?.general_information?.first_name &&
        resume?.general_information?.last_name &&
        resume?.general_information?.phone &&
        resume?.general_information?.gender_id &&
        resume?.general_information?.language_of_notify_id &&
        resume?.job_position?.specialization_id &&
        resume?.job_position?.position &&
        resume?.job_position?.employment_type_ids &&
        resume?.job_position?.employment_type_ids?.length > 0 &&
        resume?.job_position?.salary_payout_period_id &&
        resume?.location?.country_id &&
        resume?.location?.region_id &&
        resume?.location?.city_id &&
        resume?.location?.relocation_id,
    );
    return result;
  }
  if (vacancy) {
    const result = Boolean(
      vacancy?.vacancy_page?.specialization_id &&
        vacancy?.vacancy_page?.position &&
        vacancy?.vacancy_page?.employment_type_ids &&
        vacancy.vacancy_page?.employment_type_ids?.length > 0 &&
        vacancy?.vacancy_page?.work_feature_ids &&
        vacancy.vacancy_page?.work_feature_ids?.length > 0 &&
        vacancy?.vacancy_page?.salary_payout_period_id &&
        vacancy?.vacancy_page?.currency_id &&
        vacancy?.contacts?.company_id &&
        vacancy?.contacts?.contact_phone &&
        vacancy?.contacts?.first_name &&
        vacancy?.contacts?.last_name &&
        vacancy?.location?.country_id &&
        vacancy?.location?.region_id &&
        vacancy?.location?.city_id &&
        vacancy?.location?.language_of_notify_id &&
        vacancy?.location?.number_of_employees_id &&
        vacancy?.responses_vacancy?.response_can_be_done_by_id &&
        vacancy?.responses_vacancy?.get_email_notifications_for_id &&
        vacancy?.responses_vacancy?.compliance_of_requirements_id &&
        vacancy?.responses_vacancy?.email_for_the_responses,
    );
    return result;
  }
  return undefined;
}

export const calculateStatistics = (
  responses?: Response[],
  id?: string,
): Statistics | undefined => {
  const statistics = responses?.reduce((acc, response) => {
    const isInvitation = id === response.target_id;
    const isRequest = id === response.shared_id;

    if (isInvitation) {
      acc.invitations_total = (acc.invitations_total || 0) + 1;

      if (response.state === 'NEW') {
        acc.new_invitations = (acc.new_invitations || 0) + 1;
      }
    } else if (isRequest) {
      acc.requests_total = (acc.requests_total || 0) + 1;

      if (response.state === 'VIEWED') {
        acc.requests_viewed = (acc.requests_viewed || 0) + 1;
      }

      if (response.state === 'APPROVED') {
        acc.requests_approved = (acc.requests_approved || 0) + 1;
      }

      if (response.state === 'APPROVED_AND_VIEWED') {
        acc.requests_approved_and_viewed = (acc.requests_approved_and_viewed || 0) + 1;
      }
    }

    return acc;
  }, {} as Statistics);

  return statistics;
};

export const setSessionStorage = async (request: Request, sessionCookie: string | null) => {
  const sessionStorage = await getSessionStorage(request);
  const session = sessionStorage.getSession();
  session.session = sessionCookie;
  sessionStorage.setSession(session);

  return sessionStorage;
};

export const getUserContext = async (request: Request) => {
  const userContextStorage = await getUserContextStorage(request);
  const userContext = userContextStorage.getUserContext();

  return { userContextStorage, userContext };
};

export const getUserInfoFromService = async (session: ISession) => {
  const clientService = ClientFactory.createClient(UserServiceApi, session);
  const response = await clientService.getUsersMe().then((data) => data.data);
  return response;
};

export const setUserInfoContext = async (
  userInfo: UserInfo,
  userContext: IUserContext,
  userContextStorage: IUserContextSessions,
) => {
  const updatedUserContext = {
    ...userContext,
    user: {
      ...userContext.user,
      id: userInfo?.user_id,
      firstName: userInfo?.first_name,
      lastName: userInfo?.last_name,
      email: userInfo?.email,
      avatar: userInfo?.photo ? userInfo?.photo : DEFAULT_USER_AVATAR,
      isAuthenticated: true,
      isEmailConfirm: userInfo?.email_confirmed,
      progressInfo: getFieldsFilledPercentage(userInfo),
      phone: userInfo.phone,
      birthday: userInfo.birthday,
      gender: userInfo.gender,
    },
  };

  userContextStorage.setUserContext(updatedUserContext);
};

export const setHeadersForResponse = async (
  sessionStorage?: ISessionStorage,
  userContextStorage?: IUserContextSessions,
) => {
  const headers: HeadersInit = new Headers();

  if (userContextStorage) {
    headers.append('Set-Cookie', await userContextStorage.commit());
  }

  if (sessionStorage) {
    headers.append('Set-Cookie', await sessionStorage.commit());
  }

  return headers;
};

export const getSalary = (
  currency: string | undefined,
  period: string | undefined,
  lang?: LanguageEnum,
) => {
  let result = '';

  const getCurrency = (currency: string) => {
    let currencyName = '';
    switch (currency) {
      case 'Thai Baht':
        currencyName = 'THB';
        return currencyName;
      case 'USD':
        currencyName = 'USD';
        return currencyName;
      case 'Euro':
        currencyName = 'EUR';
        return currencyName;
      default:
        return '';
    }
  };
  const getPeriod = (period: string) => {
    let periodName = '';
    switch (period) {
      case 'Monthly':
        periodName = lang === 'th' ? 'เดือน' : 'mo.';
        return periodName;
      case 'Dayly':
        periodName = lang === 'th' ? 'วัน' : 'day';
        return periodName;
      case 'Hourly':
        periodName = lang === 'th' ? 'ชั่วโมง' : 'hour';
        return periodName;
      default:
        return '';
    }
  };

  if (period && currency) {
    result = `${`${getCurrency(currency)}/${getPeriod(period)}`}`;
    return result;
  }
  return undefined;
};
