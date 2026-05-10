import { useParams } from "react-router-dom";

const serviceDetails = {
  "environmental-impact-assessment": {
    title: "Environmental Impact Assessment (EIA)",
    description: "Comprehensive environmental baseline, impact prediction, and mitigation planning.",
    features: [
      "Baseline environmental surveys and data collection",
      "Impact prediction based on activity and site conditions",
      "Mitigation measures and management plans",
      "Regulatory compliance alignment",
      "Public consultation and stakeholder engagement support",
      "Final EIA report and regulatory submission support",
    ],
    timeline: "4-8 months",
    price: "₹3,00,000 - ₹8,00,000",
  },
  "initial-environmental-examination": {
    title: "Initial Environmental Examination (IEE)",
    description: "Fast-track environmental review for project screening and approvals.",
    features: [
      "Quick environmental project screening",
      "Scoping and significance assessment",
      "Concise environmental review report",
      "Categorization for further approvals",
      "Best practices for environmental management",
      "Expedited timelines for urgent projects",
    ],
    timeline: "2-4 weeks",
    price: "₹50,000 - ₹2,00,000",
  },
  "esg-advisory": {
    title: "Environmental Audit & ESG Advisory",
    description: "ESG performance metrics, compliance checks, and sustainability roadmaps.",
    features: [
      "Environmental compliance audit",
      "Current ESG performance assessment",
      "Carbon footprint quantification",
      "ESG disclosure preparation (GRI, TCFD, SASB)",
      "Sustainability roadmap (3-5 year plan)",
      "Annual ESG monitoring and reporting",
    ],
    timeline: "3-6 months",
    price: "₹1,50,000 - ₹5,00,000",
  },
};

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = serviceDetails[slug] || serviceDetails["environmental-impact-assessment"];

  return (
    <div className="min-h-screen px-4 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-white md:text-5xl">{service.title}</h1>
        <p className="mt-4 text-lg text-white/80">{service.description}</p>

        <section className="mt-8 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-white">What's Included</h2>
            <ul className="mt-4 space-y-2">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex gap-3 text-white/80">
                  <span className="text-green-400">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2 rounded-lg border border-white/20 bg-black/40 p-6 backdrop-blur-md">
            <p className="text-white/60">Typical Timeline</p>
            <p className="text-2xl font-bold text-white">{service.timeline}</p>
          </div>

          <div className="space-y-2 rounded-lg border border-white/20 bg-black/40 p-6 backdrop-blur-md">
            <p className="text-white/60">Investment Range</p>
            <p className="text-2xl font-bold text-white">{service.price}</p>
          </div>

          <button className="mt-8 w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
            Request a Consultation
          </button>
        </section>
      </div>
    </div>
  );
}
