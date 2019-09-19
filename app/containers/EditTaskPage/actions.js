import {
  UPDATE_TASK_REQUEST,
  UPDATE_TASK_FAIL,
  UPDATE_TASK_SUCCEEDED,
  RESET,
} from './constants';

export const updateTaskRequestAction = request => ({
  type: UPDATE_TASK_REQUEST,
  request,
});

export const updateTaskFailAction = error => ({
  type: UPDATE_TASK_FAIL,
  error,
});

export const updateTaskSucceededAction = payload => ({
  type: UPDATE_TASK_SUCCEEDED,
  payload,
});

export const resetAction = () => ({
  type: RESET,
});
