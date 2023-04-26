import { useMatches } from '@remix-run/react';
import type { LanguageEnum } from 'public/enums/languageEnum';
import { useMemo } from 'react';
import type {
  EntityCommonDictionary,
  EntityResumeDate,
  EntityResumeWorkExperience,
} from 'shared/client/data-contracts';

const DEFAULT_REDIRECT = '/';

/**
 * This should be used any time the redirect path is user-provided
 * (Like the query string on our login/signup pages). This avoids
 * open-redirect vulnerabilities.
 * @param {string} to The redirect destination
 * @param {string} defaultRedirect The redirect to use if the to is unsafe.
 */
export function safeRedirect(
  to: FormDataEntryValue | string | null | undefined,
  defaultRedirect: string = DEFAULT_REDIRECT,
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
export function useMatchesData(id: string): Record<string, unknown> | undefined {
  const matchingRoutes = useMatches();
  const route = useMemo<RouteMatch | undefined>(
    () => matchingRoutes.find((route) => route.id === id) as RouteMatch | undefined,
    [matchingRoutes, id],
  );
  return route?.data;
}

export function getValueFromDictionaries(
  entries?: EntityCommonDictionary[],
  value?: string,
  lang?: LanguageEnum,
) {
  return entries?.find((item) => item.id === value)?.[lang || 'en']?.title;
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

export function calculateTotalDurationWorkExperience(
  jobs: EntityResumeWorkExperience[] | undefined,
): string {
  if (!jobs || jobs.length === 0) {
    return '0 months';
  }

  const dates: EntityResumeDate[] = jobs

    .map((job) => job.date)
    .filter((date): date is EntityResumeDate => !!date);

  const durationInMonths = dates.reduce((totalMonths, date) => {
    const fromDate = new Date(date?.from || '');
    const toDate = date.present === true ? new Date() : new Date(date?.present || date?.to || '');

    if (fromDate > toDate) {
      throw new Error('Invalid date range');
    }

    const diffInMonths =
      (toDate.getFullYear() - fromDate.getFullYear()) * 12 +
      (toDate.getMonth() - fromDate.getMonth());

    return totalMonths + diffInMonths;
  }, 0);

  const years = Math.floor(durationInMonths / 12);
  const months = durationInMonths % 12;

  const yearString = years === 1 ? '1 year' : `${years} years`;
  const monthString = months === 1 ? '1 month' : `${months} months`;

  if (years === 0) {
    return monthString;
  }
  if (months === 0) {
    return yearString;
  }
  return `${yearString} ${monthString}`;
}
