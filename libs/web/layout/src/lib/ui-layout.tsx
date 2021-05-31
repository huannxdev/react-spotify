import React, { useEffect } from 'react';
import './ui-layout.scss';
import { NavBar } from '@spotify/web/nav-bar';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import { MainView } from '@spotify/web/main-view';
import { NowPlayingBar } from '@spotify/web/now-playing-bar';
import { getAuthInfo, getToken, SpotifyAuthorize } from '@spotify/web/auth';
import { useDispatch, useSelector } from 'react-redux';
import { authSuccess, RootState } from '@spotify/web/store';
import { TopBar } from '@spotify/web/top-bar';
import { setDeviceId, setSDKPlayer, setStateSDKPlayer } from '../../../store/src/actions/playback.action';
import { config } from '@spotify/web/shared/app-config';

export function UiLayout() {
  const dispatch = useDispatch();

  const initPlayBackSDK = async (token: string, volume: number) => {
    const { Player } = await waitForSpotifyWebPlaybackSDKToLoad();
    const player = new Player({
      name: 'React Spotify Web Player',
      getOAuthToken: (v) => {
        v(token);
      },
      volume
    });
    player.addListener('initialization_error', ({ message }) => {
      console.error(message);
    });

    player.addListener('authentication_error', ({ message }) => {
      console.error(message);
    });

    player.addListener('account_error', ({ message }) => {
      alert(`You account has to have Spotify Premium for playing music ${message}`);
    });

    player.addListener('playback_error', ({ message }) => {
      console.error(message);
    });
    player.addListener('player_state_changed', state => {
      console.log(state);
      dispatch(setStateSDKPlayer(state));
    });

    // Ready
    player.addListener('ready', ({ device_id }) => {
      console.log('Ready with Device ID', device_id);
      dispatch(setDeviceId(device_id));
    });

    // Not Ready
    player.addListener('not_ready', ({ device_id }) => {
      console.log('Device ID has gone offline', device_id);
    });

    // Connect to the player!
    await player.connect();
    dispatch(setSDKPlayer(player));
  }

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
  const volume = useSelector((state: RootState) => state.playBack.volume);
  useEffect(() => {
    const token = getToken();
    if (token) {
      initPlayBackSDK(token, volume).then();
    }
  }, [volume])

  return (
    <div className='main__layout'>
      <BrowserRouter basename={config.repoName}>
        <Switch>
          <Route path='/'>
            <React.Fragment>
              <NavBar />
              <MainView />
              <NowPlayingBar />
              <TopBar />
            </React.Fragment>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const waitForSpotifyWebPlaybackSDKToLoad = (): Promise<any> => {
  window['onSpotifyWebPlaybackSDKReady'] = () => {}
  return new Promise((resolve) => {
    if (window['Spotify']) {
      resolve(window['Spotify']);
    } else {
      window['onSpotifyWebPlaybackSDKReady'] = () => {
        resolve(window['Spotify']);
      }
    }
  });
}

export default withRouter(UiLayout);
