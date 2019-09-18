import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import ErrorList from '../FormErrors';

const LoginForm = props => {
  const { handleSubmit, pristine, submitting, errors } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <div>
          <Field
            name="username"
            component="input"
            type="text"
            placeholder="username"
          />
        </div>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <div>
          <Field
            name="password"
            component="input"
            type="password"
            placeholder="password"
          />
        </div>
      </div>
      <ErrorList errors={errors} />
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Login
        </button>
      </div>
    </form>
  );
};

LoginForm.propTypes = {
  errors: PropTypes.object,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  handleSubmit: PropTypes.func,
};

export default LoginForm;
