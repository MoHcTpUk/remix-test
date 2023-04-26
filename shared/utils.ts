import { LanguageEnum } from 'public/enums/languageEnum';

export type ValueOf<T> = T[keyof T];

export function isServer() {
  return typeof document === 'undefined';
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
