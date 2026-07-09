import React from 'react';
import { FaQuoteLeft, FaStar, FaRegStar } from 'react-icons/fa';
import { SectionHeading } from '../UI';
import { testimonials, testimonialsPlaceholder } from '../../data/testimonials';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Testimonials.css';

const Testimonials = () => {
  const [ref, isVisible] = useScrollAnimation();

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FaStar key={i} className="star filled" />);
      } else {
        stars.push(<FaRegStar key={i} className="star" />);
      }
    }

    return stars;
  };

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

                  <p className="testimonial-text">
                    "{testimonial.review}"
                  </p>

                  <div className="testimonial-rating">
                    {renderStars(testimonial.rating)}
                    <span>{testimonial.rating}/5</span>
                  </div>

                  <div className="testimonial-author">

                    {testimonial.image && (
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                      />
                    )}

                    <div>
                      <h4>{testimonial.name}</h4>
                      <span>{testimonial.role}</span>
                      <br />
                      <small>{testimonial.company}</small>
                      <br />
                      <small>{testimonial.date}</small>
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