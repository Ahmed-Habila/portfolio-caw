import React from 'react';
import styles from './Skills.module.css';
import { FaJs, FaHtml5, FaCss3Alt, FaPython, FaJava, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiNextdotjs, SiPostman, SiJest } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const skillsData = {
  Languages: [
    { name: "JavaScript", icon: <FaJs /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "Python", icon: <FaPython /> },
    { name: "Java", icon: <FaJava /> }
  ],
  Frameworks: [
    { name: "React", icon: <FaReact /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "Next.js", icon: <SiNextdotjs /> }
  ],
  Tools: [
    { name: "Postman", icon: <SiPostman /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Jest", icon: <SiJest /> },
    { name: "VS Code", icon: <VscVscode /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Node.js", icon: <FaNodeJs /> }
  ]
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
                <li key={index}>
                  <span className={styles.icon}>{item.icon}</span>
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
