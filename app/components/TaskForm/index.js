import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import ErrorList from '../FormErrors';

const TaskForm = props => {
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
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
      </div>
    </form>
  );
};

TaskForm.propTypes = {
  errors: PropTypes.object,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  handleSubmit: PropTypes.func,
};

export default TaskForm;
