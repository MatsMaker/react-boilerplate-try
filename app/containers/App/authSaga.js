import { put, call, takeLatest } from 'redux-saga/effects';
import qs from 'qs';
import { createApi, checkStatus } from '../../utils/createApi';
import {
  loginSucceededAction,
  loginFailAction,
  setToLocalStore,
  getFormLocalStore,
} from './actions';
import {
  AUTH_TOKEN_KEY,
  LOGIN_REQUEST,
  LOGIN_SUCCEEDED,
  LOGIN_INIT,
  LOGOUT,
} from './constants';

function* createTask(action) {
  try {
    const response = yield call(
      createApi({
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }).post,
      `/login?developer=${process.env.DEVELOPER}`,
      qs.stringify(action.request, { encode: true }),
    );
    if (checkStatus(response)) {
      throw response.data;
    }
    const payload = response.data.message;
    yield put(loginSucceededAction(payload));
  } catch (error) {
    yield put(loginFailAction(error));
  }
}

function* saveAuth(action) {
  yield call(setToLocalStore(), AUTH_TOKEN_KEY, action.payload.token);
}

function* initAuth() {
  const token = yield call(getFormLocalStore(), AUTH_TOKEN_KEY);
  if (token) {
    yield put(loginSucceededAction({ token }));
  }
}

function* logout() {
  yield call(setToLocalStore(), AUTH_TOKEN_KEY, null);
}

function* saga() {
  yield takeLatest(LOGIN_INIT, initAuth);
  yield takeLatest(LOGIN_REQUEST, createTask);
  yield takeLatest(LOGIN_SUCCEEDED, saveAuth);
  yield takeLatest(LOGOUT, logout);
}

export default saga;
