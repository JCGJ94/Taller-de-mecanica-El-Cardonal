import { useEffect, useRef } from 'react'
import { trackScrollDepth, trackTimeOnPage } from '@/utils/trackingEvents'

/**
 * Hook para rastrear automáticamente:
 * - Tiempo en página
 * - Scroll depth (porcentaje scrolleado)
 * - Visibilidad de elementos
 */
export const usePageTracking = (pageName) => {
  const timeStartRef = useRef(Date.now())
  const maxScrollDepthRef = useRef(0)

  useEffect(() => {
    // Rastrear tiempo en página
    const handleBeforeUnload = () => {
      const timeOnPage = (Date.now() - timeStartRef.current) / 1000 // convertir a segundos
      if (timeOnPage > 3) {
        // Solo rastrear si pasó más de 3 segundos
        trackTimeOnPage(pageName, Math.round(timeOnPage))
      }
    }

    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
      const timeOnPage = (Date.now() - timeStartRef.current) / 1000
      if (timeOnPage > 3) {
        trackTimeOnPage(pageName, Math.round(timeOnPage))
      }
    }
  }, [pageName])

  useEffect(() => {
    // Rastrear scroll depth
    const handleScroll = () => {
      const scrollPercentage = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      )

      if (scrollPercentage > maxScrollDepthRef.current) {
        maxScrollDepthRef.current = scrollPercentage

        // Rastrear en hitos importantes: 25%, 50%, 75%, 100%
        if ([25, 50, 75, 100].includes(scrollPercentage)) {
          trackScrollDepth(pageName, scrollPercentage)
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pageName])
}

/**
 * Hook para rastrear cuando un elemento es visible en pantalla
 */
export const useElementTracking = (elementRef, eventName, trackingData = {}) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // El elemento es visible en pantalla
          const trackEvent = require('@/components/Analytics/Analytics.jsx').trackEvent
          trackEvent(eventName, {
            ...trackingData,
            element_visible: true,
          })
          // Dejar de observar después de rastrearlo una vez
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.5 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [eventName, trackingData])
}
