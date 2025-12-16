import React, { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import Toast from '@/components/ui/Toast/Toast.jsx'
import { trackEvent } from '@/components/Analytics/Analytics.jsx'
import './BudgetForm.css'
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY
} from '@/config/emailjsConfig'

const initialForm = {
  name: '',
  phone: '',
  email: '',
  brand: '',
  model: '',
  plate: '',
  service: '',
  message: ''
}

function BudgetForm() {
  const [formData, setFormData] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ loading: false, success: null, message: '' })
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY) {
      emailjs.init(EMAILJS_PUBLIC_KEY)
    } else {
      console.error('EmailJS Public Key is missing. Please check your .env file.')
    }
  }, [])

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'El nombre es obligatorio.'
    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es obligatorio.'
    } else if (!/^\+?\d{7,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Introduce un teléfono válido.'
    }
    if (!formData.email.trim()) newErrors.email = 'El email es obligatorio.'
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Introduce un email válido.'
    }
    if (!formData.service.trim()) newErrors.service = 'Indica el servicio.'
    if (!formData.message.trim()) newErrors.message = 'Cuéntanos qué le ocurre al vehículo.'
    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // 🔧 FIX: Obtener valores directamente del formulario
    const form = e.currentTarget
    const currentFormData = {
      name: form.name.value,
      phone: form.phone.value,
      email: form.email.value,
      brand: form.brand.value,
      model: form.model.value,
      plate: form.plate.value,
      service: form.service.value,
      message: form.message.value
    }

    const validationErrors = validate()
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setStatus({
        loading: false,
        success: false,
        message: 'Error de configuración. Por favor, contacta con nosotros por WhatsApp o email.'
      })
      setShowToast(true)
      console.error('EmailJS configuration is incomplete. Please check your .env file.')
      return
    }

    setStatus({ loading: true, success: null, message: '' })

    try {
      const templateParams = {
        nombre: currentFormData.name,
        telefono: currentFormData.phone,
        email: currentFormData.email,
        marca: currentFormData.brand,
        modelo: currentFormData.model,
        matricula: currentFormData.plate,
        servicio: currentFormData.service,
        mensaje: currentFormData.message
      }

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )

      // ✅ ÚNICA FUENTE: empujar evento a GTM
      // En GTM: trigger "Custom Event = form_submission"
      // y ahí disparas GA4 + Ads conversion.
      trackEvent('form_submission', {
        form_type: 'budget',
        service: currentFormData.service,
        value: 50,
        currency: 'EUR'
      })

      setStatus({
        loading: false,
        success: true,
        message: '¡Solicitud enviada! Te responderemos lo antes posible.'
      })
      setShowToast(true)
      setFormData(initialForm)
      setErrors({})
    } catch (err) {
      console.error('EmailJS Error:', err)
      setStatus({
        loading: false,
        success: false,
        message: 'Ha ocurrido un error al enviar el formulario. Puedes escribirnos por WhatsApp o email.'
      })
      setShowToast(true)
    }
  }

  return (
    <form className="budget-form" onSubmit={handleSubmit} noValidate>
      <div className="budget-row">
        <label>
          Nombre y apellidos *
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ej. Juan Pérez"
          />
          {errors.name && <span className="error-text">{errors.name}</span>}
        </label>

        <label>
          Teléfono *
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Ej. 600 000 000"
          />
          {errors.phone && <span className="error-text">{errors.phone}</span>}
        </label>
      </div>

      <div className="budget-row">
        <label>
          Email *
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="tuemail@ejemplo.com"
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </label>
      </div>

      <div className="budget-row">
        <label>
          Marca
          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            placeholder="Ej. Renault"
          />
        </label>

        <label>
          Modelo
          <input
            type="text"
            name="model"
            value={formData.model}
            onChange={handleChange}
            placeholder="Ej. Clio 1.5 dCi"
          />
        </label>

        <label>
          Matrícula
          <input
            type="text"
            name="plate"
            value={formData.plate}
            onChange={handleChange}
            placeholder="Ej. 1234 ABC"
          />
        </label>
      </div>

      <div className="budget-row">
        <label>
          Servicio que necesitas *
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
          >
            <option value="">Selecciona una opción</option>
            <option value="Pre-ITV">Pre-ITV</option>
            <option value="Diagnosis">Diagnosis</option>
            <option value="Revisión rápida / mantenimiento">
              Revisión rápida / mantenimiento
            </option>
            <option value="Aceite y filtros">Aceite y filtros</option>
            <option value="Frenos o suspensión">Frenos o suspensión</option>
            <option value="Otro">Otro</option>
          </select>
          {errors.service && <span className="error-text">{errors.service}</span>}
        </label>
      </div>

      <label>
        Descripción del problema / trabajo a realizar *
        <textarea
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          placeholder="Cuéntanos qué notas en el coche, ruidos, luces de avería, etc."
        />
        {errors.message && <span className="error-text">{errors.message}</span>}
      </label>

      <div className="budget-actions">
        <button type="submit" className="btn-blue" disabled={status.loading}>
          {status.loading ? 'Enviando...' : 'Enviar solicitud de presupuesto'}
        </button>

        <a
          href={`https://wa.me/34685562049?text=${encodeURIComponent(
            'Hola, quiero un presupuesto para mi coche (he visto el formulario en la web).'
          )}`}
          className="btn-whatsapp-secondary"
          target="_blank"
          rel="noreferrer"
        >
          Preferiría hablar por WhatsApp
        </a>
      </div>

      {showToast && status.message && (
        <Toast
          message={status.message}
          type={status.success ? 'success' : 'error'}
          onClose={() => setShowToast(false)}
        />
      )}
    </form>
  )
}

export default BudgetForm
