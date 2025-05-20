'use client';

import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

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
    title: "What is the PCT?",
    description: "The Patent Cooperation Treaty (PCT) is an international treaty that simplifies patent filing across multiple countries through a single application, managed by WIPO.",
    category: "PCT Basics",
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
    title: "Benefits of PCT Filing",
    description: "PCT filing streamlines international patent protection, offering cost savings, delayed national filings, and a centralized application process.",
    category: "Advantages",
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
    title: "PCT Filing Process",
    description: "The PCT process involves filing an international application, international search and examination, and entering national phases in desired countries.",
    category: "Process Guide",
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
    title: "Maintaining PCT Patents",
    description: "After national phase entry, patents require maintenance fees and compliance with local laws to remain valid in each country.",
    category: "Patent Management",
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
    title: "Challenges of PCT Filing",
    description: "PCT filing involves challenges like varying national patent laws, high costs in the national phase, and dependency on the international application.",
    category: "Considerations",
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
    console.log("Explore clicked for:", info.title);
    setSelectedInfo(info);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedInfo(null);
  };

  return (
    <div className="min-h-screen bg-[#EEEEEE] relative rounded-b-[5%] font-montserrat">
      {/* Grid Pattern Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.025) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
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
            className="bg-white/95 backdrop-blur-sm rounded-2xl max-w-6xl w-full max-h-[98vh] overflow-y-auto p-10 border border-[#00ADB5]/20 shadow-2xl"
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
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto text-center"
        >
          <h1 className="text-6xl md:text-8xl font-extrabold text-[#222831] relative inline-block tracking-tight">
            International Patent Filing via PCT Application
            <span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Secure Your Invention Globally with the PCT System
          </p>
        </motion.div>
      </motion.section>

      {/* Introduction Section */}
      <section className="py-16 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-3xl font-bold text-[#222831] mb-4">Protect Your Invention Worldwide</h2>
            <p className="text-[#393E46]/80 mb-6">
              The Patent Cooperation Treaty (PCT) offers a streamlined way to seek patent protection in multiple countries through a single international application. At BrandSecure, we guide inventors and businesses through the PCT process, helping you safeguard your innovations across global markets efficiently and effectively.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PCT Info Section */}
      <section className="py-16 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#222831] mb-4">PCT Essentials</h2>
            <div className="w-24 h-1 bg-[#00ADB5] mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pctInfo.map((info: PCTInfo, index: number) => (
              <motion.div
                key={info.id}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="p-6">
                  <div className="mb-4">
                    <span className="px-3 py-1 text-xs font-medium bg-white/90 backdrop-blur-sm rounded-full text-[#00ADB5]">
                      {info.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#222831] mb-3 group-hover:text-[#00ADB5] transition-colors duration-300">
                    {info.title}
                  </h3>
                  <p className="text-[#393E46]/80 mb-4 line-clamp-3">{info.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm font-medium text-[#393E46]">Learn More</span>
                    <button
                      onClick={() => handleExploreClick(info)}
                      className="inline-flex items-center text-[#00ADB5] font-medium hover:text-[#222831] transition-colors duration-300"
                    >
                      Explore
                      <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PCT Member Countries Section */}
      <section className="py-16 px-4 md:px-16 lg:px-24 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#222831] mb-4">Key PCT Member Countries</h2>
            <div className="w-24 h-1 bg-[#00ADB5] mx-auto rounded-full"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">United States</h3>
              <p className="text-[#393E46]/80">Requires compliance with USPTO patentability standards and proof of use for patent grants.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">European Patent Office</h3>
              <p className="text-[#393E46]/80">Covers multiple European countries through a single PCT national phase entry via the EPO.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">China</h3>
              <p className="text-[#393E46]/80">Requires precise patent specifications and translations for national phase entry with CNIPA.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">India</h3>
              <p className="text-[#393E46]/80">Allows PCT filings with a national phase entry within 31 months, adhering to Indian patent laws.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">Japan</h3>
              <p className="text-[#393E46]/80">JPO examines PCT applications for novelty and may require local representation.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">South Korea</h3>
              <p className="text-[#393E46]/80">KIPO processes PCT applications with a focus on technical and legal compliance.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PCT Filing Process Section */}
      <section className="py-16 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#222831] mb-4">How to File a PCT Application</h2>
            <div className="w-24 h-1 bg-[#00ADB5] mx-auto rounded-full"></div>
          </motion.div>
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">1. File International Application</h3>
              <p className="text-[#393E46]/80">Submit a PCT application to a receiving office, including patent specifications and claims.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">2. International Search</h3>
              <p className="text-[#393E46]/80">An International Searching Authority (ISA) conducts a search to assess patentability.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">3. International Publication</h3>
              <p className="text-[#393E46]/80">WIPO publishes the application after 18 months, making it publicly available.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">4. Optional Preliminary Examination</h3>
              <p className="text-[#393E46]/80">Request an International Preliminary Examination for a non-binding patentability opinion.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">5. National Phase Entry</h3>
              <p className="text-[#393E46]/80">Enter the national phase in desired countries within 30/31 months, meeting local requirements.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Eligibility and Requirements Section */}
      <section className="py-16 px-4 md:px-16 lg:px-24 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#222831] mb-4">Eligibility and Requirements</h2>
            <div className="w-24 h-1 bg-[#00ADB5] mx-auto rounded-full"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-[#222831] mb-3">Who Can Apply?</h3>
            <ul className="text-[#393E46]/80 list-disc list-inside mb-6">
              <li>Individuals with a patentable invention</li>
              <li>Businesses with a registered office in a PCT member country</li>
              <li>Partnership firms or companies with eligible inventors</li>
              <li>Universities or research institutions with patentable innovations</li>
              <li>Applicants with residency or nationality in a PCT member country</li>
            </ul>
            <h3 className="text-xl font-bold text-[#222831] mb-3">Required Documents</h3>
            <p className="text-[#393E46]/80 mb-4">Documents vary by applicant but generally include:</p>
            <ul className="text-[#393E46]/80 list-disc list-inside">
              <li>Detailed patent specification (description, claims, abstract)</li>
              <li>Drawings or diagrams (if applicable)</li>
              <li>Applicant’s details (name, address, nationality)</li>
              <li>Power of Attorney (if filed through an agent)</li>
              <li>Priority document (if claiming priority)</li>
              <li>Proof of payment of PCT filing fees</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#222831] mb-4">Ready to Protect Your Invention Globally?</h2>
            <p className="text-[#393E46]/80 mb-6 max-w-2xl mx-auto">
              Safeguard your innovation worldwide with BrandSecure’s expert PCT filing services. Start today to secure your patent rights across global markets.
            </p>
            <a
              href="/contact-us"
              className="inline-flex items-center px-6 py-3 bg-[#00ADB5] text-white font-medium rounded-full hover:bg-[#222831] transition-colors duration-300"
            >
              Get Started
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}