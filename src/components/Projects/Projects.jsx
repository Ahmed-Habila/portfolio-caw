import React from 'react';
import styles from './Projects.module.css';
import ProjectCard from '../ProjectCard/ProjectCard';
import lab7Img from '../../assets/lab7.png';
import lab5exo1 from '../../assets/lab5exo1.png';
import lab5exo2 from '../../assets/lab5exo2.png';
import lab5exo3 from '../../assets/lab5exo3.png';
import lab5exo4 from '../../assets/lab5exo4.png';

const projectsData = [
  {
    id: 1,
    title: "Lab 7: Kanban Board",
    description: "A task management app",
    image: lab7Img,
    techStack: ["React", "Vite", "CSS", "Jest"],
    githubLink: "https://github.com/Ahmed-Habila/caw-labs/tree/main/lab7",
    liveDemo: "/lab7/index.html"
  },
  {
    id: 2,
    title: "Lab 5: React Components",
    description: "A project demonstrating the use of React components to build a user interface.",
    images: [lab5exo1, lab5exo2, lab5exo3, lab5exo4],
    techStack: ["React", "Vite", "CSS"],
    githubLink: "https://github.com/Ahmed-Habila/caw-labs/tree/main/lab5",
    liveDemo: "/lab5/index.html"
  },
  {
    id: 3,
    title: "Lab 1: To-Do List",
    description: "A simple to-do list with add, delete, and mark as complete features.",
    image: "https://placehold.co/600x400",
    techStack: ["React", "State Management"],
    githubLink: "#",
    liveDemo: "#"
  },
  {
    id: 4,
    title: "Lab 1: To-Do List",
    description: "A simple to-do list with add, delete, and mark as complete features.",
    image: "https://placehold.co/600x400",
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
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
