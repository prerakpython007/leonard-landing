'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';
import Link from 'next/link';

// Define the interface for procurement support info
interface ProcurementInfo {
  id: number;
  title: string;
  description: string;
  category: string;
  detailedContent: string;
}

const procurementInfo: ProcurementInfo[] = [
  {
    id: 1,
    title: 'Supplier Risk Assessment',
    description: 'Evaluate supplier risks to strengthen customer-side procurement decisions.',
    category: 'Risk Assessment',
    detailedContent: `
      • Conduct due diligence on supplier financial and operational stability.
      • Analyze supplier track record and compliance history.
      • Assess risks from supply chain disruptions.
      • Evaluate geopolitical and currency risks for global suppliers.
      • Identify ethical and anti-corruption compliance issues.
      • Provide risk reports to inform procurement decisions.
    `,
  },
  {
    id: 2,
    title: 'Optimized Procurement Contracts',
    description: 'Craft contracts to minimize risks and ensure supplier accountability.',
    category: 'Contract Optimization',
    detailedContent: `
      • Include clear scope, deliverables, and performance metrics.
      • Add liability and indemnification clauses to limit exposure.
      • Structure milestone-based payment terms for cash flow control.
      • Incorporate termination rights for non-performance.
      • Ensure clauses for regulatory and ethical compliance.
      • Draft flexible contracts for dynamic procurement needs.
    `,
  },
  {
    id: 3,
    title: 'Supplier Performance Monitoring',
    description: 'Track supplier performance to ensure quality and compliance in procurement.',
    category: 'Performance Oversight',
    detailedContent: `
      • Define KPIs for supplier quality, delivery, and compliance.
      • Conduct regular performance and compliance audits.
      • Monitor supplier adherence to contract terms.
      • Implement escalation processes for performance issues.
      • Use performance bonds for critical suppliers.
      • Review deliverables against procurement standards.
    `,
  },
  {
    id: 4,
    title: 'Strategic Vendor Selection',
    description: 'Support customer-side vendor selection with risk-based insights.',
    category: 'Vendor Selection',
    detailedContent: `
      • Evaluate vendors based on financial health and reliability.
      • Assess vendor compliance with industry standards.
      • Analyze vendor capacity to meet procurement needs.
      • Support RFP and bidding process with risk insights.
      • Ensure vendor alignment with customer objectives.
      • Provide templates for consistent vendor evaluations.
    `,
  },
  {
    id: 5,
    title: 'Global Procurement Strategies',
    description: 'Navigate international procurement with supplier risk insights.',
    category: 'Global Strategies',
    detailedContent: `
      • Address risks in cross-border supplier contracts.
      • Ensure compliance with international trade regulations.
      • Mitigate currency and geopolitical risks in procurement.
      • Draft multi-jurisdictional procurement agreements.
      • Support global vendor selection with risk analysis.
      • Align contracts with local procurement laws.
    `,
  },
];

export default function ProcurementSupportPage() {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [selectedInfo, setSelectedInfo] = useState<ProcurementInfo | null>(null);

  const handleExploreClick = (info: ProcurementInfo) => {
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
              aria-label="Close popup"
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
            Procurement Support
            <span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Strengthen Customer-Side Procurement with Supplier Risk Insights
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
                <span className="text-[#00ADB5]">Expert Support</span>{' '}
                <span className="text-[#393E46]">for Customer-Side Procurement</span>
              </h2>
              <p className="text-[#393E46] text-lg leading-relaxed">
                At Leonard Corporate Solutions, we empower customers with supplier risk insights to strengthen procurement processes. Since 2008, we have helped businesses optimize contracts, select reliable vendors, and ensure compliance through strategic procurement support.
              </p>
              <p className="text-[#393E46] text-lg font-medium">
                📩 Contact us at{' '}
                <a href="mailto:info@leonardsolutions.in" className="text-[#00ADB5] hover:underline">
                  info@leonardsolutions.in
                </a>{' '}
                to enhance your procurement strategy today.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Procurement Info Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Procurement Support</span>{' '}
              <span className="text-[#00ADB5]">Essentials</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
            {procurementInfo.map((info: ProcurementInfo, index: number) => (
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
                    className="inline-flex items-center text-[#00ADB5] font-medium hover:text-[#222831] transition-colors duration-300 mt-4"
                    aria-label={`Explore ${info.title}`}
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

      {/* Key Procurement Services Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Key Procurement</span>{' '}
              <span className="text-[#00ADB5]">Support Services</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
            {[
              { title: 'Supplier Risk Analysis', description: 'Evaluate supplier risks to inform procurement decisions.' },
              { title: 'Contract Optimization', description: 'Craft contracts to minimize risks and ensure accountability.' },
              { title: 'Performance Monitoring', description: 'Track supplier performance for quality and compliance.' },
              { title: 'Vendor Selection', description: 'Support strategic vendor selection with risk insights.' },
              { title: 'Global Procurement', description: 'Navigate international procurement with risk analysis.' },
              { title: 'Negotiation Support', description: 'Secure favorable terms in procurement contracts.' },
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

      {/* Procurement Process Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">How to Strengthen</span>{' '}
              <span className="text-[#00ADB5]">Customer-Side Procurement</span>
            </h2>
          </div>
          <div className="space-y-8">
            {[
              { step: '1. Assess Procurement Needs', description: 'Identify procurement objectives and supplier requirements.' },
              { step: '2. Evaluate Supplier Risks', description: 'Analyze supplier financial and operational risks.' },
              { step: '3. Draft Optimized Contracts', description: 'Create contracts with clear terms and protections.' },
              { step: '4. Monitor Supplier Performance', description: 'Track compliance and quality with KPIs.' },
              { step: '5. Refine Procurement Strategy', description: 'Update processes based on risk insights.' },
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
              <span className="text-[#222831]">Who Needs</span>{' '}
              <span className="text-[#00ADB5]">Procurement Support</span>
            </h2>
          </div>
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

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#222831] mb-3">Who Needs Procurement Support?</h3>
                <ul className="text-[#393E46]/80 list-disc list-inside mb-6">
                  <li>Businesses managing complex procurement processes</li>
                  <li>Organizations seeking reliable supplier partnerships</li>
                  <li>Companies in regulated industries (e.g., public sector, healthcare)</li>
                  <li>Firms with international procurement operations</li>
                  <li>Businesses aiming to optimize supplier contracts</li>
                  <li>Entities needing risk-based vendor selection</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#222831] mb-3">Requirements for Procurement Support</h3>
                <p className="text-[#393E46]/80 mb-4">Key information needed to provide effective advisory includes:</p>
                <ul className="text-[#393E46]/80 list-disc list-inside">
                  <li>Procurement scope and objectives</li>
                  <li>Supplier financial and performance data</li>
                  <li>Regulatory and compliance requirements</li>
                  <li>Risk tolerance and budget constraints</li>
                  <li>Existing contracts and vendor details</li>
                  <li>Negotiation priorities and goals</li>
                </ul>
              </div>
            </div>
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
              <span className="text-[#00ADB5]">Ready to Strengthen</span>{' '}
              <span className="text-[#393E46]">Your Procurement?</span>
            </h2>
            <p className="text-[#393E46] text-lg leading-relaxed mb-6">
              Partner with Leonard Corporate Solutions to enhance customer-side procurement with supplier risk insights. Start today to optimize contracts and ensure reliable vendor partnerships.
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