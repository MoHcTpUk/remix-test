import type { DefaultTheme } from "styled-components";
import { getTheme } from "./baseTheme";
import { ThemeType } from "./common/themeTypeEnum";
import { lightPalette } from "./palettes/lightPalette";

export const lightTheme: DefaultTheme = {
	...getTheme(lightPalette),
	type: ThemeType.light,
}