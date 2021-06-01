import React, { useEffect, useRef, useState } from 'react';

import './player-playback.scss';
import { Slider } from 'antd';

/* eslint-disable-next-line */
export interface PlayerPlayerPlaybackProps {
  max: number;
  value: number;
  isPlaying: boolean;
}

export function PlayerPlayback(props: PlayerPlayerPlaybackProps) {
  const interval = useRef(null);
  const [count, setCount] = useState(1000);
  const [isMoving, setIsMoving] = useState(false);
  const [movingValue, setMovingValue] = useState(0);
  const onChange = (value) => {
    if (!isMoving) {
      setIsMoving(true);
    }
    setMovingValue(value);
  }
  const afterChange = () => {
    setIsMoving(false);
  }
  useEffect(() => {
    if (props.isPlaying) {
      interval.current = setInterval(() => {
        setCount(count + 1000)
      }, 1000);
      return () => clearInterval(interval.current);
    }
  });
  useEffect(() => {
    setCount(0);
  }, [props.isPlaying, props.value])
  return (
    <div>
      <Slider className='flex-1 mx-2' max={props.max} value={isMoving ? movingValue : (props.value + count)} onChange={onChange} onAfterChange={afterChange} tooltipVisible={false} />
    </div>
  );
}

export default PlayerPlayback;
