import produce from 'immer';
import {
  TASK_LIST_FETCH_FAIL,
  TASK_LIST_FETCH_SUCCEEDED,
  TASK_LIST_FETCH_REQUEST,
  SET_FILTER,
} from './constants';

export const initialState = {
  taskListIsLoading: false,
  taskList: [],
  loadError: undefined,
  totalTaskCount: undefined,
  taskListRequest: {
    sort_field: 'id',
    sort_direction: 'asc',
    page: 0,
    developer: undefined,
  },
};

/* eslint-disable default-case, no-param-reassign */
const homeProviderReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_FILTER:
        draft.taskListRequest = action.filter;
        break;
      case TASK_LIST_FETCH_REQUEST:
        draft.taskListIsLoading = true;
        break;
      case TASK_LIST_FETCH_FAIL:
        draft.taskListIsLoading = false;
        draft.taskList = [];
        draft.loadError = action.payload.message;
        break;
      case TASK_LIST_FETCH_SUCCEEDED:
        draft.taskListIsLoading = false;
        draft.loadError = undefined;
        draft.taskList = action.payload.tasks;
        draft.totalTaskCount = action.payload.total_task_count;
        break;
    }
  });

export default homeProviderReducer;
