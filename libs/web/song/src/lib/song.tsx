///  <reference types="@types/spotify-web-playback-sdk"/>
import React, { useState } from 'react';

import './song.scss';
import { PlayButton } from '@spotify/web/shared/ui/play-button';
import { useDispatch, useSelector } from 'react-redux';
import { togglePlayer } from '../../../store/src/actions/playback.action';
import { RootState } from '@spotify/web/store';
import { getCurrentTrack } from '../../../store/src/selectors/playback.selector';

/* eslint-disable-next-line */
export interface WebSongProps {
  name: string;
  description: string;
  image: string;
  contextUri: string;
}

export function Song(props: WebSongProps) {
  const dispatch = useDispatch();
  const deviceId = useSelector((state: RootState) => state.playBack.deviceId);
  const isPlaying = useSelector((state: RootState) => state.playBack.isPlaying);
  const currentTrack: Spotify.Track = useSelector((state: RootState) => getCurrentTrack(state));
  const onClickPlay = () => {
    dispatch(togglePlayer(isPlaying && props.contextUri === currentTrack.uri, {uris: [props.contextUri]}, deviceId));
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
