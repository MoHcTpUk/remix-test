import type { EntryContext } from '@remix-run/cloudflare';
import { RemixServer } from '@remix-run/react';
import { createInstance } from 'i18next';
import Backend from 'i18next-fs-backend';
import { resolve } from 'path';
import { LanguageEnum } from 'public/enums/languageEnum';
import { renderToString } from 'react-dom/server';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import { ServerStyleSheet } from 'styled-components';

import i18n from './i18n/i18n';
import resources from './i18n/i18next.resources';
import i18next from './i18n/i18next.server';
import { getUserContextStorage } from './storages/userContext.server';

export default async function handleRequest(
  request: Request,
  statusCode: number,
  headers: Headers,
  context: EntryContext,
) {
  const instance = createInstance();
  const userContextSession = await getUserContextStorage(request);

  const lng = userContextSession.getUserContext()?.language ?? LanguageEnum.EN;
  const ns = i18next.getRouteNamespaces(context);

  await instance
    .use(initReactI18next)
    .use(Backend)
    .init({
      resources,
      ...i18n,
      lng,
      ns,
      backend: {
        loadPath: resolve('./public/locales/{{lng}}/{{ns}}.json'),
      },
    });

  const sheet = new ServerStyleSheet();

  let markup = renderToString(
    sheet.collectStyles(
      <I18nextProvider i18n={instance}>
        <RemixServer context={context} url={request.url} />
      </I18nextProvider>,
    ),
  );

  const styles = sheet.getStyleTags();
  markup = markup.replace('__STYLES__', styles);

  headers.set('Content-Type', 'text/html');

  return new Response(`<!DOCTYPE html>${markup}`, {
    status: statusCode,
    headers,
  });
}
