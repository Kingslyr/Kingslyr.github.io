import React from 'react';

const EnviroCoreDashboard = () => {
  const siteInfo = [
    { label: 'Website URL', value: 'envirocore-emc.me', link: 'https://envirocore-emc.me' },
    { label: 'WhatsApp', value: '+92 316 3896489', link: 'https://wa.me/923163896489' },
    { label: 'Formspree Link', value: 'https://formspree.io/f/mzdkbpep', link: 'https://formspree.io/f/mzdkbpep' }
  ];

  const seoStrategies = [
    {
      id: 1,
      title: "Target Keyword Strategy",
      description: "Focus website copy, blog posts, and service pages around highly specific, intent-driven keywords.",
      points: [
        "Primary Local: 'Environmental Consultant Karachi', 'EIA and IEE services Sindh'",
        "Specialized: 'ESG framework consulting', 'GHG auditing and carbon verification'",
        "Long-Tail: 'How to get Sindh EPA approval', 'Wildlife sanctuary 3D visualization'"
      ]
    },
    {
      id: 2,
      title: "On-Page Optimization",
      description: "Structure individual pages to communicate clear technical expertise to search engines.",
      points: [
        "Meta Tags: Clear titles e.g., 'EnviroCore | Environmental & ESG Consultants in Karachi'",
        "Image Alt-Text: Descriptive tags for 3D visualizations and AutoCAD designs",
        "Dedicated Pages: Separate pages for EIA, IEE, ESG, and GHG rather than one combined page"
      ]
    },
    {
      id: 3,
      title: "Local & Off-Page SEO",
      description: "Establish local authority and build trust signals across the web.",
      points: [
        "Google Business: Claim and optimize profile with consistent Karachi address and phone number",
        "Backlinks: Partner with university alumni networks, AIESEC, and local environmental NGOs"
      ]
    },
    {
      id: 4,
      title: "Technical SEO",
      description: "Ensure the technical foundation supports crawling and user experience.",
      points: [
        "Performance: Optimize underlying code (including Three.js assets) for fast loading",
        "Mobile-First: Ensure the site is fully responsive for mobile indexation"
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen font-sans">
      <header className="mb-8 border-b pb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">EnviroCore System Dashboard</h1>
        <p className="text-gray-600">Platform details and targeted SEO growth strategy.</p>
      </header>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Links & Info</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {siteInfo.map((info, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <span className="block text-sm font-medium text-gray-500 mb-1">{info.label}</span>
              <a
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium break-all"
              >
                {info.value}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">SEO Implementation Strategy</h2>
        <div className="space-y-6">
          {seoStrategies.map((strategy) => (
            <div key={strategy.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-emerald-700 mb-2">
                {strategy.id}. {strategy.title}
              </h3>
              <p className="text-gray-600 mb-4">{strategy.description}</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {strategy.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EnviroCoreDashboard;
