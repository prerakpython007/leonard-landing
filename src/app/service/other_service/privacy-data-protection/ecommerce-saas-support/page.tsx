
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';

// Define the interface for e-commerce & SaaS support info
interface SupportInfo {
  id: number;
  title: string;
  description: string;
  category: string;
  detailedContent: string;
}

const supportInfo: SupportInfo[] = [
  {
    id: 1,
    title: 'Understanding Privacy Standards',
    description: 'E-commerce and SaaS providers must comply with data protection laws like GDPR, CCPA, and India’s DPDP Act to safeguard customer data and avoid penalties.',
    category: 'Privacy Basics',
    detailedContent: `
      • GDPR ensures data protection for EU residents.
      • CCPA grants privacy rights to California residents.
      • DPDP Act regulates personal data in India.
      • Requires consent, transparency, and robust security.
      • Non-compliance risks fines and loss of customer trust.
      • Includes specific requirements for online platforms.
    `,
  },
  {
    id: 2,
    title: 'Why Privacy Compliance Matters',
    description: 'Compliance builds customer trust, ensures app store approvals, and protects e-commerce and SaaS businesses from legal and financial risks.',
    category: 'Compliance Importance',
    detailedContent: `
      • Builds trust with customers through transparent practices.
      • Ensures compliance for app store and third-party integrations.
      • Protects against fines and legal liabilities.
      • Enhances brand reputation in competitive markets.
      • Supports scalability with global customers.
      • Mitigates risks of data breaches and misuse.
    `,
  },
  {
    id: 3,
    title: 'Tailoring Privacy Solutions',
    description: 'Customized solutions address the unique data handling needs of e-commerce and SaaS platforms, ensuring compliance with global privacy standards.',
    category: 'Custom Solutions',
    detailedContent: `
      • Assess data collection in e-commerce (e.g., checkout, cookies).
      • Address SaaS-specific needs (e.g., user data, analytics).
      • Develop compliant privacy policies and consent mechanisms.
      • Ensure secure payment and data processing systems.
      • Align with global and regional privacy laws.
      • Provide guidance on user rights and data portability.
    `,
  },
  {
    id: 4,
    title: 'Maintaining Ongoing Compliance',
    description: 'Continuous support ensures e-commerce and SaaS platforms stay compliant with evolving privacy laws through audits, updates, and training.',
    category: 'Ongoing Compliance',
    detailedContent: `
      • Monitor changes in global privacy regulations.
      • Conduct regular compliance audits of platforms.
      • Update privacy policies and procedures as needed.
      • Train staff on privacy compliance obligations.
      • Implement proactive security and consent measures.
      • Maintain records for regulatory compliance.
    `,
  },
  {
    id: 5,
    title: 'Global Privacy for Online Platforms',
    description: 'E-commerce and SaaS providers with international users must align with global privacy laws to ensure seamless cross-border operations.',
    category: 'Global Compliance',
    detailedContent: `
      • Comply with GDPR for EU customer data.
      • Adhere to CCPA for California residents.
      • Follow DPDP Act for India-based operations.
      • Implement safeguards for cross-border data transfers.
      • Address region-specific privacy requirements.
      • Ensure compliance with app store privacy standards.
    `,
  },
];

export default function EcommerceSaaSSupportPage() {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [selectedInfo, setSelectedInfo] = useState<SupportInfo | null>(null);

  const handleExploreClick = (info: SupportInfo) => {
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
              aria-label="Close popup"
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
            E-commerce & SaaS Support
            <span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Help E-commerce and SaaS Providers Meet Privacy Standards
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
                <span className="text-[#00ADB5]">Ensure Privacy Compliance</span>{' '}
                <span className="text-[#393E46]">for E-commerce & SaaS</span>
              </h2>
              <p className="text-[#393E46] text-lg leading-relaxed">
                At Leonard Corporate Solutions, we provide tailored support to help e-commerce and SaaS providers meet stringent privacy standards under laws like GDPR, CCPA, and India’s DPDP Act. Our services ensure compliance, enhance customer trust, and support seamless operations for online platforms.
              </p>
              <p className="text-[#393E46] text-lg font-medium">
                📩 Contact us at{' '}
                <a href="mailto:info@leonardsolutions.in" className="text-[#00ADB5] hover:underline">
                  info@leonardsolutions.in
                </a>{' '}
                to start ensuring privacy compliance today.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Info Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">E-commerce & SaaS</span>{' '}
              <span className="text-[#00ADB5]">Privacy Essentials</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
            {supportInfo.map((info: SupportInfo, index: number) => (
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
                    aria-label={`Explore ${info.title}`}
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

      {/* Key Support Services Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Key Support</span>{' '}
              <span className="text-[#00ADB5]">Services</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
            {[
              { title: 'Privacy Policy Drafting', description: 'Develop customized privacy policies tailored to e-commerce and SaaS data practices.' },
              { title: 'Consent Management', description: 'Implement compliant consent mechanisms for user data collection and processing.' },
              { title: 'Security Assessments', description: 'Evaluate and enhance data security measures for payment and user data protection.' },
              { title: 'Compliance Audits', description: 'Conduct regular audits to ensure ongoing compliance with privacy regulations.' },
              { title: 'Global Compliance Guidance', description: 'Advise on aligning with international privacy laws for cross-border operations.' },
              { title: 'Staff Training', description: 'Provide training on privacy obligations and best practices for platform staff.' },
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

      {/* Compliance Process Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">How to Achieve</span>{' '}
              <span className="text-[#00ADB5]">Privacy Compliance</span>
            </h2>
          </div>
          <div className="space-y-8">
            {[
              { step: '1. Assess Data Practices', description: 'Evaluate data collection, processing, and storage practices on your platform.' },
              { step: '2. Identify Applicable Laws', description: 'Determine relevant privacy laws (e.g., GDPR, CCPA, DPDP Act) based on operations and users.' },
              { step: '3. Develop Compliance Measures', description: 'Create tailored privacy policies, consent systems, and security measures.' },
              { step: '4. Implement and Train', description: 'Apply compliance measures and train staff on privacy obligations.' },
              { step: '5. Monitor and Update', description: 'Regularly audit and update practices to align with evolving privacy laws.' },
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
              <span className="text-[#222831]">Who Needs</span>{' '}
              <span className="text-[#00ADB5]">E-commerce & SaaS Support</span>
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
                <h3 className="text-xl font-bold text-[#222831] mb-3">Who Needs E-commerce & SaaS Support?</h3>
                <ul className="text-[#393E46]/80 list-disc list-inside mb-6">
                  <li>E-commerce platforms collecting customer data (e.g., checkout, cookies)</li>
                  <li>SaaS providers managing user data and analytics</li>
                  <li>Businesses operating in regulated industries (e.g., retail, tech)</li>
                  <li>Platforms with international customers</li>
                  <li>Startups seeking app store approvals</li>
                  <li>Companies integrating third-party payment or data services</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#222831] mb-3">Requirements for Support</h3>
                <p className="text-[#393E46]/80 mb-4">Key information needed to provide effective support includes:</p>
                <ul className="text-[#393E46]/80 list-disc list-inside">
                  <li>Details of data collection and processing methods</li>
                  <li>Types of user data handled (e.g., personal, payment)</li>
                  <li>Third-party integrations and data sharing</li>
                  <li>Operational regions and customer demographics</li>
                  <li>Current privacy policies and security measures</li>
                  <li>App store or platform-specific compliance needs</li>
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
              <span className="text-[#00ADB5]">Ready to Ensure</span>{' '}
              <span className="text-[#393E46]">Privacy Compliance?</span>
            </h2>
            <p className="text-[#393E46] text-lg leading-relaxed mb-6">
              Protect your e-commerce or SaaS platform with Leonard Corporate Solutions’ expert privacy compliance services. Start today to meet global standards and build customer trust.
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
