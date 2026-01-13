import React from 'react'
import { Outlet } from 'react-router-dom'
import ScrollToTop from '@/components/layout/ScrollToTop/ScrollToTop.jsx'
import ScrollTopButton from '@/components/ui/ScrollTopButton/ScrollTopButton.jsx'
import './PromoLayout.css'

export default function PromoLayout() {
  return (
    <div className="app-shell">
      <ScrollToTop>
        <main className="app-main">
          <Outlet />
        </main>
        <ScrollTopButton />
      </ScrollToTop>
    </div>
  )
}
