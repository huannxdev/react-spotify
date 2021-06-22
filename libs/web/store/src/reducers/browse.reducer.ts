import { GET_BROWSE_CATEGORIES_SUCCESS } from '../actions/browse.action';

interface BrowseReducer {
  categories: SpotifyApi.CategoryObject[]
}

const INIT_STATE: BrowseReducer = {
  categories: []
};

export default function browseReducer(state = INIT_STATE, action: { type: string, payload: any }): BrowseReducer {
  const { type, payload } = action;
  switch (type) {
    case GET_BROWSE_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: payload
      }
    default:
      return state;
  }
}
