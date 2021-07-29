import { PlayList } from '@spotify/web/shared/ui/play-list';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, setCurrentBrowseCategoryRequest } from '@spotify/web/store';
import { useEffect } from 'react';
import { getCategoryDetailsRequest } from '@spotify/web/store';
import { useParams } from 'react-router-dom';
import React from 'react';

interface ParamTypes {
  id: string
}

export function CategoryDetails() {
  const { id } = useParams<ParamTypes>();
  const dispatch = useDispatch();
  const playlist = useSelector((state: RootState) => state.browseCategory.playlist);
  const currentCategory = useSelector((state: RootState) => state.browseCategory.selectedCategory);
  useEffect(() => {
    if (id) {
      dispatch(getCategoryDetailsRequest(id));
      dispatch(setCurrentBrowseCategoryRequest(currentCategory || id));
    }
  }, [id]);
  return (
    <div className='categories-container'>
      <h2 className='text-white text-2xl mb-4'>{ currentCategory?.name || '' }</h2>
      <PlayList playlist={ (playlist[id] && playlist[id].items) || [] }></PlayList>
    </div>
  );
}
