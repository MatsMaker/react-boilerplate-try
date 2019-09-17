import {
  INITIATED,
  TASK_LIST_FETCH_REQUEST,
  TASK_LIST_FETCH_SUCCEEDED,
  TASK_LIST_FETCH_FAIL,
} from './constants';

export const initiateAction = payload => ({
  type: INITIATED,
  payload,
});

export const fetchTaskListRequest = payload => ({
  type: TASK_LIST_FETCH_REQUEST,
  payload,
});

export const fetchTaskListFail = payload => ({
  type: TASK_LIST_FETCH_FAIL,
  payload,
});

export const fetchTaskListSucceeded = payload => ({
  type: TASK_LIST_FETCH_SUCCEEDED,
  payload,
});
