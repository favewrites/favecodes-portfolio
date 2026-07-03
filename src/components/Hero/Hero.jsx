import React, { useState, useEffect } from 'react';
import { FiArrowDown, FiDownload, FiMessageCircle } from 'react-icons/fi';
import { heroStats } from '../../data/statistics';
import './Hero.css';

const roles = [
  'Web Developer',
  'Web Designer',
  'React Developer',
  'Frontend Developer',
  'Future AI Engineer'
];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <span className="hero__greeting">Hello, I'm</span>
          <h1 className="hero__name">Favour Chidinma Eboka</h1>
          <div className="hero__role">
            <span className="hero__role-text">{roles[currentRole]}</span>
          </div>
          <p className="hero__description">
            I build modern, responsive websites that combine beautiful design with
            reliable functionality. Passionate about creating digital experiences that make a difference.
          </p>
          <div className="hero__buttons">
            <button 
              className="hero__btn hero__btn--primary" 
              onClick={() => scrollToSection('#portfolio')}
            >
              View My Work
            </button>
            <a href="/resume/Favour_Eboka_CV.pdf" className="hero__btn hero__btn--secondary" download>
              <FiDownload /> Download CV
            </a>
            <button 
              className="hero__btn hero__btn--outline" 
              onClick={() => scrollToSection('#contact')}
            >
              <FiMessageCircle /> Let's Talk
            </button>
          </div>
          <div className="hero__stats">
            {heroStats.map((stat) => (
              <div key={stat.label} className="hero__stat">
                <span className="hero__stat-value">{stat.value}</span>
                <span className="hero__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero__image-wrapper">
          <div className="hero__image-container">
            <img
              src="https://raw.githubusercontent.com/favewrites/favecodes.dev/main/Myhero.jpg"
              alt="Favour Chidinma Eboka"
              className="hero__image"
            />
            <div className="hero__image-ring"></div>
          </div>
        </div>
      </div>
      <div className="hero__scroll">
        <span>Scroll to Explore</span>
        <FiArrowDown className="hero__scroll-icon" />
      </div>
    </section>
  );
};

export default Hero;
