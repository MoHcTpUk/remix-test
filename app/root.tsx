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

import i18nextServer from '~/i18next.server';
// import stylesTailwind from 'public/styles/tailwind.css';
import stylesGlobal from 'public/styles/globals.css';
import stylesConstants from 'public/styles/constants.css';
import type { LinksFunction, LoaderFunction, MetaFunction } from '@remix-run/cloudflare';
import { json } from '@remix-run/cloudflare';

type LoaderData = { locale: string };

export const handle = {
  i18n: 'common',
};

export const loader: LoaderFunction = async ({ request }) => {
  let locale = await i18nextServer.getLocale(request);
  return json<LoaderData>({ locale });
};

export const links: LinksFunction = () => [
  // { rel: 'stylesheet', href: stylesTailwind },
  { rel: 'stylesheet', href: stylesGlobal },
  { rel: 'stylesheet', href: stylesConstants },
];

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Search job app',
  viewport: 'width=device-width,initial-scale=1',
});

export default function Root() {
  let { locale } = useLoaderData<LoaderData>();
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
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
