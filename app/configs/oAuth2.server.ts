import { Authenticator } from 'remix-auth';
import { LineStrategy } from 'lib/oauth2-strategy/line';
import { GoogleStrategy } from 'lib/oauth2-strategy/google';
import { authSessionStorage } from './auth-session-server';

const appUrl = process.env.APP_URL as string;

//Line
const lineChannelID = process.env.LINE_CHANNEL_ID as string;
const lineChannelSecret = process.env.LINE_CHANNEL_SECRET as string;

export let lineAuthenticator = new Authenticator(authSessionStorage);
let lineStrategy = new LineStrategy(
  {
    channelID: lineChannelID,
    channelSecret: lineChannelSecret,
    callbackURL: `${appUrl}/auth/line/callback`,
  },
  async ({ profile }) => {
    return profile;
  }
);

lineAuthenticator.use(lineStrategy);

//Google
const googleClientId = process.env.GOOGLE_CLIENT_ID as string;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET as string;

export let googleAuthenticator = new Authenticator(authSessionStorage);
let googleStrategy = new GoogleStrategy(
  {
    clientID: googleClientId,
    clientSecret: googleClientSecret,
    callbackURL: `${appUrl}/auth/google/callback`,
  },
  async ({ accessToken, refreshToken, extraParams, profile }) => {
    // Get the user data from your DB or API using the tokens and profile
    return profile;
  }
);

googleAuthenticator.use(googleStrategy);
