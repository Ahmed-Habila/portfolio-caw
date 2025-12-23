import React, { useState } from 'react';
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
  const [selectedProject, setSelectedProject] = useState(projectsData[0]);

  return (
    <section id="projects" className={styles.projects}>
      <h2>Project Showcase</h2>
      <div className={styles.container}>
        <div className={styles.projectList}>
          {projectsData.map((project) => (
            <div 
              key={project.id} 
              className={`${styles.projectListItem} ${selectedProject.id === project.id ? styles.active : ''}`}
              onMouseEnter={() => setSelectedProject(project)}
            >
              <h3>{project.title}</h3>
            </div>
          ))}
        </div>
        
        <div className={styles.projectDisplay}>
          <div key={selectedProject.id} className={styles.card}>
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.description}</p>
            <div className={styles.techStack}>
              {selectedProject.techStack.map((tech, index) => (
                <span key={index} className={styles.badge}>{tech}</span>
              ))}
            </div>
            <div className={styles.links}>
              <Button href={selectedProject.githubLink} variant="outlinePrimary" target="_blank" rel="noopener noreferrer">GitHub</Button>
              {selectedProject.liveDemo && <Button href={selectedProject.liveDemo} variant="outlinePrimary" target="_blank" rel="noopener noreferrer">Live Demo</Button>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
