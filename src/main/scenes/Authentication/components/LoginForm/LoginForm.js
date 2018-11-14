import React, {PureComponent} from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';

import {InputField, CheckboxField, Button} from '../../../../components';
import './LoginForm.less';

class LoginForm extends PureComponent {
    render() {
        return (
            <form className="login-form-wrapper">
                <InputField
                    name="username"
                    label="Username"
                    type="text"
                />
                <InputField
                    name="password"
                    label="Password"
                    type="password"
                />
                <div className="login-form-wrapper__inline-section">
                    <CheckboxField
                        label="Remember me"
                        name="remember"
                    />
                    <NavLink
                        to={'/restore'}
                        className="login-form-wrapper__restore"
                    >
                        Forgot password
                    </NavLink>
                </div>
                <div className="login-form-wrapper__inline-section">
                    <Button
                        text={'Login'}
                        onClick={this.props.handleSubmit}
                        type={'submit'}
                        fill
                    />
                    <NavLink to={'/sign-up'}>
                        <Button text={'Sign up'}/>
                    </NavLink>
                </div>
            </form>
        )
    }
}

LoginForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

export default LoginForm;
