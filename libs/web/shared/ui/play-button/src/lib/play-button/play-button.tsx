import React from 'react';

import './play-button.scss';

/* eslint-disable-next-line */
export interface PlayButtonProps {
  flatIcon?: boolean,
  large?: boolean,
  primary?: boolean
}

export function PlayButton(props: PlayButtonProps) {
  return (
    <div className='mx-4 text-black'>
      <div className={`${buttonClass(props)}`}>
        <i className='icon-play' />
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
