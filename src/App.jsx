import Navbar from "./components/Navbar";
import Seo from "./components/Seo";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ESGDashboard from "./components/ESGDashboard";
import ProposalGenerator from "./components/ProposalGenerator";
import ServicePages from "./components/ServicePages";
import ServiceDetailPage from "./components/ServiceDetailPage";
import TrustStrip from "./components/TrustStrip";
import CaseStudies from "./components/CaseStudies";
import CommunityPage from "./components/CommunityPage";
import CommunityArticlePage from "./components/CommunityArticlePage";
import CommunityManagePage from "./components/CommunityManagePage";
import CommunityAdminPage from "./components/CommunityAdminPage";
import { CommunityProvider } from "./context/CommunityContext";
import { Route, Routes } from "react-router-dom";

function HomePage() {
  return (
    <>
      <Seo
        title="EnviroCore | Environmental & ESG Consultants | Karachi & Hyderabad"
        description="Expert EIA, IEE, ESG, environmental audits, and sustainable infrastructure consulting in Pakistan. 15+ audits, 10+ projects. Contact us today."
        canonicalPath="/"
        ogType="website"
        ogImage="https://envirocore-emc.me/assets/preview-image.png"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "EnviroCore",
          "url": "https://envirocore-emc.me",
          "logo": "https://envirocore-emc.me/assets/logo.png",
          "description": "Environmental Impact Assessment, ESG frameworks, and sustainable engineering consulting firm based in Karachi, Pakistan.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Karachi",
            "addressLocality": "Karachi",
            "addressRegion": "Sindh",
            "postalCode": "",
            "addressCountry": "PK"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Support",
            "telephone": "+92-336-2171881",
            "url": "https://wa.me/923362171881"
          },
          "sameAs": [
            "https://www.facebook.com/envirocore",
            "https://www.linkedin.com/company/envirocore"
          ]
        }}
      />
      <Hero />
      <TrustStrip />
      <section id="services" className="mx-auto w-full max-w-6xl scroll-mt-28 px-6 pb-10 pt-10 md:pt-12">
        <Services />
      </section>
      <section id="dashboard" className="mx-auto w-full max-w-6xl scroll-mt-28 px-6 py-10">
        <ESGDashboard />
      </section>
      <section className="mx-auto w-full max-w-6xl px-6 py-10">
        <CaseStudies />
      </section>
      <section className="mx-auto w-full max-w-6xl px-6 py-10">
        <ServicePages />
      </section>
      <section id="proposal" className="scroll-mt-28">
        <ProposalGenerator />
      </section>
    </>
  );
}

function ServiceDetailRoute() {
  return (
    <>
      <Seo
        title="Professional Service Solutions | EnviroCore Environmental Consulting"
        description="Expert environmental and ESG services tailored for sustainable business practices in Pakistan. Guidance and compliance support."
        canonicalPath={window.location.pathname}
        ogType="website"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "provider": {
            "@type": "Organization",
            "name": "EnviroCore"
          },
          "areaServed": "PK",
          "availableLanguage": "en"
        }}
      />
      <ServiceDetailPage />
      <section id="proposal" className="scroll-mt-28">
        <ProposalGenerator />
      </section>
    </>
  );
}

export default function App() {
  return (
    <CommunityProvider>
      <div className="relative min-h-screen overflow-x-hidden bg-[#071220] text-slate-100">
        <div className="pointer-events-none fixed inset-0 animate-drift bg-[radial-gradient(circle_at_30%_20%,_rgba(88,255,203,0.2),_transparent_35%),radial-gradient(circle_at_75%_15%,_rgba(255,223,0,0.15),_transparent_35%)]" />
        <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_15%,_rgba(52,211,153,0.28),_transparent_40%),radial-gradient(circle_at_85%_10%,_rgba(250,204,21,0.2),_transparent_40%)]" />
        <div className="pointer-events-none fixed inset-0 opacity-40 [background-image:radial-gradient(rgba(255,215,140,0.35)_1px,transparent_1px)] [background-size:3px_3px]" />
        <Navbar />
        <main className="relative z-10 pt-20 md:pt-24">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services/:slug" element={<ServiceDetailRoute />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/community/manage" element={<CommunityManagePage />} />
            <Route path="/community/admin" element={<CommunityAdminPage />} />
            <Route path="/community/:slug" element={<CommunityArticlePage />} />
          </Routes>
        </main>

        <footer className="relative z-10 mx-auto w-full max-w-6xl border-t border-white/15 px-6 py-12 text-center text-white/70">
          <p className="text-base text-white">EnviroCore Environmental Engineering & Management Consultants</p>
          <p className="mt-2 text-sm">
            Led by <span className="font-semibold text-white">Engr. Saeed Ur Rehman Samoo</span>
          </p>
        </footer>

        <a
          href="https://wa.me/923362171881?text=Hello%20EnviroCore%2C%20I%20need%20EIA%20services"
          className="glow fixed bottom-6 right-6 z-30 rounded-full bg-[#25D366] px-4 py-3 text-xl text-black transition hover:scale-105 hover:shadow-[0_0_40px_rgba(37,211,102,0.85)]"
          aria-label="Chat on WhatsApp"
        >
          💬
        </a>
      </div>
    </CommunityProvider>
  );
}
