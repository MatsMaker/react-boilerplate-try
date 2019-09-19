import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field } from 'redux-form';
import ErrorList from '../FormErrors';

const Form = props => {
  const {
    isReset,
    handleSubmit,
    pristine,
    submitting,
    load,
    errors,
    reset,
    initialValues,
    className,
  } = props;

  if (initialValues && load) {
    load(initialValues);
  }

  if (isReset) {
    reset();
  }

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
        <label htmlFor="email">Email</label>
        <div>
          <Field
            name="email"
            component="input"
            type="email"
            placeholder="Email"
          />
        </div>
      </div>
      <div>
        <label htmlFor="text">Text</label>
        <div>
          <Field name="text" component="textarea" />
        </div>
      </div>
      <ErrorList errors={errors} />
      <div className="controller">
        <button type="submit" disabled={pristine || submitting}>
          Submit
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
  reset: PropTypes.func,
  isReset: PropTypes.bool,
  initialValues: PropTypes.object,
  load: PropTypes.func,
  className: PropTypes.string,
};

const TaskForm = styled(Form)`
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

export default TaskForm;
