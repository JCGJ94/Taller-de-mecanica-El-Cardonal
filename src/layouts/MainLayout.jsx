import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import './MainLayout.css'

function MainLayout() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <h1 className="app-logo">Mi Proyecto</h1>
        <nav className="app-nav">
          <NavLink to="/" end>
            Inicio
          </NavLink>
          <NavLink to="/about">Sobre mí</NavLink>
        </nav>
      </header>

      <main className="app-main">
        <Outlet />
      </main>

      <footer className="app-footer">
        <small>© {new Date().getFullYear()} · Mi Proyecto</small>
      </footer>
    </div>
  )
}

export default MainLayout
