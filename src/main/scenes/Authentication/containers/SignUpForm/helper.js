const emptyValidation = word => `${word} cannot be empty.`;

const validate = ({firstName, lastName, username, email, password, confirmPassword, agree}) => {
    let errors = {};

    if (!firstName) {
        errors.firstName = emptyValidation('First name');
    }

    if (!lastName) {
        errors.lastName = emptyValidation('Last name');
    }

    if (!username) {
        errors.username = emptyValidation('Username');
    } else if (username.length < 3) {
        errors.username = 'Too short';
    }

    if (!email) {
        errors.email = emptyValidation('Email');
    }

    if (!password) {
        errors.password = emptyValidation('Password');
    }

    if (!confirmPassword) {
        errors.confirmPassword = 'You have to repeat your password.';
    }

    if (password !== confirmPassword) {
        errors.password = 'Password from both fields doesn\'t match.';
        errors.confirmPassword = 'Password from both fields doesn\'t match.';
    }

    if (!agree) {
        errors.agree = 'You forgot to leave tick here.';
    }

    return errors;
};

export {
    validate
};
