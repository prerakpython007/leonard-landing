'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';
import Link from 'next/link';
import Head from 'next/head';

interface ComplianceAuditInfo {
  id: number;
  title: string;
  description: string;
  category: string;
  detailedContent: string;
}

const complianceAuditInfo: ComplianceAuditInfo[] = [
  {
    id: 1,
    title: 'Thorough Assessment',
    description: 'We review your HR practices, policies, and records for compliance.',
    category: 'HR Review',
    detailedContent: `
      • Conduct in-depth reviews of HR policies and practices.
      • Examine employee records for compliance with employment laws.
      • Assess workplace safety and anti-discrimination policies.
      • Evaluate payroll and benefits compliance.
      • Ensure adherence to local and international regulations.
    `,
  },
  {
    id: 2,
    title: 'Gap Identification',
    description: 'We identify areas of non-compliance and provide actionable solutions.',
    category: 'Compliance Gaps',
    detailedContent: `
      • Identify non-compliant HR practices and policies.
      • Pinpoint gaps in employment law adherence.
      • Provide actionable recommendations to address gaps.
      • Prioritize solutions based on risk severity.
      • Support implementation of corrective measures.
    `,
  },
  {
    id: 3,
    title: 'Detailed Reporting',
    description: 'We deliver reports with recommendations to achieve full compliance.',
    category: 'Audit Reporting',
    detailedContent: `
      • Deliver comprehensive compliance audit reports.
      • Include detailed findings and risk assessments.
      • Provide clear recommendations for compliance.
      • Offer timelines for addressing non-compliance issues.
      • Support follow-up audits to verify compliance.
    `,
  },
];

export default function ComplianceAuditsPage() {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [selectedInfo, setSelectedInfo] = useState<ComplianceAuditInfo | null>(null);

  const handleExploreClick = (info: ComplianceAuditInfo) => {
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
          content="Comprehensive employment law compliance audits to ensure your workplace meets legal standards. Protect your business in India and globally with expert audits."
        />
        <meta
          name="keywords"
          content="employment law compliance audits, workplace legal compliance, business compliance audits, employment law services"
        />
        <title>Employment Law Compliance Audits | Ensure Workplace Legal Compliance</title>
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
              className="bg-white rounded-xl max-w-sm sm:max-w-lg md:max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 md:p-10 shadow-xl border border-black/20 relative"
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
                className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 text-[#393E46] hover:text-black hover:bg-black/10 rounded-full"
                aria-label="Close popup"
              >
                <X size={24} />
              </button>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#222831] mb-4 sm:mb-6 border-b-2 border-black/30 pb-2">{selectedInfo.title}</h2>
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
        <motion.section
          className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute top-4 left-4 w-8 h-8 sm:top-6 sm:left-6 sm:w-10 sm:h-10 md:top-8 md:left-8 md:w-12 md:h-12 border-t-2 border-l-2 border-black hidden sm:block" />
          <div className="absolute top-4 right-4 w-8 h-8 sm:top-6 sm:right-6 sm:w-10 sm:h-10 md:top-8 md:right-8 md:w-12 md:h-12 border-t-2 border-r-2 border-black hidden sm:block" />
          <div className="absolute bottom-4 left-4 w-8 h-8 sm:bottom-6 sm:left-6 sm:w-10 sm:h-10 md:bottom-8 md:left-8 md:w-12 md:h-12 border-b-2 border-l-2 border-black hidden sm:block" />
          <div className="absolute bottom-4 right-4 w-8 h-8 sm:bottom-6 sm:right-6 sm:w-10 sm:h-10 md:bottom-8 md:right-8 md:w-12 md:h-12 border-b-2 border-r-2 border-black hidden sm:block" />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#222831] relative inline-block tracking-tight">
              Compliance Audits
              <span className="absolute top-1/2 -left-6 sm:-left-8 md:-left-12 lg:-left-16 -translate-y-1/2 text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl animate-pulse opacity-50">✦</span>
              <span className="absolute top-1/2 -right-6 sm:-right-8 md:-right-12 lg:-right-16 -translate-y-1/2 text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl animate-pulse opacity-50">✦</span>
            </h1>
            <p className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-[#393E46]/80 max-w-md sm:max-w-lg md:max-w-2xl mx-auto font-light">
              Ensure Workplace Legal Compliance
            </p>
          </motion.div>
        </motion.section>
        <section className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-sm sm:max-w-md md:max-w-3xl lg:max-w-6xl mx-auto">
            <motion.div
              className="relative max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-6 md:px-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-4 -left-4 w-6 h-6 sm:-top-6 sm:-left-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-black" />
              <div className="absolute -top-4 -right-4 w-6 h-6 sm:-top-6 sm:-right-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-black" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 sm:-bottom-6 sm:-left-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-black" />
              <div className="absolute -bottom-4 -right-4 w-6 h-6 sm:-bottom-6 sm:-right-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-black" />
              <div className="text-center space-y-4 sm:space-y-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                  <span className="text-black">Ensure Compliance</span>{' '}
                  <span className="text-[#393E46]">with Employment Law Audits</span>
                </h2>
                <p className="text-[#393E46] text-sm sm:text-base md:text-lg leading-relaxed">
                  Staying compliant with employment laws is crucial to avoid penalties and legal risks. At [Your Company Name], we conduct comprehensive compliance audits to ensure your workplace adheres to all employment regulations in India and internationally.
                </p>
                <p className="text-[#393E46] text-sm sm:text-base md:text-lg font-medium">
                  📩 Contact us at{' '}
                  <a href="mailto:info@yourcompanyname.com" className="text-black hover:underline">
                    info@yourcompanyname.com
                  </a>{' '}
                  to ensure compliance today.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
        <section className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-sm sm:max-w-md md:max-w-3xl lg:max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                <span className="text-[#222831]">Our Compliance</span>{' '}
                <span className="text-black">Audit Services</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 md:px-8">
              {complianceAuditInfo.map((info: ComplianceAuditInfo, index: number) => (
                <motion.div
                  key={info.id}
                  className="group bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-black/10 relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <span className="absolute top-4 right-4 text-black text-lg sm:text-xl opacity-30 group-hover:opacity-100 transition-opacity duration-300">✦</span>
                  <div className="flex flex-col gap-4 sm:gap-5 relative z-10">
                    <div className="px-2 py-1 text-xs sm:text-sm font-medium bg-black/10 text-black rounded-full w-fit">
                      {info.category}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#222831] mb-3 group-hover:text-black transition-colors duration-300">
                      {info.title}
                    </h3>
                    <p className="text-[#393E46]/80 text-sm sm:text-base leading-relaxed line-clamp-3">{info.description}</p>
                    <button
                      onClick={() => handleExploreClick(info)}
                      className="inline-flex items-center text-black font-medium hover:text-[#222831] transition-colors duration-300 mt-4 text-sm sm:text-base"
                      aria-label={`Explore ${info.title}`}
                    >
                      Explore
                      <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#F7F7F7]">
          <div className="max-w-sm sm:max-w-md md:max-w-3xl lg:max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                <span className="text-[#222831]">Benefits of</span>{' '}
                <span className="text-black">Compliance Audits</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 md:px-8">
              {[
                { title: 'Avoid Penalties', description: 'Avoid fines and legal issues by meeting employment law standards.' },
                { title: 'Protect Reputation', description: 'Protect your business reputation with compliant practices.' },
                { title: 'Fair Workplace', description: 'Ensure a fair and legal workplace for your employees.' },
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-black/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-lg sm:text-xl font-bold text-[#222831] mb-3">{benefit.title}</h3>
                  <p className="text-[#393E46]/80 text-sm sm:text-base leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-sm sm:max-w-md md:max-w-3xl lg:max-w-6xl mx-auto">
            <motion.div
              className="relative max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-6 md:px-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-4 -left-4 w-6 h-6 sm:-top-6 sm:-left-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-black" />
              <div className="absolute -top-4 -right-4 w-6 h-6 sm:-top-6 sm:-right-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-black" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 sm:-bottom-6 sm:-left-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-black" />
              <div className="absolute -bottom-4 -right-4 w-6 h-6 sm:-bottom-6 sm:-right-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-black" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Ready to Ensure Workplace Compliance?</h2>
              <p className="text-[#393E46] text-sm sm:text-base md:text-lg leading-relaxed mb-6">
                Stay compliant with employment laws. Partner with [Your Company Name] for comprehensive compliance audit services.
              </p>
              <Link
                href="/contact-us"
                className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-black text-white font-medium rounded-full hover:bg-[#222831] transition-colors duration-300 text-sm sm:text-base"
              >
                Contact Us
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </section>
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8">
          <Link href="/" className="inline-flex items-center text-[#393E46] hover:text-black transition-colors text-sm sm:text-base">
            <span className="mr-2">←</span> Back to Home
          </Link>
        </div>
      </div>
    </>
  );
}