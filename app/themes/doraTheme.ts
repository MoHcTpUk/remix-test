import type { DefaultTheme } from 'styled-components';

import { ThemeEnum } from '~/types/enums/themeEnum';

import { getTheme } from './baseTheme';
import { doraPalette } from './palettes/doraPalette';

export const doraTheme: DefaultTheme = {
  ...getTheme(doraPalette),
  type: ThemeEnum.Dora,
};
