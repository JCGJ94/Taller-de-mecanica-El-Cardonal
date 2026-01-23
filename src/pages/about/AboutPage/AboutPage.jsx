import React from "react";
import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="about-fullbleed">
      <section className="about-page" aria-label="Sobre nosotros">
        <div className="about-container about-container--single">
          <header className="about-header">
            <p className="about-eyebrow">Auto Mecánica El Cardonal</p>
            <h1 className="about-title">Sobre Nosotros</h1>
            <div className="about-divider" />
          </header>

          <div className="about-content">
            <p className="about-hero-text">
              Somos un taller comprometido y en constante mejora, con un profundo
              <span className="about-highlight"> conocimiento técnico</span> y un trato cercano.
              Nos caracteriza un trabajo <span className="about-highlight">limpio, responsable y eficiente</span>,
              donde cada detalle importa y cada cliente recibe la atención que merece.
            </p>

            <p className="about-hero-text">
              En Auto Mecánica El Cardonal creemos en la transparencia, la profesionalidad y la confianza.
              Por eso trabajamos para ofrecer un servicio honesto, ágil y adaptado a las necesidades de cada vehículo,
              manteniendo la esencia familiar que nos distingue.
            </p>

            <div className="about-separator" />

            <h2 className="about-team-title">Nuestro Equipo</h2>
            <div className="about-divider" />

            <p className="about-hero-text">
              Contamos con un equipo apasionado por la mecánica y comprometido con la calidad, con experiencia en
              mantenimiento, diagnóstico y reparación. Cada intervención se realiza siguiendo procesos claros y
              estándares exigentes.
            </p>

            <p className="about-hero-text">
              Combinamos formación continua, herramientas actuales y metodología precisa para ofrecer resultados
              seguros y duraderos. Nuestro objetivo es simple: que salgas con tu vehículo perfecto y con total confianza.
            </p>

            <div className="about-badges" aria-label="Valores del taller">
              <span className="about-badge">Diagnóstico preciso</span>
              <span className="about-badge">Transparencia</span>
              <span className="about-badge">Trabajo limpio</span>
              <span className="about-badge">Garantía y seguridad</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
