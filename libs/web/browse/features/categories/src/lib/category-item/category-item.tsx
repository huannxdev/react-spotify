import React from 'react';

import './category-item.scss';
import { NavLink } from 'react-router-dom';

/* eslint-disable-next-line */
export interface CategoryItemProps {
  category: SpotifyApi.CategoryObject
}

export function CategoryItem(props: CategoryItemProps) {
  return (
    <NavLink to={`/browse/${props.category.id}`}>
      <div className='category-item-container'>
        <div className='category-item__cover' style={{backgroundImage: `url(${props.category.icons[0].url})`}}></div>
        <div className='category-item__name'>
          <span>{props.category.name}</span>
        </div>
      </div>
    </NavLink>
  );
}

export default CategoryItem;
