import {
  TASK_LIST_FETCH_REQUEST,
  TASK_LIST_FETCH_SUCCEEDED,
  TASK_LIST_FETCH_FAIL,
  SET_FILTER,
} from './constants';

export const setFilterAction = filter => ({
  type: SET_FILTER,
  filter,
});

export const fetchTaskListRequestAction = request => ({
  type: TASK_LIST_FETCH_REQUEST,
  request,
});

export const fetchTaskListFail = payload => ({
  type: TASK_LIST_FETCH_FAIL,
  payload,
});

export const fetchTaskListSucceeded = payload => ({
  type: TASK_LIST_FETCH_SUCCEEDED,
  payload,
});
