
import { useEffect, useMemo, useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'

import SEO from '@/components/common/SEO/SEO.jsx'
import StructuredData from '@/components/seo/StructuredData/StructuredData.jsx'
import Toast from '@/components/ui/Toast/Toast.jsx'
import { PROMOTIONS } from '@/utils/promotionsData'

import { usePageTracking } from '@/hooks/usePageTracking'
import './PromoLanding.css'
import { FaDirections } from 'react-icons/fa'

function buildWhatsAppLink({ whatsapp, whatsappPrefill }) {
  const num = String(whatsapp || '').replace(/\D/g, '')
  const text = encodeURIComponent(whatsappPrefill || '')
  return num ? `https://wa.me/${num}?text=${text}` : '#'
}

function buildTelLink(phone) {
  const cleaned = String(phone || '').replace(/\s/g, '')
  return phone ? `tel:${cleaned}` : '#'
}

export default function PromoLanding() {
  const { slug } = useParams()

  const promo = useMemo(() => PROMOTIONS.find((p) => p.slug === slug), [slug])

  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    setShowToast(true)
  }, [slug])

  usePageTracking?.(`promo_${slug}`)

  if (!promo) return <Navigate to="/404" replace />

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

      {/* Schema básico tipo Service */}
      <StructuredData
        type="Service"
        data={{
          name: promo.hero?.headline || promo.seoTitle,
          description: promo.seoDescription,
        }}
      />

      <main className="promo-page">
        {/* HERO */}
        <section className="section-card promo-hero">
          <h1 className="promo-title">{promo.hero.headline}</h1>
          <p className="promo-price">{promo.hero.price}</p>
          <p className="section-subtitle">{promo.hero.subheadline}</p>

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
            {promo.testimonials.items.map((t, i) => (
              <div key={i} className="promo-card">
                <div className="promo-stars">{'⭐'.repeat(t.stars)}</div>
                <p>{t.text}</p>
              </div>
            ))}
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
          <h2>{promo.location.title}</h2>
          <a
            href="https://maps.app.goo.gl/EuRMqU3HzCmHWwx27"
            target="_blank"
            rel="noopener noreferrer"
            className="location-btn fade-in delay-4"
          >
          <p>📍 Estamos en: {promo.location.addressLine1}</p>
          </a>
          <h3 className='locationsH3'>🕒 Horario</h3>
          <ul className="promo-list">
            {promo.location.hours.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>

          <p>📲 WhatsApp / Teléfono: {promo.contact.phone}</p>
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
