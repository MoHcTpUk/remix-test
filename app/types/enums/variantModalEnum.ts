/* eslint-disable @typescript-eslint/no-redeclare */
import type { ValueOf } from 'shared/utils';

export const VariantModalEnum = {
  filter: 'filter',
  navbar: 'navbar',
  uploading: 'uploading',
  share: 'share',
  request: 'request',
  confirmEmail: 'confirmEmail',
  confirmDelete: 'confirmDelete',
  confirmDeleteCompany: 'confirmDeleteCompany',
  providingContacts: 'providingContacts',
  verification: 'verification',
  companyCreated: 'companyCreated',
} as const;

export type VariantModalEnum = ValueOf<typeof VariantModalEnum>;
