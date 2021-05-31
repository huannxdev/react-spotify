import React from 'react';

import './home.scss';
import { RecentPlayed } from '@spotify/web/recent-played';

/* eslint-disable-next-line */
export interface WebHomeProps {}

export function Home(props: WebHomeProps) {
  return (
    <div className='home-container '>
      <h1 className='text-white text-3xl'>Welcome to React Spotify</h1>
      <p className='text-white'>React Spotify was built with Nx workspace, React Hooks, TailwindCSS and Antd. You can checkout source code <a href='https://github.com/huannxdev/spotify-clone'>Huan Nguyen</a></p>
      <RecentPlayed />
    </div>
  );
}

export default Home;
