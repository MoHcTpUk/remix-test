import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import type { LinksFunction, LoaderFunction } from '@remix-run/cloudflare';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import { LanguageEnum } from 'public/enums/languageEnum';
import fonts from 'public/fonts/MeroThai/fonts.css';
import type { IUserContext } from 'public/interfaces/iUserContext';
import stylesConstants from 'public/styles/constants.css';
import stylesGlobal from 'public/styles/globals.css';
import stylesTailwind from 'public/styles/tailwind.css';
import stylesDropdown from 'rc-dropdown/assets/index.css';
import { useChangeLanguage } from 'remix-i18next';
import { ThemeProvider } from 'styled-components';

import { UserContextProvider } from '~/providers/userContextProvider';

import { useApp } from './hooks';
import { getUserContextStorage } from './storages/userContext.server';

export type LoaderData = {
  userContext: IUserContext | null;
};

export const loader: LoaderFunction = async ({ request }) => {
  const userContextSession = await getUserContextStorage(request);

  const data: LoaderData = {
    userContext: userContextSession.getUserContext(),
  };

  return data;
};

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: fonts },
  { rel: 'stylesheet', href: stylesConstants },
  { rel: 'stylesheet', href: stylesTailwind },
  { rel: 'stylesheet', href: stylesGlobal },
  { rel: 'stylesheet', href: stylesConstants },
  { rel: 'stylesheet', href: stylesDropdown },
  {
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css',
  },
];
export function meta() {
  return [
    { title: 'Search job app' },
    { charset: 'utf-8' },
    { viewport: 'width=device-width,initial-scale=1' },
  ];
}

function App() {
  const { userContext, theme, i18n } = useApp();

  useChangeLanguage(userContext?.language ?? LanguageEnum.EN);

  return (
    <html lang={userContext?.language} dir={i18n.dir()}>
      <head>
        <Meta />
        <Links />
        {typeof document === 'undefined' ? '__STYLES__' : null}
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <Outlet />
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <div id='modal-container' />
      </body>
    </html>
  );
}

export default function AppWithProviders() {
  const data = useLoaderData<LoaderData>();

  return (
    <UserContextProvider specifiedUserContext={data.userContext}>
      <App />
    </UserContextProvider>
  );
}
