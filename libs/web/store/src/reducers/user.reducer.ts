import { GET_ME_REQUEST_SUCCESS } from '../actions/user.action';

interface UserReducer {
  userName: string;
  userAvatar: string;
}

const INIT_STATE: UserReducer = {
  userName: '',
  userAvatar: 'https://scontent-xsp1-2.xx.fbcdn.net/v/t1.6435-0/cp0/c20.0.80.80a/p110x80/104183198_2684957788428309_6477951481849921505_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=70495d&_nc_ohc=SSw0jW5DQDwAX-hbm5h&_nc_ht=scontent-xsp1-2.xx&tp=27&oh=9c58773e701a3f8a03b53f871f72b152&oe=60D1CDD0'
};

export default function userReducer(state = INIT_STATE, action: { type: string, payload: any }): UserReducer {
  const { type, payload } = action;
  switch (type) {
    case GET_ME_REQUEST_SUCCESS:
      return {
        ...state,
        userName: payload.display_name,
        userAvatar: payload.images?.length > 0 ? payload.images[0]?.url : INIT_STATE.userAvatar
      };
    default:
      return state;
  }
}
