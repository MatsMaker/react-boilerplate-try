import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Wrapper from '../TaskListItem/Wrapper';
import CreateTaskForm from './CreateTaskForm';
import { useInjectReducer } from '../../utils/injectReducer';
import { useInjectSaga } from '../../utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import { KEY } from './constants';
import { createTaskRequestAction } from './actions';
import { makeSelectCreateTaskPageState } from './selectors';
import NavigationBar from '../../components/NavigationBar';

const key = KEY;

function CreateTaskPage({ state, createTask }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const showResult = value => {
    createTask(value);
  };

  return (
    <>
      <NavigationBar />
      <Wrapper>
        {state.result && <div>{String(state.result)}</div>}
        <CreateTaskForm onSubmit={showResult} errors={state.errors} />
      </Wrapper>
    </>
  );
}

CreateTaskPage.propTypes = {
  state: PropTypes.object,
  createTask: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  state: makeSelectCreateTaskPageState(),
});

const mapDispatchToProps = dispatch => ({
  createTask: payload => dispatch(createTaskRequestAction(payload)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(CreateTaskPage);
