export default function CaseStudies() {
  const cases = [
    {
      title: "Solar Farm EIA - Gujarat",
      description: "250 MW solar facility. Completed EIA with wildlife mitigation and local community engagement.",
      result: "Approved in 6 months, saved $200k in remediation costs.",
    },
    {
      title: "Industrial Complex IEE - Maharashtra",
      description: "Multi-unit industrial park. Fast-track IEE for 36-month approval timeline.",
      result: "Delivered in 3 months, enabled project start ahead of schedule.",
    },
    {
      title: "Corporate ESG Program - Mumbai",
      description: "Banking sector ESG advisory covering carbon neutrality roadmap and social impact metrics.",
      result: "Improved ESG score from 52 to 78 in 1 year.",
    },
  ];

  return (
    <section id="case-studies" className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-[0_30px_70px_rgba(0,0,0,0.4)] backdrop-blur-2xl md:p-10">
      <h2 className="text-center text-3xl font-semibold text-white md:text-4xl">Case Studies</h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-white/80">
        Real projects, real results. See how we've helped organizations achieve environmental compliance and sustainability goals.
      </p>

      <div className="mt-8 space-y-4">
        {cases.map((study) => (
          <article key={study.title} className="rounded-2xl border border-white/20 bg-black/35 p-6 backdrop-blur-md">
            <h3 className="text-xl font-semibold text-white">{study.title}</h3>
            <p className="mt-2 text-white/75">{study.description}</p>
            <p className="mt-3 text-sm font-medium text-green-400">→ {study.result}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
