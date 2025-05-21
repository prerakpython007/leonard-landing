
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { X } from 'lucide-react';

// Define the interface for Legal Support info
interface LegalSupportInfo {
  id: number;
  title: string;
  description: string;
  category: string;
  detailedContent: string;
}

const legalSupportInfo: LegalSupportInfo[] = [
  {
    id: 1,
    title: 'What is Global Legal Support?',
    description: 'Legal support for Indian startups going global involves tailored solutions to navigate international IP laws, compliance, and business regulations.',
    category: 'Support Basics',
    detailedContent: `
      • Guides startups on international IP protection.
      • Ensures compliance with foreign regulatory frameworks.
      • Supports business setup in global markets.
      • Mitigates risks of IP infringement or legal disputes.
      • Facilitates cross-border contracts and licensing.
      • Aligns legal strategies with global expansion goals.
    `,
  },
  {
    id: 2,
    title: 'Benefits of Legal Support',
    description: 'Legal support enables Indian startups to protect their brand, comply with global laws, and compete effectively in international markets.',
    category: 'Advantages',
    detailedContent: `
      • Secures IP assets in multiple jurisdictions.
      • Reduces legal and financial risks abroad.
      • Enhances brand credibility in global markets.
      • Simplifies compliance with diverse regulations.
      • Supports seamless market entry and growth.
      • Strengthens competitive positioning globally.
    `,
  },
  {
    id: 3,
    title: 'Global Expansion Process',
    description: 'The process includes assessing legal needs, securing IP, setting up operations, and ensuring compliance in target markets.',
    category: 'Process Guide',
    detailedContent: `
      • Evaluate legal and IP requirements for target markets.
      • Register trademarks, patents, or copyrights internationally.
      • Select appropriate business structures (e.g., subsidiary).
      • Obtain necessary regulatory approvals in foreign jurisdictions.
      • Establish operations with tax and labor compliance.
      • Monitor and enforce IP rights globally.
    `,
  },
  {
    id: 4,
    title: 'IP Protection Globally',
    description: 'Protecting IP internationally involves leveraging treaties like Madrid, PCT, and Hague to secure startup assets in key markets.',
    category: 'IP Management',
    detailedContent: `
      • File trademarks via the Madrid Protocol.
      • Secure patents through the PCT or national filings.
      • Register designs under the Hague System.
      • Monitor global markets for IP infringements.
      • Enforce IP rights through legal action if needed.
      • Leverage international treaties for cost-effective protection.
    `,
  },
  {
    id: 5,
    title: 'Challenges of Going Global',
    description: 'Indian startups face challenges like complex foreign regulations, high IP costs, and cultural barriers when expanding globally.',
    category: 'Considerations',
    detailedContent: `
      • Diverse legal and regulatory environments.
      • High costs of multi-jurisdictional IP filings.
      • Cultural and market differences in foreign countries.
      • Challenges in enforcing IP rights abroad.
      • Need for local expertise in target markets.
      • Risk of brand dilution without proper strategy.
    `,
  },
];

export default function LegalSupportIndianStartupsGlobalPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState<LegalSupportInfo | null>(null);

  const handleExploreClick = (info: LegalSupportInfo) => {
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
            Global Legal Support
            <span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Expand Globally with Confidence
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
                <span className="text-[#00ADB5]">Take Your Startup</span>{' '}
                <span className="text-[#393E46]">Global</span>
              </h2>
              <p className="text-[#393E46] text-lg leading-relaxed">
                Indian startups aiming for global markets face complex legal and IP challenges. At BrandSecure, we provide expert legal support to help startups protect their intellectual property, comply with international regulations, and establish a strong presence abroad. Our tailored solutions empower Indian startups to scale confidently and succeed globally.
              </p>
              <p className="text-[#393E46] text-lg font-medium">
                📩 Contact us at{' '}
                <a href="mailto:info@brandsecure.in" className="text-[#00ADB5] hover:underline">
                  info@brandsecure.in
                </a>{' '}
                to expand your startup globally today.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Legal Support Info Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Legal Support</span>{' '}
              <span className="text-[#00ADB5]">Essentials</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
            {legalSupportInfo.map((info: LegalSupportInfo, index: number) => (
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

      {/* Key Legal Services Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Key Legal</span>{' '}
              <span className="text-[#00ADB5]">Services</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
            {[
              {
                title: 'IP Registration',
                description: 'Secure trademarks, patents, and designs in global markets using international treaties.',
              },
              {
                title: 'Regulatory Compliance',
                description: 'Navigate foreign regulations for business setup, tax, and labor compliance.',
              },
              {
                title: 'Business Structure Setup',
                description: 'Establish subsidiaries, branches, or joint ventures in target markets.',
              },
              {
                title: 'Contract Drafting',
                description: 'Draft cross-border agreements for partnerships, licensing, and distribution.',
              },
              {
                title: 'IP Enforcement',
                description: 'Support enforcement actions against IP infringements in global markets.',
              },
              {
                title: 'Market Entry Strategy',
                description: 'Develop legal strategies for entering key markets like the US, EU, or ASEAN.',
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#00ADB5]/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold text-[#222831] mb-3">{service.title}</h3>
                <p className="text-[#393E46]/80 text-base leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Expansion Process Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">How to Expand</span>{' '}
              <span className="text-[#00ADB5]">Globally</span>
            </h2>
          </div>
          <div className="space-y-8">
            {[
              {
                step: '1. Legal and Market Assessment',
                description: 'Evaluate legal, IP, and market requirements for target countries.',
              },
              {
                step: '2. IP Protection',
                description: 'Secure trademarks, patents, or designs in target markets.',
              },
              {
                step: '3. Business Setup',
                description: 'Establish a compliant business entity in target jurisdictions.',
              },
              {
                step: '4. Regulatory Approvals',
                description: 'Obtain necessary permits and comply with local regulations.',
              },
              {
                step: '5. Ongoing Support',
                description: 'Monitor IP and compliance for sustained global operations.',
              },
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

      {/* Eligibility and Requirements Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Who Can</span>{' '}
              <span className="text-[#00ADB5]">Benefit?</span>
            </h2>
          </div>
          <motion.div
            className="bg-white rounded-xl p-8 shadow-md border border-[#00ADB5]/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-[#222831] mb-3">Eligible Startups</h3>
            <ul className="text-[#393E46]/80 list-disc list-inside mb-6">
              <li>Indian startups planning global expansion</li>
              <li>Businesses with IP assets like trademarks or patents</li>
              <li>Tech, e-commerce, or consumer startups targeting global markets</li>
              <li>Startups seeking international licensing or partnerships</li>
              <li>Companies needing compliance with foreign regulations</li>
            </ul>
            <h3 className="text-xl font-bold text-[#222831] mb-3">Requirements for Engagement</h3>
            <p className="text-[#393E46]/80 mb-4">Requirements vary by case but generally include:</p>
            <ul className="text-[#393E46]/80 list-disc list-inside">
              <li>Details of IP assets and business objectives</li>
              <li>Information on target markets and expansion plans</li>
              <li>Documentation for existing IP registrations</li>
              <li>Details of proposed business structures abroad</li>
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
              <span className="text-[#00ADB5]">Ready to Go</span>{' '}
              <span className="text-[#393E46]">Global?</span>
            </h2>
            <p className="text-[#393E46] text-lg leading-relaxed mb-6">
              Partner with BrandSecure for expert legal support to protect your IP and navigate global markets, empowering your Indian startup to succeed internationally with confidence.
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
