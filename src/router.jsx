import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout/MainLayout.jsx'
import HomePage from '@/pages/home/HomePage/HomePage.jsx'
import AboutPage from '@/pages/about/AboutPage/AboutPage.jsx'
import ServiceDetailPage from '@/pages/services/ServiceDetailPage/ServiceDetailPage.jsx'
import NotFoundPage from '@/pages/common/NotFoundPage/NotFoundPage.jsx'

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="servicios/:serviceId" element={<ServiceDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
