import { reduxForm } from 'redux-form';
import LoginForm from 'components/LoginForm';

export default reduxForm({
  form: 'loginForm',
})(LoginForm);
