import 'styled-components';
import type { ITheme } from 'public/interfaces/iTheme';
import type { ThemeType } from '~/themes/common/themeTypeEnum';

declare module 'styled-components' {
	export interface DefaultTheme extends ITheme {
		type: ThemeType
	}
}