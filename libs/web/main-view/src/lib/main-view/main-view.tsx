import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './main-view.scss';
import { SpotifyRoute } from '@spotify/spotify-route';
import { Home } from '@spotify/web/home';
import { Callback } from '@spotify/callback';
import { SearchContainer } from '@spotify/web/browse/features/search';
import { CategoryDetails } from '@spotify/web/browse/features/categories';

/* eslint-disable-next-line */
export interface MainViewProps {}

export function MainView(props: MainViewProps) {
  return (
    <div className='main-view'>
      <Switch>
        <SpotifyRoute path="/" exact={true} component={Home} />
        <SpotifyRoute path='/search' component={SearchContainer} />
        <SpotifyRoute path='/browse/:id' component={CategoryDetails} />
        <Route path='/callback' exact={true} component={ Callback } />
      </Switch>
    </div>
  );
}

export default MainView;
