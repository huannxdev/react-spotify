import { seekTrackRequest, skipToNextTrackRequest, skipToPreviousTrackRequest, togglePlay } from '../apis/play.api';
import { SpotifyPlayRequestApi } from '@spotify/web/shared/models';

export const SET_VOLUME = 'SET_VOLUME';
export const SET_SDK_PLAYER = 'SET_SDK_PLAYER';
export const SET_DEVICE_ID = 'SET_DEVICE_ID';
export const TOGGLE_PLAY = 'TOGGLE_PLAY';
export const SET_STATE_SDK_PLAYER = 'SET_STATE_SDK_PLAYER';
export const SKIP_TO_NEXT_TRACK = 'SKIP_TO_NEXT_TRACK';
export const SKIP_TO_PREVIOUS_TRACK = 'SKIP_TO_PREVIOUS_TRACK';
export const SEEK_CURRENT_TRACK = 'SEEK_CURRENT_TRACK';

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

export const skipToNextTrack = (deviceId: string) => {
  return (dispatch) => {
    dispatch(
      {
        type: SKIP_TO_NEXT_TRACK,
        payload: deviceId
      }
    );
    skipToNextTrackRequest(deviceId).then();
  }
}

export const skipToPreviousTrack = (deviceId: string) => {
  return (dispatch) => {
    dispatch(
      {
        type: SKIP_TO_PREVIOUS_TRACK,
        payload: deviceId
      }
    );
    skipToPreviousTrackRequest(deviceId).then();
  }
}

export const seekCurrentTrack = (deviceId: string, positionMs: number) => {
  return (dispatch) => {
    dispatch(
      {
        type: SEEK_CURRENT_TRACK,
        payload: {deviceId, positionMs}
      }
    );
    seekTrackRequest(deviceId, positionMs).then();
  }
}

