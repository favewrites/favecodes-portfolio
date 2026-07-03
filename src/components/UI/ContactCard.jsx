import React from 'react';
import './ContactCard.css';

const ContactCard = ({ icon: Icon, title, value, href }) => {
  return (
    <a href={href} className="contact-card" target="_blank" rel="noopener noreferrer">
      <div className="contact-icon-wrapper">
        <Icon />
      </div>
      <div className="contact-info">
        <span className="contact-label">{title}</span>
        <span className="contact-value">{value}</span>
      </div>
    </a>
  );
};

export default ContactCard;
