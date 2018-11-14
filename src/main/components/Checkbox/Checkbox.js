import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import './Checkbox.less';

class Checkbox extends PureComponent {
    render() {
        const {checked, label} = this.props;
        const checkboxClassName =
            checked ?
                'checkbox-wrapper checkbox-wrapper--checked'
                : 'checkbox-wrapper';
        
        return (
            <label className={checkboxClassName}>
                <input
                    type="checkbox"
                    className="checkbox-wrapper__input"
                    {...this.props}
                />
                <span className="checkbox-wrapper__label">{label}</span>
            </label>
        )
    }
}

Checkbox.propTypes = {
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string,
    label: PropTypes.string
};

export default Checkbox;
