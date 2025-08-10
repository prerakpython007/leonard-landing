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
    <div className="min-h-screen bg-[#0f3460] relative rounded-b-[50px] sm:rounded-b-[100px] lg:rounded-b-[170px] font-montserrat overflow-hidden">
      {/* Hero Section */}
      <motion.section
        className="relative h-[95vh] flex items-center justify-center px-4 md:px-16 lg:px-24 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[#0f3460]/80" />
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto text-center relative z-10"
        >
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold text-white relative inline-block tracking-tight drop-shadow-lg">
            National Phase Entry
          </h1>
          <p className="mt-8 text-xl text-white/90 max-w-2xl mx-auto font-light drop-shadow">
            Secure Your Patent Rights in Individual Countries
          </p>
        </motion.div>
      </motion.section>

      {/* Introduction Section - White background */}
      <section className="relative bg-white px-4 py-28 md:px-16 lg:px-24">
        <div className="relative mx-auto max-w-7xl">
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative flex items-center flex-col lg:flex-row">
              <div
                className="relative w-full lg:w-3/5 z-20 mb-8 lg:mb-0 lg:mr-[-120px] ml-[-10px]"
                style={{ filter: "drop-shadow(0 25px 80px rgba(0, 0, 0, 0.12))" }}
              >
                <div
                  className="bg-white/98 p-8 md:p-10"
                  style={{ clipPath: "polygon(0 0, calc(100% - 40px) 0, 100% 100%, 0 100%)" }}
                >
                  <div className="text-center mb-8">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                      <span className="text-[#00ADB5]">Transition to</span>{' '}
                      <span className="text-[#393E46]">National Patent Protection</span>
                    </h2>
                    <p className="text-base sm:text-lg text-[#393E46] leading-relaxed">
                      National Phase Entry is a critical step in the PCT process, where your international patent application is submitted to individual countries for examination and potential patent grants. At BrandSecure, we guide inventors and businesses through this phase, ensuring compliance with national requirements to secure your intellectual property globally.
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-[#393E46] text-lg font-medium mb-4">
                      📩 Contact us at{' '}
                      <a href="mailto:info@brandsecure.in" className="text-[#00ADB5] hover:underline">
                        info@brandsecure.in
                      </a>{' '}
                      to secure your patents globally today.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative z-10 h-[420px] w-full lg:w-2/5">
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80&w=1400"
                    alt="Patent visual"
                    className="h-full w-full object-cover object-right"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* National Phase Info Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">
              <span className="text-white">National Phase</span>{' '}
              <span className="text-[#00ADB5]">Essentials</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 md:gap-12 px-2 sm:px-4 md:px-16">
            {nationalPhaseInfo.map((info: NationalPhaseInfo, index: number) => {
              const images = [
                "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1475577092020-4f3e8a7f3f3b?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1485811178040-8f6e8a7f3f3b?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1491922024550-4f3e8a7f3f3b?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
              ];
              const bgImg = images[index % images.length];
              return (
                <motion.div
                  key={info.id}
                  className="group bg-cover bg-center p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-[#222]/40 hover:border-[#00ADB5] relative overflow-hidden"
                  style={{
                    borderRadius: 0,
                    backgroundImage: `linear-gradient(120deg, rgba(0,0,0,0.85) 80%, rgba(0,0,0,0.7)), url(${bgImg})`,
                    backgroundBlendMode: 'multiply',
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="flex flex-col gap-5 relative z-10">
                    <div className="px-3 py-1 text-xs font-medium bg-white/10 text-white w-fit uppercase tracking-wider" style={{ borderRadius: 0 }}>
                      {info.category}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {info.title}
                    </h3>
                    <p className="text-[#e0e0e0] text-base leading-relaxed">
                      {info.description}
                    </p>
                    <button
                      onClick={() => handleExploreClick(info)}
                      className="inline-flex items-center text-[#00ADB5] font-medium hover:text-white transition-colors duration-300 mt-4 cursor-pointer group"
                    >
                      Explore
                      <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Countries Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-black">
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
          ].map((country, index) => {
            const countryImages = [
              "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1475577092020-4f3e8a7f3f3b?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1485811178040-8f6e8a7f3f3b?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1491922024550-4f3e8a7f3f3b?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
            ];
            const bgImg = countryImages[index % countryImages.length];
            return (
              <motion.div
                key={country.title}
                className="group bg-cover bg-center p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-[#222]/40 hover:border-[#00ADB5] relative overflow-hidden"
                style={{
                  borderRadius: 0,
                  backgroundImage: `linear-gradient(120deg, rgba(0,0,0,0.85) 80%, rgba(0,0,0,0.7)), url(${bgImg})`,
                  backgroundBlendMode: 'multiply',
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="flex flex-col gap-5 relative z-10">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {country.title}
                  </h3>
                  <p className="text-[#e0e0e0] text-base leading-relaxed">
                    {country.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-black">
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
          ].map((step, index) => {
            const processImages = [
              "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1475577092020-4f3e8a7f3f3b?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1485811178040-8f6e8a7f3f3b?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1491922024550-4f3e8a7f3f3b?auto=format&fit=crop&w=600&q=80",
            ];
            const bgImg = processImages[index % processImages.length];
            return (
              <motion.div
                key={step.step}
                className="group bg-cover bg-center p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-[#222]/40 hover:border-[#00ADB5] relative overflow-hidden"
                style={{
                  borderRadius: 0,
                  backgroundImage: `linear-gradient(120deg, rgba(0,0,0,0.85) 80%, rgba(0,0,0,0.7)), url(${bgImg})`,
                  backgroundBlendMode: 'multiply',
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="flex flex-col gap-5 relative z-10">
                  <div className="px-3 py-1 text-xs font-medium bg-white/10 text-white w-fit uppercase tracking-wider" style={{ borderRadius: 0 }}>
                    Step {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.step}
                  </h3>
                  <p className="text-[#e0e0e0] text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-black">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-[#222831]">Eligibility and</span>{' '}
            <span className="text-[#00ADB5]">Requirements</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            className="group bg-cover bg-center p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-[#222]/40 hover:border-[#00ADB5] relative overflow-hidden"
            style={{
              borderRadius: 0,
              backgroundImage: `linear-gradient(120deg, rgba(0,0,0,0.85) 80%, rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80)`,
              backgroundBlendMode: 'multiply',
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -8 }}
          >
            <div className="flex flex-col gap-5 relative z-10">
              <div className="px-3 py-1 text-xs font-medium bg-white/10 text-white w-fit uppercase tracking-wider" style={{ borderRadius: 0 }}>
                Eligibility
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Who Can Enter the National Phase?
              </h3>
              <div className="text-[#e0e0e0] text-base leading-relaxed space-y-2">
                <p>Applicants with a filed PCT international application</p>
                <p>Businesses with a registered office in a PCT member country</p>
                <p>Individuals or entities with residency in a PCT member country</p>
                <p>Universities or research institutions with PCT applications</p>
                <p>Assignees of a PCT application meeting national eligibility</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="group bg-cover bg-center p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-[#222]/40 hover:border-[#00ADB5] relative overflow-hidden"
            style={{
              borderRadius: 0,
              backgroundImage: `linear-gradient(120deg, rgba(0,0,0,0.85) 80%, rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80)`,
              backgroundBlendMode: 'multiply',
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -8 }}
          >
            <div className="flex flex-col gap-5 relative z-10">
              <div className="px-3 py-1 text-xs font-medium bg-white/10 text-white w-fit uppercase tracking-wider" style={{ borderRadius: 0 }}>
                Required Documents
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                What Documents Are Needed?
              </h3>
              <div className="text-[#e0e0e0] text-base leading-relaxed space-y-2">
                <p>Copy of the PCT international application</p>
                <p>Translations of patent specification and claims</p>
                <p>National phase entry forms (country-specific)</p>
                <p>Inventor declarations or priority documents (if required)</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-[#eeeeee] relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Left Diagonal Image */}
          <div 
            className="absolute left-0  top-0 w-[45%] h-full"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0 100%)',
              opacity: 0.1
            }}
          />
          
          {/* Right Diagonal Image */}
          <div 
            className="absolute right-0 top-0 w-[45%] h-full"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%)',
              opacity: 0.1
            }}
          />

          <motion.div
            className="relative max-w-3xl mx-auto px-8 text-center z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Secure <br />
              <span className="text-[#00ADB5]">Your Patents Globally?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#e0e0e0] leading-relaxed mb-8">
              Navigate the National Phase Entry process with BrandSecure's expert guidance to secure your patent rights in key markets. Start today to protect your innovation worldwide with a strategic and compliant approach.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center px-8 py-4 bg-[#00ADB5] text-white font-medium hover:bg-[#222831] transition-colors duration-300 group"
              style={{ borderRadius: 0 }}
            >
              Get Started
              <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Popup Modal */}
      {showPopup && selectedInfo && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
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

      {/* Back to Home Link */}
    
        
    </div>
  );
}
