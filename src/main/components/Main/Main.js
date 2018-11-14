import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {Authentication} from '../../scenes/Authentication/containers';
import './Main.less';

class Main extends PureComponent {
    render() {
        return (
            <div className="main">
                <Authentication/>
            </div>
        );
    }
}

Main.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default Main;
