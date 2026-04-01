export default function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-3xl px-6 py-16 text-center scroll-mt-24">
      <form
        action="https://formspree.io/f/mzdkbpep"
        method="POST"
        className="glow mx-auto grid max-w-xl gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur"
      >
        <input
          name="name"
          placeholder="Name"
          required
          className="rounded-md border border-white/15 bg-slate-950/70 px-3 py-2"
        />
        <input
          name="email"
          placeholder="Email"
          required
          className="rounded-md border border-white/15 bg-slate-950/70 px-3 py-2"
        />
        <textarea
          name="message"
          placeholder="Project Description"
          rows={5}
          className="rounded-md border border-white/15 bg-slate-950/70 px-3 py-2"
        />
        <button
          type="submit"
          className="glow mt-2 rounded-full border border-green-400 px-6 py-3 text-center transition hover:bg-green-400 hover:text-black"
        >
          Send
        </button>
      </form>
    </section>
  );
}
