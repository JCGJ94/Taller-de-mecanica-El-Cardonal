import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Analytics (GTM-first)
 * - Carga GTM correctamente
 * - Empuja page_view en SPA
 * - Empuja eventos personalizados al dataLayer
 *
 * Recomendación 2025:
 * - GA4 y Google Ads: configurarlos en GTM (no en código con gtag/react-ga4)
 */

const GTM_LAYER_NAME = 'dataLayer'

const loadGTM = (gtmId) => {
  if (!gtmId) return
  if (window.gtmInitialized) return

  window.gtmInitialized = true
  window[GTM_LAYER_NAME] = window[GTM_LAYER_NAME] || []

  ;(function (w, d, s, l, i) {
    w[l] = w[l] || []
    w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' })
    const f = d.getElementsByTagName(s)[0]
    const j = d.createElement(s)
    const dl = l !== 'dataLayer' ? '&l=' + l : ''
    j.async = true
    j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl
    f.parentNode.insertBefore(j, f)
  })(window, document, 'script', GTM_LAYER_NAME, gtmId)
}

const pushToDataLayer = (payload) => {
  window[GTM_LAYER_NAME] = window[GTM_LAYER_NAME] || []
  window[GTM_LAYER_NAME].push(payload)
}

const Analytics = () => {
  const location = useLocation()

  // 1) Cargar GTM una vez
  useEffect(() => {
    const gtmId = import.meta.env.VITE_GTM_ID
    loadGTM(gtmId)
  }, [])

  // 2) Page views en SPA (cada cambio de ruta)
  useEffect(() => {
    pushToDataLayer({
      event: 'page_view',
      page_path: location.pathname + location.search,
      page_title: document.title,
    })
  }, [location])

  return null
}

export const trackEvent = (eventName, eventData = {}) => {
  pushToDataLayer({
    event: eventName,
    ...eventData,
  })
}

export const trackConversion = (eventName = 'conversion', data = {}) => {
  pushToDataLayer({
    event: eventName,
    ...data,
  })
}

export default Analytics
