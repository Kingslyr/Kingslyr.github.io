import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar-shell ${scrolled ? "navbar-shell--scrolled" : ""}`}>
      <nav className="navbar">
        <a href="#top" className="logo-link" aria-label="EnviroCore home">
          <div className="logo">ENVIRO<span>CORE</span></div>
        </a>

        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  );
}
