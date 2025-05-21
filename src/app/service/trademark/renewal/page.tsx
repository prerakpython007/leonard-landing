'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { X } from "lucide-react";

// Define the interface for renewal info
interface RenewalInfo {
  id: number;
  title: string;
  description: string;
  category: string;
  detailedContent: string;
}

const renewalInfo: RenewalInfo[] = [
  {
    id: 1,
    title: "What is Trademark Renewal?",
    description: "Trademark renewal extends the legal protection of your brand for another ten years, ensuring continued exclusivity of your logo, name, or slogan in the market.",
    category: "Renewal Basics",
    detailedContent: `
      • Extends trademark validity for another 10 years.
      • Protects logos, names, or slogans from unauthorized use.
      • Governed by the Trade Marks Act, 1999 in India.
      • Maintains exclusive rights to your brand identity.
      • Requires filing Form TM-R with the Trademark Registry.
      • Prevents competitors from claiming similar marks.
    `,
  },
  {
    id: 2,
    title: "Benefits of Renewal",
    description: "Renewing your trademark maintains brand protection, prevents loss of rights, enables legal action against infringements, and supports licensing opportunities.",
    category: "Brand Protection",
    detailedContent: `
      • Sustains legal protection against unauthorized use.
      • Prevents loss of exclusive brand rights.
      • Enables lawsuits against trademark infringements.
      • Supports licensing or franchising for revenue.
      • Enhances brand credibility and market trust.
      • Maintains brand value and recognition.
    `,
  },
  {
    id: 3,
    title: "Renewal Process",
    description: "The process involves filing Form TM-R, scrutiny by the Trademark Registry, journal publication, and issuance of a renewal certificate if unopposed.",
    category: "Process Guide",
    detailedContent: `
      • File Form TM-R online or through an agent.
      • Trademark Registry reviews application compliance.
      • Approved renewals published in Trademark Journal.
      • Four-month opposition period post-publication.
      • Renewal certificate issued if unopposed.
      • Process typically takes 6-12 months.
    `,
  },
  {
    id: 4,
    title: "Trademark Restoration",
    description: "If a trademark expires, it can be restored within one year from the expiry date by filing an application with the required fees and documentation.",
    category: "Restoration",
    detailedContent: `
      • Applicable within 6-12 months post-expiry.
      • Requires Form TM-R with surcharge fees.
      • Includes Form TM-18 for affidavit support.
      • Registry issues notice 6 months before expiry.
      • Failure to restore leads to trademark removal.
      • Restored mark regains full legal protection.
    `,
  },
  {
    id: 5,
    title: "Timelines and Forms",
    description: "Renewal can be filed up to one year before expiry, with specific forms like TM-R and TM-18, along with applicable fees for physical or e-filing.",
    category: "Filing Requirements",
    detailedContent: `
      • File up to 12 months before expiry date.
      • Form TM-R: ₹9,000 (e-filing) or ₹10,000 (physical).
      • Surcharge for late renewal: ₹4,500-₹5,000.
      • Form TM-18 for affidavit if required.
      • E-filing preferred for faster processing.
      • Timely filing avoids restoration penalties.
    `,
  },
];

export default function TrademarkRenewalPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState<RenewalInfo | null>(null);

  const handleExploreClick = (info: RenewalInfo) => {
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
            Trademark Renewal
            <span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Extend Your Brand Protection
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
                <span className="text-[#00ADB5]">Safeguard</span>{' '}
                <span className="text-[#393E46]">Your Brand</span>
              </h2>
              <p className="text-[#393E46] text-lg leading-relaxed">
                Trademark renewal extends your brand’s legal protection for another decade, ensuring exclusivity under the Trade Marks Act, 1999. BrandSecure simplifies the online renewal process, helping you maintain your brand’s identity and prevent unauthorized use.
              </p>
              <p className="text-[#393E46] text-lg font-medium">
                📩 Contact us at{' '}
                <a href="mailto:info@brandsecure.in" className="text-[#00ADB5] hover:underline">
                  info@brandsecure.in
                </a>{' '}
                to renew your trademark today.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Renewal Info Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Trademark Renewal</span>{' '}
              <span className="text-[#00ADB5]">Essentials</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
            {renewalInfo.map((info: RenewalInfo, index: number) => (
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

      {/* Benefits of Renewal Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Benefits of</span>{' '}
              <span className="text-[#00ADB5]">Trademark Renewal</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 px-4 md:px-16">
            {[
              {
                title: 'Sustained Brand Protection',
                description: 'Renewal extends legal protection for your brand for another decade, preventing competitors from using similar marks.',
              },
              {
                title: 'Retains Exclusive Rights',
                description: 'Avoid losing exclusive rights to your brand, which could allow others to register similar marks and create market confusion.',
              },
              {
                title: 'Supports Legal Action',
                description: 'A renewed trademark empowers you to take legal steps against unauthorized use, safeguarding your brand’s reputation.',
              },
              {
                title: 'Boosts Licensing Opportunities',
                description: 'A valid trademark supports licensing or franchising, creating new revenue streams with confident partners.',
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#00ADB5]/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold text-[#222831] mb-3">{benefit.title}</h3>
                <p className="text-[#393E46]/80 text-base leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Renewal Process Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Trademark Renewal</span>{' '}
              <span className="text-[#00ADB5]">Process</span>
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                title: 'File Application',
                description: 'Submit Form TM-R online via the Indian Patent Office portal or through an authorized agent.',
              },
              {
                title: 'Application Review',
                description: 'The Trademark Registry examines the application to ensure compliance with all requirements.',
              },
              {
                title: 'Journal Publication',
                description: 'Approved renewals are published in the Trademark Journal for public review.',
              },
              {
                title: 'Renewal Certificate',
                description: 'Upon successful publication, a renewal certificate is issued, extending protection for ten years.',
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

      {/* Documents and Forms Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Documents and Forms</span>{' '}
              <span className="text-[#00ADB5]">for Renewal</span>
            </h2>
          </div>
          <motion.div
            className="bg-white p-8 rounded-xl shadow-md border border-[#00ADB5]/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <h3 className="text-xl font-bold text-[#222831] mb-3">Required Documents</h3>
            <ul className="text-[#393E46]/80 list-disc list-inside mb-6 text-base">
              <li>Form TM-R (Renewal Application)</li>
              <li>Copy of Trademark Registration Certificate</li>
              <li>Original Trademark Application Form (TM-A)</li>
              <li>Applicant’s Identity and Address Proof</li>
              <li>Power of Attorney (if filed by an agent)</li>
            </ul>
            <h3 className="text-xl font-bold text-[#222831] mb-3">Forms and Fees</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[#393E46]/80 text-base">
                <thead>
                  <tr className="bg-[#00ADB5]/10">
                    <th className="p-4 font-bold text-[#222831]">Form</th>
                    <th className="p-4 font-bold text-[#222831]">Purpose</th>
                    <th className="p-4 font-bold text-[#222831]">Physical Filing Cost</th>
                    <th className="p-4 font-bold text-[#222831]">E-Filing Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4">TM-R</td>
                    <td className="p-4">Renewal of registered trademark</td>
                    <td className="p-4">₹10,000</td>
                    <td className="p-4">₹9,000</td>
                  </tr>
                  <tr>
                    <td className="p-4">TM-R</td>
                    <td className="p-4">Renewal with surcharge</td>
                    <td className="p-4">₹5,000 + Renewal fee</td>
                    <td className="p-4">₹4,500 + Renewal fee</td>
                  </tr>
                  <tr>
                    <td className="p-4">TM-18</td>
                    <td className="p-4">Affidavit for statement of case</td>
                    <td className="p-4">-</td>
                    <td className="p-4">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Restoration Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Trademark</span>{' '}
              <span className="text-[#00ADB5]">Restoration</span>
            </h2>
          </div>
          <motion.div
            className="bg-white p-8 rounded-xl shadow-md border border-[#00ADB5]/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <h3 className="text-xl font-bold text-[#222831] mb-3">Restoring an Expired Trademark</h3>
            <p className="text-[#393E46]/80 mb-4 text-base">
              If your trademark expires, restoration is possible within six months to one year from the expiry date. The Trademark Registry sends a notice six months prior to expiry. Failure to renew within six months post-expiry results in removal from the Register. Restoration involves filing Form TM-R with a surcharge and supporting documents.
            </p>
            <p className="text-[#393E46]/80 text-base">
              Restoration Fees: ₹10,000 (physical) or ₹9,000 (e-filing) plus renewal fee for Form TM-R, and Form TM-18 for affidavit support.
            </p>
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
              <span className="text-[#00ADB5]">Renew</span>{' '}
              <span className="text-[#393E46]">Your Trademark</span>
            </h2>
            <p className="text-[#393E46] text-lg leading-relaxed mb-6">
              Keep your brand protected with BrandSecure’s expert renewal services. Contact us today to extend your trademark’s validity and maintain market exclusivity.
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