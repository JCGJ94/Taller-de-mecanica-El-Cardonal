import { useEffect } from 'react'
import PropTypes from 'prop-types'

function StructuredData({ type, data }) {
    useEffect(() => {
        const generateSchema = () => {
            switch (type) {
                case 'LocalBusiness':
                    return {
                        '@context': 'https://schema.org',
                        '@type': 'AutoRepair',
                        name: 'Taller El Cardonal',
                        image: 'https://tallerElCardonal.com/hero-1.png', // TODO: Actualizar con URL real
                        '@id': 'https://tallerElCardonal.com',
                        url: 'https://tallerElCardonal.com',
                        telephone: '+34685562049',
                        priceRange: '$$',
                        address: {
                            '@type': 'PostalAddress',
                            streetAddress: data?.address || 'Calle Principal',
                            addressLocality: data?.city || 'El Cardonal',
                            postalCode: data?.postalCode || '38686',
                            addressCountry: 'ES'
                        },
                        geo: {
                            '@type': 'GeoCoordinates',
                            latitude: data?.latitude || 28.1234, // TODO: Actualizar con coordenadas reales
                            longitude: data?.longitude || -16.5678
                        },
                        openingHoursSpecification: data?.hours || [
                            {
                                '@type': 'OpeningHoursSpecification',
                                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                                opens: '09:00',
                                closes: '18:00'
                            }
                        ],
                        sameAs: data?.socialMedia || []
                    }

                case 'Service':
                    return {
                        '@context': 'https://schema.org',
                        '@type': 'Service',
                        serviceType: data.name,
                        provider: {
                            '@type': 'AutoRepair',
                            name: 'Taller El Cardonal'
                        },
                        description: data.description,
                        offers: {
                            '@type': 'Offer',
                            availability: 'https://schema.org/InStock',
                            priceCurrency: 'EUR'
                        }
                    }

                case 'BreadcrumbList':
                    return {
                        '@context': 'https://schema.org',
                        '@type': 'BreadcrumbList',
                        itemListElement: data.items.map((item, index) => ({
                            '@type': 'ListItem',
                            position: index + 1,
                            name: item.name,
                            item: `https://tallerElCardonal.com${item.url}`
                        }))
                    }

                default:
                    return null
            }
        }

        const schema = generateSchema()
        if (!schema) return

        // Create unique ID for this script
        const scriptId = `structured-data-${type}-${JSON.stringify(data || {}).substring(0, 20)}`

        // Remove existing script with same ID if it exists
        const existingScript = document.getElementById(scriptId)
        if (existingScript) {
            existingScript.remove()
        }

        // Create and append new script
        const script = document.createElement('script')
        script.id = scriptId
        script.type = 'application/ld+json'
        script.textContent = JSON.stringify(schema)
        document.head.appendChild(script)

        // Cleanup function
        return () => {
            const scriptToRemove = document.getElementById(scriptId)
            if (scriptToRemove) {
                scriptToRemove.remove()
            }
        }
    }, [type, data])

    return null
}

StructuredData.propTypes = {
    type: PropTypes.oneOf(['LocalBusiness', 'Service', 'BreadcrumbList']).isRequired,
    data: PropTypes.object
}

export default StructuredData
