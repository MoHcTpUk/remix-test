/* eslint-disable @typescript-eslint/no-redeclare */
import type { ValueOf } from 'shared/utils';

export const MessageEnum = {
  success: 'success',
  error: 'error',
} as const;

export type MessageEnum = ValueOf<typeof MessageEnum>;
