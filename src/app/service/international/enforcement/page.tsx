'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { X } from 'lucide-react';

interface EnforcementInfo {
  id: number;
  title: string;
  description: string;
  category: string;
  detailedContent: string;
}

const enforcementInfo: EnforcementInfo[] = [
  {
    id: 1,
    title: 'What is Cease & Desist + Enforcement?',
    description: 'Cease and desist notices and enforcement actions protect IP by demanding infringers stop violations and pursuing legal remedies in foreign jurisdictions.',
    category: 'Service Basics',
    detailedContent: `
      • Issues formal cease and desist notices to infringers.
      • Pursues legal actions like lawsuits or injunctions.
      • Targets trademark, patent, and copyright violations.
      • Operates in multiple international jurisdictions.
      • Protects brand integrity and market position.
      • Aligns with global IP enforcement frameworks.
    `,
  },
  {
    id: 2,
    title: 'Benefits of Enforcement',
    description: 'Enforcement actions deter IP violations, recover damages, and strengthen brand protection in international markets.',
    category: 'Advantages',
    detailedContent: `
      • Stops ongoing IP infringements quickly.
      • Recovers financial damages from violators.
      • Deters future infringements through legal precedent.
      • Enhances brand credibility and trust.
      • Supports compliance with international IP laws.
      • Protects market share from counterfeit competition.
    `,
  },
  {
    id: 3,
    title: 'Enforcement Process',
    description: 'The process involves identifying infringements, issuing notices, negotiating resolutions, and pursuing legal actions in foreign jurisdictions.',
    category: 'Process Guide',
    detailedContent: `
      • Identify and document IP infringements.
      • Draft and send cease and desist notices.
      • Negotiate settlements or compliance agreements.
      • File lawsuits or seek injunctions if needed.
      • Collaborate with local authorities for enforcement.
      • Monitor compliance and follow-up actions.
    `,
  },
  {
    id: 4,
    title: 'Legal Expertise in Foreign Jurisdictions',
    description: 'Specialized legal teams navigate diverse IP laws to enforce rights effectively across international markets.',
    category: 'Global Expertise',
    detailedContent: `
      • Leverages local legal experts in key jurisdictions.
      • Navigates diverse IP laws and regulations.
      • Coordinates with international law firms for enforcement.
      • Ensures compliance with local court procedures.
      • Maximizes success rates in foreign legal systems.
      • Provides centralized case management globally.
    `,
  },
  {
    id: 5,
    title: 'Challenges of Foreign Enforcement',
    description: 'Enforcing IP in foreign jurisdictions involves navigating complex legal systems, high costs, and cultural differences.',
    category: 'Considerations',
    detailedContent: `
      • Variations in IP laws and enforcement mechanisms.
      • High costs of multi-jurisdictional legal actions.
      • Challenges in coordinating across borders.
      • Cultural and language barriers in legal proceedings.
      • Risk of delayed or inconsistent rulings.
      • Need for robust evidence collection internationally.
    `,
  },
];

export default function CeaseAndDesistEnforcementForeignJurisdictionsPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState<EnforcementInfo | null>(null);

  const handleExploreClick = (info: EnforcementInfo) => {
    setSelectedInfo(info);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedInfo(null);
  };

  return (
    <div className="min-h-screen bg-black relative font-sans overflow-hidden">
      {/* Popup */}
      {showPopup && selectedInfo && (
        <motion.div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-[1000] p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={closePopup}
        >
          <motion.div
            className="bg-white rounded-xl max-w-5xl w-full max-h-[95vh] overflow-y-auto p-10 shadow-xl border border-[#00ADB5]/20 relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            style={{ scrollbarWidth: 'thin', scrollbarColor: '#00ADB5 #222831' }}
          >
            <style>{`
              ::-webkit-scrollbar { width: 8px; }
              ::-webkit-scrollbar-track { background: #222831; border-radius: 4px; }
              ::-webkit-scrollbar-thumb { background: #00ADB5; border-radius: 4px; }
              ::-webkit-scrollbar-thumb:hover { background: #008b91; }
            `}</style>
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 p-2 text-[#393E46] hover:text-[#00ADB5] hover:bg-[#00ADB5]/10 rounded-full"
            >
              <X size={32} />
            </button>
            <h2 className="text-3xl font-bold text-[#222831] mb-6 border-b-2 border-[#00ADB5]/30 pb-2">{selectedInfo.title}</h2>
            <div className="text-[#393E46]/85 text-lg leading-relaxed">
              {selectedInfo.detailedContent.split('\n').map((line, index) => {
                line = line.trim();
                if (!line) return null;
                return (
                  <p key={index} className="mb-2">
                    {line.startsWith('•') ? line : `• ${line}`}
                  </p>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Hero Section */}
      <motion.section
        className="relative h-[90vh] flex items-center justify-center px-4 md:px-16 lg:px-24 overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1600&q=80)`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto text-center"
        >
          <h1 className="text-6xl md:text-8xl font-extrabold text-white relative inline-block tracking-tight">
            Cease & Desist
          </h1>
          <p className="mt-8 text-xl text-white/90 max-w-2xl mx-auto font-light">
            Protect Your IP Globally
          </p>
        </motion.div>
      </motion.section>

      {/* Introduction Section */}
      <section className="relative bg-white px-4 py-28 md:px-16 lg:px-24">
        <div className="relative mx-auto max-w-7xl">
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative flex items-center flex-col lg:flex-row">
              <div
                className="relative w-full lg:w-3/5 z-20 mb-8 lg:mb-0 lg:mr-[-120px] ml-[-10px]"
                style={{ filter: "drop-shadow(0 25px 80px rgba(0, 0, 0, 0.12))" }}
              >
                <div
                  className="bg-white/98 p-8 md:p-10"
                  style={{ clipPath: "polygon(0 0, calc(100% - 40px) 0, 100% 100%, 0 100%)" }}
                >
                  <div className="text-center mb-8">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                      <span className="text-[#00ADB5]">Enforce Your IP</span>{" "}
                      <span className="text-[#393E46]">Worldwide</span>
                    </h2>
                    <p className="text-base sm:text-lg text-[#393E46] leading-relaxed">
                      Protecting intellectual property in foreign jurisdictions requires swift and strategic action. At BrandSecure, we specialize in issuing cease and desist notices and pursuing enforcement actions to stop IP infringements, recover damages, and safeguard your brand across international markets.
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-[#393E46] text-lg font-medium mb-4">
                      📩 Contact us at{" "}
                      <a href="mailto:info@brandsecure.in" className="text-[#00ADB5] hover:underline">
                        info@brandsecure.in
                      </a>{" "}
                      to enforce your IP rights today.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative z-10 h-[420px] w-full lg:w-2/5">
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1400"
                    alt="Legal team discussing documents"
                    className="h-full w-full object-cover object-right"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enforcement Info Section */}
      <section className="py-32 px-4 md:px-16 bg-black lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#eeeeee]">Enforcement</span>{" "}
              <span className="text-[#00ADB5]">Essentials</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 md:gap-12 px-2 sm:px-4 md:px-16">
            {enforcementInfo.map((info: EnforcementInfo, index: number) => {
              const legalImages = [
                "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80", // Legal documents
                "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80", // Courtroom
                "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80", // Judge's gavel
                "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80", // Lawyer working
                "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80", // Contract signing
              ]
              const bgImg = legalImages[index % legalImages.length]
              return (
                <motion.div
                  key={info.id}
                  className="group bg-cover bg-center p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-[#222]/40 hover:border-[#00ADB5] relative overflow-hidden"
                  style={{
                    borderRadius: 0,
                    backgroundImage: `linear-gradient(120deg, rgba(0,0,0,0.85) 80%, rgba(0,0,0,0.7)), url(${bgImg})`,
                    backgroundBlendMode: "multiply",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="flex flex-col gap-5 relative z-10">
                    <div
                      className="px-3 py-1 text-xs font-medium bg-white/10 text-white w-fit uppercase tracking-wider"
                      style={{ borderRadius: 0 }}
                    >
                      {info.category}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{info.title}</h3>
                    <p className="text-[#e0e0e0] text-base leading-relaxed">{info.description}</p>
                    <button
                      onClick={() => handleExploreClick(info)}
                      className="inline-flex items-center text-[#00ADB5] font-medium hover:text-white transition-colors duration-300 mt-4 cursor-pointer group"
                    >
                      Explore
                      <svg
                        className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300 pointer-events-none" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Key Services Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-[#000000]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#eeeeee]">Key Enforcement</span>{" "}
              <span className="text-[#00ADB5]">Services</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 md:gap-12 px-2 sm:px-4 md:px-16">
            {[
              { 
                title: 'Cease and Desist Notices', 
                description: 'Draft and issue notices to stop IP infringements in foreign markets.',
                category: 'Legal Notices'
              },
              { 
                title: 'Litigation Support', 
                description: 'Pursue lawsuits or injunctions to enforce IP rights internationally.',
                category: 'Court Actions'
              },
              { 
                title: 'Negotiation Services', 
                description: 'Negotiate settlements to resolve IP disputes efficiently.',
                category: 'Resolution'
              },
              { 
                title: 'Local Collaboration', 
                description: 'Work with local authorities and law firms for effective enforcement.',
                category: 'Global Network'
              },
              { 
                title: 'Evidence Collection', 
                description: 'Gather robust evidence to support legal actions abroad.',
                category: 'Investigation'
              },
              { 
                title: 'Compliance Monitoring', 
                description: 'Monitor infringers to ensure compliance post-enforcement.',
                category: 'Ongoing Protection'
              },
            ].map((service, index) => {
              const serviceImages = [
                "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80", // Document signing
                "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80", // Court building
                "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80", // Lawyer meeting
                "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80", // Legal books
                "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80", // Evidence
                "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80", // Compliance
              ]
              const bgImg = serviceImages[index % serviceImages.length]
              return (
                <motion.div
                  key={service.title}
                  className="group bg-cover bg-center p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-[#222]/40 hover:border-[#00ADB5] relative overflow-hidden"
                  style={{
                    borderRadius: 0,
                    backgroundImage: `linear-gradient(120deg, rgba(0,0,0,0.85) 80%, rgba(0,0,0,0.7)), url(${bgImg})`,
                    backgroundBlendMode: "multiply",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="flex flex-col gap-5 relative z-10">
                    <div
                      className="px-3 py-1 text-xs font-medium bg-white/10 text-white w-fit uppercase tracking-wider"
                      style={{ borderRadius: 0 }}
                    >
                      {service.category}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-[#e0e0e0] text-base leading-relaxed">{service.description}</p>
                    <button className="inline-flex items-center text-[#00ADB5] font-medium hover:text-white transition-colors duration-300 mt-4 cursor-pointer group">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300 pointer-events-none" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Enforcement Process Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#eeeeee]">How Enforcement</span>{" "}
              <span className="text-[#00ADB5]">Works</span>
            </h2>
          </div>
          <div className="flex flex-col gap-6 sm:gap-10 md:gap-12 px-2 sm:px-4 md:px-16">
            {[
              {
                step: "1. Infringement Detection",
                description: "Identify and document IP violations in foreign markets.",
                category: "Step 1",
              },
              {
                step: "2. Cease and Desist",
                description: "Issue formal notices demanding cessation of infringing activities.",
                category: "Step 2",
              },
              {
                step: "3. Negotiation",
                description: "Engage infringers to negotiate settlements or compliance.",
                category: "Step 3",
              },
              {
                step: "4. Legal Action",
                description: "Pursue lawsuits or injunctions in foreign courts if needed.",
                category: "Step 4",
              },
              {
                step: "5. Compliance Monitoring",
                description: "Ensure ongoing compliance and address repeat violations.",
                category: "Step 5",
              },
            ].map((step, index) => {
              const processImages = [
                "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80", // Investigation
                "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80", // Notice
                "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80", // Negotiation
                "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80", // Court
                "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80", // Monitoring
              ]
              const bgImg = processImages[index % processImages.length]
              return (
                <motion.div
                  key={step.step}
                  className="group bg-cover bg-center p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-[#222]/40 hover:border-[#00ADB5] relative overflow-hidden"
                  style={{
                    borderRadius: 0,
                    backgroundImage: `linear-gradient(120deg, rgba(0,0,0,0.85) 80%, rgba(0,0,0,0.7)), url(${bgImg})`,
                    backgroundBlendMode: "multiply",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="flex flex-col gap-5 relative z-10">
                    <div
                      className="px-3 py-1 text-xs font-medium bg-white/10 text-white w-fit uppercase tracking-wider"
                      style={{ borderRadius: 0 }}
                    >
                      {step.category}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{step.step}</h3>
                    <p className="text-[#e0e0e0] text-base leading-relaxed">{step.description}</p>
                    <button className="inline-flex items-center text-[#00ADB5] font-medium hover:text-white transition-colors duration-300 mt-4 cursor-pointer group">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300 pointer-events-none" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Eligibility and Requirements Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-[#000000]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#eeeeee]">Who Can</span> <span className="text-[#00ADB5]">Benefit?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 px-2 sm:px-4 md:px-16">
            <motion.div
              className="group bg-cover bg-center p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-[#222]/40 hover:border-[#00ADB5] relative overflow-hidden"
              style={{
                borderRadius: 0,
                backgroundImage: `linear-gradient(120deg, rgba(0,0,0,0.85) 80%, rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80)`,
                backgroundBlendMode: "multiply",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -8 }}
            >
              <div className="flex flex-col gap-5 relative z-10">
                <div
                  className="px-3 py-1 text-xs font-medium bg-white/10 text-white w-fit uppercase tracking-wider"
                  style={{ borderRadius: 0 }}
                >
                  Eligibility
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Eligible Clients</h3>
                <ul className="text-[#e0e0e0] list-disc list-inside mb-6">
                  <li>Businesses with IP assets in international markets</li>
                  <li>Brands facing trademark or patent infringements</li>
                  <li>Companies in tech, luxury, or consumer goods sectors</li>
                  <li>Multinationals needing cross-border enforcement</li>
                  <li>Startups protecting IP during global expansion</li>
                </ul>
                <h3 className="text-xl font-bold text-white mb-3">Requirements for Engagement</h3>
                <p className="text-[#e0e0e0] mb-4">Requirements vary by case but generally include:</p>
                <ul className="text-[#e0e0e0] list-disc list-inside">
                  <li>Inventory of IP assets (trademarks, patents, etc.)</li>
                  <li>Details of infringements and target jurisdictions</li>
                  <li>Business objectives for enforcement actions</li>
                  <li>Documentation of existing IP registrations</li>
                </ul>
              </div>
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300 pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-black relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Left Diagonal Image - Courtroom */}
          <div
            className="absolute left-0 top-0 w-[45%] h-full"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              clipPath: "polygon(0 0, 100% 0, 80% 100%, 0 100%)",
              opacity: 0.1,
            }}
          />

          {/* Right Diagonal Image - Legal documents */}
          <div
            className="absolute right-0 top-0 w-[45%] h-full"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%)",
              opacity: 0.1,
            }}
          />

          <motion.div
            className="relative max-w-3xl mx-auto px-8 text-center z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Enforce <br />
              <span className="text-[#00ADB5]">Your IP Rights?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#e0e0e0] leading-relaxed mb-8">
              Partner with BrandSecure for expert cease and desist and enforcement services to protect your IP and combat infringements in foreign jurisdictions. Start today to safeguard your brand's integrity.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center px-8 py-4 bg-[#00ADB5] text-white font-medium hover:bg-[#222831] transition-colors duration-300 group"
              style={{ borderRadius: 0 }}
            >
              Get Started
              <svg
                className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Back to Home Link */}
   
    </div>
  );
}