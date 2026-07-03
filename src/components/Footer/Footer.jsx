import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { socialLinks } from '../../data/socialLinks';
import { getCurrentYear } from '../../utils/helpers';
import './Footer.css';

const iconMap = {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaInstagram,
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <img
              src="https://raw.githubusercontent.com/favewrites/favecodes.dev/main/Logo.jpg"
              alt="FaveCodes"
              className="footer-logo"
            />
            <p>Building digital experiences with care and precision.</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-social">
            <h4>Connect</h4>
            <div className="social-links">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    {Icon && <Icon />}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p> {getCurrentYear()} FaveCodes. All rights reserved.</p>
          <p>Built with React, Vite & passion.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
