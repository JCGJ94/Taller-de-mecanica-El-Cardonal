import { FaMapMarkerAlt, FaDirections } from 'react-icons/fa'
import './LocationSection.css'

function LocationSection() {
    return (
        <section id="location" className="location-section">
            <div className="location-container">
                <div className="location-info">
                    <h3>Dónde Encontrarnos</h3>
                    <p>
                        Estamos ubicados en una zona accesible para tu comodidad.
                        Visítanos para cualquier consulta o reparación.
                    </p>

                    <div className="address-block">
                        <FaMapMarkerAlt className="location-icon" />
                        <p>
                            <strong>Dirección:</strong><br />
                            Calle Virgen de las Nieves 6<br />
                            38108 La Laguna, Santa Cruz de Tenerife
                        </p>
                    </div>

                    <a
                        href="https://maps.app.goo.gl/EuRMqU3HzCmHWwx27"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="location-btn"
                    >
                        <FaDirections className="btn-icon" />
                        Cómo llegar
                    </a>
                </div>
                <div className="map-container">
                    <iframe
                        title="Ubicación del Taller"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.667867946864!2d-16.36843492445678!3d28.45941497576065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc41cda3264567d9%3A0x6754025164627522!2sC.%20el%20Cardonal%2C%2068%2C%2038311%20El%20Cardonal%2C%20Santa%20Cruz%20de%20Tenerife!5e0!3m2!1ses!2ses!4v1701646800000!5m2!1ses!2ses"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    )
}

export default LocationSection
