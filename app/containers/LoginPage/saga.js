import { put, call, takeLatest } from 'redux-saga/effects';
import qs from 'qs';
import { LOGIN_REQUEST, LOGIN_SUCCEEDED } from './constants';
import { createApi, checkStatus } from '../../utils/createApi';
import { loginSucceededAction, loginFailAction } from './actions';
import { AUTH_TOKEN_KEY } from '../App/constants';

function* createTask(action) {
  try {
    const { developer } = action.request; // TODO what is the "developer" props
    const response = yield call(
      createApi({
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }).post,
      `/login?developer=${developer}`,
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

function* saveToken(action) {
  yield call(
    {
      context: window.localStorage,
      fn: window.localStorage.setItem,
    },
    AUTH_TOKEN_KEY,
    action.token,
  );
}

function* saga() {
  yield takeLatest(LOGIN_REQUEST, createTask);
  yield takeLatest(LOGIN_SUCCEEDED, saveToken);
}

export default saga;
