import React from 'react';
import styles from './style.module.scss';

const Button = ({ variant, justIcon, rounded, size, style, leftIcon, rightIcon, children }) => {
    return (
        <button
            className={`${styles.button} ${styles[variant]} ${justIcon && styles.justIcon} ${styles[size]}`}
            style={{
                borderRadius: rounded ? 20 : 0,
                ...style
            }}
        >
            {leftIcon && leftIcon}
            <div style={{ marginLeft: leftIcon ? 8 : 0, marginRight: rightIcon ? 8 : 0 }}>
                {justIcon || children}
            </div>
            {rightIcon && rightIcon}
        </button>
    );
}

export default Button;