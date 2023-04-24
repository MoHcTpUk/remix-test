/* eslint-disable @typescript-eslint/no-redeclare */
import type { ValueOf } from 'shared/utils';

export const StateCard = {
  info: 'info',
  edit: 'edit',
} as const;

export type StateCard = ValueOf<typeof StateCard>;
