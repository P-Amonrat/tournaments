import { useEffect, useState } from "react";
import type {
  LoaderFunction,
  LinksFunction,
  V2_MetaFunction,
} from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useFetcher,
  useLoaderData,
  useLocation,
  useRouteError,
} from "@remix-run/react";
import {
  commitSession,
  getSessionFromRequest,
  userPrefs,
} from "./session.server";
import { useTranslation } from "react-i18next";
import { useChangeLanguage } from "remix-i18next";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import isToday from "dayjs/plugin/isToday";
import utc from "dayjs/plugin/utc";
import { notification } from "antd";
import { WarningOutlined } from "@ant-design/icons";
import "dayjs/locale/th";
import { AppContext } from "./contexts";
import { MediaContextProvider, mediaStyles } from "./components/common";
import antdReset from "antd/dist/reset.css";
import quillCss from "quill/dist/quill.snow.css";
import styles from "./styles/app.css";
import * as gtag from "./utils/gtags.client";
import { AcceptCookiesForm } from "./components/forms";
import { ThemeProvider } from "./components/themes/ThemeProvider";
import jwt_decode from "jwt-decode";
import * as APIServer from "~/api";

import { withSentry, captureRemixErrorBoundaryError } from "@sentry/remix";

dayjs.extend(localizedFormat);
dayjs.extend(isToday);
dayjs.extend(utc);

export const meta: V2_MetaFunction = () => {
  return [
    { title: "CTRL G" },
    {
      name: "description",
      content:
        "CTRL G รับจบทุกเรื่องเกม แหล่งแฮงเอาท์เหล่าเกมเมอร์ กับคอนเทนต์จากคนวงในและฟีเจอร์สนุก ๆ อย่างหาเพื่อนเล่นเกม ทัวร์นาเมนต์ บอร์ด ที่ทำขึ้นสำหรับเกมเมอร์โดยเฉพาะ",
    },
    { charSet: "utf-8" },
    { name: "viewport", content: "width=device-width, user-scalable=no" },
    { property: "og:title", content: "CTRL G" },
    {
      property: "og:image",
      content: "https://d2007awoau332v.cloudfront.net/assets/root.jpg",
    },
    {
      property: "og:image:width",
      content: "200",
    },
    {
      property: "og:image:height",
      content: "200",
    },
    { property: "og:description", content: "รับจบ ครบทุกเรื่อง Esports" },
  ];
};

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: antdReset },
    { rel: "stylesheet", href: quillCss },
    { rel: "stylesheet", href: styles },
  ];
};

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSessionFromRequest(request);
  const cookie = request.headers.get("Cookie");
  const flashMessage = session.get("flashMessage");
  const userPrefsCookie = (await userPrefs.parse(cookie)) || {};
  const accessToken = session.get("accessToken");
  const refreshToken = session.get("refreshToken");
  const cdnUrl = process.env.CDN_URL;
  const manualRefreshInterval = process.env.MANUAL_REFRESH_INTERVAL
    ? process.env.MANUAL_REFRESH_INTERVAL
    : 10;
  const autoRefreshInterval = process.env.AUTO_REFRESH_INTERVAL
    ? process.env.AUTO_REFRESH_INTERVAL
    : 60;
  const notificationInterval = Number(process.env.NOTIFICATION_INTERVAL) || 10;

  if (accessToken) {
    const accessTokenDecoded: any = jwt_decode(accessToken);
    const refreshTokenDecoded: any = jwt_decode(refreshToken);
    const dateNow = dayjs().unix();

    const isTokenExpire: boolean =
      accessTokenDecoded.exp < dateNow && refreshTokenDecoded.exp > dateNow;

    if (isTokenExpire) {
      try {
        const resMe = await APIServer.clientFromSession(session).request(
          APIServer.refreshToken(refreshToken)
        );

        if (resMe.data) {
          session.set("accessToken", resMe.data.accessToken);
          session.set("refreshToken", resMe.data.refreshToken);
          //set user data
          try {
            const { data } = await APIServer.clientFromSession(session).request(
              APIServer.me()
            );
            session.set("me", data);
          } catch (e) {
            // console.log("e", e);
          }
        }
      } catch (e) {
        console.log(e);
      }
    }
  }

  return json(
    {
      baseUrl: process.env.APP_URL || "",
      websocketUrl: process.env.WEBSOCKET_URL || "",
      flashMessage,
      locale: userPrefsCookie.locale || "th",
      scheme: userPrefsCookie.scheme || "light",
      allowCookies: userPrefsCookie.allowCookies,
      cdnUrl,
      autoRefreshInterval: Number(autoRefreshInterval),
      manualRefreshInterval: Number(manualRefreshInterval),
      gaTrackingId: process.env.GA_TRACKING_ID,
      notificationInterval,
    },
    {
      headers: { "Set-Cookie": await commitSession(session) },
    }
  );
};

export function ErrorBoundary() {
  const error = useRouteError();
  const errorStatus = isRouteErrorResponse(error)
    ? `${error.status} ${error.statusText}`
    : error instanceof Error
    ? error.message
    : "unknown";

  captureRemixErrorBoundaryError(error);

  return (
    <html lang="th" suppressHydrationWarning={true}>
      <head>
        <Meta />
        <Links />
        <style type="text/css">{mediaStyles}</style>
        {typeof document === "undefined" ? "__STYLES__" : null}
      </head>
      <body>
        <div style={{ textAlign: "center", paddingTop: 80 }}>
          <div style={{ marginBottom: 20 }}>
            <WarningOutlined style={{ color: "#ff4d4f", fontSize: 50 }} />
          </div>
          <h3
            style={{
              lineHeight: 1.5,
              marginBottom: 30,
              fontFamily: "FC Twist VF",
            }}
          >
            {errorStatus}
            <br />
            click below button to return home
          </h3>
          <a
            href="/"
            style={{
              padding: "10px 20px",
              fontSize: 12,
              textDecoration: "none",
              textTransform: "uppercase",
              borderRadius: 6,
              color: "#fff",
              backgroundColor: "#7a6fee",
            }}
          >
            back to home
          </a>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

function App() {
  const { allowCookies, baseUrl, flashMessage, locale, scheme, gaTrackingId } =
    useLoaderData();
  const { i18n, t } = useTranslation();
  const [api, contextHolder] = notification.useNotification();
  const fetcher = useFetcher();
  const location = useLocation();
  dayjs.locale(locale);
  useChangeLanguage(locale);
  const [acceptedCookies, setAcceptedCookies] = useState(allowCookies);

  const handleAcceptCookies = (accepted: boolean) => {
    setAcceptedCookies(accepted);
    fetcher.submit(
      { allowCookies: accepted, action: "accept-cookies" },
      { method: "post", action: "/resources/user-prefs" }
    );
  };

  const handleChangeLanguage = (value: string) => {
    fetcher.submit(
      { locale: value, action: "change-locale" },
      { method: "post", action: "/resources/user-prefs" }
    );
  };

  const handleChangeScheme = (value: string) => {
    fetcher.submit(
      { scheme: value, action: "change-scheme" },
      { method: "post", action: "/resources/user-prefs" }
    );
  };

  useEffect(() => {
    if (flashMessage) {
      if (flashMessage.message && flashMessage.type) {
        api.open({
          message: t(flashMessage.message),
          type: flashMessage.type,
          duration: 5,
          placement: "bottomRight",
        });
      }
    }
  }, [flashMessage]);

  useEffect(() => {
    if (gaTrackingId?.length) {
      gtag.pageview(location.pathname, gaTrackingId);
    }
  }, [location, gaTrackingId]);

  return (
    <html lang={locale} dir={i18n.dir()}>
      <head>
        <Meta />
        <Links />
        <style type="text/css">{mediaStyles}</style>
        {typeof document === "undefined" ? "__STYLES__" : null}
      </head>
      <body>
        {!gaTrackingId ? null : (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
            />
            <script
              async
              id="gtag-init"
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${gaTrackingId}', {
                  page_path: window.location.pathname,
                });
              `,
              }}
            />
          </>
        )}
        <MediaContextProvider disableDynamicMediaQueries>
          <ThemeProvider mode={scheme}>
            <AppContext.Provider
              value={{
                allowCookies: acceptedCookies,
                baseUrl: baseUrl,
                locale: locale,
                scheme: scheme,
                acceptCookies: handleAcceptCookies,
                changeScheme: handleChangeScheme,
                changeLanguage: handleChangeLanguage,
              }}
            >
              <Outlet />
              {contextHolder}
            </AppContext.Provider>
            {acceptedCookies === undefined && (
              <AcceptCookiesForm onAccept={handleAcceptCookies} />
            )}
          </ThemeProvider>
        </MediaContextProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default withSentry(App);
