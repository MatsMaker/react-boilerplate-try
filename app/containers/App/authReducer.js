import produce from 'immer';
import { LOGIN_REQUEST, LOGIN_FAIL, LOGIN_SUCCEEDED } from './constants';

export const initialState = {
  isProcessing: false,
  result: undefined,
  errors: undefined,
};

/* eslint-disable default-case, no-param-reassign */
const providerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOGIN_REQUEST:
        draft.result = undefined;
        draft.isProcessing = true;
        break;
      case LOGIN_FAIL:
        draft.isProcessing = false;
        draft.errors = action.error.message;
        break;
      case LOGIN_SUCCEEDED:
        draft.isProcessing = false;
        draft.result = action.payload;
        draft.errors = undefined;
        break;
    }
  });

export default providerReducer;
