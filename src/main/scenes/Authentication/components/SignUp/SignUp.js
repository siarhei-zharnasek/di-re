import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {SignUpForm} from '../../containers';
import {SignInLink} from '../../components';
import './SignUp.less';

class SignUp extends PureComponent {
    render() {
        return (
            <div className="sign-up-wrapper">
                <p>Please complete to create your account.</p>
                <SignUpForm onSubmit={this.props.handleSubmit}/>
                <SignInLink/>
            </div>
        )
    }
}

SignUp.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

export default SignUp;
