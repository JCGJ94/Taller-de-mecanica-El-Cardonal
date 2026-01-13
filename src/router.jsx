import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout/MainLayout.jsx'
import HomePage from '@/pages/home/HomePage/HomePage.jsx'
import AboutPage from '@/pages/about/AboutPage/AboutPage.jsx'
import ServiceDetailPage from '@/pages/services/ServiceDetailPage/ServiceDetailPage.jsx'
import NotFoundPage from '@/pages/common/NotFoundPage/NotFoundPage.jsx'
import PromoLanding from './pages/Promo/PromoLanding'
import PromoLayout from './layouts/PromoLayout/PromoLayout'

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="servicios/:serviceId" element={<ServiceDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route path="/promociones" element={<PromoLayout />}>
        <Route index element={<Navigate to="cambio-aceite" replace />} />
        <Route path=":slug" element={<PromoLanding />} />
      </Route>
    </Routes>
  )
}
