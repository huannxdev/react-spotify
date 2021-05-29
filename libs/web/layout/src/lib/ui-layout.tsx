import React, { useEffect } from 'react';
import './ui-layout.scss';
import { NavBar } from '@spotify/web/nav-bar';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import { MainView } from '@spotify/web/main-view';
import { NowPlayingBar } from '@spotify/web/now-playing-bar';
import { getAuthInfo, getToken, SpotifyAuthorize } from '@spotify/web/auth';
import { useDispatch } from 'react-redux';
import { authSuccess } from '@spotify/web/store';
import { TopBar } from '@spotify/web/top-bar';
import { Callback } from '@spotify/callback';

export function UiLayout() {
  const dispatch = useDispatch();
  useEffect(() => {
    const isLogin = getToken();
    const spoifyAuthUrl = new SpotifyAuthorize().createAuthorizeURL();
    if (!isLogin && !window.location.hash) {
      window.location.href = spoifyAuthUrl;
    } else {
      const data = getAuthInfo();
      dispatch(authSuccess(data));
    }
  }, []);
  return (
    <div className='main__layout'>
      <BrowserRouter>
        { !window.location.hash ?
          (<React.Fragment>
            <NavBar />
            <MainView />
            <NowPlayingBar />
            <TopBar />
          </React.Fragment>) : (<Callback />)
        }
        <Switch>
          <Route path='/' exact={ true }>
            <React.Fragment>
              <NavBar />
              <MainView />
              <NowPlayingBar />
              <TopBar />
            </React.Fragment>
          </Route>
          <Route path='/callback' exact={ true } component={ Callback }></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default withRouter(UiLayout);
