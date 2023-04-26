import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import { useChangeLanguage } from 'remix-i18next';
import stylesTailwind from 'public/styles/tailwind.css';
import stylesGlobal from 'public/styles/globals.css';
import fonts from 'public/fonts/MeroThai/fonts.css';
import stylesConstants from 'public/styles/constants.css';
import type { LinksFunction, LoaderFunction, MetaFunction } from '@remix-run/cloudflare';
import { ThemeProvider } from 'styled-components';
import { UserContextProvider } from '~/providers/userContextProvider';
import type { IUserContext } from 'public/interfaces/iUserContext';
import { getUserContextSession } from './userContext.server';
import { LanguageEnum } from 'public/enums/languageEnum';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useApp } from './hooks';

export type LoaderData = {
  userContext: IUserContext | null;
};

export const loader: LoaderFunction = async ({ request }) => {
  const userContextSession = await getUserContextSession(request);

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
  {
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css',
  },
];

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Search job app',
  viewport: 'width=device-width,initial-scale=1',
});

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
