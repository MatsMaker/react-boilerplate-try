import produce from 'immer';
import {
  TASK_CREATE_REQUEST,
  TASK_CREATE_FAIL,
  TASK_CREATE_SUCCEEDED,
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
      case TASK_CREATE_REQUEST:
        draft.result = undefined;
        draft.isCreating = true;
        break;
      case TASK_CREATE_FAIL:
        draft.isCreating = false;
        draft.errors = action.error.message;
        break;
      case TASK_CREATE_SUCCEEDED:
        draft.isCreating = false;
        draft.result = action.payload;
        draft.errors = undefined;
        break;
    }
  });

export default providerReducer;
