/* eslint-disable @typescript-eslint/no-redeclare */
import type { ValueOf } from 'shared/utils';

export const VariantCardEnum = {
  about: 'about',
  sidebar: 'sidebar',
  createEntity: 'createEntity',
  materials: 'materials',
  request: 'request',
  userCard: 'userCard',
  editCard: 'editCard',
  alert: 'alert',
} as const;

export type VariantCardEnum = ValueOf<typeof VariantCardEnum>;
