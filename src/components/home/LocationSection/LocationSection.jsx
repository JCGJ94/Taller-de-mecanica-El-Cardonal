import { FaMapMarkerAlt, FaDirections, FaClock } from 'react-icons/fa'
import './LocationSection.css'

function LocationSection() {
    return (
        <section id="location" className="location-section">
            <div className="location-container">
                <div className="location-info">
                    <div className="section-header">
                        <h2 className="fade-in">📍 Dónde Encontrarnos</h2>
                        <p className="fade-in delay-1">
                            Estamos ubicados en una zona accesible para tu comodidad.
                            Visítanos para cualquier consulta o reparación.
                        </p>
                    </div>

                    <div className="info-cards">
                        <div className="info-card fade-in delay-2">
                            <div className="icon-box">
                                <FaMapMarkerAlt />
                            </div>
                            <div className="card-content">
                                <h4>Dirección</h4>
                                <address>
                                    <p>Calle Virgen de las Nieves 6</p>
                                    <p>38108 La Laguna, Tenerife</p>
                                </address>
                            </div>
                        </div>

                        <div className="info-card fade-in delay-3">
                            <div className="icon-box">
                                <FaClock />
                            </div>
                            <div className="card-content">
                                <h4>Horario</h4>
                                <p>Lunes - Viernes: 8:00 - 18:00</p>
                                <p>Sábados: 9:00 - 13:00</p>
                            </div>
                        </div>
                    </div>

                    <a
                        href="https://maps.app.goo.gl/uK4TozMcRhQirSwB9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="location-btn fade-in delay-4"
                    >
                        <FaDirections className="btn-icon" />
                        <span>Cómo llegar</span>
                    </a>
                </div>

                <div className="map-wrapper fade-in delay-5">
                    <div className="map-container">
                        <iframe
                            title="Ubicación del Taller"
                            src="https://maps.google.com/maps?q=Calle+Virgen+de+las+Nieves+6,+38108+La+Laguna,+Tenerife&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LocationSection
