const validate = ({email}) => {
    let errors = {};

    if (!email) {
        errors.email = 'Email cannot be empty.';
    }

    return errors;
};

export {
    validate
};
