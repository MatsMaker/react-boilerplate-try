import { reduxForm } from 'redux-form';
import TaskForm from 'components/TaskForm';

export default reduxForm({
  form: 'createTask',
})(TaskForm);
