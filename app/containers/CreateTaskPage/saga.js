import { put, call, takeLatest } from 'redux-saga/effects';
import qs from 'qs';
import { TASK_CREATE_REQUEST } from './constants';
import { createApi, checkStatus } from '../../utils/createApi';
import { createTaskFailAction, creteTaskSucceededAction } from './actions';

function* createTask(action) {
  try {
    const { developer } = action.request;
    const response = yield call(
      createApi({
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }).post,
      `/create?developer=${developer}`,
      qs.stringify(action.request, { encode: true }),
    );
    if (checkStatus(response)) {
      throw response.data;
    }
    const payload = response.data.message;
    yield put(creteTaskSucceededAction(payload));
  } catch (error) {
    yield put(createTaskFailAction(error));
  }
}

function* saga() {
  yield takeLatest(TASK_CREATE_REQUEST, createTask);
}

export default saga;
