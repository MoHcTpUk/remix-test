import type { DefaultTheme } from "styled-components";
import { getTheme } from "./baseTheme";
import { lightPalette } from "./palettes/lightPalette";
import { ThemeEnum } from "public/enums/themeEnum";

export const lightTheme: DefaultTheme = {
	...getTheme(lightPalette),
	type: ThemeEnum.Light,
}