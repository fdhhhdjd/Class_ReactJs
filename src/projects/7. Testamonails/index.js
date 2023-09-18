import React, { useState } from 'react';
import './style.css';

function Learn_7() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      quote: "This is the best product I've ever used!",
      author: 'Nguyen Tien Tai',
    },
    {
      quote: 'I highly recommend this product to everyone!',
      author: 'Nguyen Quoc Hao',
    },
    {
      quote: 'This product has completely changed my life!',
      author: 'Dang Thi Ngoc Tuyen',
    },
  ];

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex + testimonials.length - 1) % testimonials.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  return (
    <div className="testimonials">
      <div className="testimonials-quote">{testimonials[currentIndex].quote}</div>
      <div className="testimonials-author">- {testimonials[currentIndex].author}</div>
      <div className="testimonials-nav">
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
}

export default Learn_7;
