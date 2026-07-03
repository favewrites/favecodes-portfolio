import React from 'react';
import './SkillCard.css';

const SkillCard = ({ skill, icon: Icon }) => {
  return (
    <div className="skill-card">
      {Icon && <Icon className="skill-icon" />}
      <span className="skill-name">{skill.name}</span>
    </div>
  );
};

export default SkillCard;
