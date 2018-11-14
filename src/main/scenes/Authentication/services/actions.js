export const ACTION_TYPES = {
    AUTH: {
        REQUESTED: 'AUTH_REQUESTED',
        SUCCEEDED: 'AUTH_SUCCEEDED',
    }
};

export const authRequest = () => ({
    type: ACTION_TYPES.AUTH.REQUESTED
});

export const authSuccess = payload => ({
    type: ACTION_TYPES.AUTH.SUCCEEDED,
    payload
});
