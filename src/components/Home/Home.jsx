import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';
import Button from '../Button/Button';

const Home = () => {
  const [h1Text, setH1Text] = useState('');
  const [h2Text, setH2Text] = useState('');
  const [phase, setPhase] = useState('h1');

  const fullH1 = "Hi, I'm Ahmed Habila";
  const fullH2 = "a junior full-stack developer";

  useEffect(() => {
    if (phase !== 'h1') return;

    let index = 0;
    const interval = setInterval(() => {
      setH1Text(fullH1.slice(0, index));
      index++;
      if (index > fullH1.length) {
        clearInterval(interval);
        setPhase('h2');
      }
    }, 100); 

    return () => clearInterval(interval);
  }, [phase]);

  useEffect(() => {
    if (phase !== 'h2') return;

    let index = 0;
    const interval = setInterval(() => {
      setH2Text(fullH2.slice(0, index));
      index++;
      if (index > fullH2.length) {
        clearInterval(interval);
        setPhase('done');
      }
    }, 50); 

    return () => clearInterval(interval);
  }, [phase]);

  return (
    <section id="home" className={styles.home}>
      <div className={styles.content}>
        <h1>
          {h1Text}
          {phase === 'h1' && <span className={styles.cursor}>|</span>}
        </h1>
        <h2>
          {h2Text}
          {phase === 'h2' && <span className={styles.cursor}>|</span>}
        </h2>
        <div className={`${styles.bioContainer} ${phase === 'done' ? styles.visible : ''}`}>
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
      </div>
    </section>
  );
};


export default Home;
