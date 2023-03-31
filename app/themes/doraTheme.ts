import type { DefaultTheme } from "styled-components";
import { getTheme } from "./baseTheme";
import { ThemeType } from "./common/themeTypeEnum";
import { doraPalette } from "./palettes/doraPalette";

export const doraTheme: DefaultTheme = {
	...getTheme(doraPalette),
	type: ThemeType.dora,
}