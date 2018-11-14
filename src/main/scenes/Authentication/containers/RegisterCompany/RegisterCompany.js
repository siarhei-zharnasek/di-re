import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {RegisterCompany} from '../../components';
import {authSuccess} from '../../services/actions';

class RegisterCompanyContainer extends PureComponent {
    handleSubmit = values =>
        Promise.resolve({authenticated: true})
            .then(this.props.authSuccess)

    render() {
        return (
            <RegisterCompany handleSubmit={this.handleSubmit}/>
        )
    }
}

RegisterCompanyContainer.propTypes = {
    authSuccess: PropTypes.func.isRequired
};

const mapStateToProps = () => ({});
const mapDispatchToProps = {
    authSuccess
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterCompanyContainer);
