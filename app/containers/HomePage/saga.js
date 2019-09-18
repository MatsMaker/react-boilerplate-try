import { put, call, takeLatest } from 'redux-saga/effects';
import { TASK_LIST_FETCH_REQUEST, SET_FILTER } from './constants';
import { createApi, checkStatus } from '../../utils/createApi';
import {
  fetchTaskListRequestAction,
  fetchTaskListFail,
  fetchTaskListSucceeded,
} from './actions';

function* fetchTaskList(action) {
  try {
    const response = yield call(createApi().get, '/', action.request);
    if (checkStatus(response)) {
      throw response.data;
    }
    const payload = response.data.message;
    yield put(fetchTaskListSucceeded(payload));
  } catch (error) {
    yield put(fetchTaskListFail(error));
  }
}

function* fetchTaskListRequest(action) {
  yield put(fetchTaskListRequestAction(action.filter));
}

function* saga() {
  yield takeLatest(SET_FILTER, fetchTaskListRequest);
  yield takeLatest(TASK_LIST_FETCH_REQUEST, fetchTaskList);
}

export default saga;
