import React, { useState, useEffect } from 'react';
import styles from './ProjectCard.module.css';
import Button from '../Button/Button';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    let interval;
    if (project.images && project.images.length > 1) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [project.images]);

  const imageSrc = project.images ? project.images[currentImageIndex] : project.image;

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img 
          src={imageSrc} 
          alt={project.title} 
          className={styles.projectImage} 
        />
      </div>
      <div className={styles.cardContent}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className={styles.techStack}>
          {project.techStack.map((tech, index) => (
            <span key={index} className={styles.badge}>{tech}</span>
          ))}
        </div>
        <div className={styles.links}>
          <Button href={project.githubLink} variant="outlinePrimary" target="_blank" rel="noopener noreferrer">
            <FaGithub style={{ marginRight: '8px' }} /> GitHub
          </Button>
          {project.liveDemo && (
            <Button href={project.liveDemo} variant="outlinePrimary" target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt style={{ marginRight: '8px' }} /> Live Demo
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
