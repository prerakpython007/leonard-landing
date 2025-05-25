'use client';

import { motion } from 'framer-motion';
import { FileText, PenTool, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { X } from 'lucide-react';

// Define the interface for patent drafting info
interface PatentDraftingInfo {
  id: number;
  title: string;
  description: string;
  category: string;
  detailedContent: string;
}

const patentDraftingInfo: PatentDraftingInfo[] = [
  {
    id: 1,
    title: 'What is Patent Drafting?',
    description: 'Preparing detailed patent applications to secure legal protection.',
    category: 'Drafting Basics',
    detailedContent: `
      • Crafting detailed patent applications to protect inventions.
      • Including technical descriptions, claims, and supporting drawings.
      • Ensuring compliance with patent office standards and regulations.
      • Providing clarity to prevent ambiguities in legal protection.
      • Collaborating with inventors to capture technical details.
      • Maximizing the scope of protection for the invention.
    `,
  },
  {
    id: 2,
    title: 'Benefits of Expert Drafting',
    description: 'Increases approval chances and strengthens legal protection.',
    category: 'Advantages',
    detailedContent: `
      • Increasing likelihood of patent approval by patent offices.
      • Strengthening enforceability against potential infringements.
      • Reducing risks of objections or rejections during examination.
      • Enhancing the commercial value of the patent.
      • Providing clear boundaries for the invention’s protection.
      • Saving time and costs by minimizing revisions.
    `,
  },
  {
    id: 3,
    title: 'Key Components',
    description: 'Includes descriptions, claims, abstract, and technical drawings.',
    category: 'Requirements',
    detailedContent: `
      • Explaining the invention’s functionality in detailed descriptions.
      • Defining the legal scope of protection with claims.
      • Summarizing the invention for quick reference in the abstract.
      • Illustrating the invention’s structure with technical drawings.
      • Providing context and prior art in the background section.
      • Complying with patent office formatting rules.
    `,
  },
  {
    id: 4,
    title: 'Drafting Process',
    description: 'Analyze, draft claims, describe, and ensure compliance.',
    category: 'Procedure',
    detailedContent: `
      • Analyzing the invention’s novelty and technical aspects.
      • Drafting precise claims to define protection boundaries.
      • Preparing comprehensive technical descriptions and drawings.
      • Conducting prior art searches to ensure originality.
      • Reviewing drafts for compliance with legal and technical standards.
      • Finalizing applications for submission to patent offices.
    `,
  },
  {
    id: 5,
    title: 'Legal Precision',
    description: 'Ensures enforceability and minimizes ambiguities.',
    category: 'Protection',
    detailedContent: `
      • Ensuring claims are clear and legally enforceable.
      • Minimizing ambiguities that could lead to disputes.
      • Aligning drafting with international patent standards.
      • Protecting against challenges during litigation.
      • Supporting licensing and commercialization efforts.
      • Enhancing patent strength through precise language.
    `,
  },
];

const draftingServices = [
  {
    icon: FileText,
    title: 'Claim Drafting',
    description: 'We craft precise claims to define your invention’s protection.',
  },
  {
    icon: PenTool,
    title: 'Technical Documentation',
    description: 'We create detailed descriptions and drawings for clarity.',
  },
  {
    icon: CheckCircle,
    title: 'Compliance Review',
    description: 'We ensure your application meets patent office standards.',
  },
];

const benefits = [
  'Increase patent approval rates with expert drafting',
  'Strengthen legal protection with precise claims',
  'Reduce costs by minimizing revisions and disputes',
];

export default function PatentDraftingPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState<PatentDraftingInfo | null>(null);

  const handleExploreClick = (info: PatentDraftingInfo) => {
    setSelectedInfo(info);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedInfo(null);
  };

  return (
    <div className="min-h-screen bg-[#EEEEEE] relative rounded-b-[50px] sm:rounded-b-[100px] md:rounded-b-[170px] font-montserrat overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12">
      {/* Grid Pattern */}
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

      {/* Popup */}
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
              className="absolute top-4 right-4 p-2 text-[#393E46] hover:text-[#00ADB5] hover:bg-[#00ADB5]/10 rounded-full"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#222831] mb-4 sm:mb-6">{selectedInfo.title}</h2>
            <ul className="text-[#393E46]/85 text-sm sm:text-base leading-relaxed space-y-2">
              {selectedInfo.detailedContent.split('\n').map((line, index) => {
                line = line.trim();
                if (!line) return null;
                return (
                  <li key={index} className="relative pl-6 before:content-['✦'] before:absolute before:left-0 before:text-[#00ADB5]">
                    {line.replace(/^•\s*/, '')}
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </motion.div>
      )}

      {/* Hero Section */}
      <motion.section
        className="relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[80vh] flex items-center justify-center"
      >
        <div className="absolute top-4 left-4 w-8 h-8 sm:top-6 sm:left-6 sm:w-10 sm:h-10 md:top-8 md:left-8 md:w-12 md:h-12 border-t-2 border-l-2 border-[#00ADB5] hidden lg:block" />
        <div className="absolute top-4 right-4 w-8 h-8 sm:top-6 sm:right-6 sm:w-10 sm:h-10 md:top-8 md:right-8 md:w-12 md:h-12 border-t-2 border-r-2 border-[#00ADB5] hidden lg:block" />
        <div className="absolute bottom-4 left-4 w-8 h-8 sm:bottom-6 sm:left-6 sm:w-10 sm:h-10 md:bottom-8 md:left-8 md:w-12 md:h-12 border-b-2 border-l-2 border-[#00ADB5] hidden lg:block" />
        <div className="absolute bottom-4 right-4 w-8 h-8 sm:bottom-6 sm:right-6 sm:w-10 sm:h-10 md:bottom-8 md:right-8 md:w-12 md:h-12 border-b-2 border-r-2 border-[#00ADB5] hidden lg:block" />

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto text-center px-4"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#222831] relative inline-block tracking-tight">
            Patent Drafting
            <span className="absolute top-1/2 -left-8 sm:-left-12 md:-left-16 -translate-y-1/2 text-[#00ADB5] text-3xl sm:text-4xl md:text-5xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-8 sm:-right-12 md:-right-16 -translate-y-1/2 text-[#00ADB5] text-3xl sm:text-4xl md:text-5xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Craft Robust Patents
          </p>
        </motion.div>
      </motion.section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16 md:space-y-24 lg:space-y-32">
          {/* Overview */}
          <motion.div
            className="relative max-w-3xl mx-auto px-4 sm:px-6 md:px-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute -top-4 -left-4 w-6 h-6 sm:-top-6 sm:-left-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-[#00ADB5]" />
            <div className="absolute -top-4 -right-4 w-6 h-6 sm:-top-6 sm:-right-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-[#00ADB5]" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 sm:-bottom-6 sm:-left-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-[#00ADB5]" />
            <div className="absolute -bottom-4 -right-4 w-6 h-6 sm:-bottom-6 sm:-right-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-[#00ADB5]" />
            <div className="text-[#393E46] space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg leading-relaxed">
                Patent drafting is critical to securing strong intellectual property protection. At BrandSecure, we meticulously craft patent applications with precise claims, detailed descriptions, and technical drawings to maximize approval chances and ensure enforceability in India and globally.
              </p>
            </div>
          </motion.div>

          {/* Patent Drafting Info Section */}
          <div className="space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
              <span className="text-[#222831]">Explore</span>{' '}
              <span className="text-[#00ADB5]">Patent Drafting</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
              {patentDraftingInfo.map((info, index) => (
                <motion.div
                  key={info.id}
                  className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="absolute top-4 right-4 text-[#00ADB5] text-lg sm:text-xl opacity-30 group-hover:opacity-100 transition-opacity duration-300">✦</span>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#00ADB5] rounded-lg flex items-center justify-center mb-4">
                    <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#222831] mb-3 group-hover:text-[#00ADB5] transition-colors duration-300">
                    {info.title}
                  </h3>
                  <p className="text-[#393E46]/80 text-sm sm:text-base">{info.description}</p>
                  <button
                    onClick={() => handleExploreClick(info)}
                    className="mt-4 inline-flex items-center text-[#00ADB5] font-medium hover:text-[#222831] transition-colors duration-300 text-sm sm:text-base"
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

          {/* Strategy Section */}
          <div className="space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
              <span className="text-[#222831]">How We</span>{' '}
              <span className="text-[#00ADB5]">Draft Patents</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
              {draftingServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="absolute top-4 right-4 text-[#00ADB5] text-lg sm:text-xl opacity-30 group-hover:opacity-100 transition-opacity duration-300">✦</span>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#00ADB5] rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#222831] mb-3 group-hover:text-[#00ADB5] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-[#393E46]/80 text-sm sm:text-base">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <motion.div
            className="relative max-w-3xl mx-auto px-4 sm:px-6 md:px-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
              <span className="text-[#222831]">Why You Need</span>{' '}
              <span className="text-[#00ADB5]">Patent Drafting</span>
            </h2>
            <ul className="space-y-4 list-none pl-5">
              {benefits.map((benefit, index) => (
                <li key={index} className="relative pl-6 text-sm sm:text-base before:content-['✦'] before:absolute before:left-0 before:text-[#00ADB5]">
                  {benefit}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="relative max-w-3xl mx-auto px-4 sm:px-6 md:px-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative py-8 sm:py-12">
              <div className="absolute -top-4 -left-4 w-6 h-6 sm:-top-6 sm:-left-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-[#00ADB5]" />
              <div className="absolute -top-4 -right-4 w-6 h-6 sm:-top-6 sm:-right-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-[#00ADB5]" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 sm:-bottom-6 sm:-left-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-[#00ADB5]" />
              <div className="absolute -bottom-4 -right-4 w-6 h-6 sm:-bottom-6 sm:-right-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-[#00ADB5]" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Draft Your Patent</h2>
              <p className="text-[#393E46] text-sm sm:text-lg leading-relaxed mb-6">
                Secure your invention with expert patent drafting. Contact us today!
              </p>
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

      {/* Back to Home Link */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8">
        <Link
          href="/"
          className="inline-flex items-center text-[#393E46] hover:text-[#00ADB5] transition-colors text-sm sm:text-base"
        >
          <span className="mr-2">←</span> Back to Home
        </Link>
      </div>
    </div>
  );
}