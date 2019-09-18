import { createSelector } from 'reselect';
import { AUTH_KEY } from './constants';
import { initialState } from './authReducer';

const selectRouter = state => state.router;

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

const selectorAuth = state => state[AUTH_KEY] || initialState;

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

export { makeSelectLocation };
