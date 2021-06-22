import React from 'react';

import './categories.scss';
import CategoryItem from '../category-item/category-item';

/* eslint-disable-next-line */
export interface CategoriesProps {
  categories: SpotifyApi.CategoryObject[]
}

export function Categories(props: CategoriesProps) {
  return (
    <div className='categories-container'>
      <h2 className='text-white text-2xl mb-4'>Browse all</h2>
      <div className='categories__list'>
      {props.categories.map(category => (
        <CategoryItem category={category} key={category.id} />
      ))}
      </div>
    </div>
  );
}

export default Categories;
