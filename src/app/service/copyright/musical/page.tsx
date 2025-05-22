
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { X } from 'lucide-react';

// Define the interface for musical copyright info
interface MusicalCopyrightInfo {
  id: number;
  title: string;
  description: string;
  category: string;
  detailedContent: string;
}

const musicalCopyrightInfo: MusicalCopyrightInfo[] = [
  {
    id: 1,
    title: 'What is Musical Copyright?',
    description: 'Musical copyright protects original musical compositions, including songs, melodies, and lyrics, granting creators exclusive rights over their use and distribution.',
    category: 'Copyright Basics',
    detailedContent: `
      • Protects original musical works under the Copyright Act, 1957 in India.
      • Covers songs, melodies, lyrics, and instrumental compositions.
      • Grants exclusive rights to perform, reproduce, and distribute the work.
      • Applies to works fixed in a tangible medium (e.g., sheet music, recordings).
      • Automatically applies upon creation but registration strengthens legal standing.
      • Supports creators in controlling and monetizing their music.
    `,
  },
  {
    id: 2,
    title: 'Benefits of Registration',
    description: 'Registering your musical work provides legal proof of ownership, supports infringement lawsuits, and enables claims for statutory damages and legal fees.',
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
    title: 'Eligible Musical Works',
    description: 'Original songs, instrumental compositions, lyrics, and sound recordings qualify for copyright protection if fixed in a tangible medium.',
    category: 'Eligibility',
    detailedContent: `
      • Songs: Includes melodies and lyrics as musical compositions.
      • Instrumental works: Covers orchestral pieces, scores, or beats.
      • Sound recordings: Protects studio or live recordings separately.
      • Requires originality and fixation (e.g., sheet music, audio files).
      • Excludes non-original content, ideas, or improvised performances not recorded.
      • Applies to both published and unpublished works.
    `,
  },
  {
    id: 4,
    title: 'Registration Process',
    description: 'File Form XIV with the Copyright Office, submit copies of the work and fees, and await approval, typically processed within 6-12 months.',
    category: 'Procedure',
    detailedContent: `
      • Complete Form XIV with details of the work, composer, and lyricist.
      • Submit two copies of the work (sheet music or recording) and identity proof.
      • Include NOC from co-creators or producers if applicable.
      • Pay prescribed fees based on work type.
      • Copyright Office examines application, may raise objections within 30 days.
      • Receive registration certificate upon approval after addressing objections.
    `,
  },
  {
    id: 5,
    title: 'Protection Duration',
    description: 'Musical copyrights last for the creator’s lifetime plus 60 years, ensuring long-term control and benefits for composers and their heirs.',
    category: 'Protection',
    detailedContent: `
      • Lasts for the creator’s lifetime plus 60 years in India.
      • Ensures long-term control over reproduction, performance, and distribution.
      • Benefits heirs or assignees after the creator’s death.
      • Supports ongoing royalties from licensing or streaming.
      • Recognized internationally via treaties like Berne Convention.
      • Provides enduring financial and creative benefits.
    `,
  },
];

export default function CopyrightMusicalPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState<MusicalCopyrightInfo | null>(null);

  const handleExploreClick = (info: MusicalCopyrightInfo) => {
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
            Musical Copyright
            <span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Secure Your Musical Creations with Expert Protection
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
                <span className="text-[#00ADB5]">Protect Your</span>{' '}
                <span className="text-[#393E46]">Musical Legacy</span>
              </h2>
              <p className="text-[#393E46] text-lg leading-relaxed">
                Governed by the Copyright Act, 1957 in India, musical copyright safeguards original compositions, including melodies, lyrics, and recordings. At Leonard Corporate Solutions, we simplify the registration process, ensuring your music is protected from unauthorized use and you retain exclusive rights to perform, reproduce, and distribute your work.
              </p>
              <p className="text-[#393E46] text-lg font-medium">
                📩 Contact us at{' '}
                <a href="mailto:info@leonardsolutions.in" className="text-[#00ADB5] hover:underline">
                  info@leonardsolutions.in
                </a>{' '}
                to start protecting your musical creations today.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Musical Copyright Info Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Musical Copyright</span>{' '}
              <span className="text-[#00ADB5]">Essentials</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
            {musicalCopyrightInfo.map((info: MusicalCopyrightInfo, index: number) => (
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

      {/* Eligible Musical Works Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Types of Musical Works</span>{' '}
              <span className="text-[#00ADB5]">Protected</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
            {[
              { title: 'Songs & Lyrics', description: 'Original songs, including melodies and lyrics, are protected as musical compositions under copyright law.' },
              { title: 'Instrumental Compositions', description: 'Instrumental works, such as orchestral pieces or background scores, qualify for copyright protection.' },
              { title: 'Sound Recordings', description: 'Studio or live recordings of music are separately protected, distinct from the underlying composition.' },
            ].map((work, index) => (
              <motion.div
                key={work.title}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#00ADB5]/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold text-[#222831] mb-3">{work.title}</h3>
                <p className="text-[#393E46]/80 text-base leading-relaxed">{work.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Process Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Musical Copyright</span>{' '}
              <span className="text-[#00ADB5]">Registration Process</span>
            </h2>
          </div>
          <div className="space-y-8">
            {[
              { step: '1. Application Preparation', description: 'Complete Form XIV, detailing the musical work, composer, lyricist, and publication status in the Statement of Particulars.' },
              { step: '2. Document Submission', description: 'Submit two copies of the work (sheet music or recording), identity proof, NOC from co-creators or producers, and the prescribed fees.' },
              { step: '3. Examination & Objections', description: 'The Copyright Office reviews the application, may issue objections within 30 days, and requires a response to proceed.' },
              { step: '4. Approval & Certification', description: 'Upon clearance, the Copyright Office issues a registration certificate, and the work is published in the Copyright Journal.' },
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
              <span className="text-[#222831]">Why Register</span>{' '}
              <span className="text-[#00ADB5]">Your Musical Work?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
            {[
              { title: 'Legal Ownership', description: 'Registration provides a public record of your authorship, simplifying disputes over the music’s ownership.' },
              { title: 'Infringement Protection', description: 'A registered copyright allows you to sue for infringement and seek remedies like damages or injunctions.' },
              { title: 'Royalties & Licensing', description: 'Protect your music to earn royalties through licensing, streaming, or performances, ensuring financial returns.' },
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
              <span className="text-[#00ADB5]">Musical Copyright</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 px-4 md:px-16">
            {[
              { title: 'Film Soundtracks', description: 'A.R. Rahman’s compositions for films like “Slumdog Millionaire” are protected, preventing unauthorized use.' },
              { title: 'Independent Songs', description: 'Original tracks by independent artists on platforms like Spotify or SoundCloud qualify for copyright protection.' },
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
              <span className="text-[#00ADB5]">Ready to Protect</span>{' '}
              <span className="text-[#393E46]">Your Music?</span>
            </h2>
            <p className="text-[#393E46] text-lg leading-relaxed mb-6">
              Secure your songs, lyrics, or recordings with Leonard Corporate Solutions’ expert musical copyright services. Start today to ensure your musical creations remain exclusively yours.
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
