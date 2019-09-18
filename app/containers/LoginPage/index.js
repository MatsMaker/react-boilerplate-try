import React, { memo } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Wrapper from '../TaskListItem/Wrapper';
import LoginForm from './LoginForm';
import { useInjectReducer } from '../../utils/injectReducer';
import { useInjectSaga } from '../../utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import { KEY } from './constants';
import { loginRequestAction } from './actions';
import { errorsSelector, resultSelector } from './selectors';
import NavigationBar from '../../components/NavigationBar';

const key = KEY;

function CreateTaskPage({ onLogin, errors, result }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  if (result) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <NavigationBar />
      <Wrapper>
        <LoginForm onSubmit={onLogin} errors={errors} />
      </Wrapper>
    </>
  );
}

CreateTaskPage.propTypes = {
  errors: PropTypes.object,
  result: PropTypes.object,
  onLogin: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  errors: errorsSelector(),
  result: resultSelector(),
});

const mapDispatchToProps = dispatch => ({
  onLogin: payload => dispatch(loginRequestAction(payload)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(CreateTaskPage);
