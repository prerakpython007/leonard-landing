
'use client';

import { motion } from 'framer-motion';
import { Shield, FileText, Layers } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { X } from 'lucide-react';

// Interface for series trademark information
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
    title: 'What is a Series Trademark?',
    description: 'A series trademark allows registration of multiple similar trademarks under one application, differing in minor elements.',
    category: 'Series Basics',
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
    title: 'Benefits of Series Trademarks',
    description: 'Series trademarks save costs and time by covering multiple variations in one registration, offering broader protection.',
    category: 'Advantages',
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
    title: 'Eligibility Criteria',
    description: 'Marks must share core distinctive features and differ only in non-distinctive aspects like color or size.',
    category: 'Requirements',
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
    title: 'Application Process',
    description: 'File Form TM-A, ensure compliance with Section 15, and address any Registrar objections for approval.',
    category: 'Procedure',
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
    title: 'Legal Protection',
    description: 'Series trademarks are registered as associated marks, ensuring unified protection across variations.',
    category: 'Protection',
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

const seriesTrademarkServices = [
  {
    icon: Layers,
    title: 'Series Filing',
    description: 'We manage Form TM-A submissions for series marks.',
  },
  {
    icon: FileText,
    title: 'Compliance Support',
    description: 'We ensure adherence to Section 15 requirements.',
  },
  {
    icon: Shield,
    title: 'Unified Protection',
    description: 'We secure associated marks under one registration.',
  },
];

const benefits = [
  'Protect multiple trademark variations cost-effectively',
  'Simplify management of associated marks',
  'Enhance brand consistency and legal protection',
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
            Series Trademark
            <span className="absolute top-1/2 -left-8 sm:-left-12 md:-left-16 -translate-y-1/2 text-[#00ADB5] text-3xl sm:text-4xl md:text-5xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-8 sm:-right-12 md:-right-16 -translate-y-1/2 text-[#00ADB5] text-3xl sm:text-4xl md:text-5xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Protect Your Brand Variations
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
                At BrandSecure, we simplify the registration of series trademarks under Section 15 of the Trademarks Act, 1999. Our expert services help businesses protect multiple similar marks—logos, names, or slogans—in one cost-effective application, ensuring brand consistency.
              </p>
              <p className="text-base sm:text-lg font-medium">
                📧 Reach out at{' '}
                <a href="mailto:info@brandsecure.in" className="text-[#00ADB5] hover:underline">
                  info@brandsecure.in
                </a>
              </p>
            </div>
          </motion.div>

          {/* Series Trademark Info Section */}
          <div className="space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
              <span className="text-[#222831]">Explore</span>{' '}
              <span className="text-[#00ADB5]">Series Trademarks</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
              {seriesTrademarkInfo.map((info, index) => (
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
                    <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
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

          {/* Services Section */}
          <div className="space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
              <span className="text-[#222831]">Our</span>{' '}
              <span className="text-[#00ADB5]">Series Trademark Services</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
              {seriesTrademarkServices.map((service, index) => (
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
              <span className="text-[#222831]">Why Choose</span>{' '}
              <span className="text-[#00ADB5]">Series Trademarks?</span>
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Protect Your Brand</h2>
              <p className="text-[#393E46] text-sm sm:text-lg leading-relaxed mb-6">
                Safeguard your brand variations with our expert series trademark services. Contact us today!
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
