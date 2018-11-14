import {reduxForm} from 'redux-form';

import {SignUpForm} from '../../components';
import {validate} from './helper';

export default reduxForm({
    form: 'SignUpForm',
    validate
})(SignUpForm);
