import React, { useState, useEffect, useRef } from 'react';
import styles from './TypingTitle.module.css';

const TypingTitle = ({ text, as: Tag = 'h2', className = '' }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [started, setStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index));
      index++;
      if (index > text.length) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [started, text]);

  return (
    <Tag ref={elementRef} className={className}>
      {displayedText}
      <span className={styles.cursor}>|</span>
    </Tag>
  );
};

export default TypingTitle;
