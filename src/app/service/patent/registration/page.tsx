'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { X } from "lucide-react";

// Define the interface for patent registration info
interface PatentRegistrationInfo {
  id: number;
  title: string;
  description: string;
  category: string;
  detailedContent: string;
}

const patentRegistrationInfo: PatentRegistrationInfo[] = [
  {
    id: 1,
    title: "What is Patent Registration?",
    description: "Patent registration grants inventors exclusive rights to their inventions, preventing others from making, using, or selling the invention without permission for a limited period.",
    category: "Patent Basics",
    detailedContent: `
      • Grants exclusive rights to the inventor for up to 20 years.
      • Prevents unauthorized use, manufacture, or sale of the invention.
      • Applies to novel products, processes, or significant improvements.
      • Administered by national or regional patent offices.
      • Requires a formal application with detailed documentation.
      • Enhances the inventor’s ability to commercialize the invention.
    `,
  },
  {
    id: 2,
    title: "Benefits of Registration",
    description: "Protects your invention, enhances market position, and enables licensing or sale of the patent, providing a competitive edge.",
    category: "Advantages",
    detailedContent: `
      • Secures exclusive rights to prevent imitation by competitors.
      • Strengthens market position by establishing ownership.
      • Facilitates licensing agreements for additional revenue.
      • Enables sale or transfer of the patent for financial gain.
      • Attracts investors by showcasing protected intellectual property.
      • Provides legal recourse against infringement.
    `,
  },
  {
    id: 3,
    title: "Eligibility Criteria",
    description: "Inventions must be novel, non-obvious, and industrially applicable. They can include products, processes, or improvements.",
    category: "Requirements",
    detailedContent: `
      • Novelty: Invention must be new and not publicly disclosed.
      • Non-Obviousness: Must involve an inventive step not obvious to experts.
      • Industrial Applicability: Must be usable in an industry.
      • Patentable Subject Matter: Excludes abstract ideas or natural phenomena.
      • Can cover products, processes, or significant improvements.
      • Must meet patent office’s specific legal requirements.
    `,
  },
  {
    id: 4,
    title: "Application Process",
    description: "File a patent application with the patent office, including a detailed description, claims, and drawings, followed by examination and grant.",
    category: "Procedure",
    detailedContent: `
      • Prepare a detailed invention disclosure with claims and drawings.
      • File a provisional or complete application with the patent office.
      • Pay required fees and submit necessary forms.
      • Undergo examination by the patent office for compliance.
      • Respond to office actions or objections, if any.
      • Receive patent grant and certificate upon approval.
    `,
  },
  {
    id: 5,
    title: "Legal Protection",
    description: "Registered patents are enforceable by law, allowing you to take legal action against infringers to protect your intellectual property.",
    category: "Protection",
    detailedContent: `
      • Provides legal authority to sue for patent infringement.
      • Enables injunctions to stop unauthorized use of the invention.
      • Allows claims for damages or royalties from infringers.
      • Strengthens position in licensing or partnership negotiations.
      • Protects intellectual property rights in relevant jurisdictions.
      • Requires monitoring to detect and address violations.
    `,
  },
];

export default function PatentRegistrationPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState<PatentRegistrationInfo | null>(null);

  const handleExploreClick = (info: PatentRegistrationInfo) => {
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
            Patent Registration
            <span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Secure Your Invention
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
                <span className="text-[#393E46]">Innovation</span>
              </h2>
              <p className="text-[#393E46] text-lg leading-relaxed">
                Patent registration is a critical step to safeguard your invention, granting you exclusive rights for up to 20 years. At BrandSecure, we simplify the complex patent filing process, ensuring your intellectual property is protected efficiently and effectively. Our expert team guides you through every stage, from application to grant.
              </p>
              <p className="text-[#393E46] text-lg font-medium">
                📩 Contact us at{' '}
                <a href="mailto:info@brandsecure.in" className="text-[#00ADB5] hover:underline">
                  info@brandsecure.in
                </a>{' '}
                to protect your invention today.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Patent Registration Info Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Patent Registration</span>{' '}
              <span className="text-[#00ADB5]">Essentials</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
            {patentRegistrationInfo.map((info: PatentRegistrationInfo, index: number) => (
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

      {/* Eligibility Criteria Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Criteria for</span>{' '}
              <span className="text-[#00ADB5]">Patent Registration</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 px-4 md:px-16">
            {[
              {
                title: 'Novelty',
                description: 'The invention must be new and not disclosed to the public before the filing date.',
              },
              {
                title: 'Inventive Step',
                description: 'The invention must involve an inventive step that is not obvious to a person skilled in the art.',
              },
              {
                title: 'Industrial Applicability',
                description: 'The invention must be capable of being made or used in an industry.',
              },
              {
                title: 'Patentable Subject Matter',
                description: 'The invention must not fall under non-patentable categories, such as abstract ideas or natural phenomena.',
              },
            ].map((criterion, index) => (
              <motion.div
                key={criterion.title}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#00ADB5]/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold text-[#222831] mb-3">{criterion.title}</h3>
                <p className="text-[#393E46]/80 text-base leading-relaxed">{criterion.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Patent Registration</span>{' '}
              <span className="text-[#00ADB5]">Process</span>
            </h2>
          </div>
          <div className="space-y-8">
            {[
              {
                step: '1. Invention Disclosure',
                description: 'Document the invention details, including its purpose, functionality, and unique features.',
              },
              {
                step: '2. Patent Application Filing',
                description: 'Submit a complete or provisional application to the patent office with claims, drawings, and fees.',
              },
              {
                step: '3. Examination',
                description: 'The patent office reviews the application for compliance and may issue office actions requiring clarification.',
              },
              {
                step: '4. Grant and Publication',
                description: 'Upon approval, the patent is granted, published, and you receive a patent certificate.',
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

      {/* Benefits Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Why Register</span>{' '}
              <span className="text-[#00ADB5]">Your Patent?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
            {[
              {
                title: 'Exclusive Rights',
                description: 'Prevent others from using your invention without permission, securing your market position.',
              },
              {
                title: 'Revenue Opportunities',
                description: 'License or sell your patent to generate income and expand your business opportunities.',
              },
              {
                title: 'Market Advantage',
                description: 'Gain a competitive edge by protecting your unique innovation from competitors.',
              },
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
              <span className="text-[#393E46]">Your Invention?</span>
            </h2>
            <p className="text-[#393E46] text-lg leading-relaxed mb-6">
              Safeguard your innovation with BrandSecure’s expert patent registration services. Contact us today to start the process and secure your intellectual property.
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