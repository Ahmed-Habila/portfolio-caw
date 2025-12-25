import React, { useState, useEffect } from 'react';
import styles from './Sidebar.module.css';
import Button from '../Button/Button';
import { FaHome, FaProjectDiagram, FaCode, FaEnvelope, FaGithub, FaLinkedin, FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
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

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button 
        className={styles.mobileToggle} 
        onClick={toggleSidebar}
        aria-label="Toggle navigation"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <div className={styles.profile}>
          <div className={styles.imageContainer}>
          <img src="src/assets/pfp.jpg" alt="Ahmed Habila" className={styles.profileImage} />
        </div>
      </div>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <a href="#home" className={styles.navLink} onClick={() => setIsOpen(false)}>
              <FaHome className={styles.icon} /> Home
            </a>
          </li>
          <li>
            <a href="#projects" className={styles.navLink} onClick={() => setIsOpen(false)}>
              <FaProjectDiagram className={styles.icon} /> Projects
            </a>
          </li>
          <li>
            <a href="#skills" className={styles.navLink} onClick={() => setIsOpen(false)}>
              <FaCode className={styles.icon} /> Skills
            </a>
          </li>
          <li>
            <a href="#contact" className={styles.navLink} onClick={() => setIsOpen(false)}>
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
          <a href="https://github.com/Ahmed-Habila" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/ahmed-habila-1b7495300/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="mailto:ahmed.habila@univ-constantine2.dz" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </aside>
    </>
  );
};

export default Sidebar;
