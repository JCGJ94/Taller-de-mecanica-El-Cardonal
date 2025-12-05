import React from 'react'
import './ScrollNextButton.css'

function ScrollNextButton({ targetId, label = 'Ir a la siguiente sección' }) {
  const handleClick = () => {
    const el = document.getElementById(targetId)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <button
      type="button"
      className="scroll-next"
      onClick={handleClick}
      aria-label={label}
    >
       <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 8l6 6 6-6" />
        <path d="M6 12l6 6 6-6" />
      </svg>
    </button>
  )
}

export default ScrollNextButton
