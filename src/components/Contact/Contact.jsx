import React from 'react';
import styles from './Contact.module.css';
import Button from '../Button/Button';
import FormInput from '../FormInput/FormInput';

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
          <FormInput 
            label="Name" 
            id="name" 
            name="name" 
            required 
          />
          <FormInput 
            label="Email" 
            id="email" 
            name="email" 
            type="email" 
            required 
          />
          <FormInput 
            label="Message" 
            id="message" 
            name="message" 
            textarea 
            rows="5" 
            required 
          />
          <Button type="submit" variant="primary" fullWidth className={styles.submitButton}>Send Message</Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
