'use client';

import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

// Define the interface for artistic copyright info
interface ArtisticCopyrightInfo {
  id: number;
  title: string;
  description: string;
  category: string;
  detailedContent: string;
}

const artisticCopyrightInfo: ArtisticCopyrightInfo[] = [
  {
    id: 1,
    title: 'What is Artistic Copyright?',
    description: 'Artistic copyright protects original visual works, such as paintings, illustrations, photographs, and sculptures, granting creators exclusive rights over their use.',
    category: 'Copyright Basics',
    detailedContent: `
      • Governed by the Copyright Act, 1957 in India.
      • Protects original visual works like paintings, photos, and sculptures.
      • Grants exclusive rights to reproduce, distribute, and adapt the work.
      • Applies to works fixed in a tangible medium (e.g., canvas, digital file).
      • Automatically applies upon creation, but registration enhances legal protection.
      • Ensures artists control the use and monetization of their creations.
    `,
  },
  {
    id: 2,
    title: 'Benefits of Registration',
    description: 'Registering your artistic work establishes legal ownership, supports infringement lawsuits, and enables claims for damages and legal fees.',
    category: 'Advantages',
    detailedContent: `
      • Establishes legal proof of ownership in disputes.
      • Enables lawsuits for infringement with remedies like damages or injunctions.
      • Supports claims for statutory damages and legal fees.
      • Enhances credibility for exhibitions, sales, or licensing.
      • Creates a public record via Copyright Office publication.
      • Strengthens protection under international treaties like Berne Convention.
    `,
  },
  {
    id: 3,
    title: 'Eligible Artistic Works',
    description: 'Paintings, drawings, digital art, photographs, and graphic designs qualify for copyright if they are original and fixed in a tangible medium.',
    category: 'Eligibility',
    detailedContent: `
      • Paintings: Includes traditional and digital paintings.
      • Drawings: Covers sketches, illustrations, and technical drawings.
      • Photographs: Encompasses professional and artistic images.
      • Digital art: Includes NFTs, UI designs, and graphic designs.
      • Sculptures: Protects 3D artistic works.
      • Requires originality and fixation in a tangible medium.
    `,
  },
  {
    id: 4,
    title: 'Registration Process',
    description: 'File Form XIV with the Copyright Office, submit copies of the work and fees, and await approval, typically processed within 6-12 months.',
    category: 'Procedure',
    detailedContent: `
      • Complete Form XIV with details of the work, creator, and publication status.
      • Submit two copies of the artwork (physical or digital) and identity proof.
      • Include NOC from collaborators or co-creators if applicable.
      • Pay prescribed fees based on the work type.
      • Copyright Office reviews application, may raise objections within 30 days.
      • Receive registration certificate upon approval.
    `,
  },
  {
    id: 5,
    title: 'Protection Duration',
    description: 'Artistic copyrights last for the creator’s lifetime plus 60 years, ensuring long-term control and benefits for artists and their heirs.',
    category: 'Protection',
    detailedContent: `
      • Lasts for the creator’s lifetime plus 60 years in India.
      • Ensures long-term control over reproduction, distribution, and adaptation.
      • Benefits heirs or assignees after the creator’s death.
      • Supports ongoing royalties from licensing or sales.
      • Recognized internationally via treaties like Berne Convention.
      • Provides enduring financial and creative benefits.
    `,
  },
];

export default function CopyrightArtisticPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState<ArtisticCopyrightInfo | null>(null);

  const handleExploreClick = (info: ArtisticCopyrightInfo) => {
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
            Artistic Copyright
            <span className="absolute top-1/2 -left-8 sm:-left-12 md:-left-16 -translate-y-1/2 text-[#00ADB5] text-3xl sm:text-4xl md:text-5xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-8 sm:-right-12 md:-right-16 -translate-y-1/2 text-[#00ADB5] text-3xl sm:text-4xl md:text-5xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Safeguard Your Visual Creations with Expert Protection
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
                <span className="text-[#00ADB5]">Protect Your</span> Artistic Vision
              </h2>
              <p className="text-[#393E46] text-base sm:text-lg leading-relaxed">
                Under the Copyright Act, 1957 in India, artistic copyright secures exclusive rights for creators of original visual works, such as paintings, photographs, and digital art. At Leonard Corporate Solutions, we streamline the registration process to protect your artwork, ensuring your creative legacy is safeguarded from unauthorized use.
              </p>
              <p className="text-[#393E46] text-base sm:text-lg font-medium">
                📩 Contact us at{' '}
                <a href="mailto:info@leonardsolutions.in" className="text-[#00ADB5] hover:underline">
                  info@leonardsolutions.in
                </a>{' '}
                to start protecting your artistic works today.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Artistic Copyright Info Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
            <span className="text-[#00ADB5]">Artistic Copyright</span> Essentials
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {artisticCopyrightInfo.map((info, index) => (
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

      {/* Eligible Artistic Works Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
            <span className="text-[#222831]">Types of Artistic Works</span> <span className="text-[#00ADB5]">Protected</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {[
              { title: 'Paintings & Drawings', description: 'Original paintings, sketches, and illustrations, whether on canvas or digital, are protected under copyright law.' },
              { title: 'Photographs', description: 'Photographs, including professional shoots and digital images, qualify for copyright as unique artistic expressions.' },
              { title: 'Sculptures & Designs', description: 'Sculptures, graphic designs, and digital art like logos or UI designs are safeguarded as original creations.' },
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
            <span className="text-[#222831]">Artistic Copyright</span> <span className="text-[#00ADB5]">Registration Process</span>
          </h2>
          <div className="space-y-6 sm:space-y-8">
            {[
              { step: '1. Application Preparation', description: 'Complete Form XIV, providing details of the artistic work, creator, and publication status in the Statement of Particulars.' },
              { step: '2. Document Submission', description: 'Submit two copies of the artwork, creator’s identity proof, NOC from collaborators if applicable, and the prescribed fees.' },
              { step: '3. Examination & Objections', description: 'The Copyright Office examines the application, may raise objections within 30 days, and requires a response to proceed.' },
              { step: '4. Approval & Certification', description: 'Upon clearance, the Copyright Office issues a registration certificate, and the work is published in the Copyright Journal.' },
            ].map((step, index) => (
              <motion.div
                key={step.step}
                className="bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#00ADB5]/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-lg sm:text-xl font-bold text-[#222831] mb-3">{step.step}</h3>
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
            <span className="text-[#222831]">Why Register</span> <span className="text-[#00ADB5]">Your Artistic Work?</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {[
              { title: 'Legal Ownership', description: 'Registration provides a public record of your authorship, simplifying disputes over the artwork’s ownership.' },
              { title: 'Infringement Protection', description: 'A registered copyright allows you to sue for infringement and seek remedies like damages or injunctions.' },
              { title: 'Commercial Value', description: 'Protect your artwork to license, sell, or exhibit it, ensuring financial returns from your creative efforts.' },
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
            <span className="text-[#222831]">Examples of</span> <span className="text-[#00ADB5]">Artistic Copyright</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
            {[
              { title: 'Paintings', description: 'Works like M.F. Husain’s iconic paintings are protected, preventing unauthorized reproductions or prints.' },
              { title: 'Digital Art', description: 'Digital illustrations, such as NFT artwork or UI designs, qualify for copyright protection as original creations.' },
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
              <span className="text-[#00ADB5]">Ready to Protect</span> Your Artistic Work?
            </h2>
            <p className="text-[#393E46] text-sm sm:text-lg leading-relaxed mb-6">
              Secure your paintings, photographs, or digital art with Leonard Corporate Solutions’ expert artistic copyright services. Start today to ensure your visual creations remain exclusively yours.
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