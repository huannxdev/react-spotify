import React, { useEffect, useState } from 'react';

import './top-bar.scss';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getMeRequest, RootState } from '@spotify/web/store';
import debounceTime from '../../../../shared/utils/src/debounce-time';

/* eslint-disable-next-line */
export interface TopBarProps {}
export function TopBar(props: TopBarProps) {
  const menu = (
    <Menu>
      <Menu.Item key='0'>
        <a className="text-description" href="https://www.spotify.com/account/" target="_blank">
          Profile
        </a>
      </Menu.Item>
      <Menu.Item key='1'>
        <a className="text-description" href="https://www.spotify.com/account/apps/" target="_blank">
          Remove Access
        </a>
      </Menu.Item>
    </Menu>
  );
  const userName = useSelector((state: RootState) => state.user.userName);
  const img = useSelector((state: RootState) => state.user.userAvatar);
  const isLogined = useSelector((state: RootState) => state.auth.isLogined)
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');
  const debouncedSearchText = debounceTime(searchText, 500);

  useEffect(() => {
    if (isLogined) {
      dispatch(getMeRequest());
    }
  }, [isLogined]);

  useEffect(() => {

  }, [debouncedSearchText])

  return (
    <div className='top-bar__container'>
      <div className='flex flex-1 items-center'>
        <button className='mr-4 arrow-button'>
          <i className='icon-prev'></i>
        </button>
        <button className='arrow-button'>
          <i className='icon-next'></i>
        </button>
        <div className='top-bar__search'>
          <i className='icon-search'></i>
          <input placeholder='Artists, songs, or podcasts' onChange={e => setSearchText(e.target.value)} />
        </div>
      </div>
      <div className='user-dropdown'>
        <Dropdown className='flex items-center' overlay={menu}>
          <div>
            <img className='top-bar__avatar' src={img} />
            <span className='w-16 ml-2 text-xs text-white truncate'>{userName}</span>
            <DownOutlined className='text-white icon-dropdown' />
          </div>
        </Dropdown>
      </div>
    </div>
  );
}

export default TopBar;
