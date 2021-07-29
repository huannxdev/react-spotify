import { getAllCategories, getCategoryDetailsById, getPlayListByCategoryId } from '../apis/browse.api';

export const GET_BROWSE_CATEGORIES_REQUEST = 'GET_BROWSE_CATEGORIES_REQUEST';
export const GET_BROWSE_CATEGORIES_SUCCESS = 'GET_BROWSE_CATEGORIES_SUCCESS';
export const GET_BROWSE_CATEGORIES_FAIL = 'GET_BROWSE_CATEGORIES_FAIL';

export const GET_BROWSE_CATEGORY_DETAILS_REQUEST = 'GET_BROWSE_CATEGORY_DETAILS_REQUEST';
export const GET_BROWSE_CATEGORY_DETAILS_SUCCESS = 'GET_BROWSE_CATEGORY_DETAILS_SUCCESS';
export const GET_BROWSE_CATEGORY_DETAILS_FAIL = 'GET_BROWSE_CATEGORY_DETAILS_FAIL';

export const SET_CURRENT_BROWSE_CATEGORY_REQUEST = 'SET_CURRENT_BROWSE_CATEGORY';
export const SET_CURRENT_BROWSE_CATEGORY_REQUEST_SUCCESS = 'SET_CURRENT_BROWSE_CATEGORY_REQUEST_SUCCESS';
export const SET_CURRENT_BROWSE_CATEGORY_REQUEST_FAIL = 'SET_CURRENT_BROWSE_CATEGORY_REQUEST_FAIL';

export const getAllCategoriesRequest = () => {
  return (dispatch) => {
    dispatch({
      type: GET_BROWSE_CATEGORIES_REQUEST
    });
    getAllCategories().then(response => {
      const { data } = response;
      dispatch(getAllCategoriesSuccess(data.categories.items));
    }).catch((err) =>
      dispatch(getAllCategoriesFail(err))
    );
  };
};

const getAllCategoriesSuccess = (payload: SpotifyApi.CategoryObject[]) => {
  return {
    type: GET_BROWSE_CATEGORIES_SUCCESS,
    payload
  };
};

const getAllCategoriesFail = (error) => {
  return {
    type: GET_BROWSE_CATEGORIES_FAIL,
    error
  };
};

export const getCategoryDetailsRequest = (categoryId: string) => {
  return (dispatch) => {
    dispatch({
      type: GET_BROWSE_CATEGORY_DETAILS_REQUEST
    });

    getPlayListByCategoryId(categoryId).then(response => {
        const { data } = response;
        dispatch(getCategoryDetailsSuccess({ data: data.playlists, categoryId }));
      }
    ).catch(err => {
      dispatch(getCategoryDetailsFail(err));
    });
  };
};

const getCategoryDetailsSuccess = (payload: { data: SpotifyApi.PagingObject<SpotifyApi.PlaylistObjectSimplified>, categoryId }) => {
  return {
    type: GET_BROWSE_CATEGORY_DETAILS_SUCCESS,
    payload
  };
};

const getCategoryDetailsFail = (error) => {
  return {
    type: GET_BROWSE_CATEGORY_DETAILS_FAIL,
    error
  };
};

export const setCurrentBrowseCategoryRequest = (category: SpotifyApi.CategoryObject | string) => {
  return (dispatch) => {
    dispatch({
      type: SET_CURRENT_BROWSE_CATEGORY_REQUEST
    });
    if (category && category instanceof Object) {
      dispatch(setCurrentBrowseCategorySuccess(category as SpotifyApi.CategoryObject));
    } else {
      getCategoryDetailsById(category as string).then(response => {
        const { data } = response;
        dispatch(setCurrentBrowseCategorySuccess(data));
      })
    }
  };
}

const setCurrentBrowseCategorySuccess = (payload: SpotifyApi.CategoryObject) => {
  return {
    type: SET_CURRENT_BROWSE_CATEGORY_REQUEST_SUCCESS,
    payload
  };
};
