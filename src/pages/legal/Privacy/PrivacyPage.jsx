import React from "react";
import "./PrivacyPage.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHalved,
  faBuilding,
  faDatabase,
  faUserGear,
  faScaleBalanced,
  faUserCheck,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faIdCard } from "@fortawesome/free-regular-svg-icons";

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <div className="legal-card">
        <header className="legal-header">
          <p className="legal-eyebrow">
            <FontAwesomeIcon icon={faShieldHalved} className="legal-eyebrow__icon" />
            Privacidad y RGPD
          </p>

          <h1 className="legal-title">Política de privacidad</h1>

          <p className="legal-lead">
            Esta política explica cómo tratamos los datos personales cuando contactas con nosotros, solicitas presupuesto
            o navegas por la web, así como tus derechos y cómo ejercerlos.
          </p>
        </header>

        <section className="legal-section">
          <h2 className="legal-h2">
            <FontAwesomeIcon icon={faBuilding} className="legal-h2__icon" />
            Responsable del tratamiento
          </h2>

          <ul className="legal-list">
            <li className="legal-item">
              <strong>Responsable</strong>: Auto Mecánica El Cardonal
            </li>
            <li className="legal-item">
              <strong>NIF/CIF</strong>: [60958328W]
            </li>
            <li className="legal-item">
              <strong>Dirección</strong>: [Calle Virgen de las Nieves 6, 38108 La Laguna, Tenerife]
            </li>
            <li className="legal-item">
              <strong>Email de contacto</strong>: [dautomecanicaelcardonal@gmail.com]
            </li>
          </ul>
        </section>

        <section className="legal-section">
          <h2 className="legal-h2">
            <FontAwesomeIcon icon={faDatabase} className="legal-h2__icon" />
            Datos que tratamos
          </h2>

          <ul className="legal-list">
            <li className="legal-item">
              <strong>Formulario de contacto/presupuesto</strong>: nombre, email/teléfono, mensaje y la información que decidas incluir.
            </li>
            <li className="legal-item">
              <strong>Datos técnicos</strong>: información mínima de navegación (p. ej., registros del servidor/hosting) para seguridad y funcionamiento.
            </li>
            <li className="legal-item">
              <strong>Preferencias de cookies</strong>: tu elección de consentimiento (necesarias / analítica / marketing).
            </li>
          </ul>
        </section>

        <section className="legal-section">
          <h2 className="legal-h2">
            <FontAwesomeIcon icon={faScaleBalanced} className="legal-h2__icon" />
            Finalidades y base legal
          </h2>

          <ul className="legal-list">
            <li className="legal-item">
              <strong>Atender solicitudes y presupuestos</strong>: responder consultas y gestionar comunicaciones.
              <br />
              <span className="legal-muted">
                Base legal: consentimiento y/o medidas precontractuales a petición del interesado.
              </span>
            </li>
            <li className="legal-item">
              <strong>Seguridad y mantenimiento</strong>: prevenir abusos, ataques y asegurar el servicio.
              <br />
              <span className="legal-muted">
                Base legal: interés legítimo.
              </span>
            </li>
            <li className="legal-item">
              <strong>Analítica y marketing (si aceptas cookies)</strong>: medición y personalización publicitaria.
              <br />
              <span className="legal-muted">
                Base legal: consentimiento.
              </span>
            </li>
          </ul>
        </section>

        <section className="legal-section">
          <h2 className="legal-h2">
            <FontAwesomeIcon icon={faUserGear} className="legal-h2__icon" />
            Encargados, destinatarios y terceros
          </h2>

          <ul className="legal-list">
            <li className="legal-item">
              <strong>EmailJS</strong>: envío de emails del formulario (prestador del servicio).
            </li>
            <li className="legal-item">
              <strong>Hosting/servidor</strong>: alojamiento del sitio y posibles logs técnicos.
            </li>
            <li className="legal-item">
              <strong>Google</strong>: analítica/marketing si aceptas (GA4/Ads).
            </li>
            <li className="legal-item">
              <strong>Meta</strong>: marketing si aceptas (Pixel).
            </li>
          </ul>

          <p className="legal-p">
            Algunos proveedores pueden estar ubicados fuera del Espacio Económico Europeo. En esos casos, se aplicarán
            las garantías y mecanismos previstos por la normativa (p. ej., cláusulas contractuales tipo u otras medidas).
          </p>
        </section>

        <section className="legal-section legal-callout">
          <h2 className="legal-h2">
            <FontAwesomeIcon icon={faIdCard} className="legal-h2__icon" />
            Derechos del usuario
          </h2>

          <p className="legal-p">
            Puedes ejercer tus derechos de <strong>acceso</strong>, <strong>rectificación</strong>, <strong>supresión</strong>,
            <strong> oposición</strong>, <strong>limitación</strong> y <strong>portabilidad</strong>.
          </p>

          <p className="legal-p">
            Para ejercerlos, escribe a <strong>[email de contacto]</strong> indicando tu solicitud y acreditando tu identidad
            si fuese necesario.
          </p>

          <p className="legal-p">
            Si consideras que el tratamiento no se ajusta a la normativa, puedes presentar una reclamación ante la
            autoridad de control competente (en España, la AEPD).
          </p>
        </section>

        <section className="legal-section">
          <h2 className="legal-h2">
            <FontAwesomeIcon icon={faUserCheck} className="legal-h2__icon" />
            Conservación
          </h2>

          <p className="legal-p">
            Conservaremos los datos el tiempo necesario para atender tu solicitud y, posteriormente, durante los plazos
            exigidos por obligaciones legales o para la defensa ante posibles reclamaciones.
          </p>
        </section>

        <section className="legal-section legal-footerNote">
          <h2 className="legal-h2">
            <FontAwesomeIcon icon={faEnvelope} className="legal-h2__icon" />
            Contacto
          </h2>
          <p className="legal-p">
            Para cualquier duda sobre privacidad, escribe a <strong>[email de contacto]</strong>.
          </p>
          <p className="legal-small">
            Esta política puede actualizarse para adaptarse a cambios legales o técnicos. Publicaremos la versión vigente en esta página.
          </p>
        </section>
      </div>
    </main>
  );
}
