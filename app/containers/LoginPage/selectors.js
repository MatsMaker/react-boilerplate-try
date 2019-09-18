import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { KEY } from './constants';

const selectorAuth = state => state[KEY] || initialState;

const errorsSelector = () =>
  createSelector(
    selectorAuth,
    state => state.errors,
  );

const resultSelector = () =>
  createSelector(
    selectorAuth,
    state => state.result,
  );

export { selectorAuth, errorsSelector, resultSelector };
