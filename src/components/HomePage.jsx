import Hero from "./Hero";
import Services from "./Services";
import TrustStrip from "./TrustStrip";
import ProposalGenerator from "./ProposalGenerator";
import ESGDashboard from "./ESGDashboard";
import CaseStudies from "./CaseStudies";

export default function HomePage() {
  return (
    <div className="space-y-12 px-4 py-12 md:px-8 md:py-16">
      <Hero />
      <Services />
      <TrustStrip />
      <ProposalGenerator />
      <ESGDashboard />
      <CaseStudies />
    </div>
  );
}
