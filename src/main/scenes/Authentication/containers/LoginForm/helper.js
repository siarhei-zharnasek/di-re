const emptyValidation = word => `${word} cannot be empty.`;

const validate = ({username, password}) => {
    let errors = {};

    if (!username) {
        errors.username = emptyValidation('Username');
    } else if (username.length < 3) {
        errors.username = 'Too short';
    }

    if (!password) {
        errors.password = emptyValidation('Password');
    }

    return errors;
};

export {
    validate
};
