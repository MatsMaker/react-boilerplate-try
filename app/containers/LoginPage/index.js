import React, { memo } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import LoginForm from './LoginForm';
import { loginRequestAction } from '../App/actions';
import { errorsSelector, resultSelector } from '../App/selectors';
import NavigationBar from '../../components/NavigationBar';
import WrapFormBase from '../../components/WrapForm';
import H2 from '../../components/H2';

function LoginPage({ onLogin, errors, result }) {
  if (result) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <NavigationBar />
      <WrapFormBase className="create-form">
        <H2>Login</H2>
        <LoginForm onSubmit={onLogin} errors={errors} />
      </WrapFormBase>
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
