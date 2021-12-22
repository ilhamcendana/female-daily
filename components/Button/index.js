import React from 'react';
import styles from './style.module.scss';

const Button = (props) => {
    const { variant, justicon, rounded, size, style, lefticon, righticon, children, isDisabled } = props;
    return (
        <button
            className={`${styles.button} ${styles[variant]} ${justicon && styles.justicon} ${styles[size]} ${isDisabled && styles.disabled}`}
            style={{
                borderRadius: rounded ? 20 : 0,
                ...style
            }}
            disabled={isDisabled}
            {...props}
        >
            {lefticon && lefticon}
            <div style={{ marginLeft: lefticon ? 8 : 0, marginRight: righticon ? 8 : 0 }}>
                {justicon || children}
            </div>
            {righticon && righticon}
        </button>
    );
}

export default Button;