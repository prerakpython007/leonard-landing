
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { X } from 'lucide-react';

// Define the interface for GI protection info
interface GIProtectionInfo {
  id: number;
  title: string;
  description: string;
  category: string;
  detailedContent: string;
}

const giProtectionInfo: GIProtectionInfo[] = [
  {
    id: 1,
    title: 'What is GI Protection?',
    description: 'GI protection safeguards products linked to a specific region from misuse, ensuring their authenticity and cultural value.',
    category: 'Basics',
    detailedContent: `
      • Geographical Indication (GI) protection ensures products tied to a specific region are not misused or imitated.
      • Governed by the Geographical Indications of Goods (Registration and Protection) Act, 1999 in India.
      • Safeguards products like Mysore Sandal Soap or Pochampally Ikat.
      • Prevents unauthorized use, preserving cultural and regional heritage.
      • Enhances consumer trust in authentic products.
      • Supports international recognition under treaties like TRIPS.
    `,
  },
  {
    id: 2,
    title: 'Why Protect GIs?',
    description: 'Protection prevents unauthorized use, preserves heritage, and enhances market exclusivity for producers.',
    category: 'Benefits',
    detailedContent: `
      • Prevents imitation and misuse of GI tags.
      • Preserves cultural and regional heritage of products.
      • Enhances market exclusivity and brand value.
      • Protects economic interests of producers and communities.
      • Boosts consumer confidence in product authenticity.
      • Facilitates global market access and competitiveness.
    `,
  },
  {
    id: 3,
    title: 'Legal Framework',
    description: 'The GI Act, 1999 provides legal mechanisms to protect registered GIs from infringement in India.',
    category: 'Legal',
    detailedContent: `
      • Governed by the GI Act, 1999 in India.
      • Provides legal recourse against unauthorized use or infringement.
      • Enables registered GI owners to seek injunctions or damages.
      • Supports enforcement through courts and customs authorities.
      • Aligns with international agreements like the Berne Convention and TRIPS.
      • Ensures compliance through the GI Registry in Chennai.
    `,
  },
  {
    id: 4,
    title: 'Monitoring GIs',
    description: 'Regular monitoring of markets and supply chains helps detect and prevent misuse of GI tags.',
    category: 'Monitoring',
    detailedContent: `
      • Involves regular surveillance of markets and supply chains.
      • Detects unauthorized use or imitation of GI tags.
      • Requires collaboration with producers and trade bodies.
      • Uses certification marks to ensure authenticity.
      • Involves reporting mechanisms for suspected infringements.
      • Strengthens protection through proactive monitoring plans.
    `,
  },
  {
    id: 5,
    title: 'Consumer Awareness',
    description: 'Educating consumers about authentic GI products strengthens protection and market demand.',
    category: 'Awareness',
    detailedContent: `
      • Educates consumers to identify genuine GI products.
      • Increases demand for authentic regional products.
      • Involves campaigns, certifications, and labeling initiatives.
      • Builds trust and loyalty among consumers.
      • Supports producers by enhancing market recognition.
      • Reduces the risk of counterfeit products through awareness.
    `,
  },
];

export default function GIProtectionPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState<GIProtectionInfo | null>(null);

  const handleExploreClick = (info: GIProtectionInfo) => {
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
            GI Protection
            <span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Safeguard Your Region’s Heritage with Expert GI Protection
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
                <span className="text-[#00ADB5]">Protect Your</span>{' '}
                <span className="text-[#393E46]">Regional Heritage</span>
              </h2>
              <p className="text-[#393E46] text-lg leading-relaxed">
                GI protection, under the Geographical Indications of Goods (Registration and Protection) Act, 1999, ensures that products like Mysore Sandal Soap or Pochampally Ikat remain exclusive to their regions. At DesignSecure, we offer expert services to monitor and protect your GI, preserving its authenticity and market value.
              </p>
              <p className="text-[#393E46] text-lg font-medium">
                📩 Contact us at{' '}
                <a href="mailto:info@designsecure.in" className="text-[#00ADB5] hover:underline">
                  info@designsecure.in
                </a>{' '}
                to start protecting your GI today.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GI Protection Info Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">GI Protection</span>{' '}
              <span className="text-[#00ADB5]">Essentials</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
            {giProtectionInfo.map((info: GIProtectionInfo, index: number) => (
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

      {/* Protection Strategies Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">GI Protection</span>{' '}
              <span className="text-[#00ADB5]">Strategies</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
            {[
              { title: 'Market Surveillance', description: 'Monitor markets to detect unauthorized use of GI tags.' },
              { title: 'Legal Actions', description: 'Initiate lawsuits against infringers to enforce GI rights.' },
              { title: 'Certification Marks', description: 'Use certification to ensure only authentic products carry the GI tag.' },
              { title: 'Consumer Education', description: 'Raise awareness to help consumers identify genuine GI products.' },
            ].map((strategy, index) => (
              <motion.div
                key={strategy.title}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#00ADB5]/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold text-[#222831] mb-3">{strategy.title}</h3>
                <p className="text-[#393E46]/80 text-base leading-relaxed">{strategy.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Protection Process Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">How to Protect</span>{' '}
              <span className="text-[#00ADB5]">a GI in India</span>
            </h2>
          </div>
          <div className="space-y-8">
            {[
              { step: '1. Register the GI', description: 'Ensure the GI is registered to establish legal protection.' },
              { step: '2. Monitor Usage', description: 'Track markets and supply chains for unauthorized use.' },
              { step: '3. Enforce Rights', description: 'Take legal action against infringers to uphold GI rights.' },
              { step: '4. Educate Stakeholders', description: 'Inform consumers and producers about authentic GI products.' },
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
              <span className="text-[#00ADB5]">GI Protection</span>
            </h2>
          </div>
          <motion.div
            className="bg-white rounded-xl p-8 shadow-md border border-[#00ADB5]/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-[#222831] mb-3">Who Can Protect a GI?</h3>
            <ul className="text-[#393E46]/80 list-disc list-inside mb-6">
              <li>Registered GI owners</li>
              <li>Authorized producer groups</li>
              <li>Trade associations</li>
            </ul>
            <h3 className="text-xl font-bold text-[#222831] mb-3">Required Actions</h3>
            <p className="text-[#393E46]/80 mb-4">Key actions include:</p>
            <ul className="text-[#393E46]/80 list-disc list-inside">
              <li>Valid GI registration certificate</li>
              <li>Monitoring plan for market surveillance</li>
              <li>Legal representation for enforcement</li>
              <li>Consumer awareness campaigns</li>
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
              <span className="text-[#00ADB5]">Ready to Protect</span>{' '}
              <span className="text-[#393E46]">Your GI?</span>
            </h2>
            <p className="text-[#393E46] text-lg leading-relaxed mb-6">
              Safeguard your region’s heritage with DesignSecure’s expert GI protection services. Start today to ensure authenticity and exclusivity for your regional products.
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
