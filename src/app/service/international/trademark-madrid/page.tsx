'use client';

import { motion } from "framer-motion";
import Link from 'next/link';
import { useState } from "react";
import { X } from "lucide-react";

// Define the interface for Madrid Protocol info
interface MadridProtocolInfo {
  id: number;
  title: string;
  description: string;
  category: string;
  detailedContent: string;
}

const madridProtocolInfo: MadridProtocolInfo[] = [
  {
    id: 1,
    title: "What is the Madrid Protocol?",
    description: "The Madrid Protocol is an international treaty that simplifies trademark registration across multiple countries through a single application, managed by WIPO.",
    category: "Madrid Basics",
    detailedContent: `
      • Administered by the World Intellectual Property Organization (WIPO).
      • Enables trademark protection in up to 128 member countries.
      • Requires a single application in one language (English, French, or Spanish).
      • Reduces costs compared to filing in each country separately.
      • Depends on a base trademark application/registration in the home country.
      • Simplifies management of renewals and modifications.
    `,
  },
  {
    id: 2,
    title: "Advantages of the Madrid Protocol",
    description: "The Madrid Protocol offers a cost-effective, streamlined process for securing trademark protection in multiple jurisdictions with centralized management.",
    category: "Benefits",
    detailedContent: `
      • Single application covers multiple countries.
      • Lower costs than individual national filings.
      • Centralized renewals and updates via WIPO.
      • Flexibility to designate additional countries later.
      • Faster processing through WIPO's system.
      • Supports brand expansion with minimal bureaucracy.
    `,
  },
  {
    id: 3,
    title: "Filing Process Overview",
    description: "Filing via the Madrid Protocol involves a base application, international submission through WIPO, and examination by designated countries.",
    category: "Process Guide",
    detailedContent: `
      • Secure a trademark application/registration in your home country.
      • File an international application via your national trademark office.
      • WIPO reviews and forwards the application to designated countries.
      • Each country examines the mark per its local laws.
      • Respond to any objections or refusals within deadlines.
      • Protection granted in approving countries.
    `,
  },
  {
    id: 4,
    title: "Maintaining International Trademarks",
    description: "Trademarks registered via the Madrid Protocol require periodic renewals and monitoring to ensure ongoing protection in designated countries.",
    category: "Trademark Management",
    detailedContent: `
      • Renew every 10 years through a single WIPO application.
      • Monitor trademark status in each designated country.
      • Update ownership or address changes via WIPO.
      • Address refusals or cancellations promptly.
      • Maintain records of use to prevent challenges.
      • Comply with local laws for enforcement.
    `,
  },
  {
    id: 5,
    title: "Limitations of the Madrid Protocol",
    description: "The Madrid Protocol has challenges, such as dependency on the home trademark and varying national examination standards.",
    category: "Considerations",
    detailedContent: `
      • Dependent on the home trademark for the first 5 years.
      • Varying legal standards across member countries.
      • Potential refusals by individual countries.
      • May require local legal representation for disputes.
      • Limited to Madrid System member countries.
      • Requires precise classification of goods/services.
    `,
  },
];

export default function InternationalTrademarkFilingPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState<MadridProtocolInfo | null>(null);

  const handleExploreClick = (info: MadridProtocolInfo) => {
    console.log("Explore clicked for:", info.title);
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
            International Trademark Filing
          </h1>
          <p className="mt-8 text-xl text-white/90 max-w-2xl mx-auto font-light drop-shadow">
            Protect Your Brand Globally
          </p>
        </motion.div>
      </motion.section>

      {/* Below the title section: Secure Your Brand Worldwide */}
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
                  <div className="space-y-6">
                    <motion.h2
                      className="text-[#000000] text-4xl sm:text-5xl md:text-6xl font-extrabold px-2"
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7 }}
                      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                    >
                      Litigation & Disputes Overview
                    </motion.h2>

                    <p className="text-lg leading-relaxed text-[#393E46]">
                      Expanding your brand internationally requires robust trademark protection. The Madrid Protocol simplifies this by allowing a single application to secure trademark rights in multiple countries. At BrandSecure, we provide expert guidance to navigate the Madrid Protocol process, ensuring your brand is protected efficiently across global markets.
                    </p>

                    <p className="text-lg leading-relaxed text-[#393E46]">
                      Our team handles commercial disputes, contract breaches, arbitration, mediation, and enforcement, tailoring approaches to the specifics of each matter.
                    </p>

                    <p className="text-lg font-medium text-[#393E46]">
                      📩 For bespoke dispute support, write to{" "}
                      <a href="mailto:info@brandsecure.in" className="text-[#00ADB5] hover:underline">
                        info@brandsecure.in
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative z-10 h-[420px] w-full lg:w-2/5">
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80&w=1400"
                    alt="Dispute visual"
                    className="h-full w-full object-cover object-right"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Madrid Protocol Info Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">
              <span className="text-white">Madrid Protocol</span>{' '}
              <span className="text-[#00ADB5]">Essentials</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 md:gap-12 px-2 sm:px-4 md:px-16">
            {madridProtocolInfo.map((info: MadridProtocolInfo, index: number) => {
              // Use a different image for each card for visual variety
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
                  className="group bg-cover bg-center p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-[#222]/40 relative overflow-hidden"
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
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#ffffff] transition-colors duration-300">
                      {info.title}
                    </h3>
                    <p className="text-[#e0e0e0] text-base leading-relaxed line-clamp-3">
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
                  {/* Hover overlay for effect */}
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
              <span className="text-white">Key Madrid Protocol</span>{' '}
              <span className="text-[#00ADB5]">Member Countries</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
            {[
              {
                title: 'European Union',
                description: 'Covers all 27 EU member states through a single designation via the European Union Intellectual Property Office (EUIPO).',
                category: 'Major Market',
              },
              {
                title: 'United States',
                description: 'Requires compliance with USPTO standards, including proof of use in commerce for registration.',
                category: 'Key Territory',
              },
              {
                title: 'China',
                description: 'Involves careful subclass selection under the Nice Classification for effective trademark protection.',
                category: 'Emerging Market',
              },
              {
                title: 'India',
                description: 'Allows international filings based on a national trademark application or registration.',
                category: 'Growing Economy',
              },
              {
                title: 'Japan',
                description: 'Requires distinctiveness checks and may involve local representation for objections.',
                category: 'Advanced Market',
              },
              {
                title: 'Australia',
                description: 'Offers efficient protection with examination by IP Australia for compliance.',
                category: 'Pacific Region',
              },
            ].map((item, index) => {
              const countryImages = [
                "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80"
              ];
              const bgImg = countryImages[index % countryImages.length];
              return (
                <motion.div
                  key={item.country}
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
                      {item.country}
                    </h3>
                    <p className="text-[#e0e0e0] text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300 pointer-events-none" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Filing Process Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">
              <span className="text-white">How to File via</span>{' '}
              <span className="text-[#00ADB5]">Madrid Protocol</span>
            </h2>
          </div>
          <div className="space-y-8">
            {[
              {
                step: '1. Establish Base Application',
                description: 'File or secure a trademark registration in your home country to serve as the foundation for international filing.',
                category: 'Step 1',
              },
              {
                step: '2. Submit International Application',
                description: 'File the application through your national trademark office, specifying the target countries for protection.',
                category: 'Step 2',
              },
              {
                step: '3. WIPO Examination',
                description: 'WIPO reviews the application for formalities and forwards it to the designated countries.',
                category: 'Step 3',
              },
              {
                step: '4. National Review',
                description: 'Each designated country examines the application based on its trademark laws, potentially issuing refusals.',
                category: 'Step 4',
              },
              {
                step: '5. Grant of Protection',
                description: 'Approved countries grant trademark protection, allowing use of the mark in those jurisdictions.',
                category: 'Step 5',
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

      {/* Eligibility Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">
              <span className="text-white">Eligibility &</span>{' '}
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
                  <p>• Individuals with a national trademark application/registration</p>
                  <p>• Businesses with a registered office in a Madrid Protocol member country</p>
                  <p>• Partnership firms with a base trademark</p>
                  <p>• Companies incorporated in a member country</p>
                  <p>• Trusts or associations with a national trademark</p>
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
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -8 }}
            >
              <div className="flex flex-col gap-5 relative z-10">
                <div className="px-3 py-1 text-xs font-medium bg-white/10 text-white w-fit uppercase tracking-wider" style={{ borderRadius: 0 }}>
                  Documentation
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Required Documents
                </h3>
                <div className="text-[#e0e0e0] text-base leading-relaxed space-y-2">
                  <p className="mb-4">Documents vary by applicant but generally include:</p>
                  <p>• Copy of the national trademark application/registration</p>
                  <p>• Details of the mark (word, logo, or figurative elements)</p>
                  <p>• List of goods/services under Nice Classification</p>
                  <p>• Applicant's details (name, address, nationality)</p>
                  <p>• Power of Attorney (if filed through an agent)</p>
                  <p>• Proof of payment of WIPO and national fees</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300 pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative">
          {/* Abstract curvy shape in center with image */}
          <div 
            className="absolute inset-0 flex items-center justify-center"
            style={{
              clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)'
            }}
          >
            <div 
              className="w-full h-96 opacity-15"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1000&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                clipPath: 'ellipse(60% 40% at 50% 50%)'
              }}
            />
          </div>

          <motion.div
            className="relative max-w-3xl mx-auto px-8 text-center z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-[#00ADB5]">Ready to Go</span>{' '}
              <span className="text-[#393E46]">Global?</span>
            </h2>
            <p className="text-[#393E46] text-lg leading-relaxed mb-6">
              Secure your trademark internationally with BrandSecure's expert Madrid Protocol filing services. Start today to protect your brand across global markets.
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

      {/* Enhanced Cool Popup Modal */}
      {showPopup && selectedInfo && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closePopup}
        >
          <motion.div
            className="bg-gradient-to-br from-white to-gray-50 max-w-3xl w-full max-h-[85vh] overflow-hidden shadow-2xl border border-gray-200/50 relative"
            initial={{ scale: 0.8, opacity: 0, rotateX: -15 }}
            animate={{ scale: 1, opacity: 1, rotateX: 0 }}
            exit={{ scale: 0.8, opacity: 0, rotateX: 15 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            style={{ borderRadius: 0 }}
          >
            {/* Header with background image */}
            <div 
              className="relative p-8 bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,173,181,0.9) 100%), url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80)`,
              }}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="px-3 py-1 text-xs font-medium bg-white/20 text-white w-fit uppercase tracking-wider mb-4" style={{ borderRadius: 0 }}>
                    {selectedInfo.category}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3 leading-tight">{selectedInfo.title}</h3>
                  <p className="text-white/90 text-lg leading-relaxed">{selectedInfo.description}</p>
                </div>
                <button
                  onClick={closePopup}
                  className="ml-4 p-2 text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 group"
                  style={{ borderRadius: 0 }}
                >
                  <X size={28} className="group-hover:rotate-90 transition-transform duration-300" />
                </button>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5" style={{ clipPath: 'polygon(100% 0, 100% 60%, 40% 0)' }} />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#00ADB5]/20" style={{ clipPath: 'polygon(0 100%, 0 40%, 60% 100%)' }} />
            </div>

            {/* Content */}
            <div className="p-8 max-h-[50vh] overflow-y-auto">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-[#222831] mb-4 flex items-center">
                  <div className="w-1 h-6 bg-[#00ADB5] mr-3"></div>
                  Detailed Information
                </h4>
                
                <div className="text-[#393E46] leading-relaxed space-y-3">
                  {selectedInfo.detailedContent.split('•').filter(item => item.trim()).map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-3 p-3 bg-gray-50/50 hover:bg-gray-100/50 transition-colors duration-200"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      style={{ borderRadius: 0 }}
                    >
                      <div className="w-2 h-2 bg-[#00ADB5] mt-2 flex-shrink-0" style={{ borderRadius: 0 }}></div>
                      <p className="flex-1">{item.trim()}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-8 py-6 bg-gray-50/80 border-t border-gray-200/50">
              <div className="flex items-center justify-between">
                <p className="text-sm text-[#393E46]/70">
                  Need more information? Contact our experts.
                </p>
                <div className="flex space-x-3">
                  <button
                    onClick={closePopup}
                    className="px-4 py-2 text-[#393E46] hover:bg-gray-200 transition-colors duration-200"
                    style={{ borderRadius: 0 }}
                  >
                    Close
                  </button>
                  <Link
                    href="/contact-us"
                    onClick={closePopup}
                    className="px-6 py-2 bg-[#00ADB5] text-white hover:bg-[#222831] transition-colors duration-200 inline-flex items-center"
                    style={{ borderRadius: 0 }}
                  >
                    Contact Us
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Back to Home Link */}
    
    </div>
  );
}