import React from 'react';

import './play-button.scss';

/* eslint-disable-next-line */
export interface PlayButtonProps {
  flatIcon?: boolean,
  large?: boolean,
  primary?: boolean,
  isPlaying?: boolean,
  handleClicked?: () => void;
}

export function PlayButton(props: PlayButtonProps) {
  return (
    <div className='mx-4 text-black' onClick={props.handleClicked}>
      <div className={`${buttonClass(props)}`}>
        <i className={props.isPlaying ? 'icon-pause' : 'icon-play'} />
      </div>
    </div>
  );
}

const buttonClass = (props: PlayButtonProps) => {
  if (props.flatIcon) {
    return 'flex';
  }
  const baseClass = 'flex play-icon control-button';
  const sizeClass = props.large ? 'large' : '';
  return `${baseClass} ${sizeClass} ${props.primary ? 'text-white bg-primary' : 'text-black bg-white'}`;
}

export default PlayButton;
