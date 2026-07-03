import React, { useState } from 'react';
import { SectionHeading, ProjectCard } from '../UI';
import { projects, categories } from '../../data/projects';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Portfolio.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [ref, isVisible] = useScrollAnimation();

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="section section-alt" ref={ref}>
      <div className="container">
        <SectionHeading
          title="Selected Projects"
          subtitle="A collection of my recent work across different technologies and industries."
        />

        <div className="portfolio-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className={`portfolio-grid ${isVisible ? 'visible' : ''}`}>
          {filteredProjects.map((project, index) => (
            <div
              key={`${project.id}-${index}`}
              className="portfolio-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
