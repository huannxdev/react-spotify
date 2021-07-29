import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import history from './utils/history';
import createReducer from './reducers';
import { config } from '@spotify/web/shared/app-config';

const middleware = [thunk, routerMiddleware(history)];
const composeEnhancers = (!config().APP_ENV_PROD ? window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose : null) || compose;

const reducers = createReducer();
export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middleware)),
);

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
