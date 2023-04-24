import { LanguageEnum } from 'public/enums/languageEnum';
import { ThemeEnum } from 'public/enums/themeEnum';
import type { IUserContext } from 'public/interfaces/iUserContext';

export function defaultUserContext() {
  return {
    theme: ThemeEnum.Light,
    language: LanguageEnum.EN,
    user: {
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      isAuthenticated: false,
    },
  } as IUserContext;
}
