import { auth, googleAuthProvider, facebookAuthProvider } from '../utils/Firebase';
import * as types from './ActionTypes';

//Todo: Action Registers
const registerStart = () => ({
  type: types.REGISTER_START,
});

const registerSuccess = (user) => ({
  type: types.REGISTER_SUCCESS,
  payload: user,
});

const registerFail = (error) => ({
  type: types.REGISTER_FAIL,
  payload: error,
});

// Todo: Action Login
const loginStart = () => ({
  type: types.LOGIN_START,
});
const loginSuccess = (user) => ({
  type: types.LOGIN_SUCCESS,
  payload: user,
});
const loginFail = (error) => ({
  type: types.LOGIN_FAIL,
  payload: error,
});

// Todo: Action Logout
const logoutStart = () => ({
  type: types.LOGOUT_START,
});
const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
});
const logoutFail = (error) => ({
  type: types.LOGOUT_FAIL,
  payload: error,
});

// Todo: Action Set User
export const setUser = (user) => ({
  type: types.SET_USER,
  payload: user,
});

// Todo: Action Login Google
const googleStart = () => ({
  type: types.LOGIN_GOOGLE_START,
});
const googleSuccess = (user) => ({
  type: types.LOGIN_GOOGLE_SUCCESS,
  payload: user,
});
const googleFail = (error) => ({
  type: types.LOGIN_GOOGLE_FAIL,
  payload: error,
});

// Todo: Action Login Facebook
const facebookStart = () => ({
  type: types.LOGIN_FB_START,
});
const facebookSuccess = (user) => ({
  type: types.LOGIN_FB_SUCCESS,
  payload: user,
});
const facebookFail = (error) => ({
  type: types.LOGIN_FB_FAIL,
  payload: error,
});

// Todo: Logic Register
export const registerInitial = (displayName, email, password) => {
  return function (dispatch) {
    dispatch(registerStart());
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        user.updateProfile({
          displayName,
        });
        dispatch(registerSuccess(user));
      })
      .catch((error) => dispatch(registerFail(error.message)));
  };
};

// Todo: Logic Login
export const loginInitial = (email, password) => {
  return function (dispatch) {
    dispatch(loginStart());
    auth
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(loginSuccess(user));
      })
      .catch((error) => dispatch(loginFail(error.message)));
  };
};

// Todo: Logic Logout
export const logoutInitial = () => {
  return function (dispatch) {
    dispatch(logoutStart());
    auth
      .signOut()
      .then((user) => {
        dispatch(logoutSuccess(user));
      })
      .catch((error) => dispatch(logoutFail(error.message)));
  };
};

// Todo: Logic Login Google
export const loginGoogleInitial = () => {
  return function (dispatch) {
    dispatch(googleStart());
    auth
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(googleSuccess(user));
      })
      .catch((error) => dispatch(googleFail(error.message)));
  };
};

// Todo: Logic Facebook
export const loginFacebookInitial = () => {
  return function (dispatch) {
    dispatch(facebookStart());
    auth
      .signInWithPopup(facebookAuthProvider.addScope('user_birthday,email'))
      .then(({ user }) => {
        dispatch(facebookSuccess(user));
      })
      .catch((error) => dispatch(facebookFail(error.message)));
  };
};
