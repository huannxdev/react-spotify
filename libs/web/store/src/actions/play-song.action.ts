import { getRecentlyPlayed } from '../apis/play.api';

export const GET_RECENT_PLAYED_REQUEST = 'GET_RECENT_PLAYED_REQUEST';
export const GET_RECENT_PLAYED_REQUEST__SUCCESS = 'GET_RECENT_PLAYED_REQUEST__SUCCESS';
export const GET_RECENT_PLAYED_REQUEST__FAIL = 'GET_RECENT_PLAYED_REQUEST__FAIL';

export const getRecentlyPlayedRequest = () => {
  return (dispatch) => {
    dispatch({
      type: GET_RECENT_PLAYED_REQUEST
    });
    getRecentlyPlayed().then((res) => {
      const { data } = res;
      dispatch(getRecentlyPlayedRequestSuccess(data.items))
    }, (error) => {
      dispatch(getRecentlyPlayedRequestFail(error))
    })
  };
}

export const getRecentlyPlayedRequestSuccess = (payload: SpotifyApi.PlayHistoryObject[]) => {
  return {
    type: GET_RECENT_PLAYED_REQUEST__SUCCESS,
    payload,
  }
}

export const getRecentlyPlayedRequestFail = (error) => {
  return {
    type: GET_RECENT_PLAYED_REQUEST__FAIL,
    error,
  }
}
