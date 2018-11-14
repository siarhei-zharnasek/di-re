import {reduxForm} from 'redux-form';

import {RestoreForm} from '../../components';
import {validate} from './helper';

export default reduxForm({
    form: 'RestoreForm',
    validate
})(RestoreForm);
