import { useEffect, useState } from 'react'

export function useSectionObserver(sectionIds = []) {
  const [activeSection, setActiveSection] = useState(null)

  useEffect(() => {
    const observers = []

    sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
          }
        },
        { threshold: 0.4 }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => {
      observers.forEach(o => o.disconnect())
    }
  }, [sectionIds.join(',')])

  return activeSection
}
