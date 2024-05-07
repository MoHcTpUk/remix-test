/* eslint-disable @typescript-eslint/no-redeclare */
import type { ValueOf } from 'shared/utils';

export const EntityVariantEnum = {
  resume: 'resume',
  vacancy: 'vacancy',
  company: 'company',
} as const;

export type EntityVariantEnum = ValueOf<typeof EntityVariantEnum>;
