
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { X } from 'lucide-react';

// Define the interface for GI enforcement info
interface GIEnforcementInfo {
  id: number;
  title: string;
  description: string;
  category: string;
  detailedContent: string;
}

const giEnforcementInfo: GIEnforcementInfo[] = [
  {
    id: 1,
    title: 'What is GI Enforcement?',
    description: 'GI enforcement involves legal actions to prevent misuse or infringement of registered GIs, ensuring their exclusivity.',
    category: 'Basics',
    detailedContent: `
      • Geographical Indication (GI) enforcement protects registered GIs from unauthorized use or imitation.
      • Governed by the Geographical Indications of Goods (Registration and Protection) Act, 1999 in India.
      • Safeguards products like Tirupati Laddu or Chanderi Fabric.
      • Involves legal actions such as lawsuits or cease and desist notices.
      • Ensures exclusivity and authenticity of GI-tagged products.
      • Maintains consumer trust and producer rights.
    `,
  },
  {
    id: 2,
    title: 'Why Enforce GIs?',
    description: 'Enforcement protects producer rights, maintains product authenticity, and prevents market dilution.',
    category: 'Benefits',
    detailedContent: `
      • Protects economic interests of producers and communities.
      • Maintains product authenticity and consumer trust.
      • Prevents market dilution by counterfeit or inferior products.
      • Upholds the reputation of GI-tagged products.
      • Ensures fair competition in the market.
      • Supports cultural and regional heritage preservation.
    `,
  },
  {
    id: 3,
    title: 'Legal Mechanisms',
    description: 'The GI Act, 1999 allows for civil and criminal remedies against GI infringers in India.',
    category: 'Legal',
    detailedContent: `
      • Governed by the GI Act, 1999 in India.
      • Provides civil remedies like injunctions and damages.
      • Allows criminal prosecution for willful misuse of GI tags.
      • Enables seizure of infringing goods by authorities.
      • Supports enforcement through courts and customs.
      • Ensures compliance with GI Registry regulations.
    `,
  },
  {
    id: 4,
    title: 'Monitoring Infringement',
    description: 'Regular market and online surveillance helps identify unauthorized use of GI tags.',
    category: 'Monitoring',
    detailedContent: `
      • Involves regular surveillance of physical and online markets.
      • Identifies unauthorized use or imitation of GI tags.
      • Requires collaboration with producers and trade bodies.
      • Uses certification marks to verify authenticity.
      • Involves reporting mechanisms for suspected infringements.
      • Supports proactive enforcement through monitoring plans.
    `,
  },
  {
    id: 5,
    title: 'Dispute Resolution',
    description: 'Resolve GI disputes through negotiation, mediation, or litigation to uphold rights.',
    category: 'Resolution',
    detailedContent: `
      • Resolves disputes through negotiation or mediation for amicable solutions.
      • Involves litigation for unresolved or severe infringements.
      • Requires evidence of infringement and valid GI registration.
      • Supports alternative dispute resolution (ADR) mechanisms.
      • Ensures producer rights are upheld in disputes.
      • Maintains market integrity through fair resolutions.
    `,
  },
];

export default function GIEnforcementPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState<GIEnforcementInfo | null>(null);

  const handleExploreClick = (info: GIEnforcementInfo) => {
    setSelectedInfo(info);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedInfo(null);
  };

  return (
    <div className="min-h-screen bg-[#EEEEEE] relative rounded-b-[170px] font-montserrat overflow-hidden">
      {/* Grid Pattern Overlay */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.025) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px',
        }}
      />

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
        className="relative h-[80vh] flex items-center justify-center px-4 md:px-16 lg:px-24 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Corner Angles */}
        <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-[#00ADB5] hidden lg:block" />
        <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-[#00ADB5] hidden lg:block" />
        <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-[#00ADB5] hidden lg:block" />
        <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-[#00ADB5] hidden lg:block" />

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto text-center"
        >
          <h1 className="text-6xl md:text-8xl font-extrabold text-[#222831] relative inline-block tracking-tight">
            GI Enforcement
            <span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Defend Your GI Rights with Expert Enforcement Services
          </p>
        </motion.div>
      </motion.section>

      {/* Introduction Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="relative max-w-3xl mx-auto px-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Corner Angles */}
            <div className="absolute -top-8 -left-8 w-8 h-8 border-t-2 border-l-2 border-[#00ADB5]" />
            <div className="absolute -top-8 -right-8 w-8 h-8 border-t-2 border-r-2 border-[#00ADB5]" />
            <div className="absolute -bottom-8 -left-8 w-8 h-8 border-b-2 border-l-2 border-[#00ADB5]" />
            <div className="absolute -bottom-8 -right-8 w-8 h-8 border-b-2 border-r-2 border-[#00ADB5]" />

            <div className="text-center space-y-6">
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-[#00ADB5]">Enforce Your</span>{' '}
                <span className="text-[#393E46]">Geographical Indication</span>
              </h2>
              <p className="text-[#393E46] text-lg leading-relaxed">
                GI enforcement, under the Geographical Indications of Goods (Registration and Protection) Act, 1999, protects products like Tirupati Laddu or Chanderi Fabric from misuse. At DesignSecure, we provide robust enforcement services, including monitoring and legal action, to safeguard your GI’s authenticity and producer rights.
              </p>
              <p className="text-[#393E46] text-lg font-medium">
                📩 Contact us at{' '}
                <a href="mailto:info@designsecure.in" className="text-[#00ADB5] hover:underline">
                  info@designsecure.in
                </a>{' '}
                to start enforcing your GI today.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GI Enforcement Info Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">GI Enforcement</span>{' '}
              <span className="text-[#00ADB5]">Essentials</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
            {giEnforcementInfo.map((info: GIEnforcementInfo, index: number) => (
              <motion.div
                key={info.id}
                className="group bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#00ADB5]/10 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <span className="absolute top-4 right-4 text-[#00ADB5] text-xl opacity-30 group-hover:opacity-100 transition-opacity duration-300">✦</span>
                <div className="flex flex-col gap-5 relative z-10">
                  <div className="px-3 py-1 text-xs font-medium bg-[#00ADB5]/10 text-[#00ADB5] rounded-full w-fit">
                    {info.category}
                  </div>
                  <h3 className="text-xl font-bold text-[#222831] mb-3 group-hover:text-[#00ADB5] transition-colors duration-300">
                    {info.title}
                  </h3>
                  <p className="text-[#393E46]/80 text-base leading-relaxed line-clamp-3">{info.description}</p>
                  <button
                    onClick={() => handleExploreClick(info)}
                    className="inline-flex items-center text-[#00ADB5] font-medium hover:text-[#222831] transition-colors duration-300 mt-4 cursor-pointer"
                  >
                    Explore
                    <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#00ADB5] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enforcement Methods Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">GI Enforcement</span>{' '}
              <span className="text-[#00ADB5]">Methods</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
            {[
              { title: 'Civil Litigation', description: 'File lawsuits to seek injunctions and damages against infringers.' },
              { title: 'Criminal Prosecution', description: 'Pursue criminal charges for willful GI misuse under the GI Act.' },
              { title: 'Cease and Desist Notices', description: 'Issue warnings to stop unauthorized use before escalating to court.' },
              { title: 'Mediation', description: 'Resolve disputes amicably through negotiation or mediation.' },
            ].map((method, index) => (
              <motion.div
                key={method.title}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#00ADB5]/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold text-[#222831] mb-3">{method.title}</h3>
                <p className="text-[#393E46]/80 text-base leading-relaxed">{method.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enforcement Process Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">How to Enforce</span>{' '}
              <span className="text-[#00ADB5]">a GI in India</span>
            </h2>
          </div>
          <div className="space-y-8">
            {[
              { step: '1. Detect Infringement', description: 'Monitor markets and online platforms for unauthorized GI use.' },
              { step: '2. Issue Warnings', description: 'Send cease and desist notices to infringers.' },
              { step: '3. Legal Action', description: 'File civil or criminal cases to enforce GI rights.' },
              { step: '4. Resolve Disputes', description: 'Use mediation or litigation to settle infringement issues.' },
            ].map((step, index) => (
              <motion.div
                key={step.step}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#00ADB5]/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold text-[#222831] mb-3">{step.step}</h3>
                <p className="text-[#393E46]/80 text-base leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Requirements for</span>{' '}
              <span className="text-[#00ADB5]">GI Enforcement</span>
            </h2>
          </div>
          <motion.div
            className="bg-white rounded-xl p-8 shadow-md border border-[#00ADB5]/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-[#222831] mb-3">Who Can Enforce a GI?</h3>
            <ul className="text-[#393E46]/80 list-disc list-inside mb-6">
              <li>Registered GI owners</li>
              <li>Authorized producer groups</li>
              <li>Legal representatives</li>
            </ul>
            <h3 className="text-xl font-bold text-[#222831] mb-3">Required Actions</h3>
            <p className="text-[#393E46]/80 mb-4">Key actions include:</p>
            <ul className="text-[#393E46]/80 list-disc list-inside">
              <li>Valid GI registration certificate</li>
              <li>Evidence of infringement</li>
              <li>Legal representation</li>
              <li>Monitoring reports</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="relative max-w-3xl mx-auto px-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Corner Angles */}
            <div className="absolute -top-8 -left-8 w-8 h-8 border-t-2 border-l-2 border-[#00ADB5]" />
            <div className="absolute -top-8 -right-8 w-8 h-8 border-t-2 border-r-2 border-[#00ADB5]" />
            <div className="absolute -bottom-8 -left-8 w-8 h-8 border-b-2 border-l-2 border-[#00ADB5]" />
            <div className="absolute -bottom-8 -right-8 w-8 h-8 border-b-2 border-r-2 border-[#00ADB5]" />

            <h2 className="text-4xl font-bold mb-4">
              <span className="text-[#00ADB5]">Ready to Enforce</span>{' '}
              <span className="text-[#393E46]">Your GI?</span>
            </h2>
            <p className="text-[#393E46] text-lg leading-relaxed mb-6">
              Defend your GI rights with DesignSecure’s expert enforcement services. Start today to protect authenticity and producer rights.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center px-6 py-3 bg-[#00ADB5] text-white font-medium rounded-full hover:bg-[#222831] transition-colors duration-300"
            >
              Get Started
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Back to Home Link */}
      <div className="container mx-auto px-4 sm:px-6 md:px-16 lg:px-24 py-8">
        <Link
          href="/"
          className="inline-flex items-center text-[#393E46] hover:text-[#00ADB5] transition-colors"
        >
          <span className="mr-2">←</span> Back to Home
        </Link>
      </div>
    </div>
  );
}
