import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import history from './utils/history';
import createReducer from './reducers';

const middleware = [thunk, routerMiddleware(history)];
const composeEnhancers = compose;

const reducers = createReducer();
export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middleware)),
);

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
