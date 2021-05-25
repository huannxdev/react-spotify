import React from 'react';
import { Switch, Route} from 'react-router-dom';

import './main-view.scss';
import { Categories } from '@spotify/web/browse/features/categories';

/* eslint-disable-next-line */
export interface MainViewProps {}

export function MainView(props: MainViewProps) {
  return (
    <div className='main-view'>
      <Switch>
        <Route path="/browse" render={() => (
          <Categories />
        )}>
        </Route>
      </Switch>
    </div>
  );
}

export default MainView;
