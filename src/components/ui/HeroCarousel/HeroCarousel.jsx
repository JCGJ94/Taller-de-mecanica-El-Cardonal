import React, { useState, useEffect } from 'react'
import './HeroCarousel.css'

const CAROUSEL_IMAGES = ['/hero-1.png', '/hero-2.png', '/hero-3.png'] 
const TRANSITION_INTERVAL = 5000 

function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % CAROUSEL_IMAGES.length)
    }, TRANSITION_INTERVAL)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="hero-carousel">
      {CAROUSEL_IMAGES.map((image, index) => (
        <div
          key={image}
          className={`hero-carousel-slide ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      <div className="hero-carousel-overlay" />
    </div>
  )
}

export default HeroCarousel
