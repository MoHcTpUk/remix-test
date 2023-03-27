/* eslint-disable @typescript-eslint/no-redeclare */
import type { ValueOf } from './../../../../shared/utils';

export const TextVariantEnum = {
  textHeading1: 'textHeading1',
  textHeading2: 'textHeading2',
  textHeading3: 'textHeading3',
  textBody1: 'textBody1',
  textBody2: 'textBody2',
  textSmall: 'textSmall',
} as const;

export type TextVariantEnum = ValueOf<typeof TextVariantEnum>;
