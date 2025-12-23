import React from 'react';
import styles from './Home.module.css';
import Button from '../Button/Button';

const Home = () => {
  return (
    <section id="home" className={styles.home}>
      <div className={styles.content}>
        <h1>Ahmed Habila</h1>
        <h2>Junior React Developer</h2>
        <p className={styles.bio}>
          Passionate developer with a knack for building responsive and user-friendly web applications. 
          I love turning complex problems into simple, beautiful solutions.
        </p>
        <Button href="#projects" variant="primary" className={styles.ctaButton}>View My Work</Button>
      </div>
    </section>
  );
};

export default Home;
