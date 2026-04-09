export default function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-6 pb-24 pt-6 scroll-mt-28">
      <form
        action="https://formspree.io/f/mzdkbpep"
        method="POST"
        className="mx-auto grid max-w-3xl gap-4 rounded-3xl border border-white/25 bg-white/10 p-6 text-left shadow-[0_32px_90px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:p-9"
      >
        <h3 className="mb-1 text-center text-3xl font-semibold text-white">Request a Consultation</h3>
        <p className="text-center text-sm text-white/75">Share your project type, location, and timeline for EIA, IEE, audit, or ESG support.</p>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <input
            name="name"
            placeholder="Client Name"
            required
            className="rounded-xl border border-white/30 bg-black/40 px-4 py-3 text-white placeholder:text-white/60 shadow-inner shadow-black/30 outline-none transition focus:border-emerald-300"
          />
          <input
            name="email"
            placeholder="Work Email"
            required
            className="rounded-xl border border-white/30 bg-black/40 px-4 py-3 text-white placeholder:text-white/60 shadow-inner shadow-black/30 outline-none transition focus:border-emerald-300"
          />
        </div>

        <textarea
          name="message"
          placeholder="Project type, site location, approval stage, and services needed"
          rows={5}
          className="min-h-36 rounded-xl border border-white/30 bg-black/40 px-4 py-3 text-white placeholder:text-white/60 shadow-inner shadow-black/30 outline-none transition focus:border-emerald-300"
        />

        <div className="pt-2 text-center">
          <button
            type="submit"
            className="rounded-full border border-white/70 bg-white/10 px-8 py-3 text-sm text-white transition hover:bg-white/20"
          >
            Submit Inquiry
          </button>
        </div>
      </form>
    </section>
  );
}
