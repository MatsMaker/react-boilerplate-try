import produce from 'immer';
import {
  UPDATE_TASK_REQUEST,
  UPDATE_TASK_FAIL,
  UPDATE_TASK_SUCCEEDED,
  RESET,
} from './constants';

export const initialState = {
  isCreating: false,
  result: undefined,
  errors: undefined,
};

/* eslint-disable default-case, no-param-reassign */
const providerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case UPDATE_TASK_REQUEST:
        draft.result = undefined;
        draft.isCreating = true;
        break;
      case UPDATE_TASK_FAIL:
        draft.isCreating = false;
        draft.errors = action.error.message;
        break;
      case UPDATE_TASK_SUCCEEDED:
        draft.isCreating = false;
        draft.result = action.payload;
        draft.errors = undefined;
        break;
      case RESET:
        draft.isCreating = false;
        draft.result = undefined;
        draft.errors = undefined;
        break;
    }
  });

export default providerReducer;
