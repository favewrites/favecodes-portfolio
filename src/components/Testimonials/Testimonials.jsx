import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { SectionHeading } from '../UI';
import { testimonials, testimonialsPlaceholder } from '../../data/testimonials';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Testimonials.css';

const Testimonials = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="testimonials" className="section section-alt" ref={ref}>
      <div className="container">
        <SectionHeading
          title={testimonialsPlaceholder.title}
          subtitle="What clients say about working with me."
        />

        <div className={`testimonials-content ${isVisible ? 'visible' : ''}`}>
          {testimonials.length > 0 ? (
            <div className="testimonials-grid">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-card">
                  <FaQuoteLeft className="quote-icon" />
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-author">
                    <img src={testimonial.image} alt={testimonial.name} />
                    <div>
                      <h4>{testimonial.name}</h4>
                      <span>{testimonial.company}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="testimonials-placeholder">
              <FaQuoteLeft className="placeholder-icon" />
              <p>{testimonialsPlaceholder.message}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
