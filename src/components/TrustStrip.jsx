export default function TrustStrip() {
  const items = [
    { icon: "✓", label: "ISO 14001 Certified" },
    { icon: "✓", label: "20+ Years Experience" },
    { icon: "✓", label: "500+ Projects Completed" },
    { icon: "✓", label: "99% Client Satisfaction" },
  ];

  return (
    <section className="flex flex-wrap justify-around gap-4 rounded-2xl border border-white/20 bg-black/40 px-6 py-5 backdrop-blur-md">
      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-2">
          <span className="text-lg font-bold text-green-400">{item.icon}</span>
          <span className="text-sm text-white/80">{item.label}</span>
        </div>
      ))}
    </section>
  );
}
