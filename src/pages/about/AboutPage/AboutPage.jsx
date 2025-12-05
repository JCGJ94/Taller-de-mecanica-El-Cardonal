import React from 'react'
import './AboutPage.css'

function AboutPage() {
  return (
    <section className="about-page">
      <div className="about-container">
        <h1 className="about-title">Sobre Nosotros</h1>

        <p className="about-hero-text">
          Somos una empresa joven con <span className="about-highlight">conocimiento</span>,
          buen trato y que destaca en el trabajo <span className="about-highlight">efectivo y limpio</span>,
          donde cada cliente es importante.
        </p>

        <div className="about-team-section">
          <h2 className="about-team-title">Nuestro Equipo</h2>
          <p className="about-team-desc">
            En Auto Mecánica El Cardonal, nos enorgullece contar con un equipo apasionado por la mecánica
            y dedicado a ofrecer la mejor experiencia a nuestros clientes. Combinamos técnicas modernas
            con un trato cercano y transparente.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutPage
