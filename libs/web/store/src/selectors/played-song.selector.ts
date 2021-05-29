import { RootState } from '../store';

export const playedSongSelector = (state: RootState) => {
  return state.playedSong.listSong.filter(({ track }, idx, arr) => arr.findIndex((item) => item.track.id === track.id) === idx)
    .slice(0, 20);
}
