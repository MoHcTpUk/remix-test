import type { DefaultTheme } from 'styled-components';

import { ThemeEnum } from '~/types/enums/themeEnum';

import { getTheme } from './baseTheme';
import { lightPalette } from './palettes/lightPalette';

export const lightTheme: DefaultTheme = {
  ...getTheme(lightPalette),
  type: ThemeEnum.Light,
};
