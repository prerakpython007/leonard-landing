'use client';

import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

// Define the interface for copyright registration info
interface CopyrightInfo {
  id: number;
  title: string;
  description: string;
  category: string;
  detailedContent: string;
}

const copyrightInfo: CopyrightInfo[] = [
  {
    id: 1,
    title: 'What is Copyright?',
    description: 'Copyright is a legal right that protects original works of authorship, such as literary, artistic, musical, or dramatic creations, granting exclusive control to the creator.',
    category: 'Copyright Basics',
    detailedContent: `
      • A legal right protecting original works like books, music, films, and software.
      • Grants creators exclusive control over reproduction, distribution, and adaptation.
      • Automatically applies upon creation but registration strengthens legal standing.
      • Covers works fixed in a tangible medium of expression.
      • Encourages creativity by safeguarding intellectual property.
      • Recognized under the Copyright Act, 1957 in India.
    `,
  },
  {
    id: 2,
    title: 'Benefits of Registration',
    description: 'Registering a copyright provides legal proof of ownership, enables lawsuits for infringement, and allows creators to seek statutory damages and legal fees.',
    category: 'Advantages',
    detailedContent: `
      • Establishes legal proof of ownership in disputes.
      • Enables lawsuits against infringers for remedies like injunctions or damages.
      • Allows claims for statutory damages and legal fees.
      • Enhances credibility for licensing or commercial deals.
      • Provides public record via Copyright Office publication.
      • Strengthens position in international copyright enforcement.
    `,
  },
  {
    id: 3,
    title: 'Eligible Works',
    description: 'Copyright applies to original works like books, music, films, software, paintings, and photographs, fixed in a tangible medium of expression.',
    category: 'Eligibility',
    detailedContent: `
      • Includes literary works (books, articles, software code).
      • Covers artistic works (paintings, photographs, designs).
      • Protects musical works (songs, compositions) and dramatic works (plays, choreography).
      • Applies to films, sound recordings, and broadcasts.
      • Requires originality and fixation in a tangible form.
      • Excludes ideas, facts, or non-original content.
    `,
  },
  {
    id: 4,
    title: 'Registration Process',
    description: 'File Form XIV with the Copyright Office, submit required documents, and pay fees to secure your copyright, typically processed within 6-12 months.',
    category: 'Procedure',
    detailedContent: `
      • Complete Form XIV with details of the work and creator.
      • Submit copies of the work, identity proof, and NOC if applicable.
      • Pay prescribed fees based on work type.
      • Copyright Office examines application and may raise objections.
      • Respond to objections within stipulated time.
      • Receive registration certificate upon approval.
    `,
  },
  {
    id: 5,
    title: 'Legal Protection',
    description: 'Registered copyrights grant exclusive rights to reproduce, distribute, perform, or adapt the work, with protection lasting the creator’s lifetime plus 60 years.',
    category: 'Protection',
    detailedContent: `
      • Grants exclusive rights to reproduce, distribute, and adapt the work.
      • Protection lasts creator’s lifetime plus 60 years in India.
      • Enables legal action against unauthorized use or copying.
      • Supports licensing and monetization of creative works.
      • Facilitates enforcement through courts and customs.
      • Recognized internationally via treaties like Berne Convention.
    `,
  },
];

export default function CopyrightRegistrationPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState<CopyrightInfo | null>(null);

  const handleExploreClick = (info: CopyrightInfo) => {
    setSelectedInfo(info);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedInfo(null);
  };

  return (
    <div className="min-h-screen bg-[#EEEEEE] relative rounded-b-[50px] sm:rounded-b-[100px] md:rounded-b-[170px] font-montserrat overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12">
      {/* Grid Pattern */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.025) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px sm:30px 30px',
        }}
      />

      {/* Popup */}
      {showPopup && selectedInfo && (
        <motion.div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-[1000] px-4 sm:px-6 md:px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={closePopup}
        >
          <motion.div
            className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 md:p-10 shadow-xl border border-[#00ADB5]/20 relative"
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
              <X size={24} />
            </button>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#222831] mb-6 border-b-2 border-[#00ADB5]/30 pb-2">{selectedInfo.title}</h2>
            <div className="text-[#393E46]/85 text-sm sm:text-base leading-relaxed">
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
        className="relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[80vh] flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Corner Angles */}
        <div className="absolute top-4 left-4 w-8 h-8 sm:top-6 sm:left-6 sm:w-10 sm:h-10 md:top-8 md:left-8 md:w-12 md:h-12 border-t-2 border-l-2 border-[#00ADB5] hidden lg:block" />
        <div className="absolute top-4 right-4 w-8 h-8 sm:top-6 sm:right-6 sm:w-10 sm:h-10 md:top-8 md:right-8 md:w-12 md:h-12 border-t-2 border-r-2 border-[#00ADB5] hidden lg:block" />
        <div className="absolute bottom-4 left-4 w-8 h-8 sm:bottom-6 sm:left-6 sm:w-10 sm:h-10 md:bottom-8 md:left-8 md:w-12 md:h-12 border-b-2 border-l-2 border-[#00ADB5] hidden lg:block" />
        <div className="absolute bottom-4 right-4 w-8 h-8 sm:bottom-6 sm:right-6 sm:w-10 sm:h-10 md:bottom-8 md:right-8 md:w-12 md:h-12 border-b-2 border-r-2 border-[#00ADB5] hidden lg:block" />

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto text-center px-4"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#222831] relative inline-block tracking-tight">
            Copyright Registration
            <span className="absolute top-1/2 -left-8 sm:-left-12 md:-left-16 -translate-y-1/2 text-[#00ADB5] text-3xl sm:text-4xl md:text-5xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-8 sm:-right-12 md:-right-16 -translate-y-1/2 text-[#00ADB5] text-3xl sm:text-4xl md:text-5xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Safeguard Your Creative Works with Expert Protection
          </p>
        </motion.div>
      </motion.section>

      {/* Introduction Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="relative max-w-3xl mx-auto px-4 sm:px-6 md:px-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Corner Angles */}
            <div className="absolute -top-4 -left-4 w-6 h-6 sm:-top-6 sm:-left-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-[#00ADB5]" />
            <div className="absolute -top-4 -right-4 w-6 h-6 sm:-top-6 sm:-right-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-[#00ADB5]" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 sm:-bottom-6 sm:-left-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-[#00ADB5]" />
            <div className="absolute -bottom-4 -right-4 w-6 h-6 sm:-bottom-6 sm:-right-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-[#00ADB5]" />

            <div className="text-center space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#222831]">
                <span className="text-[#00ADB5]">Protect Your</span> Original Creations
              </h2>
              <p className="text-[#393E46] text-base sm:text-lg leading-relaxed">
                Governed by the Copyright Act, 1957 in India, copyright registration secures exclusive rights for creators of original works, such as literature, music, films, and software. At Leonard Corporate Solutions, we streamline the registration process, strengthening your legal protection and enabling you to enforce your rights against infringement efficiently.
              </p>
              <p className="text-[#393E46] text-base sm:text-lg font-medium">
                📩 Contact us at{' '}
                <a href="mailto:info@leonardsolutions.in" className="text-[#00ADB5] hover:underline">
                  info@leonardsolutions.in
                </a>{' '}
                to start protecting your creative assets today.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Copyright Info Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
            <span className="text-[#00ADB5]">Copyright Registration</span> Essentials
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {copyrightInfo.map((info, index) => (
              <motion.div
                key={info.id}
                className="group bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#00ADB5]/10 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <span className="absolute top-4 right-4 text-[#00ADB5] text-lg sm:text-xl opacity-30 group-hover:opacity-100 transition-opacity duration-300">✦</span>
                <div className="flex flex-col gap-4 relative z-10">
                  <div className="px-3 py-1 text-xs font-medium bg-[#00ADB5]/10 text-[#00ADB5] rounded-full w-fit">
                    {info.category}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#222831] group-hover:text-[#00ADB5] transition-colors duration-300">
                    {info.title}
                  </h3>
                  <p className="text-[#393E46]/80 text-sm sm:text-base leading-relaxed line-clamp-3">{info.description}</p>
                  <button
                    onClick={() => handleExploreClick(info)}
                    className="inline-flex items-center text-[#00ADB5] font-medium hover:text-[#222831] transition-colors duration-300 mt-2 text-sm sm:text-base"
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

      {/* Eligible Works Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
            <span className="text-[#222831]">Works Eligible</span> <span className="text-[#00ADB5]">for Copyright</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {[
              { title: 'Literary Works', description: 'Books, articles, poems, and software code qualify for copyright protection as original literary creations.' },
              { title: 'Artistic Works', description: 'Paintings, drawings, photographs, and graphic designs are protected as unique artistic expressions.' },
              { title: 'Musical & Dramatic Works', description: 'Songs, compositions, plays, and choreography are eligible for copyright as creative performances.' },
            ].map((work, index) => (
              <motion.div
                key={work.title}
                className="bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#00ADB5]/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-lg sm:text-xl font-bold text-[#222831] mb-3">{work.title}</h3>
                <p className="text-[#393E46]/80 text-sm sm:text-base leading-relaxed">{work.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Process Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
            <span className="text-[#222831]">Copyright</span> <span className="text-[#00ADB5]">Registration Process</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
            {[
              { title: 'Prepare Application', description: 'Complete Form XIV, including a Statement of Particulars and Statement of Further Particulars, detailing the work and its creator.' },
              { title: 'Submit Documents', description: 'Provide copies of the work, identity proof, NOC from co-authors or publishers if applicable, and pay the prescribed fees.' },
              { title: 'Examination & Approval', description: 'The Copyright Office examines the application, may raise objections, and approves registration upon satisfaction, issuing a certificate.' },
              { title: 'Publication', description: 'The registered work is published in the Copyright Office’s journal, providing public notice of your copyright ownership.' },
            ].map((step, index) => (
              <motion.div
                key={step.title}
                className="bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#00ADB5]/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-lg sm:text-xl font-bold text-[#222831] mb-3">{step.title}</h3>
                <p className="text-[#393E46]/80 text-sm sm:text-base leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
            <span className="text-[#222831]">Why Register</span> <span className="text-[#00ADB5]">Your Copyright?</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {[
              { title: 'Proof of Ownership', description: 'Registration serves as official evidence of your ownership, simplifying disputes over authorship.' },
              { title: 'Legal Enforcement', description: 'A registered copyright enables you to file lawsuits and seek remedies like injunctions or damages for infringement.' },
              { title: 'Market Advantage', description: 'A protected work enhances your brand’s credibility, attracting partners and customers who value originality.' },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#00ADB5]/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-lg sm:text-xl font-bold text-[#222831] mb-3">{benefit.title}</h3>
                <p className="text-[#393E46]/80 text-sm sm:text-base leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="relative max-w-3xl mx-auto px-4 sm:px-6 md:px-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Corner Angles */}
            <div className="absolute -top-4 -left-4 w-6 h-6 sm:-top-6 sm:-left-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-[#00ADB5]" />
            <div className="absolute -top-4 -right-4 w-6 h-6 sm:-top-6 sm:-right-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-[#00ADB5]" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 sm:-bottom-6 sm:-left-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-[#00ADB5]" />
            <div className="absolute -bottom-4 -right-4 w-6 h-6 sm:-bottom-6 sm:-right-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-[#00ADB5]" />

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              <span className="text-[#00ADB5]">Ready to Protect</span> Your Creations?
            </h2>
            <p className="text-[#393E46] text-sm sm:text-lg leading-relaxed mb-6">
              Secure your original works with Leonard Corporate Solutions’ expert copyright registration services. Start today to ensure your creative assets are legally protected and ready to thrive.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-[#00ADB5] text-white font-medium rounded-full hover:bg-[#222831] transition-colors duration-300 text-sm sm:text-base"
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
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8">
        <Link
          href="/"
          className="inline-flex items-center text-[#393E46] hover:text-[#00ADB5] transition-colors text-sm sm:text-base"
        >
          <span className="mr-2">←</span> Back to Home
        </Link>
      </div>
    </div>
  );
}