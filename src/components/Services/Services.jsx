import React from 'react';
import { FaPaintBrush, FaMobileAlt, FaBriefcase, FaBuilding, FaRocket, FaCode, FaServer, FaTools } from 'react-icons/fa';
import { SectionHeading, ServiceCard } from '../UI';
import { services } from '../../data/services';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Services.css';

const iconMap = {
  FaPaintBrush,
  FaMobileAlt,
  FaBriefcase,
  FaBuilding,
  FaRocket,
  FaCode,
  FaServer,
  FaTools,
};

const Services = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="services" className="section section-alt" ref={ref}>
      <div className="container">
        <SectionHeading
          title="Services"
          subtitle="Professional web development services tailored to your needs."
        />
        <div className={`services-grid ${isVisible ? 'visible' : ''}`}>
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="service-wrapper"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ServiceCard service={service} icon={Icon} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
