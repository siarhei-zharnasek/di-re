import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {BankIdUpload} from '../../components';
import {authSuccess} from '../../services/actions';

class BankIdUploadContainer extends PureComponent {
    handleSubmit = values =>
        Promise.resolve({authenticated: true})
            .then(this.props.authSuccess)

    render() {
        return (
            <BankIdUpload handleSubmit={this.handleSubmit}/>
        )
    }
}

BankIdUploadContainer.propTypes = {
    authSuccess: PropTypes.func.isRequired
};

const mapStateToProps = () => ({});
const mapDispatchToProps = {
    authSuccess
};

export default connect(mapStateToProps, mapDispatchToProps)(BankIdUploadContainer);
