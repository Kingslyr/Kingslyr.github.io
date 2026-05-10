export default function Services() {
  const items = [
    {
      title: "EIA & IEE",
      text: "Comprehensive environmental impact assessments and examination reports tailored for regulatory compliance.",
    },
    {
      title: "ESG & GHG Auditing",
      text: "Strategic sustainability frameworks, carbon auditing, and climate change mitigation strategies.",
    },
    {
      title: "GIS & AutoCAD",
      text: "Precision 3D site planning, land configurations, and spatial data analysis for civil infrastructure.",
    },
  ];

  return (
    <div className="services-grid">
      {items.map((item) => (
        <article key={item.title} className="glass-card">
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>
      ))}
    </div>
  );
}
