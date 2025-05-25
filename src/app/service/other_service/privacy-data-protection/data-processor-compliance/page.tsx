
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';
import Link from 'next/link';
import Head from 'next/head';

interface DataProcessorComplianceInfo {
  id: number;
  title: string;
  description: string;
  category: string;
  detailedContent: string;
}

const complianceInfo: DataProcessorComplianceInfo[] = [
  {
    id: 1,
    title: 'Contract Review',
    description: 'We analyze contracts to ensure compliance with data processor rules.',
    category: 'Analysis',
    detailedContent: `
      • Review existing contracts to identify data processor obligations.
      • Ensure contracts align with GDPR, DPDP Act 2023, and other regulations.
      • Verify inclusion of mandatory data protection clauses.
      • Highlight gaps or risks in current agreements.
      • Provide recommendations for compliance enhancements.
    `,
  },
  {
    id: 2,
    title: 'Clause Drafting',
    description: 'We include necessary clauses for data protection and liability.',
    category: 'Drafting',
    detailedContent: `
      • Draft data protection clauses specifying processor responsibilities.
      • Include provisions for data security, breach notification, and audits.
      • Ensure clauses cover liability and indemnification for non-compliance.
      • Customize clauses to reflect your role as a data processor.
      • Align clauses with client and regulatory requirements.
    `,
  },
  {
    id: 3,
    title: 'Compliance Audits',
    description: 'We assess your processes to ensure adherence to legal standards.',
    category: 'Auditing',
    detailedContent: `
      • Conduct audits of data processing activities and workflows.
      • Evaluate compliance with GDPR, DPDP, and other data protection laws.
      • Identify risks in data handling, storage, and transfer processes.
      • Provide detailed audit reports with actionable recommendations.
      • Assist in implementing audit findings to achieve compliance.
    `,
  },
];

export default function DataProcessorCompliancePage() {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [selectedInfo, setSelectedInfo] = useState<DataProcessorComplianceInfo | null>(null);

  const handleExploreClick = (info: DataProcessorComplianceInfo) => {
    setSelectedInfo(info);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedInfo(null);
  };

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Ensure your contracts meet data processor obligations under data protection laws. Protect your business with our expert compliance services in India and globally."
        />
        <meta
          name="keywords"
          content="data processor compliance, data protection obligations, legal compliance data processing, business data compliance"
        />
        <title>Data Processor Compliance Services | Leonard Corporate Solutions</title>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <div className="min-h-screen bg-[#EEEEEE] relative rounded-b-[50px] sm:rounded-b-[100px] md:rounded-b-[170px] font-montserrat overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12">
        <div
          className="fixed inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.025) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.025) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px sm:30px 30px',
          }}
        />
        {showPopup && selectedInfo && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-[1000] p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closePopup}
          >
            <motion.div
              className="bg-white rounded-xl max-w-2xl sm:max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 md:p-10 shadow-xl border border-[#00ADB5]/20 relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              style={{ scrollbarWidth: 'thin', scrollbarColor: '#00ADB5 #222831' }}
            >
              <style jsx>{`
                ::-webkit-scrollbar {
                  width: 8px;
                }
                ::-webkit-scrollbar-track {
                  background: #222831;
                  border-radius: 4px;
                }
                ::-webkit-scrollbar-thumb {
                  background: #00ADB5;
                  border-radius: 4px;
                }
                ::-webkit-scrollbar-thumb:hover {
                  background: #008b91;
                }
              `}</style>
              <button
                onClick={closePopup}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1 sm:p-2 text-[#393E46] hover:text-[#00ADB5] hover:bg-[#00ADB5]/10 rounded-full"
                aria-label="Close popup"
              >
                <X size={24} />
              </button>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#222831] mb-4 sm:mb-6 border-b-2 border-[#00ADB5]/30 pb-2">{selectedInfo.title}</h2>
              <div className="text-[#393E46]/85 text-sm sm:text-base md:text-lg leading-relaxed">
                {selectedInfo.detailedContent.split('\n').map((line: string, index: number) => {
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
        <motion.section className="relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[80vh] flex items-center justify-center px-4">
          <div className="absolute top-4 left-4 w-8 h-8 sm:top-6 sm:left-6 sm:w-10 sm:h-10 md:top-8 md:left-8 md:w-12 md:h-12 border-t-2 border-l-2 border-[#00ADB5] hidden lg:block" />
          <div className="absolute top-4 right-4 w-8 h-8 sm:top-6 sm:right-6 sm:w-10 sm:h-10 md:top-8 md:right-8 md:w-12 md:h-12 border-t-2 border-r-2 border-[#00ADB5] hidden lg:block" />
          <div className="absolute bottom-4 left-4 w-8 h-8 sm:bottom-6 sm:left-6 sm:w-10 sm:h-10 md:bottom-8 md:left-8 md:w-12 md:h-12 border-b-2 border-l-2 border-[#00ADB5] hidden lg:block" />
          <div className="absolute bottom-4 right-4 w-8 h-8 sm:bottom-6 sm:right-6 sm:w-10 sm:h-10 md:bottom-8 md:right-8 md:w-12 md:h-12 border-b-2 border-r-2 border-[#00ADB5] hidden lg:block" />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl mx-auto text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#222831] relative inline-block tracking-tight">
              Data Processor Compliance
              <span className="absolute top-1/2 -left-8 sm:-left-12 md:-left-16 -translate-y-1/2 text-[#00ADB5] text-3xl sm:text-4xl md:text-5xl animate-pulse opacity-50">✦</span>
              <span className="absolute top-1/2 -right-8 sm:-right-12 md:-right-16 -translate-y-1/2 text-[#00ADB5] text-3xl sm:text-4xl md:text-5xl animate-pulse opacity-50">✦</span>
            </h1>
            <p className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
              Meet Legal Obligations
            </p>
          </motion.div>
        </motion.section>
        <section className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16 md:space-y-24 lg:space-y-32">
            <motion.div
              className="relative max-w-3xl mx-auto px-4 sm:px-6 md:px-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute -top-4 -left-4 w-6 h-6 sm:-top-6 sm:-left-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-[#00ADB5]" />
              <div className="absolute -top-4 -right-4 w-6 h-6 sm:-top-6 sm:-right-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-[#00ADB5]" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 sm:-bottom-6 sm:-left-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-[#00ADB5]" />
              <div className="absolute -bottom-4 -right-4 w-6 h-6 sm:-bottom-6 sm:-right-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-[#00ADB5]" />
              <div className="text-center space-y-4 sm:space-y-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  <span className="text-[#00ADB5]">Ensure Contracts</span>{' '}
                  <span className="text-[#222831]">Meet Data Processor Obligations</span>
                </h2>
                <p className="text-[#393E46] text-base sm:text-lg leading-relaxed">
                  If your business processes personal data on behalf of others, you must comply with data processor obligations. At Leonard Corporate Solutions, we ensure your contracts meet these legal requirements under GDPR, DPDP, and other regulations in India and worldwide.
                </p>
                <p className="text-[#393E46] text-base sm:text-lg font-medium">
                  📩 Contact us at{' '}
                  <a href="mailto:info@leonardcorporatesolutions.com" className="text-[#00ADB5] hover:underline">
                    info@leonardcorporatesolutions.com
                  </a>
                </p>
              </div>
            </motion.div>
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
                <span className="text-[#222831]">Our Data Processor</span>{' '}
                <span className="text-[#00ADB5]">Compliance Services</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
                {complianceInfo.map((info, index) => (
                  <motion.div
                    key={info.id}
                    className="group bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <span className="absolute top-4 right-4 text-[#00ADB5] text-lg sm:text-xl opacity-30 group-hover:opacity-100 transition-opacity duration-300">✦</span>
                    <div className="px-3 py-1 text-xs sm:text-sm font-medium bg-[#00ADB5]/10 text-[#00ADB5] rounded-full w-fit mb-3">
                      {info.category}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#222831] mb-3 group-hover:text-[#00ADB5] transition-colors duration-300">
                      {info.title}
                    </h3>
                    <p className="text-[#393E46]/80 text-sm sm:text-base leading-relaxed line-clamp-3">{info.description}</p>
                    <button
                      onClick={() => handleExploreClick(info)}
                      className="inline-flex items-center text-[#00ADB5] font-medium hover:text-[#222831] transition-colors duration-300 mt-4 text-sm sm:text-base"
                      aria-label={`Explore ${info.title}`}
                    >
                      Explore
                      <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              className="relative max-w-3xl mx-auto px-4 sm:px-6 md:px-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative py-8 sm:py-12">
                <div className="absolute -top-4 -left-4 w-6 h-6 sm:-top-6 sm:-left-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-[#00ADB5]" />
                <div className="absolute -top-4 -right-4 w-6 h-6 sm:-top-6 sm:-right-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-[#00ADB5]" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 sm:-bottom-6 sm:-left-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-[#00ADB5]" />
                <div className="absolute -bottom-4 -right-4 w-6 h-6 sm:-bottom-6 sm:-right-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-[#00ADB5]" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                  <span className="text-[#00ADB5]">Ready to Ensure</span>{' '}
                  <span className="text-[#222831]">Data Processor Compliance?</span>
                </h2>
                <ul className="space-y-4 list-none pl-5 mb-6 text-[#393E46] text-sm sm:text-base">
                  <li className="relative pl-6 before:content-['✦'] before:absolute before:left-0 before:text-[#00ADB5]">
                    Avoid fines by meeting data processor obligations
                  </li>
                  <li className="relative pl-6 before:content-['✦'] before:absolute before:left-0 before:text-[#00ADB5]">
                    Protect your business from legal and reputational risks
                  </li>
                  <li className="relative pl-6 before:content-['✦'] before:absolute before:left-0 before:text-[#00ADB5]">
                    Build trust with clients through compliant data handling
                  </li>
                </ul>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-[#00ADB5] text-white font-medium rounded-full hover:bg-[#222831] transition-colors duration-300 text-sm sm:text-base"
                >
                  Contact Us
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8">
          <Link
            href="/"
            className="inline-flex items-center text-[#393E46] hover:text-[#00ADB5] transition-colors text-sm sm:text-base"
          >
            <span className="mr-2">←</span> Back to Home
          </Link>
        </div>
      </div>
    </>
  );
}
