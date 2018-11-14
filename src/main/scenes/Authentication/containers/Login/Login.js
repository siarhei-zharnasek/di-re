import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {Login} from '../../components';
import serverSideValidator from './serverSideValidator';
import {authSuccess} from '../../services/actions';

class LoginContainer extends PureComponent {
    handleSubmit = values =>
        serverSideValidator(values)
            .then(this.props.authSuccess)

    render() {
        return (
            <Login handleSubmit={this.handleSubmit}/>
        )
    }
}

LoginContainer.propTypes = {
    authSuccess: PropTypes.func.isRequired
};

const mapStateToProps = () => ({});
const mapDispatchToProps = {
    authSuccess
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
