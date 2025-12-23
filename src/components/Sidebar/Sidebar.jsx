import React, { useState, useEffect } from 'react';
import styles from './Sidebar.module.css';
import Button from '../Button/Button';
import { FaHome, FaProjectDiagram, FaCode, FaEnvelope, FaGithub, FaLinkedin, FaMoon, FaSun } from 'react-icons/fa';

const Sidebar = () => {
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
    <aside className={styles.sidebar}>
      <div className={styles.profile}>
        <div className={styles.imageContainer}>
          <div className={styles.placeholderImage}>Photo</div>
        </div>
      </div>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <a href="#home" className={styles.navLink}>
              <FaHome className={styles.icon} /> Home
            </a>
          </li>
          <li>
            <a href="#projects" className={styles.navLink}>
              <FaProjectDiagram className={styles.icon} /> Projects
            </a>
          </li>
          <li>
            <a href="#skills" className={styles.navLink}>
              <FaCode className={styles.icon} /> Skills
            </a>
          </li>
          <li>
            <a href="#contact" className={styles.navLink}>
              <FaEnvelope className={styles.icon} /> Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className={styles.footer}>
        <Button onClick={toggleTheme} variant="outline" fullWidth className={styles.themeToggle} aria-label="Toggle Theme">
          {theme === 'light' ? <FaMoon /> : <FaSun />}
          <span className={styles.themeText}>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
        </Button>
        
        <div className={styles.socials}>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="mailto:ahmed@example.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
