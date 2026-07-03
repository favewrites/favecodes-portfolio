import React from 'react';
import { FaCode, FaServer, FaPalette, FaUsers } from 'react-icons/fa';
import { SectionHeading, SkillCard } from '../UI';
import { skillCategories } from '../../data/skills';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Skills.css';

const categoryIcons = {
  frontend: FaCode,
  backend: FaServer,
  design: FaPalette,
  soft: FaUsers,
};

const Skills = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="skills" className="section" ref={ref}>
      <div className="container">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="The tools and technologies I use to bring ideas to life."
        />
        <div className={`skills-content ${isVisible ? 'visible' : ''}`}>
          {skillCategories.map((category, catIndex) => {
            const CategoryIcon = categoryIcons[category.id];
            return (
              <div
                key={category.id}
                className="skill-category"
                style={{ animationDelay: `${catIndex * 0.15}s` }}
              >
                <div className="skill-category-header">
                  <CategoryIcon className="category-icon" />
                  <h3>{category.title}</h3>
                </div>
                <div className="skill-list">
                  {category.skills.map((skill) => (
                    <SkillCard key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
