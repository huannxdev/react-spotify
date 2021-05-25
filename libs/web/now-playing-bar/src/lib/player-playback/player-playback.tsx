import React, { useState } from 'react';

import './player-playback.scss';
import { Slider } from 'antd';

/* eslint-disable-next-line */
export interface PlayerPlayerPlaybackProps {
  max: number
}

export function PlayerPlayback(props: PlayerPlayerPlaybackProps) {
  const [currentValue, setcurrentValue] = useState(0);
  return (
    <div>
      <Slider className='flex-1 mx-2' max={props.max} value={currentValue}
              onChange={(value) => setcurrentValue(value)} tooltipVisible={false} />
    </div>
  );
}

export default PlayerPlayback;
