import { put, takeLatest } from 'redux-saga/effects';
import {
  TASK_LIST_FETCH_REQUEST,
  TASK_LIST_FETCH_FAIL,
  TASK_LIST_FETCH_SUCCEEDED,
} from './constants';
import { createApi } from '../../utils/createApi';

function* fetchTaskList(action) {
  try {
    const data = yield createApi.get('/', action.payload);
    yield put({ type: TASK_LIST_FETCH_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: TASK_LIST_FETCH_FAIL, error });
  }
}

function* saga() {
  yield takeLatest(TASK_LIST_FETCH_REQUEST, fetchTaskList);
}

export default saga;
