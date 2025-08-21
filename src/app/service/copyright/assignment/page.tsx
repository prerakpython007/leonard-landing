'use client';

import { motion } from 'framer-motion';
import { Search, FileText, Shield, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

// Define the interface for copyright assignment info
interface CopyrightAssignmentInfo {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  detailedContent: string;
}

const copyrightAssignmentInfo: CopyrightAssignmentInfo[] = [
  {
    id: 1,
    title: 'What is Copyright Assignment?',
    description: 'Copyright assignment is the legal transfer of ownership of a copyrighted work from the original creator to another party, granting them exclusive rights.',
    category: 'Assignment Basics',
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200",
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
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200",
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
    image: "https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&q=80&w=1200",
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
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=1200",
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
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=1200",
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

const copyrightServices = [
  {
    icon: Search,
    title: 'Assignment Analysis',
    description: 'We assess the viability and structure of your copyright assignment.',
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200",
    category: "Analysis",
  },
  {
    icon: FileText,
    title: 'Agreement Drafting',
    description: 'We develop tailored assignment agreements for your specific needs.',
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200",
    category: "Drafting",
  },
  {
    icon: Shield,
    title: 'Legal Support',
    description: 'We provide legal guidance throughout the assignment process.',
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=1200",
    category: "Support",
  },
];

const benefits = [
  'Make informed decisions with expert assignment guidance',
  'Optimize rights transfer with tailored agreement strategies',
  'Maximize value through strategic copyright management',
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
    <div className="font-montserrat relative min-h-screen overflow-hidden bg-[#EEEEEE]">
      {/* Popup */}
      {showPopup && selectedInfo && (
        <motion.div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-[1000] p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={closePopup}
        >
          <motion.div
            className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-md relative"
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
              <X size={24} />
            </button>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#222831] mb-4 sm:mb-6">{selectedInfo.title}</h2>
            <ul className="text-[#393E46]/85 text-sm sm:text-base leading-relaxed space-y-2">
              {selectedInfo.detailedContent.split('\n').map((line, index) => {
                line = line.trim();
                if (!line) return null;
                return (
                  <li key={index} className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#00ADB5]">
                    {line.replace(/^•\s*/, '')}
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </motion.div>
      )}

      {/* HERO */}
      <section className="relative h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200"
            alt="Copyright Assignment hero"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 mx-auto max-w-6xl h-full flex flex-col justify-center items-center text-center px-4 sm:px-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight">
            Copyright Assignment
          </h1>
          <p className="mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg md:text-xl text-white/90 font-light px-4">
            Expert copyright assignment services to transfer ownership of your creative works with legal precision and strategic guidance.
          </p>
        </motion.div>
      </section>

      {/* Overview Section */}
      <section className="relative bg-white px-4 py-16 md:px-16 lg:px-24 md:py-32">
        <div className="relative mx-auto max-w-7xl">
          <motion.div
            className="mb-16 md:mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative flex flex-col lg:flex-row items-center">
              <div
                className="relative w-full lg:w-3/5 z-20 lg:mr-[-150px] lg:ml-[-100px] mb-8 lg:mb-0"
                style={{
                  filter: "drop-shadow(0 25px 80px rgba(0, 0, 0, 0.25))",
                }}
              >
                <div className="bg-white/95 p-6 md:p-8 lg:p-12" style={{ clipPath: "polygon(0 0, calc(100% - 40px) 0, 100% 100%, 0 100%)" }}>
                  <div className="space-y-4 md:space-y-6">
                    <motion.h1
                      className="text-[#000000] text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold relative z-10 px-2 md:px-4"
                      style={{
                        letterSpacing: "0.1em",
                        textShadow:
                          "-2px 0px 0px rgba(100, 100, 100, 0.8), -6px 2px 0px rgba(80, 80, 80, 0.6), -10px 4px 0px rgba(60, 60, 60, 0.4)",
                      }}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7 }}
                      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                    >
                      Copyright Assignment Overview
                    </motion.h1>

                    <p className="text-base md:text-lg leading-relaxed text-[#393E46]">
                      At Leonard Corporate Solutions, we specialize in copyright assignment to facilitate the legal transfer of creative works. Our skilled team provides expert advice on assignment agreements, rights management, and compliance.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed text-[#393E46]">
                      Our assignment services include viability analysis, agreement drafting, legal support, and strategic planning to ensure your copyright transfers are executed effectively and legally.
                    </p>
                    <p className="text-base md:text-lg font-medium text-[#393E46]">
                      📩 For tailored advice, reach out:{" "}
                      <a href="mailto:info@leonardsolutions.in" className="text-[#00ADB5] hover:underline">info@leonardsolutions.in</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative z-10 h-64 md:h-96 lg:h-[520px] w-full lg:w-4/5">
                <div className="absolute inset-0">
                  <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200" alt="Copyright Assignment visual" className="h-full w-full object-cover object-right" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Copyright Information Section */}
      <section className="relative px-4 bg-[#000000] py-12 md:py-16 lg:py-24 md:px-16 lg:px-24">
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-8 md:mb-12 lg:mb-16 text-center">
            <motion.h1
              className="text-[#eeeeee] text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold text-center my-6 md:my-8 lg:my-10 relative z-10 px-2 sm:px-4"
              style={{
                letterSpacing: "0.3em",
                textShadow:
                  "-2px 0px 0px rgba(100, 100, 100, 0.8), -6px 2px 0px rgba(80, 80, 80, 0.6), -10px 4px 0px rgba(60, 60, 60, 0.4)",
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              Copyright Assignment Information
            </motion.h1>
          </div>

          {/* Copyright Info Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 px-2 sm:px-4 md:px-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {copyrightAssignmentInfo.map((info, index) => (
              <motion.div
                key={info.id}
                className="relative h-64 sm:h-72 md:h-80 overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                onClick={() => handleExploreClick(info)}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img src={info.image} alt={info.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
                </div>

                {/* Service Name - Center */}
                <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight">{info.title}</h3>
                </div>

                {/* Category Badge - Top Right */}
                <div className="absolute top-3 md:top-4 right-3 md:right-4 opacity-80">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-white/90 text-gray-800">{info.category}</span>
                </div>

                {/* Explore Details - Bottom on Hover */}
                <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <div className="bg-[#00ADB5] text-white px-4 py-1 md:px-6 md:py-2 text-xs md:text-sm font-medium shadow-lg">Explore Details</div>
                </div>

                {/* Animated border on hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#00ADB5] transition-colors duration-300" />
              </motion.div>
            ))}
          </motion.div>

          {/* Services Section */}
          <div className="mt-16 md:mt-24 lg:mt-32">
            <motion.h2
              className="text-[#eeeeee] text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-center mb-8 md:mb-12 lg:mb-16"
              style={{
                letterSpacing: "0.2em",
                textShadow: "-1px 0px 0px rgba(100, 100, 100, 0.6), -3px 1px 0px rgba(80, 80, 80, 0.4)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              Our Assignment Services
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 px-2 sm:px-4 md:px-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {copyrightServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="relative h-64 sm:h-72 md:h-80 overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
                  </div>

                  {/* Service Name - Center */}
                  <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight">{service.title}</h3>
                  </div>

                  {/* Category Badge - Top Right */}
                  <div className="absolute top-3 md:top-4 right-3 md:right-4 opacity-80">
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-white/90 text-gray-800">{service.category}</span>
                  </div>

                  {/* Learn More - Bottom on Hover */}
                  <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <div className="bg-[#00ADB5] text-white px-4 py-1 md:px-6 md:py-2 rounded-full text-xs md:text-sm font-medium shadow-lg">Learn More</div>
                  </div>

                  {/* Animated border on hover */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#00ADB5] transition-colors duration-300" />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Benefits Section */}
          <motion.div 
            className="relative mx-auto mt-16 md:mt-24 lg:mt-32 max-w-3xl px-4 md:px-8" 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }}
          >
            <div className="relative rounded-xl md:rounded-2xl py-8 md:py-12 backdrop-blur-sm">
              <h2 className="text-[#eeeeee] text-2xl md:text-3xl lg:text-4xl font-extrabold text-center mb-6 md:mb-8"
                  style={{
                    letterSpacing: "0.1em",
                    textShadow: "-1px 0px 0px rgba(100, 100, 100, 0.6)",
                  }}>
                Why Copyright Assignment?
              </h2>
              <ul className="space-y-4 list-none text-[#eeeeee]">
                {benefits.map((benefit, index) => (
                  <li key={index} className="relative pl-6 text-sm sm:text-base md:text-lg before:content-['•'] before:absolute before:left-0 before:text-[#00ADB5] before:text-lg">
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Closing Message */}
          <motion.div 
            className="relative mx-auto mt-16 md:mt-24 lg:mt-32 max-w-3xl px-4 md:px-8" 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }}
          >
            <div className="relative rounded-xl md:rounded-2xl py-8 md:py-12 backdrop-blur-sm text-center">
              <p className="text-center text-base md:text-lg leading-relaxed text-[#eeeeee] mb-6">
                At Leonard Corporate Solutions, our copyright assignment services ensure your creative works are transferred with legal precision and strategic guidance.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-[#00ADB5] text-white font-medium rounded-full hover:bg-white hover:text-[#00ADB5] transition-all duration-300 text-sm sm:text-base shadow-lg"
              >
                Start Your Copyright Assignment
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back to Home Link */}
      <div className="bg-[#EEEEEE] px-4 sm:px-6 md:px-16 lg:px-24 py-8">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-[#393E46] hover:text-[#00ADB5] transition-colors text-sm sm:text-base font-medium"
          >
            <span className="mr-2">←</span> Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}