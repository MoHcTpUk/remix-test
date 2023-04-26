import { LanguageEnum } from 'public/enums/languageEnum';
import { ThemeEnum } from 'public/enums/themeEnum';
import type { IUserContext } from 'public/interfaces/iUserContext';

export function defaultUserContext() {
	return {
		theme: ThemeEnum.Light,
		language: LanguageEnum.EN
	} as IUserContext;
}
