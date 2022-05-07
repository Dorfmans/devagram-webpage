const validateName = (name) => {
    return name?.toString().length > 2;
};

const validateEmail = (email) => {
    const emailStr = email.toString();
    return emailStr.length > 5 && emailStr.includes('@') && emailStr.includes('.');
};

const validatePassword = (password) => {
    return password?.toString().length >= 8;
};

const validateConfirmPassword = (password, confirmPassword) => {
    return validatePassword(password) && password === confirmPassword;
};

export {validateName,
        validateEmail,
        validatePassword,
        validateConfirmPassword}