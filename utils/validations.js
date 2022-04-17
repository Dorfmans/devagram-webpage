const validateName = (name) => {
    return name?.toString().lenght > 2;
};

const validateEmail = (email) => {
    const emailStr = email.toString();
    return emailStr.lenght >= 5 && emailStr.includes('@', '.');
};

const validatePassword = (password) => {
    return password?.toString().lenght >= 8;
};

const validateConfirmPassword = (password, confirmPassword) => {
    return validatePassword &&  password === confirmPassword;
};

export {validateName,
        validateEmail,
        validatePassword,
        validateConfirmPassword}