import type { StrategyVerifyCallback } from 'remix-auth';
import type {
  OAuth2Profile,
  OAuth2StrategyVerifyParams,
} from 'remix-auth-oauth2';
import { OAuth2Strategy } from 'remix-auth-oauth2';

const googleAuthorizedUrl = process.env.GOOGLE_AUTHORIZED_URL as string;
const googleTokenUrl = process.env.GOOGLE_TOKEN_URL as string;
const googleApiUrl = process.env.GOOGLE_API_URL as string;

export type GoogleScope = 'openid' | 'email' | 'profile';

export type GoogleStrategyOptions = {
  clientID: string;
  clientSecret: string;
  callbackURL: string;
  scope?: GoogleScope[] | string;
  accessType?: 'online' | 'offline';
  includeGrantedScopes?: boolean;
  prompt?: 'none' | 'consent' | 'select_account';
  hd?: string;
  loginHint?: string;
};

export type GoogleProfile = {
  id: string;
  displayName: string;
  firstName: string;
  lastName: string;
  email: string;
  avatarUrl: string;
  _json: {
    sub: string;
    name: string;
    given_name: string;
    family_name: string;
    picture: string;
    locale: string;
    email: string;
    email_verified: boolean;
    hd: string;
  };
} & OAuth2Profile;

export type GoogleExtraParams = {
  expires_in: 3920;
  token_type: 'Bearer';
  scope: string;
  id_token: string;
} & Record<string, string | number>;

export const GoogleStrategyDefaultName = 'google';
export const GoogleStrategyScopeSeperator = ' ';
export const GoogleStrategyDefaultScopes = [
  'openid',
  'https://www.googleapis.com/auth/userinfo.profile',
  'https://www.googleapis.com/auth/userinfo.email',
].join(GoogleStrategyScopeSeperator);

export class GoogleStrategy<User> extends OAuth2Strategy<
  User,
  GoogleProfile,
  GoogleExtraParams
> {
  public name = GoogleStrategyDefaultName;

  private readonly accessType: string;

  private readonly prompt?: 'none' | 'consent' | 'select_account';

  private readonly includeGrantedScopes: boolean;

  private readonly hd?: string;

  private readonly loginHint?: string;

  private readonly userInfoURL = `${googleApiUrl}/oauth2/v3/userinfo`;

  constructor(
    {
      clientID,
      clientSecret,
      callbackURL,
      scope,
      accessType,
      includeGrantedScopes,
      prompt,
      hd,
      loginHint,
    }: GoogleStrategyOptions,
    verify: StrategyVerifyCallback<
      User,
      OAuth2StrategyVerifyParams<GoogleProfile, GoogleExtraParams>
    >
  ) {
    super(
      {
        clientID,
        clientSecret,
        callbackURL,
        authorizationURL: `${googleAuthorizedUrl}/o/oauth2/v2/auth`,
        tokenURL: `${googleTokenUrl}/token`,
      },
      verify
    );
    this.scope = this.getScope(scope);
    this.accessType = accessType ?? 'online';
    this.includeGrantedScopes = includeGrantedScopes ?? false;
    this.prompt = prompt;
    this.hd = hd;
    this.loginHint = loginHint;
  }

  protected authorizationParams(): URLSearchParams {
    const params = new URLSearchParams({
      // scope: this.scope.join(GoogleStrategyScopeSeperator),
      access_type: this.accessType,
      include_granted_scopes: String(this.includeGrantedScopes),
    });
    if (this.prompt) {
      params.set('prompt', this.prompt);
    }
    if (this.hd) {
      params.set('hd', this.hd);
    }
    if (this.loginHint) {
      params.set('login_hint', this.loginHint);
    }
    return params;
  }

  protected async userProfile(accessToken: string): Promise<GoogleProfile> {
    const response = await fetch(this.userInfoURL, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const raw: GoogleProfile['_json'] = await response.json();
    const profile: GoogleProfile = {
      provider: 'google',
      id: raw.sub,
      displayName: raw.name,
      firstName: raw.given_name,
      lastName: raw.family_name,
      email: raw.email,
      avatarUrl: raw.picture,
      _json: raw,
    };
    return profile;
  }

  // Allow users the option to pass a scope string, or typed array
  private getScope(scope: GoogleStrategyOptions['scope']) {
    if (!scope) {
      return GoogleStrategyDefaultScopes;
    } else if (Array.isArray(scope)) {
      return scope.join(GoogleStrategyScopeSeperator);
    }

    return scope;
  }
}
