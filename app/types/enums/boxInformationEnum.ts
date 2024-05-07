/* eslint-disable @typescript-eslint/no-redeclare */
import type { ValueOf } from 'shared/utils';

export const BoxInformationEnum = {
  info: 'attentionInfo',
  error: 'attentionError',
  warning: 'attention',
  success: 'attentionSuccess',
} as const;

export type BoxInformationEnum = ValueOf<typeof BoxInformationEnum>;
