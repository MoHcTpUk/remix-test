/* eslint-disable @typescript-eslint/no-redeclare */
import type { ValueOf } from 'shared/utils';

export const ButtonSizeEnum = {
  M: 'M',
  S: 'S',
} as const;

export type ButtonSizeEnum = ValueOf<typeof ButtonSizeEnum>;

export const ButtonColorEnum = {
  blue: 'blue',
  white: 'white',
} as const;

export type ButtonColorEnum = ValueOf<typeof ButtonColorEnum>;

export const ButtonPriorityEnum = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
  chips: 'chips',
} as const;

export type ButtonPriorityEnum = ValueOf<typeof ButtonPriorityEnum>;
