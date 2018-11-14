import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {LoginForm} from '../../containers';
import './Login.less';

class Login extends PureComponent {
    render() {
        return (
            <div className="login">
                <p>Welcome back! Please login to your account.</p>
                <LoginForm onSubmit={this.props.handleSubmit}/>
            </div>
        )
    }
}

Login.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

export default Login;
