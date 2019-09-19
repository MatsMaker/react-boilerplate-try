import {
  TASK_CREATE_REQUEST,
  TASK_CREATE_FAIL,
  TASK_CREATE_SUCCEEDED,
  RESET,
} from './constants';

export const createTaskRequestAction = request => ({
  type: TASK_CREATE_REQUEST,
  request,
});

export const createTaskFailAction = error => ({
  type: TASK_CREATE_FAIL,
  error,
});

export const creteTaskSucceededAction = payload => ({
  type: TASK_CREATE_SUCCEEDED,
  payload,
});

export const resetAction = () => ({
  type: RESET,
});
