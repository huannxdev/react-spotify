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
      <Slider className='flex-1 mx-2' max={props.max} value={props.value + count} tooltipVisible={false} />
    </div>
  );
}

export default PlayerPlayback;
