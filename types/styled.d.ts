import 'styled-components';

import type { ThemeEnum } from 'public/enums/themeEnum';
import type { ITheme } from 'public/interfaces/iTheme';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {
    type: ThemeEnum;
  }
}
