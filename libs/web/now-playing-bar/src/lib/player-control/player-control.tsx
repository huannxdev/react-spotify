///  <reference types="@types/spotify-web-playback-sdk"/>
import React from 'react';

import './player-control.scss';
import { PlayButton } from '@spotify/web/shared/ui/play-button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@spotify/web/store';
import { togglePlayer } from '../../../../store/src/actions/playback.action';
import { currentPosition, getCurrentTrack } from '../../../../store/src/selectors/playback.selector';

/* eslint-disable-next-line */
export interface PlayerControlProps {}

export function PlayerControl(props: PlayerControlProps) {
  const dispatch = useDispatch();
  const isPlaying = useSelector((state: RootState) => state.playBack.isPlaying);
  const deviceId = useSelector((state: RootState) => state.playBack.deviceId);
  const currentTrack: Spotify.Track = useSelector((state: RootState) => getCurrentTrack(state));
  const currentPossitionMs: number = useSelector((state: RootState) => currentPosition(state));
  const onClickPlay = () => {
    dispatch(togglePlayer(isPlaying, {uris: [currentTrack.uri], position_ms: currentPossitionMs}, deviceId));
  }
  return (
    <div className='flex justify-center player-control'>
      <div className='control-button hover:text-white'>
        <i className='icon-step-backward' />
      </div>
      <PlayButton isPlaying={isPlaying} handleClicked={onClickPlay}/>
      <div className='control-button hover:text-white'>
        <i className='icon-step-forward' />
      </div>
    </div>
  );
}

export default PlayerControl;
