import { GET_RECENT_PLAYED_REQUEST__SUCCESS } from '@spotify/web/store';

interface PlayedSongReducer {
  listSong: SpotifyApi.PlayHistoryObject[]
}

const INIT_STATE: PlayedSongReducer = {
  listSong: [],
};

export default function playedSongReducer(state = INIT_STATE, action: { type: string, payload: any }): PlayedSongReducer {
  const { type, payload } = action;
  switch (type) {
    case GET_RECENT_PLAYED_REQUEST__SUCCESS:
      return {
        ...state,
        listSong: payload
      };
    default:
      return state;
  }
}
