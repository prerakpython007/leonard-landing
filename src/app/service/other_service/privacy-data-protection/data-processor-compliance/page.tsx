
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';

// Define the interface for data processor compliance info
interface ComplianceInfo {
  id: number;
  title: string;
  description: string;
  category: string;
  detailedContent: string;
}

const complianceInfo: ComplianceInfo[] = [
  {
    id: 1,
    title: 'Understanding Data Processor Obligations',
    description: 'Data processors handle personal data on behalf of controllers, requiring contracts that comply with laws like GDPR, CCPA, and India’s DPDP Act to ensure lawful processing.',
    category: 'Compliance Basics',
    detailedContent: `
      • Process data only as instructed by the data controller.
      • Ensure compliance with GDPR, CCPA, and DPDP Act requirements.
      • Implement technical and organizational security measures.
      • Maintain records of processing activities.
      • Support controllers in handling data subject requests.
      • Notify controllers of data breaches promptly.
    `,
  },
  {
    id: 2,
    title: 'Why Data Processor Contracts Matter',
    description: 'Contracts define the scope, responsibilities, and liabilities of data processors, ensuring legal compliance and protecting both parties from risks.',
    category: 'Legal Necessity',
    detailedContent: `
      • Clearly outline data processing scope and purpose.
      • Protect controllers and processors from legal penalties.
      • Define liability for data breaches or non-compliance.
      • Ensure compliance with international data protection laws.
      • Facilitate trust with customers and partners.
      • Support audits and regulatory inspections.
    `,
  },
  {
    id: 3,
    title: 'Drafting Compliant Contracts',
    description: 'Drafting involves specifying processing activities, security measures, and compliance with applicable laws to meet data processor obligations.',
    category: 'Contract Drafting',
    detailedContent: `
      • Specify types of data processed and processing purposes.
      • Include clauses for data security and confidentiality.
      • Define sub-processor engagement terms.
      • Address data subject rights and controller support.
      • Ensure compliance with GDPR Art. 28, DPDP Act, etc.
      • Include breach notification and audit provisions.
    `,
  },
  {
    id: 4,
    title: 'Maintaining Compliance',
    description: 'Ongoing compliance requires regular contract reviews, audits, and updates to align with evolving data protection laws and practices.',
    category: 'Compliance Management',
    detailedContent: `
      • Conduct periodic audits of processing activities.
      • Update contracts to reflect new legal requirements.
      • Train staff on data protection obligations.
      • Monitor sub-processors for compliance.
      • Maintain detailed records of data processing.
      • Review security measures regularly.
    `,
  },
  {
    id: 5,
    title: 'Global Compliance Considerations',
    description: 'Data processors operating internationally must align contracts with global regulations like GDPR, CCPA, and DPDP Act for cross-border compliance.',
    category: 'Global Compliance',
    detailedContent: `
      • Align with GDPR for EU data processing.
      • Comply with CCPA for California residents’ data.
      • Adhere to DPDP Act for India’s data protection framework.
      • Include clauses for cross-border data transfers.
      • Ensure contracts address regional legal nuances.
      • Appoint a Data Protection Officer if required.
    `,
  },
];

export default function DataProcessorCompliancePage() {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [selectedInfo, setSelectedInfo] = useState<ComplianceInfo | null>(null);

  const handleExploreClick = (info: ComplianceInfo) => {
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
            Data Processor Compliance
            <span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Ensure Lawful Data Processing with Expert Contract Solutions
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
                <span className="text-[#00ADB5]">Secure Your Data Processing</span>{' '}
                <span className="text-[#393E46]">with Compliant Contracts</span>
              </h2>
              <p className="text-[#393E46] text-lg leading-relaxed">
                At Leonard Corporate Solutions, we specialize in drafting data processor contracts that comply with global and Indian data protection laws, such as the DPDP Act, GDPR, and CCPA. Our services ensure that businesses acting as data processors meet their obligations, protect controllers, and maintain compliance in a complex regulatory landscape.
              </p>
              <p className="text-[#393E46] text-lg font-medium">
                📩 Contact us at{' '}
                <a href="mailto:info@leonardsolutions.in" className="text-[#00ADB5] hover:underline">
                  info@leonardsolutions.in
                </a>{' '}
                to start ensuring your data processor compliance today.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Compliance Info Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Data Processor</span>{' '}
              <span className="text-[#00ADB5]">Compliance Essentials</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
            {complianceInfo.map((info: ComplianceInfo, index: number) => (
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

      {/* Key Contract Clauses Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Key Contract</span>{' '}
              <span className="text-[#00ADB5]">Clauses</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
            {[
              { title: 'Scope of Processing', description: 'Defines the types of personal data and purposes for processing, ensuring alignment with the controller’s instructions.' },
              { title: 'Security Measures', description: 'Outlines technical and organizational measures to protect data, such as encryption and access controls.' },
              { title: 'Sub-Processor Engagement', description: 'Specifies conditions for engaging sub-processors, including controller approval and compliance checks.' },
              { title: 'Data Subject Rights', description: 'Ensures processors support controllers in fulfilling data subject requests, like access or deletion.' },
              { title: 'Breach Notification', description: 'Requires prompt notification to the controller in case of a data breach, with clear timelines.' },
              { title: 'Audit and Inspection', description: 'Allows controllers to audit processor compliance and access records of processing activities.' },
            ].map((clause, index) => (
              <motion.div
                key={clause.title}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#00ADB5]/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold text-[#222831] mb-3">{clause.title}</h3>
                <p className="text-[#393E46]/80 text-base leading-relaxed">{clause.description}</p>
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
              <span className="text-[#222831]">How to Ensure</span>{' '}
              <span className="text-[#00ADB5]">Data Processor Compliance</span>
            </h2>
          </div>
          <div className="space-y-8">
            {[
              { step: '1. Identify Processing Activities', description: 'Map out all data processing activities, including data types and purposes, to define contract scope.' },
              { step: '2. Review Legal Requirements', description: 'Understand obligations under applicable laws (e.g., GDPR Art. 28, DPDP Act) for contract drafting.' },
              { step: '3. Draft the Contract', description: 'Create a contract with clear clauses on processing, security, sub-processors, and compliance obligations.' },
              { step: '4. Legal Review', description: 'Have the contract reviewed by legal experts to ensure compliance with relevant regulations.' },
              { step: '5. Monitor and Update', description: 'Regularly audit processing activities and update contracts to align with evolving laws and practices.' },
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
              <span className="text-[#00ADB5]">Data Processor Contracts</span>
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
                <h3 className="text-xl font-bold text-[#222831] mb-3">Who Needs a Data Processor Contract?</h3>
                <ul className="text-[#393E46]/80 list-disc list-inside mb-6">
                  <li>Businesses processing personal data for others (e.g., IT service providers)</li>
                  <li>Cloud service providers handling customer data</li>
                  <li>Third-party vendors managing data for controllers</li>
                  <li>Companies operating under GDPR, CCPA, or DPDP Act</li>
                  <li>Organizations engaging sub-processors</li>
                  <li>Businesses with international data processing operations</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#222831] mb-3">Requirements for Compliance</h3>
                <p className="text-[#393E46]/80 mb-4">Key information needed to draft a compliant contract includes:</p>
                <ul className="text-[#393E46]/80 list-disc list-inside">
                  <li>Details of data types and processing activities</li>
                  <li>Security measures and protocols</li>
                  <li>Sub-processor engagement terms</li>
                  <li>Data subject rights support mechanisms</li>
                  <li>Breach notification procedures</li>
                  <li>Audit and inspection provisions</li>
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
              <span className="text-[#393E46]">Processor Compliance?</span>
            </h2>
            <p className="text-[#393E46] text-lg leading-relaxed mb-6">
              Safeguard your data processing operations with Leonard Corporate Solutions’ expert contract drafting services. Start today to ensure compliance with global data protection laws.
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
