import React, { useEffect, useRef, useState } from 'react';

import './player-playback.scss';
import { Slider } from 'antd';
import { useDispatch } from 'react-redux';
import { seekCurrentTrack } from '@spotify/web/store';

/* eslint-disable-next-line */
export interface PlayerPlayerPlaybackProps {
  max: number;
  value: number;
  isPlaying: boolean;
  deviceId: string;
}

export function PlayerPlayback(props: PlayerPlayerPlaybackProps) {
  const [isMoving, setIsMoving] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(0);
  const dispatch = useDispatch();
  const onChange = (value: number) => {
    if (!isMoving) {
      setIsMoving(true);
    }
    setCurrentPosition(value);
  };
  const afterChange = (value: number) => {
    setIsMoving(false);
    dispatch(seekCurrentTrack(props.deviceId, value));
  };

  const formatTimeCount = (value: number): string => {
    return Number(value) >= 0 ? new Date(value).toISOString().substr(14, 5) : '';
  };
  useEffect(() => {
    let interval;
    if (props.isPlaying && !isMoving) {
      interval = setInterval(() => {
        setCurrentPosition( c => c + 1000);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [props.isPlaying, isMoving]);

  useEffect(() => {
    setCurrentPosition(props.value);
  }, [props.value]);
  return (
    <div className='flex items-center'>
      <span className='time-duration text-gray-500'>{ formatTimeCount(currentPosition) }</span>
      <Slider className='flex-1 mx-3' max={ props.max } value={ currentPosition }
              onChange={ onChange } onAfterChange={ afterChange } tooltipVisible={ false } />
      <span className='time-duration text-gray-500'>{ formatTimeCount(props.max) }</span>
    </div>
  );
}

export default PlayerPlayback;
