import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

const Analytics = () => {
    const location = useLocation();

    useEffect(() => {
        // Initialize Google Analytics
        const gaMeasurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
        if (gaMeasurementId) {
            ReactGA.initialize(gaMeasurementId);
        }

        // Initialize Google Ads (gtag)
        const googleAdsId = import.meta.env.VITE_GOOGLE_ADS_ID;
        if (googleAdsId) {
            // Ensure dataLayer exists
            window.dataLayer = window.dataLayer || [];
            function gtag() {
                window.dataLayer.push(arguments);
            }
            // Load the script
            const script = document.createElement('script');
            script.async = true;
            script.src = `https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`;
            document.head.appendChild(script);

            gtag('js', new Date());
            gtag('config', googleAdsId);
        }
    }, []);

    useEffect(() => {
        // Send page view to GA4 on route change
        const gaMeasurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
        if (gaMeasurementId) {
            ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
        }
    }, [location]);

    return null;
};

export default Analytics;
