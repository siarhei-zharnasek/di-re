import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

import {Authentication} from '../../components';
import {authRequest} from '../../services/actions';

const mapStateToProps = ({auth: {authenticated}} = {}) => ({
    authenticated
});

const mapDispatchToProps = {
    authRequest
};

class AuthRedirect extends PureComponent {
    componentDidMount() {
        this.props.authRequest();
    }

    render() {
        return this.props.authenticated ? <div>you are logged in</div> : <Authentication/>;
    }
}

AuthRedirect.propTypes = {
    authenticated: PropTypes.bool.isRequired,
    authRequest: PropTypes.func.isRequired
};

const connectedAuthRedirect = connect(mapStateToProps, mapDispatchToProps)(AuthRedirect);

export default withRouter(connectedAuthRedirect);
