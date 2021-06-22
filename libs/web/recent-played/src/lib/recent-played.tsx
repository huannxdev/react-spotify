import React, { useEffect } from 'react';

import './recent-played.scss';

import { useDispatch, useSelector } from 'react-redux';
import { getRecentlyPlayedRequest, RootState } from '@spotify/web/store';
import { Song } from '@spotify/web/shared/ui/song';

/* eslint-disable-next-line */
export interface WebRecentPlayedProps {}

export function RecentPlayed(props: WebRecentPlayedProps) {
  const dispatch = useDispatch();
  const listSong = useSelector((state: RootState) => state.playedSong.listSong);
  useEffect(() => {
    dispatch(getRecentlyPlayedRequest())
  }, [])
  return (
    <div className='recent-played-container'>
      <h2 className='text-white text-2xl mb-4'>Recently Played</h2>
      <div className='common-grid'>
        {
          listSong.map((song) => (
            <Song key={song.track.uri} name={song.track.name} description={song.track.artists[0]?.name} image={(song.track as any).album.images[0].url} contextUri={song.track.uri} />
          ))
        }
      </div>
    </div>
  );
}

export default RecentPlayed;
