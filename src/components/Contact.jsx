export default function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-6 pb-24 pt-10 scroll-mt-28">
      <form
        action="https://formspree.io/f/mzdkbpep"
        method="POST"
        className="mx-auto grid max-w-3xl gap-4 rounded-3xl border border-white/20 bg-white/10 p-6 text-left shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl md:p-8"
      >
        <h3 className="mb-1 text-center text-2xl font-semibold text-white">Get in Touch</h3>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <input
            name="name"
            placeholder="Your Name"
            required
            className="rounded-xl border border-white/25 bg-black/35 px-4 py-3 text-white placeholder:text-white/60 shadow-inner shadow-black/25 outline-none transition focus:border-emerald-300"
          />
          <input
            name="email"
            placeholder="Your Email"
            required
            className="rounded-xl border border-white/25 bg-black/35 px-4 py-3 text-white placeholder:text-white/60 shadow-inner shadow-black/25 outline-none transition focus:border-emerald-300"
          />
        </div>

        <textarea
          name="message"
          placeholder="Project Description"
          rows={5}
          className="min-h-36 rounded-xl border border-white/25 bg-black/35 px-4 py-3 text-white placeholder:text-white/60 shadow-inner shadow-black/25 outline-none transition focus:border-emerald-300"
        />

        <div className="pt-2 text-center">
          <button
            type="submit"
            className="rounded-full border border-white/70 bg-white/5 px-8 py-3 text-sm text-white transition hover:bg-white/15"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}
