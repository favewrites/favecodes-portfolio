import React from 'react';
import './Button.css';

const Button = ({
  children,
  variant = 'primary',
  href,
  onClick,
  type = 'button',
  icon: Icon,
  className = '',
}) => {
  const baseClass = `btn btn-${variant} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={baseClass} onClick={onClick}>
        {Icon && <Icon className="btn-icon" />}
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={baseClass} onClick={onClick}>
      {Icon && <Icon className="btn-icon" />}
      {children}
    </button>
  );
};

export default Button;
