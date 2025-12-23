import React from 'react';
import styles from './Button.module.css';

const Button = ({ 
  children, 
  onClick, 
  type = 'button', 
  variant = 'primary', 
  className = '', 
  fullWidth = false,
  href,
  ...props 
}) => {
  const buttonClass = `
    ${styles.button} 
    ${styles[variant] || ''} 
    ${fullWidth ? styles.fullWidth : ''} 
    ${className}
  `.trim();

  if (href) {
    return (
      <a href={href} className={buttonClass} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button 
      type={type} 
      className={buttonClass} 
      onClick={onClick} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
