import 'styled-components';

import type { ThemeEnum } from '~/types/enums/themeEnum';
import type { ITheme } from '~/types/interfaces/iTheme';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {
    type: ThemeEnum;
  }
}
