import React from 'react'
import './ContactSection.css'

function ContactSection() {
  return (
    <section id="contact" className="section-card contact-section">
      <h3>¿Prefieres email?</h3>
      <p>
        También puedes escribir a{' '}
        <a href="mailto:dautomecanicaelcardonal@gmail.com">
          dautomecanicaelcardonal@gmail.com
        </a>{' '}
        indicando tus datos y los del vehículo.
      </p>
    </section>
  )
}

export default ContactSection
