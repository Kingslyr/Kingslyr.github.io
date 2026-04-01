export default function Services() {
  const items = [
    {
      title: "Environmental Impact Assessment",
      text: "Complete EIA workflows from baseline surveys to regulatory-ready documentation.",
    },
    {
      title: "Compliance Strategy",
      text: "Regional compliance plans that reduce risk and accelerate project approvals.",
    },
    {
      title: "Sustainability Intelligence",
      text: "Data-driven environmental planning for long-term performance and resilience.",
    },
  ];

  return (
    <section className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-[0_30px_70px_rgba(0,0,0,0.4)] backdrop-blur-2xl md:p-10">
      <h2 className="text-center text-3xl font-semibold text-white md:text-4xl">Services</h2>
      <p className="mx-auto mt-4 max-w-3xl text-center text-white/80">
        Built for organizations that need environmental responsibility and execution speed.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {items.map((item) => (
          <article key={item.title} className="rounded-2xl border border-white/20 bg-black/35 p-5 backdrop-blur-md">
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-sm text-white/75">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
