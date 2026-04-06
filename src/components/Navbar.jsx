import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#071220]/90 shadow-[0_2px_20px_rgba(0,0,0,0.5)] backdrop-blur-md"
          : "bg-[#071220]/45 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img
            src="/1000158519.png"
            alt="EnviroCore logo"
            className="h-10 w-10 rounded-full object-cover mix-blend-multiply contrast-125 saturate-150"
          />
          <span className="text-xl font-bold tracking-wide text-white">
            EnviroCore
          </span>
        </a>

        {/* Nav links */}
        <ul className="hidden items-center gap-8 md:flex">
          {["about", "services", "contact"].map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="capitalize text-slate-300 transition hover:text-emerald-400"
              >
                {id}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-black transition hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(52,211,153,0.5)]"
        >
          Get a Quote
        </a>
      </nav>
    </header>
  );
}