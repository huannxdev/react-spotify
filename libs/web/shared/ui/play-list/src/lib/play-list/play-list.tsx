import React from 'react';
import { Song } from '../../../../song/src';
import './play-list.scss';
interface PlayListProps {
  listTrack: any[]
}

export function PlayList(props: PlayListProps) {
  return (
    <div className='common-grid'>
      {
        props.listTrack.map((track) => (
          <Song key={ track.track.uri } name={ track.track.name } description={ track.track.artists[0]?.name }
                image={ (track.track as any).album.images[0].url } contextUri={ track.track.uri } />
        ))
      }
    </div>
  );
}

export default PlayList;
