import React, {PureComponent} from 'react';
import {NavLink} from 'react-router-dom';

import './SignInLink.less';

class SignInLink extends PureComponent {
    render() {
        return (
            <NavLink
                to={'/login'}
                className="sign-in-link"
            >
                Already have an account? Sign in.
            </NavLink>
        )
    }
}

export default SignInLink;
