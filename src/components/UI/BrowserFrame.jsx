import React from 'react';
import './BrowserFrame.css';

const BrowserFrame = ({ children, url = '' }) => {
  return (
    <div className="browser-frame">
      <div className="browser-header">
        <div className="browser-dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <div className="browser-address-bar">
          <span className="browser-url">{url}</span>
        </div>
      </div>
      <div className="browser-content">
        {children}
      </div>
    </div>
  );
};

export default BrowserFrame;
