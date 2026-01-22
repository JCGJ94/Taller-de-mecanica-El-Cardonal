import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Analytics (GTM-first)
 * - Carga GTM correctamente
 * - Empuja page_view en SPA
 * - Empuja eventos personalizados al dataLayer
 */

const GTM_LAYER_NAME = 'dataLayer'

const loadGTM = (gtmId) => {
  if (!gtmId) return
  if (window.gtmInitialized) return

  window.gtmInitialized = true
  window[GTM_LAYER_NAME] = window[GTM_LAYER_NAME] || []

    ; (function (w, d, s, l, i) {
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

  // helper simple para leer cookie
  const getCookie = (name) => {
    const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    return match ? decodeURIComponent(match[2]) : null;
  };

  // Page views en SPA (solo si hay consentimiento)
  useEffect(() => {
    const analytics = getCookie("consent_analytics") === "granted";
    const marketing = getCookie("consent_marketing") === "granted";

    // Si no hay consentimiento de analítica ni marketing, no empujamos page_view
    if (!analytics && !marketing) return;

    pushToDataLayer({
      event: "page_view",
      page_path: location.pathname + location.search,
      page_title: document.title,
    });
  }, [location.pathname, location.search]);

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
