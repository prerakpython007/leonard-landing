
'use client';

import { motion } from 'framer-motion';
import { FileText, Shield, FileSignature } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { X } from 'lucide-react';
import Head from 'next/head';

interface PreContractualInfo {
  id: number;
  title: string;
  description: string;
  category: string;
  detailedContent: string;
}

const preContractualInfo: PreContractualInfo[] = [
  {
    id: 1,
    title: 'NDAs',
    description: 'We draft NDAs to protect sensitive information.',
    category: 'Confidentiality',
    detailedContent: `
      • Create NDAs to safeguard proprietary information.
      • Ensure enforceability under Indian and international laws.
      • Define clear terms for confidentiality obligations.
      • Address breaches and remedies in NDAs.
      • Tailor NDAs to specific business needs.
    `,
  },
  {
    id: 2,
    title: 'MOUs',
    description: 'We create MOUs to outline preliminary agreements.',
    category: 'Preliminary Agreements',
    detailedContent: `
      • Draft MOUs to establish mutual intentions.
      • Include key terms for future formal contracts.
      • Ensure clarity to avoid misunderstandings.
      • Address non-binding and binding clauses.
      • Align MOUs with business objectives.
    `,
  },
  {
    id: 3,
    title: 'LOIs',
    description: 'We prepare LOIs to formalize negotiation terms.',
    category: 'Intent Documentation',
    detailedContent: `
      • Draft LOIs to outline negotiation frameworks.
      • Specify key terms and conditions for agreements.
      • Ensure LOIs are clear and legally sound.
      • Address binding and non-binding elements.
      • Facilitate smoother contract negotiations.
    `,
  },
];

const preContractualServices = [
  {
    icon: FileSignature,
    title: 'NDA Drafting',
    description: 'Protect sensitive information.',
  },
  {
    icon: FileText,
    title: 'MOU Creation',
    description: 'Outline preliminary agreements.',
  },
  {
    icon: Shield,
    title: 'LOI Preparation',
    description: 'Formalize negotiation terms.',
  },
];

const benefits = [
  'Protect sensitive business information',
  'Clarify preliminary agreements',
  'Streamline contract negotiations',
];

export default function PreContractualAgreementsPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState<PreContractualInfo | null>(null);

  const handleExploreClick = (info: PreContractualInfo) => {
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
          content="Secure your business with pre-contractual agreements from BrandSecure. Expert NDAs, MOUs, and LOIs for India and global markets."
        />
        <meta
          name="keywords"
          content="pre-contractual agreements, NDAs, MOUs, LOIs, business contract preparation"
        />
        <title>Pre-contractual Agreements | BrandSecure</title>
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
              className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-md relative"
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
                className="absolute top-4 right-4 p-2 text-[#393E46] hover:text-black hover:bg-black/10 rounded-full"
              >
                <X size={24} />
              </button>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#222831] mb-4 sm:mb-6">{selectedInfo.title}</h2>
              <ul className="text-[#393E46]/85 text-sm sm:text-base leading-relaxed space-y-2">
                {selectedInfo.detailedContent.split('\n').map((line, index) => {
                  line = line.trim();
                  if (!line) return null;
                  return (
                    <li key={index} className="relative pl-6 before:content-['✦'] before:absolute before:left-0 before:text-black">
                      {line.replace(/^•\s*/, '')}
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </motion.div>
        )}

        <motion.section
          className="relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[80vh] flex items-center justify-center"
        >
          <div className="absolute top-4 left-4 w-8 h-8 sm:top-6 sm:left-6 sm:w-10 sm:h-10 md:top-8 md:left-8 md:w-12 md:h-12 border-t-2 border-l-2 border-black hidden lg:block" />
          <div className="absolute top-4 right-4 w-8 h-8 sm:top-6 sm:right-6 sm:w-10 sm:h-10 md:top-8 md:right-8 md:w-12 md:h-12 border-t-2 border-r-2 border-black hidden lg:block" />
          <div className="absolute bottom-4 left-4 w-8 h-8 sm:bottom-6 sm:left-6 sm:w-10 sm:h-10 md:bottom-8 md:left-8 md:w-12 md:h-12 border-b-2 border-l-2 border-black hidden lg:block" />
          <div className="absolute bottom-4 right-4 w-8 h-8 sm:bottom-6 sm:right-6 sm:w-10 sm:h-10 md:bottom-8 md:right-8 md:w-12 md:h-12 border-b-2 border-r-2 border-black hidden lg:block" />

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl mx-auto text-center px-4"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#222831] relative inline-block tracking-tight">
              Pre-contractual Agreements
              <span className="absolute top-1/2 -left-8 sm:-left-12 md:-left-16 -translate-y-1/2 text-black text-3xl sm:text-4xl md:text-5xl animate-pulse opacity-50">✦</span>
              <span className="absolute top-1/2 -right-8 sm:-right-12 md:-right-16 -translate-y-1/2 text-black text-3xl sm:text-4xl md:text-5xl animate-pulse opacity-50">✦</span>
            </h1>
            <p className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
              Secure Preliminary Agreements
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
              viewport={{ once: true }}
            >
              <div className="absolute -top-4 -left-4 w-6 h-6 sm:-top-6 sm:-left-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-black" />
              <div className="absolute -top-4 -right-4 w-6 h-6 sm:-top-6 sm:-right-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-black" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 sm:-bottom-6 sm:-left-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-black" />
              <div className="absolute -bottom-4 -right-4 w-6 h-6 sm:-bottom-6 sm:-right-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-black" />
              <div className="text-[#393E46] space-y-4 sm:space-y-6">
                <p className="text-base sm:text-lg leading-relaxed">
                  At BrandSecure, we draft robust pre-contractual agreements like NDAs, MOUs, and LOIs to secure your business interests before formal contracts in India and globally.
                </p>
                <p className="text-base sm:text-lg font-medium">
                  📧 Reach out at{' '}
                  <a href="mailto:info@brandsecure.in" className="text-black hover:underline">
                    info@brandsecure.in
                  </a>
                </p>
              </div>
            </motion.div>

            <div className="space-y-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
                <span className="text-[#222831]">Explore</span>{' '}
                <span className="text-black">Pre-contractual Agreements</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
                {preContractualInfo.map((info, index) => (
                  <motion.div
                    key={info.id}
                    className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="absolute top-4 right-4 text-black text-lg sm:text-xl opacity-30 group-hover:opacity-100 transition-opacity duration-300">✦</span>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                      <FileSignature className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#222831] mb-3 group-hover:text-black transition-colors duration-300">
                      {info.title}
                    </h3>
                    <p className="text-[#393E46]/80 text-sm sm:text-base">{info.description}</p>
                    <button
                      onClick={() => handleExploreClick(info)}
                      className="mt-4 inline-flex items-center text-black font-medium hover:text-[#222831] transition-colors duration-300 text-sm sm:text-base"
                    >
                      Explore
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
                <span className="text-[#222831]">Our</span>{' '}
                <span className="text-black">Agreement Services</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
                {preContractualServices.map((service, index) => (
                  <motion.div
                    key={service.title}
                    className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="absolute top-4 right-4 text-black text-lg sm:text-xl opacity-30 group-hover:opacity-100 transition-opacity duration-300">✦</span>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#222831] mb-3 group-hover:text-black transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-[#393E46]/80 text-sm sm:text-base">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              className="relative max-w-3xl mx-auto px-4 sm:px-6 md:px-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
                <span className="text-[#222831]">Why Choose</span>{' '}
                <span className="text-black">Our Agreements?</span>
              </h2>
              <ul className="space-y-4 list-none pl-5">
                {benefits.map((benefit, index) => (
                  <li key={index} className="relative pl-6 text-sm sm:text-base before:content-['✦'] before:absolute before:left-0 before:text-black">
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="relative max-w-3xl mx-auto px-4 sm:px-6 md:px-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative py-8 sm:py-12">
                <div className="absolute -top-4 -left-4 w-6 h-6 sm:-top-6 sm:-left-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-black" />
                <div className="absolute -top-4 -right-4 w-6 h-6 sm:-top-6 sm:-right-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-black" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 sm:-bottom-6 sm:-left-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-black" />
                <div className="absolute -bottom-4 -right-4 w-6 h-6 sm:-bottom-6 sm:-right-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-black" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Secure Your Negotiations</h2>
                <p className="text-[#393E46] text-sm sm:text-lg leading-relaxed mb-6">
                  Safeguard your business with our pre-contractual agreement services. Contact us today!
                </p>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-black text-white font-medium rounded-full hover:bg-[#222831] transition-colors duration-300 text-sm sm:text-base"
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
            className="inline-flex items-center text-[#393E46] hover:text-black transition-colors text-sm sm:text-base"
          >
            <span className="mr-2">←</span> Back to Home
          </Link>
        </div>
      </div>
    </>
  );
}
