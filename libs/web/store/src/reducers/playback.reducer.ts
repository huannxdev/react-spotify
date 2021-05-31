import {
  SET_DEVICE_ID,
  SET_SDK_PLAYER,
  SET_STATE_SDK_PLAYER,
  SET_VOLUME,
  TOGGLE_PLAY
} from '../actions/playback.action';
interface PlaybackReducer {
  volume: number,
  player: any,
  isPlaying: boolean,
  stateSDKPlayer: Spotify.PlaybackState,
  deviceId: string;
}

const INIT_STATE: PlaybackReducer = {
  volume: 1,
  player: null,
  isPlaying: false,
  stateSDKPlayer: null,
  deviceId: ''
};

export default function playbackReducer(state = INIT_STATE, action: { type: string, payload: any }): PlaybackReducer {
  const { type, payload } = action;
  switch (type) {
    case SET_VOLUME:
      return {
        ...state,
        volume: payload
      };
    case SET_SDK_PLAYER:
      return {
        ...state,
        player: payload
      }
    case TOGGLE_PLAY:
      return {
        ...state,
        isPlaying: payload
      }
    case SET_STATE_SDK_PLAYER:
      return {
        ...state,
        stateSDKPlayer: payload,
        isPlaying: !payload.paused
      }
    case SET_DEVICE_ID:
      return {
        ...state,
        deviceId: payload,
      }
    default:
      return state;
  }
}
