import {SubmissionError} from 'redux-form';

import Api from '../../../../../services/api';

export default values => {
    return Api
        .authCheckWithCreds(values)
        .then(response => {
            if (!response.authenticated) {
                throw new SubmissionError(response);
            } else {
                return response;
            }
        })
};
