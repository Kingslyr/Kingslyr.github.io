export default function Services() {
  const items = [
    {
      title: "Environmental Impact Assessment (EIA)",
      text: "Baseline studies, impact prediction, mitigation planning, and regulatory submission support.",
    },
    {
      title: "Initial Environmental Examination (IEE)",
      text: "Project screening, scoping, and concise environmental review for approvals and due diligence.",
    },
    {
      title: "Environmental Audit & ESG Advisory",
      text: "Audit readiness, compliance checks, ESG disclosures, and sustainability roadmaps for business resilience.",
    },
  ];

  return (
    <section className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-[0_30px_70px_rgba(0,0,0,0.4)] backdrop-blur-2xl md:p-10">
      <h2 className="text-center text-3xl font-semibold text-white md:text-4xl">Our Services</h2>
      <p className="mx-auto mt-4 max-w-3xl text-center text-white/80">
        We help developers, industries, and institutions manage environmental approvals, compliance, and ESG performance with practical fieldwork and clear reporting.
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
