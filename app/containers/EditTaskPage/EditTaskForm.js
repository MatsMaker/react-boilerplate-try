import { reduxForm } from 'redux-form';
import TaskForm from 'components/TaskForm';
import { FORM_ID } from './constants';

const withReduxForm = reduxForm({
  form: FORM_ID,
})(TaskForm);

export default withReduxForm;
