import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {BankId} from '../../components';
import {authSuccess} from '../../services/actions';

class BankIdContainer extends PureComponent {
    handleSubmit = values =>
        Promise.resolve({authenticated: true})
            .then(this.props.authSuccess)

    render() {
        return (
            <BankId handleSubmit={this.handleSubmit}/>
        )
    }
}

BankIdContainer.propTypes = {
    authSuccess: PropTypes.func.isRequired
};

const mapStateToProps = () => ({});
const mapDispatchToProps = {
    authSuccess
};

export default connect(mapStateToProps, mapDispatchToProps)(BankIdContainer);
