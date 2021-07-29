import {
  GET_BROWSE_CATEGORIES_SUCCESS,
  GET_BROWSE_CATEGORY_DETAILS_SUCCESS,
  SET_CURRENT_BROWSE_CATEGORY_REQUEST_SUCCESS
} from '../actions/browse.action';

interface BrowseReducer {
  categories: SpotifyApi.CategoryObject[];
  playlist: { [key: string]: SpotifyApi.PagingObject<SpotifyApi.PlaylistObjectSimplified> },
  selectedCategory: SpotifyApi.CategoryObject;
}

const INIT_STATE: BrowseReducer = {
  categories: [],
  playlist: {},
  selectedCategory: null,
};

export default function browseReducer(state = INIT_STATE, action: { type: string, payload: any }): BrowseReducer {
  const { type, payload } = action;
  switch (type) {
    case GET_BROWSE_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: payload
      };
    case GET_BROWSE_CATEGORY_DETAILS_SUCCESS:
      const listMap = {...state.playlist};
      listMap[payload.categoryId] = payload.data;
      return {
        ...state,
        playlist: listMap
      };
    case SET_CURRENT_BROWSE_CATEGORY_REQUEST_SUCCESS:
      return {
        ...state,
        selectedCategory: payload
      }
    default:
      return state;
  }
}
