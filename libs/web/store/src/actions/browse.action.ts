import { getAllCategories } from '../apis/browse.api';

export const GET_BROWSE_CATEGORIES_REQUEST = 'GET_BROWSE_CATEGORIES_REQUEST';
export const GET_BROWSE_CATEGORIES_SUCCESS = 'GET_BROWSE_CATEGORIES_SUCCESS';
export const GET_BROWSE_CATEGORIES_FAIL = 'GET_BROWSE_CATEGORIES_FAIL';


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
