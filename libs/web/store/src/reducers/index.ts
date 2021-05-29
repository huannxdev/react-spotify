import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../utils/history'
import authReducer from './auth.reducer';
import userReducer from './user.reducer';
import playedSongReducer from './played-song.reducer';

function createReducer() {
  return combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    user: userReducer,
    playedSong: playedSongReducer
  })
}

export default createReducer;
