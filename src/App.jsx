import Hero from "./components/Hero";
import EcoScene from "./components/EcoScene";
import Stats from "./components/Stats";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

export default function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.25),_transparent_50%),radial-gradient(circle_at_80%_20%,_rgba(56,189,248,0.2),_transparent_45%)]" />
      <Navbar />
      <main className="relative">
        <Hero />
        <EcoScene />
        <Stats />
        <Services />
        <Contact />
      </main>

      <a
        href="https://wa.me/923362171881?text=Hello%20EnviroCore%2C%20I%20need%20EIA%20services"
        className="glow fixed bottom-6 right-6 rounded-full bg-emerald-500 px-4 py-3 text-xl text-black transition hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        💬
      </a>
    </div>
  );
}
