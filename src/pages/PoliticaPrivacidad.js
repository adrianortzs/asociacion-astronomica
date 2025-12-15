import React from 'react';
import './Page.css';

const PoliticaPrivacidad = () => {
  return (
    <div className="page-container">
      <section className="legal-section">
        <div className="legal-container">
          <h1 className="section-title">Política de Privacidad</h1>
          <div className="legal-content">
            <h2 className="legal-subtitle">1. Información General</h2>
            <p className="legal-text">La Asociación Astronómica Juan Pérez Mercader se compromete a proteger la privacidad de los usuarios de su sitio web. Esta Política de Privacidad describe cómo recopilamos, utilizamos y protegemos su información personal.</p>
            <h2 className="legal-subtitle">2. Responsable del Tratamiento</h2>
            <p className="legal-text">El responsable del tratamiento de los datos personales es la Asociación Astronómica Juan Pérez Mercader. Para cualquier consulta relacionada con el tratamiento de sus datos personales, puede contactarnos a través del correo electrónico: asociacionastronomicajpm@gmail.com</p>
            <h2 className="legal-subtitle">3. Datos que Recopilamos</h2>
            <p className="legal-text">Podemos recopilar los siguientes tipos de información personal:</p>
            <ul className="legal-list">
              <li>Datos de identificación: nombre, apellidos</li>
              <li>Datos de contacto: dirección de correo electrónico, número de teléfono</li>
              <li>Datos de navegación: dirección IP, tipo de navegador, páginas visitadas</li>
            </ul>
            <h2 className="legal-subtitle">4. Finalidad del Tratamiento</h2>
            <p className="legal-text">Utilizamos sus datos personales para las siguientes finalidades:</p>
            <ul className="legal-list">
              <li>Gestionar su solicitud de información o contacto</li>
              <li>Enviarle información sobre nuestras actividades y eventos</li>
              <li>Mejorar nuestros servicios y la experiencia del usuario</li>
              <li>Cumplir con obligaciones legales</li>
            </ul>
            <h2 className="legal-subtitle">5. Base Legal</h2>
            <p className="legal-text">El tratamiento de sus datos personales se basa en:</p>
            <ul className="legal-list">
              <li>El consentimiento del interesado</li>
              <li>El cumplimiento de una obligación legal</li>
              <li>El interés legítimo de la asociación</li>
            </ul>
            <h2 className="legal-subtitle">6. Conservación de los Datos</h2>
            <p className="legal-text">Conservaremos sus datos personales durante el tiempo necesario para cumplir con las finalidades para las que fueron recopilados y, en cualquier caso, durante los plazos establecidos por la legislación aplicable.</p>
            <h2 className="legal-subtitle">7. Compartir Información</h2>
            <p className="legal-text">No compartimos su información personal con terceros, excepto cuando sea necesario para cumplir con obligaciones legales o cuando usted nos haya dado su consentimiento explícito.</p>
            <h2 className="legal-subtitle">8. Sus Derechos</h2>
            <p className="legal-text">Usted tiene derecho a:</p>
            <ul className="legal-list">
              <li>Acceder a sus datos personales</li>
              <li>Rectificar datos inexactos o incompletos</li>
              <li>Solicitar la supresión de sus datos</li>
              <li>Oponerse al tratamiento de sus datos</li>
              <li>Solicitar la limitación del tratamiento</li>
              <li>Portabilidad de los datos</li>
            </ul>
            <p className="legal-text">Para ejercer estos derechos, puede contactarnos en: asociacionastronomicajpm@gmail.com</p>
            <h2 className="legal-subtitle">9. Seguridad</h2>
            <p className="legal-text">Implementamos medidas técnicas y organizativas apropiadas para proteger sus datos personales contra el acceso no autorizado, la pérdida, destrucción o alteración.</p>
            <h2 className="legal-subtitle">10. Cambios en esta Política</h2>
            <p className="legal-text">Nos reservamos el derecho de modificar esta Política de Privacidad. Cualquier cambio será publicado en esta página con la fecha de la última actualización.</p>
            <p className="legal-text legal-update">Última actualización: {new Date().getFullYear()}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PoliticaPrivacidad;
