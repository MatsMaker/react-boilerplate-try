import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import Wrapper from '../TaskListItem/Wrapper';
import EditTaskForm from './EditTaskForm';
import { useInjectReducer } from '../../utils/injectReducer';
import { useInjectSaga } from '../../utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import { KEY } from './constants';
import { updateTaskRequestAction, resetAction } from './actions';
import { makeSelectCreateTaskPageState, selectTaskList } from './selectors';
import NavigationBar from '../../components/NavigationBar';
import H2 from '../../components/H2';
import ResultList from '../../components/FormResults';
import { resultSelector } from '../App/selectors';
import WrapFormBase from '../../components/WrapForm';

const key = KEY;

function EditTaskPage({ state, updateTask, match, tasks, auth, reset }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const getCurrentTask = () => {
    // TODO mo better do it by server api for restore scene by url
    const taskId = Number(match.params.id);
    return tasks.find(t => t.id === taskId);
  };

  const [task] = useState(getCurrentTask());

  const onSubmit = value => {
    updateTask({
      token: auth.token, // TODO mo better set token in header use Authorization pattern
      ...value,
    });
  };

  if (state.result) {
    setTimeout(() => {
      reset();
    }, 3000);
  }

  if (!task || !auth.token) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <NavigationBar />
      <WrapFormBase className="edit-form">
        <div>
          <H2>Edit task: {match.params.id}</H2>
          <Wrapper>
            <EditTaskForm
              className="edit-task-form"
              onSubmit={onSubmit}
              errors={state.errors}
              initialValues={task}
              isReset={!!state.result}
            />
          </Wrapper>
          <ResultList result={state.result} />
        </div>
      </WrapFormBase>
    </>
  );
}

EditTaskPage.propTypes = {
  tasks: PropTypes.array,
  auth: PropTypes.object,
  match: PropTypes.object,
  state: PropTypes.object,
  updateTask: PropTypes.func,
  reset: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  state: makeSelectCreateTaskPageState(),
  tasks: selectTaskList(),
  auth: resultSelector(),
});

const mapDispatchToProps = dispatch => ({
  updateTask: payload => dispatch(updateTaskRequestAction(payload)),
  reset: () => dispatch(resetAction()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(EditTaskPage);
