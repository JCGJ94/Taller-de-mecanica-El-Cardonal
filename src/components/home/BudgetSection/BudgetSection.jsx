import React from 'react'
import BudgetForm from '@/components/ui/BudgetForm/BudgetForm.jsx'
import ScrollNextButton from '@/components/ui/ScrollNextButton/ScrollNextButton.jsx'
import './BudgetSection.css'

function BudgetSection() {
  return (
    <section id="budget" className="section-card budget-section">
      <h2 className="budget-title">Solicita presupuesto online</h2>
      <p className="section-subtitle">
        Rellena el formulario y te responderemos con un presupuesto orientativo o una
        cita para ver el vehículo en el taller.
      </p>

      <BudgetForm />

      <ScrollNextButton targetId="contact" />
    </section>
  )
}

export default BudgetSection
