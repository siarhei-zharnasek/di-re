import React, {PureComponent} from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

import {SignInLink} from '../../../components';
import {Radio, Button} from '../../../../../components';
import './BankId.less';

class BankId extends PureComponent {
    state = {
        haveBankId: 'No'
    }

    onChange = ({currentTarget: {value}} = {}) => this.setState({haveBankId: value})

    onSubmit = e => {
        const {history} = this.props;
        e.preventDefault();

        if (this.state.haveBankId === 'No') {
            history.push('/bank-id/upload');
        } else {
            history.push('/bank-id/confirm');
        }
    }

    render() {
        return (
            <div className="bank-id-wrapper">
                <p>Do you have a personal BankID?</p>
                <form
                    className="bank-id-wrapper__form"
                    onSubmit={this.onSubmit}
                >
                    {
                        ['No', 'Yes'].map(el => (
                            <Radio
                                key={el}
                                label={el}
                                value={el}
                                checked={this.state.haveBankId === el}
                                onChange={this.onChange}
                            />
                        ))
                    }
                    <Button
                        onClick={this.onSubmit}
                        text="Next"
                        type="submit"
                        fill
                    />
                </form>
                <SignInLink/>
            </div>
        )
    }
}

BankId.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

export default withRouter(BankId);
