import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import styled from 'styled-components';
import ErrorList from '../FormErrors';

const Form = props => {
  const { className, handleSubmit, pristine, submitting, errors } = props;
  return (
    <form className={className} onSubmit={handleSubmit}>
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
      <div className="controller">
        <button type="submit" disabled={pristine || submitting}>
          Login
        </button>
      </div>
    </form>
  );
};

Form.propTypes = {
  errors: PropTypes.object,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  handleSubmit: PropTypes.func,
  className: PropTypes.string,
};

const LoginForm = styled(Form)`
  width: 250px;

  label {
    margin: 15px 0 5px 0;
    display: inline-block;
  }
  input,
  textarea {
    padding: 5px;
  }
  .controller {
    margin-top: 15px;
  }
`;

export default LoginForm;
