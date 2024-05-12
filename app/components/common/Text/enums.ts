/* eslint-disable @typescript-eslint/no-redeclare */
import type { ValueOf } from 'shared/utils';

export const TextVariantEnum = {
  textHeading1: 'textHeading1',
  textHeading2: 'textHeading2',
  textHeading3: 'textHeading3',
  textBody1: 'textBody1',
  textBody1medium: 'textBody1medium',
  textBody2: 'textBody2',
  textBody2medium: 'textBody2medium',
  textSmall: 'textSmall',
  textSmallmedium: 'textSmallmedium',
  textMini: 'textMini',
} as const;

export type TextVariantEnum = ValueOf<typeof TextVariantEnum>;
