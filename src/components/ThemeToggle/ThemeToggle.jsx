import React, { useState, useEffect } from 'react';
import styles from './ThemeToggle.module.css';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className={styles.toggleContainer}>
      <input 
        type="checkbox" 
        className={styles.checkbox} 
        id="theme-checkbox" 
        checked={theme === 'dark'}
        onChange={toggleTheme}
        aria-label="Toggle Theme"
      />
      <label htmlFor="theme-checkbox" className={styles.label}>
        <FaSun className={styles.faSun} />
        <FaMoon className={styles.faMoon} />
        <div className={styles.ball} />
      </label>
    </div>
  );
};

export default ThemeToggle;
