'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { X } from 'lucide-react';

// Define the interface for copyright assignment info
interface CopyrightAssignmentInfo {
  id: number;
  title: string;
  description: string;
  category: string;
  detailedContent: string;
}

const copyrightAssignmentInfo: CopyrightAssignmentInfo[] = [
  {
    id: 1,
    title: 'What is Copyright Assignment?',
    description: 'Copyright assignment is the legal transfer of ownership of a copyrighted work from the original creator to another party, granting them exclusive rights.',
    category: 'Assignment Basics',
    detailedContent: `
      • Governed by Section 19 of the Copyright Act, 1957 in India.
      • Transfers ownership of copyrighted works like books, music, or artwork.
      • Requires a written agreement to be legally valid.
      • Grants the assignee exclusive rights to use, distribute, or adapt the work.
      • Can be complete, partial, or limited by territory or duration.
      • Ensures clarity in ownership and rights management.
    `,
  },
  {
    id: 2,
    title: 'Benefits of Assignment',
    description: 'Assigning copyright allows creators to monetize their work, delegate management, or enable others to exploit the work commercially while retaining certain rights if desired.',
    category: 'Advantages',
    detailedContent: `
      • Monetization through payments, royalties, or licensing deals.
      • Enables collaboration with publishers, producers, or distributors.
      • Delegates rights management to entities with better resources.
      • Allows retention of specific rights via partial assignment.
      • Facilitates commercial exploitation in markets or media.
      • Provides legal clarity and reduces ownership disputes.
    `,
  },
  {
    id: 3,
    title: 'Eligible Works',
    description: 'Any copyrighted work, including literary, artistic, musical, or cinematic creations, can be assigned, provided the assignment is documented in writing.',
    category: 'Eligibility',
    detailedContent: `
      • Literary works: Novels, articles, scripts, or software code.
      • Artistic works: Paintings, photographs, or graphic designs.
      • Musical works: Songs, compositions, or sound recordings.
      • Cinematic works: Films, animations, or video content.
      • Requires a valid copyright and written agreement.
      • Excludes non-copyrightable ideas or unregistered works.
    `,
  },
  {
    id: 4,
    title: 'Assignment Process',
    description: 'Draft a written agreement specifying the work, rights transferred, and terms, then execute it with signatures from both parties, adhering to Section 19 of the Copyright Act, 1957.',
    category: 'Procedure',
    detailedContent: `
      • Draft a written agreement detailing the work and rights assigned.
      • Specify terms like duration, territory, and payment or royalties.
      • Include complete or partial assignment clauses as needed.
      • Obtain signatures from both assignor and assignee for validity.
      • Comply with Section 19 of the Copyright Act, 1957.
      • Notify the Copyright Office for public recordal.
    `,
  },
  {
    id: 5,
    title: 'Legal Implications',
    description: 'A valid assignment transfers full or partial rights, enforceable by law, with disputes handled under the Copyright Act, ensuring clarity in ownership.',
    category: 'Legal Aspects',
    detailedContent: `
      • Transfers enforceable rights under the Copyright Act, 1957.
      • Assignee gains legal authority to use or sue for infringement.
      • Disputes resolved through civil courts or arbitration.
      • Requires clear terms to avoid ambiguity or challenges.
      • Public recordal strengthens legal standing.
      • Protects both parties with documented ownership transfer.
    `,
  },
];

export default function CopyrightAssignmentPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState<CopyrightAssignmentInfo | null>(null);

  const handleExploreClick = (info: CopyrightAssignmentInfo) => {
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
            Copyright Assignment
            <span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Transfer Your Creative Rights with Expert Guidance
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
                <span className="text-[#00ADB5]">Seamlessly Transfer</span>{' '}
                <span className="text-[#393E46]">Your Copyright</span>
              </h2>
              <p className="text-[#393E46] text-lg leading-relaxed">
                Governed by Section 19 of the Copyright Act, 1957 in India, copyright assignment allows creators to transfer ownership of their works, such as books, music, or artwork, to another party. At Leonard Corporate Solutions, we provide expert guidance to draft and execute legally sound assignment agreements, ensuring your interests are protected while enabling monetization or collaboration.
              </p>
              <p className="text-[#393E46] text-lg font-medium">
                📩 Contact us at{' '}
                <a href="mailto:info@leonardsolutions.in" className="text-[#00ADB5] hover:underline">
                  info@leonardsolutions.in
                </a>{' '}
                to start your copyright assignment today.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Copyright Assignment Info Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Copyright Assignment</span>{' '}
              <span className="text-[#00ADB5]">Essentials</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
            {copyrightAssignmentInfo.map((info: CopyrightAssignmentInfo, index: number) => (
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

      {/* Types of Assignment Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Types of</span>{' '}
              <span className="text-[#00ADB5]">Copyright Assignment</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
            {[
              { title: 'Complete Assignment', description: 'All rights to the copyrighted work are transferred to the assignee, leaving the original creator with no control.' },
              { title: 'Partial Assignment', description: 'Specific rights, such as reproduction or distribution, are transferred, while the creator retains other rights.' },
              { title: 'Territorial Assignment', description: 'Rights are transferred for specific geographical regions, allowing the creator to assign rights differently across territories.' },
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

      {/* Assignment Process Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Copyright</span>{' '}
              <span className="text-[#00ADB5]">Assignment Process</span>
            </h2>
          </div>
          <div className="space-y-8">
            {[
              { step: '1. Draft Agreement', description: 'Create a written agreement detailing the work, rights assigned, duration, territory, and any royalties or payments.' },
              { step: '2. Specify Terms', description: 'Clearly outline whether the assignment is complete or partial, including any limitations or reversion clauses.' },
              { step: '3. Execute Agreement', description: 'Both parties sign the agreement, ensuring compliance with Section 19 of the Copyright Act, 1957, for legal validity.' },
              { step: '4. Notify Copyright Office', description: 'Submit the assignment details to the Copyright Office for recordal, ensuring public notice of the transfer.' },
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

      {/* Benefits Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Why Assign</span>{' '}
              <span className="text-[#00ADB5]">Your Copyright?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
            {[
              { title: 'Monetization', description: 'Earn revenue by transferring rights to publishers, producers, or distributors for commercial exploitation.' },
              { title: 'Collaboration', description: 'Enable partnerships by assigning rights to collaborators, such as in film or music production.' },
              { title: 'Rights Management', description: 'Delegate management of rights to entities better equipped to handle licensing or enforcement.' },
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

      {/* Examples Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Examples of</span>{' '}
              <span className="text-[#00ADB5]">Copyright Assignment</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 px-4 md:px-16">
            {[
              { title: 'Book Publishing', description: 'An author assigns copyright to a publisher to distribute and sell their novel, retaining royalty rights.' },
              { title: 'Music Licensing', description: 'A composer assigns rights to a music label for a song’s distribution, specifying terms for streaming and performances.' },
            ].map((example, index) => (
              <motion.div
                key={example.title}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#00ADB5]/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold text-[#222831] mb-3">{example.title}</h3>
                <p className="text-[#393E46]/80 text-base leading-relaxed">{example.description}</p>
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
              <span className="text-[#393E46]">Your Copyright?</span>
            </h2>
            <p className="text-[#393E46] text-lg leading-relaxed mb-6">
              Transfer your creative rights with confidence using Leonard Corporate Solutions’ expert copyright assignment services. Start today to draft a clear and legally sound agreement tailored to your needs.
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