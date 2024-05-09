import { ClientFactory } from 'shared/clientFactory';
import { MediaApi } from 'shared/v2/media';
import { type UserInfo, UserServiceApi } from 'shared/v2/users';
import { v4 as uuidv4 } from 'uuid';
import type { ISession, ISessionStorage } from '~/storages/session.server';
import { getSessionStorage } from '~/storages/session.server';
import type { IUserContextSessions } from '~/storages/userContext.server';
import { getUserContextStorage } from '~/storages/userContext.server';
import type { IUserContext } from '~/types/interfaces/iUserContext';

import { DEFAULT_COMPANY_LOGO, DEFAULT_USER_AVATAR } from './constants';
import ReferenceService from '~/services/reference/referenceService';

interface Context {
  userContext: IUserContext;
  session: ISession;
  references: ReferenceService;
}

export async function getFileUrl(logo_uri?: string, context?: Context) {
  if (
    logo_uri === 'squareAvatarDefault.png' ||
    logo_uri === 'https://api.test.upjob.com/m/path_to_photo' ||
    logo_uri === 'path_to_photo' ||
    logo_uri === '/images/user/squareAvatarDefault.png' ||
    logo_uri === '/images/user/avatarDefault.png' ||
    logo_uri === DEFAULT_USER_AVATAR ||
    logo_uri === DEFAULT_COMPANY_LOGO
  ) {
    return null;
  }
  if (logo_uri?.startsWith('https://api.test.upjob.com/m')) {
    return logo_uri.split('/m/')[1];
  }

  const file = decodeBase64ToFile(logo_uri || '');
  let filUrl;

  try {
    if (file) {
      const form = new FormData();
      form.append('file', file);

      const fileBlob = new Blob([file], { type: file.type });
      const clientMediaV2 = ClientFactory.createClient(MediaApi, context?.session);
      const response = clientMediaV2.postFilesUpload({ file_name: fileBlob });
      const newFile = (await response).url;

      if (newFile) {
        filUrl = newFile;
      } else {
        filUrl = logo_uri !== '/images/user/avatarDefault.png' ? logo_uri?.split('/m/')[1] : null;
      }
    }
  } catch (error) {
    // Handle error
    console.error(error);
  }

  return filUrl;
}


export function collectData(
  context: Context,
  ...args: CollectDataArgument[]
): object[] | undefined {
  const result: { [key: string]: string | object | undefined | null }[] = [];

  const maxArrayLength = Math.max(
    ...args.map((arg) => (Array.isArray(Object.values(arg)[0]) ? Object.values(arg)[0].length : 1)),
  );

  for (let i = 0; i < maxArrayLength; i += 1) {
    const obj: { [key: string]: string | object | undefined | null } = {};

    args.forEach((arg) => {
      const key = Object.keys(arg)[0];
      const value = Array.isArray(arg[key]) ? arg[key][i] || null : arg[key];

      if (checkDataKey(key)) {
        obj[key] = value ? { [context.userContext.language]: value } : null;
      } else if (Array.isArray(value)) {
        obj[key] = value !== undefined ? value[i] : undefined;
      } else {
        obj[key] = value ?? undefined;
      }
    });

    result.push(obj);
  }

  const filteredResult = result.filter((obj) => !Object.values(obj).every((value) => value === ''));
  return filteredResult;
}


type CollectDataArgument = {
  [key: string]: string | string[];
};


const checkDataKey = (key: string) =>
  key === 'from' || key === 'to' || key === 'start_year' || key === 'end_year';

export function getImageUrl(arg: string | undefined | null, type?: 'company' | 'user'): string {
  if (
    !arg ||
    arg === '' ||
    arg === undefined ||
    arg === null ||
    arg === 'path_to_photo' ||
    arg === 'https://api.test.upjob.com/m/path_to_photo' ||
    arg === '/images/user/squareAvatarDefault.png' ||
    arg === '/images/user/avatarDefault.png' ||
    arg === DEFAULT_USER_AVATAR ||
    arg === DEFAULT_COMPANY_LOGO ||
    (arg.startsWith('https://api.test.upjob.com') && !arg.split('/m/')[1])
  ) {
    return type === 'company' ? DEFAULT_COMPANY_LOGO : DEFAULT_USER_AVATAR;
  }

  if (arg.startsWith('https://api.test.upjob.com')) {
    return arg;
  }

  if (arg.startsWith('https://upjob.com')) {
    return type === 'company' ? DEFAULT_COMPANY_LOGO : DEFAULT_USER_AVATAR;
  }

  return `https://api.test.upjob.com/m/${arg}`;
}


export const setSessionStorage = async (request: Request, sessionCookie: string | null) => {
  const sessionStorage = await getSessionStorage(request);
  const session = sessionStorage.getSession();
  session.session = sessionCookie;
  sessionStorage.setSession(session);

  return sessionStorage;
};

export const getUserContext = async (request: Request) => {
  const userContextStorage = await getUserContextStorage(request);
  const userContext = userContextStorage.getUserContext();

  return { userContextStorage, userContext };
};

export const getUserInfoFromService = async (session: ISession) => {
  const clientService = ClientFactory.createClient(UserServiceApi, session);
  const response = await clientService.getUsersMe().then((data) => data.data);
  return response;
};

export const setUserInfoContext = async (
  userInfo: UserInfo,
  userContext: IUserContext,
  userContextStorage: IUserContextSessions,
) => {
  const updatedUserContext = {
    ...userContext,
    user: {
      ...userContext.user,
      id: userInfo?.user_id,
      firstName: userInfo?.first_name,
      lastName: userInfo?.last_name,
      email: userInfo?.email,
      avatar: userInfo?.photo ? userInfo?.photo : DEFAULT_USER_AVATAR,
      isAuthenticated: true,
      isEmailConfirm: userInfo?.email_confirmed,
      progressInfo: getFieldsFilledPercentage(userInfo),
      phone: userInfo.phone,
      birthday: userInfo.birthday,
      gender: userInfo.gender,
    },
  };

  userContextStorage.setUserContext(updatedUserContext);
};

export const setHeadersForResponse = async (
  sessionStorage?: ISessionStorage,
  userContextStorage?: IUserContextSessions,
) => {
  const headers: HeadersInit = new Headers();

  if (userContextStorage) {
    headers.append('Set-Cookie', await userContextStorage.commit());
  }

  if (sessionStorage) {
    headers.append('Set-Cookie', await sessionStorage.commit());
  }

  return headers;
};

export function getFieldsFilledPercentage(userInfo: UserInfo): string {
  const totalFields = 11;
  const ignoredFields = ['user_id', 'primary_language', 'notifications', 'email_confirmed'];

  const filledCount = Object.keys(userInfo)
    .filter((field): field is keyof UserInfo => !ignoredFields.includes(field))
    .filter(
      (field): boolean =>
        userInfo[field] !== undefined &&
        userInfo[field] !== '' &&
        userInfo[field] !== null &&
        userInfo[field] !== '/images/user/avatarDefault.png' &&
        (typeof userInfo[field] !== 'object' ||
          Object.keys(userInfo[field] as object).every(
            (subField): boolean =>
              (userInfo[field] as object)[subField as keyof object] !== undefined &&
              (userInfo[field] as object)[subField as keyof object] !== '' &&
              (userInfo[field] as object)[subField as keyof object] !== null &&
              (typeof (userInfo[field] as object)[subField as keyof object] !== 'object' ||
                Object.keys((userInfo[field] as object)[subField as keyof object] as object).every(
                  (subSubField): boolean =>
                    (userInfo[field] as object)[subField as keyof object][
                      subSubField as keyof object
                    ] !== undefined &&
                    (userInfo[field] as object)[subField as keyof object][
                      subSubField as keyof object
                    ] !== '' &&
                    (userInfo[field] as object)[subField as keyof object][
                      subSubField as keyof object
                    ] !== null,
                )),
          )),
    ).length;

  const percentage = (filledCount / (totalFields - ignoredFields.length)) * 100;
  return percentage.toFixed(0);
}

export function decodeBase64ToFile(base64String: string): File | undefined {
  const commaIndex = base64String.indexOf(',');
  const base64Data = base64String.slice(commaIndex + 1);

  if (isBase64String(base64Data)) {
    const parts = base64String.split(',');
    const type = parts[0];
    const base64Data = parts[1];
    const fileName = `${uuidv4()}.${type}`;

    const mimeType = type.split(';')[0].split(':')[1];
    const blobImage = b64toBlob(base64Data, mimeType);
    const file = new File([blobImage], fileName, { type: mimeType });

    return file;
  }
  return undefined;
}



function b64toBlob(b64Data: string, contentType: string, sliceSize?: number) {
  const finalContentType = contentType || '';
  const finalSliceSize = sliceSize || 512;

  const byteCharacters = atob(b64Data);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += finalSliceSize) {
    const slice = byteCharacters.slice(offset, offset + finalSliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i += 1) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);

    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, { type: finalContentType });
  return blob;
}

export function isBase64String(str: string) {
  try {
    return btoa(atob(str)) === str;
  } catch (err) {
    return false;
  }
}