import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { SectionHeading, ContactCard } from '../UI';
import { contactInfo } from '../../data/socialLinks';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Contact.css';

const Contact = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="contact" className="section section-alt" ref={ref}>
      <div className="container">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind? Let's work together."
        />
        <div className={`contact-content ${isVisible ? 'visible' : ''}`}>
          <div className="contact-cards">
            <ContactCard
              icon={FaEnvelope}
              title="Email"
              value={contactInfo.email}
              href={`mailto:${contactInfo.email}`}
            />
            <ContactCard
              icon={FaPhone}
              title="Phone"
              value={contactInfo.phone}
              href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
            />
            <ContactCard
              icon={FaMapMarkerAlt}
              title="Location"
              value={contactInfo.location}
              href="#"
            />
          </div>
          <div className="contact-cta">
            <p>Ready to start your project?</p>
            <a href={`mailto:${contactInfo.email}`} className="btn btn-primary">
              Send an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
