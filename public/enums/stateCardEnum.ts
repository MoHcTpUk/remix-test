/* eslint-disable @typescript-eslint/no-redeclare */
import type { ValueOf } from 'shared/utils';

export const StateCard = {
  info: 'info',
  edit: 'edit',
} as const;

export type StateCard = ValueOf<typeof StateCard>;

export const NameCardEnum = {
  information: 'information',
  location: 'location',
  jobPosition: 'jobPosition',
  education: 'education',
  workExperience: 'workExperience',
  additionalInformation: 'additionalInformation',
  settings: 'settings',
  all: 'all',
};

export type NameCardEnum = ValueOf<typeof NameCardEnum>;
