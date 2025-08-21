'use client';

import { motion } from 'framer-motion';
import { FileText, Search, Globe, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

// Define the interface for patent search info
interface PatentSearchInfo {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  detailedContent: string;
}

const patentSearchInfo: PatentSearchInfo[] = [
  {
    id: 1,
    title: 'What is a Patent Search?',
    description: 'Reviews patents and publications to check invention novelty.',
    category: 'Search Basics',
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1200",
    detailedContent: `
      • Examining existing patents, publications, and prior art.
      • Determining novelty and non-obviousness of an invention.
      • Conducting searches using patent databases and public records.
      • Helping assess patentability before filing an application.
      • Performed by experts to ensure thorough analysis.
      • Including both patent and non-patent literature.
    `,
  },
  {
    id: 2,
    title: 'Benefits of Patent Search',
    description: 'Identifies prior art and reduces application rejection risks.',
    category: 'Advantages',
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1200",
    detailedContent: `
      • Uncovering prior art to avoid patent application rejections.
      • Saving time and costs by identifying potential conflicts early.
      • Informing strategic decisions for patent drafting and filing.
      • Enhancing application quality by addressing known art.
      • Reducing risk of infringement lawsuits post-grant.
      • Providing insights into competitor technologies.
    `,
  },
  {
    id: 3,
    title: 'Types of Searches',
    description: 'Includes novelty, infringement, and validity searches.',
    category: 'Search Types',
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=1200",
    detailedContent: `
      • Novelty Search: Assessing patentability of a new invention.
      • Infringement Search: Checking for potential patent violations.
      • Validity Search: Evaluating the strength of existing patents.
      • Freedom-to-Operate Search: Ensuring market entry without infringement.
      • State-of-the-Art Search: Exploring technology landscape.
      • Patentability Search: Combining novelty and non-obviousness checks.
    `,
  },
  {
    id: 4,
    title: 'Search Process',
    description: 'Queries databases and analyzes results with expert insights.',
    category: 'Procedure',
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1200",
    detailedContent: `
      • Defining the invention's key features and scope.
      • Querying global patent databases like USPTO, EPO, and WIPO.
      • Reviewing non-patent literature, such as journals and articles.
      • Analyzing results to identify relevant prior art.
      • Consulting experts to interpret complex findings.
      • Generating a report summarizing search outcomes.
    `,
  },
  {
    id: 5,
    title: 'Importance of Search',
    description: 'Ensures invention uniqueness and avoids patent conflicts.',
    category: 'Significance',
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1200",
    detailedContent: `
      • Confirming the uniqueness of your invention.
      • Preventing wasted resources on unpatentable ideas.
      • Mitigating risks of future legal disputes.
      • Guiding R&D by highlighting existing technologies.
      • Supporting strategic IP portfolio development.
      • Enhancing investor confidence in your invention.
    `,
  },
];

const searchServices = [
  {
    icon: FileText,
    title: 'Prior Art Analysis',
    description: 'We identify relevant prior art to assess patentability.',
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1200",
    category: "Analysis",
  },
  {
    icon: Search,
    title: 'Database Queries',
    description: 'We search global patent databases for comprehensive results.',
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=1200",
    category: "Research",
  },
  {
    icon: Globe,
    title: 'Competitor Insights',
    description: 'We analyze competitor patents to inform your strategy.',
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1200",
    category: "Strategy",
  },
];

const benefits = [
  'Avoid patent application rejections',
  'Save time and costs on unpatentable ideas',
  'Strategize filings with prior art insights',
];

export default function PatentSearchPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState<PatentSearchInfo | null>(null);

  const handleExploreClick = (info: PatentSearchInfo) => {
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
            src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1200"
            alt="Patent Search hero"
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
            Patent Search
          </h1>
          <p className="mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg md:text-xl text-white/90 font-light px-4">
            Ensure your invention's uniqueness with comprehensive patent searches. Identify prior art and assess patentability before filing.
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
                      Patent Search Overview
                    </motion.h1>

                    <p className="text-base md:text-lg leading-relaxed text-[#393E46]">
                      At Leonard Corporate Solutions, we specialize in comprehensive patent searches to evaluate the novelty and patentability of your inventions. Our expert team conducts thorough prior art searches across global databases to identify potential conflicts.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed text-[#393E46]">
                      Our patent search services include novelty assessments, infringement analysis, freedom-to-operate opinions, and competitor intelligence to inform your intellectual property strategy.
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
                  <img src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=1200" alt="Patent Search visual" className="h-full w-full object-cover object-right" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Patent Information Section */}
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
              Patent Search Information
            </motion.h1>
          </div>

          {/* Patent Info Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 px-2 sm:px-4 md:px-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {patentSearchInfo.map((info, index) => (
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
              Our Patent Search Services
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 px-2 sm:px-4 md:px-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {searchServices.map((service, index) => (
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
                Why Conduct a Patent Search?
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
                At Leonard Corporate Solutions, our patent search services ensure your inventions are thoroughly vetted before filing, reducing the risk of rejection and maximizing protection.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-[#00ADB5] text-white font-medium rounded-full hover:bg-white hover:text-[#00ADB5] transition-all duration-300 text-sm sm:text-base shadow-lg"
              >
                Start Your Patent Search
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