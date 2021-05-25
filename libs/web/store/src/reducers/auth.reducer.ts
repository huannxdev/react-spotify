import { AUTH_SUCCESS } from '../actions/auth.action';

interface AuthReducer {
  isLogined: boolean
}

const INIT_STATE: AuthReducer = {
  isLogined: !!localStorage.getItem('acessToken')
};

export default function authReducer(state = INIT_STATE, action: { type: string, payload: any }) {
  const { type, payload } = action;
  switch (type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
}
