'use client';

import { motion } from "framer-motion";
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
      • Faster processing through WIPO’s system.
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
            International Trademark Filing
            <span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Protect Your Brand Globally with the Madrid Protocol
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
            <h2 className="text-3xl font-bold text-[#222831] mb-4">Secure Your Brand Worldwide</h2>
            <p className="text-[#393E46]/80 mb-6">
              Expanding your brand internationally requires robust trademark protection. The Madrid Protocol simplifies this by allowing a single application to secure trademark rights in multiple countries. At BrandSecure, we provide expert guidance to navigate the Madrid Protocol process, ensuring your brand is protected efficiently across global markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Madrid Protocol Info Section */}
      <section className="py-16 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#222831] mb-4">Madrid Protocol Essentials</h2>
            <div className="w-24 h-1 bg-[#00ADB5] mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {madridProtocolInfo.map((info: MadridProtocolInfo, index: number) => (
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

      {/* Madrid Protocol Member Countries Section */}
      <section className="py-16 px-4 md:px-16 lg:px-24 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#222831] mb-4">Key Madrid Protocol Member Countries</h2>
            <div className="w-24 h-1 bg-[#00ADB5] mx-auto rounded-full"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">European Union</h3>
              <p className="text-[#393E46]/80">Covers all 27 EU member states through a single designation via the European Union Intellectual Property Office (EUIPO).</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">United States</h3>
              <p className="text-[#393E46]/80">Requires compliance with USPTO standards, including proof of use in commerce for registration.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">China</h3>
              <p className="text-[#393E46]/80">Involves careful subclass selection under the Nice Classification for effective trademark protection.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">India</h3>
              <p className="text-[#393E46]/80">Allows international filings based on a national trademark application or registration.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">Japan</h3>
              <p className="text-[#393E46]/80">Requires distinctiveness checks and may involve local representation for objections.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">Australia</h3>
              <p className="text-[#393E46]/80">Offers efficient protection with examination by IP Australia for compliance.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filing Process Section */}
      <section className="py-16 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#222831] mb-4">How to File via the Madrid Protocol</h2>
            <div className="w-24 h-1 bg-[#00ADB5] mx-auto rounded-full"></div>
          </motion.div>
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">1. Establish Base Application</h3>
              <p className="text-[#393E46]/80">File or secure a trademark registration in your home country to serve as the foundation for international filing.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">2. Submit International Application</h3>
              <p className="text-[#393E46]/80">File the application through your national trademark office, specifying the target countries for protection.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">3. WIPO Examination</h3>
              <p className="text-[#393E46]/80">WIPO reviews the application for formalities and forwards it to the designated countries.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">4. National Review</h3>
              <p className="text-[#393E46]/80">Each designated country examines the application based on its trademark laws, potentially issuing refusals.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">5. Grant of Protection</h3>
              <p className="text-[#393E46]/80">Approved countries grant trademark protection, allowing use of the mark in those jurisdictions.</p>
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
              <li>Individuals with a national trademark application/registration</li>
              <li>Businesses with a registered office in a Madrid Protocol member country</li>
              <li>Partnership firms with a base trademark</li>
              <li>Companies incorporated in a member country</li>
              <li>Trusts or associations with a national trademark</li>
            </ul>
            <h3 className="text-xl font-bold text-[#222831] mb-3">Required Documents</h3>
            <p className="text-[#393E46]/80 mb-4">Documents vary by applicant but generally include:</p>
            <ul className="text-[#393E46]/80 list-disc list-inside">
              <li>Copy of the national trademark application/registration</li>
              <li>Details of the mark (word, logo, or figurative elements)</li>
              <li>List of goods/services under Nice Classification</li>
              <li>Applicant’s details (name, address, nationality)</li>
              <li>Power of Attorney (if filed through an agent)</li>
              <li>Proof of payment of WIPO and national fees</li>
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
            <h2 className="text-4xl font-bold text-[#222831] mb-4">Ready to Go Global with Your Brand?</h2>
            <p className="text-[#393E46]/80 mb-6 max-w-2xl mx-auto">
              Secure your trademark internationally with BrandSecure’s expert Madrid Protocol filing services. Start today to protect your brand across global markets.
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