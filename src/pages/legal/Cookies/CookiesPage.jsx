import React from "react";
import "./CookiesPage.css";
import { openCookiePreferences } from "@/config/cookieConsent";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup, faSliders, faCircleInfo, faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

export default function CookiesPage() {
  return (
    <main className="legal-page">
      <div className="legal-card">
        <header className="legal-header">
          <p className="legal-eyebrow">
            <FontAwesomeIcon icon={faCircleCheck} className="legal-eyebrow__icon" />
            Información legal
          </p>

          <h1 className="legal-title">Política de cookies</h1>

          <p className="legal-lead">
            En este sitio web utilizamos cookies y tecnologías similares para garantizar el correcto
            funcionamiento de la web (cookies necesarias) y, si lo autorizas, para medir el uso del sitio
            (analítica) y mostrar publicidad personalizada (marketing).
          </p>

          <div className="legal-meta">
            <span className="legal-meta__item">
              <FontAwesomeIcon icon={faCircleInfo} /> Última actualización: <strong>[23/01/2025]</strong>
            </span>
            <button
              type="button"
              className="footer-link footer-button-link"
              onClick={openCookiePreferences}
            >
              <span className="legal-meta__item">
                <FontAwesomeIcon icon={faClockRotateLeft} /> Puedes cambiar tu consentimiento en cualquier momento
              </span>
            </button>
          </div>
        </header>

        <section className="legal-section">
          <h2 className="legal-h2">
            <FontAwesomeIcon icon={faLayerGroup} className="legal-h2__icon" />
            ¿Qué son las cookies?
          </h2>

          <p className="legal-p">
            Las cookies son pequeños archivos que se descargan en tu dispositivo al acceder a ciertas páginas web.
            Permiten, por ejemplo, recordar tus preferencias, mantener la sesión iniciada o conocer cómo se usa el sitio.
          </p>
        </section>

        <section className="legal-section">
          <h2 className="legal-h2">
            <FontAwesomeIcon icon={faLayerGroup} className="legal-h2__icon" />
            Tipos de cookies que usamos
          </h2>

          <ul className="legal-list">
            <li className="legal-item">
              <strong>Necesarias</strong>: imprescindibles para que la web funcione y para prestar los servicios solicitados.
              No requieren consentimiento.
            </li>
            <li className="legal-item">
              <strong>Analítica</strong>: nos ayudan a entender el uso de la web (por ejemplo, Google Analytics / GA4) y mejorarla.
              Solo se activan si aceptas.
            </li>
            <li className="legal-item">
              <strong>Marketing</strong>: permiten medir campañas y mostrar publicidad personalizada (por ejemplo, Google Ads y Meta Pixel).
              Solo se activan si aceptas.
            </li>
          </ul>
        </section>

        <section className="legal-section legal-callout">
          <h2 className="legal-h2">
            <FontAwesomeIcon icon={faSliders} className="legal-h2__icon" />
            Gestionar o retirar el consentimiento
          </h2>

          <p className="legal-p">
            Puedes aceptar, rechazar o configurar las cookies no necesarias desde el banner o desde el enlace
            <strong> “Cambiar cookies”</strong> del pie de página. Tu elección se aplicará a este navegador y dispositivo.
          </p>

          <p className="legal-p">
            También puedes eliminar las cookies desde la configuración de tu navegador. Ten en cuenta que, si bloqueas
            algunas cookies, ciertas funciones podrían dejar de estar disponibles.
          </p>
        </section>

        <section className="legal-section">
          <h2 className="legal-h2">
            <FontAwesomeIcon icon={faLayerGroup} className="legal-h2__icon" />
            Terceros y transferencias
          </h2>

          <p className="legal-p">
            Si aceptas cookies de analítica o marketing, algunos proveedores pueden tratar datos (incluida información
            técnica o identificadores) y, en algunos casos, realizar transferencias internacionales según sus propias
            políticas y garantías aplicables.
          </p>
        </section>

        <section className="legal-section legal-footerNote">
          <p className="legal-small">
            Para más información sobre el tratamiento de datos personales, consulta nuestra <strong>Política de privacidad</strong>.
          </p>
        </section>
      </div>
    </main>
  );
}
