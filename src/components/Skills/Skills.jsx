import React from 'react';
import styles from './Skills.module.css';

const skillsData = {
  Languages: ["JavaScript (ES6+)", "HTML5", "CSS3"],
  Frameworks: ["React", "Node.js"],
  Tools: ["Vite", "Git", "Jest", "VS Code"]
};

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <h2>Skills & Technologies</h2>
      <div className={styles.container}>
        {Object.entries(skillsData).map(([category, items]) => (
          <div key={category} className={styles.category}>
            <h3>{category}</h3>
            <ul className={styles.list}>
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
