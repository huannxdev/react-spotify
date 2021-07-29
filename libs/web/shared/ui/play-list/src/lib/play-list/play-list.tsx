import React from 'react';
import { Song } from '../../../../song/src';
import './play-list.scss';
interface PlayListProps {
  playlist: SpotifyApi.PlaylistObjectSimplified[]
}

export function PlayList(props: PlayListProps) {
  return (
    <div className='common-grid'>
      {
        props.playlist && props.playlist.map((item) => (
          <Song key={ item.uri } name={ item.name } description={ item.description }
                image={ item.images[0].url } contextUri={ item.uri } isPlaylist={true} />
        ))
      }
    </div>
  );
}

export default PlayList;
