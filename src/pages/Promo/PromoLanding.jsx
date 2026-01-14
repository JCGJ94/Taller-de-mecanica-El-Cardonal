// src/pages/Promo/PromoLanding.jsx
import { useEffect, useMemo, useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'

import SEO from '@/components/common/SEO/SEO.jsx'
import StructuredData from '@/components/seo/StructuredData/StructuredData.jsx'
import Toast from '@/components/ui/Toast/Toast.jsx'
import { PROMOTIONS } from '@/utils/promotionsData'
import { fetchGoogleReviews } from '@/services/googlePlacesService'

import './PromoLanding.css'
import LocationSection from '../../components/home/LocationSection/LocationSection'

function buildWhatsAppLink({ whatsapp, whatsappPrefill }) {
  const num = String(whatsapp || '').replace(/\D/g, '')
  const text = encodeURIComponent(whatsappPrefill || '')
  return num ? `https://wa.me/${num}?text=${text}` : '#'
}

function buildTelLink(phone) {
  const cleaned = String(phone || '').replace(/\s/g, '')
  return phone ? `tel:${cleaned}` : '#'
}

function truncate(text, max = 220) {
  const t = String(text || '').trim()
  if (t.length <= max) return { short: t, isLong: false }
  return { short: t.slice(0, max).trimEnd() + '…', isLong: true }
}

export default function PromoLanding() {
  const { slug } = useParams()
  const promo = useMemo(() => PROMOTIONS.find((p) => p.slug === slug), [slug])

  const [showToast, setShowToast] = useState(false)
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  const [reviews, setReviews] = useState([])
  const [reviewsLoading, setReviewsLoading] = useState(true)
  const [expanded, setExpanded] = useState({})

  const toggleExpanded = (i) => setExpanded((prev) => ({ ...prev, [i]: !prev[i] }))

  useEffect(() => {
    window.scrollTo(0, 0)
    setShowToast(true)
    const timer = setTimeout(() => setShowToast(false), 5000)
    return () => clearTimeout(timer)
  }, [slug])

  useEffect(() => {
    const targetDate = new Date('2026-02-01T00:00:00')

    const updateCountdown = () => {
      const now = new Date()
      const diff = targetDate - now

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24))
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((diff % (1000 * 60)) / 1000)
        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (!promo) return

    const loadReviews = async () => {
      const googleReviews = await fetchGoogleReviews()
      // ✅ filtrado lo haces en backend. Aquí solo fallback.
      setReviews(googleReviews.length > 0 ? googleReviews : promo.testimonials.items)
      setReviewsLoading(false)
    }

    loadReviews()
  }, [promo])

  const targetDate = new Date('2026-02-01T00:00:00')
  const isExpired = new Date() >= targetDate

  if (!promo || isExpired) return <Navigate to="/404" replace />

  const waLink = buildWhatsAppLink(promo.contact)
  const telLink = buildTelLink(promo.contact.phone)

  return (
    <>
      <SEO
        title={promo.seoTitle}
        description={promo.seoDescription}
        canonicalUrl={`/promociones/${promo.slug}`}
        keywords="cambio de aceite, taller mecánico, mantenimiento coche, aceite y filtro"
      />

      <StructuredData
        type="Service"
        data={{
          name: promo.hero?.headline || promo.seoTitle,
          description: promo.seoDescription,
        }}
      />

      {/* Contador flotante */}
      <div className="promo-countdown">
        <div className="countdown-container">
          <span className="countdown-label">¡Promoción termina en!</span>
          <div className="countdown-timer">
            <div className="time-unit">
              <span className="time-value">{timeLeft.days}</span>
              <span className="time-label">Días</span>
            </div>
            <div className="time-unit">
              <span className="time-value">{timeLeft.hours}</span>
              <span className="time-label">Horas</span>
            </div>
            <div className="time-unit">
              <span className="time-value">{timeLeft.minutes}</span>
              <span className="time-label">Min</span>
            </div>
            <div className="time-unit">
              <span className="time-value">{timeLeft.seconds}</span>
              <span className="time-label">Seg</span>
            </div>
          </div>
        </div>
      </div>

      <main className="promo-page">
        {/* HERO */}
        <section className="section-card promo-hero">
          {/* Badge superior estilo campaña */}
          <div className="promo-badge-top">⚡ Promo exclusiva · Plazas limitadas</div>

          <h1 className="promo-title">{promo.hero.headline}</h1>

          <p className="promo-price">
            {promo.hero.price}
          </p>

          <p className="section-subtitle">{promo.hero.subheadline}</p>

          {/* Chips de confianza / conversión */}
          <div className="promo-chips">
            <span className="promo-chip">🛡 Garantía incluida</span>
            <span className="promo-chip">⏱ 30–45 min</span>
            <span className="promo-chip">💬 WhatsApp directo</span>
          </div>

          {/* Bullets como cards */}
          <ul className="promo-bullets">
            {promo.hero.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>

          <div className="promo-cta-row">
            <a className="btn-primary" href={waLink} target="_blank" rel="noreferrer">
              {promo.hero.primaryCta.label}
            </a>
            <a className="btn-secondary" href={telLink}>
              Llamar
            </a>
          </div>
        </section>


        {/* SECCIÓN 2 */}
        <section className="section-card">
          <h2>{promo.includes.title}</h2>
          <p className="section-subtitle">{promo.includes.intro}</p>
          <ul className="promo-list">
            {promo.includes.items.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
          <p className="promo-note">{promo.includes.note}</p>
        </section>

        {/* SECCIÓN 3 */}
        <section className="section-card">
          <h2>{promo.importance.title}</h2>
          <div className="promo-2col">
            <div className="promo-box">
              <h3>{promo.importance.badTitle}</h3>
              <ul className="promo-list">
                {promo.importance.badPoints.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
            <div className="promo-box">
              <h3>{promo.importance.goodTitle}</h3>
              <ul className="promo-list">
                {promo.importance.goodPoints.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SECCIÓN 4 */}
        <section className="section-card">
          <h2>{promo.whyUs.title}</h2>
          <ul className="promo-grid">
            {promo.whyUs.points.map((p) => (
              <li key={p} className="promo-card">
                {p}
              </li>
            ))}
          </ul>
          <p className="promo-trust">{promo.whyUs.trustLine}</p>
        </section>

        {/* SECCIÓN 5 */}
        <section className="section-card promo-offer">
          <p className="promo-badge">{promo.offer.badge}</p>
          <h2>{promo.offer.title}</h2>
          <ul className="promo-list">
            {promo.offer.lines.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
          <p className="promo-urgency">{promo.offer.urgency}</p>
          <a className="btn-primary" href={waLink} target="_blank" rel="noreferrer">
            {promo.offer.cta.label}
          </a>
        </section>

        {/* SECCIÓN 6 */}
        <section className="section-card">
          <h2>{promo.booking.title}</h2>
          <p className="section-subtitle">{promo.booking.subtitle}</p>
          <ul className="promo-list">
            {promo.booking.channels.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>

          <div className="promo-cta-row">
            <a className="btn-primary" href={waLink} target="_blank" rel="noreferrer">
              {promo.booking.cta.label}
            </a>
            <a className="btn-secondary" href={telLink}>
              Llamar ahora
            </a>
          </div>

          <p className="promo-micro">{promo.booking.microcopy}</p>
        </section>

        {/* SECCIÓN 7 */}
        <section className="section-card">
          <h2>{promo.testimonials.title}</h2>

          <div className="promo-testimonials">
            {reviewsLoading ? (
              <p>Cargando opiniones...</p>
            ) : reviews.length > 0 ? (
              <div className="testimonials-grid">
                {reviews.slice(0, 8).map((t, i) => {
                  const author = t.author_name || 'Cliente'
                  const stars = Number(t.stars) || 0
                  const { short, isLong } = truncate(t.text, 220)
                  const isExpanded = !!expanded[i]

                  return (
                    <article key={i} className="review-card">
                      <header className="review-head">
                        <div className="review-avatar" aria-hidden="true">
                          {author.charAt(0).toUpperCase()}
                        </div>

                        <div className="review-meta">
                          <div className="review-author-row">
                            <p className="review-author-name">{author}</p>

                            <div className="review-stars" aria-label={`${stars} estrellas`}>
                              {'★'.repeat(stars)}
                              {'☆'.repeat(Math.max(0, 5 - stars))}
                            </div>
                          </div>

                          <p className="review-source">Opinión de Google</p>
                        </div>
                      </header>

                      <p className={`review-body ${isExpanded ? 'expanded' : ''}`}>
                        {isExpanded ? String(t.text || '') : short}
                      </p>

                      {isLong && (
                        <button
                          type="button"
                          className="review-more"
                          onClick={() => toggleExpanded(i)}
                        >
                          {isExpanded ? 'Ver menos' : 'Leer más'}
                        </button>
                      )}
                    </article>
                  )
                })}
              </div>
            ) : (
              <p>No hay opiniones disponibles.</p>
            )}
          </div>
        </section>

        {/* SECCIÓN 8 */}
        <section className="section-card">
          <h2>{promo.faq.title}</h2>
          <div className="promo-faq">
            {promo.faq.items.map((f) => (
              <details key={f.q} className="promo-faq-item">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* SECCIÓN 9 */}
        <section className="section-card" id="ubicacion">
          <LocationSection />
        </section>

        {/* SECCIÓN 10 */}
        <section className="section-card promo-final">
          <h2>{promo.trustFinal.title}</h2>
          <ul className="promo-list">
            {promo.trustFinal.points.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
          <a className="btn-primary" href={waLink} target="_blank" rel="noreferrer">
            {promo.trustFinal.cta.label}
          </a>
        </section>

        {/* Botón fijo WhatsApp */}
        {promo.ui?.stickyWhatsApp && (
          <a className="promo-sticky-wa btn-primary" href={waLink} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        )}
      </main>

      {showToast && (
        <Toast
          message="Esta promoción está activa hasta el 1 de febrero"
          type="success"
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  )
}
