import React from 'react'

function ScrollNextButton({ targetId, label = 'Siguiente sección' }) {
  const handleClick = () => {
    const el = document.getElementById(targetId)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <button type="button" className="scroll-next" onClick={handleClick}>
      {label} <span>↓</span>
    </button>
  )
}

export default ScrollNextButton
