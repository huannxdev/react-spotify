import React from 'react';

import './now-playing-bar.scss';
import PlayerControl from '../player-control/player-control';
import PlayerPlayback from '../player-playback/player-playback';

/* eslint-disable-next-line */
export interface NowPlayingBarProps {}

export function NowPlayingBar(props: NowPlayingBarProps) {
  return (
    <div className='now-playing-bar'>
      <div className='now-playing-bar__container'>
        <div className='now-playing-bar__left flex flex-1'></div>
        <div className='now-playing-bar__center flex-col flex flex-1'>
          <PlayerControl />
          <PlayerPlayback max={120} />
        </div>
        <div className='now-playing-bar__right flex flex-1'></div>
      </div>
    </div>
  );
}

export default NowPlayingBar;
