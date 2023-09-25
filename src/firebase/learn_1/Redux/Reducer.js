import * as types from './ActionTypes';

const innitalstate = {
  loading: false,
  current: null,
  error: null,
};

const userReducer = (state = innitalstate, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.REGISTER_START:
    case types.LOGIN_START:
    case types.LOGOUT_START:
    case types.LOGIN_GOOGLE_START:
    case types.LOGIN_FB_START:
      return {
        ...state,
        loading: true,
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        current: null,
      };
    case types.REGISTER_SUCCESS:
    case types.LOGIN_SUCCESS:
    case types.LOGIN_GOOGLE_SUCCESS:
    case types.LOGIN_FB_SUCCESS:
      return {
        ...state,
        loading: false,
        current: payload,
      };
    case types.REGISTER_FAIL:
    case types.LOGIN_FAIL:
    case types.LOGOUT_FAIL:
    case types.LOGIN_GOOGLE_FAIL:
    case types.LOGIN_FB_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case types.SET_USER:
      return {
        ...state,
        loading: false,
        current: payload,
      };
    default:
      return state;
  }
};
export default userReducer;
