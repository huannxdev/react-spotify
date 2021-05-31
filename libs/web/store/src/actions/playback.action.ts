import { togglePlay } from '../apis/play.api';
import { SpotifyPlayRequestApi } from '@spotify/web/shared/models';

export const SET_VOLUME = 'SET_VOLUME';
export const SET_SDK_PLAYER = 'SET_SDK_PLAYER';
export const SET_DEVICE_ID = 'SET_DEVICE_ID';
export const TOGGLE_PLAY = 'TOGGLE_PLAY';
export const SET_STATE_SDK_PLAYER = 'SET_STATE_SDK_PLAYER';

export const setVolume = (volume: number) => {
  return (dispatch) => {
    dispatch({
      type: SET_VOLUME,
      payload: volume
    });
  };
}

export const setSDKPlayer = (player: any) => {
  return (dispatch) => {
    dispatch({
      type: SET_SDK_PLAYER,
      payload: player
    });
  };
}

export const setDeviceId = (id: string) => {
  return (dispatch) => {
    dispatch({
      type: SET_DEVICE_ID,
      payload: id
    })
  }
}

export const togglePlayer = (isPlaying: boolean, request: SpotifyPlayRequestApi, deviceId: string) => {
  return (dispatch) => {
    dispatch({
      type: TOGGLE_PLAY,
      payload: isPlaying
    });
    togglePlay(isPlaying, request, deviceId).then();
  }
}

export const setStateSDKPlayer = (state: any) => {
  return (dispatch) => {
    dispatch(
      {
        type: SET_STATE_SDK_PLAYER,
        payload: state
      }
    )
  }
}
