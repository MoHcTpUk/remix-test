import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { json, LinksFunction, LoaderArgs } from "@remix-run/cloudflare";
import nProgressStyles from 'nprogress/nprogress.css';
import fonts from 'public/fonts/MeroThai/fonts.css';
import stylesConstants from 'public/styles/constants.css';
import stylesGlobal from 'public/styles/globals.css';
import stylesNPprogress from 'public/styles/npprogress.css';
import { IUserContext } from "./types/interfaces/iUserContext";
import { getUserContextStorage } from "./storages/userContext.server";
import { getMessageContext } from "./storages/message.server";
import { UserContextProvider } from "./providers/userContextProvider";
import { useApp } from "./hooks";
import { ThemeProvider } from "styled-components";

export function Layout({ children }: { children: React.ReactNode }) {
  const { userContext, theme, t, i18n } = useApp();

  return (
    <html lang={userContext.language} dir={i18n.dir()}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        {typeof document === "undefined" ? "__STYLES__" : null}
      </head>
      <body>
        <UserContextProvider specifiedUserContext={userContext}>
          <ThemeProvider theme={theme}>
            {children}
          </ThemeProvider>
        </UserContextProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export type LoaderData = {
  userContext: IUserContext | null;
};

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: fonts },
  { rel: 'stylesheet', href: stylesGlobal },
  { rel: 'stylesheet', href: stylesConstants },
  { rel: 'stylesheet', href: nProgressStyles },
  { rel: 'stylesheet', href: stylesNPprogress },
  {
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css',
  },
  { rel: 'stylesheet', href: stylesConstants },
];

// export const meta: MetaFunction = () => ({
//   charset: 'utf-8',
//   title: 'Search job app',
//   viewport: 'width=device-width,initial-scale=1',
// });

export const loader = async ({ request }: LoaderArgs) => {
  const userContextSession = await getUserContextStorage(request);
  const messageContextStorage = await getMessageContext(request);
  const toastMessage = messageContextStorage.get();

  if (!toastMessage) {
    return json({ userContext: userContextSession.getUserContext(), toastMessage: null });
  }
  if (!toastMessage.type) {
    throw new Error('Message should have a type');
  }

  return json(
    { userContext: userContextSession.getUserContext(), toastMessage },
    { headers: { 'Set-Cookie': await messageContextStorage.commit() } },
  );
};

function App() {
  // const { userContext, theme, i18n } = useApp();

  // useChangeLanguage(userContext?.language ?? LanguageEnum.EN);

  // const transition = useNavigation();

  // useEffect(() => {
  //   // when the state is idle then we can to complete the progress bar
  //   if (transition.state === 'idle') NProgress.done();
  //   // and when it's something else it means it's either submitting a form or
  //   // waiting for the loaders of the next location so we start it
  //   else NProgress.start();
  // }, [transition.state]);

  // const { toastMessage }: { toastMessage: ToastMessage } = useLoaderData<typeof loader>();

  // useEffect(() => {
  //   if (!toastMessage) {
  //     return;
  //   }
  // const { message, title, type } = toastMessage;

  // switch (type) {
  //   case 'success':
  // toast.custom(
  //   title === 'Failed!' ||
  //     message === 'มีข้อผิดพลาดบางอย่างเกิดขึ้นหรืออีเมลของคุณไม่ได้รับการยืนยัน' ? (
  //     <BoxInformation
  //       onClose={() => toast.dismiss()}
  //       variant={BoxInformationEnum.error}
  //       title={title}
  //       information={message}
  //       type='popup'
  //     />
  //   ) : (
  //     <BoxInformation
  //       onClose={() => toast.dismiss()}
  //       variant={BoxInformationEnum.success}
  //       title={title}
  //       information={message}
  //       type='popup'
  //     />
  //   ),
  // );
  //   break;
  // case 'error':
  // toast.custom(
  //   <BoxInformation
  //     onClose={() => toast.dismiss()}
  //     variant={BoxInformationEnum.error}
  //     title={title}
  //     information={message}
  //     type='popup'
  //   />,
  // );
  //   break;
  // default:
  //   throw new Error(`${type as MessageEnum} is not handled`);
  //   }
  // }, [toastMessage]);

  // return (
  //   <html lang={userContext?.language} dir={i18n.dir()}>
  //     <head>
  //       <Meta />
  //       <Links />
  //       {typeof document === 'undefined' ? '__STYLES__' : null}
  //     </head>
  //     <body>
  //       <ThemeProvider theme={theme}>
  //         <Outlet />
  //         <Toaster
  //           toastOptions={{
  //             duration: 5000,
  //             style: {
  //               padding: '0',
  //               width: 'fit-content',
  //               maxWidth: '100%',
  //             },
  //           }}
  //         />
  //       </ThemeProvider>
  //       <ScrollRestoration />
  //       <Scripts />
  //       <LiveReload port={8002} />
  //       <div id='modal-container' />
  //     </body>
  //   </html>
  // );

  return <Outlet />;
}

export default function AppWithProviders() {
  const data = useLoaderData<typeof loader>();

  return (
    <UserContextProvider specifiedUserContext={data.userContext}>
      <App />
    </UserContextProvider>
  );
}
