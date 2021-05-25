import React, { useEffect } from 'react';
import './ui-layout.scss';
import { NavBar } from '@spotify/web/nav-bar';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import { MainView } from '@spotify/web/main-view';
import { NowPlayingBar } from '@spotify/web/now-playing-bar';
import { useLocation } from 'react-router-dom';
import { authDataFromHash, getToken, redirectAuthorize } from '@spotify/web/auth';
import { useDispatch } from 'react-redux';
import { authSuccess } from '@spotify/web/store';
import { TopBar } from '@spotify/web/top-bar';
import { getMeRequest } from '../../../store/src/actions/user.action';

export function UiLayout() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!window.location.hash && !getToken()) {
      redirectAuthorize();
      return;
    }
    const data = authDataFromHash(location.hash);
    if (data?.accessToken) {
      dispatch(authSuccess(data));
      window.location.hash = '';
    }
    dispatch(getMeRequest());
  });
  return (
    <div className='main__layout'>
      <BrowserRouter>
        <Route path='/' render={ () =>
          (
            <React.Fragment>
              <NavBar />
              <MainView />
              <NowPlayingBar />
              <TopBar />
            </React.Fragment>
          )
        }>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default withRouter(UiLayout);
