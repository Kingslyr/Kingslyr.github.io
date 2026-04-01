import Hero from "./components/Hero";
import EcoScene from "./components/EcoScene";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 bg-[url('/1000158519.png1000158519.png')] bg-cover bg-center opacity-30" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_15%,_rgba(47,209,167,0.25),_transparent_45%),radial-gradient(circle_at_80%_70%,_rgba(249,201,74,0.12),_transparent_35%),linear-gradient(to_bottom,_rgba(3,10,22,0.35),_rgba(3,10,22,0.92))]" />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <section id="about" className="mx-auto w-full max-w-6xl px-6 py-10">
          <EcoScene />
        </section>
        <section id="services" className="mx-auto w-full max-w-6xl px-6 py-14">
          <Services />
        </section>
        <Contact />
      </main>

      <a
        href="https://wa.me/923362171881?text=Hello%20EnviroCore%2C%20I%20need%20EIA%20services"
        className="glow fixed bottom-6 right-6 z-30 rounded-full bg-[#25D366] px-4 py-3 text-xl text-black transition hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        💬
      </a>
    </div>
  );
}
