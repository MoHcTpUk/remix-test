import type { DefaultTheme } from 'styled-components';

import { ThemeEnum } from '../types/enums/themeEnum';
import { getTheme } from './baseTheme';
import { darkPalette } from './palettes/darkPalette';

export const darkTheme: DefaultTheme = {
  ...getTheme(darkPalette),
  type: ThemeEnum.Dark,
};
