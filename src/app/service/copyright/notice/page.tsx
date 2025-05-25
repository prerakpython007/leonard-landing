'use client';

import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

// Define the interface for copyright notice info
interface CopyrightNoticeInfo {
  id: number;
  title: string;
  description: string;
  category: string;
  detailedContent: string;
}

const copyrightNoticeInfo: CopyrightNoticeInfo[] = [
  {
    id: 1,
    title: 'What is a Copyright Notice?',
    description: 'A copyright notice is a public statement placed on a work to indicate it is protected by copyright law, identifying the owner and year of first publication.',
    category: 'Notice Basics',
    detailedContent: `
      • A public statement indicating copyright protection under the Copyright Act, 1957.
      • Identifies the work’s owner and year of first publication.
      • Typically includes the © symbol, year, and owner’s name (e.g., © 2025 John Doe).
      • Not mandatory in India but enhances protection.
      • Deters unauthorized use by signaling ownership.
      • Applies to works like books, music, artwork, and digital content.
    `,
  },
  {
    id: 2,
    title: 'Purpose of a Notice',
    description: 'A copyright notice deters unauthorized use, informs the public of ownership, and strengthens legal claims in infringement cases, though it’s not mandatory.',
    category: 'Purpose',
    detailedContent: `
      • Deters potential infringers by clearly asserting copyright.
      • Informs the public of the work’s ownership and protected status.
      • Strengthens legal claims in infringement lawsuits.
      • Limits infringers’ defense of innocent infringement.
      • Facilitates licensing by identifying the rights holder.
      • Enhances credibility for creative and commercial works.
    `,
  },
  {
    id: 3,
    title: 'Components of a Notice',
    description: 'A typical notice includes the copyright symbol ©, the year of first publication, and the copyright owner’s name, e.g., © 2023 John Doe.',
    category: 'Structure',
    detailedContent: `
      • Copyright symbol: Use ©, “Copyright,” or “Copr.”.
      • Year of first publication: Marks the start of protection (e.g., 2023).
      • Owner’s name: Identifies the individual, company, or organization (e.g., John Doe).
      • Optional: “All rights reserved” for added clarity.
      • Format example: © 2023 John Doe. All rights reserved.
      • Must be clear and consistent across the work.
    `,
  },
  {
    id: 4,
    title: 'Placement Guidelines',
    description: 'Place the notice on a visible part of the work, such as the title page of a book, footer of a website, or credits of a film, ensuring easy identification.',
    category: 'Placement',
    detailedContent: `
      • Books: On the title page, verso page, or inside cover.
      • Websites: In the footer, homepage, or copyright section.
      • Artistic works: On labels, frames, or accompanying documentation.
      • Music/films: In album credits, film credits, or packaging.
      • Software: In splash screens, about pages, or source code.
      • Must be easily visible to ensure public awareness.
    `,
  },
  {
    id: 5,
    title: 'Legal Effect',
    description: 'While not required under Indian law, a notice reinforces ownership claims and may limit an infringer’s defense of innocent infringement.',
    category: 'Legal Aspects',
    detailedContent: `
      • Not mandatory under the Copyright Act, 1957 in India.
      • Reinforces ownership claims in legal disputes.
      • Limits infringers’ ability to claim innocent infringement.
      • Supports enforcement through courts and customs.
      • Enhances international protection under treaties like Berne Convention.
      • Encourages respect for intellectual property rights.
    `,
  },
];

export default function CopyrightNoticePage() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState<CopyrightNoticeInfo | null>(null);

  const handleExploreClick = (info: CopyrightNoticeInfo) => {
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
            Copyright Notice
            <span className="absolute top-1/2 -left-8 sm:-left-12 md:-left-16 -translate-y-1/2 text-[#00ADB5] text-3xl sm:text-4xl md:text-5xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-8 sm:-right-12 md:-right-16 -translate-y-1/2 text-[#00ADB5] text-3xl sm:text-4xl md:text-5xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Declare Your Creative Ownership with Confidence
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
                <span className="text-[#00ADB5]">Mark Your Work</span> with a Copyright Notice
              </h2>
              <p className="text-[#393E46] text-base sm:text-lg leading-relaxed">
                A copyright notice, while not mandatory under the Copyright Act, 1957 in India, is a powerful tool to assert ownership over your creative works, such as books, music, or digital content. At Leonard Corporate Solutions, we guide you in crafting and placing effective copyright notices to deter infringement and protect your intellectual property with clarity.
              </p>
              <p className="text-[#393E46] text-base sm:text-lg font-medium">
                📩 Contact us at{' '}
                <a href="mailto:info@leonardsolutions.in" className="text-[#00ADB5] hover:underline">
                  info@leonardsolutions.in
                </a>{' '}
                to start protecting your creative works today.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Copyright Notice Info Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
            <span className="text-[#00ADB5]">Copyright Notice</span> Essentials
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {copyrightNoticeInfo.map((info, index) => (
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

      {/* Components of a Notice Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
            <span className="text-[#222831]">Key Components</span> <span className="text-[#00ADB5]">of a Copyright Notice</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {[
              { title: 'Copyright Symbol', description: 'Use the © symbol, the word “Copyright,” or “Copr.” to clearly indicate copyright protection.' },
              { title: 'Year of Publication', description: 'Include the year the work was first published to mark the start of copyright protection.' },
              { title: 'Owner’s Name', description: 'State the name of the copyright owner, whether an individual, company, or organization.' },
            ].map((component, index) => (
              <motion.div
                key={component.title}
                className="bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#00ADB5]/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-lg sm:text-xl font-bold text-[#222831] mb-3">{component.title}</h3>
                <p className="text-[#393E46]/80 text-sm sm:text-base leading-relaxed">{component.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Guidelines Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
            <span className="text-[#222831]">Where to Place</span> <span className="text-[#00ADB5]">a Copyright Notice</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
            {[
              { title: 'Books & Literary Works', description: 'Place the notice on the title page, verso page, or inside cover for clear visibility.' },
              { title: 'Websites & Digital Content', description: 'Include the notice in the website footer, on the homepage, or within a dedicated copyright section.' },
              { title: 'Artistic & Musical Works', description: 'Embed the notice on artwork labels, album covers, or in the credits of audio-visual works.' },
              { title: 'Software & Apps', description: 'Display the notice in the software’s splash screen, about page, or within the source code.' },
            ].map((placement, index) => (
              <motion.div
                key={placement.title}
                className="bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#00ADB5]/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-lg sm:text-xl font-bold text-[#222831] mb-3">{placement.title}</h3>
                <p className="text-[#393E46]/80 text-sm sm:text-base leading-relaxed">{placement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
            <span className="text-[#222831]">Why Use</span> <span className="text-[#00ADB5]">a Copyright Notice?</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {[
              { title: 'Deter Infringement', description: 'A visible notice discourages unauthorized use by signaling that the work is protected.' },
              { title: 'Strengthen Legal Claims', description: 'A notice supports your case in court by proving you actively asserted your rights.' },
              { title: 'Public Awareness', description: 'Clearly communicates ownership, making it easier for others to seek permission for use.' },
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

      {/* Examples Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
            <span className="text-[#222831]">Examples of</span> <span className="text-[#00ADB5]">Copyright Notices</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
            {[
              { title: 'Book Notice', description: '© 2023 Chetan Bhagat. All rights reserved. Found on the verso page of a novel.' },
              { title: 'Website Notice', description: 'Copyright © 2025 Leonard Corporate Solutions. All rights reserved. Displayed in the website footer.' },
            ].map((example, index) => (
              <motion.div
                key={example.title}
                className="bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#00ADB5]/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-lg sm:text-xl font-bold text-[#222831] mb-3">{example.title}</h3>
                <p className="text-[#393E46]/80 text-sm sm:text-base leading-relaxed">{example.description}</p>
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
              <span className="text-[#00ADB5]">Ready to Add</span> a Copyright Notice?
            </h2>
            <p className="text-[#393E46] text-sm sm:text-lg leading-relaxed mb-6">
              Protect your creative works with a clear and effective copyright notice. Contact Leonard Corporate Solutions today for expert guidance on crafting and placing notices to safeguard your intellectual property.
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