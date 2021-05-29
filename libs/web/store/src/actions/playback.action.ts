export const SET_VOLUME = 'SET_VOLUME';
export const SET_SDK_PLAYER = 'SET_SDK_PLAYER';
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
