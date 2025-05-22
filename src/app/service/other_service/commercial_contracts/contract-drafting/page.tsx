
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';
import Link from 'next/link';
import Head from 'next/head';

interface ContractDraftingInfo {
  id: number;
  title: string;
  description: string;
  category: string;
  detailedContent: string;
}

const contractDraftingInfo: ContractDraftingInfo[] = [
  {
    id: 1,
    title: 'Custom Contracts',
    description: 'We create contracts tailored to your business needs and industry.',
    category: 'Tailored Drafting',
    detailedContent: `
      • Draft contracts customized to your specific business requirements.
      • Incorporate industry-specific terms and conditions.
      • Ensure contracts reflect your business goals and priorities.
      • Provide flexible templates for recurring contract needs.
      • Review and revise drafts to align with client feedback.
    `,
  },
  {
    id: 2,
    title: 'Legal Precision',
    description: 'We ensure contracts are clear, enforceable, and compliant with laws.',
    category: 'Legal Compliance',
    detailedContent: `
      • Craft clear and precise contract language to avoid ambiguity.
      • Ensure enforceability under local and international laws.
      • Align contracts with regulatory requirements in India and globally.
      • Include necessary legal clauses for validity and protection.
      • Conduct legal reviews to confirm compliance and clarity.
    `,
  },
  {
    id: 3,
    title: 'Risk Mitigation',
    description: 'We include clauses to minimize risks and protect your interests.',
    category: 'Risk Management',
    detailedContent: `
      • Insert clauses to address potential legal and financial risks.
      • Include dispute resolution mechanisms to prevent conflicts.
      • Protect intellectual property and confidential information.
      • Draft termination clauses to safeguard your interests.
      • Minimize liability through carefully crafted terms.
    `,
  },
];

export default function ContractDraftingPage() {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [selectedInfo, setSelectedInfo] = useState<ContractDraftingInfo | null>(null);

  const handleExploreClick = (info: ContractDraftingInfo) => {
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
          content="Draft precise and tailored commercial contracts for various industries. Protect your business with our expert contract drafting services in India and globally."
        />
        <meta
          name="keywords"
          content="contract drafting, commercial contract drafting, tailored business contracts, legal contract services"
        />
        <title>Contract Drafting Services | Tailored Commercial Contracts for Your Business</title>
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
            role="dialog"
            aria-modal="true"
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
                className="absolute top-4 right-4 p-2 text-[#393E46] hover:text-[#00ADB5] hover:bg-[#00ADB5]/10 rounded-full focus:outline-none"
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
              Contract Drafting
              <span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
              <span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
            </h1>
            <p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
              Tailored Commercial Contracts for Your Business
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
                  <span className="text-[#00ADB5]">Draft Tailored Contracts</span>{' '}
                  <span className="text-[#393E46]">to Protect Your Business</span>
                </h2>
                <p className="text-[#393E46] text-lg leading-relaxed">
                  A well-drafted contract is the foundation of secure business transactions. At [Your Company Name], we specialize in drafting precise and tailored commercial contracts for various industries, ensuring your interests are protected in India and internationally.
                </p>
                <p className="text-[#393E46] text-lg font-medium">
                  📩 Contact us at{' '}
                  <a href="mailto:info@yourcompanyname.com" className="text-[#00ADB5] hover:underline">
                    info@yourcompanyname.com
                  </a>{' '}
                  to secure your transactions today.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
        <section className="py-32 px-4 md:px-16 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-[#222831]">Our Contract</span>{' '}
                <span className="text-[#00ADB5]">Drafting Services</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
              {contractDraftingInfo.map((info: ContractDraftingInfo, index: number) => (
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
                <span className="text-[#222831]">Benefits of Expert</span>{' '}
                <span className="text-[#00ADB5]">Contract Drafting</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
              {[
                { title: 'Prevent Disputes', description: 'Prevent disputes with clear and precise contract terms.' },
                { title: 'Ensure Compliance', description: 'Ensure compliance with local and international regulations.' },
                { title: 'Protect Business', description: 'Protect your business from legal and financial risks.' },
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
              <h2 className="text-4xl font-bold mb-4">Secure Your Transactions with Expert Contracts</h2>
              <p className="text-[#393E46] text-lg leading-relaxed mb-6">
                Contact us for contract drafting services today!
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
