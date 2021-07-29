import React from 'react';
import './current-track-info.scss';

interface CurrentTrackInfoProps {
  currentTrack: Spotify.Track;
  isPlaying: boolean;
}
export function CurrentTrackInfo(props: CurrentTrackInfoProps) {
  return (
    <div className='flex items-center'>
      <div className='thumbnail-wrapper animate'>
        {props.currentTrack?.album.images[0]?.url && (<div className={`thumbnail ${props.isPlaying ? 'thumbnail--running' : 'thumbnail--pause'}`}>
          <figure>
            <img src={props.currentTrack?.album.images[0]?.url} />
          </figure>
        </div>)}
      </div>
      <div className='flex flex-col ml-2'>
        <div className='text-white ellipsis-one-line text-title'>
          <span>{props.currentTrack?.name}</span>
        </div>
        <div className='flex'>
          <span className='text-description link-subtle ellipsis-one-line hover:underline'>{props.currentTrack?.artists[0]?.name}</span>
        </div>
      </div>
    </div>
  )
}
