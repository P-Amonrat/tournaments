import axios from 'axios';
import url from 'url';
import type { StrategyVerifyCallback } from 'remix-auth';
import { AuthorizationError } from 'remix-auth';
import type {
  OAuth2Profile,
  OAuth2StrategyVerifyParams,
} from 'remix-auth-oauth2';
import { OAuth2Strategy } from 'remix-auth-oauth2';

const lineAuthorizedUrl = process.env.LINE_AUTHORIZED_URL as string;
const lineApiUrl = process.env.LINE_API_URL as string;

export interface LineStrategyOptions {
  channelID: string;
  channelSecret: string;
  callbackURL: string;
  scope?: LineScope[] | string;
}

/**
 * @see https://developers.line.biz/en/docs/line-login/integrate-line-login/#scopes
 */
export type LineScope = 'profile' | 'openid' | 'email';

export interface LineProfile extends OAuth2Profile {
  id: string;
  displayName: string;
  pictureUrl: string | null;
  email: string;
  _json: any;
}

export interface LineExtraParams
  extends Record<string, string | number | null> {
  idToken: string;
  tokenType: string;
  accessTokenExpiresIn: number | null;
  scope: string;
}

export const LineStrategyDefaultName = 'line';
export const LineStrategyScopeSeperator = ' ';
export const LineStrategyDefaultScope = ['profile', 'openid', 'email'].join(
  LineStrategyScopeSeperator
);

export class LineStrategy<User> extends OAuth2Strategy<
  User,
  LineProfile,
  LineExtraParams
> {
  name = LineStrategyDefaultName;

  private userInfoURL = `${lineApiUrl}/oauth2/v2.1/verify`;
  private userAgent: string;
  private channelID: string;

  constructor(
    { channelID, channelSecret, callbackURL, scope }: LineStrategyOptions,
    verify: StrategyVerifyCallback<
      User,
      OAuth2StrategyVerifyParams<LineProfile, LineExtraParams>
    >
  ) {
    super(
      {
        clientID: channelID,
        clientSecret: channelSecret,
        callbackURL,
        responseType: 'code',
        authorizationURL: `${lineAuthorizedUrl}/oauth2/v2.1/authorize`,
        tokenURL: `${lineApiUrl}/oauth2/v2.1/token`,
      },
      verify
    );
    this.scope = this.getScope(scope);
    this.channelID = channelID;
    this.userAgent = 'Remix Auth';
  }

  //Allow users the option to pass a scope string, or typed array
  private getScope(scope: LineStrategyOptions['scope']) {
    if (!scope) {
      return LineStrategyDefaultScope;
    } else if (Array.isArray(scope)) {
      return scope.join(LineStrategyScopeSeperator);
    }

    return scope;
  }

  // protected authorizationParams() {
  //   return new URLSearchParams({
  //     scope: this.scope.join(LineStrategyScopeSeperator),
  //   });
  // }

  protected async userProfile(
    _accessToken: string,
    extraParams: LineExtraParams
  ): Promise<LineProfile> {
    try {
      const params = new url.URLSearchParams({
        id_token: extraParams.idToken,
        client_id: this.channelID,
      });

      const response = await axios.post(this.userInfoURL, params.toString(), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'User-Agent': this.userAgent,
        },
      });

      let data: any = await response.data;

      let profile: LineProfile = {
        provider: 'Line',
        id: data.sub,
        displayName: data.name,
        pictureUrl: data.picture,
        email: data.email ? data.email : null,
        _json: data,
      };

      return profile;
    } catch (error) {
      throw new AuthorizationError('getUserProfileError', {
        name: 'getUserProfileError',
        message: 'Axios Error',
      });
    }
  }

  protected async getAccessToken(response: Response): Promise<{
    accessToken: string;
    refreshToken: string;
    extraParams: LineExtraParams;
  }> {
    let data = new URLSearchParams(await response.json());

    let accessToken = data.get('access_token');
    if (!accessToken)
      throw new AuthorizationError('Missing access token.', {
        name: 'MissingAccessToken',
        message: 'Access token is missing.',
      });

    let tokenType = data.get('token_type');
    if (!tokenType)
      throw new AuthorizationError('Missing token type.', {
        name: 'MissingTokenType',
        message: 'Token type is missing.',
      });

    let idToken = data.get('id_token');
    if (!idToken)
      throw new AuthorizationError('Missing id token.', {
        name: 'MissingIdToken',
        message: 'Id token is missing.',
      });

    let scope = data.get('scope');
    if (!scope)
      throw new AuthorizationError('Missing scope.', {
        name: 'MissingScope',
        message: 'Scope is missing.',
      });

    let refreshToken = data.get('refresh_token') ?? '';
    let accessTokenExpiresIn = parseExpiresIn(data.get('expires_in'));

    return {
      accessToken,
      refreshToken,
      extraParams: {
        idToken,
        tokenType,
        accessTokenExpiresIn,
        scope,
      },
    } as const;
  }
}

function parseExpiresIn(value: string | null): number | null {
  if (!value) return null;

  try {
    return Number.parseInt(value, 10);
  } catch {
    return null;
  }
}
