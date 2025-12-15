/**
 * Archivo de utilidades para rastrear eventos de Google Analytics y Google Ads
 * Importa estas funciones donde necesites rastrear eventos
 */

import { trackEvent, trackConversion } from '@/components/Analytics/Analytics.jsx'

// Eventos de servicio
export const trackServiceClick = (serviceId, serviceName) => {
  trackEvent('service_click', {
    service_id: serviceId,
    service_name: serviceName,
  })
}

export const trackServiceView = (serviceId, serviceName) => {
  trackEvent('service_view', {
    service_id: serviceId,
    service_name: serviceName,
  })
}

// Eventos de contacto
export const trackContactClick = (contactMethod) => {
  trackEvent('contact_click', {
    contact_method: contactMethod, // 'whatsapp', 'phone', 'email', 'form'
  })
}

export const trackWhatsAppClick = () => {
  trackEvent('whatsapp_click', {
    category: 'engagement',
  })
}

export const trackPhoneClick = (phoneNumber) => {
  trackEvent('phone_click', {
    phone_number: phoneNumber,
    category: 'engagement',
  })
}

// Eventos de formulario
export const trackFormStart = (formType) => {
  trackEvent('form_start', {
    form_type: formType, // 'budget', 'contact', etc.
  })
}

export const trackFormError = (formType, errorField) => {
  trackEvent('form_error', {
    form_type: formType,
    error_field: errorField,
  })
}

// Eventos de navegación
export const trackNavigation = (destination) => {
  trackEvent('navigation', {
    destination: destination,
  })
}

// Eventos de scroll
export const trackSectionScroll = (sectionName) => {
  trackEvent('section_scroll', {
    section_name: sectionName,
  })
}

// Eventos de conversión (ventas, leads, etc)
export const trackLeadGeneration = (leadType) => {
  trackEvent('lead', {
    lead_type: leadType, // 'budget_request', 'contact_form', etc.
  })

  // Rastrear conversión en Google Ads
  const conversionId = import.meta.env.VITE_GOOGLE_ADS_CONVERSION_ID
  const conversionLabel = import.meta.env.VITE_GOOGLE_ADS_CONVERSION_LABEL
  if (conversionId && conversionLabel) {
    trackConversion(conversionId, conversionLabel, 1.0, 'EUR')
  }
}

// Eventos de búsqueda
export const trackSearch = (searchQuery) => {
  trackEvent('search', {
    search_query: searchQuery,
  })
}

// Eventos personalizados genéricos
export const trackCustomEvent = (eventName, data = {}) => {
  trackEvent(eventName, data)
}

// Rastrear tiempo en página
export const trackTimeOnPage = (pageName, timeInSeconds) => {
  trackEvent('page_duration', {
    page_name: pageName,
    duration_seconds: timeInSeconds,
  })
}

// Rastrear scroll depth (porcentaje de página scrolleada)
export const trackScrollDepth = (pageName, scrollPercentage) => {
  trackEvent('scroll_depth', {
    page_name: pageName,
    scroll_percentage: scrollPercentage,
  })
}
