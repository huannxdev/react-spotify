import React, { useEffect } from 'react';

import './recent-played.scss';
import { Song } from '@spotify/web/song';
import { useDispatch, useSelector } from 'react-redux';
import { getRecentlyPlayedRequest, RootState } from '@spotify/web/store';

/* eslint-disable-next-line */
export interface WebRecentPlayedProps {}

export function RecentPlayed(props: WebRecentPlayedProps) {
  const dispatch = useDispatch();
  const listSong = useSelector((state: RootState) => state.playedSong.listSong);
  console.log(listSong);
  useEffect(() => {
    dispatch(getRecentlyPlayedRequest())
  }, [])
  return (
    <div className='recent-played-container'>
      <h2 className='text-white text-2xl mb-4'>Recently Played</h2>
      <div className='common-grid'>
        {
          listSong.map((song) => (
            <Song key={song.track.id} name={song.track.name} description={song.track.artists[0]?.name} image={(song.track as any).album.images[0].url} />
          ))
        }
      </div>
    </div>
  );
}

export default RecentPlayed;
