/* eslint-disable @typescript-eslint/no-redeclare */
import type { ValueOf } from 'shared/utils';

export const ResponseCardVariantEnum = {
  main: 'main',
  inner: 'inner',
  heading: 'heading',
} as const;

export type ResponseCardVariantEnum = ValueOf<typeof ResponseCardVariantEnum>;
