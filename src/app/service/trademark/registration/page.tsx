
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';

// Define the interface for trademark info
interface TrademarkInfo {
  id: number;
  title: string;
  description: string;
  category: string;
  detailedContent: string;
}

const trademarkInfo: TrademarkInfo[] = [
  {
    id: 1,
    title: 'Understanding Trademarks',
    description: 'A trademark is a unique symbol, design, or expression that sets your products or services apart from competitors. It includes logos, brand names, slogans, and other identifiable features.',
    category: 'Trademark Basics',
    detailedContent: `
      • A unique sign, logo, word, or phrase identifying your goods/services.
      • Ensures brand recognition and consumer trust.
      • Includes word marks (e.g., brand names), logos, slogans, sounds, or shapes.
      • Registered for specific classes under the Nice Classification system.
      • Provides legal protection against misuse.
      • Enhances market presence and brand reputation.
    `,
  },
  {
    id: 2,
    title: 'Why Register a Trademark?',
    description: 'Trademark registration secures your exclusive rights to use the mark, protects against unauthorized use, and allows legal action against infringements, ensuring brand protection.',
    category: 'Legal Protection',
    detailedContent: `
      • Grants exclusive rights to use the mark in registered classes.
      • Enables legal action against infringers for damages or injunctions.
      • Offers nationwide protection in India.
      • Increases brand credibility and valuation.
      • Supports international filings via Madrid Protocol.
      • Prevents customer confusion from similar marks.
    `,
  },
  {
    id: 3,
    title: 'Trademark Registration Process',
    description: 'The process involves conducting a trademark search, filing an application, examination by the trademark office, publication in the journal, and final registration if unopposed.',
    category: 'Process Guide',
    detailedContent: `
      • Conduct a search to check for existing similar marks.
      • File application online with mark details and class.
      • Registrar examines for compliance with Trade Marks Act.
      • Respond to objections within 30 days if raised.
      • Mark published in Trademark Journal for 90 days.
      • Registered with certificate if no oppositions.
    `,
  },
  {
    id: 4,
    title: 'Trademark Maintenance',
    description: 'Post-registration, trademarks need periodic renewals every ten years and active use to maintain validity. Monitoring for infringements is key to protecting your rights.',
    category: 'Trademark Management',
    detailedContent: `
      • Renew every 10 years using Form TM-R.
      • Use mark actively to avoid cancellation after 5 years.
      • Monitor market and journal for infringements.
      • Take legal action against unauthorized use.
      • Update registry for ownership or address changes.
      • Maintain records of use (e.g., invoices).
    `,
  },
  {
    id: 5,
    title: 'Global Trademark Protection',
    description: 'Safeguarding your trademark internationally requires filing in each country or using systems like the Madrid Protocol for efficient multi-country registration.',
    category: 'Global Trademarks',
    detailedContent: `
      • File directly in each country’s trademark office.
      • Use Madrid Protocol for single application in 128 countries.
      • Leverage regional systems like EUIPO for EU protection.
      • Conduct international searches for mark availability.
      • Ensure mark is culturally appropriate.
      • Monitor global markets for infringements.
    `,
  },
];

export default function TrademarkRegistrationPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState<TrademarkInfo | null>(null);

  const handleExploreClick = (info: TrademarkInfo) => {
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
            Trademark Registration
            <span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Secure Your Brand Identity with Expert Trademark Solutions
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
                <span className="text-[#00ADB5]">Protect Your Brand</span>{' '}
                <span className="text-[#393E46]">with Trademark Registration</span>
              </h2>
              <p className="text-[#393E46] text-lg leading-relaxed">
                At Leonard Corporate Solutions, we understand the importance of your brand’s unique identity—logos, slogans, or packaging—in today’s competitive market. Our expert trademark registration services guide startups, established companies, and individual entrepreneurs through the process in India, ensuring your intellectual property is protected and your market presence is strengthened.
              </p>
              <p className="text-[#393E46] text-lg font-medium">
                📩 Contact us at{' '}
                <a href="mailto:info@leonardsolutions.in" className="text-[#00ADB5] hover:underline">
                  info@leonardsolutions.in
                </a>{' '}
                to start securing your brand today.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trademark Info Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Trademark</span>{' '}
              <span className="text-[#00ADB5]">Essentials</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
            {trademarkInfo.map((info: TrademarkInfo, index: number) => (
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

      {/* Types of Trademarks Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Types of Trademark</span>{' '}
              <span className="text-[#00ADB5]">Registrations</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
            {[
              { title: 'Product Mark', description: 'Used for tangible goods, product marks identify the origin of products and uphold a company’s reputation. These fall under classes 1-34.' },
              { title: 'Service Mark', description: 'Service marks distinguish service providers, covering classes 35-45, and help differentiate services in the market.' },
              { title: 'Collective Mark', description: 'Represents a group’s products or services, protected by associations or public institutions for collective use.' },
              { title: 'Certification Mark', description: 'Indicates product quality, origin, or standards, commonly used for packaged goods, toys, and electronics.' },
              { title: 'Shape Mark', description: 'Protects unique product shapes that are distinctive and recognizable to consumers as brand-specific.' },
              { title: 'Sound Mark', description: 'Distinctive sounds, like audio mnemonics or jingles, associated with a brand’s products or services.' },
            ].map((mark, index) => (
              <motion.div
                key={mark.title}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#00ADB5]/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold text-[#222831] mb-3">{mark.title}</h3>
                <p className="text-[#393E46]/80 text-base leading-relaxed">{mark.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Process Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">How to Register</span>{' '}
              <span className="text-[#00ADB5]">a Trademark in India</span>
            </h2>
          </div>
          <div className="space-y-8">
            {[
              { step: '1. Trademark Search', description: 'Conduct a thorough search to ensure your trademark is unique and avoid conflicts with existing marks.' },
              { step: '2. Application Filing', description: 'Submit the application with the Trademark Registrar, including the Vienna Codification for figurative elements.' },
              { step: '3. Examination', description: 'The Registrar reviews the application for accuracy and may raise objections, which can be addressed by the applicant.' },
              { step: '4. Journal Publication', description: 'Approved trademarks are published in the Trademark Journal for 90 days, allowing public objections.' },
              { step: '5. Registration', description: 'If no objections are raised, the trademark is registered, and the certificate is issued, allowing use of the ® symbol.' },
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

      {/* Eligibility and Documents Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Eligibility and</span>{' '}
              <span className="text-[#00ADB5]">Required Documents</span>
            </h2>
          </div>
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

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#222831] mb-3">Who Can Apply?</h3>
                <ul className="text-[#393E46]/80 list-disc list-inside mb-6">
                  <li>Individuals</li>
                  <li>Joint owners</li>
                  <li>Proprietorship firms</li>
                  <li>Partnership firms (up to 10 partners)</li>
                  <li>Limited Liability Partnerships (LLPs)</li>
                  <li>Indian and foreign companies</li>
                  <li>Trusts and societies</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#222831] mb-3">Required Documents</h3>
                <p className="text-[#393E46]/80 mb-4">Documents vary by applicant type but generally include:</p>
                <ul className="text-[#393E46]/80 list-disc list-inside">
                  <li>PAN card and Aadhar card (for individuals and proprietorships)</li>
                  <li>Incorporation certificate and company PAN card (for companies and LLPs)</li>
                  <li>Partnership deed (for partnership firms)</li>
                  <li>Trust deed (for trusts)</li>
                  <li>MSME certificate and logo (if applicable)</li>
                </ul>
              </div>
            </div>
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
              <span className="text-[#393E46]">Your Brand?</span>
            </h2>
            <p className="text-[#393E46] text-lg leading-relaxed mb-6">
              Safeguard your business identity with Leonard Corporate Solutions’ expert trademark registration services. Start today to ensure your brand’s exclusivity in India’s competitive market.
            </p>
            <a
              href="/contact-us"
              className="inline-flex items-center px-6 py-3 bg-[#00ADB5] text-white font-medium rounded-full hover:bg-[#222831] transition-colors duration-300"
            >
              Get Started
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Back to Home Link */}
      <div className="container mx-auto px-4 sm:px-6 md:px-16 lg:px-24 py-8">
        <a
          href="/"
          className="inline-flex items-center text-[#393E46] hover:text-[#00ADB5] transition-colors"
        >
          <span className="mr-2">←</span> Back to Home
        </a>
      </div>
    </div>
  );
}
