import React from 'react';
import './TimelineStep.css';

const TimelineStep = ({ step, icon: Icon, isLast }) => {
  return (
    <div className="timeline-step">
      <div className="timeline-marker">
        <div className="timeline-number">{step.number}</div>
        {!isLast && <div className="timeline-line" />}
      </div>
      <div className="timeline-content">
        <div className="timeline-icon-wrapper">
          {Icon && <Icon />}
        </div>
        <h3 className="timeline-title">{step.title}</h3>
        <p className="timeline-description">{step.description}</p>
      </div>
    </div>
  );
};

export default TimelineStep;
