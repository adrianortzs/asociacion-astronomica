import React from 'react';
import './Page.css';

const PoliticaCookies = () => {
  return (
    <div className="page-container">
      <section className="legal-section">
        <div className="legal-container">
          <h1 className="section-title">Política de Cookies</h1>
          <div className="legal-content">
            <h2 className="legal-subtitle">1. ¿Qué son las Cookies?</h2>
            <p className="legal-text">Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web. Estas cookies permiten que el sitio web recuerde sus acciones y preferencias durante un período de tiempo, por lo que no tiene que volver a configurarlas cada vez que regrese al sitio o navegue de una página a otra.</p>
            <h2 className="legal-subtitle">2. Tipos de Cookies que Utilizamos</h2>
            <p className="legal-text">En nuestro sitio web utilizamos los siguientes tipos de cookies:</p>
            <h3 className="legal-subtitle-small">Cookies Técnicas</h3>
            <p className="legal-text">Son aquellas que permiten al usuario la navegación a través de una página web y la utilización de las diferentes opciones o servicios que en ella existen.</p>
            <h3 className="legal-subtitle-small">Cookies de Análisis</h3>
            <p className="legal-text">Son aquellas que permiten el seguimiento y análisis del comportamiento de los usuarios en los sitios web. La información recopilada se utiliza para la medición de la actividad del sitio web y para la elaboración de perfiles de navegación de los usuarios.</p>
            <h2 className="legal-subtitle">3. Cookies que Utilizamos en Nuestro Sitio</h2>
            <p className="legal-text">Actualmente, nuestro sitio web puede utilizar cookies técnicas necesarias para el funcionamiento del sitio. Estas cookies son esenciales y no requieren consentimiento del usuario.</p>
            <h2 className="legal-subtitle">4. Finalidad de las Cookies</h2>
            <p className="legal-text">Utilizamos cookies para:</p>
            <ul className="legal-list">
              <li>Garantizar el correcto funcionamiento del sitio web</li>
              <li>Recordar sus preferencias y configuraciones</li>
              <li>Mejorar la experiencia de navegación</li>
              <li>Analizar el uso del sitio web (si aplica)</li>
            </ul>
            <h2 className="legal-subtitle">5. Gestión de Cookies</h2>
            <p className="legal-text">Puede gestionar o eliminar las cookies según desee. Puede eliminar todas las cookies que ya están en su ordenador y puede configurar la mayoría de los navegadores para impedir que se coloquen. Sin embargo, si hace esto, es posible que tenga que ajustar manualmente algunas preferencias cada vez que visite un sitio y que algunos servicios y funcionalidades no funcionen.</p>
            <h3 className="legal-subtitle-small">Cómo Desactivar las Cookies</h3>
            <p className="legal-text">Puede configurar su navegador para que rechace las cookies o le avise cuando un sitio web intente colocar una cookie en su dispositivo. Las instrucciones para hacerlo varían según el navegador:</p>
            <ul className="legal-list">
              <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</li>
              <li><strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies y datos del sitio</li>
              <li><strong>Safari:</strong> Preferencias → Privacidad → Cookies y datos de sitios web</li>
              <li><strong>Edge:</strong> Configuración → Cookies y permisos del sitio</li>
            </ul>
            <h2 className="legal-subtitle">6. Cookies de Terceros</h2>
            <p className="legal-text">Algunas cookies son colocadas por servicios de terceros que aparecen en nuestras páginas. No tenemos control sobre estas cookies. Le recomendamos que consulte las políticas de cookies de estos servicios para obtener más información.</p>
            <h2 className="legal-subtitle">7. Consentimiento</h2>
            <p className="legal-text">Al continuar navegando por nuestro sitio web, usted acepta el uso de cookies según se describe en esta política. Si no está de acuerdo con el uso de cookies, puede desactivarlas en la configuración de su navegador.</p>
            <h2 className="legal-subtitle">8. Actualizaciones de esta Política</h2>
            <p className="legal-text">Podemos actualizar esta Política de Cookies de vez en cuando. Le recomendamos que revise esta página periódicamente para estar informado sobre cómo utilizamos las cookies.</p>
            <h2 className="legal-subtitle">9. Más Información</h2>
            <p className="legal-text">Si tiene alguna pregunta sobre nuestra Política de Cookies, puede contactarnos en: asociacionastronomicajpm@gmail.com</p>
            <p className="legal-text legal-update"><strong>Última actualización:</strong> {new Date().getFullYear()}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PoliticaCookies;
