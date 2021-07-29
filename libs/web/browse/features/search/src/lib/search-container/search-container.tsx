import React, { useEffect } from 'react';
import './search-container.scss';
import { Categories } from '@spotify/web/browse/features/categories';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategoriesRequest } from '../../../../../../store/src/actions/browse.action';
import { RootState } from '@spotify/web/store';


export function SearchContainer() {
  const dispatch = useDispatch();
  const listCategory: SpotifyApi.CategoryObject[] = useSelector((state: RootState) => state.browseCategory.categories)
  useEffect(() => {
    dispatch(getAllCategoriesRequest());
  }, [])
  return (
    <div>
      <Categories categories={listCategory} />
    </div>
  );
}

export default SearchContainer;
