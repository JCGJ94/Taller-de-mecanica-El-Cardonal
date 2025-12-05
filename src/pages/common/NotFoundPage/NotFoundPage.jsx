import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '@/components/common/SEO/SEO.jsx'
import './NotFoundPage.css'

function NotFoundPage() {
  return (
    <>
      <SEO
        title="Página no encontrada - Taller El Cardonal"
        description="La página que buscas no existe."
        noindex={true}
      />

      <section className="notfound">
        <div className="notfound-inner">
          <div className="notfound-logo">
            <img src="/logo.svg" alt="Auto Mecánica El Cardonal" />
          </div>

          <h1 className="notfound-code">404</h1>

          <h2 className="notfound-title">Página no encontrada</h2>
          <p className="notfound-text">
            Parece que este taller no existe en la ruta que has escrito. <br />
            Revisa la dirección o vuelve al inicio para seguir navegando.
          </p>

          <div className="notfound-actions">
            <Link to="/" className="btn-primary">
              Volver al inicio
            </Link>
            <a
              href="https://wa.me/34685562049?text=Hola,%20he%20tenido%20un%20problema%20al%20navegar%20por%20la%20web."
              className="btn-secondary"
              target="_blank"
              rel="noreferrer"
            >
              Informar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default NotFoundPage
