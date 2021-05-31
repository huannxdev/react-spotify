import { AuthModel } from './models/auth.model';
import { config } from '@spotify/web/shared/app-config';

export class SpotifyAuthorize {
  SPOTIFY_AUTHORIZE_URL = 'https://accounts.spotify.com/authorize';
  CLIENT_ID = '57dc7a2f766b4eec968c8ab8eb16be78';
  SCOPES = [
    //Listening History
    'user-read-recently-played',
    'user-top-read',
    'user-read-playback-position',
    //Spotify Connect
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-read-currently-playing',
    //Playback - For SDK Playback //https://developer.spotify.com/documentation/web-playback-sdk/quick-start/
    'streaming',
    //Playlists
    'playlist-modify-public',
    'playlist-modify-private',
    'playlist-read-private',
    'playlist-read-collaborative',
    //Library
    'user-library-modify',
    'user-library-read',
    //Users - For SDK Playback //https://developer.spotify.com/documentation/web-playback-sdk/quick-start/
    'user-read-email',
    'user-read-private'
  ];

  createAuthorizeURL() {
    const params = new URLSearchParams({
      client_id: this.CLIENT_ID,
      redirect_uri: config.CALLBACK_API,
      scope: encodeURIComponent(this.SCOPES.join(' ')),
      response_type: 'token'
    });
    return `${this.SPOTIFY_AUTHORIZE_URL}?${params.toString()}`;
  }
}

export function getToken(): string {
  return localStorage.getItem('accessToken');
}

export function getAuthInfo(): AuthModel {
  return  {
    accessToken: localStorage.getItem('accessToken'),
    tokenType: localStorage.getItem('tokenType'),
    expiresIn: localStorage.getItem('expiresIn')
  }
}

export function authDataFromHash(url: string): AuthModel {
  const params = new URLSearchParams(url.slice(1));
  return {
    accessToken: params.get('access_token'),
    tokenType: params.get('token_type'),
    expiresIn: params.get('expires_in'),
  }
}

export function redirectAuthorize(): void {
  const spotifyAuthorize = new SpotifyAuthorize();
  const url = spotifyAuthorize.createAuthorizeURL();
  window.location.href = url;
}
