import React from 'react';
import './app.scss';
import { UiLayout } from '@spotify/web/layout';
import { Provider } from 'react-redux';
import { history, store } from '@spotify/web/store';
import { ConnectedRouter } from 'connected-react-router';

export function App() {
  return (
    <Provider store={store} >
      <ConnectedRouter history={history}>
        <div className='wrapper'>
          <UiLayout />
        </div>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
