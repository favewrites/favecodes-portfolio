import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ service, icon: Icon }) => {
  return (
    <div className="service-card">
      <div className="service-icon-wrapper">
        {Icon && <Icon className="service-icon" />}
      </div>
      <h3 className="service-title">{service.title}</h3>
      <p className="service-description">{service.description}</p>
      <div className="service-details">
        <div className="service-section">
          <h4>Includes:</h4>
          <ul>
            {service.includes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="service-section">
          <h4>Ideal For:</h4>
          <p>{service.idealFor}</p>
        </div>
        <div className="service-section">
          <h4>Outcome:</h4>
          <p>{service.outcome}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
