import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="app-footer">
      <div className="app-footer-inner">
        <div>
          <h4>Contacto</h4>
          <p>Teléfono / WhatsApp: 685 56 20 49</p>
          <p>Email: dautomecanicaelcardonal@gmail.com</p>
        </div>
        <div>
          <h4>Horario</h4>
          <p>Lunes a Viernes: 8:00 – 17:30</p>
          <p>Sábados: 9:00 – 13:00</p>
        </div>
        <div>
          <h4>Citas</h4>
          <p>
            Atendemos hasta <strong>2 vehículos a la vez</strong>. Citas
            confirmadas manualmente, preferentemente por WhatsApp.
          </p>
        </div>
        <div>
          <h4>Empresa</h4>
          <p>
            <Link to="/about" className="footer-highlight-link">
              Sobre Nosotros
            </Link>
          </p>
        </div>
      </div>

      <div className="app-footer-bottom">
        <small>
          © {new Date().getFullYear()} · <strong>Auto Mecánica El Cardonal</strong>.
          Todos los derechos reservados.
        </small>
      </div>
    </footer>
  )
}

export default Footer
