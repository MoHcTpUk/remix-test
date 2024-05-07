/* eslint-disable @typescript-eslint/no-redeclare */
import type { ValueOf } from 'shared/utils';

export const SizeCardVariantEnum = {
  full: 'full',
  part: 'part',
} as const;

export type SizeCardVariantEnum = ValueOf<typeof SizeCardVariantEnum>;
