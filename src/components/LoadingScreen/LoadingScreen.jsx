import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <img
          src="/Logo.jpg"
          alt="FaveCodes Logo"
          className="loading-logo"
        />
        <div className="loading-spinner" />
        <p className="loading-text">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
