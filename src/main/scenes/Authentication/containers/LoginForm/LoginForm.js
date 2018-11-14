import {reduxForm} from 'redux-form';

import {LoginForm} from '../../components';
import {validate} from './helper';

export default reduxForm({
    form: 'LoginForm',
    validate
})(LoginForm);
