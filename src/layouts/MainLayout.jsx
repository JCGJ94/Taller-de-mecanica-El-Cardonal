import React from 'react'
import { Outlet } from 'react-router-dom'
import ScrollToTop from '@/components/layout/ScrollToTop.jsx'
import Navbar from '@/components/layout/Navbar.jsx'
import Footer from '@/components/layout/Footer.jsx'
import ScrollTopButton from '@/components/ui/ScrollTopButton.jsx'
import { useSectionObserver } from '@/hooks/useSectionObserver'
import './MainLayout.css'

function MainLayout() {
  const activeSection = useSectionObserver([
    'hero',
    'services',
    'process',
    'budget',
    'contact'
  ])

  return (
    <div className="app-shell">
      <ScrollToTop>
        <Navbar activeSection={activeSection} />

        <main className="app-main">
          <Outlet />
        </main>

        <Footer />

        <ScrollTopButton />
      </ScrollToTop>
    </div>
  )
}

export default MainLayout
