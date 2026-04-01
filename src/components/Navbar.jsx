export default function Navbar() {
  return (
    <nav className="sticky top-0 z-30 border-b border-white/10 bg-black/30 px-4 py-4 backdrop-blur-xl md:px-8">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-2 items-center gap-4 md:grid-cols-3">
        <a href="#" className="flex items-center gap-2 justify-self-start">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-emerald-300 to-cyan-300 text-slate-950">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
              <path d="M19.9 4.2c-4.1.5-7.8 2.6-10.2 6.1-1.5 2.2-2.3 4.8-2.2 7.4 2.8.1 5.6-.7 7.9-2.3 3.4-2.4 5.5-6.1 6-10.1-.5-.8-.9-1-1.5-1.1z" />
            </svg>
          </span>
          <span className="text-base font-semibold tracking-wide text-white">EnviroCore</span>
        </a>

        <div className="col-span-2 hidden items-center justify-center gap-8 text-sm text-white/85 md:col-span-1 md:flex">
          <a href="#about" className="transition hover:text-emerald-300">About</a>
          <a href="#services" className="transition hover:text-emerald-300">Services</a>
          <a href="#contact" className="transition hover:text-emerald-300">Contact</a>
        </div>

        <a
          href="#contact"
          className="justify-self-end rounded-full border border-white/50 bg-black/35 px-5 py-2 text-sm text-white transition hover:border-emerald-300 hover:bg-emerald-400/15"
        >
          Get a Quote
        </a>
      </div>
    </nav>
  );
}
