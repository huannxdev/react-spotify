import { AuthModel } from './models/auth.model';

export class SpotifyAuthorize {
  SPOTIFY_AUTHORIZE_URL = 'https://accounts.spotify.com/authorize';
  CLIENT_ID = 'd06c09470bb646ebb33f27616fb151fb';
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
      redirect_uri: `${window.location.origin}/`,
      scope: encodeURIComponent(this.SCOPES.join(' ')),
      response_type: 'token'
    });
    return `${this.SPOTIFY_AUTHORIZE_URL}?${params.toString()}`;
  }
}

export function getToken(): string {
  return localStorage.getItem('accessToken');
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
