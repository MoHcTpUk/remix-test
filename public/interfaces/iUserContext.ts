import type { LanguageEnum } from 'public/enums/languageEnum';
import type { ThemeEnum } from 'public/enums/themeEnum';

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  isAuthenticated: boolean;
}

export interface IUserContext {
  theme: ThemeEnum;
  language: LanguageEnum;
  user: IUser;
}

export function isUserContext(userContext: unknown): userContext is IUserContext {
  return true;
  // if (!userContext)
  // 	return false
  // return 'theme' in userContext && 'language' in userContext
}
