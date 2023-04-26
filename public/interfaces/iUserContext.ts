import type { LanguageEnum } from "public/enums/languageEnum"
import type { ThemeEnum } from "public/enums/themeEnum"

export interface IUserContext {
	theme: ThemeEnum
	language: LanguageEnum
}

export function isUserContext(userContext: any): userContext is IUserContext {
	return true
	if (!userContext)
		return false
	return 'theme' in userContext && 'language' in userContext
}