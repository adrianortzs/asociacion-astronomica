import React, { useState, useEffect, useCallback } from 'react';
import './Carousel.css';

const SLIDES = [
  { id: 1, image: '/img/imagen1.jpg', alt: 'Slide 1' },
  { id: 2, image: '/img/imagen2.jpg', alt: 'Slide 2' },
  { id: 3, image: '/img/imagen3.jpg', alt: 'Slide 3' }
];

const AUTO_SLIDE_INTERVAL = 4000;

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index) => {
    if (index === currentSlide || isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 800);
  }, [currentSlide, isTransitioning]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      setIsTransitioning(true);
      setTimeout(() => setIsTransitioning(false), 800);
      return (prev + 1) % SLIDES.length;
    });
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      setIsTransitioning(true);
      setTimeout(() => setIsTransitioning(false), 800);
      return (prev - 1 + SLIDES.length) % SLIDES.length;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, AUTO_SLIDE_INTERVAL);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="carousel-container">
      <div className="carousel-letterbox-top"></div>
      <div className="carousel-letterbox-bottom"></div>
      <div className="carousel-overlay"></div>
      <div className="carousel-light-effect"></div>
      <div className="carousel-wrapper">
        {SLIDES.map((slide, index) => (
          <div key={slide.id} className={`carousel-slide ${index === currentSlide ? 'active' : ''} ${index < currentSlide ? 'prev' : index > currentSlide ? 'next' : ''}`}>
            <div className="carousel-image-wrapper">
              <img src={slide.image} alt={slide.alt} loading={index === 0 ? 'eager' : 'lazy'}/>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-button carousel-button-prev" onClick={prevSlide} aria-label="Slide anterior" disabled={isTransitioning}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6"/>
        </svg>
      </button>
      <button className="carousel-button carousel-button-next" onClick={nextSlide} aria-label="Slide siguiente" disabled={isTransitioning}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </button>
      <div className="carousel-indicators">
        {SLIDES.map((_, index) => (
          <button key={index} className={`indicator ${index === currentSlide ? 'active' : ''}`} onClick={() => goToSlide(index)} aria-label={`Ir a slide ${index + 1}`} aria-current={index === currentSlide}/>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
