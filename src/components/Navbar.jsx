export default function Navbar() {
  return (
    <nav className="sticky top-0 z-30 border-b border-white/15 bg-black/35 px-4 py-4 backdrop-blur-2xl md:px-8">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-2 items-center gap-4 md:grid-cols-3">
        <a href="#" className="flex items-center gap-2 justify-self-start">
          <img
            src="/1000158519.png"
            alt="EnviroCore logo"
            className="h-12 w-12 shrink-0 rounded-full bg-white p-1 object-contain shadow-[0_0_20px_rgba(52,211,153,0.45)] md:h-14 md:w-14"
          />
          <div className="leading-tight">
            <span className="block text-base font-semibold tracking-[0.08em] text-white">EnviroCore</span>
          </div>
        </a>

        <div className="col-span-2 hidden items-center justify-center gap-9 text-sm text-white/90 md:col-span-1 md:flex">
          <a href="#about" className="transition hover:text-emerald-300">About</a>
          <a href="#services" className="transition hover:text-emerald-300">Services</a>
          <a href="#contact" className="transition hover:text-emerald-300">Contact</a>
        </div>

        <a
          href="#contact"
          className="justify-self-end rounded-full border border-white/55 bg-black/40 px-5 py-2 text-sm text-white transition hover:border-emerald-300 hover:bg-emerald-400/15"
        >
          Get a Quote
        </a>
      </div>
    </nav>
  );
}
