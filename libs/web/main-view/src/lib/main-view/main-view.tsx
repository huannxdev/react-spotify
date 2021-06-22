import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './main-view.scss';
import { Categories } from '@spotify/web/browse/features/categories';
import { SpotifyRoute } from '@spotify/spotify-route';
import { Home } from '@spotify/web/home';
import { Callback } from '@spotify/callback';
import { SearchContainer } from '@spotify/web/browse/features/search';

/* eslint-disable-next-line */
export interface MainViewProps {}

export function MainView(props: MainViewProps) {
  return (
    <div className='main-view'>
      <Switch>
        <SpotifyRoute path="/" exact={true} component={Home} />
        <SpotifyRoute path='/search' component={SearchContainer} />
        <Route path='/callback' exact={true} component={ Callback } />
      </Switch>
    </div>
  );
}

export default MainView;
