import type { Session } from "@remix-run/node";
import { createCookie, redirect } from "@remix-run/node";
import { verifyAuthenticityToken } from "remix-utils";

import { createRedisSessionStorage } from "./utils/redis-session-storage.server";

// import { me } from "~/api";

const sessionCookieName = process.env.APP_COOKIE_NAME as string;
const cookieSecret = process.env.APP_COOKIE_SECRET as string;
const cookieSecure = process.env.APP_COOKIE_SECURE as string;

const maxAge = 60 * 60 * 24 * 30; // one month
const userPrefsMaxAge = 60 * 60 * 24 * 30; // one month

const cookie = createCookie(sessionCookieName, {
  secrets: [cookieSecret],
  sameSite: "lax",
  secure: cookieSecure === "true",
  httpOnly: true,
  maxAge,
});

export const userPrefs = createCookie("user-prefs", {
  maxAge: userPrefsMaxAge,
});

const { getSession, commitSession, destroySession } = createRedisSessionStorage(
  { cookie }
);

export async function getSessionFromRequest(request: Request) {
  return getSession(request.headers.get("cookie"));
}

export async function isAuthenticated(request: Request): Promise<boolean> {
  const session = await getSessionFromRequest(request);
  const accessToken = session.get("accessToken");

  return accessToken !== "" && accessToken !== undefined;
}

export async function mustAuthenticated(request: Request) {
  const auth = await isAuthenticated(request);
  if (!auth) {
    throw redirect("/");
  }
}

export async function mustVerifyCSRF(
  request: Request,
  path?: string
): Promise<void> {
  const session = await getSessionFromRequest(request);

  try {
    await verifyAuthenticityToken(request, session);
  } catch (e) {
    throw redirect(path || "/");
  }
}

export async function isSignedIn(request: Request) {
  const session = await getSessionFromRequest(request);
  const signedIn = session.get("signedIn");

  return signedIn === true;
}

export async function redirectIfSignedIn(request: Request, path: string) {
  const signedIn = await isSignedIn(request);

  if (signedIn) {
    throw redirect(path);
  }
}

export function isUserFetched(session: Session) {
  const currentUser = session.get("currentUser");
  return currentUser !== undefined;
}

// export async function refreshCurrentUser(session: Session) {
//   const { data } = await me();
//   setCurrentUser(session, data);
// }

export function getCurrentUser(session: Session) {
  return session.get("currentUser");
}

export function setCurrentUser(session: Session, data: any) {
  session.set("currentUser", data);
}

export async function signOut(session: Session) {
  session.unset("accessToken");
  session.unset("signedIn");
  session.unset("currentUser");
  session.unset("toJoinTeams");

  return await destroySession(session);
}

export { getSession, commitSession, destroySession };
