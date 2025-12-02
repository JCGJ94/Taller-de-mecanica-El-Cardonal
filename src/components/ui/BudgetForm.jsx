import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
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

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'El nombre es obligatorio.'
    if (!formData.phone.trim()) newErrors.phone = 'El teléfono es obligatorio.'
    if (!/^\+?\d{7,15}$/.test(formData.phone.trim()))
      newErrors.phone = 'Introduce un teléfono válido.'
    if (!formData.email.trim()) newErrors.email = 'El email es obligatorio.'
    if (
      formData.email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      newErrors.email = 'Introduce un email válido.'
    }
    if (!formData.service.trim()) newErrors.service = 'Indica el servicio.'
    if (!formData.message.trim())
      newErrors.message = 'Cuéntanos qué le ocurre al vehículo.'

    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) return

    setStatus({ loading: true, success: null, message: '' })

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_phone: formData.phone,
          from_email: formData.email,
          vehicle_brand: formData.brand,
          vehicle_model: formData.model,
          vehicle_plate: formData.plate,
          requested_service: formData.service,
          message: formData.message
        },
        EMAILJS_PUBLIC_KEY
      )

      setStatus({
        loading: false,
        success: true,
        message: '¡Solicitud enviada! Te responderemos lo antes posible.'
      })
      setFormData(initialForm)
      setErrors({})
    } catch (err) {
      console.error(err)
      setStatus({
        loading: false,
        success: false,
        message:
          'Ha ocurrido un error al enviar el formulario. Puedes escribirnos por WhatsApp o email.'
      })
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
        <button type="submit" className="btn-primary" disabled={status.loading}>
          {status.loading ? 'Enviando...' : 'Enviar solicitud de presupuesto'}
        </button>

        <a
          href={`https://wa.me/34685652049?text=${encodeURIComponent(
            'Hola, quiero un presupuesto para mi coche (he visto el formulario en la web).'
          )}`}
          className="btn-whatsapp-secondary"
          target="_blank"
          rel="noreferrer"
        >
          Preferiría hablar por WhatsApp
        </a>
      </div>

      {status.message && (
        <p
          className={`status-message ${
            status.success ? 'status-success' : 'status-error'
          }`}
        >
          {status.message}
        </p>
      )}
    </form>
  )
}

export default BudgetForm
