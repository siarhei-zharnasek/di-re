import React, {PureComponent} from 'react';
import {Field} from 'redux-form';
import PropTypes from 'prop-types';

import './InputField.less';

class InputField extends PureComponent {
    state = {inFocus: false}

    toggleFocus = () => this.setState(({inFocus}) => ({inFocus: !inFocus}))

    renderField = ({input, type, label, meta: {touched, error}}) => {
        const spanClassName =
            this.state.inFocus || input.value ?
                'field-wrapper__text field-wrapper__text--focused'
                : 'field-wrapper__text';

        return (
            <div className="field-wrapper">
                <span className={spanClassName}>{label}</span>
                <input
                    {...input}
                    type={type}
                    className="field-wrapper__input"
                />
                {
                    touched && error ? (
                        <span style={{color: 'red'}}>{error}</span>
                    ) : null
                }
            </div>
        )
    }

    render() {
        return (
            <Field
                {...this.props}
                component={this.renderField}
                onBlur={this.toggleFocus}
                onFocus={this.toggleFocus}
            />
        )
    }
}

InputField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};

export default InputField;
