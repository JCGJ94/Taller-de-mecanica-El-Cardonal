import React from 'react'
import ScrollNextButton from '@/components/ui/ScrollNextButton/ScrollNextButton.jsx'
import './ProcessSection.css'

function ProcessSection() {
  return (
    <section id="process" className="section-card process-section">
      <h2>Cómo funciona la cita online</h2>
      <ol className="steps">
        <li>
          <div className="step-icon">💬</div>
          <div className="step-content">
            <strong>1. Escríbenos por WhatsApp o correo electrónico</strong>
            <span>
              Indica marca, modelo y matrícula, y qué notas en el coche o qué servicio
              quieres.
            </span>
          </div>
        </li>
        <li>
          <div className="step-icon">📅</div>
          <div className="step-content">
            <strong>2. Te damos hora y presupuesto orientativo</strong>
            <span>
              Confirmamos la cita manualmente para asegurar hueco en uno de los dos
              elevadores.
            </span>
          </div>
        </li>
        <li>
          <div className="step-icon">🔧</div>
          <div className="step-content">
            <strong>3. Traes el coche al taller</strong>
            <span>
              Hacemos la diagnosis, revisión o reparación y te avisamos cuando esté listo.
            </span>
          </div>
        </li>
      </ol>

      <ScrollNextButton targetId="budget" />
    </section>
  )
}

export default ProcessSection
