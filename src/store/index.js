import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import {reducer as formReducer} from 'redux-form';

import {AuthSaga, AuthReducer} from '../main/scenes/Authentication';
import {MainReducer} from '../main';

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const createRootReducer = history => combineReducers({
    router: connectRouter(history),
    auth: AuthReducer,
    form: formReducer,
    main: MainReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    createRootReducer(history), // root reducer with router state
    {},
    compose(
        composeEnhancers(
            applyMiddleware(
                routerMiddleware(history), // for dispatching history actions
                sagaMiddleware
            )
        )
    )
);

Object.values(AuthSaga).forEach(saga => sagaMiddleware.run(saga));

export {
    history,
    store
};
