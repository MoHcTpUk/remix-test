/* eslint-disable @typescript-eslint/no-redeclare */
import type { ValueOf } from 'shared/utils';

export const LanguageEnum = {
  EN: 'en',
  TH: 'th',
} as const;

export type LanguageEnum = ValueOf<typeof LanguageEnum>;
