import React from 'react'
import { Link } from 'react-router-dom'
import { SERVICES } from '@/utils/servicesData.js'
import ScrollNextButton from '@/components/ui/ScrollNextButton/ScrollNextButton.jsx'
import './ServicesSection.css'

function ServicesSection() {
  return (
    <section id="services" className="section-card services-section">
      <h2 className="services-main-title">Nuestros Servicios Especializados</h2>
      <p className="section-subtitle">
        Mantenimiento profesional para que tu coche pase la ITV y siga funcionando como el
        primer día.
      </p>

      <div className="home-services-grid">
        {SERVICES.map(service => (
          <Link
            key={service.id}
            to={`/servicios/${service.id}`}
            className="service-card-link"
            style={{ "--service-color": service.color }}
          >
            <article className="service-card">
              <div className="service-card-header">
                <h3>{service.name}</h3>
                <div className="service-card-icon">
                  <service.icon />
                </div>
              </div>
              <p>{service.shortDescription}</p>
              <div className="service-meta">
                {service.duration && <span className="service-duration">⏱️ {service.duration}</span>}
                <span className="service-price">💰 Precio según vehículo</span>
              </div>
              <div className="service-card-footer">
                <span className="service-learn-more">Ver detalles →</span>
              </div>
            </article>
          </Link>
        ))}
      </div>

      <ScrollNextButton targetId="process" />
    </section>
  )
}

export default ServicesSection
