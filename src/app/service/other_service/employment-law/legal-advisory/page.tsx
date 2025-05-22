'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';
import Link from 'next/link';

// Define the interface for legal advisory info
interface AdvisoryInfo {
  id: number;
  title: string;
  description: string;
  category: string;
  detailedContent: string;
}

const advisoryInfo: AdvisoryInfo[] = [
  {
    id: 1,
    title: 'Employment Law Compliance',
    description: 'Guidance on adhering to Indian employment regulations.',
    category: 'Compliance Advisory',
    detailedContent: `
      • Provide expert advice on Shops and Establishments Act compliance.
      • Ensure adherence to Minimum Wages Act and Payment of Wages Act.
      • Guide on Employees’ Provident Fund (EPF) and ESI regulations.
      • Advise on Sexual Harassment of Women at Workplace Act (POSH) compliance.
      • Support compliance with maternity benefits and gratuity laws.
      • Offer tailored solutions for industry-specific labour laws.
    `,
  },
  {
    id: 2,
    title: 'Dispute Resolution',
    description: 'Expert support for resolving employment disputes.',
    category: 'Dispute Management',
    detailedContent: `
      • Advise on resolving disputes under the Industrial Disputes Act.
      • Support mediation and conciliation for employee grievances.
      • Provide guidance on handling wrongful termination claims.
      • Assist in resolving wage or benefit-related disputes.
      • Represent clients in labour court or tribunal proceedings.
      • Develop strategies to minimize litigation risks.
    `,
  },
  {
    id: 3,
    title: 'Contract Labour Advisory',
    description: 'Guidance on managing contract labour compliance.',
    category: 'Contract Labour',
    detailedContent: `
      • Advise on compliance with Contract Labour (Regulation and Abolition) Act.
      • Guide on contractor agreements and worker welfare obligations.
      • Ensure compliance with PF, ESI, and wage regulations for contract labour.
      • Provide strategies for managing multi-contractor operations.
      • Support resolution of disputes involving contract workers.
      • Offer advice on record-keeping and statutory filings.
    `,
  },
  {
    id: 4,
    title: 'Policy and Contract Review',
    description: 'Review policies and contracts for legal compliance.',
    category: 'Legal Review',
    detailedContent: `
      • Review HR policies for compliance with labour laws.
      • Assess employment contracts for legal enforceability.
      • Ensure policies align with POSH, EPF, and ESI regulations.
      • Identify risks in non-compete or confidentiality clauses.
      • Provide recommendations for policy or contract updates.
      • Support alignment with state-specific regulations.
    `,
  },
  {
    id: 5,
    title: 'Labour Inspection Support',
    description: 'Prepare for and manage government labour inspections.',
    category: 'Inspection Advisory',
    detailedContent: `
      • Prepare businesses for labour department inspections.
      • Ensure compliance with statutory registers and filings.
      • Guide on addressing inspection queries or deficiencies.
      • Support post-inspection corrective actions.
      • Provide training for HR teams on inspection preparedness.
      • Advise on minimizing penalties or fines during inspections.
    `,
  },
];

export default function LegalAdvisoryPage() {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [selectedInfo, setSelectedInfo] = useState<AdvisoryInfo | null>(null);

  const handleExploreClick = (info: AdvisoryInfo) => {
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
            Legal Advisory
            <span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Expert Guidance on Employment Law Regulations and Disputes
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
                <span className="text-[#00ADB5]">Expert Employment</span>{' '}
                <span className="text-[#393E46]">Law Advisory</span>
              </h2>
              <p className="text-[#393E46] text-lg leading-relaxed">
                At Leonard Corporate Solutions, we provide expert legal advisory on Indian employment laws and disputes. Since 2008, we have guided businesses through complex regulations and resolved workplace conflicts to ensure compliance and minimize risks.
              </p>
              <p className="text-[#393E46] text-lg font-medium">
                📩 Contact us at{' '}
                <a href="mailto:info@leonardsolutions.in" className="text-[#00ADB5] hover:underline">
                  info@leonardsolutions.in
                </a>{' '}
                for legal advisory today.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Advisory Info Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Legal Advisory</span>{' '}
              <span className="text-[#00ADB5]">Essentials</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
            {advisoryInfo.map((info: AdvisoryInfo, index: number) => (
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

      {/* Key Advisory Services Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Key Legal</span>{' '}
              <span className="text-[#00ADB5]">Advisory Services</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
            {[
              { title: 'Compliance Guidance', description: 'Navigate employment law regulations.' },
              { title: 'Dispute Resolution', description: 'Resolve workplace conflicts effectively.' },
              { title: 'Contract Labour', description: 'Manage contract worker compliance.' },
              { title: 'Policy Review', description: 'Ensure policies are legally sound.' },
              { title: 'Inspection Support', description: 'Prepare for labour inspections.' },
              { title: 'Risk Management', description: 'Minimize legal and compliance risks.' },
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

      {/* Advisory Process Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">How We Provide</span>{' '}
              <span className="text-[#00ADB5]">Legal Advisory</span>
            </h2>
          </div>
          <div className="space-y-8">
            {[
              { step: '1. Assess Business Needs', description: 'Understand compliance and dispute challenges.' },
              { step: '2. Analyze Legal Framework', description: 'Review applicable employment laws.' },
              { step: '3. Provide Guidance', description: 'Offer tailored legal advice and strategies.' },
              { step: '4. Support Implementation', description: 'Assist with compliance or dispute resolution.' },
              { step: '5. Monitor Progress', description: 'Ensure ongoing adherence and resolution.' },
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
              <span className="text-[#00ADB5]">Legal Advisory</span>
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
                <h3 className="text-xl font-bold text-[#222831] mb-3">Who Needs Legal Advisory?</h3>
                <ul className="text-[#393E46]/80 list-disc list-inside mb-6">
                  <li>Manufacturing units and factories</li>
                  <li>Retail and commercial establishments</li>
                  <li>IT companies and corporate offices</li>
                  <li>Hospitality and food service businesses</li>
                  <li>Startups and small-medium enterprises</li>
                  <li>Organizations with contract or temporary workers</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#222831] mb-3">Requirements for Legal Advisory</h3>
                <p className="text-[#393E46]/80 mb-4">Key information needed for legal advisory includes:</p>
                <ul className="text-[#393E46]/80 list-disc list-inside">
                  <li>Details of compliance or dispute issues</li>
                  <li>Employee records and HR policies</li>
                  <li>Existing contracts or agreements</li>
                  <li>Details of contract labour or third-party staffing</li>
                  <li>Previous labour inspection or legal correspondence</li>
                  <li>Business registration and operational details</li>
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
              <span className="text-[#00ADB5]">Ready for Expert</span>{' '}
              <span className="text-[#393E46]">Legal Advisory?</span>
            </h2>
            <p className="text-[#393E46] text-lg leading-relaxed mb-6">
              Partner with Leonard Corporate Solutions for expert guidance on employment law regulations and disputes. Ensure compliance and resolve conflicts efficiently.
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