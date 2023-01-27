import React from 'react';
import classes from './Button.module.css'

const Button = ({name, click}) => {
    return (
        <button onClick={click} className={classes.buttonClass}>
            {name}
        </button>
    );
};

export default Button;