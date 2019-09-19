import { put, call, takeLatest } from 'redux-saga/effects';
import qs from 'qs';
import { UPDATE_TASK_REQUEST } from './constants';
import { createApi, checkStatus } from '../../utils/createApi';
import { updateTaskFailAction, updateTaskSucceededAction } from './actions';

function* updateTask(action) {
  try {
    const taskId = action.request.id;
    const response = yield call(
      createApi({
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }).post,
      `/edit/${taskId}?developer=${process.env.DEVELOPER}`,
      qs.stringify(action.request, { encode: true }),
    );
    // TODO read api must have 401 code response for not auth and call auto logout
    if (checkStatus(response)) {
      throw response.data;
    }
    const payload = response.data; // TODO why server not sent message response?
    yield put(updateTaskSucceededAction(payload));
  } catch (error) {
    yield put(updateTaskFailAction(error));
  }
}

function* saga() {
  yield takeLatest(UPDATE_TASK_REQUEST, updateTask);
}

export default saga;
