import React from 'react';
import styles from './Projects.module.css';
import Button from '../Button/Button';

const projectsData = [
  {
    id: 1,
    title: "Lab 7: Kanban Board",
    description: "A drag-and-drop Kanban board to manage tasks efficiently.",
    techStack: ["React", "Vite", "CSS Modules"],
    githubLink: "#",
    liveDemo: "#"
  },
  {
    id: 2,
    title: "Lab 6: Weather App",
    description: "Fetches real-time weather data using a public API.",
    techStack: ["React", "Fetch API", "CSS"],
    githubLink: "#",
    liveDemo: "#"
  },
  {
    id: 3,
    title: "Lab 5: To-Do List",
    description: "A simple to-do list with add, delete, and mark as complete features.",
    techStack: ["React", "State Management"],
    githubLink: "#",
    liveDemo: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <h2>Project Showcase</h2>
      <div className={styles.gridContainer}>
        {projectsData.map((project) => (
          <div key={project.id} className={styles.card}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className={styles.techStack}>
              {project.techStack.map((tech, index) => (
                <span key={index} className={styles.badge}>{tech}</span>
              ))}
            </div>
            <div className={styles.links}>
              <Button href={project.githubLink} variant="outlinePrimary" target="_blank" rel="noopener noreferrer">GitHub</Button>
              {project.liveDemo && <Button href={project.liveDemo} variant="outlinePrimary" target="_blank" rel="noopener noreferrer">Live Demo</Button>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
