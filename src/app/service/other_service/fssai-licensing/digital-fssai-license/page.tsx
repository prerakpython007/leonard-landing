'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';
import Link from 'next/link';

// Define the interface for FSSAI license info
interface FSSAIInfo {
  id: number;
  title: string;
  description: string;
  category: string;
  detailedContent: string;
}

const fssaiInfo: FSSAIInfo[] = [
  {
    id: 1,
    title: 'FSSAI License Application',
    description: 'Streamline the process of applying for your 14-digit FSSAI license.',
    category: 'Application Process',
    detailedContent: `
      • Guide businesses through FSSAI registration, basic, or state/central license applications.
      • Assist with Form A or Form B submission based on business scale.
      • Ensure compliance with FSSAI eligibility criteria (e.g., turnover, operations).
      • Provide document checklists (e.g., ID proof, address proof, food safety plans).
      • Support online submission via the FoSCoS portal.
      • Expedite application processing to obtain the 14-digit license number.
    `,
  },
  {
    id: 2,
    title: 'Compliance with FSSAI Regulations',
    description: 'Ensure your business meets FSSAI food safety and labeling standards.',
    category: 'Regulatory Compliance',
    detailedContent: `
      • Align operations with FSSAI food safety standards (FSS Act, 2006).
      • Ensure compliance with labeling requirements (e.g., nutritional info, expiry dates).
      • Implement food safety management systems (FSMS) as mandated.
      • Conduct audits to verify compliance with hygiene and sanitation norms.
      • Address packaging and ingredient compliance for processed foods.
      • Provide training on FSSAI regulations for staff.
    `,
  },
  {
    id: 3,
    title: 'Documentation Support',
    description: 'Simplify the preparation of documents required for FSSAI licensing.',
    category: 'Documentation',
    detailedContent: `
      • Assist with preparing business registration documents (e.g., GST, PAN).
      • Compile food safety plans and declarations for FSSAI submission.
      • Support submission of premises layout plans and water test reports.
      • Provide templates for affidavits and undertakings.
      • Ensure accuracy of documents to avoid application rejections.
      • Organize records for FSSAI inspections and renewals.
    `,
  },
  {
    id: 4,
    title: 'License Renewal and Updates',
    description: 'Manage FSSAI license renewals and modifications seamlessly.',
    category: 'Renewal & Updates',
    detailedContent: `
      • Guide timely renewal of FSSAI licenses before expiry.
      • Assist with modifications for business expansions or changes.
      • Update license details on the FoSCoS portal (e.g., address, product categories).
      • Ensure compliance during renewal inspections.
      • Provide reminders for renewal deadlines.
      • Support re-application in case of license suspension.
    `,
  },
  {
    id: 5,
    title: 'FSSAI Audit and Inspection Support',
    description: 'Prepare for FSSAI inspections to maintain compliance and avoid penalties.',
    category: 'Audit Support',
    detailedContent: `
      • Conduct pre-inspection audits to ensure compliance with FSSAI standards.
      • Prepare businesses for FSSAI on-site inspections and document reviews.
      • Address non-compliance issues before official audits.
      • Provide post-inspection support to resolve findings.
      • Train staff on inspection protocols and compliance requirements.
      • Ensure records are audit-ready for FSSAI authorities.
    `,
  },
];

export default function DigitalFSSAILicensePage() {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [selectedInfo, setSelectedInfo] = useState<FSSAIInfo | null>(null);

  const handleExploreClick = (info: FSSAIInfo) => {
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
            14-Digital FSSAI License
            <span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Obtain Your 14-Digit FSSAI License Number with Ease
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
                <span className="text-[#00ADB5]">Effortless FSSAI</span>{' '}
                <span className="text-[#393E46]">License Acquisition</span>
              </h2>
              <p className="text-[#393E46] text-lg leading-relaxed">
                At Leonard Corporate Solutions, we simplify the process of obtaining your 14-digit FSSAI license. Since 2008, we have helped food businesses navigate FSSAI regulations, ensuring compliance and seamless licensing through the FoSCoS portal.
              </p>
              <p className="text-[#393E46] text-lg font-medium">
                📩 Contact us at{' '}
                <a href="mailto:info@leonardsolutions.in" className="text-[#00ADB5] hover:underline">
                  info@leonardsolutions.in
                </a>{' '}
                to get your FSSAI license today.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FSSAI Info Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">FSSAI License</span>{' '}
              <span className="text-[#00ADB5]">Essentials</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
            {fssaiInfo.map((info: FSSAIInfo, index: number) => (
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

      {/* Key FSSAI Services Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Key FSSAI</span>{' '}
              <span className="text-[#00ADB5]">License Services</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
            {[
              { title: 'License Application', description: 'Streamline FSSAI license application via FoSCoS.' },
              { title: 'Regulatory Compliance', description: 'Ensure adherence to FSSAI food safety standards.' },
              { title: 'Documentation Support', description: 'Simplify document preparation for licensing.' },
              { title: 'Renewal Assistance', description: 'Manage timely FSSAI license renewals.' },
              { title: 'Inspection Support', description: 'Prepare for FSSAI audits and inspections.' },
              { title: 'Compliance Training', description: 'Train staff on FSSAI regulations and protocols.' },
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

      {/* FSSAI Process Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">How to Obtain</span>{' '}
              <span className="text-[#00ADB5]">Your FSSAI License</span>
            </h2>
          </div>
          <div className="space-y-8">
            {[
              { step: '1. Determine License Type', description: 'Identify registration, state, or central license based on business scale.' },
              { step: '2. Prepare Documentation', description: 'Compile required documents for FSSAI application.' },
              { step: '3. Submit Application', description: 'Apply via the FoSCoS portal with accurate details.' },
              { step: '4. Undergo Inspection', description: 'Prepare for FSSAI inspections to verify compliance.' },
              { step: '5. Receive License', description: 'Obtain your 14-digit FSSAI license number.' },
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
              <span className="text-[#00ADB5]">an FSSAI License</span>
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
                <h3 className="text-xl font-bold text-[#222831] mb-3">Who Needs an FSSAI License?</h3>
                <ul className="text-[#393E46]/80 list-disc list-inside mb-6">
                  <li>Food manufacturers, processors, and packagers</li>
                  <li>Restaurants, cafes, and food service providers</li>
                  <li>Food importers, exporters, and distributors</li>
                  <li>Retailers and wholesalers dealing in food products</li>
                  <li>E-commerce food businesses and cloud kitchens</li>
                  <li>Food startups and home-based food businesses</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#222831] mb-3">Requirements for FSSAI License</h3>
                <p className="text-[#393E46]/80 mb-4">Key information needed to obtain an FSSAI license includes:</p>
                <ul className="text-[#393E46]/80 list-disc list-inside">
                  <li>Business registration details (e.g., GST, PAN)</li>
                  <li>Proof of identity and address for owners</li>
                  <li>Food safety management plan (FSMS)</li>
                  <li>Premises layout plan and water test report</li>
                  <li>List of food products and categories</li>
                  <li>Turnover and operational details for license type</li>
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
              <span className="text-[#00ADB5]">Ready to Obtain</span>{' '}
              <span className="text-[#393E46]">Your FSSAI License?</span>
            </h2>
            <p className="text-[#393E46] text-lg leading-relaxed mb-6">
              Partner with Leonard Corporate Solutions to effortlessly secure your 14-digit FSSAI license. Ensure compliance and start your food business with confidence.
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