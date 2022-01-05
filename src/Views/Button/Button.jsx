import React from 'react';
import './styles.css'

const Button = ({ onClick, isDisabled, className, children }) => {
    return (
        <button disabled={isDisabled} onClick={onClick} className={`button ${className ? className : ''}`}>
            {children}
        </button>
    );
};

export default Button;
