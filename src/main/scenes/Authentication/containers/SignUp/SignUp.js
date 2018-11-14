import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {SignUp} from '../../components';
import {authSuccess} from '../../services/actions';

class SignUpContainer extends PureComponent {
    handleSubmit = values =>
        Promise.resolve({authenticated: true})
            .then(this.props.authSuccess)

    render() {
        return (
            <SignUp handleSubmit={this.handleSubmit}/>
        )
    }
}

SignUpContainer.propTypes = {
    authSuccess: PropTypes.func.isRequired
};

const mapStateToProps = () => ({});
const mapDispatchToProps = {
    authSuccess
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
