import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { KEY } from './constants';

const selectHome = state => state[KEY] || initialState;

const makeSelectHomeState = () =>
  createSelector(
    selectHome,
    homeState => homeState,
  );

export { selectHome, makeSelectHomeState };
