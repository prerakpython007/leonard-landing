
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';
import Link from 'next/link';
import Head from 'next/head';

interface FinancialServicesInfo {
  id: number;
  title: string;
  description: string;
  category: string;
  detailedContent: string;
}

const financialServicesInfo: FinancialServicesInfo[] = [
  {
    id: 1,
    title: 'Regulatory Compliance',
    description: 'We ensure contracts comply with financial regulations like RBI, SEC, or FCA.',
    category: 'Compliance Assurance',
    detailedContent: `
      • Ensure outsourcing contracts meet RBI, SEC, and FCA regulations.
      • Conduct compliance audits to identify regulatory gaps.
      • Provide guidance on aligning contracts with financial laws.
      • Support documentation for regulatory approvals.
      • Monitor ongoing compliance with evolving regulations.
    `,
  },
  {
    id: 2,
    title: 'Data Security',
    description: 'We address data protection requirements specific to financial services.',
    category: 'Data Protection',
    detailedContent: `
      • Implement robust data protection measures for financial data.
      • Ensure compliance with GDPR, DPDP, and other data laws.
      • Advise on encryption and secure data transfer protocols.
      • Mitigate risks of data breaches in outsourcing agreements.
      • Develop data security clauses tailored to financial services.
    `,
  },
  {
    id: 3,
    title: 'Contract Tailoring',
    description: 'We draft contracts with clauses specific to financial outsourcing risks.',
    category: 'Contract Drafting',
    detailedContent: `
      • Draft customized contracts for financial outsourcing.
      • Include clauses to address sector-specific risks.
      • Ensure contracts protect sensitive financial data.
      • Align contract terms with regulatory requirements.
      • Provide scalable contract solutions for future needs.
    `,
  },
];

export default function FinancialServicesExpertisePage() {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [selectedInfo, setSelectedInfo] = useState<FinancialServicesInfo | null>(null);

  const handleExploreClick = (info: FinancialServicesInfo) => {
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
          content="Specialized legal advice for outsourcing in the financial sector. Protect your financial services outsourcing deals in India and globally with our expertise."
        />
        <meta
          name="keywords"
          content="financial services outsourcing, outsourcing legal advice financial sector, financial outsourcing expertise, specialized outsourcing services"
        />
        <title>Financial Services Outsourcing Expertise | Specialized Legal Advice</title>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <div className="min-h-screen bg-[#EEEEEE] relative rounded-b-[170px] font-montserrat overflow-hidden">
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
                className="absolute top-4 right-4 p-2 text-[#393E46] hover:text-[#00ADB5] hover:bg-[#00ADB5]/10 rounded-full"
                aria-label="Close popup"
              >
                <X size={32} />
              </button>
              <h2 className="text-3xl font-bold text-[#222831] mb-6 border-b-2 border-[#00ADB5]/30 pb-2">{selectedInfo.title}</h2>
              <div className="text-[#393E46]/85 text-lg leading-relaxed">
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
          className="relative h-[80vh] flex items-center justify-center px-4 md:px-16 lg:px-24 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
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
              Financial Services Expertise
              <span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
              <span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
            </h1>
            <p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
              Specialized Legal Advice
            </p>
          </motion.div>
        </motion.section>
        <section className="py-32 px-4 md:px-16 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="relative max-w-3xl mx-auto px-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-8 -left-8 w-8 h-8 border-t-2 border-l-2 border-[#00ADB5]" />
              <div className="absolute -top-8 -right-8 w-8 h-8 border-t-2 border-r-2 border-[#00ADB5]" />
              <div className="absolute -bottom-8 -left-8 w-8 h-8 border-b-2 border-l-2 border-[#00ADB5]" />
              <div className="absolute -bottom-8 -right-8 w-8 h-8 border-b-2 border-r-2 border-[#00ADB5]" />
              <div className="text-center space-y-6">
                <h2 className="text-4xl font-bold mb-4">
                  <span className="text-[#00ADB5]">Specialized Advice</span>{' '}
                  <span className="text-[#393E46]">for Financial Sector Outsourcing</span>
                </h2>
                <p className="text-[#393E46] text-lg leading-relaxed">
                  Outsourcing in the financial sector comes with unique regulatory and operational challenges. At [Your Company Name], we provide specialized legal advice tailored to financial services outsourcing, ensuring compliance and security in India and worldwide.
                </p>
                <p className="text-[#393E46] text-lg font-medium">
                  📩 Contact us at{' '}
                  <a href="mailto:info@yourcompanyname.com" className="text-[#00ADB5] hover:underline">
                    info@yourcompanyname.com
                  </a>{' '}
                  to secure your financial outsourcing today.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
        <section className="py-32 px-4 md:px-16 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-[#222831]">Our Financial Services</span>{' '}
                <span className="text-[#00ADB5]">Expertise</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
              {financialServicesInfo.map((info: FinancialServicesInfo, index: number) => (
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
        <section className="py-32 px-4 md:px-16 lg:px-24 bg-[#F7F7F7]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-[#222831]">Benefits of</span>{' '}
                <span className="text-[#00ADB5]">Financial Services Expertise</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
              {[
                { title: 'Regulatory Compliance', description: 'Ensure compliance with strict financial sector regulations.' },
                { title: 'Data Protection', description: 'Protect sensitive financial data during outsourcing.' },
                { title: 'Risk Mitigation', description: 'Mitigate risks unique to financial services outsourcing.' },
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#00ADB5]/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-bold text-[#222831] mb-3">{benefit.title}</h3>
                  <p className="text-[#393E46]/80 text-base leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-32 px-4 md:px-16 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="relative max-w-3xl mx-auto px-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-8 -left-8 w-8 h-8 border-t-2 border-l-2 border-[#00ADB5]" />
              <div className="absolute -top-8 -right-8 w-8 h-8 border-t-2 border-r-2 border-[#00ADB5]" />
              <div className="absolute -bottom-8 -left-8 w-8 h-8 border-b-2 border-l-2 border-[#00ADB5]" />
              <div className="absolute -bottom-8 -right-8 w-8 h-8 border-b-2 border-r-2 border-[#00ADB5]" />
              <h2 className="text-4xl font-bold mb-4">Ready to Secure Your Financial Outsourcing?</h2>
              <p className="text-[#393E46] text-lg leading-relaxed mb-6">
                Ensure compliance and security with specialized financial outsourcing expertise. Partner with [Your Company Name] today.
              </p>
              <Link
                href="/contact-us"
                className="inline-flex items-center px-6 py-3 bg-[#00ADB5] text-white font-medium rounded-full hover:bg-[#222831] transition-colors duration-300"
              >
                Contact Us
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </section>
        <div className="container mx-auto px-4 sm:px-6 md:px-16 lg:px-24 py-8">
          <Link href="/" className="inline-flex items-center text-[#393E46] hover:text-[#00ADB5] transition-colors">
            <span className="mr-2">←</span> Back to Home
          </Link>
        </div>
      </div>
    </>
  );
}
