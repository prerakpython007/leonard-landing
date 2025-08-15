'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { X } from 'lucide-react';

// Define the interface for Berne Convention info
interface BerneConventionInfo {
  id: number;
  title: string;
  description: string;
  category: string;
  detailedContent: string;
}

const berneConventionInfo: BerneConventionInfo[] = [
  {
    id: 1,
    title: 'What is the Berne Convention?',
    description: 'The Berne Convention is an international treaty that establishes minimum standards for copyright protection across member countries, ensuring automatic protection for creative works.',
    category: 'Berne Basics',
    detailedContent: `
      • Administered by the World Intellectual Property Organization (WIPO).
      • Covers over 180 member countries.
      • Grants automatic copyright protection without registration.
      • Ensures protection for at least 50 years after the author's death.
      • Recognizes moral and economic rights of creators.
      • Facilitates cross-border copyright enforcement.
    `,
  },
  {
    id: 2,
    title: 'Benefits of the Berne Convention',
    description: 'The Berne Convention simplifies global copyright protection by providing automatic rights, harmonized standards, and reciprocal treatment in member countries.',
    category: 'Advantages',
    detailedContent: `
      • Automatic protection upon creation of a work.
      • No formal registration required in most member countries.
      • Reciprocal protection in all Berne member countries.
      • Harmonized minimum standards for copyright duration.
      • Supports enforcement against unauthorized use.
      • Protects both economic and moral rights of creators.
    `,
  },
  {
    id: 3,
    title: 'Copyright Filing Process',
    description: 'While the Berne Convention grants automatic protection, voluntary registration in some countries can enhance enforcement and legal clarity.',
    category: 'Process Guide',
    detailedContent: `
      • Create and fix the work in a tangible medium.
      • Automatic protection applies in Berne member countries.
      • Optionally register in countries like the US for legal benefits.
      • Submit application to national copyright office (if registering).
      • Provide copies of the work and pay applicable fees.
      • Receive registration certificate for enforcement purposes.
    `,
  },
  {
    id: 4,
    title: 'Managing Global Copyrights',
    description: 'Copyright holders must monitor usage, enforce rights, and manage licensing to maintain protection across Berne member countries.',
    category: 'Copyright Management',
    detailedContent: `
      • Monitor unauthorized use of copyrighted works globally.
      • Enforce rights through cease-and-desist letters or litigation.
      • License works for commercial use in different countries.
      • Maintain records of creation and ownership.
      • Renew registrations in countries requiring it (e.g., US).
      • Stay informed about local copyright laws for enforcement.
    `,
  },
  {
    id: 5,
    title: 'Challenges of Global Copyright',
    description: 'Global copyright protection faces challenges like varying national laws, enforcement difficulties, and digital piracy issues.',
    category: 'Considerations',
    detailedContent: `
      • Differences in copyright duration and exceptions across countries.
      • Enforcement challenges in jurisdictions with weak legal systems.
      • Digital piracy and unauthorized online distribution.
      • Costs of litigation in multiple countries.
      • Complexity of licensing across borders.
      • Need for local expertise in some jurisdictions.
    `,
  },
];

export default function GlobalCopyrightFilingPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState<BerneConventionInfo | null>(null);

  const handleExploreClick = (info: BerneConventionInfo) => {
    setSelectedInfo(info);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedInfo(null);
  };

  return (
    <div className="min-h-screen bg-[#0f3460] relative  font-montserrat overflow-hidden">
      {/* Hero Section - Keep existing but update background */}
      <motion.section
        className="relative h-[95vh] flex items-center justify-center px-4 md:px-16 lg:px-24 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[#0f3460]/80" />
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto text-center relative z-10"
        >
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold text-white relative inline-block tracking-tight drop-shadow-lg">
            Global Copyright
          </h1>
          <p className="mt-8 text-xl text-white/90 max-w-2xl mx-auto font-light drop-shadow">
            Protect Your Creative Works Worldwide
          </p>
        </motion.div>
      </motion.section>

      {/* Introduction Section */}
      <section className="relative bg-white px-4 py-28 md:px-16 lg:px-24">
        <div className="relative mx-auto max-w-7xl">
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative flex items-center flex-col lg:flex-row">
              <div
                className="relative w-full lg:w-3/5 z-20 mb-8 lg:mb-0 lg:mr-[-120px] ml-[-10px]"
                style={{ filter: "drop-shadow(0 25px 80px rgba(0, 0, 0, 0.12))" }}
              >
                <div
                  className="bg-white/98 p-8 md:p-10"
                  style={{ clipPath: "polygon(0 0, calc(100% - 40px) 0, 100% 100%, 0 100%)" }}
                >
                  <div className="text-center mb-8">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                      <span className="text-[#00ADB5]">Safeguard Your</span>{' '}
                      <span className="text-[#393E46]">Creative Works</span>
                    </h2>
                    <p className="text-base sm:text-lg text-[#393E46] leading-relaxed">
                      The Berne Convention ensures automatic copyright protection for creative works across over 180 member countries, simplifying global intellectual property management. At BrandSecure, we assist creators and businesses in understanding and leveraging the Berne Convention, with optional registration services to enhance enforcement in key jurisdictions.
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-[#393E46] text-lg font-medium mb-4">
                      📩 Contact us at{' '}
                      <a href="mailto:info@brandsecure.in" className="text-[#00ADB5] hover:underline">
                        info@brandsecure.in
                      </a>{' '}
                      to secure your copyright today.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative z-10 h-[420px] w-full lg:w-2/5">
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80&w=1400"
                    alt="Copyright visual"
                    className="h-full w-full object-cover object-right"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Berne Convention Info Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">
              <span className="text-white">Berne Convention</span>{' '}
              <span className="text-[#00ADB5]">Essentials</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 md:gap-12 px-2 sm:px-4 md:px-16">
            {berneConventionInfo.map((info: BerneConventionInfo, index: number) => {
              const images = [
                "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1475577090900-4b6e6f7f7f7f?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1506748686214-e9df14d4d4d4?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1511746761627-7a6e6f7f7f7f?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1521747116042-5a810fda9664?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1532635166440-6f7f7f7f7f7f?auto=format&fit=crop&w=600&q=80",
              ];
              const bgImg = images[index % images.length];
              return (
                <motion.div
                  key={info.id}
                  className="group bg-cover bg-center p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-[#222]/40 hover:border-[#00ADB5] relative overflow-hidden"
                  style={{
                    borderRadius: 0,
                    backgroundImage: `linear-gradient(120deg, rgba(0,0,0,0.85) 80%, rgba(0,0,0,0.7)), url(${bgImg})`,
                    backgroundBlendMode: 'multiply',
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="flex flex-col gap-5 relative z-10">
                    <div className="px-3 py-1 text-xs font-medium bg-white/10 text-white w-fit uppercase tracking-wider" style={{ borderRadius: 0 }}>
                      {info.category}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {info.title}
                    </h3>
                    <p className="text-[#e0e0e0] text-base leading-relaxed">
                      {info.description}
                    </p>
                    <button
                      onClick={() => handleExploreClick(info)}
                      className="inline-flex items-center text-[#00ADB5] font-medium hover:text-white transition-colors duration-300 mt-4 cursor-pointer group"
                    >
                      Explore
                      <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300 pointer-events-none" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Member Countries Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">
              <span className="text-white">Key Berne Convention</span>{' '}
              <span className="text-[#00ADB5]">Member Countries</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
            {[
              { 
                country: 'United States', 
                description: 'Offers voluntary copyright registration through the US Copyright Office for enhanced legal benefits.',
                bgImage: 'https://images.unsplash.com/photo-1569097143433-1ef3866ab2e9?auto=format&fit=crop&w=600&q=80'
              },
              { 
                country: 'European Union', 
                description: 'Provides automatic protection across EU member states with harmonized copyright laws.',
                bgImage: 'https://images.unsplash.com/photo-1519503609398-dd5f5b3b3c9f?auto=format&fit=crop&w=600&q=80'
              },
              { 
                country: 'India', 
                description: 'Grants automatic protection but allows voluntary registration for evidentiary purposes.',
                bgImage: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=600&q=80'
              },
              { 
                country: 'Japan', 
                description: 'Ensures automatic copyright protection with strong enforcement mechanisms.',
                bgImage: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=600&q=80'
              },
              { 
                country: 'Australia', 
                description: 'Provides automatic protection under the Berne Convention with no formal registration required.',
                bgImage: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=600&q=80'
              },
              { 
                country: 'Brazil', 
                description: 'Offers automatic copyright protection with optional registration for legal clarity.',
                bgImage: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=600&q=80'
              },
            ].map((item, index) => (
              <motion.div
                key={item.country}
                className="bg-cover bg-center p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#00ADB5]/40 hover:border-[#00ADB5] relative overflow-hidden group"
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.85) 60%, rgba(0,0,0,0.75)), url(${item.bgImage})`,
                  backgroundBlendMode: 'multiply',
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-3">{item.country}</h3>
                  <p className="text-[#e0e0e0] text-base leading-relaxed">{item.description}</p>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filing Process Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">
              <span className="text-white">How to Secure</span>{' '}
              <span className="text-[#00ADB5]">Copyright Protection</span>
            </h2>
          </div>
          <div className="space-y-8">
            {[
              { 
                step: '1. Create and Fix the Work', 
                description: 'Produce an original work and fix it in a tangible medium (e.g., written, recorded).',
                bgImage: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80'
              },
              { 
                step: '2. Automatic Protection', 
                description: 'Gain automatic copyright protection in Berne member countries upon creation.',
                bgImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
              },
              { 
                step: '3. Consider Voluntary Registration', 
                description: 'Optionally register in countries like the US or India for legal advantages.',
                bgImage: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=800&q=80'
              },
              { 
                step: '4. Submit Registration Application', 
                description: 'File an application with the national copyright office, including work copies and fees.',
                bgImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80'
              },
              { 
                step: '5. Enforce Your Rights', 
                description: 'Monitor and enforce your copyright through legal action or licensing agreements.',
                bgImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80'
              },
            ].map((step, index) => (
              <motion.div
                key={step.step}
                className="bg-cover bg-center p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#00ADB5]/40 hover:border-[#00ADB5] relative overflow-hidden group"
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.85) 70%, rgba(0,0,0,0.75)), url(${step.bgImage})`,
                  backgroundBlendMode: 'multiply',
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-3">{step.step}</h3>
                  <p className="text-[#e0e0e0] text-base leading-relaxed">{step.description}</p>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">
              <span className="text-white">Eligibility and</span>{' '}
              <span className="text-[#00ADB5]">Requirements</span>
            </h2>
          </div>
          <motion.div
            className="bg-cover bg-center p-8 shadow-md border border-[#00ADB5]/40 hover:border-[#00ADB5] relative overflow-hidden group"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.87) 80%, rgba(0,0,0,0.82)), url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80)`,
              backgroundBlendMode: 'multiply',
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-3">Who Can Claim Copyright?</h3>
              <ul className="text-[#e0e0e0] list-disc list-inside mb-6">
                <li>Creators of original literary, artistic, or musical works</li>
                <li>Businesses or organizations owning copyrighted works</li>
                <li>Assignees or licensees of copyrighted works</li>
                <li>Individuals or entities in Berne member countries</li>
                <li>Collaborators or joint authors of creative works</li>
              </ul>
              <h3 className="text-xl font-bold text-white mb-3">Requirements for Protection</h3>
              <p className="text-[#e0e0e0] mb-4">Requirements vary by country but generally include:</p>
              <ul className="text-[#e0e0e0] list-disc list-inside">
                <li>Original work fixed in a tangible medium</li>
                <li>Copy of the work for registration (if applicable)</li>
                <li>Creator's details (name, nationality, address)</li>
                <li>Application form for voluntary registration</li>
              </ul>
            </div>

          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-black relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Left Diagonal Image */}
          <div 
            className="absolute left-0 top-0 w-[45%] h-full"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0 100%)',
              opacity: 0.1
            }}
          />
          
          {/* Right Diagonal Image */}
          <div 
            className="absolute right-0 top-0 w-[45%] h-full"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%)',
              opacity: 0.1
            }}
          />

          <motion.div
            className="relative max-w-3xl mx-auto px-8 text-center z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Protect <br />
              <span className="text-[#00ADB5]">Your Creative Works?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#e0e0e0] leading-relaxed mb-8">
              Secure your copyright globally with BrandSecure's expert guidance under the Berne Convention. Start today to safeguard your creative assets and ensure worldwide protection.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center px-8 py-4 bg-[#00ADB5] text-white font-medium hover:bg-[#222831] transition-colors duration-300 group"
              style={{ borderRadius: 0 }}
            >
              Get Started
              <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Popup Modal */}
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

      {/* Back to Home Link */}
      
    </div>
  );
}