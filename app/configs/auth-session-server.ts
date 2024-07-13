// app/services/session.server.ts
import { createCookieSessionStorage } from '@remix-run/node';

const cookieSecret = process.env.APP_COOKIE_SECRET as string;
const cookieSecure = process.env.APP_COOKIE_SECURE as string;
const maxAge = 60 * 60 * 6;
// export the whole sessionStorage object
export let authSessionStorage = createCookieSessionStorage({
  cookie: {
    name: '_auth_session', // use any name you want here
    sameSite: 'lax', // this helps with CSRF
    path: '/', // remember to add this so the cookie will work in all routes
    httpOnly: true, // for security reasons, make this cookie http only
    secrets: [cookieSecret], // replace this with an actual secret
    secure: cookieSecure === 'true', // enable this in prod only
    maxAge: maxAge,
  },
});

// you can also export the methods individually for your own usage
export let { getSession, commitSession, destroySession } = authSessionStorage;
