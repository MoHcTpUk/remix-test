import type { MultiDateValue } from 'shared/v2/users';

import type { LanguageEnum } from '~/types/enums/languageEnum';
import type { ThemeEnum } from '~/types/enums/themeEnum';

export interface IUser {
  id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  isAuthenticated: boolean;
  isEmailConfirm?: boolean;
  avatar?: string;
  progressInfo?: string;
  pathFromLogin?: string;
  phone?: string;
  birthday?: MultiDateValue | null;
  gender?: string;
}

export interface IForms {
  resume?: string;
  vacancy?: string;
  company?: string;
}

export interface IUserContext {
  theme: ThemeEnum;
  language: LanguageEnum;
  user: IUser;
  search?: 'vacancy' | 'resume' | 'company';
  forms?: IForms;
}

export function isUserContext(userContext: unknown): userContext is IUserContext {
  return true;
  // if (!userContext)
  // 	return false
  // return 'theme' in userContext && 'language' in userContext
}
