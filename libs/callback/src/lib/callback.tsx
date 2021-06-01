import React, { useEffect } from 'react';

import './callback.scss';
import { authDataFromHash } from '@spotify/web/auth';
import { authSuccess, RootState } from '@spotify/web/store';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

/* eslint-disable-next-line */
export interface CallbackProps {
}

export function Callback(props: CallbackProps) {
  const dispatch = useDispatch();
  const history = useHistory();
  const isLoginSuccess = useSelector((state: RootState) => state.auth.isLogined);
  useEffect(() => {
    const data = authDataFromHash(location.hash);
    if (data?.accessToken) {
      dispatch(authSuccess(data, true));
      window.location.hash = '';
    }
  }, []);
  useEffect(() => {
   if (isLoginSuccess) {
     history.push('/');
   }
  }, [isLoginSuccess]);
  return (
    <div>
    </div>
  );
}

export default Callback;
