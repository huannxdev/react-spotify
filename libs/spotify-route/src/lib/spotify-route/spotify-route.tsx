import React, { ClassicComponent, ComponentClass, FunctionComponent } from 'react';

import './spotify-route.scss';
import { getToken, SpotifyAuthorize } from '@spotify/web/auth';
import { Route, Redirect } from 'react-router-dom';

/* eslint-disable-next-line */
export interface SpotifyRouteProps {
  path: string;
  exact: boolean;
  render: any;
  component: FunctionComponent | ComponentClass;
}

export function SpotifyRoute(props: SpotifyRouteProps) {
  const isLogin = !!getToken();
  const spoifyAuthUrl = new SpotifyAuthorize().createAuthorizeURL();
  return  isLogin ? (<Route  path={props.path}  exact={props.exact} component={props.component} render={() => props.render} />) :
    (<Redirect  to={spoifyAuthUrl}  />);
}

export default SpotifyRoute;
