import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import { useTranslation } from 'react-i18next';
import { useChangeLanguage } from 'remix-i18next';

import i18nextServer from '~/i18n/i18next.server';
import stylesTailwind from 'public/styles/tailwind.css';
import stylesGlobal from 'public/styles/globals.css';
import stylesConstants from 'public/styles/constants.css';
import type { LinksFunction, LoaderFunction, MetaFunction } from '@remix-run/cloudflare';
import { json } from '@remix-run/cloudflare';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { lightTheme } from './themes/lightTheme';
import React, { useState } from 'react';
import type IUserContext from 'public/interfaces/iUserContext';
import { doraTheme } from './themes/doraTheme';


type LoaderData = { locale: string };

export const loader: LoaderFunction = async ({ request }) => {
  let locale = await i18nextServer.getLocale(request);
  return json<LoaderData>({ locale });
};

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesTailwind },
  { rel: 'stylesheet', href: stylesGlobal },
  { rel: 'stylesheet', href: stylesConstants },
];

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Search job app',
  viewport: 'width=device-width,initial-scale=1',
});

export const UserContext = React.createContext<IUserContext | null>({} as IUserContext);

export default function Root() {
  const [theme, setTheme] = useState(lightTheme)
  const [language, setLanguage] = useState("en")

  function setUserTheme(theme: DefaultTheme) {
    setTheme(theme)
  }

  function defaultUserContext(): IUserContext {
    return {
      theme: theme,
      setTheme: setUserTheme,
      language: language,
      setLanguage: setLanguage
    }
  }

  let { locale } = useLoaderData<typeof loader>();
  let { i18n } = useTranslation();

  useChangeLanguage(locale);

  return (
    <html lang={locale} dir={i18n.dir()}>
      <head>
        <Meta />
        <Links />
        {typeof document === 'undefined' ? '__STYLES__' : null}
      </head>
      <body>
        <UserContext.Provider value={defaultUserContext()}>
          <ThemeProvider theme={theme}>
            <Outlet />
          </ThemeProvider>
        </UserContext.Provider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
