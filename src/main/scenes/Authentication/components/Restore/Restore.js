import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {RestoreForm} from '../../containers';
import './Restore.less';

class Restore extends PureComponent {
    render() {
        return (
            <div className="restore-wrapper">
                <p>Enter your email and we send you a password reset link.</p>
                <RestoreForm onSubmit={this.props.handleSubmit}/>
            </div>
        )
    }
}

Restore.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

export default Restore;
