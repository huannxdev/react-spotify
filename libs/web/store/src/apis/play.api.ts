import { request, config } from '@spotify/web/shared/app-config';
export const getRecentlyPlayed = () => {
  return request.get<SpotifyApi.UsersRecentlyPlayedTracksResponse>(`${config.API_HOST}/me/player/recently-played`);
}
