import React from 'react';
import { FaPaintBrush, FaMobileAlt, FaComments, FaSearch, FaCalendarCheck, FaLightbulb } from 'react-icons/fa';
import { SectionHeading } from '../UI';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './WhyWorkWithMe.css';

const strengths = [
  {
    icon: FaPaintBrush,
    title: 'Clean Design',
    description: 'Every design choice is intentional. I create layouts that are visually appealing without unnecessary clutter, ensuring your message stands out clearly.',
  },
  {
    icon: FaMobileAlt,
    title: 'Responsive Development',
    description: 'Your website will look and function beautifully on every device — from mobile phones to ultra-wide monitors. No compromises, no shortcuts.',
  },
  {
    icon: FaComments,
    title: 'Clear Communication',
    description: 'I believe great projects are built on great communication. You will always know where your project stands and what comes next.',
  },
  {
    icon: FaSearch,
    title: 'Attention to Detail',
    description: 'From pixel-perfect spacing to smooth interactions, I obsess over the small details that make a website feel polished and professional.',
  },
  {
    icon: FaCalendarCheck,
    title: 'Reliable Delivery',
    description: 'Deadlines matter. I plan projects carefully and communicate proactively if anything changes, so you can trust your timeline.',
  },
  {
    icon: FaLightbulb,
    title: 'User-Focused Thinking',
    description: 'Every decision is made with your users in mind. I design experiences that are intuitive, accessible, and enjoyable to navigate.',
  },
];

const WhyWorkWithMe = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="why-work-with-me" className="section section-alt" ref={ref}>
      <div className="container">
        <SectionHeading
          title="Why Work With Me"
          subtitle="Beyond technical skills, here is what you can expect when we work together."
        />
        <div className={`strengths-grid ${isVisible ? 'visible' : ''}`}>
          {strengths.map((strength, index) => (
            <div
              key={strength.title}
              className="strength-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="strength-icon-wrapper">
                <strength.icon />
              </div>
              <h3>{strength.title}</h3>
              <p>{strength.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;
