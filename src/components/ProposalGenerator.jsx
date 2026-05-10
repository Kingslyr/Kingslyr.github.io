import { useState } from "react";

export default function ProposalGenerator() {
  const [formData, setFormData] = useState({
    projectName: "",
    projectType: "eia",
    location: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Proposal request:", formData);
    alert("Proposal request submitted! We'll contact you shortly.");
    setFormData({ projectName: "", projectType: "eia", location: "", email: "" });
  };

  return (
    <section id="generator" className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-[0_30px_70px_rgba(0,0,0,0.4)] backdrop-blur-2xl md:p-10">
      <h2 className="text-center text-3xl font-semibold text-white md:text-4xl">Generate Your Proposal</h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-white/80">
        Tell us about your project and we'll prepare a customized proposal with scope, timeline, and pricing.
      </p>

      <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-md space-y-4 rounded-2xl border border-white/20 bg-black/35 p-6 backdrop-blur-md">
        <div>
          <label className="block text-sm font-medium text-white">Project Name</label>
          <input
            type="text"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
            required
            className="mt-2 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-white placeholder-white/50 focus:border-blue-400 focus:outline-none"
            placeholder="e.g., Solar Farm Expansion"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white">Service Type</label>
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-white focus:border-blue-400 focus:outline-none"
          >
            <option value="eia">Environmental Impact Assessment</option>
            <option value="iee">Initial Environmental Examination</option>
            <option value="esg">ESG Advisory</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-white">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="mt-2 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-white placeholder-white/50 focus:border-blue-400 focus:outline-none"
            placeholder="e.g., Gujarat, India"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white">Your Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-2 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-white placeholder-white/50 focus:border-blue-400 focus:outline-none"
            placeholder="your@email.com"
          />
        </div>

        <button
          type="submit"
          className="mt-6 w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 focus:outline-none"
        >
          Request Proposal
        </button>
      </form>
    </section>
  );
}
