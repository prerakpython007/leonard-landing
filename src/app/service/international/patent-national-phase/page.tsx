
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { X } from 'lucide-react';

// Define the interface for National Phase Entry info
interface NationalPhaseInfo {
  id: number;
  title: string;
  description: string;
  category: string;
  detailedContent: string;
}

const nationalPhaseInfo: NationalPhaseInfo[] = [
  {
    id: 1,
    title: 'What is National Phase Entry?',
    description: 'National Phase Entry is the stage in the PCT process where an international patent application is submitted to individual countries for patent examination.',
    category: 'Basics',
    detailedContent: `
      • Follows the international phase of a PCT application.
      • Typically occurs within 30/31 months from the priority date.
      • Each country examines the application per its patent laws.
      • Requires compliance with national formalities and fees.
      • Determines whether a patent is granted in each country.
      • Managed independently by national or regional patent offices.
    `,
  },
  {
    id: 2,
    title: 'Benefits of National Phase Entry',
    description: 'National Phase Entry allows applicants to pursue patent protection in multiple countries while leveraging the PCT’s initial international phase.',
    category: 'Advantages',
    detailedContent: `
      • Extends the timeline for deciding target countries (up to 30/31 months).
      • Uses international search and examination reports to inform decisions.
      • Allows tailored strategies for each country’s patent system.
      • Reduces initial costs by delaying national filings.
      • Enables amendments to claims before national examination.
      • Facilitates global patent portfolio management.
    `,
  },
  {
    id: 3,
    title: 'National Phase Entry Process',
    description: 'The process involves submitting the PCT application to national patent offices, paying fees, and meeting country-specific requirements.',
    category: 'Process Guide',
    detailedContent: `
      • Select countries for national phase entry within deadlines.
      • Submit the PCT application to each national patent office.
      • Pay national phase fees and any translation costs.
      • Provide required documents (e.g., specifications, claims).
      • Respond to office actions or objections during examination.
      • Secure patent grants in approving countries.
    `,
  },
  {
    id: 4,
    title: 'Managing National Phase Patents',
    description: 'Post-national phase, patents require maintenance fees, compliance with local laws, and monitoring to remain valid in each country.',
    category: 'Patent Management',
    detailedContent: `
      • Pay annual maintenance fees in each country.
      • Monitor patent status and deadlines for renewals.
      • Comply with local patent laws and regulations.
      • Address oppositions or invalidity challenges promptly.
      • Maintain records of invention use or licensing.
      • Enforce patent rights against infringements.
    `,
  },
  {
    id: 5,
    title: 'Challenges of National Phase Entry',
    description: 'National Phase Entry involves complexities like varying national laws, high costs, and the need for precise compliance with deadlines.',
    category: 'Considerations',
    detailedContent: `
      • Differing patentability standards across countries.
      • High costs for fees, translations, and local agents.
      • Strict deadlines for entering national phase (30/31 months).
      • Potential for rejections or oppositions in some countries.
      • Need for accurate translations of patent documents.
      • Requires strategic selection of target countries.
    `,
  },
];

export default function NationalPhaseEntryPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState<NationalPhaseInfo | null>(null);

  const handleExploreClick = (info: NationalPhaseInfo) => {
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
            National Phase
            <span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Secure Your Patent Rights in Individual Countries
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
                <span className="text-[#00ADB5]">Transition to</span>{' '}
                <span className="text-[#393E46]">National Patent Protection</span>
              </h2>
              <p className="text-[#393E46] text-lg leading-relaxed">
                National Phase Entry is a critical step in the PCT process, where your international patent application is submitted to individual countries for examination and potential patent grants. At BrandSecure, we guide inventors and businesses through this phase, ensuring compliance with national requirements to secure your intellectual property globally.
              </p>
              <p className="text-[#393E46] text-lg font-medium">
                📩 Contact us at{' '}
                <a href="mailto:info@brandsecure.in" className="text-[#00ADB5] hover:underline">
                  info@brandsecure.in
                </a>{' '}
                to secure your patents globally today.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* National Phase Info Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">National Phase</span>{' '}
              <span className="text-[#00ADB5]">Essentials</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
            {nationalPhaseInfo.map((info: NationalPhaseInfo, index: number) => (
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

      {/* Key Countries Considerations Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Key Countries:</span>{' '}
              <span className="text-[#00ADB5]">National Phase Considerations</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
            {[
              {
                title: 'United States',
                description: 'Requires detailed compliance with USPTO rules, including inventor declarations and proof of novelty.',
              },
              {
                title: 'European Patent Office',
                description: 'Allows a single entry for multiple European countries, but requires translations for validation.',
              },
              {
                title: 'China',
                description: 'Demands accurate Chinese translations and strict adherence to CNIPA’s patentability criteria.',
              },
              {
                title: 'India',
                description: 'Requires national phase entry within 31 months, with specific forms and fee structures.',
              },
              {
                title: 'Japan',
                description: 'JPO requires Japanese translations and rigorous examination for novelty and inventive step.',
              },
              {
                title: 'South Korea',
                description: 'KIPO emphasizes technical compliance and may require local representation for objections.',
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
                <h3 className="text-xl font-bold text-[#222831] mb-3">{country.title}</h3>
                <p className="text-[#393E46]/80 text-base leading-relaxed">{country.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* National Phase Process Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">How to Enter</span>{' '}
              <span className="text-[#00ADB5]">the National Phase</span>
            </h2>
          </div>
          <div className="space-y-8">
            {[
              {
                step: '1. Select Target Countries',
                description: 'Choose countries for patent protection based on market strategy and PCT deadlines.',
              },
              {
                step: '2. Submit National Phase Application',
                description: 'File the PCT application with each national patent office within 30/31 months.',
              },
              {
                step: '3. Pay Fees and Provide Translations',
                description: 'Pay national fees and submit translations of the application as required.',
              },
              {
                step: '4. Comply with National Requirements',
                description: 'Meet country-specific formalities, such as inventor declarations or additional forms.',
              },
              {
                step: '5. Undergo National Examination',
                description: 'Respond to office actions and secure patent grants based on national examinations.',
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
            <h3 className="text-xl font-bold text-[#222831] mb-3">Who Can Enter the National Phase?</h3>
            <ul className="text-[#393E46]/80 list-disc list-inside mb-6">
              <li>Applicants with a filed PCT international application</li>
              <li>Businesses with a registered office in a PCT member country</li>
              <li>Individuals or entities with residency in a PCT member country</li>
              <li>Universities or research institutions with PCT applications</li>
              <li>Assignees of a PCT application meeting national eligibility</li>
            </ul>
            <h3 className="text-xl font-bold text-[#222831] mb-3">Required Documents</h3>
            <p className="text-[#393E46]/80 mb-4">Documents vary by country but generally include:</p>
            <ul className="text-[#393E46]/80 list-disc list-inside">
              <li>Copy of the PCT international application</li>
              <li>Translations of patent specification and claims</li>
              <li>National phase entry forms (country-specific)</li>
              <li>Inventor declarations or priority documents (if required)</li>
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

            <h2 className="text-4xl font-bold mb-4">
              <span className="text-[#00ADB5]">Ready to Secure</span>{' '}
              <span className="text-[#393E46]">Your Patents Globally?</span>
            </h2>
            <p className="text-[#393E46] text-lg leading-relaxed mb-6">
              Navigate the National Phase Entry process with BrandSecure’s expert guidance to secure your patent rights in key markets. Start today to protect your innovation worldwide with a strategic and compliant approach.
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
