import React from 'react';

import './player-control.scss';
import { PlayButton } from '@spotify/web/shared/ui/play-button';

/* eslint-disable-next-line */
export interface PlayerControlProps {}

export function PlayerControl(props: PlayerControlProps) {
  return (
    <div className='flex justify-center player-control'>
      <div className='control-button hover:text-white'>
        <i className='icon-step-backward' />
      </div>
      <PlayButton />
      <div className='control-button hover:text-white'>
        <i className='icon-step-forward' />
      </div>
    </div>
  );
}

export default PlayerControl;
