import React from 'react';

function Testimonials() {
  const testimonialData = {
    testimonials: [
      {
        user: "Client 1",
        text: "I'm extremely satisfied with the work! Great job!",
      },
      {
        user: "Client 2",
        text: "Highly professional and efficient. Would recommend!",
      },
      
    ]
  };

  return (
    <section id="testimonials">
      <div className="text-container">
        <div className="row">
          <div className="twelve columns">
            <h2>Client Testimonials</h2>
            <div id="testimonials-slider" className="flexslider">
              <ul className="slides">
                {testimonialData.testimonials.map((testimonial, index) => (
                  <li key={index}>
                    <blockquote>
                      <p>{testimonial.text}</p>
                      <cite>{testimonial.user}</cite>
                    </blockquote>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
