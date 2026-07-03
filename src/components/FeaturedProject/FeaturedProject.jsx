import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SectionHeading, BrowserFrame } from '../UI';
import { getFeaturedProject } from '../../data/projects';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './FeaturedProject.css';

const FeaturedProject = () => {
  const project = getFeaturedProject();
  const [ref, isVisible] = useScrollAnimation();
  const [iframeError, setIframeError] = useState(false);

  if (!project) return null;

  return (
    <section id="featured-project" className="section" ref={ref}>
      <div className="container">
        <SectionHeading
          title="Featured Project"
          subtitle="A closer look at one of my recent works."
        />
        <div className={`featured-project ${isVisible ? 'visible' : ''}`}>
          <BrowserFrame url={project.live}>
            {!iframeError ? (
              <iframe
                src={project.live}
                title={project.title}
                className="featured-iframe"
                onError={() => setIframeError(true)}
                loading="lazy"
              />
            ) : (
              <div className="featured-fallback">
                <img src={project.image} alt={`${project.title} preview`} />
                <p>Live preview unavailable. Open Live Demo to explore.</p>
              </div>
            )}
          </BrowserFrame>

          <div className="featured-info">
            <div className="featured-header">
              <h3>{project.title}</h3>
              <span className="featured-category">{project.category}</span>
            </div>
            <p className="featured-description">{project.description}</p>
            <div className="featured-tech">
              {project.tech.map((tech) => (
                <span key={tech} className="badge">{tech}</span>
              ))}
            </div>
            <div className="featured-actions">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <FaGithub /> View Code
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
