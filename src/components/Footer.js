import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contacto">
      <div className="footer-container">
        <div className="logo-container">
          <Link to="/"><img src="/img/logo-sin-fondo.png" alt="Asociación Astronómica Juan Pérez Mercader" className="footer-logo"/></Link>
        </div>
        <div className="policies-container">
          <h3 className="footer-section-title">Información Legal</h3>
          <Link to="/aviso-legal" className="policies-link">Aviso legal</Link>
          <Link to="/politica-privacidad" className="policies-link">Política de privacidad</Link>
          <Link to="/politica-cookies" className="policies-link">Política de cookies</Link>
        </div>
        <div className="contact-container">
          <h3 className="footer-section-title">Contacto</h3>
          <a href="tel:+34620294585" className="contact-item">
            <i className="bi bi-telephone-fill contact-icon"></i>
            <span className="contact-telf">+34 620 294 585</span>
          </a>
          <a href="mailto:asociacionastronomicajpm@gmail.com" className="contact-item">
            <i className="bi bi-envelope-fill contact-icon"></i>
            <span className="contact-email">asociacionastronomicajpm@gmail.com</span>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="copyright">Derechos reservados &copy; {new Date().getFullYear()} Asociación Astronómica Juan Pérez Mercader</span>
      </div>
    </footer>
  );
};

export default Footer;
