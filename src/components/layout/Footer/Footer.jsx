import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import { openCookiePreferences } from "@/config/cookieConsent";

function Footer() {
  const scrollToBudget = (e) => {
    e.preventDefault()
    const budgetSection = document.getElementById('budget')
    if (budgetSection) {
      // Calcular la altura del navbar para ajustar el scroll
      const navbar = document.querySelector('.app-header')
      const navbarHeight = navbar ? navbar.offsetHeight : 0
      const elementPosition = budgetSection.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navbarHeight - 20

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    } else {
      // Si no está en la página principal, navegar primero
      window.location.href = '/#budget'
    }
  }

  return (
    <footer className="app-footer">
      <div className="app-footer-inner">
        <div className="footer-column">
          <h4>📞 Contacto</h4>
          <p className="footer-item">
            <span className="footer-icon">📱</span>
            <a href="tel:+34685562049" className="footer-link">685 56 20 49</a>
          </p>
          <p className="footer-item">
            <span className="footer-icon">💬</span>
            <a href="https://wa.me/34685562049" target="_blank" rel="noopener noreferrer" className="footer-link whatsapp-link">
              WhatsApp
            </a>
          </p>
          <p className="footer-item">
            <span className="footer-icon">📧</span>
            <a href="#budget" onClick={scrollToBudget} className="footer-link email-link">
              dautomecanicaelcardonal@gmail.com
            </a>
          </p>
        </div>

        <div className="footer-column">
          <h4>🕒 Horario</h4>
          <p className="footer-item">
            <span className="footer-icon">📅</span>
            Lunes a Viernes: <strong>8:00 – 17:30</strong>
          </p>
          <p className="footer-item">
            <span className="footer-icon">📅</span>
            Sábados: <strong>9:00 – 13:00</strong>
          </p>
        </div>

        <div className="footer-column">
          <h4>📋 Citas</h4>
          <p className="footer-item">
            <span className="footer-icon">🚗</span>
            Hasta <strong>2 vehículos</strong> a la vez
          </p>
          <p className="footer-item">
            <span className="footer-icon">✅</span>
            Confirmación por WhatsApp
          </p>
        </div>

        <div className="footer-column">
          <h4>🏢 Empresa</h4>
          <p className="footer-item">
            <span className="footer-icon">👥</span>
            <Link to="/about" className="footer-link about-link">
              Sobre Nosotros
            </Link>
          </p>
          <p className="footer-item">
            <span className="footer-icon">🔧</span>
            Servicio profesional
          </p>
        </div>
      </div>

      <div className="app-footer-bottom">
        <p>
          © {new Date().getFullYear()} · <strong>Auto Mecánica El Cardonal</strong>
        </p>
        <p className="footer-tagline">
          🚗 Tu taller de confianza · 💪 Calidad garantizada · ⚙️ Servicio experto
        </p>
      </div>

      <div className="footer-legal">
        <button
          type="button"
          className="footer-link footer-button-link"
          onClick={openCookiePreferences}
        >
          Cambiar cookies
        </button>

        <span className="footer-sep">·</span>
        <Link to="/cookies" className="footer-link">Política de cookies</Link>
        <span className="footer-sep">·</span>
        <Link to="/privacidad" className="footer-link">Privacidad</Link>
      </div>
    </footer>
  )
}

export default Footer
