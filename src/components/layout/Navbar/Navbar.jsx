import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import "./Navbar.css"
import Divider from '@/components/ui/Divider/Divider.jsx'

const WHATSAPP_NUMBER = '34685562049'
const WHATSAPP_TEXT = encodeURIComponent(
  'Hola, quiero pedir cita o presupuesto para mi coche.\n\nServicio que necesito:'
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
    <>
      <header className="app-header">
        <div className="app-header-inner">
          <div className="app-logo-block">
            <img src="/coche-definitivo-1.svg" alt="Auto Mecánica El Cardonal" className="app-logo" />
            <img src="/brandText-navbar.svg" alt="brand" className="app-logo" />
          </div>

          <nav className="app-nav">
            <button
              type="button"
              className={sectionLinkClass('services')}
              onClick={() => scrollToSection('services')}
            >
              Servicios
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
        <Divider />
      </header>
    </>
  )
}

export default Navbar
