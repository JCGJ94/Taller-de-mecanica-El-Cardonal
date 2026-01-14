import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import HeroCarousel from '@/components/ui/HeroCarousel/HeroCarousel.jsx'
import ScrollNextButton from '@/components/ui/ScrollNextButton/ScrollNextButton.jsx'
import Toast from '@/components/ui/Toast/Toast.jsx'
import './HeroSection.css'

const WHATSAPP_NUMBER = '34685562049'
const PRESUPUESTO_TEXT = encodeURIComponent(
  'Hola, quiero un presupuesto.\n\nMarca:\nModelo:\nMatrícula:\nServicio que necesito:'
)

function HeroSection() {
  const [showToast, setShowToast] = useState(false)
  const navigate = useNavigate()

  const targetDate = new Date('2026-02-01T00:00:00')
  const now = new Date()
  const isExpired = now >= targetDate

  const handlePromotionsClick = (e) => {
    if (isExpired) {
      e.preventDefault()
      setShowToast(true)
      setTimeout(() => setShowToast(false), 5000)
    } else {
      navigate('/promociones/cambio-aceite')
    }
  }

  return (
    <section id="hero" className="home-hero">
      <HeroCarousel />

      <div className="home-hero-inner">
        <div className="home-hero-header">
          <div className="hero-title-block">
            <span>Mecánica en general · Servicio rápido</span>
            <h1>Auto Mecánica El Cardonal</h1>
          </div>
        </div>

        <p>
          Taller de mecánica rápida en El Cardonal. Especialistas en Pre-ITV, revisiones
          rápidas, diagnosis y mantenimiento preventivo: aceite, filtros, frenos y
          suspensión. Procedimientos claros, tiempos controlados y comunicación directa
          por WhatsApp.
        </p>

        <div className="home-hero-actions">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              'Hola, quiero pedir cita para mi coche.'
            )}`}
            className="btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Pedir cita por WhatsApp
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${PRESUPUESTO_TEXT}`}
            className="btn-secondary"
            target="_blank"
            rel="noreferrer"
          >
            Solicitar presupuesto
          </a>
          <Link to="/promociones/cambio-aceite" className="btn-secondary" onClick={handlePromotionsClick}>
            Ver Promociones Activas
          </Link>
        </div>

        <ul className="home-hero-badges">
          <li>Hasta 2 vehículos a la vez</li>
          <li>Horarios amplios entre semana</li>
          <li>Respuesta rápida por WhatsApp y email</li>
        </ul>

        <ScrollNextButton targetId="services" />
      </div>

      {showToast && (
        <Toast
          message="No hay promociones disponibles"
          type="info"
          onClose={() => setShowToast(false)}
        />
      )}
    </section>
  )
}

export default HeroSection
