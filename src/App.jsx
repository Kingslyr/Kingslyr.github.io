import Navbar from "./components/Navbar";
import EnviroCoreDashboard from "./components/EnviroCoreDashboard";
import TerrainScene from "./components/TerrainScene";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const whatsappUrl = "https://wa.me/923000000000";

export default function App() {
  return (
    <div className="site-shell">
      <div className="site-background" aria-hidden="true">
        <TerrainScene />
      </div>

      <main className="content-wrapper">
        <Navbar />

        <EnviroCoreDashboard />

        <section className="hero-section">
          <Hero />
        </section>

        <section id="services" className="section-container">
          <h2 className="section-title">Core Competencies</h2>
          <Services />
        </section>

        <section id="projects" className="section-container">
          <h2 className="section-title">Featured Projects</h2>
          <Projects />
        </section>

        <section id="contact" className="section-container section-contact">
          <h2 className="section-title">Initiate a Project</h2>
          <Contact />
        </section>

        <footer className="site-footer">
          <div className="footer-content">
            <p>&copy; 2026 EnviroCore Engineering & Management Consultants. All rights reserved.</p>
          </div>
        </footer>
      </main>

      <a
        href={whatsappUrl}
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 32 32" width="32" height="32" aria-hidden="true">
          <path fill="#FFF" d="M16.6 29c-2.3 0-4.6-.6-6.6-1.7l-7.4 1.9 2-7.2c-1.2-2.1-1.9-4.5-1.9-6.9 0-7.7 6.3-14 14-14s14 6.3 14 14-6.3 14-14 14zm-6.7-4.3c2 .1 4.1.7 5.8 1.8 6.3 0 11.4-5.1 11.4-11.4S22 3.7 15.7 3.7 4.3 8.8 4.3 15.1c0 2 .5 3.9 1.5 5.6l-1.2 4.3 4.4-1.2.1-.1z"/>
          <path fill="#FFF" d="M22.8 20.3c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.4-.8 1-1 1.2-.2.2-.4.3-.7.1-.3-.2-1.4-.5-2.6-1.6-1-1-1.3-1.4-1.5-1.7-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.7-1-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.6 0 1.6 1.1 3.1 1.3 3.3.2.3 2.3 3.5 5.5 4.9.8.3 1.4.5 1.8.7.8.2 1.5.2 2 .1.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.3.2-1.5-.2-.2-.4-.3-.7-.5z"/>
        </svg>
      </a>
    </div>
  );
}
