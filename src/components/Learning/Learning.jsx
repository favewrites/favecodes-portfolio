import React from 'react';
import { FaBook, FaCode, FaLock, FaRobot, FaCogs, FaCloud } from 'react-icons/fa';
import { SectionHeading } from '../UI';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Learning.css';

const learningItems = [
  {
    icon: FaCogs,
    title: 'Backend Architecture',
    description: 'Deepening understanding of scalable server design, database optimization, and API patterns.',
  },
  {
    icon: FaCode,
    title: 'Advanced React Patterns',
    description: 'Exploring hooks, context, performance optimization, and modern React best practices.',
  },
  {
    icon: FaLock,
    title: 'Authentication Systems',
    description: 'Learning secure user authentication, JWT, OAuth, and session management.',
  },
  {
    icon: FaRobot,
    title: 'AI Application Development',
    description: 'Building practical AI-powered applications and understanding LLM integration.',
  },
  {
    icon: FaRobot,
    title: 'AI Agent Development',
    description: 'Exploring autonomous AI agents and their potential in web applications.',
  },
  {
    icon: FaCloud,
    title: 'Cloud Deployment',
    description: 'Mastering cloud platforms, CI/CD pipelines, and scalable deployment strategies.',
  },
];

const Learning = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="learning" className="section section-alt" ref={ref}>
      <div className="container">
        <SectionHeading
          title="Currently Learning"
          subtitle="My growth path — technologies and skills I'm actively developing."
        />
        <div className={`learning-grid ${isVisible ? 'visible' : ''}`}>
          {learningItems.map((item, index) => (
            <div
              key={item.title}
              className="learning-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="learning-icon-wrapper">
                <item.icon />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Learning;
