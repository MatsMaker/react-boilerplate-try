import produce from 'immer';
import {
  INITIATED,
  TASK_LIST_FETCH_FAIL,
  TASK_LIST_FETCH_SUCCEEDED,
} from './constants';

export const initialState = {
  isInitiated: false,
  taskListRequest: {
    sort_field: 'id',
    sort_direction: 'sort_direction',
    page: 1,
  },
};

/* eslint-disable default-case, no-param-reassign */
const homeProviderReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case INITIATED:
        draft.isInitiated = true;
        break;
      case TASK_LIST_FETCH_FAIL:
        draft.tasksList = [];
        break;
      case TASK_LIST_FETCH_SUCCEEDED:
        draft.tasksList = action.payload;
        break;
    }
  });

export default homeProviderReducer;
