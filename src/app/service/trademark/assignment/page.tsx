'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { X } from "lucide-react";

// Define the interface for assignment info
interface AssignmentInfo {
  id: number;
  title: string;
  description: string;
  category: string;
  detailedContent: string;
}

const assignmentInfo: AssignmentInfo[] = [
  {
    id: 1,
    title: "What is Trademark Assignment?",
    description: "Trademark assignment involves transferring ownership rights, title, and interest in a trademark from the assignor to the assignee, similar to selling or licensing property.",
    category: "Assignment Basics",
    detailedContent: `
      • Transfers full or partial trademark ownership from assignor to assignee.
      • Governed by Section 37 of the Trademarks Act, 1999 in India.
      • Can involve registered or unregistered trademarks.
      • Functions like a sale, lease, or gift of intellectual property.
      • Requires formal documentation to be legally binding.
      • Enables monetization or strategic transfer of brand assets.
    `,
  },
  {
    id: 2,
    title: "Benefits of Assignment",
    description: "It allows the assignor to monetize their brand, while the assignee gains rights to an established mark, supporting business growth for both parties.",
    category: "Advantages",
    detailedContent: `
      • Enables assignor to generate revenue from trademark sale.
      • Allows assignee to acquire an established brand quickly.
      • Facilitates business expansion or market entry for assignee.
      • Reduces costs of building a new brand from scratch.
      • Provides legal clarity for ownership transfers.
      • Supports strategic partnerships or mergers.
    `,
  },
  {
    id: 3,
    title: "Types of Assignment",
    description: "Assignments can be partial, complete, with goodwill, or without goodwill, each defining the scope of rights transferred between parties.",
    category: "Assignment Types",
    detailedContent: `
      • Partial Assignment: Transfers rights for specific goods/services only.
      • Complete Assignment: Transfers all trademark rights entirely.
      • Assignment with Goodwill: Includes brand reputation and value.
      • Assignment without Goodwill: Excludes use in existing product categories.
      • Licensed Assignment: Grants usage rights without ownership transfer.
      • Each type tailored to specific business or legal needs.
    `,
  },
  {
    id: 4,
    title: "Assignment Process",
    description: "The process includes drafting a written agreement, filing forms with the Trademark Registry, and advertising the assignment as per the Registrar’s instructions.",
    category: "Procedure",
    detailedContent: `
      • Draft a detailed trademark assignment agreement.
      • File Form TM-24 or TM-23 with the Trademark Registry.
      • Submit Form TM-P to update ownership records.
      • Provide supporting documents within six months.
      • Advertise the assignment as per Registrar’s directions.
      • Submit advertisement proof for final registration.
    `,
  },
  {
    id: 5,
    title: "Legal Requirements",
    description: "A valid assignment requires a written agreement, consent from the assignor, adequate consideration, and submission of necessary documents within six months.",
    category: "Compliance",
    detailedContent: `
      • Mandatory written assignment agreement.
      • Clear consent from the assignor to transfer rights.
      • Adequate consideration (e.g., payment) for the transfer.
      • Submission of documents like trademark certificate, NOC.
      • Filing within six months of proprietorship acquisition.
      • Compliance with Trademarks Act, 1999 regulations.
    `,
  },
];

export default function TrademarkAssignmentPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState<AssignmentInfo | null>(null);

  const handleExploreClick = (info: AssignmentInfo) => {
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
            Trademark Assignment
            <span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Transfer Your Trademark Rights
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
                <span className="text-[#00ADB5]">Unlock Your</span>{' '}
                <span className="text-[#393E46]">Brand’s Value</span>
              </h2>
              <p className="text-[#393E46] text-lg leading-relaxed">
                A trademark, like any valuable asset, can be sold, licensed, or transferred through a trademark assignment. Governed by Section 37 of the Trademarks Act, 1999, this process allows the trademark owner (assignor) to pass ownership rights to another party (assignee). At BrandSecure, we simplify the trademark assignment process, helping you monetize your brand or acquire established trademark rights with ease.
              </p>
              <p className="text-[#393E46] text-lg font-medium">
                📩 Contact us at{' '}
                <a href="mailto:info@brandsecure.in" className="text-[#00ADB5] hover:underline">
                  info@brandsecure.in
                </a>{' '}
                to transfer your trademark today.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Assignment Info Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Trademark Assignment</span>{' '}
              <span className="text-[#00ADB5]">Essentials</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
            {assignmentInfo.map((info: AssignmentInfo, index: number) => (
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

      {/* Types of Assignment Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Types of</span>{' '}
              <span className="text-[#00ADB5]">Trademark Assignment</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 px-4 md:px-16">
            {[
              {
                title: 'Partial Assignment',
                description: 'Transfers limited rights for specific goods or services, allowing the assignor to retain control over other aspects of the trademark.',
              },
              {
                title: 'Complete Assignment',
                description: 'Transfers all rights of the trademark to the assignee, giving them full ownership and control over the mark.',
              },
              {
                title: 'Assignment with Goodwill',
                description: 'Includes both the trademark and its associated brand value, allowing the assignee to leverage the mark’s reputation.',
              },
              {
                title: 'Assignment without Goodwill',
                description: 'Transfers the trademark but restricts the assignee from using it for products or services already associated with the assignor’s brand.',
              },
            ].map((type, index) => (
              <motion.div
                key={type.title}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#00ADB5]/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold text-[#222831] mb-3">{type.title}</h3>
                <p className="text-[#393E46]/80 text-base leading-relaxed">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements and Procedure Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Trademark Assignment</span>{' '}
              <span className="text-[#00ADB5]">Process</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 px-4 md:px-16">
            <motion.div
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#00ADB5]/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">Requirements</h3>
              <ul className="text-[#393E46]/80 list-disc list-inside text-base leading-relaxed">
                <li>Written trademark assignment agreement</li>
                <li>Identified assignor (owner) and assignee (buyer)</li>
                <li>Assignor’s consent and intent to transfer</li>
                <li>Adequate consideration for the transfer</li>
                <li>Documents: Assignment agreement, trademark certificate, NOC from assignor, identity proofs</li>
              </ul>
            </motion.div>
            <motion.div
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#00ADB5]/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">Procedure</h3>
              <ul className="text-[#393E46]/80 list-decimal list-inside text-base leading-relaxed">
                <li>File Form TM-24 or TM-23 (joint request) with the Trademark Registry</li>
                <li>Submit Form TM-P to update ownership details</li>
                <li>Provide all required documents within six months of proprietorship acquisition</li>
                <li>Advertise the assignment as directed by the Registrar</li>
                <li>Submit advertisement copy and Registrar’s directions to the Registry</li>
                <li>Receive approval and registration of the assignee as the new proprietor</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Benefits of</span>{' '}
              <span className="text-[#00ADB5]">Trademark Assignment</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
            {[
              {
                title: 'Monetize Your Brand',
                description: 'The assignor can capitalize on the trademark’s value by transferring it for financial gain.',
              },
              {
                title: 'Acquire Established Rights',
                description: 'The assignee gains ownership of a recognized brand, saving time and effort in building a new one.',
              },
              {
                title: 'Legal Clarity',
                description: 'A formal assignment agreement provides a clear legal basis for resolving disputes over ownership.',
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
              <span className="text-[#00ADB5]">Ready to Assign</span>{' '}
              <span className="text-[#393E46]">Your Trademark?</span>
            </h2>
            <p className="text-[#393E46] text-lg leading-relaxed mb-6">
              Whether you’re looking to transfer or acquire a trademark, BrandSecure offers expert assistance to ensure a smooth and compliant process. Contact us today to unlock your brand’s potential.
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