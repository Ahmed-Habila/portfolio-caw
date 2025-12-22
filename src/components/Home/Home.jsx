import React from 'react';
import styles from './Home.module.css';

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
        <a href="#projects" className={styles.ctaButton}>View My Work</a>
      </div>
    </section>
  );
};

export default Home;
