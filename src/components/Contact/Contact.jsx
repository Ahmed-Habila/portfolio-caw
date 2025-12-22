import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Contact Me</h2>
      <div className={styles.container}>
        <div className={styles.info}>
          <p>Feel free to reach out for collaborations or just a friendly hello!</p>
          <div className={styles.details}>
            <p><strong>Email:</strong> ahmed@example.com</p>
            <p><strong>LinkedIn:</strong> <a href="#">linkedin.com/in/ahmed</a></p>
            <p><strong>GitHub:</strong> <a href="#">github.com/ahmed</a></p>
          </div>
        </div>
        
        <form className={styles.form} action="https://formspree.io/f/your-form-id" method="POST">
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
