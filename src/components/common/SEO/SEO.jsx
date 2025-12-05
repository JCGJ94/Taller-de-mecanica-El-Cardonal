import { useEffect } from 'react'
import PropTypes from 'prop-types'

function SEO({
    title = 'Taller El Cardonal - Taller Mecánico Profesional',
    description = 'Taller mecánico profesional en El Cardonal. Ofrecemos servicios de mantenimiento, reparación, diagnóstico y más. Equipo joven, experimentado y comprometido con la calidad.',
    keywords = 'taller mecánico, reparación de coches, mantenimiento vehículos, El Cardonal, mecánica profesional, diagnóstico automotriz',
    ogImage = '/hero-1.png',
    ogType = 'website',
    canonicalUrl,
    noindex = false
}) {
    const siteUrl = 'https://tallerElCardonal.com' // TODO: Actualizar con URL real
    const fullUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl
    const fullImageUrl = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`

    useEffect(() => {
        // Update title
        document.title = title

        // Helper function to set or update meta tag
        const setMetaTag = (selector, attribute, value) => {
            let element = document.querySelector(selector)
            if (!element) {
                element = document.createElement('meta')
                const [attrName, attrValue] = selector.replace(/[\[\]]/g, '').split('=')
                element.setAttribute(attrName, attrValue.replace(/"/g, ''))
                document.head.appendChild(element)
            }
            element.setAttribute(attribute, value)
        }

        // Update or create meta tags
        setMetaTag('meta[name="description"]', 'content', description)
        setMetaTag('meta[name="keywords"]', 'content', keywords)

        // Robots
        if (noindex) {
            setMetaTag('meta[name="robots"]', 'content', 'noindex, nofollow')
        } else {
            const robotsMeta = document.querySelector('meta[name="robots"]')
            if (robotsMeta) robotsMeta.remove()
        }

        // Canonical URL
        let canonical = document.querySelector('link[rel="canonical"]')
        if (!canonical) {
            canonical = document.createElement('link')
            canonical.setAttribute('rel', 'canonical')
            document.head.appendChild(canonical)
        }
        canonical.setAttribute('href', fullUrl)

        // Open Graph tags
        setMetaTag('meta[property="og:type"]', 'content', ogType)
        setMetaTag('meta[property="og:url"]', 'content', fullUrl)
        setMetaTag('meta[property="og:title"]', 'content', title)
        setMetaTag('meta[property="og:description"]', 'content', description)
        setMetaTag('meta[property="og:image"]', 'content', fullImageUrl)
        setMetaTag('meta[property="og:locale"]', 'content', 'es_ES')
        setMetaTag('meta[property="og:site_name"]', 'content', 'Taller El Cardonal')

        // Twitter Card tags
        setMetaTag('meta[name="twitter:card"]', 'content', 'summary_large_image')
        setMetaTag('meta[name="twitter:url"]', 'content', fullUrl)
        setMetaTag('meta[name="twitter:title"]', 'content', title)
        setMetaTag('meta[name="twitter:description"]', 'content', description)
        setMetaTag('meta[name="twitter:image"]', 'content', fullImageUrl)
    }, [title, description, keywords, ogImage, ogType, canonicalUrl, noindex, fullUrl, fullImageUrl])

    return null
}

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    keywords: PropTypes.string,
    ogImage: PropTypes.string,
    ogType: PropTypes.string,
    canonicalUrl: PropTypes.string,
    noindex: PropTypes.bool
}

export default SEO
