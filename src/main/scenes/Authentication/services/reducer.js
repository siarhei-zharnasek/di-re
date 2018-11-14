import {ACTION_TYPES} from './actions';

const defaultState = {
    authenticated: false
};

export default (state = defaultState, {type, payload}) => {
    switch (type) {
        case ACTION_TYPES.AUTH.SUCCEEDED: {
            return {
                ...payload
            }
        }

        default: {
            return state;
        }
    }
}
