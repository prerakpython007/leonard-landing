'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { X } from 'lucide-react';

// Define the interface for PCT info
interface PCTInfo {
  id: number;
  title: string;
  description: string;
  category: string;
  detailedContent: string;
}

const pctInfo: PCTInfo[] = [
  {
    id: 1,
    title: 'What is the PCT?',
    description: 'The Patent Cooperation Treaty (PCT) is an international treaty that simplifies patent filing across multiple countries through a single application, managed by WIPO.',
    category: 'PCT Basics',
    detailedContent: `
      • Administered by the World Intellectual Property Organization (WIPO).
      • Enables patent protection in over 150 member countries.
      • Allows a single international application to seek protection.
      • Delays national phase entry by up to 30/31 months.
      • Provides a unified preliminary examination process.
      • Reduces costs and complexity for global patent filing.
    `,
  },
  {
    id: 2,
    title: 'Benefits of PCT Filing',
    description: 'PCT filing streamlines international patent protection, offering cost savings, delayed national filings, and a centralized application process.',
    category: 'Advantages',
    detailedContent: `
      • Single application covers multiple countries.
      • Delays national phase costs for up to 30/31 months.
      • Provides an international search report to assess patentability.
      • Allows amendments before entering national phases.
      • Simplifies management through a centralized system.
      • Enhances strategic planning for global patent protection.
    `,
  },
  {
    id: 3,
    title: 'PCT Filing Process',
    description: 'The PCT process involves filing an international application, international search and examination, and entering national phases in desired countries.',
    category: 'Process Guide',
    detailedContent: `
      • File an international application with a PCT receiving office.
      • International search authority conducts a patentability search.
      • Optional preliminary examination for additional review.
      • Application published by WIPO after 18 months.
      • Enter national phase in chosen countries within 30/31 months.
      • Comply with national patent office requirements.
    `,
  },
  {
    id: 4,
    title: 'Maintaining PCT Patents',
    description: 'After national phase entry, patents require maintenance fees and compliance with local laws to remain valid in each country.',
    category: 'Patent Management',
    detailedContent: `
      • Pay maintenance fees in each country post-national phase.
      • Monitor patent status in designated countries.
      • Comply with local patent laws and regulations.
      • Respond to office actions or oppositions promptly.
      • Maintain records of invention use or licensing.
      • Renew patents as per national requirements.
    `,
  },
  {
    id: 5,
    title: 'Challenges of PCT Filing',
    description: 'PCT filing involves challenges like varying national patent laws, high costs in the national phase, and dependency on the international application.',
    category: 'Considerations',
    detailedContent: `
      • National phase requirements vary by country.
      • High costs during national phase entry.
      • Dependency on the international application’s quality.
      • Potential for oppositions in national phases.
      • Limited to PCT member countries.
      • Requires precise drafting of patent claims.
    `,
  },
];

export default function InternationalPatentFilingPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState<PCTInfo | null>(null);

  const handleExploreClick = (info: PCTInfo) => {
    setSelectedInfo(info);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedInfo(null);
  };

  return (
    <div className="min-h-screen bg-[#0f3460] relative  font-montserrat overflow-hidden">
      {/* Hero Section */}
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
            PCT Filing
          </h1>
          <p className="mt-8 text-xl text-white/90 max-w-2xl mx-auto font-light drop-shadow">
            Secure Your Invention Globally with the PCT System
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
                      <span className="text-[#00ADB5]">Protect Your</span>{' '}
                      <span className="text-[#393E46]">Invention Worldwide</span>
                    </h2>
                    <p className="text-base sm:text-lg text-[#393E46] leading-relaxed">
                      The Patent Cooperation Treaty (PCT) offers a streamlined way to seek patent protection in multiple countries through a single international application. At BrandSecure, we guide inventors and businesses through the PCT process, helping you safeguard your innovations across global markets efficiently and effectively.
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-[#393E46] text-lg font-medium mb-4">
                      📩 Contact us at{' '}
                      <a href="mailto:info@brandsecure.in" className="text-[#00ADB5] hover:underline">
                        info@brandsecure.in
                      </a>{' '}
                      to protect your invention globally today.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative z-10 h-[420px] w-full lg:w-2/5">
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80&w=1400"
                    alt="Patent visual"
                    className="h-full w-full object-cover object-right"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PCT Info Sections - All with black background */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">
              <span className="text-white">PCT</span>{' '}
              <span className="text-[#00ADB5]">Essentials</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 md:gap-12 px-2 sm:px-4 md:px-16">
            {pctInfo.map((info: PCTInfo, index: number) => {
              const images = [
                "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80"
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
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PCT Member Countries Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">
              <span className="text-white">Key PCT</span>{' '}
              <span className="text-[#00ADB5]">Member Countries</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
            {[
              {
                title: 'United States',
                description: 'Requires compliance with USPTO patentability standards and proof of use for patent grants.',
              },
              {
                title: 'European Patent Office',
                description: 'Covers multiple European countries through a single PCT national phase entry via the EPO.',
              },
              {
                title: 'China',
                description: 'Requires precise patent specifications and translations for national phase entry with CNIPA.',
              },
              {
                title: 'India',
                description: 'Allows PCT filings with a national phase entry within 31 months, adhering to Indian patent laws.',
              },
              {
                title: 'Japan',
                description: 'JPO examines PCT applications for novelty and may require local representation.',
              },
              {
                title: 'South Korea',
                description: 'KIPO processes PCT applications with a focus on technical and legal compliance.',
              },
            ].map((country, index) => {
              const countryImages = [
                "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80",
              ];
              const bgImg = countryImages[index % countryImages.length];
              return (
                <motion.div
                  key={country.title}
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
                    <h3 className="text-xl font-bold text-white mb-3">
                      {country.title}
                    </h3>
                    <p className="text-[#e0e0e0] text-base leading-relaxed">
                      {country.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PCT Filing Process Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">
              <span className="text-white">How to File</span>{' '}
              <span className="text-[#00ADB5]">a PCT Application</span>
            </h2>
          </div>
          <div className="space-y-8">
            {[
              {
                step: '1. File International Application',
                description: 'Submit a PCT application to a receiving office, including patent specifications and claims.',
              },
              {
                step: '2. International Search',
                description: 'An International Searching Authority (ISA) conducts a search to assess patentability.',
              },
              {
                step: '3. International Publication',
                description: 'WIPO publishes the application after 18 months, making it publicly available.',
              },
              {
                step: '4. Optional Preliminary Examination',
                description: 'Request an International Preliminary Examination for a non-binding patentability opinion.',
              },
              {
                step: '5. National Phase Entry',
                description: 'Enter the national phase in desired countries within 30/31 months, meeting local requirements.',
              },
            ].map((step, index) => {
              const processImages = [
                "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?auto=format&fit=crop&w=600&q=80"
              ];
              const bgImg = processImages[index % processImages.length];
              return (
                <motion.div
                  key={step.step}
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
                      Step {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {step.step}
                    </h3>
                    <p className="text-[#e0e0e0] text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300 pointer-events-none" />
                </motion.div>
              );
            })}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              className="group bg-cover bg-center p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-[#222]/40 hover:border-[#00ADB5] relative overflow-hidden"
              style={{
                borderRadius: 0,
                backgroundImage: `linear-gradient(120deg, rgba(0,0,0,0.85) 80%, rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80)`,
                backgroundBlendMode: 'multiply',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -8 }}
            >
              <div className="flex flex-col gap-5 relative z-10">
                <div className="px-3 py-1 text-xs font-medium bg-white/10 text-white w-fit uppercase tracking-wider" style={{ borderRadius: 0 }}>
                  Eligibility
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Who Can Apply?
                </h3>
                <div className="text-[#e0e0e0] text-base leading-relaxed space-y-2">
                  <p>Individuals with a patentable invention</p>
                  <p>Businesses with a registered office in a PCT member country</p>
                  <p>Partnership firms or companies with eligible inventors</p>
                  <p>Universities or research institutions with patentable innovations</p>
                  <p>Applicants with residency or nationality in a PCT member country</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300 pointer-events-none" />
            </motion.div>

            <motion.div
              className="group bg-cover bg-center p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-[#222]/40 hover:border-[#00ADB5] relative overflow-hidden"
              style={{
                borderRadius: 0,
                backgroundImage: `linear-gradient(120deg, rgba(0,0,0,0.85) 80%, rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80)`,
                backgroundBlendMode: 'multiply',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -8 }}
            >
              <div className="flex flex-col gap-5 relative z-10">
                <div className="px-3 py-1 text-xs font-medium bg-white/10 text-white w-fit uppercase tracking-wider" style={{ borderRadius: 0 }}>
                  Requirements
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Required Documents
                </h3>
                <p className="text-[#ffffff] mb-4">Documents vary by applicant but generally include:</p>
                <ul className="text-[#ffffff] list-disc list-inside">
                  <li>Detailed patent specification (description, claims, abstract)</li>
                  <li>Drawings or diagrams (if applicable)</li>
                  <li>Applicant’s details (name, address, nationality)</li>
                  <li>Priority document (if claiming priority)</li>
                </ul>
              </div>
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300 pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-white relative overflow-hidden">
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Ready to Protect <br />
              <span className="text-[#00ADB5]">Your Invention Globally?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#393E46] leading-relaxed mb-8">
              Safeguard your innovation worldwide with BrandSecure's expert PCT filing services. Start today to secure your patent rights across global markets with a streamlined and strategic approach.
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
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={closePopup}
        >
          <motion.div
            className="bg-gradient-to-br from-white to-gray-50 w-full max-h-[85vh] overflow-hidden shadow-2xl border border-gray-200/50 relative"
            style={{ borderRadius: 0 }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <style>{`
              ::-webkit-scrollbar { width: 8px; }
              ::-webkit-scrollbar-thumb { background: #00ADB5; border-radius: 4px; }
              ::-webkit-scrollbar-track { background: #222831; }
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

