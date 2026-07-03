import React from 'react';
import { FaSearch, FaPencilRuler, FaCode, FaRocket } from 'react-icons/fa';
import { SectionHeading, TimelineStep } from '../UI';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Process.css';

const steps = [
  {
    number: 1,
    title: 'Discover',
    description: 'Understand the client\'s goals, target audience, and project requirements through detailed consultation.',
    icon: FaSearch,
  },
  {
    number: 2,
    title: 'Design',
    description: 'Create wireframes and user-focused layouts that balance aesthetics with functionality.',
    icon: FaPencilRuler,
  },
  {
    number: 3,
    title: 'Develop',
    description: 'Transform designs into responsive, performant websites using modern technologies and best practices.',
    icon: FaCode,
  },
  {
    number: 4,
    title: 'Launch & Improve',
    description: 'Deploy, test, and refine based on feedback. Continuous improvement ensures lasting success.',
    icon: FaRocket,
  },
];

const Process = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="process" className="section" ref={ref}>
      <div className="container">
        <SectionHeading
          title="How I Work"
          subtitle="A simple, transparent process from idea to launch."
        />
        <div className={`process-timeline ${isVisible ? 'visible' : ''}`}>
          {steps.map((step, index) => (
            <TimelineStep
              key={step.number}
              step={step}
              icon={step.icon}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
