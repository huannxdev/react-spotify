import { config } from '@spotify/web/shared/app-config';
import { request } from '@spotify/web/shared/http';
export const getMe = () => {
  return request.get<SpotifyApi.CurrentUsersProfileResponse>(`${config().API_HOST}/me`);
}
