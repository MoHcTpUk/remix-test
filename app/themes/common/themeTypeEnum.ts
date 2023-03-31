/* eslint-disable @typescript-eslint/no-redeclare */
import type { ValueOf } from "shared/utils";

export const ThemeType = {
  light: 'light',
  dark: 'dark',
  dora: 'dora'
} as const;

export type ThemeType = ValueOf<typeof ThemeType>;
