import { SET_SDK_PLAYER, SET_VOLUME } from '../actions/playback.action';

interface PlaybackReducer {
  volume: number,
  player: any,
}

const INIT_STATE: PlaybackReducer = {
  volume: 0,
  player: null
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
    default:
      return state;
  }
}
