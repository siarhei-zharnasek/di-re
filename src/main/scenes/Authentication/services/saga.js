import {takeEvery, put, call} from 'redux-saga/effects';

import Api from '../../../../services/api';
import {ACTION_TYPES, authSuccess} from './actions';

export function* authSaga() {
    yield takeEvery(ACTION_TYPES.AUTH.REQUESTED, function* () {
        const authState = yield call(Api.authCheckOnLoad);

        yield put(authSuccess(authState));
    });
}
