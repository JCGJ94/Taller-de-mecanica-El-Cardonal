import React from 'react'
import { SERVICES } from '@/utils/servicesData.js'
import BudgetForm from '@/components/ui/BudgetForm.jsx'
import ScrollNextButton from '@/components/ui/ScrollNextButton.jsx'

const WHATSAPP_NUMBER = '34685652049'
const PRESUPUESTO_TEXT = encodeURIComponent(
  'Hola, quiero un presupuesto.\n\nMarca:\nModelo:\nMatrícula:\nServicio que necesito:'
)

function HomePage() {
  return (
    <div className="home">
      {/* HERO */}
      <section id="hero" className="home-hero">
        <div className="home-hero-inner">
          <div className="home-hero-header">
            <div className="hero-logo">
              {/* Versión clara del logo, cuando la tengas optimizada cámbiala aquí */}
              <img src="/logo-cardonal.png" alt="Auto Mecánica El Cardonal" />
            </div>
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
          </div>

          <ul className="home-hero-badges">
            <li>Hasta 2 vehículos a la vez</li>
            <li>Horarios amplios entre semana</li>
            <li>Respuesta rápida por WhatsApp y email</li>
          </ul>

          <ScrollNextButton targetId="services" label="Ver servicios" />
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="services" className="home-services">
        <h3>Servicios principales</h3>
        <p className="section-subtitle">
          Mantenimiento rápido para que tu coche pase la ITV y siga funcionando como el
          primer día.
        </p>

        <div className="home-services-grid">
          {SERVICES.map(service => (
            <article key={service.id} className="service-card">
              <h4>{service.name}</h4>
              <p>{service.shortDescription}</p>
              <div className="service-meta">
                {service.duration && (
                  <span>Duración orientativa: {service.duration}</span>
                )}
                <span>Precio: según vehículo y trabajo</span>
              </div>
            </article>
          ))}
        </div>

        <ScrollNextButton targetId="process" label="Cómo trabajamos" />
      </section>

      {/* CÓMO FUNCIONA */}
      <section id="process" className="home-how">
        <h3>Cómo funciona la cita online</h3>
        <ol className="steps">
          <li>
            <strong>1. Escríbenos por WhatsApp</strong>
            <span>
              Indica marca, modelo y matrícula, y qué notas en el coche o qué servicio
              quieres.
            </span>
          </li>
          <li>
            <strong>2. Te damos hora y presupuesto orientativo</strong>
            <span>
              Confirmamos la cita manualmente para asegurar hueco en uno de los dos
              elevadores.
            </span>
          </li>
          <li>
            <strong>3. Traes el coche al taller</strong>
            <span>
              Hacemos la diagnosis, revisión o reparación y te avisamos cuando esté listo.
            </span>
          </li>
        </ol>

        <ScrollNextButton targetId="budget" label="Solicitar presupuesto" />
      </section>

      {/* FORMULARIO PRESUPUESTO */}
      <section id="budget" className="home-budget">
        <h3>Solicita presupuesto online</h3>
        <p className="section-subtitle">
          Rellena el formulario y te responderemos con un presupuesto orientativo o una
          cita para ver el vehículo en el taller.
        </p>
        <BudgetForm />

        <ScrollNextButton targetId="contact" label="Ver otros medios de contacto" />
      </section>

      {/* CONTACTO EMAIL */}
      <section id="contact" className="home-contact">
        <h3>¿Prefieres email?</h3>
        <p>
          También puedes escribir a{' '}
          <a href="mailto:dautomecanicaelcardonal@gmail.com">
            dautomecanicaelcardonal@gmail.com
          </a>{' '}
          indicando tus datos y los del vehículo.
        </p>
      </section>
    </div>
  )
}

export default HomePage
