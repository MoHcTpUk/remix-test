import type { DefaultTheme } from 'styled-components';

import { darkTheme } from '~/themes/darkTheme';
import { doraTheme } from '~/themes/doraTheme';
import { lightTheme } from '~/themes/lightTheme';
import { ThemeEnum } from '~/types/enums/themeEnum';
import type { IUserContext } from '~/types/interfaces/iUserContext';

export function getUserTheme(type: IUserContext | null | undefined): DefaultTheme {
  if (!type) return lightTheme;

  switch (type.theme) {
    case ThemeEnum.Light:
      return lightTheme;
    case ThemeEnum.Dark:
      return darkTheme;
    case ThemeEnum.Dora:
      return doraTheme;
    default:
      return lightTheme;
  }
}
