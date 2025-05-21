
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { X } from 'lucide-react';

// Define the interface for Consulting info
interface ConsultingInfo {
  id: number;
  title: string;
  description: string;
  category: string;
  detailedContent: string;
}

const consultingInfo: ConsultingInfo[] = [
  {
    id: 1,
    title: 'What is Cross-Border Consulting?',
    description: 'Cross-border brand and legal consulting provides strategic guidance for protecting and managing intellectual property across multiple jurisdictions.',
    category: 'Consulting Basics',
    detailedContent: `
      • Covers trademarks, patents, copyrights, and designs.
      • Addresses legal compliance in multiple countries.
      • Assists with international IP portfolio management.
      • Offers expertise in global brand enforcement.
      • Navigates cross-border licensing and disputes.
      • Tailored strategies for businesses expanding globally.
    `,
  },
  {
    id: 2,
    title: 'Benefits of Consulting Services',
    description: 'Consulting services streamline global IP protection, reduce legal risks, and enhance brand value through expert strategies and compliance.',
    category: 'Advantages',
    detailedContent: `
      • Minimizes risks of IP infringement globally.
      • Simplifies compliance with diverse national laws.
      • Enhances brand value through strategic protection.
      • Optimizes costs of international IP management.
      • Provides tailored solutions for market entry.
      • Strengthens enforcement against unauthorized use.
    `,
  },
  {
    id: 3,
    title: 'Consulting Engagement Process',
    description: 'The consulting process involves assessing client needs, developing strategies, and implementing solutions for global IP and brand protection.',
    category: 'Process Guide',
    detailedContent: `
      • Initial consultation to understand business goals.
      • Comprehensive IP portfolio and risk assessment.
      • Develop tailored strategies for global protection.
      • Assist with filings, registrations, and compliance.
      • Monitor and enforce IP rights internationally.
      • Provide ongoing support and updates.
    `,
  },
  {
    id: 4,
    title: 'Managing Global IP Portfolios',
    description: 'Effective IP portfolio management ensures consistent protection, renewals, and enforcement across jurisdictions for sustained brand value.',
    category: 'IP Management',
    detailedContent: `
      • Centralize tracking of IP assets globally.
      • Manage renewals and maintenance deadlines.
      • Monitor for infringements in key markets.
      • Coordinate licensing and assignment agreements.
      • Address disputes or oppositions promptly.
      • Align IP strategy with business objectives.
    `,
  },
  {
    id: 5,
    title: 'Challenges of Cross-Border IP',
    description: 'Cross-border IP management faces challenges like varying legal frameworks, enforcement difficulties, and high compliance costs.',
    category: 'Considerations',
    detailedContent: `
      • Diverse IP laws and regulations across countries.
      • High costs for multi-jurisdictional filings.
      • Enforcement challenges in some jurisdictions.
      • Complexity of managing global licensing.
      • Risk of brand dilution without proper strategy.
      • Need for local expertise in key markets.
    `,
  },
];

export default function CrossBorderBrandLegalConsultingPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState<ConsultingInfo | null>(null);

  const handleExploreClick = (info: ConsultingInfo) => {
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
            Cross-Border Consulting
            <span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Navigate Global IP with Expert Guidance
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
                <span className="text-[#00ADB5]">Protect and Grow</span>{' '}
                <span className="text-[#393E46]">Your Brand Globally</span>
              </h2>
              <p className="text-[#393E46] text-lg leading-relaxed">
                Cross-border brand and legal consulting offers tailored solutions for businesses and creators to protect their intellectual property (IP) and manage legal risks across international markets. At BrandSecure, our expert team provides strategic guidance to ensure your brand thrives globally while staying compliant with diverse legal frameworks.
              </p>
              <p className="text-[#393E46] text-lg font-medium">
                📩 Contact us at{' '}
                <a href="mailto:info@brandsecure.in" className="text-[#00ADB5] hover:underline">
                  info@brandsecure.in
                </a>{' '}
                to start your global IP journey today.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Consulting Info Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Consulting</span>{' '}
              <span className="text-[#00ADB5]">Essentials</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
            {consultingInfo.map((info: ConsultingInfo, index: number) => (
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

      {/* Key Consulting Services Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Key Consulting</span>{' '}
              <span className="text-[#00ADB5]">Services</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
            {[
              { title: 'Trademark Strategy', description: 'Develop strategies for global trademark registration and enforcement via systems like the Madrid Protocol.' },
              { title: 'Patent Consulting', description: 'Guide patent filings through the PCT and national phases for robust invention protection.' },
              { title: 'Copyright Management', description: 'Advise on copyright protection under the Berne Convention and voluntary registrations.' },
              { title: 'Design Protection', description: 'Support international design registrations through the Hague System for global coverage.' },
              { title: 'IP Dispute Resolution', description: 'Provide legal support for resolving IP disputes, including oppositions and infringements.' },
              { title: 'Licensing and Contracts', description: 'Draft and negotiate cross-border licensing agreements to maximize IP value.' },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#00ADB5]/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold text-[#222831] mb-3">{service.title}</h3>
                <p className="text-[#393E46]/80 text-base leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Process Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">How We</span>{' '}
              <span className="text-[#00ADB5]">Work with You</span>
            </h2>
          </div>
          <div className="space-y-8">
            {[
              { step: '1. Initial Consultation', description: 'Understand your business needs, IP assets, and global expansion goals.' },
              { step: '2. IP Assessment', description: 'Conduct a thorough review of your IP portfolio and potential risks.' },
              { step: '3. Strategy Development', description: 'Create a customized plan for IP protection and brand management globally.' },
              { step: '4. Implementation', description: 'Execute filings, registrations, and enforcement actions as needed.' },
              { step: '5. Ongoing Support', description: 'Provide continuous monitoring and updates to maintain IP protection.' },
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
              <span className="text-[#222831]">Who Can</span>{' '}
              <span className="text-[#00ADB5]">Benefit?</span>
            </h2>
          </div>
          <motion.div
            className="bg-white rounded-xl p-8 shadow-md border border-[#00ADB5]/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-[#222831] mb-3">Eligible Clients</h3>
            <ul className="text-[#393E46]/80 list-disc list-inside mb-6">
              <li>Businesses expanding into international markets</li>
              <li>Creators with IP assets like trademarks or designs</li>
              <li>Startups seeking global brand protection</li>
              <li>Corporations managing multi-jurisdictional IP portfolios</li>
              <li>Individuals or entities involved in cross-border licensing</li>
            </ul>
            <h3 className="text-xl font-bold text-[#222831] mb-3">Requirements for Engagement</h3>
            <p className="text-[#393E46]/80 mb-4">Requirements vary by case but generally include:</p>
            <ul className="text-[#393E46]/80 list-disc list-inside">
              <li>Details of existing IP assets (e.g., trademarks, patents)</li>
              <li>Business goals and target markets</li>
              <li>Documentation of ownership or licensing agreements</li>
              <li>Information on prior IP filings or disputes</li>
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
              Partner with BrandSecure for expert cross-border brand and legal consulting to safeguard your intellectual property and thrive in global markets. Start today to ensure your brand’s success.
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
