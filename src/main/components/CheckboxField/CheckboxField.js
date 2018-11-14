import React, {PureComponent} from 'react';
import {Field} from 'redux-form';
import PropTypes from 'prop-types';

import {Checkbox} from '../';

class CheckboxField extends PureComponent {
    state = {checked: false}

    toggleState = () => this.setState(({checked}) => ({checked: !checked}))

    renderField = ({input, meta: {touched, error}}) => (
        <div>
            <Checkbox
                {...this.props}
                {...input}
                onClick={this.toggleState}
                checked={this.state.checked}
            />
            {
                touched && error ? (
                    <span style={{color: 'red'}}>{error}</span>
                ) : null
            }
        </div>
    )

    render() {
        return (
            <Field
                {...this.props}
                type="checkbox"
                component={this.renderField}
            />
        )
    }
}

CheckboxField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
};

export default CheckboxField;
