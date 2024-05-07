/* eslint-disable @typescript-eslint/no-redeclare */
import type { ValueOf } from "shared/utils";

export const ThemeEnum = {
	Light: 'light',
	Dark: 'dark',
	Dora: 'dora'
} as const;

export type ThemeEnum = ValueOf<typeof ThemeEnum>;
