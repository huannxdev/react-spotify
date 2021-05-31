import { RootState } from '../store';

export const getCurrentTrack = (state: RootState): SpotifyApi.TrackObjectSimplified => {
  return state.playBack.stateSDKPlayer?.track_window?.current_track;
}

export const currentPosition = (state: RootState): number => {
  return state.playBack.stateSDKPlayer?.position;
}
