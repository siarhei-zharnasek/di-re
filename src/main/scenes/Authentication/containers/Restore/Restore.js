import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {Restore} from '../../components';
import {authSuccess} from '../../services/actions';

class RestoreContainer extends PureComponent {
    handleSubmit = values =>
        Promise
            .resolve({authenticated: true})
            .then(this.props.authSuccess)

    render() {
        return (
            <Restore handleSubmit={this.handleSubmit}/>
        )
    }
}

RestoreContainer.propTypes = {
    authSuccess: PropTypes.func.isRequired
};

const mapStateToProps = () => ({});
const mapDispatchToProps = {
    authSuccess
};

export default connect(mapStateToProps, mapDispatchToProps)(RestoreContainer);
