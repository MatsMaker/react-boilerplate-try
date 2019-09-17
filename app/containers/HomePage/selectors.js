import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectIsInitiated = () =>
  createSelector(
    selectHome,
    homeState => homeState.isInitiated,
  );

export { selectHome, makeSelectIsInitiated };
