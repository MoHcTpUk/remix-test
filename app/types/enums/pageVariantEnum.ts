/* eslint-disable @typescript-eslint/no-redeclare */
import type { ValueOf } from 'shared/utils';

export const PageVariantEnum = {
  user: 'user',
  search: 'search',
  response: 'response',
} as const;

export type PageVariantEnum = ValueOf<typeof PageVariantEnum>;
