import React, { useState } from 'react';
import '../css/slider.css';
import crane1 from '../assets/image2.jpg'; 
import crane2 from '../assets/image3.jpg'; 

const slides = [
  {
    tag: 'LOGISTIC',
    title: 'Best Shipping',
    highlight: 'Partner',
    desc: 'Amet, tempus egestas facilisis volutpat viverra molestie lobortis posuere maecenas. molestie lobortis posuere maecenas. Eget sapien, gravida neque.',
    image: crane1,
  },
  {
    tag: 'TRANSPORT',
    title: 'Fastest Logistic',
    highlight: 'Solutions',
    desc: 'Molestie lobortis posuere maecenas. Eget sapien, gravida neque facilisis volutpat.',
    image: crane2,
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const { tag, title, highlight, desc, image } = slides[current];

  return (
    <section className="slider-section">
      <div className="slider-image-area">
        <img src={image} alt="slide" className="slider-bg-image" />
      </div>
      <div className="slider-content-area">
        <div className="slider-content-box">
          <p className="slider-tag">{tag}</p>
          <h1 className="slider-title">
            {title} <br /><span>{highlight}</span>
          </h1>
          <p className="slider-desc">{desc}</p>
          <button className="slider-button">DISCOVER MORE</button>
        </div>
      </div>
      <div className="slider-nav-box">
        <span className="slider-nav-index">{current + 1} / {slides.length}</span>
        <div className="slider-nav-arrows">
          <div className="slider-nav-arrow" onClick={prevSlide}>&#8592;</div>
          <div className="slider-nav-arrow" onClick={nextSlide}>&#8594;</div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
