import React from 'react';
import styles from './Home.module.css';
import Button from '../Button/Button';

const Home = () => {
  return (
    <section id="home" className={styles.home}>
      <div className={styles.content}>
        <h1>Hi, I'm Ahmed Habila</h1>
        <h2>a junior full-stack developer</h2>
        <p className={styles.bio}>
          I turn ideas into thoughtful, 
          scalable digital experiences. I focus on building reliable, 
           well-structured applications by combining clean architecture, 
           purposeful design, and attention to detail. I am constantly learning, 
           improving my craft, and seeking opportunities to create solutions that are practical, 
           maintainable, and meaningful for users.
        </p>
        <Button href="#projects" variant="primary" className={styles.ctaButton}>View My Work</Button>
      </div>
    </section>
  );
};

export default Home;
