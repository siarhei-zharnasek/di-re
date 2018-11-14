import React, {PureComponent} from 'react';
import {withRouter, NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';

import {SignInLink} from '../';
import {Radio, Button} from '../../../../components';
import './RegisterCompany.less';

class RegisterCompany extends PureComponent {
    state = {
        addMore: false,
        registerCompany: 'No'
    }

    onChange = ({currentTarget: {value}} = {}) => this.setState({registerCompany: value})

    onSubmit = e => {
        const {history} = this.props;
        e.preventDefault();

        if (this.state.registerCompany === 'No') {
            history.push('/register-company/upload');
        } else {
            history.push('/register-company/confirm');
        }
    }

    componentReload = () => this.setState({
        addMore: true,
        registerCompany: 'No'
    })

    render() {
        const {registerCompany, addMore} = this.state;

        return (
            <div className="register-company-wrapper">
                {
                    addMore ? (
                        <p>Do you want to add another company?</p>
                    ) : (
                        <p>Do you want to register your company?</p>
                    )
                }
                <form
                    className="register-company-wrapper__form"
                    onSubmit={this.onSubmit}
                >
                    {
                        ['No', 'Yes'].map(el => (
                            <Radio
                                key={el}
                                label={el}
                                value={el}
                                checked={registerCompany === el}
                                onChange={this.onChange}
                            />
                        ))
                    }
                    {
                        registerCompany === 'Yes' ? (
                            <>
                                <input type="text"/>
                                <Button
                                    onClick={this.componentReload}
                                    text="Next"
                                    type="submit"
                                    fill
                                />
                            </>
                        ) : (
                            <NavLink to={'/'}>
                                <Button
                                    text="Next"
                                    type="submit"
                                    fill
                                />
                            </NavLink>
                        )
                    }
                </form>
                <SignInLink/>
            </div>
        )
    }
}

RegisterCompany.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

export default withRouter(RegisterCompany);
