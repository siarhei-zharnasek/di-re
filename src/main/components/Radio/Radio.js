import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import './Radio.less';

class Radio extends PureComponent {
    render() {
        const {label, value, checked, onChange} = this.props;

        const radioClassName =
            checked ?
                'radio-wrapper radio-wrapper--checked'
                : 'radio-wrapper';
        
        return (
            <label className={radioClassName}>
                <input
                    type="radio"
                    className="radio-wrapper__input"
                    onClick={this.toggleState}
                    value={value}
                    checked={checked}
                    onChange={onChange}
                />
                <span className="radio-wrapper__label">{label}</span>
            </label>
        )
    }
}

Radio.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Radio;
