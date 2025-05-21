'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { X } from "lucide-react";

// Define the interface for opposition info
interface OppositionInfo {
  id: number;
  title: string;
  description: string;
  category: string;
  detailedContent: string;
}

const oppositionInfo: OppositionInfo[] = [
  {
    id: 1,
    title: "What is Trademark Opposition?",
    description: "Trademark opposition occurs when a third party challenges a trademark’s registration during its four-month publication period in the Trademark Journal.",
    category: "Opposition Basics",
    detailedContent: `
      • Initiated during the four-month publication in the Trademark Journal.
      • Allows third parties to challenge a trademark’s registration.
      • Governed by the Trademarks Act, 1999 in India.
      • Aims to prevent registration of conflicting or ineligible marks.
      • Filed via Form TM-O with the Trademark Registry.
      • Critical phase to protect existing brand rights.
    `,
  },
  {
    id: 2,
    title: "Who Can Oppose?",
    description: "Any individual, including customers, competitors, or the public, can file an opposition, regardless of their commercial interest in the trademark.",
    category: "Eligibility",
    detailedContent: `
      • Open to any individual or entity, no commercial interest required.
      • Includes competitors, customers, or general public.
      • Protects public interest and existing trademark holders.
      • Requires filing Form TM-O with valid grounds.
      • No need for prior trademark registration to oppose.
      • Encourages vigilance in the trademark ecosystem.
    `,
  },
  {
    id: 3,
    title: "Opposition Process",
    description: "The process involves filing Form TM-O, submitting evidence, responding with a counterstatement, and attending a hearing to resolve the dispute.",
    category: "Process Guide",
    detailedContent: `
      • File Form TM-O within four months of publication.
      • Submit grounds and evidence supporting opposition.
      • Applicant responds with counterstatement within two months.
      • Both parties submit additional evidence as required.
      • Registrar schedules a hearing to review arguments.
      • Final decision determines trademark registration status.
    `,
  },
  {
    id: 4,
    title: "Grounds for Opposition",
    description: "Opposition can be based on similarity to existing marks, lack of distinctiveness, deceptive nature, or violation of legal standards.",
    category: "Opposition Reasons",
    detailedContent: `
      • Similarity to registered or pending trademarks causing confusion.
      • Lack of distinctiveness, e.g., generic or descriptive marks.
      • Deceptive marks misleading consumers about goods/services.
      • Violation of legal standards, e.g., Emblem and Names Act.
      • Marks offending cultural, religious, or moral sentiments.
      • Bad faith applications, e.g., copying well-known marks.
    `,
  },
  {
    id: 5,
    title: "Outcome of Opposition",
    description: "The Registrar decides whether to register or reject the trademark based on evidence and arguments presented during the hearing.",
    category: "Resolution",
    detailedContent: `
      • Registrar reviews evidence and arguments from both parties.
      • Decision to register, reject, or amend the trademark.
      • Successful opposition prevents trademark registration.
      • Unsuccessful opposition leads to registration certificate.
      • Decisions can be appealed in higher courts if disputed.
      • Process ensures fair adjudication of trademark rights.
    `,
  },
];

export default function TrademarkOppositionPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState<OppositionInfo | null>(null);

  const handleExploreClick = (info: OppositionInfo) => {
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
            Trademark Opposition
            <span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Protect Your Brand Rights
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
                <span className="text-[#00ADB5]">Navigate</span>{' '}
                <span className="text-[#393E46]">Trademark Opposition</span>
              </h2>
              <p className="text-[#393E46] text-lg leading-relaxed">
                Trademark opposition is a critical phase where third parties can challenge a mark during its four-month publication in the Trademark Journal. BrandSecure provides expert guidance to defend your trademark or oppose conflicting marks, ensuring a smooth resolution.
              </p>
              <p className="text-[#393E46] text-lg font-medium">
                📩 Contact us at{' '}
                <a href="mailto:info@brandsecure.in" className="text-[#00ADB5] hover:underline">
                  info@brandsecure.in
                </a>{' '}
                to handle opposition today.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Opposition Info Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Trademark Opposition</span>{' '}
              <span className="text-[#00ADB5]">Essentials</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
            {oppositionInfo.map((info: OppositionInfo, index: number) => (
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

      {/* Grounds for Opposition Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Reasons for</span>{' '}
              <span className="text-[#00ADB5]">Trademark Opposition</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 px-4 md:px-16">
            {[
              {
                title: 'Similarity to Existing Marks',
                description: 'Opposition may arise if the trademark closely resembles an existing registered mark, risking market confusion.',
              },
              {
                title: 'Lack of Distinctiveness',
                description: 'Marks that are generic or descriptive may be opposed for failing to stand out as unique identifiers.',
              },
              {
                title: 'Deceptive or Confusing',
                description: 'Trademarks likely to mislead the public or cause confusion can face opposition under the law.',
              },
              {
                title: 'Legal Violations',
                description: 'Marks conflicting with the Emblem and Names Act or offending cultural sentiments may be challenged.',
              },
            ].map((reason, index) => (
              <motion.div
                key={reason.title}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#00ADB5]/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold text-[#222831] mb-3">{reason.title}</h3>
                <p className="text-[#393E46]/80 text-base leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Opposition Procedure Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Trademark Opposition</span>{' '}
              <span className="text-[#00ADB5]">Process</span>
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                title: 'Filing Opposition',
                description: 'Submit Form TM-O within four months of the trademark’s publication, detailing the grounds for opposition and paying the required fee.',
              },
              {
                title: 'Counterstatement',
                description: 'The applicant must respond with a counterstatement on Form TM-O within two months, or the application is deemed abandoned.',
              },
              {
                title: 'Evidence Submission',
                description: 'Both parties submit evidence within two months to support their claims, with an optional additional month for further evidence.',
              },
              {
                title: 'Hearing & Decision',
                description: 'The Registrar holds a hearing, reviews evidence, and decides whether to register or reject the trademark.',
              },
            ].map((step, index) => (
              <motion.div
                key={step.title}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#00ADB5]/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold text-[#222831] mb-3">{index + 1}. {step.title}</h3>
                <p className="text-[#393E46]/80 text-base leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Objection vs Opposition Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Objection vs.</span>{' '}
              <span className="text-[#00ADB5]">Opposition</span>
            </h2>
          </div>
          <motion.div
            className="bg-white p-8 rounded-xl shadow-md border border-[#00ADB5]/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[#393E46]/80 text-base">
                <thead>
                  <tr className="bg-[#00ADB5]/10">
                    <th className="p-4 font-bold text-[#222831]">Aspect</th>
                    <th className="p-4 font-bold text-[#222831]">Trademark Objection</th>
                    <th className="p-4 font-bold text-[#222831]">Trademark Opposition</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4">Source</td>
                    <td className="p-4">Raised by Trademark Examiner</td>
                    <td className="p-4">Filed by a third party</td>
                  </tr>
                  <tr>
                    <td className="p-4">Fees</td>
                    <td className="p-4">No additional fees</td>
                    <td className="p-4">Fees required with Form TM-O</td>
                  </tr>
                  <tr>
                    <td className="p-4">Response Time</td>
                    <td className="p-4">One month</td>
                    <td className="p-4">Two months for counterstatement</td>
                  </tr>
                  <tr>
                    <td className="p-4">Process Stage</td>
                    <td className="p-4">Part of initial examination</td>
                    <td className="p-4">Post-publication phase</td>
                  </tr>
                  <tr>
                    <td className="p-4">Consequence of No Response</td>
                    <td className="p-4">Application abandoned</td>
                    <td className="p-4">Application abandoned</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Why Partner with</span>{' '}
              <span className="text-[#00ADB5]">BrandSecure?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
            {[
              {
                title: 'Expert Guidance',
                description: 'Our team of trademark specialists provides tailored advice to strengthen your opposition or defense strategy.',
              },
              {
                title: 'Comprehensive Search',
                description: 'We conduct thorough trademark searches to identify conflicts and build a robust case for opposition.',
              },
              {
                title: 'Seamless Filing',
                description: 'We handle document preparation and filing, ensuring compliance and timely submission to the Registry.',
              },
            ].map((reason, index) => (
              <motion.div
                key={reason.title}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#00ADB5]/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold text-[#222831] mb-3">{reason.title}</h3>
                <p className="text-[#393E46]/80 text-base leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
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
              <span className="text-[#00ADB5]">Tackle</span>{' '}
              <span className="text-[#393E46]">Trademark Opposition</span>
            </h2>
            <p className="text-[#393E46] text-lg leading-relaxed mb-6">
              Defend or oppose trademarks with BrandSecure’s expert support. Contact us today to protect your brand’s integrity through the opposition process.
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