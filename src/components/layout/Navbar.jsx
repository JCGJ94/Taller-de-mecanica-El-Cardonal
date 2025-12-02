import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import "./Navbar.css"
const WHATSAPP_NUMBER = '34685652049'
const WHATSAPP_TEXT = encodeURIComponent(
  'Hola, quiero pedir cita o presupuesto para mi coche.'
)

function Navbar({ activeSection }) {
  const location = useLocation()

  const scrollToSection = id => {
    if (location.pathname !== '/') {
      // si en el futuro tienes otras páginas, podrías usar navigate
      window.location.href = '/#' + id
      return
    }
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const sectionLinkClass = id =>
    `app-nav-section ${activeSection === id ? 'active' : ''}`

  return (
    <header className="app-header">
      <div className="app-header-inner">
        <div className="app-logo-block">
          <div className="app-logo-mark">
            {/* cuando tengas el logo optimizado, cámbialo aquí */}
            <img src="/logo-cardonal.png" alt="Auto Mecánica El Cardonal" />
          </div>
          <div className="app-logo-text">
            <span className="app-logo-title">Auto Mecánica El Cardonal</span>
            <span className="app-logo-subtitle">
              Mecánica en general · Servicio rápido
            </span>
          </div>
        </div>

        <nav className="app-nav">
          <NavLink to="/" end>
            Inicio
          </NavLink>
          <button
            type="button"
            className={sectionLinkClass('services')}
            onClick={() => scrollToSection('services')}
          >
            Servicios
          </button>
          <button
            type="button"
            className={sectionLinkClass('process')}
            onClick={() => scrollToSection('process')}
          >
            Cómo trabajamos
          </button>
          <button
            type="button"
            className={sectionLinkClass('budget')}
            onClick={() => scrollToSection('budget')}
          >
            Presupuesto
          </button>
          <button
            type="button"
            className={sectionLinkClass('contact')}
            onClick={() => scrollToSection('contact')}
          >
            Contacto
          </button>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`}
            className="app-nav-cta"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
