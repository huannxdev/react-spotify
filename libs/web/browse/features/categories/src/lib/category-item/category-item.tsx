import React from 'react';

import './category-item.scss';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentBrowseCategoryRequest } from '@spotify/web/store';

/* eslint-disable-next-line */
export interface CategoryItemProps {
  category: SpotifyApi.CategoryObject
}

export function CategoryItem(props: CategoryItemProps) {
  let history = useHistory();
  const dispatch = useDispatch();
  const navigateToPlaylist = () => {
    dispatch(setCurrentBrowseCategoryRequest(props.category));
    history.push(`/browse/${ props.category.id }`);
  };
  return (
    <div className='category-item-container' onClick={ navigateToPlaylist }>
      <div className='category-item__cover'
           style={ { backgroundImage: `url(${ props.category.icons[0].url })` } }></div>
      <div className='category-item__name'>
        <span>{ props.category.name }</span>
      </div>
    </div>
  );
}

export default CategoryItem;
