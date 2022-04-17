const Button = ({
    type='button',
    text,
    color='primary',
    disabled= false,
    handleClick
}) => {   

    return (
        <button 
            type={type}
            className={`btn ${color}`}
            disabled={disabled}
            onClick={handleClick}>
            {text}</button>
    );
};

export default Button;