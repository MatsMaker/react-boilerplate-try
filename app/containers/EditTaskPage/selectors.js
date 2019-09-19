import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { KEY } from './constants';
import { selectHome } from '../HomePage/selectors';

const selectCreateTaskPage = state => state[KEY] || initialState;

const makeSelectCreateTaskPageState = () =>
  createSelector(
    selectCreateTaskPage,
    state => state,
  );

const selectTaskList = () =>
  createSelector(
    selectHome,
    homeState => homeState.taskList,
  );

export { selectCreateTaskPage, makeSelectCreateTaskPageState, selectTaskList };
