import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { KEY } from './constants';

const selectCreateTaskPage = state => state[KEY] || initialState;

const makeSelectCreateTaskPageState = () =>
  createSelector(
    selectCreateTaskPage,
    state => state,
  );

export { selectCreateTaskPage, makeSelectCreateTaskPageState };
