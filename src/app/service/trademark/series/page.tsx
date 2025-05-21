'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { X } from "lucide-react";

// Define the interface for series trademark info
interface SeriesTrademarkInfo {
  id: number;
  title: string;
  description: string;
  category: string;
  detailedContent: string;
}

const seriesTrademarkInfo: SeriesTrademarkInfo[] = [
  {
    id: 1,
    title: "What is a Series Trademark?",
    description: "A series trademark allows registration of multiple similar trademarks under a single application, differing only in minor, non-distinctive elements that don’t significantly alter the mark’s identity.",
    category: "Series Basics",
    detailedContent: `
      • Registers multiple similar marks in one application.
      • Governed by Section 15 of the Trademarks Act, 1999.
      • Variations must retain core distinctive elements.
      • Minor differences don’t alter overall identity.
      • Filed via Form TM-A with the Trademark Registry.
      • Ideal for brands with consistent but varied marks.
    `,
  },
  {
    id: 2,
    title: "Benefits of Series Trademarks",
    description: "Series trademarks save costs and time by covering multiple variations in one registration, offering broader protection without multiple applications.",
    category: "Advantages",
    detailedContent: `
      • Reduces costs compared to individual registrations.
      • Saves time with a single application process.
      • Provides broader protection for mark variations.
      • Simplifies management of associated trademarks.
      • Enhances brand consistency across variations.
      • Streamlines renewals and enforcement actions.
    `,
  },
  {
    id: 3,
    title: "Eligibility Criteria",
    description: "Marks must share core distinctive features, differ only in non-distinctive aspects like color, size, or descriptions, and apply to the same goods or services.",
    category: "Requirements",
    detailedContent: `
      • Marks must share core visual/phonetic elements.
      • Differences limited to non-distinctive aspects.
      • Applies to identical goods/services (Nice Classification).
      • Must be owned by the same proprietor.
      • Ensures unified brand identity protection.
      • Non-compliant marks may be removed by Registrar.
    `,
  },
  {
    id: 4,
    title: "Application Process",
    description: "File Form TM-A with the Trademark Registry, ensure compliance with Section 15 of the Trademarks Act, 1999, and address any Registrar objections.",
    category: "Procedure",
    detailedContent: `
      • File Form TM-A listing all series marks.
      • Ensure compliance with Section 15 requirements.
      • Submit detailed goods/services descriptions.
      • Registrar reviews for eligibility and objections.
      • File Form TM-M for division if needed.
      • Approved series registered as associated marks.
    `,
  },
  {
    id: 5,
    title: "Legal Protection",
    description: "Series trademarks are registered as associated trademarks, ensuring unified protection and preventing separate assignment of individual marks.",
    category: "Protection",
    detailedContent: `
      • Registered as associated trademarks under one number.
      • Prevents separate assignment of individual marks.
      • Ensures unified legal protection across variations.
      • Supports enforcement against infringements.
      • Simplifies licensing and transmission processes.
      • Maintains brand integrity across all marks.
    `,
  },
];

export default function SeriesTrademarkPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState<SeriesTrademarkInfo | null>(null);

  const handleExploreClick = (info: SeriesTrademarkInfo) => {
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
            Series Trademark
            <span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Protect Brand Variations
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
                <span className="text-[#00ADB5]">Simplify</span>{' '}
                <span className="text-[#393E46]">Series Trademarks</span>
              </h2>
              <p className="text-[#393E46] text-lg leading-relaxed">
                Series trademarks, under Section 15 of the Trademarks Act, 1999, allow registration of multiple similar marks in one application. BrandSecure streamlines the process, ensuring cost-effective protection for your brand variations.
              </p>
              <p className="text-[#393E46] text-lg font-medium">
                📩 Contact us at{' '}
                <a href="mailto:info@brandsecure.in" className="text-[#00ADB5] hover:underline">
                  info@brandsecure.in
                </a>{' '}
                to protect your brand today.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Series Trademark Info Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Series Trademark</span>{' '}
              <span className="text-[#00ADB5]">Essentials</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
            {seriesTrademarkInfo.map((info: SeriesTrademarkInfo, index: number) => (
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
              <span className="text-[#00ADB5]">Series Trademarks</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 px-4 md:px-16">
            {[
              {
                title: 'Material Similarity',
                description: 'All marks must share the same core distinctive elements, ensuring visual, phonetic, and conceptual similarity.',
              },
              {
                title: 'Non-Distinctive Differences',
                description: 'Variations are allowed only in non-distinctive aspects, such as color, size, price, quality, or product descriptions.',
              },
              {
                title: 'Same Goods/Services',
                description: 'All marks in the series must apply to the same goods or services within the same Nice Classification.',
              },
              {
                title: 'Single Ownership',
                description: 'The series must be owned by the same proprietor to ensure unified control and protection.',
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
              <span className="text-[#222831]">Series Trademark</span>{' '}
              <span className="text-[#00ADB5]">Application Process</span>
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                title: 'Prepare Application',
                description: 'File Form TM-A with the Trademark Registry, detailing all marks in the series and their goods/services description.',
              },
              {
                title: 'Submit to Registrar',
                description: 'Submit the application and required documents, ensuring compliance with Section 15 of the Trademarks Act, 1999.',
              },
              {
                title: 'Address Objections',
                description: 'The Registrar may request deletion of non-compliant marks; file Form TM-M for division if needed.',
              },
              {
                title: 'Approval & Registration',
                description: 'Upon satisfaction, the Registrar approves the series, registering all marks as associated trademarks under one registration number.',
              },
            ].map((step, index) => (
              <motion.div
                key={step.title}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#00ADB5]/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold text-[#222831] mb-3">{index + 1}. {step.title}</h3>
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
              <span className="text-[#222831]">Why Choose</span>{' '}
              <span className="text-[#00ADB5]">Series Trademarks?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
            {[
              {
                title: 'Cost Efficiency',
                description: 'Register multiple trademark variations in one application, reducing filing and renewal costs compared to individual registrations.',
              },
              {
                title: 'Broader Protection',
                description: 'Protect various versions of your trademark under a single registration, ensuring comprehensive brand coverage.',
              },
              {
                title: 'Streamlined Management',
                description: 'Manage all marks as associated trademarks, simplifying assignment, transmission, and enforcement processes.',
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

      {/* Examples Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Examples of</span>{' '}
              <span className="text-[#00ADB5]">Series Trademarks</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 px-4 md:px-16">
            {[
              {
                title: 'Swiggy Services',
                description: 'Marks like “Swiggy Genie” and “Swiggy Instamart” share the core “Swiggy” element, differing in service descriptions, qualifying as a series.',
              },
              {
                title: 'McDonald’s Family',
                description: 'Marks such as “McChicken,” “McCafe,” and “Big Mac” form a series with the common “Mc” prefix, protecting various products.',
              },
            ].map((example, index) => (
              <motion.div
                key={example.title}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#00ADB5]/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold text-[#222831] mb-3">{example.title}</h3>
                <p className="text-[#393E46]/80 text-base leading-relaxed">{example.description}</p>
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
              <span className="text-[#00ADB5]">Protect</span>{' '}
              <span className="text-[#393E46]">Your Brand Variations</span>
            </h2>
            <p className="text-[#393E46] text-lg leading-relaxed mb-6">
              Secure your trademark variations with BrandSecure’s expert series trademark services. Contact us today to streamline registration and safeguard your brand.
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