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
import { createTaskRequestAction, resetAction } from './actions';
import { makeSelectCreateTaskPageState } from './selectors';
import NavigationBar from '../../components/NavigationBar';
import H2 from '../../components/H2';
import WrapForm from '../../components/WrapForm';
import H3 from '../../components/H3';

const key = KEY;

function CreateTaskPage({ state, createTask, reset }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const showResult = value => {
    createTask(value);
  };

  if (state.result) {
    setTimeout(() => {
      reset();
    }, 3000);
  }

  return (
    <>
      <NavigationBar />
      <WrapForm className="create-form">
        <H2>Create new task</H2>
        <Wrapper>
          <CreateTaskForm
            onSubmit={showResult}
            errors={state.errors}
            isReset={!!state.result}
          />
        </Wrapper>
        {state.result && <H3>Created: {state.result.id}</H3>}
      </WrapForm>
    </>
  );
}

CreateTaskPage.propTypes = {
  state: PropTypes.object,
  createTask: PropTypes.func,
  reset: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  state: makeSelectCreateTaskPageState(),
});

const mapDispatchToProps = dispatch => ({
  createTask: payload => dispatch(createTaskRequestAction(payload)),
  reset: () => dispatch(resetAction()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(CreateTaskPage);
