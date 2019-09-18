import React, { memo } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Wrapper from '../TaskListItem/Wrapper';
import LoginForm from './LoginForm';
import { loginRequestAction } from '../App/actions';
import { errorsSelector, resultSelector } from '../App/selectors';
import NavigationBar from '../../components/NavigationBar';

function LoginPage({ onLogin, errors, result }) {
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

LoginPage.propTypes = {
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
)(LoginPage);
