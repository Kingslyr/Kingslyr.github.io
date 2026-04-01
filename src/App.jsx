import { Suspense, lazy, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";

const Hero = lazy(() => import("./components/Hero"));
const EcoScene = lazy(() => import("./components/EcoScene"));
const Contact = lazy(() => import("./components/Contact"));
const Services = lazy(() => import("./components/Services"));

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowIntro(false);
    }, 1700);

    return () => window.clearTimeout(timer);
  }, []);

  if (showIntro) {
    return <Loader />;
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#071220] text-slate-100">
      <div className="pointer-events-none fixed inset-0 animate-drift bg-[radial-gradient(circle_at_30%_20%,_rgba(88,255,203,0.2),_transparent_35%),radial-gradient(circle_at_75%_15%,_rgba(255,223,132,0.16),_transparent_30%),radial-gradient(circle_at_50%_65%,_rgba(96,165,250,0.16),_transparent_42%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_15%,_rgba(52,211,153,0.28),_transparent_40%),radial-gradient(circle_at_85%_10%,_rgba(250,204,21,0.2),_transparent_32%),radial-gradient(circle_at_15%_80%,_rgba(56,189,248,0.16),_transparent_35%),linear-gradient(to_bottom,_rgba(3,9,20,0.2),_rgba(3,9,20,0.94))]" />
      <div className="pointer-events-none fixed inset-0 opacity-40 [background-image:radial-gradient(rgba(255,215,140,0.35)_1px,transparent_1px)] [background-size:3px_3px]" />
      <Navbar />
      <Suspense fallback={<Loader />}>
        <main className="relative z-10">
          <Hero />
          <Contact />
          <section id="about" className="mx-auto w-full max-w-6xl px-6 py-16">
            <EcoScene />
          </section>
          <section id="services" className="mx-auto w-full max-w-6xl px-6 pb-20 pt-4">
            <Services />
          </section>
        </main>
      </Suspense>

      <a
        href="https://wa.me/923362171881?text=Hello%20EnviroCore%2C%20I%20need%20EIA%20services"
        className="glow fixed bottom-6 right-6 z-30 rounded-full bg-[#25D366] px-4 py-3 text-xl text-black transition hover:scale-105 hover:shadow-[0_0_40px_rgba(37,211,102,0.85)]"
        aria-label="Chat on WhatsApp"
      >
        💬
      </a>
    </div>
  );
}
