import React from 'react';

import './song.scss';
import { PlayButton } from '@spotify/web/shared/ui/play-button';

/* eslint-disable-next-line */
export interface WebSongProps {
  name: string;
  description: string;
  image: string;
}

export function Song(props: WebSongProps) {
  return (
    <div className='song__container'>
      <a className='flex flex-col flex-1'>
        <div className='flex relative mb-4'>
          <img src={props.image} />
          <div className='play-button-overlay'>
            <PlayButton large={true} primary={true}/>
          </div>
        </div>
        <div className='song-description'>
          <p className='text-white font-bold'>{props.name}</p>
          <p className='text-description'>{props.description}</p>
        </div>
      </a>
    </div>
  );
}

export default Song;
