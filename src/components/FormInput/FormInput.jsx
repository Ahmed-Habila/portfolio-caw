import React from 'react';
import styles from './FormInput.module.css';

const FormInput = ({ label, id, type = 'text', textarea = false, ...props }) => {
  return (
    <div className={styles.formGroup}>
      <label htmlFor={id}>{label}</label>
      {textarea ? (
        <textarea id={id} className={styles.input} {...props} />
      ) : (
        <input type={type} id={id} className={styles.input} {...props} />
      )}
    </div>
  );
};

export default FormInput;
