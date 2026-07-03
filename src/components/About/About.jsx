import React from 'react';
import { FaGraduationCap, FaBriefcase, FaLightbulb, FaRocket } from 'react-icons/fa';
import { SectionHeading } from '../UI';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './About.css';

const quickFacts = [
  {
    icon: FaGraduationCap,
    title: 'Education',
    text: 'B.Sc. (Ed.) Educational Management',
  },
  {
    icon: FaBriefcase,
    title: 'Experience',
    text: 'Freelance Web Developer',
  },
  {
    icon: FaLightbulb,
    title: 'Focus',
    text: 'React & Frontend Development',
  },
  {
    icon: FaRocket,
    title: 'Goal',
    text: 'Future AI Developer',
  },
];

const About = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container">
        <SectionHeading
          title="About Me"
          subtitle="Get to know the person behind the code."
        />
        <div className={`about-content ${isVisible ? 'visible' : ''}`}>
          <div className="about-text">
            <p>
              Hello! I'm Favour Chidinma Eboka, a passionate web developer and designer
              based in Lagos, Nigeria. With a background in Education and a love for
              technology, I bridge the gap between creative design and functional code.
            </p>
            <p>
              I specialize in building responsive, user-friendly websites that help
              businesses and individuals establish a strong online presence. My journey
              into web development started with a curiosity about how websites work,
              which grew into a dedicated craft.
            </p>
            <p>
              Currently, I'm expanding my skills toward full-stack development and
              AI-powered applications, always staying curious and committed to
              continuous learning.
            </p>
          </div>
          <div className="about-facts">
            {quickFacts.map((fact, index) => (
              <div
                key={fact.title}
                className="fact-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="fact-icon">
                  <fact.icon />
                </div>
                <h4>{fact.title}</h4>
                <p>{fact.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
