import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import './Button.less';

class Button extends PureComponent {
    render() {
        const {text, onClick, fill, type} = this.props;
        const btnClass = fill ? 'button-wrapper button-wrapper--filled' : 'button-wrapper';

        return (
            <button
                className={btnClass}
                onClick={onClick}
                type={type}
            >
                {text}
            </button>
        )
    }
}

Button.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string.isRequired,
    type: PropTypes.string,
    fill: PropTypes.bool
};

export default Button;
