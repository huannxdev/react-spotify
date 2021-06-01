///  <reference types="@types/spotify-web-playback-sdk"/>
import React from 'react';

import './player-control.scss';
import { PlayButton } from '@spotify/web/shared/ui/play-button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@spotify/web/store';
import { togglePlayer } from '../../../../store/src/actions/playback.action';
import { currentPosition, getCurrentTrack } from '../../../../store/src/selectors/playback.selector';

/* eslint-disable-next-line */
export interface PlayerControlProps {
  isPlaying: boolean;
  onClickPlay: () => void;
}

export function PlayerControl(props: PlayerControlProps) {
  return (
    <div className='flex justify-center player-control'>
      <div className='control-button hover:text-white'>
        <i className='icon-step-backward' />
      </div>
      <PlayButton isPlaying={props.isPlaying} handleClicked={props.onClickPlay}/>
      <div className='control-button hover:text-white'>
        <i className='icon-step-forward' />
      </div>
    </div>
  );
}

export default PlayerControl;
