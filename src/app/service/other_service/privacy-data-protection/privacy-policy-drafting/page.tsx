'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';

// Define the interface for privacy policy info
interface PrivacyInfo {
  id: number;
  title: string;
  description: string;
  category: string;
  detailedContent: string;
}

const privacyInfo: PrivacyInfo[] = [
  {
    id: 1,
    title: 'Understanding Privacy Policies',
    description: 'A privacy policy is a legal document that outlines how an organization collects, uses, stores, and protects personal data, ensuring compliance with data protection laws.',
    category: 'Privacy Basics',
    detailedContent: `
      • Clearly states how personal data is collected and processed.
      • Ensures compliance with laws like GDPR, CCPA, and India’s DPDP Act.
      • Builds trust by transparently communicating data practices.
      • Specifies user rights, such as access, correction, and deletion.
      • Outlines data sharing with third parties, if applicable.
      • Includes security measures to protect user information.
    `,
  },
  {
    id: 2,
    title: 'Why You Need a Privacy Policy',
    description: 'A privacy policy is essential for legal compliance, building user trust, and avoiding penalties under data protection regulations, especially for businesses handling personal data.',
    category: 'Legal Necessity',
    detailedContent: `
      • Mandatory for websites/apps collecting personal data.
      • Protects businesses from legal risks and penalties.
      • Enhances customer trust through transparency.
      • Required by app stores and third-party services.
      • Addresses global compliance for cross-border operations.
      • Demonstrates commitment to data privacy.
    `,
  },
  {
    id: 3,
    title: 'Drafting a Privacy Policy',
    description: 'Drafting involves identifying data collection points, ensuring legal compliance, and clearly communicating policies to users in a concise and understandable manner.',
    category: 'Drafting Process',
    detailedContent: `
      • Identify all data collection points (e.g., forms, cookies).
      • Ensure compliance with relevant laws (e.g., DPDP Act, GDPR).
      • Use clear, jargon-free language for user understanding.
      • Include key sections: data types, purpose, storage, and rights.
      • Update regularly to reflect changes in laws or practices.
      • Consult legal experts to ensure accuracy.
    `,
  },
  {
    id: 4,
    title: 'Maintaining Compliance',
    description: 'Regularly updating your privacy policy and monitoring compliance with evolving data protection laws ensures ongoing protection and trust.',
    category: 'Compliance Management',
    detailedContent: `
      • Review and update policy with new regulations.
      • Conduct regular audits of data practices.
      • Notify users of significant policy changes.
      • Train staff on data protection protocols.
      • Implement robust data security measures.
      • Document consent and data processing activities.
    `,
  },
  {
    id: 5,
    title: 'Global Privacy Regulations',
    description: 'Businesses operating internationally must comply with various data protection laws like GDPR, CCPA, and India’s DPDP Act to ensure global compliance.',
    category: 'Global Compliance',
    detailedContent: `
      • GDPR for EU residents’ data protection.
      • CCPA for California residents’ privacy rights.
      • DPDP Act for India’s personal data protection framework.
      • Align policies with regional data protection laws.
      • Appoint a Data Protection Officer if required.
      • Ensure cross-border data transfer compliance.
    `,
  },
];

export default function PrivacyPolicyDraftingPage() {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [selectedInfo, setSelectedInfo] = useState<PrivacyInfo | null>(null);

  const handleExploreClick = (info: PrivacyInfo) => {
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
            Privacy Policy Drafting
            <span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Ensure Compliance and Build Trust with Expert Privacy Policy Solutions
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
                <span className="text-[#00ADB5]">Safeguard Your Business</span>{' '}
                <span className="text-[#393E46]">with a Robust Privacy Policy</span>
              </h2>
              <p className="text-[#393E46] text-lg leading-relaxed">
                At Leonard Corporate Solutions, we specialize in crafting comprehensive privacy policies that comply with global and Indian data protection laws, such as the DPDP Act, GDPR, and CCPA. Our services help startups, businesses, and entrepreneurs protect user data, ensure legal compliance, and build trust with customers.
              </p>
              <p className="text-[#393E46] text-lg font-medium">
                📩 Contact us at{' '}
                <a href="mailto:info@leonardsolutions.in" className="text-[#00ADB5] hover:underline">
                  info@leonardsolutions.in
                </a>{' '}
                to start drafting your privacy policy today.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Info Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Privacy Policy</span>{' '}
              <span className="text-[#00ADB5]">Essentials</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
            {privacyInfo.map((info: PrivacyInfo, index: number) => (
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

      {/* Key Components Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Key Components of</span>{' '}
              <span className="text-[#00ADB5]">a Privacy Policy</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
            {[
              { title: 'Data Collection', description: 'Details what types of personal data (e.g., name, email, IP address) are collected and how (e.g., forms, cookies).' },
              { title: 'Data Usage', description: 'Explains how collected data is used, such as for service delivery, marketing, or analytics.' },
              { title: 'Data Sharing', description: 'Clarifies if and how data is shared with third parties, such as service providers or partners.' },
              { title: 'User Rights', description: 'Outlines user rights, including access, correction, deletion, and opting out of data processing.' },
              { title: 'Data Security', description: 'Describes measures to protect user data, such as encryption and secure storage.' },
              { title: 'Policy Updates', description: 'States how and when users will be notified of changes to the privacy policy.' },
            ].map((component, index) => (
              <motion.div
                key={component.title}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#00ADB5]/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold text-[#222831] mb-3">{component.title}</h3>
                <p className="text-[#393E46]/80 text-base leading-relaxed">{component.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Drafting Process Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">How to Draft</span>{' '}
              <span className="text-[#00ADB5]">a Privacy Policy</span>
            </h2>
          </div>
          <div className="space-y-8">
            {[
              { step: '1. Assess Data Practices', description: 'Identify all data collection, usage, and sharing practices within your organization.' },
              { step: '2. Research Legal Requirements', description: 'Understand applicable laws (e.g., DPDP Act, GDPR, CCPA) based on your operations and audience.' },
              { step: '3. Draft the Policy', description: 'Write a clear, concise policy covering data collection, usage, sharing, security, and user rights.' },
              { step: '4. Legal Review', description: 'Have the policy reviewed by legal experts to ensure compliance and accuracy.' },
              { step: '5. Publish and Update', description: 'Make the policy accessible on your website/app and update it as needed to reflect changes.' },
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
              <span className="text-[#222831]">Who Needs a</span>{' '}
              <span className="text-[#00ADB5]">Privacy Policy</span>
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
                <h3 className="text-xl font-bold text-[#222831] mb-3">Who Needs a Privacy Policy?</h3>
                <ul className="text-[#393E46]/80 list-disc list-inside mb-6">
                  <li>Websites collecting personal data (e.g., via forms, cookies)</li>
                  <li>Mobile apps processing user information</li>
                  <li>E-commerce platforms handling customer data</li>
                  <li>Businesses operating in regulated industries (e.g., finance, healthcare)</li>
                  <li>Companies with international users (e.g., EU, US, India)</li>
                  <li>Startups seeking app store approvals</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#222831] mb-3">Requirements for Drafting</h3>
                <p className="text-[#393E46]/80 mb-4">Key information needed to draft a privacy policy includes:</p>
                <ul className="text-[#393E46]/80 list-disc list-inside">
                  <li>Details of data collection methods</li>
                  <li>Purposes for data processing</li>
                  <li>Third-party data sharing details</li>
                  <li>Data storage and security measures</li>
                  <li>User rights and contact information</li>
                  <li>Business operational details (e.g., location, industry)</li>
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
              <span className="text-[#393E46]">Compliance?</span>
            </h2>
            <p className="text-[#393E46] text-lg leading-relaxed mb-6">
              Protect your business and build customer trust with Leonard Corporate Solutions’ expert privacy policy drafting services. Start today to ensure compliance with global data protection laws.
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