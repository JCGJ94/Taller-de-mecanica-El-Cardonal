import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout.jsx'
import HomePage from '@/pages/home/HomePage.jsx'
import AboutPage from '@/pages/about/AboutPage.jsx'
import NotFoundPage from '@/pages/common/NotFoundPage.jsx'

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
