import { ThemeEnum } from 'public/enums/themeEnum';
import type { DefaultTheme } from 'styled-components';

import { getTheme } from './baseTheme';
import { doraPalette } from './palettes/doraPalette';

export const doraTheme: DefaultTheme = {
  ...getTheme(doraPalette),
  type: ThemeEnum.Dora,
};
