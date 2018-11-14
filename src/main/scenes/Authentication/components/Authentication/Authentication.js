import React, {PureComponent} from 'react';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';

import {Login, SignUp, Restore, BankId, BankIdUpload, RegisterCompany} from '../../containers';
import './Authentication.less';

class Authentication extends PureComponent {
    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-wrapper__gradient-pic"/>
                <div className="auth-wrapper__content">
                    <div>
                        <h1 className="auth-wrapper__title">DIGITAL REVISOR</h1>
                        <Switch>
                            <Route
                                exact
                                path="/login"
                                component={Login}
                            />
                            <Route
                                exact
                                path="/sign-up"
                                component={SignUp}
                            />
                            <Route
                                exact
                                path="/restore"
                                component={Restore}
                            />
                            <Route
                                exact
                                path="/bank-id"
                                component={BankId}
                            />
                            <Route
                                exact
                                path="/bank-id/upload"
                                component={BankIdUpload}
                            />
                            <Route
                                exact
                                path="/register-company"
                                component={RegisterCompany}
                            />
                            <Redirect to={'/login'}/>
                        </Switch>
                    </div>
                    <p className="auth-wrapper__bottom-helper">Term of use. Privacy policy</p>
                </div>
            </div>
        );
    }
}

export default withRouter(Authentication);
