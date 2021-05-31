///  <reference types="@types/spotify-web-playback-sdk"/>
import { RootState } from '../store';

export const getCurrentTrack = (state: RootState): Spotify.Track => {
  return state.playBack.stateSDKPlayer?.track_window?.current_track;
}

export const currentPosition = (state: RootState): number => {
  return state.playBack.stateSDKPlayer?.position;
}
