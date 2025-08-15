'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { X } from 'lucide-react';

// Define the interface for Hague System info
interface HagueSystemInfo {
  id: number;
  title: string;
  description: string;
  category: string;
  detailedContent: string;
}

const hagueSystemInfo: HagueSystemInfo[] = [
  {
    id: 1,
    title: 'What is the Hague System?',
    description: 'The Hague System is an international treaty that simplifies the registration of industrial designs across multiple countries through a single application, managed by WIPO.',
    category: 'Hague Basics',
    detailedContent: `
      • Administered by the World Intellectual Property Organization (WIPO).
      • Covers over 90 member countries and regions.
      • Allows up to 100 designs in a single application.
      • Provides protection for at least 15 years (varies by country).
      • Simplifies management of renewals and modifications.
      • Reduces costs compared to individual national filings.
    `,
  },
  {
    id: 2,
    title: 'Benefits of the Hague System',
    description: 'The Hague System offers a cost-effective and streamlined process for securing design protection in multiple jurisdictions with centralized management.',
    category: 'Advantages',
    detailedContent: `
      • Single application covers multiple countries.
      • Lower costs than individual national filings.
      • Centralized renewals and updates via WIPO.
      • Flexibility to designate additional countries later.
      • Fast-tracked registration process.
      • Supports global market expansion for designs.
    `,
  },
  {
    id: 3,
    title: 'Design Registration Process',
    description: 'Registering a design via the Hague System involves filing an international application, examination by WIPO, and review by designated countries.',
    category: 'Process Guide',
    detailedContent: `
      • Prepare design reproductions and application details.
      • File the application directly with WIPO or via a national office.
      • WIPO conducts a formalities examination.
      • Application published and forwarded to designated countries.
      • Each country reviews per its design laws (may refuse protection).
      • Protection granted in approving countries.
    `,
  },
  {
    id: 4,
    title: 'Managing International Designs',
    description: 'Designs registered via the Hague System require periodic renewals and monitoring to maintain protection in designated countries.',
    category: 'Design Management',
    detailedContent: `
      • Renew every 5 years through WIPO (up to maximum term).
      • Monitor design status in each designated country.
      • Update ownership or address changes via WIPO.
      • Address refusals or cancellations promptly.
      • Enforce design rights against infringements.
      • Comply with local laws for legal proceedings.
    `,
  },
  {
    id: 5,
    title: 'Challenges of the Hague System',
    description: 'The Hague System has challenges, such as varying national design laws, potential refusals, and dependency on a single application.',
    category: 'Considerations',
    detailedContent: `
      • Varying design protection standards across countries.
      • Potential refusals by individual countries.
      • Dependency on the quality of the initial application.
      • Limited to Hague System member countries.
      • May require local agents for disputes or refusals.
      • Costs can escalate with multiple designations.
    `,
  },
];

export default function InternationalDesignProtectionPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState<HagueSystemInfo | null>(null);

  const handleExploreClick = (info: HagueSystemInfo) => {
    setSelectedInfo(info);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedInfo(null);
  };

  return (
    <div className="min-h-screen bg-[#0f3460] relative font-montserrat overflow-hidden">
      {/* Hero Section */}
      <motion.section
        className="relative h-[95vh] flex items-center justify-center px-4 md:px-16 lg:px-24 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=1500&q=80")',
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
            Design Protection
          </h1>
          <p className="mt-8 text-xl text-white/90 max-w-2xl mx-auto font-light drop-shadow">
            Safeguard Your Industrial Designs Globally
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
                      <span className="text-[#00ADB5]">Protect Your Designs</span>{' '}
                      <span className="text-[#393E46]">Worldwide</span>
                    </h2>
                    <p className="text-base sm:text-lg text-[#393E46] leading-relaxed">
                      The Hague System simplifies the process of registering industrial designs internationally, allowing creators and businesses to secure protection in multiple countries through a single application. At BrandSecure, we provide expert guidance to navigate the Hague System, ensuring your designs are protected efficiently across global markets.
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-[#393E46] text-lg font-medium mb-4">
                      📩 Contact us at{' '}
                      <a href="mailto:info@brandsecure.in" className="text-[#00ADB5] hover:underline">
                        info@brandsecure.in
                      </a>{' '}
                      to secure your designs today.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative z-10 h-[420px] w-full lg:w-2/5">
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1400"
                    alt="Design protection visual"
                    className="h-full w-full object-cover object-right"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hague System Info Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">
              <span className="text-white">Hague System</span>{' '}
              <span className="text-[#00ADB5]">Essentials</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 md:gap-12 px-2 sm:px-4 md:px-16">
            {hagueSystemInfo.map((info: HagueSystemInfo, index: number) => {
              const images = [
                "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80",
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

      {/* Hague System Member Countries Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">
              <span className="text-white">Key Hague System</span>{' '}
              <span className="text-[#00ADB5]">Member Countries</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
            {[
              { 
                country: 'European Union', 
                description: 'Covers all EU member states through a single designation via the EUIPO.',
                bgImage: 'https://images.unsplash.com/photo-1519503609398-dd5f5b3b3c9f?auto=format&fit=crop&w=600&q=80'
              },
              { 
                country: 'United States', 
                description: 'Requires compliance with USPTO design patent standards and detailed reproductions.',
                bgImage: 'https://images.unsplash.com/photo-1569097143433-1ef3866ab2e9?auto=format&fit=crop&w=600&q=80'
              },
              { 
                country: 'Japan', 
                description: 'JPO examines designs for novelty and may require local representation for refusals.',
                bgImage: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=600&q=80'
              },
              { 
                country: 'South Korea', 
                description: 'KIPO ensures designs meet aesthetic and originality requirements.',
                bgImage: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=600&q=80'
              },
              { 
                country: 'United Kingdom', 
                description: 'UKIPO provides design protection post-Brexit with straightforward examination.',
                bgImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80'
              },
              { 
                country: 'Canada', 
                description: 'CIPO processes Hague applications with focus on design originality.',
                bgImage: 'https://images.unsplash.com/photo-1503614472-8c93d56cd72b?auto=format&fit=crop&w=600&q=80'
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

      {/* Design Registration Process Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">
              <span className="text-white">How to Register Designs</span>{' '}
              <span className="text-[#00ADB5]">via the Hague System</span>
            </h2>
          </div>
          <div className="space-y-8">
            {[
              { 
                step: '1. Prepare Design Application', 
                description: 'Create high-quality reproductions of the design and specify designated countries.',
                bgImage: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80'
              },
              { 
                step: '2. File with WIPO', 
                description: 'Submit the international application directly to WIPO or through a national office.',
                bgImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
              },
              { 
                step: '3. WIPO Formalities Check', 
                description: 'WIPO reviews the application for compliance with formal requirements.',
                bgImage: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=800&q=80'
              },
              { 
                step: '4. National Examination', 
                description: 'Designated countries examine the design based on their laws, with possible refusals.',
                bgImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80'
              },
              { 
                step: '5. Grant of Protection', 
                description: 'Approved countries grant design protection, allowing enforcement of rights.',
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

      {/* Eligibility and Requirements Section */}
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
              <h3 className="text-xl font-bold text-white mb-3">Who Can Apply?</h3>
              <ul className="text-[#e0e0e0] list-disc list-inside mb-6">
                <li>Creators of original industrial or ornamental designs</li>
                <li>Businesses with a registered office in a Hague member country</li>
                <li>Individuals with residency or nationality in a member country</li>
                <li>Assignees or successors of a design creator</li>
                <li>Entities with a commercial establishment in a member country</li>
              </ul>
              <h3 className="text-xl font-bold text-white mb-3">Required Documents</h3>
              <p className="text-[#e0e0e0] mb-4">Documents vary by application but generally include:</p>
              <ul className="text-[#e0e0e0] list-disc list-inside">
                <li>High-quality reproductions of the design (drawings/photos)</li>
                <li>Application form specifying designated countries</li>
                <li>Applicant's details (name, address, nationality)</li>
                <li>Description of the design (optional in some cases)</li>
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
              <span className="text-[#00ADB5]">Your Designs Globally?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#e0e0e0] leading-relaxed mb-8">
              Secure your industrial designs worldwide with BrandSecure's expert Hague System registration services. Start today to safeguard your creative assets and ensure global market protection.
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