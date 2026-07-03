import React from 'react';
import { FaDownload, FaEye } from 'react-icons/fa';
import { SectionHeading, Button } from '../UI';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Resume.css';

const Resume = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="resume" className="section" ref={ref}>
      <div className="container">
        <SectionHeading
          title="Resume"
          subtitle="My professional journey and qualifications."
        />

        <div className={`resume-content ${isVisible ? 'visible' : ''}`}>
          <div className="resume-summary">
            <div className="resume-section">
              <h3>Professional Summary</h3>
              <p>
                Web Developer and Designer with experience building responsive websites,
                business platforms, and portfolio sites. Passionate about creating clean,
                user-focused digital experiences. Continuously expanding skills toward
                full-stack development and AI-powered applications.
              </p>
            </div>

            <div className="resume-section">
              <h3>Technical Skills</h3>
              <div className="skills-tags">
                {['HTML5', 'CSS3', 'JavaScript', 'React', 'Vite', 'Node.js', 'Express.js', 'MongoDB', 'Git', 'GitHub', 'Figma', 'Responsive Design'].map((skill) => (
                  <span key={skill} className="badge">{skill}</span>
                ))}
              </div>
            </div>

            <div className="resume-section">
              <h3>Freelance Experience</h3>
              <div className="experience-item">
                <h4>Freelance Web Developer</h4>
                <span className="experience-date">2024 — Present</span>
                <p>
                  Designed and developed responsive websites for clients across various
                  industries. Managed projects from concept to deployment, ensuring
                  quality and client satisfaction.
                </p>
              </div>
            </div>

            <div className="resume-section">
              <h3>Education</h3>
              <div className="experience-item">
                <h4>B.Sc. (Ed.) Educational Management</h4>
                <span className="experience-date">Lagos State University (LASU)</span>
                <p>
                  Developed strong communication, organization, and analytical skills
                  that translate effectively into client-facing web development work.
                </p>
              </div>
            </div>
          </div>

          <div className="resume-actions">
            <Button href="/resume/Favour_Eboka_CV.pdf" variant="primary" icon={FaDownload}>
              Download CV
            </Button>
            <Button href="/resume/Favour_Eboka_CV.pdf" variant="secondary" icon={FaEye}>
              View Full Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
