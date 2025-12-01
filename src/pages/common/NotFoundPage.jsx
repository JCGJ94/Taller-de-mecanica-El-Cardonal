import React from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section>
      <h2>Página no encontrada</h2>
      <p>Ups, la ruta que has puesto no existe.</p>
      <Link to="/">Volver al inicio</Link>
    </section>
  )
}

export default NotFoundPage
