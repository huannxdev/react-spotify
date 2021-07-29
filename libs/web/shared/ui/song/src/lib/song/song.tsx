///  <reference types="@types/spotify-web-playback-sdk"/>
import React from 'react';

import './song.scss';
import { PlayButton } from '@spotify/web/shared/ui/play-button';
import { useDispatch, useSelector } from 'react-redux';
import { togglePlayer } from '@spotify/web/store';
import { RootState } from '@spotify/web/store';
import { getCurrentTrack } from '@spotify/web/store';

/* eslint-disable-next-line */
export interface SongProps {
  name: string;
  description: string;
  image: string;
  contextUri: string;
  isPlaylist?: boolean;
}

export function Song(props: SongProps) {
  const dispatch = useDispatch();
  const deviceId = useSelector((state: RootState) => state.playBack.deviceId);
  const isPlaying = useSelector((state: RootState) => state.playBack.isPlaying);
  const currentTrack: Spotify.Track = useSelector((state: RootState) => getCurrentTrack(state));
  const onClickPlay = () => {
    dispatch(togglePlayer(isPlaying && props.contextUri === currentTrack.uri,
      props.isPlaylist ? {context_uri: props.contextUri} : {uris: [props.contextUri]}, deviceId));
  }
  return (
    <div className='song__container'>
      <a className='flex flex-col flex-1'>
        <div className='flex relative mb-4'>
          <img src={props.image} />
          <div className='play-button-overlay'>
            <PlayButton large={true} primary={true} handleClicked={onClickPlay} isPlaying={isPlaying && currentTrack?.uri === props.contextUri}/>
          </div>
        </div>
        <div className='song-description'>
          <p className='ellipsis-text text-white font-bold'>{props.name}</p>
          <p className='ellipsis-text text-description'>{props.description}</p>
        </div>
      </a>
    </div>
  );
}

export default Song;
