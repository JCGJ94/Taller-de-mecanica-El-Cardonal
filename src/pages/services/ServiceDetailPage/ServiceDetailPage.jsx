import React, { useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import SEO from '@/components/common/SEO/SEO.jsx'
import StructuredData from '@/components/seo/StructuredData/StructuredData.jsx'
import { SERVICES } from '@/utils/servicesData.js'
import './ServiceDetailPage.css'

function ServiceDetailPage() {
    const { serviceId } = useParams()
    const navigate = useNavigate()

    const currentIndex = SERVICES.findIndex(s => s.id === serviceId)
    const service = SERVICES[currentIndex]

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [serviceId])

    if (!service) {
        return (
            <div className="service-detail-container">
                <div className="service-not-found">
                    <h1>Servicio no encontrado</h1>
                    <Link to="/" className="btn-primary">Volver al inicio</Link>
                </div>
            </div>
        )
    }

    const hasPrevious = currentIndex > 0
    const hasNext = currentIndex < SERVICES.length - 1
    const previousService = hasPrevious ? SERVICES[currentIndex - 1] : null
    const nextService = hasNext ? SERVICES[currentIndex + 1] : null

    // Breadcrumb data for structured data
    const breadcrumbItems = [
        { name: 'Inicio', url: '/' },
        { name: 'Servicios', url: '/#services' },
        { name: service.name, url: `/servicios/${service.id}` }
    ]

    return (
        <>
            <SEO
                title={`${service.name} - Taller El Cardonal`}
                description={service.detailedDescription.substring(0, 155) + '...'}
                keywords={`${service.name}, taller mecánico, ${service.name} El Cardonal, reparación coches, mantenimiento vehículos`}
                canonicalUrl={`/servicios/${service.id}`}
                ogImage={`/brain/${service.image}`}
            />
            <StructuredData
                type="Service"
                data={{
                    name: service.name,
                    description: service.detailedDescription
                }}
            />
            <StructuredData
                type="BreadcrumbList"
                data={{ items: breadcrumbItems }}
            />

            <div className="service-detail-container">
                <div className="service-detail-content">
                    {/* Header with image */}
                    <div className="service-detail-header">
                        <div className="service-image-container">
                            <img
                                src={`/brain/${service.image}`}
                                alt={`Servicio de ${service.name} - Taller El Cardonal`}
                                className="service-image"
                            />
                        </div>
                        <div className="service-header-info">
                            <h1 className="service-title">{service.name}</h1>
                            <div className="service-quick-info">
                                <div className="quick-info-item">
                                    <span className="info-icon">⏱️</span>
                                    <div>
                                        <span className="info-label">Duración</span>
                                        <span className="info-value">{service.duration}</span>
                                    </div>
                                </div>
                                <div className="quick-info-item">
                                    <span className="info-icon">💰</span>
                                    <div>
                                        <span className="info-label">Precio</span>
                                        <span className="info-value">Según vehículo</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Detailed Description */}
                    <section className="service-section">
                        <h2>Descripción del Servicio</h2>
                        <p className="service-detailed-description">{service.detailedDescription}</p>
                    </section>

                    {/* Benefits */}
                    <section className="service-section">
                        <h2>Beneficios</h2>
                        <ul className="service-list benefits-list">
                            {service.benefits.map((benefit, index) => (
                                <li key={index}>
                                    <span className="list-icon">✓</span>
                                    {benefit}
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* What's Included */}
                    <section className="service-section">
                        <h2>¿Qué incluye?</h2>
                        <ul className="service-list includes-list">
                            {service.includes.map((item, index) => (
                                <li key={index}>
                                    <span className="list-icon">•</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* CTA Section */}
                    <section className="service-cta">
                        <h2>¿Listo para reservar este servicio?</h2>
                        <p>Contáctanos por WhatsApp para agendar tu cita</p>
                        <a
                            href={`https://wa.me/34685562049?text=Hola,%20me%20interesa%20el%20servicio%20de%20${encodeURIComponent(service.name)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-whatsapp"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            Contactar por WhatsApp
                        </a>
                    </section>

                    {/* Pagination */}
                    <nav className="service-pagination">
                        <div className="pagination-controls">
                            {hasPrevious ? (
                                <Link
                                    to={`/servicios/${previousService.id}`}
                                    className="pagination-button prev"
                                >
                                    <span className="pagination-arrow">←</span>
                                    <div className="pagination-info">
                                        <span className="pagination-label">Anterior</span>
                                        <span className="pagination-service">{previousService.name}</span>
                                    </div>
                                </Link>
                            ) : (
                                <div className="pagination-button disabled"></div>
                            )}

                            <div className="pagination-numbers">
                                {SERVICES.map((s, index) => (
                                    <Link
                                        key={s.id}
                                        to={`/servicios/${s.id}`}
                                        className={`pagination-number ${index === currentIndex ? 'active' : ''}`}
                                        title={s.name}
                                    >
                                        {index + 1}
                                    </Link>
                                ))}
                            </div>

                            {hasNext ? (
                                <Link
                                    to={`/servicios/${nextService.id}`}
                                    className="pagination-button next"
                                >
                                    <div className="pagination-info">
                                        <span className="pagination-label">Siguiente</span>
                                        <span className="pagination-service">{nextService.name}</span>
                                    </div>
                                    <span className="pagination-arrow">→</span>
                                </Link>
                            ) : (
                                <div className="pagination-button disabled"></div>
                            )}
                        </div>

                        <Link to="/#services" className="back-to-services">
                            ← Volver a todos los servicios
                        </Link>
                    </nav>
                </div>
            </div >
        </>
    )
}

export default ServiceDetailPage
