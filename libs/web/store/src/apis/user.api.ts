import { request, config } from '@spotify/web/shared/app-config';
export const getMe = () => {
  return request.get<SpotifyApi.CurrentUsersProfileResponse>(`${config().API_HOST}/me`);
}
