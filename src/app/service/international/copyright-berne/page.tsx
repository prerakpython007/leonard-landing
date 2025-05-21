
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { X } from 'lucide-react';

// Define the interface for Berne Convention info
interface BerneConventionInfo {
  id: number;
  title: string;
  description: string;
  category: string;
  detailedContent: string;
}

const berneConventionInfo: BerneConventionInfo[] = [
  {
    id: 1,
    title: 'What is the Berne Convention?',
    description: 'The Berne Convention is an international treaty that establishes minimum standards for copyright protection across member countries, ensuring automatic protection for creative works.',
    category: 'Berne Basics',
    detailedContent: `
      • Administered by the World Intellectual Property Organization (WIPO).
      • Covers over 180 member countries.
      • Grants automatic copyright protection without registration.
      • Ensures protection for at least 50 years after the author’s death.
      • Recognizes moral and economic rights of creators.
      • Facilitates cross-border copyright enforcement.
    `,
  },
  {
    id: 2,
    title: 'Benefits of the Berne Convention',
    description: 'The Berne Convention simplifies global copyright protection by providing automatic rights, harmonized standards, and reciprocal treatment in member countries.',
    category: 'Advantages',
    detailedContent: `
      • Automatic protection upon creation of a work.
      • No formal registration required in most member countries.
      • Reciprocal protection in all Berne member countries.
      • Harmonized minimum standards for copyright duration.
      • Supports enforcement against unauthorized use.
      • Protects both economic and moral rights of creators.
    `,
  },
  {
    id: 3,
    title: 'Copyright Filing Process',
    description: 'While the Berne Convention grants automatic protection, voluntary registration in some countries can enhance enforcement and legal clarity.',
    category: 'Process Guide',
    detailedContent: `
      • Create and fix the work in a tangible medium.
      • Automatic protection applies in Berne member countries.
      • Optionally register in countries like the US for legal benefits.
      • Submit application to national copyright office (if registering).
      • Provide copies of the work and pay applicable fees.
      • Receive registration certificate for enforcement purposes.
    `,
  },
  {
    id: 4,
    title: 'Managing Global Copyrights',
    description: 'Copyright holders must monitor usage, enforce rights, and manage licensing to maintain protection across Berne member countries.',
    category: 'Copyright Management',
    detailedContent: `
      • Monitor unauthorized use of copyrighted works globally.
      • Enforce rights through cease-and-desist letters or litigation.
      • License works for commercial use in different countries.
      • Maintain records of creation and ownership.
      • Renew registrations in countries requiring it (e.g., US).
      • Stay informed about local copyright laws for enforcement.
    `,
  },
  {
    id: 5,
    title: 'Challenges of Global Copyright',
    description: 'Global copyright protection faces challenges like varying national laws, enforcement difficulties, and digital piracy issues.',
    category: 'Considerations',
    detailedContent: `
      • Differences in copyright duration and exceptions across countries.
      • Enforcement challenges in jurisdictions with weak legal systems.
      • Digital piracy and unauthorized online distribution.
      • Costs of litigation in multiple countries.
      • Complexity of licensing across borders.
      • Need for local expertise in some jurisdictions.
    `,
  },
];

export default function GlobalCopyrightFilingPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState<BerneConventionInfo | null>(null);

  const handleExploreClick = (info: BerneConventionInfo) => {
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
            Global Copyright
            <span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Protect Your Creative Works Worldwide
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
                <span className="text-[#00ADB5]">Safeguard Your</span>{' '}
                <span className="text-[#393E46]">Creative Works</span>
              </h2>
              <p className="text-[#393E46] text-lg leading-relaxed">
                The Berne Convention ensures automatic copyright protection for creative works across over 180 member countries, simplifying global intellectual property management. At BrandSecure, we assist creators and businesses in understanding and leveraging the Berne Convention, with optional registration services to enhance enforcement in key jurisdictions.
              </p>
              <p className="text-[#393E46] text-lg font-medium">
                📩 Contact us at{' '}
                <a href="mailto:info@brandsecure.in" className="text-[#00ADB5] hover:underline">
                  info@brandsecure.in
                </a>{' '}
                to secure your copyright today.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Berne Convention Info Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mbV2 mb-4">
              <span className="text-[#222831]">Berne Convention</span>{' '}
              <span className="text-[#00ADB5]">Essentials</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
            {berneConventionInfo.map((info: BerneConventionInfo, index: number) => (
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

      {/* Berne Convention Member Countries Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Key Berne Convention</span>{' '}
              <span className="text-[#00ADB5]">Member Countries</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
            {[
              { country: 'United States', description: 'Offers voluntary copyright registration through the US Copyright Office for enhanced legal benefits.' },
              { country: 'European Union', description: 'Provides automatic protection across EU member states with harmonized copyright laws.' },
              { country: 'India', description: 'Grants automatic protection but allows voluntary registration for evidentiary purposes.' },
              { country: 'Japan', description: 'Ensures automatic copyright protection with strong enforcement mechanisms.' },
              { country: 'Australia', description: 'Provides automatic protection under the Berne Convention with no formal registration required.' },
              { country: 'Brazil', description: 'Offers automatic copyright protection with optional registration for legal clarity.' },
            ].map((item, index) => (
              <motion.div
                key={item.country}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#00ADB5]/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold text-[#222831] mb-3">{item.country}</h3>
                <p className="text-[#393E46]/80 text-base leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Copyright Filing Process Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">How to Secure</span>{' '}
              <span className="text-[#00ADB5]">Copyright Protection</span>
            </h2>
          </div>
          <div className="space-y-8">
            {[
              { step: '1. Create and Fix the Work', description: 'Produce an original work and fix it in a tangible medium (e.g., written, recorded).' },
              { step: '2. Automatic Protection', description: 'Gain automatic copyright protection in Berne member countries upon creation.' },
              { step: '3. Consider Voluntary Registration', description: 'Optionally register in countries like the US or India for legal advantages.' },
              { step: '4. Submit Registration Application', description: 'File an application with the national copyright office, including work copies and fees.' },
              { step: '5. Enforce Your Rights', description: 'Monitor and enforce your copyright through legal action or licensing agreements.' },
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
            <h3 className="text-xl font-bold text-[#222831] mb-3">Who Can Claim Copyright?</h3>
            <ul className="text-[#393E46]/80 list-disc list-inside mb-6">
              <li>Creators of original literary, artistic, or musical works</li>
              <li>Businesses or organizations owning copyrighted works</li>
              <li>Assignees or licensees of copyrighted works</li>
              <li>Individuals or entities in Berne member countries</li>
              <li>Collaborators or joint authors of creative works</li>
            </ul>
            <h3 className="text-xl font-bold text-[#222831] mb-3">Requirements for Protection</h3>
            <p className="text-[#393E46]/80 mb-4">Requirements vary by country but generally include:</p>
            <ul className="text-[#393E46]/80 list-disc list-inside">
              <li>Original work fixed in a tangible medium</li>
              <li>Copy of the work for registration (if applicable)</li>
              <li>Creator’s details (name, nationality, address)</li>
              <li>Application form for voluntary registration</li>
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
              <span className="text-[#00ADB5]">Ready to Protect</span>{' '}
              <span className="text-[#393E46]">Your Creative Works?</span>
            </h2>
            <p className="text-[#393E46] text-lg leading-relaxed mb-6">
              Secure your copyright globally with BrandSecure’s expert guidance under the Berne Convention. Start today to safeguard your creative assets and ensure worldwide protection.
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
