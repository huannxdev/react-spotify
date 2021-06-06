import React from 'react';

import './now-playing-bar.scss';
import PlayerControl from '../player-control/player-control';
import PlayerPlayback from '../player-playback/player-playback';
import { useDispatch, useSelector } from 'react-redux';
import { currentPosition, getCurrentTrack, RootState, togglePlayer } from '@spotify/web/store';

/* eslint-disable-next-line */
export interface NowPlayingBarProps {}

export function NowPlayingBar(props: NowPlayingBarProps) {
  const dispatch = useDispatch();
  const isPlaying = useSelector((state: RootState) => state.playBack.isPlaying);
  const deviceId = useSelector((state: RootState) => state.playBack.deviceId);
  const currentTrack: Spotify.Track = useSelector((state: RootState) => getCurrentTrack(state));
  const currentPositionMs: number = useSelector((state: RootState) => currentPosition(state));
  const currentTrackPlayer = useSelector((state: RootState) => state.playBack.stateSDKPlayer);
  const onClickPlay = () => {
    dispatch(togglePlayer(isPlaying, {uris: [currentTrack?.uri], position_ms: currentPositionMs}, deviceId));
  }
  return (
    <div className='now-playing-bar'>
      <div className='now-playing-bar__container'>
        <div className='now-playing-bar__left flex flex-1'></div>
        <div className='now-playing-bar__center flex-col flex flex-1'>
          <PlayerControl isPlaying={isPlaying} onClickPlay={onClickPlay} />
          <PlayerPlayback max={currentTrackPlayer?.duration || 0} value={currentPositionMs} isPlaying={isPlaying} deviceId={deviceId} />
        </div>
        <div className='now-playing-bar__right flex flex-1'></div>
      </div>
    </div>
  );
}

export default NowPlayingBar;
