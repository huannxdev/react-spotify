import { AuthModel } from '@spotify/web/auth';
import { setToken } from '../../../shared/app-config/src/lib/axios';

export const AUTH_SUCCESS = 'AUTH_SUCCESS';

const setAuthData = (authData: AuthModel) => {
  localStorage.setItem('accessToken', authData.accessToken);
  localStorage.setItem('tokenType', authData.tokenType);
  localStorage.setItem('expiresIn', authData.expiresIn);
};

export const authSuccess = (authData: AuthModel) => {
  let isLogined = false;
  if(authData.accessToken) {
    setAuthData(authData);
    setToken(authData.accessToken);
    isLogined = true;
  }

  return {
    type: AUTH_SUCCESS,
    payload: {
      isLogined
    }
  }
}
