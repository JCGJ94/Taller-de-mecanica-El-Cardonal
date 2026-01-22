import { useEffect } from 'react';
import { initCookieConsent } from "@/config/cookieConsent";
import { AppRouter } from './router.jsx'
import Analytics from "@/components/Analytics/Analytics.jsx";


function App() {

   useEffect(() => {
    initCookieConsent();
  }, []);

  return (
    <>
      <Analytics />
      <AppRouter />
    </>
  )
}

export default App
