import { LOGIN_REQUEST, LOGIN_FAIL, LOGIN_SUCCEEDED } from './constants';

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
