import { getMe } from '../apis/user.api';
export const GET_ME_REQUEST = 'GET_ME_REQUEST';
export const GET_ME_REQUEST_SUCCESS = 'GET_ME_REQUEST_SUCCESS';
export const GET_ME_REQUEST_FAIL = 'GET_ME_REQUEST_FAIL';

export const getMeRequest = () => {
  return (dispatch) => {
    dispatch({
      type: GET_ME_REQUEST
    });
    getMe().then(res => {
      dispatch(getMeSuccess(res))
    }).catch((error) => {
      dispatch(getMeFailed(error))
    });
  };
}

export const getMeSuccess = (payload: SpotifyApi.CurrentUsersProfileResponse) => {
  return {
    type: GET_ME_REQUEST_SUCCESS,
    payload,
  }
}

export const getMeFailed = (error) => {
  return {
    type: GET_ME_REQUEST_FAIL,
    payload: {
      error,
    },
  };
};
