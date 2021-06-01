import React, { ClassicComponent, ComponentClass, FunctionComponent } from 'react';

import './spotify-route.scss';
import { getAuthInfo, getToken, SpotifyAuthorize } from '@spotify/web/auth';
import { Route, Redirect } from 'react-router-dom';

/* eslint-disable-next-line */
export interface SpotifyRouteProps {
  path: string;
  exact?: boolean;
  render?: any;
  component?: FunctionComponent | ComponentClass;
}

export function SpotifyRoute(props: SpotifyRouteProps) {
  const authInfo = getAuthInfo();
  const isLogin = authInfo.accessToken && new Date(JSON.parse(authInfo.expiresIn)) > new Date();
  const spoifyAuthUrl = new SpotifyAuthorize().createAuthorizeURL();
  if (!isLogin && !window.location.hash) {
    window.location.href = spoifyAuthUrl;
  }
  return (<Route  path={props.path}  exact={props.exact} component={props.component} render={() => props.render} />);
}

export default SpotifyRoute;
