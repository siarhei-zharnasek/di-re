import React, {PureComponent} from 'react';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';

import {store, history} from './store';
import {Main} from './main/containers';
import './App.less';

class App extends PureComponent {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Main/>
                </ConnectedRouter>
            </Provider>
        );
    }
}

export default App;
