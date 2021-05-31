import { request, config } from '@spotify/web/shared/app-config';
import { SpotifyPlayRequestApi } from '@spotify/web/shared/models';

export const getRecentlyPlayed = () => {
  return request.get<SpotifyApi.UsersRecentlyPlayedTracksResponse>(`${ config.API_HOST }/me/player/recently-played`);
};

export const play = (requestApi: SpotifyPlayRequestApi, deviceId: string) => {
  return request.put(`${ config.API_HOST }/me/player/play`, requestApi, {params: {device_id: deviceId}});
};

export const pause = (deviceId: string) => {
  return request.put(`${ config.API_HOST }/me/player/pause`, {}, {params: {device_id: deviceId}});
};

export const togglePlay = (isPlaying: boolean, request: SpotifyPlayRequestApi, deviceId: string) => {
  if (isPlaying) {
    return pause(deviceId);
  }
  return play(request, deviceId);
};
