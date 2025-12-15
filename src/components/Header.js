import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo-link">
        <div className="logo-container">
          <img src="/img/logo-sin-fondo.png" alt="Asociación Astronómica Juan Pérez Mercader" className="logo" loading='eager'/>
        </div>
      </Link>
      <Link to="/" className="title-link">
        <h1 className="title">Asociación Astronómica Juan Pérez Mercader</h1>
      </Link>
      <nav className="menu-container">
        <Link to="/sobre-nosotros" className="menu-item">Sobre nosotros</Link>
      </nav>
    </header>
  );
};

export default Header;
