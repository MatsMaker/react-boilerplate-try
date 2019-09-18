import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCEEDED,
  LOGIN_INIT,
  LOGOUT,
} from './constants';

export const loginRequestAction = request => ({
  type: LOGIN_REQUEST,
  request,
});

export const loginFailAction = error => ({
  type: LOGIN_FAIL,
  error,
});

export const loginSucceededAction = payload => ({
  type: LOGIN_SUCCEEDED,
  payload,
});

export const setToLocalStore = () => ({
  context: window.localStorage,
  fn: window.localStorage.setItem,
});

export const getFormLocalStore = () => ({
  context: window.localStorage,
  fn: window.localStorage.getItem,
});

export const loginInitAction = () => ({
  type: LOGIN_INIT,
});

export const logoutAction = () => ({
  type: LOGOUT,
});
