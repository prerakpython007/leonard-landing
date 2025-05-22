
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';
import Link from 'next/link';
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
    description: 'We draft NDAs to safeguard confidential information during negotiations.',
    category: 'Confidentiality',
    detailedContent: `
      • Draft robust NDAs to protect sensitive business information.
      • Ensure NDAs cover all parties involved in negotiations.
      • Include clear terms for confidentiality duration and scope.
      • Enforce penalties for breaches of confidentiality.
      • Customize NDAs to suit specific negotiation contexts.
    `,
  },
  {
    id: 2,
    title: 'MOUs',
    description: 'We create MOUs to outline preliminary terms and intentions.',
    category: 'Preliminary Agreements',
    detailedContent: `
      • Draft MOUs to formalize preliminary business intentions.
      • Outline key terms and conditions for future contracts.
      • Ensure clarity to avoid misunderstandings between parties.
      • Include non-binding clauses where appropriate.
      • Align MOUs with strategic business objectives.
    `,
  },
  {
    id: 3,
    title: 'Letters of Intent',
    description: 'We prepare Letters of Intent to formalize early agreements.',
    category: 'Early Agreements',
    detailedContent: `
      • Draft Letters of Intent to outline initial commitments.
      • Clarify intentions to streamline final contract negotiations.
      • Include key terms to set expectations for both parties.
      • Ensure legal clarity while maintaining flexibility.
      • Protect your interests during preliminary discussions.
    `,
  },
];

export default function PreContractualAgreementsPage() {
  const [showPopup, setShowPopup] = useState<boolean>(false);
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
          content="Prepare NDAs, MOUs, and Letters of Intent to protect your interests before final contracts. Secure your business with our expert services in India and globally."
        />
        <meta
          name="keywords"
          content="pre-contractual agreements, NDAs for business, MOUs Letters of Intent, protect business interests"
        />
        <title>Pre-contractual Agreements | Protect Your Interests Early</title>
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
              Pre-contractual Agreements
              <span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
              <span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
            </h1>
            <p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
              Protect Your Interests Early
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
                  <span className="text-[#00ADB5]">Protect Your Interests</span>{' '}
                  <span className="text-[#393E46]">with Pre-contractual Agreements</span>
                </h2>
                <p className="text-[#393E46] text-lg leading-relaxed">
                  Pre-contractual agreements set the stage for secure business dealings. At [Your Company Name], we prepare NDAs (Non-Disclosure Agreements), MOUs (Memorandums of Understanding), and Letters of Intent to protect your interests before final contracts are signed in India and internationally.
                </p>
                <p className="text-[#393E46] text-lg font-medium">
                  📩 Contact us at{' '}
                  <a href="mailto:info@yourcompanyname.com" className="text-[#00ADB5] hover:underline">
                    info@yourcompanyname.com
                  </a>{' '}
                  to secure your early dealings.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
        <section className="py-32 px-4 md:px-16 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-[#222831]">Our Pre-contractual</span>{' '}
                <span className="text-[#00ADB5]">Services</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
              {preContractualInfo.map((info: PreContractualInfo, index: number) => (
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
                <span className="text-[#00ADB5]">Pre-contractual Agreements</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
              {[
                { title: 'Protect Information', description: 'Protect sensitive information during early negotiations.' },
                { title: 'Avoid Misunderstandings', description: 'Establish clear intentions to avoid misunderstandings.' },
                { title: 'Strong Foundation', description: 'Lay a strong foundation for final contract agreements.' },
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
              <h2 className="text-4xl font-bold mb-4">Secure Your Early Dealings</h2>
              <p className="text-[#393E46] text-lg leading-relaxed mb-6">
                Contact us for pre-contractual agreement services!
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
