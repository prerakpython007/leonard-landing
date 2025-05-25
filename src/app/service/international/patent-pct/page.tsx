'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { X } from 'lucide-react';

// Define the interface for PCT info
interface PCTInfo {
  id: number;
  title: string;
  description: string;
  category: string;
  detailedContent: string;
}

const pctInfo: PCTInfo[] = [
  {
    id: 1,
    title: 'What is the PCT?',
    description: 'The Patent Cooperation Treaty (PCT) is an international treaty that simplifies patent filing across multiple countries through a single application, managed by WIPO.',
    category: 'PCT Basics',
    detailedContent: `
      • Administered by the World Intellectual Property Organization (WIPO).
      • Enables patent protection in over 150 member countries.
      • Allows a single international application to seek protection.
      • Delays national phase entry by up to 30/31 months.
      • Provides a unified preliminary examination process.
      • Reduces costs and complexity for global patent filing.
    `,
  },
  {
    id: 2,
    title: 'Benefits of PCT Filing',
    description: 'PCT filing streamlines international patent protection, offering cost savings, delayed national filings, and a centralized application process.',
    category: 'Advantages',
    detailedContent: `
      • Single application covers multiple countries.
      • Delays national phase costs for up to 30/31 months.
      • Provides an international search report to assess patentability.
      • Allows amendments before entering national phases.
      • Simplifies management through a centralized system.
      • Enhances strategic planning for global patent protection.
    `,
  },
  {
    id: 3,
    title: 'PCT Filing Process',
    description: 'The PCT process involves filing an international application, international search and examination, and entering national phases in desired countries.',
    category: 'Process Guide',
    detailedContent: `
      • File an international application with a PCT receiving office.
      • International search authority conducts a patentability search.
      • Optional preliminary examination for additional review.
      • Application published by WIPO after 18 months.
      • Enter national phase in chosen countries within 30/31 months.
      • Comply with national patent office requirements.
    `,
  },
  {
    id: 4,
    title: 'Maintaining PCT Patents',
    description: 'After national phase entry, patents require maintenance fees and compliance with local laws to remain valid in each country.',
    category: 'Patent Management',
    detailedContent: `
      • Pay maintenance fees in each country post-national phase.
      • Monitor patent status in designated countries.
      • Comply with local patent laws and regulations.
      • Respond to office actions or oppositions promptly.
      • Maintain records of invention use or licensing.
      • Renew patents as per national requirements.
    `,
  },
  {
    id: 5,
    title: 'Challenges of PCT Filing',
    description: 'PCT filing involves challenges like varying national patent laws, high costs in the national phase, and dependency on the international application.',
    category: 'Considerations',
    detailedContent: `
      • National phase requirements vary by country.
      • High costs during national phase entry.
      • Dependency on the international application’s quality.
      • Potential for oppositions in national phases.
      • Limited to PCT member countries.
      • Requires precise drafting of patent claims.
    `,
  },
];

export default function InternationalPatentFilingPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState<PCTInfo | null>(null);

  const handleExploreClick = (info: PCTInfo) => {
    setSelectedInfo(info);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedInfo(null);
  };

  return (
    <div className="min-h-screen bg-[#EEEEEE] relative rounded-b-[50px] sm:rounded-b-[100px] lg:rounded-b-[170px] font-montserrat overflow-hidden">
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
            className="bg-white rounded-xl max-w-5xl w-full max-h-[90vh] sm:max-h-[95vh] overflow-y-auto p-4 sm:p-10 shadow-xl border border-[#00ADB5]/20 relative mx-2 sm:mx-6"
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
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold text-[#222831] relative inline-block tracking-tight">
            PCT Filing
            <span className="absolute top-1/2 -left-4 sm:-left-8 md:-left-16 -translate-y-1/2 text-[#00ADB5] text-2xl sm:text-3xl md:text-5xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-4 sm:-right-8 md:-right-16 -translate-y-1/2 text-[#00ADB5] text-2xl sm:text-3xl md:text-5xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light px-2">
            Secure Your Invention Globally with the PCT System
          </p>
        </motion.div>
      </motion.section>

      {/* Introduction Section */}
      <section className="py-16 sm:py-24 md:py-32 px-4 md:px-16 lg:px-24">
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                <span className="text-[#00ADB5]">Protect Your</span>{' '}
                <span className="text-[#393E46]">Invention Worldwide</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-[#393E46] leading-relaxed">
                The Patent Cooperation Treaty (PCT) offers a streamlined way to seek patent protection in multiple countries through a single international application. At BrandSecure, we guide inventors and businesses through the PCT process, helping you safeguard your innovations across global markets efficiently and effectively.
              </p>
              <p className="text-[#393E46] text-lg font-medium">
                📩 Contact us at{' '}
                <a href="mailto:info@brandsecure.in" className="text-[#00ADB5] hover:underline">
                  info@brandsecure.in
                </a>{' '}
                to protect your invention globally today.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PCT Info Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">PCT</span>{' '}
              <span className="text-[#00ADB5]">Essentials</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 md:gap-10 px-2 sm:px-4 md:px-16">
            {pctInfo.map((info: PCTInfo, index: number) => (
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
                  <h3 className="text-lg sm:text-xl font-bold text-[#222831] mb-2 sm:mb-3 group-hover:text-[#00ADB5] transition-colors duration-300">
                    {info.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#393E46]/80 leading-relaxed">
                    {info.description}
                  </p>
                  <button
                    onClick={() => handleExploreClick(info)}
                    className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-[#00ADB5] text-white font-medium rounded-full hover:bg-[#222831] transition-colors duration-300 mt-4 cursor-pointer"
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

      {/* PCT Member Countries Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Key PCT</span>{' '}
              <span className="text-[#00ADB5]">Member Countries</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
            {[
              {
                title: 'United States',
                description: 'Requires compliance with USPTO patentability standards and proof of use for patent grants.',
              },
              {
                title: 'European Patent Office',
                description: 'Covers multiple European countries through a single PCT national phase entry via the EPO.',
              },
              {
                title: 'China',
                description: 'Requires precise patent specifications and translations for national phase entry with CNIPA.',
              },
              {
                title: 'India',
                description: 'Allows PCT filings with a national phase entry within 31 months, adhering to Indian patent laws.',
              },
              {
                title: 'Japan',
                description: 'JPO examines PCT applications for novelty and may require local representation.',
              },
              {
                title: 'South Korea',
                description: 'KIPO processes PCT applications with a focus on technical and legal compliance.',
              },
            ].map((country, index) => (
              <motion.div
                key={country.title}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#00ADB5]/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-lg sm:text-xl font-bold text-[#222831] mb-2 sm:mb-3">{country.title}</h3>
                <p className="text-[#393E46]/80 text-base leading-relaxed">{country.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PCT Filing Process Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">How to File</span>{' '}
              <span className="text-[#00ADB5]">a PCT Application</span>
            </h2>
          </div>
          <div className="space-y-8">
            {[
              {
                step: '1. File International Application',
                description: 'Submit a PCT application to a receiving office, including patent specifications and claims.',
              },
              {
                step: '2. International Search',
                description: 'An International Searching Authority (ISA) conducts a search to assess patentability.',
              },
              {
                step: '3. International Publication',
                description: 'WIPO publishes the application after 18 months, making it publicly available.',
              },
              {
                step: '4. Optional Preliminary Examination',
                description: 'Request an International Preliminary Examination for a non-binding patentability opinion.',
              },
              {
                step: '5. National Phase Entry',
                description: 'Enter the national phase in desired countries within 30/31 months, meeting local requirements.',
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

      {/* Eligibility and Requirements Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Eligibility and</span>{' '}
              <span className="text-[#00ADB5]">Requirements</span>
            </h2>
          </div>
          <motion.div
            className="bg-white rounded-xl p-8 shadow-md border border-[#00ADB5]/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-[#222831] mb-3">Who Can Apply?</h3>
            <ul className="text-sm sm:text-base text-[#393E46]/80 list-disc list-inside space-y-2 sm:space-y-3 mb-6">
              <li>Individuals with a patentable invention</li>
              <li>Businesses with a registered office in a PCT member country</li>
              <li>Partnership firms or companies with eligible inventors</li>
              <li>Universities or research institutions with patentable innovations</li>
              <li>Applicants with residency or nationality in a PCT member country</li>
            </ul>
            <h3 className="text-xl font-bold text-[#222831] mb-3">Required Documents</h3>
            <p className="text-[#393E46]/80 mb-4">Documents vary by applicant but generally include:</p>
            <ul className="text-[#393E46]/80 list-disc list-inside">
              <li>Detailed patent specification (description, claims, abstract)</li>
              <li>Drawings or diagrams (if applicable)</li>
              <li>Applicant’s details (name, address, nationality)</li>
              <li>Priority document (if claiming priority)</li>
            </ul>
          </motion.div>
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

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="text-[#00ADB5]">Ready to Protect</span>{' '}
              <span className="text-[#393E46]">Your Invention Globally?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#393E46] leading-relaxed mb-6">
              Safeguard your innovation worldwide with BrandSecure’s expert PCT filing services. Start today to secure your patent rights across global markets with a streamlined and strategic approach.
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
