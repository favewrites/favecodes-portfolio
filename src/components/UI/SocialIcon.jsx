import React from 'react';
import './SocialIcon.css';

const SocialIcon = ({ href, icon: Icon, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon"
      aria-label={label}
    >
      <Icon />
    </a>
  );
};

export default SocialIcon;
