export default function ESGDashboard() {
  const metrics = [
    { label: "Carbon Footprint", value: "2.4 tons CO₂", trend: "↓ 12%" },
    { label: "Energy Efficiency", value: "89%", trend: "↑ 5%" },
    { label: "Water Saved", value: "500k liters", trend: "↑ 18%" },
    { label: "Waste Diversion", value: "92%", trend: "↑ 8%" },
  ];

  return (
    <section id="dashboard" className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-[0_30px_70px_rgba(0,0,0,0.4)] backdrop-blur-2xl md:p-10">
      <h2 className="text-center text-3xl font-semibold text-white md:text-4xl">ESG Performance Dashboard</h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-white/80">
        Track your environmental and social performance metrics in real-time with our comprehensive dashboard.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <article key={metric.label} className="rounded-xl border border-white/20 bg-black/35 p-4 backdrop-blur-md">
            <p className="text-sm text-white/60">{metric.label}</p>
            <p className="mt-2 text-2xl font-bold text-white">{metric.value}</p>
            <p className="mt-2 text-sm text-green-400">{metric.trend}</p>
          </article>
        ))}
      </div>

      <div className="mx-auto mt-8 max-w-2xl">
        <a
          href="#generator"
          className="inline-block rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white transition hover:bg-blue-700"
        >
          View Detailed Report
        </a>
      </div>
    </section>
  );
}
