import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {InputField, CheckboxField, Button} from '../../../../components';
import './SignUpForm.less';

class SignUpForm extends PureComponent {
    render() {
        return (
            <form className="sign-up-form-wrapper">
                <div className="sign-up-form-wrapper__inline-section">
                    <InputField
                        name="firstName"
                        label="First name"
                        type="text"
                    />
                    <InputField
                        name="lastName"
                        label="Last name"
                        type="text"
                    />
                </div>
                <InputField
                    name="username"
                    label="Username"
                    type="text"
                />
                <InputField
                    name="email"
                    label="Email"
                    type="text"
                />
                <InputField
                    name="password"
                    label="Password"
                    type="password"
                />
                <InputField
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                />
                <CheckboxField
                    label="I agree with terms and conditions"
                    name="agree"
                />
                <div className="sign-up-form-wrapper__inline-section">
                    <Button
                        text={'Verify by BankID'}
                        onClick={this.props.handleSubmit}
                        type={'submit'}
                        fill
                    />
                    <Button
                        text={'Sign up'}
                        onClick={this.props.handleSubmit}
                        type={'submit'}
                        fill
                    />
                </div>
            </form>
        )
    }
}

SignUpForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

export default SignUpForm;
