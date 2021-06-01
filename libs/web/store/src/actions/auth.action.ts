import { AuthModel } from '@spotify/web/auth';

export const AUTH_SUCCESS = 'AUTH_SUCCESS';

const setAuthData = (authData: AuthModel) => {
  const timeExpired = new Date();
  timeExpired.setSeconds(timeExpired.getSeconds() + Number(authData.expiresIn));
  localStorage.setItem('accessToken', authData.accessToken);
  localStorage.setItem('tokenType', authData.tokenType);
  localStorage.setItem('expiresIn', JSON.stringify(timeExpired));
};

export const authSuccess = (authData: AuthModel, isNewSession?: boolean) => {
  let isLogined = false;
  if(authData.accessToken) {
    if (isNewSession) {
      setAuthData(authData);
    }
    isLogined = true;
  }

  return {
    type: AUTH_SUCCESS,
    payload: {
      isLogined
    }
  }
}
