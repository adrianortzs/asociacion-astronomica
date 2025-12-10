import React from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from './Carousel';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <main className="hero" id="home">
      <section className="carousel-section">
        <Carousel />
      </section>
      <div className="hero-content">
        <h2 className="hero-title">La divulgación de la Astronomía como objetivo</h2>
        <p className="hero-subtitle">Descubre el universo con nosotros y comparte la pasión por la astronomía.</p>
        <button className="about-us-button" onClick={() => navigate('/sobre-nosotros')}>Conócenos</button>
      </div>
    </main>
  );
};

export default Hero;
