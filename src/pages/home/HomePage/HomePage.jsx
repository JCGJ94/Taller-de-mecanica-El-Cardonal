import SEO from '@/components/common/SEO/SEO.jsx'
import StructuredData from '@/components/seo/StructuredData/StructuredData.jsx'
import ServicesSection from '@/components/home/ServicesSection/ServicesSection.jsx'
import ProcessSection from '@/components/home/ProcessSection/ProcessSection.jsx'
import BudgetSection from '@/components/home/BudgetSection/BudgetSection.jsx'
import LocationSection from '@/components/home/LocationSection/LocationSection.jsx'
import ContactSection from '@/components/home/ContactSection/ContactSection.jsx'
import './HomePage.css'

function HomePage() {
  return (
    <>
      <SEO
        title="Taller El Cardonal - Taller Mecánico Profesional"
        description="Taller mecánico profesional en El Cardonal. Ofrecemos servicios de mantenimiento, reparación, diagnóstico, Pre-ITV y más. Equipo joven, experimentado y comprometido con la calidad."
        keywords="taller mecánico El Cardonal, reparación de coches, mantenimiento vehículos, Pre-ITV, diagnóstico automotriz, cambio de aceite, frenos, suspensión, mecánica profesional"
        canonicalUrl="/"
      />
      <StructuredData type="LocalBusiness" />

      <main className="home">
        <ServicesSection />
        <ProcessSection />
        <BudgetSection />
        <LocationSection />
        <ContactSection />
      </main>
    </>
  )
}

export default HomePage
