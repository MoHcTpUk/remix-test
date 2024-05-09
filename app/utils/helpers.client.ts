import { useMatches } from '@remix-run/react';
import { useMemo } from 'react';
import type { EntityCommonDictionary, EntityCompany } from 'shared/client/data-contracts';
import type { Dictionary } from 'shared/client/dictionary-contracts';
import type { MultiLingualValue } from 'shared/client/vacancies-contracts';
import routes from 'shared/routing/routes';
import type { Company } from 'shared/v2/companies';
import type { DictionaryInner } from 'shared/v2/dictionary';
import type { Response, Statistics } from 'shared/v2/responses';
import type { Resume } from 'shared/v2/resumes';
import type { Vacancy } from 'shared/v2/vacancies';
import * as url from 'url';
import type { LanguageEnum } from '~/types/enums/languageEnum';
import { API_BASE_URL } from './constants';
import { IUserContext } from '~/types/interfaces/iUserContext';
import ReferenceService from '~/services/reference/referenceService';


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

interface Context {
  userContext: IUserContext;
  session: ISession;
  references: ReferenceService;
}

interface ISession {
  session: string | null;
}