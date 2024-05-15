import { LanguageEnum } from '~/types/enums/languageEnum';
import { ThemeEnum } from '~/types/enums/themeEnum';
import type { IUserContext } from '~/types/interfaces/iUserContext';

export function defaultUserContext(): IUserContext {
  return {
    theme: ThemeEnum.Light,
    language: LanguageEnum.EN,
    search: 'vacancy',
    user: {
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      isAuthenticated: false,
      avatar: '',
      progressInfo: '0',
      isEmailConfirm: false,
      pathFromLogin: '/',
      phone: '',
      // birthday: '',
      gender: '',
    },
    forms: {
      resume: '',
      vacancy: '',
      company: '',
    },
  } ;
}
