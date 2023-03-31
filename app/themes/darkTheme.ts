import type { DefaultTheme } from "styled-components";
import { getTheme } from "./baseTheme";
import { ThemeType } from "./common/themeTypeEnum";
import { darkPalette } from "./palettes/darkPalette";

export const darkTheme: DefaultTheme = {
	...getTheme(darkPalette),
	type: ThemeType.dark,
}