/* eslint-disable @typescript-eslint/no-redeclare */
import type { ValueOf } from 'shared/utils';

export const ResponseState = {
  NEW: 'NEW',
  VIEWED: 'VIEWED',
  APPROVED: 'APPROVED',
  CONTACT_SENT: 'CONTACT_SENT',
  APPROVED_AND_VIEWED: 'APPROVED_AND_VIEWED',
} as const;

export type ResponseState = ValueOf<typeof ResponseState>;
