import React from 'react';
import { Switch } from 'react-router-dom';

import './main-view.scss';
import { Categories } from '@spotify/web/browse/features/categories';
import { SpotifyRoute } from '@spotify/spotify-route';
import { Home } from '@spotify/web/home';

/* eslint-disable-next-line */
export interface MainViewProps {}

export function MainView(props: MainViewProps) {
  return (
    <div className='main-view'>
      <Switch>
        <SpotifyRoute path="/" exact={true} component={Home} />
        <SpotifyRoute path="/browse"  component={Categories} />
      </Switch>
    </div>
  );
}

export default MainView;
