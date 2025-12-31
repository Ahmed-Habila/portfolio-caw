import React from 'react';
import styles from './Projects.module.css';
import ProjectCard from '../ProjectCard/ProjectCard';
import TypingTitle from '../TypingTitle/TypingTitle';
import lab7 from '../../assets/lab7.png';
import lab5exo1 from '../../assets/lab5exo1.png';
import lab5exo2 from '../../assets/lab5exo2.png';
import lab5exo3 from '../../assets/lab5exo3.png';
import lab5exo4 from '../../assets/lab5exo4.png';
import lab1exo1 from '../../assets/lab1exo1.png';
import lab1exo2 from '../../assets/lab1exo2.png';
import lab1exo3 from '../../assets/lab1exo3.png';
import lab1exo4 from '../../assets/lab1exo4.png';
import lab3 from '../../assets/lab3.png';
import lab4 from '../../assets/lab4.png';

const projectsData = [
  {
    id: 1,
    title: "Lab 1: HTML & CSS Basics",
    description: "A collection of fundamental HTML and CSS exercises covering structure, multimedia, and styling.",
    images: [lab1exo1, lab1exo2, lab1exo3, lab1exo4],
    techStack: ["HTML", "CSS"],
    githubLink: "https://github.com/Ahmed-Habila/caw-labs/tree/main/Lab1",
    liveDemo: "Lab1/index.html"
  },
  {
    id: 2,
    title: "Lab 3: Node.js Basics",
    description: "Introduction to Node.js, file system operations, and modules.",
    image: lab3,
    techStack: ["Node.js", "JavaScript"],
    githubLink: "https://github.com/Ahmed-Habila/caw-labs/tree/main/Lab3"
  },
  {
    id: 3,
    title: "Lab 4: Unit Testing with Jest",
    description: "Unit testing JavaScript functions using Jest framework.",
    image: lab4,
    techStack: ["Jest", "Node.js", "Testing"],
    githubLink: "https://github.com/Ahmed-Habila/caw-labs/tree/main/Lab4_Jest"
  },
  {
    id: 4,
    title: "Lab 5: React Components",
    description: "A project demonstrating the use of React components to build a user interface.",
    images: [lab5exo1, lab5exo2, lab5exo3, lab5exo4],
    techStack: ["React", "Vite", "CSS"],
    githubLink: "https://github.com/Ahmed-Habila/caw-labs/tree/main/lab5",
    liveDemo: "lab5/index.html"
  },
  {
    id: 5,
    title: "Lab 7: Kanban Board",
    description: "A task management app",
    image: lab7,
    techStack: ["React", "Vite", "CSS", "Jest"],
    githubLink: "https://github.com/Ahmed-Habila/caw-labs/tree/main/lab7",
    liveDemo: "lab7/index.html"
  }
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <TypingTitle text="Project Showcase" />
      <div className={styles.gridContainer}>
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
