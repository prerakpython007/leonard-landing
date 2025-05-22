'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';
import Link from 'next/link';

// Define the interface for FSSAI online application submission info
interface SubmissionInfo {
  id: number;
  title: string;
  description: string;
  category: string;
  detailedContent: string;
}

const submissionInfo: SubmissionInfo[] = [
  {
    id: 1,
    title: 'Basic Registration Submission',
    description: 'Seamless submission of FSSAI Basic Registration applications.',
    category: 'Basic Registration',
    detailedContent: `
      • Submit Form A for small-scale food businesses (turnover ≤ ₹12 lakh/year).
      • Ensure accurate business and product details for FoSCoS portal submission.
      • Verify eligibility for Basic Registration under FSS Act, 2006.
      • Upload required documents (e.g., ID proof, address proof).
      • Track application status and address FoSCoS queries.
      • Expedite approval for 14-digit FSSAI registration number.
    `,
  },
  {
    id: 2,
    title: 'State License Submission',
    description: 'Efficient submission of FSSAI State License applications.',
    category: 'State License',
    detailedContent: `
      • Submit Form B for medium-scale businesses (turnover ₹12 lakh–₹20 crore/year).
      • Ensure compliance with state-specific FSSAI requirements.
      • Upload documents like FSMS plan, premises layout, and water test reports.
      • Handle multi-unit or multi-product submissions on FoSCoS.
      • Monitor application progress and resolve FoSCoS portal issues.
      • Secure State License for manufacturing, storage, or distribution.
    `,
  },
  {
    id: 3,
    title: 'Central License Submission',
    description: 'Streamlined submission of FSSAI Central License applications.',
    category: 'Central License',
    detailedContent: `
      • Submit Form B for large-scale businesses (turnover > ₹20 crore/year or exports).
      • Address complex requirements for importers, exporters, or multi-state operations.
      • Compile comprehensive documents (e.g., IEC code, FSMS, audit reports).
      • Ensure FoSCoS portal submission aligns with FSSAI regulations.
      • Track and manage Central License application status.
      • Facilitate approval for high-compliance Central License.
    `,
  },
  {
    id: 4,
    title: 'FoSCoS Portal Assistance',
    description: 'Expert support for navigating the FoSCoS portal.',
    category: 'Portal Support',
    detailedContent: `
      • Guide users through FoSCoS portal registration and login.
      • Assist with form filling, document uploads, and payment processes.
      • Troubleshoot technical issues during application submission.
      • Ensure error-free submissions to avoid FoSCoS rejections.
      • Provide updates on portal changes or new FSSAI guidelines.
      • Offer training for businesses to manage FoSCoS independently.
    `,
  },
  {
    id: 5,
    title: 'Post-Submission Support',
    description: 'Manage follow-ups and queries after application submission.',
    category: 'Post-Submission',
    detailedContent: `
      • Monitor application status on the FoSCoS portal.
      • Respond to FSSAI queries or requests for additional documents.
      • Address rejections or deficiencies in applications.
      • Coordinate inspections for State or Central License submissions.
      • Ensure timely issuance of 14-digit FSSAI license number.
      • Provide guidance on license activation and compliance.
    `,
  },
];

export default function OnlineApplicationSubmissionPage() {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [selectedInfo, setSelectedInfo] = useState<SubmissionInfo | null>(null);

  const handleExploreClick = (info: SubmissionInfo) => {
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
            Online Application Submission
            <span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Seamless Submission for Central, State, or Basic Registration
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
                <span className="text-[#00ADB5]">Seamless FSSAI</span>{' '}
                <span className="text-[#393E46]">Application Submission</span>
              </h2>
              <p className="text-[#393E46] text-lg leading-relaxed">
                At Leonard Corporate Solutions, we ensure seamless online submission of FSSAI applications for Basic Registration, State, or Central Licenses. Since 2008, we have guided food businesses through the FoSCoS portal, ensuring error-free submissions and timely approvals.
              </p>
              <p className="text-[#393E46] text-lg font-medium">
                📩 Contact us at{' '}
                <a href="mailto:info@leonardsolutions.in" className="text-[#00ADB5] hover:underline">
                  info@leonardsolutions.in
                </a>{' '}
                to submit your FSSAI application today.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Submission Info Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">FSSAI Submission</span>{' '}
              <span className="text-[#00ADB5]">Essentials</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
            {submissionInfo.map((info: SubmissionInfo, index: number) => (
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

      {/* Key Submission Services Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Key Submission</span>{' '}
              <span className="text-[#00ADB5]">Services</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
            {[
              { title: 'Basic Registration', description: 'Submit applications for small-scale businesses.' },
              { title: 'State License', description: 'Handle submissions for medium-scale operations.' },
              { title: 'Central License', description: 'Manage submissions for large-scale or export businesses.' },
              { title: 'FoSCoS Navigation', description: 'Guide seamless use of the FoSCoS portal.' },
              { title: 'Post-Submission Follow-Up', description: 'Track and resolve application queries.' },
              { title: 'Compliance Support', description: 'Ensure submissions meet FSSAI standards.' },
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

      {/* Submission Process Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">How We Submit</span>{' '}
              <span className="text-[#00ADB5]">FSSAI Applications</span>
            </h2>
          </div>
          <div className="space-y-8">
            {[
              { step: '1. Verify Eligibility', description: 'Confirm Basic, State, or Central License requirements.' },
              { step: '2. Prepare Documents', description: 'Compile and review all required documents.' },
              { step: '3. Draft Application', description: 'Complete accurate forms for FoSCoS submission.' },
              { step: '4. Submit on FoSCoS', description: 'Upload and submit via the FoSCoS portal.' },
              { step: '5. Track and Follow-Up', description: 'Monitor status and address FSSAI queries.' },
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
              <span className="text-[#00ADB5]">FSSAI Application Submission</span>
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
                <h3 className="text-xl font-bold text-[#222831] mb-3">Who Needs FSSAI Application Submission?</h3>
                <ul className="text-[#393E46]/80 list-disc list-inside mb-6">
                  <li>Food manufacturers, processors, and packagers</li>
                  <li>Restaurants, cafes, and food service providers</li>
                  <li>Food importers, exporters, and distributors</li>
                  <li>Retailers and wholesalers dealing in food products</li>
                  <li>E-commerce food businesses and cloud kitchens</li>
                  <li>Startups and home-based food businesses</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#222831] mb-3">Requirements for Application Submission</h3>
                <p className="text-[#393E46]/80 mb-4">Key information needed for FSSAI application submission includes:</p>
                <ul className="text-[#393E46]/80 list-disc list-inside">
                  <li>Business registration details (e.g., GST, PAN, IEC for exports)</li>
                  <li>Owner/partner identity and address proofs</li>
                  <li>Food safety management system (FSMS) plan</li>
                  <li>Premises layout plan and water test report</li>
                  <li>List of food products and categories</li>
                  <li>Annual turnover and operational scope</li>
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
              <span className="text-[#00ADB5]">Ready for Seamless</span>{' '}
              <span className="text-[#393E46]">FSSAI Application Submission?</span>
            </h2>
            <p className="text-[#393E46] text-lg leading-relaxed mb-6">
              Partner with Leonard Corporate Solutions for error-free online submission of your FSSAI application. Secure your Basic, State, or Central License with ease and confidence.
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