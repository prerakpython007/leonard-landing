
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { X } from 'lucide-react';

// Define the interface for Madrid Protocol info
interface MadridProtocolInfo {
  id: number;
  title: string;
  description: string;
  category: string;
  detailedContent: string;
}

const madridProtocolInfo: MadridProtocolInfo[] = [
  {
    id: 1,
    title: 'What is the Madrid Protocol?',
    description: 'The Madrid Protocol is an international treaty that simplifies trademark registration across multiple countries through a single application, managed by WIPO.',
    category: 'Madrid Basics',
    detailedContent: `
      • Administered by the World Intellectual Property Organization (WIPO).
      • Allows trademark registration in up to 128 member countries.
      • Simplifies process with a single application in one language.
      • Reduces costs compared to individual country filings.
      • Requires a base application/registration in the home country.
      • Streamlines management of renewals and changes.
    `,
  },
  {
    id: 2,
    title: 'Benefits of Madrid Protocol',
    description: 'Filing through the Madrid Protocol saves time, reduces costs, and allows centralized management of trademarks across multiple jurisdictions.',
    category: 'Advantages',
    detailedContent: `
      • Single application covers multiple countries.
      • Cost-effective compared to separate national filings.
      • Centralized management for renewals and updates.
      • Applications can be filed in English, French, or Spanish.
      • Faster processing through WIPO’s streamlined system.
      • Flexibility to add more countries later.
    `,
  },
  {
    id: 3,
    title: 'Madrid Protocol Filing Process',
    description: 'The process involves filing a base application in your home country, submitting an international application via WIPO, and examination by each designated country.',
    category: 'Process Guide',
    detailedContent: `
      • File a base trademark application/registration in your home country.
      • Submit international application through your national trademark office.
      • WIPO reviews for compliance and forwards to designated countries.
      • Each country examines the application per its laws.
      • Respond to refusals or objections within deadlines.
      • Protection granted in countries that approve the mark.
    `,
  },
  {
    id: 4,
    title: 'Madrid Protocol Maintenance',
    description: 'Registered trademarks under the Madrid Protocol require renewals every 10 years and monitoring to ensure continued protection in designated countries.',
    category: 'Trademark Management',
    detailedContent: `
      • Renew every 10 years through a single WIPO application.
      • Monitor trademark status in each designated country.
      • Update changes in ownership or address via WIPO.
      • Address refusals or cancellations in individual countries.
      • Maintain records of use to avoid challenges.
      • Ensure compliance with local laws for enforcement.
    `,
  },
  {
    id: 5,
    title: 'Challenges of Madrid Protocol',
    description: 'While efficient, the Madrid Protocol has challenges like dependency on the home trademark and varying national examination standards.',
    category: 'Considerations',
    detailedContent: `
      • Dependent on home country trademark for 5 years.
      • Varying examination standards across countries.
      • Potential refusals by individual countries.
      • Local legal representation may be needed for disputes.
      • Limited to member countries of the Madrid System.
      • Requires careful selection of goods/services classes.
    `,
  },
];

export default function InternationalTrademarkFilingPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState<MadridProtocolInfo | null>(null);

  const handleExploreClick = (info: MadridProtocolInfo) => {
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
            Trademark Filing
            <span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Expand Your Brand Globally with the Madrid Protocol
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
                <span className="text-[#00ADB5]">Globalize</span>{' '}
                <span className="text-[#393E46]">Your Brand</span>
              </h2>
              <p className="text-[#393E46] text-lg leading-relaxed">
                Protecting your brand internationally is crucial in today’s global market. The Madrid Protocol offers a streamlined, cost-effective way to register your trademark in multiple countries through a single application. At BrandSecure, we guide businesses and individuals through the Madrid Protocol process, ensuring your brand is protected across borders efficiently and effectively.
              </p>
              <p className="text-[#393E46] text-lg font-medium">
                📩 Contact us at{' '}
                <a href="mailto:info@brandsecure.in" className="text-[#00ADB5] hover:underline">
                  info@brandsecure.in
                </a>{' '}
                to protect your brand globally today.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Madrid Protocol Info Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Madrid Protocol</span>{' '}
              <span className="text-[#00ADB5]">Essentials</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
            {madridProtocolInfo.map((info: MadridProtocolInfo, index: number) => (
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

      {/* Madrid Protocol Member Countries Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Madrid Protocol</span>{' '}
              <span className="text-[#00ADB5]">Member Countries</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
            {[
              {
                title: 'European Union',
                description: 'Covers all 27 EU member states through a single designation via the European Union Intellectual Property Office (EUIPO).',
              },
              {
                title: 'United States',
                description: 'Protection in the US requires compliance with USPTO requirements, including proof of use in commerce.',
              },
              {
                title: 'China',
                description: 'China’s trademark system requires careful selection of subclasses under the Nice Classification for effective protection.',
              },
              {
                title: 'India',
                description: 'India, a Madrid Protocol member, allows international filings based on a national trademark application or registration.',
              },
              {
                title: 'Japan',
                description: 'Japan’s trademark office examines applications for distinctiveness and may require local representation for objections.',
              },
              {
                title: 'Australia',
                description: 'Australia offers straightforward Madrid Protocol protection, with examination by IP Australia for compliance.',
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

      {/* Filing Process Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">How to File via</span>{' '}
              <span className="text-[#00ADB5]">the Madrid Protocol</span>
            </h2>
          </div>
          <div className="space-y-8">
            {[
              {
                step: '1. Secure a Base Application',
                description: 'File or obtain a trademark registration in your home country, which serves as the basis for the international application.',
              },
              {
                step: '2. File International Application',
                description: 'Submit the application through your national trademark office, specifying the countries for protection.',
              },
              {
                step: '3. WIPO Review',
                description: 'WIPO examines the application for compliance and forwards it to the designated countries for review.',
              },
              {
                step: '4. National Examination',
                description: 'Each designated country examines the application according to its trademark laws, potentially issuing refusals.',
              },
              {
                step: '5. Protection Granted',
                description: 'Countries that approve the trademark grant protection, allowing use of the mark in those jurisdictions.',
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
            <ul className="text-[#393E46]/80 list-disc list-inside mb-6">
              <li>Individuals with a national trademark application/registration</li>
              <li>Businesses with a registered office in a Madrid Protocol member country</li>
              <li>Partnership firms with a base trademark</li>
              <li>Companies incorporated in a member country</li>
              <li>Trusts or associations with a national trademark</li>
            </ul>
            <h3 className="text-xl font-bold text-[#222831] mb-3">Required Documents</h3>
            <p className="text-[#393E46]/80 mb-4">Documents vary by applicant but generally include:</p>
            <ul className="text-[#393E46]/80 list-disc list-inside">
              <li>Copy of the national trademark application/registration</li>
              <li>Details of the mark (logo, word, or figurative elements)</li>
              <li>List of goods/services under Nice Classification</li>
              <li>Applicant’s details (name, address, nationality)</li>
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
              <span className="text-[#393E46]">Your Brand Globally?</span>
            </h2>
            <p className="text-[#393E46] text-lg leading-relaxed mb-6">
              Expand your brand’s reach with BrandSecure’s expert guidance on international trademark filing through the Madrid Protocol. Start today and secure your intellectual property worldwide with a streamlined and cost-effective process.
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
