import React from 'react';
import './SectionHeading.css';

const SectionHeading = ({ title, subtitle, light = false }) => {
  return (
    <div className={`section-heading ${light ? 'light' : ''}`}>
      <h2>{title}</h2>
      {subtitle && <p className="subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
