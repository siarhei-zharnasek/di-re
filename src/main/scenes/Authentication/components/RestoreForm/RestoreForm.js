import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {InputField, Button} from '../../../../components';
import './RestoreForm.less';

class RestoreForm extends PureComponent {
    render() {
        return (
            <form className="restore-form-wrapper">
                <InputField
                    name="email"
                    label="Email"
                    type="text"
                />
                <Button
                    text={'Send request'}
                    onClick={this.props.handleSubmit}
                    type={'submit'}
                    fill
                />
            </form>
        )
    }
}

RestoreForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

export default RestoreForm;
