import { LanguageEnum } from '~/types/enums/languageEnum';

export function isServer() {
  return typeof document === 'undefined';
}

export function isWindow() {
  return typeof window === 'undefined';
}

export function lng<T>(en: T, th: T, lang: LanguageEnum) {
  switch (lang) {
    case LanguageEnum.EN:
      return en;
    case LanguageEnum.TH:
      return th;
    default:
      return en;
  }
}

export type ValueOf<T> = T[keyof T];
