import React from 'react';
import './Page.css';

const About = () => {
  return (
    <div className="page-container">
      <section className="legal-section">
        <div className="legal-container">
          <h1 className="section-title">Quiénes Somos</h1>
          <div className="legal-content">
            <p className="legal-text">La Asociación Astronómica Juan Pérez Mercader es una organización dedicada a la divulgación y promoción de la astronomía. Nuestro objetivo principal es acercar el conocimiento del universo a todas las personas, fomentando la curiosidad científica y el amor por la observación del cielo.</p>
            <p className="legal-text">Organizamos actividades regulares, observaciones nocturnas, charlas educativas y eventos especiales para compartir nuestra pasión por la astronomía con la comunidad.</p>
            <p className="legal-text">Nuestra misión es hacer accesible la astronomía a todos los niveles, desde principiantes hasta aficionados avanzados, creando un espacio donde la ciencia y la pasión por el cosmos se encuentren.</p>
          </div>
        </div>
      </section>
      <section className="location-section">
        <div className="location-container">
          <h2 className="section-title">Dónde estamos</h2>
          <div className="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120808.14760872975!2d-6.653703249919942!3d37.280957079110614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd11fa46f468dabf%3A0xe267c2b24bf202ec!2s21730%20Almonte%2C%20Huelva!5e0!3m2!1ses!2ses!4v1765369624656!5m2!1ses!2ses"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de la Asociación Astronómica Juan Pérez Mercader"
              className="map-iframe"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
