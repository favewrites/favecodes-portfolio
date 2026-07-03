import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="project-card">
      <div className="project-browser-frame">
        <div className="browser-header">
          <div className="browser-dots">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>
          <div className="browser-address">{project.live}</div>
        </div>
        <div className="project-preview">
          {!imageError ? (
            <iframe
              src={project.live}
              title={project.title}
              loading="lazy"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="preview-fallback">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                onError={() => setImageError(true)}
              />
              <p>Live preview unavailable. Open Live Demo to explore.</p>
            </div>
          )}
        </div>
      </div>

      <div className="project-info">
        <div className="project-header">
          <h3>{project.title}</h3>
          <span className="project-year">{project.year}</span>
        </div>
        <p className="project-description">{project.description}</p>
        <div className="project-tech">
          {project.tech.map((tech) => (
            <span key={tech} className="badge">{tech}</span>
          ))}
        </div>
        <div className="project-actions">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-small btn-secondary">
            <FaGithub /> GitHub
          </a>
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-small btn-primary">
            <FaExternalLinkAlt /> Live Demo
          </a>
        </div>
        {project.backend && <span className="backend-badge">Backend</span>}
      </div>
    </div>
  );
};

export default ProjectCard;
