import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiGithub, FiLinkedin, FiMoon, FiSun } from 'react-icons/fi';
import './Navbar.css';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <a href="#hero" className="navbar__logo" onClick={(e) => handleLinkClick(e, '#hero')}>
          <img 
            src="https://raw.githubusercontent.com/favewrites/favecodes-portfolio/main/Logo.jpg" 
            alt="FaveCodes Logo" 
            className="navbar__logo-img"
          />
          <span>FaveCodes</span>
        </a>

        <div className="navbar__links">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="navbar__link"
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="navbar__actions">
          <a href="https://github.com/favewrites" target="_blank" rel="noopener noreferrer" className="navbar__icon">
            <FiGithub />
          </a>
          <a href="https://www.linkedin.com/in/favecodes" target="_blank" rel="noopener noreferrer" className="navbar__icon">
            <FiLinkedin />
          </a>
          <button className="navbar__theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'light' ? <FiMoon /> : <FiSun />}
          </button>
          <a href="#contact" className="navbar__hire-btn" onClick={(e) => handleLinkClick(e, '#contact')}>
            Hire Me
          </a>
          <button className="navbar__menu-btn" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <div className={`navbar__mobile ${isOpen ? 'navbar__mobile--open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="navbar__mobile-link"
            onClick={(e) => handleLinkClick(e, link.href)}
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;