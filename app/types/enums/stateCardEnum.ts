/* eslint-disable @typescript-eslint/no-redeclare */
import type { ValueOf } from 'shared/utils';

export const StateCard = {
  info: 'info',
  edit: 'edit',
  crate: 'create',
} as const;

export type StateCard = ValueOf<typeof StateCard>;

export const ResumeCardEnum = {
  information: 'information',
  location: 'location',
  jobPosition: 'jobPosition',
  education: 'education',
  workExperience: 'workExperience',
  additionalInformation: 'additionalInformation',
  settings: 'settings',
  all: 'all',
};

export type ResumeCardEnum = ValueOf<typeof ResumeCardEnum>;

export const VacancyCardEnum = {
  vacancy: 'vacancy',
  location: 'location',
  employer: 'employer',
  requirements: 'requirements',
  responses: 'responses',
  additional: 'additional',
  all: 'all',
};

export type VacancyCardEnum = ValueOf<typeof VacancyCardEnum>;

export const CompanyCardEnum = {
  information: 'information',
  all: 'all',
};

export type CompanyCardEnum = ValueOf<typeof CompanyCardEnum>;
