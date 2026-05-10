import { Link } from "react-router-dom";

export default function ServicePages() {
  const services = [
    {
      id: "environmental-impact-assessment",
      emoji: "🌍",
      title: "Environmental Impact Assessment",
      shortDesc: "Comprehensive baseline, impact prediction, and mitigation planning.",
    },
    {
      id: "initial-environmental-examination",
      emoji: "📋",
      title: "Initial Environmental Examination",
      shortDesc: "Fast-track environmental review for project screening and approvals.",
    },
    {
      id: "esg-advisory",
      emoji: "📊",
      title: "ESG Advisory & Audit",
      shortDesc: "ESG performance assessment, compliance checks, and sustainability roadmaps.",
    },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold text-white">Explore Our Services</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {services.map((service) => (
          <Link
            key={service.id}
            to={`/services/${service.id}`}
            className="group rounded-xl border border-white/20 bg-black/40 p-6 backdrop-blur-md transition hover:border-blue-400 hover:bg-black/60"
          >
            <div className="text-4xl">{service.emoji}</div>
            <h3 className="mt-3 text-lg font-semibold text-white group-hover:text-blue-400">{service.title}</h3>
            <p className="mt-2 text-sm text-white/70">{service.shortDesc}</p>
            <div className="mt-4 text-blue-400 transition group-hover:text-blue-300">→ Learn More</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
