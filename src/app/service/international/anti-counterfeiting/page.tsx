'use client';

import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

// Define the interface for Anti-Counterfeiting info
interface AntiCounterfeitingInfo {
  id: number;
  title: string;
  description: string;
  category: string;
  detailedContent: string;
}

const antiCounterfeitingInfo: AntiCounterfeitingInfo[] = [
  {
    id: 1,
    title: "What are Anti-Counterfeiting Measures?",
    description: "Anti-counterfeiting measures protect IP by detecting, preventing, and enforcing against unauthorized use of trademarks, patents, and designs.",
    category: "Measure Basics",
    detailedContent: `
      • Monitors markets for counterfeit goods and IP misuse.
      • Implements legal and technological solutions to deter counterfeiting.
      • Enforces IP rights through seizures and litigation.
      • Protects brand reputation and consumer trust.
      • Covers physical and digital marketplaces globally.
      • Aligns with international anti-counterfeiting laws.
    `,
  },
  {
    id: 2,
    title: "Benefits of Anti-Counterfeiting",
    description: "Effective measures reduce financial losses, strengthen brand integrity, and enhance consumer safety across markets.",
    category: "Advantages",
    detailedContent: `
      • Minimizes revenue loss from counterfeit sales.
      • Enhances brand credibility and market trust.
      • Protects consumers from unsafe or substandard products.
      • Deters counterfeiters through proactive enforcement.
      • Supports compliance with global IP regulations.
      • Strengthens competitive positioning in key markets.
    `,
  },
  {
    id: 3,
    title: "Anti-Counterfeiting Process",
    description: "The process involves monitoring, investigating, enforcing, and educating to combat counterfeiting effectively.",
    category: "Process Guide",
    detailedContent: `
      • Monitor markets and online platforms for counterfeits.
      • Investigate suspected counterfeiting activities.
      • Issue cease-and-desist notices or takedown requests.
      • Collaborate with law enforcement for seizures.
      • Pursue legal action against counterfeiters.
      • Educate stakeholders on anti-counterfeiting measures.
    `,
  },
  {
    id: 4,
    title: "Technology in Counterfeiting Prevention",
    description: "Advanced technologies like AI, blockchain, and holograms enhance detection and prevention of counterfeit goods.",
    category: "Technology Integration",
    detailedContent: `
      • AI tools scan e-commerce and social media for fakes.
      • Blockchain ensures product authenticity and traceability.
      • Holograms and RFID tags deter counterfeiting.
      • Real-time analytics identify counterfeiting patterns.
      • Integrates with global customs and IP databases.
      • Secures supply chains against counterfeit infiltration.
    `,
  },
  {
    id: 5,
    title: "Challenges of Anti-Counterfeiting",
    description: "Combating counterfeiting involves navigating complex supply chains, evolving technologies, and jurisdictional differences.",
    category: "Considerations",
    detailedContent: `
      • Sophisticated counterfeiting networks and technologies.
      • Variations in IP enforcement across jurisdictions.
      • High costs of comprehensive monitoring and enforcement.
      • Challenges in tracking online and cross-border counterfeits.
      • Need for collaboration with global authorities.
      • Risk of brand damage from undetected fakes.
    `,
  },
];

export default function AntiCounterfeitingMeasuresPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState<AntiCounterfeitingInfo | null>(null);

  const handleExploreClick = (info: AntiCounterfeitingInfo) => {
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
            Anti-Counterfeiting Measures
            <span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Defend Your Brand Globally
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
            <h2 className="text-3xl font-bold text-[#222831] mb-4">Combat Counterfeiting Effectively</h2>
            <p className="text-[#393E46]/80 mb-6">
              Counterfeiting poses a significant threat to brand integrity and consumer safety. At BrandSecure, our anti-counterfeiting measures combine advanced technology, legal expertise, and global enforcement to detect and eliminate counterfeit goods, protecting your IP and maintaining trust in your brand worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Anti-Counterfeiting Info Section */}
      <section className="py-16 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#222831] mb-4">Anti-Counterfeiting Essentials</h2>
            <div className="w-24 h-1 bg-[#00ADB5] mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {antiCounterfeitingInfo.map((info: AntiCounterfeitingInfo, index: number) => (
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

      {/* Key Services Section */}
      <section className="py-16 px-4 md:px-16 lg:px-24 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#222831] mb-4">Key Anti-Counterfeiting Services</h2>
            <div className="w-24 h-1 bg-[#00ADB5] mx-auto rounded-full"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">Market Monitoring</h3>
              <p className="text-[#393E46]/80">Track physical and online markets for counterfeit goods and IP misuse.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">Investigative Services</h3>
              <p className="text-[#393E46]/80">Conduct investigations to identify counterfeit sources and networks.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">Enforcement Actions</h3>
              <p className="text-[#393E46]/80">Issue takedowns, seizures, and legal actions against counterfeiters.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">Technology Integration</h3>
              <p className="text-[#393E46]/80">Use AI, blockchain, and holograms to prevent and detect counterfeits.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">Customs Collaboration</h3>
              <p className="text-[#393E46]/80">Work with global customs to intercept counterfeit goods at borders.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">Training and Awareness</h3>
              <p className="text-[#393E46]/80">Educate stakeholders on identifying and reporting counterfeits.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Anti-Counterfeiting Process Section */}
      <section className="py-16 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#222831] mb-4">How Anti-Counterfeiting Works</h2>
            <div className="w-24 h-1 bg-[#00ADB5] mx-auto rounded-full"></div>
          </motion.div>
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">1. Risk Assessment</h3>
              <p className="text-[#393E46]/80">Identify IP assets and markets at risk of counterfeiting.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">2. Monitoring Setup</h3>
              <p className="text-[#393E46]/80">Deploy tools to track counterfeits in markets and online platforms.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">3. Investigation</h3>
              <p className="text-[#393E46]/80">Investigate suspected counterfeiting activities and sources.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">4. Enforcement</h3>
              <p className="text-[#393E46]/80">Execute takedowns, seizures, or legal actions against counterfeiters.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">5. Prevention</h3>
              <p className="text-[#393E46]/80">Implement technologies and training to deter future counterfeiting.</p>
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
            <h2 className="text-4xl font-bold text-[#222831] mb-4">Who Can Benefit?</h2>
            <div className="w-24 h-1 bg-[#00ADB5] mx-auto rounded-full"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-[#222831] mb-3">Eligible Clients</h3>
            <ul className="text-[#393E46]/80 list-disc list-inside mb-6">
              <li>Businesses with valuable IP assets globally</li>
              <li>Brands in consumer goods, luxury, or tech sectors</li>
              <li>Companies facing counterfeiting in online or physical markets</li>
              <li>Multinationals seeking robust brand protection</li>
              <li>Startups expanding into high-risk markets</li>
            </ul>
            <h3 className="text-xl font-bold text-[#222831] mb-3">Requirements for Engagement</h3>
            <p className="text-[#393E46]/80 mb-4">Requirements vary by case but generally include:</p>
            <ul className="text-[#393E46]/80 list-disc list-inside">
              <li>Inventory of IP assets (trademarks, patents, etc.)</li>
              <li>Details of target markets or counterfeiting risks</li>
              <li>Business objectives for brand protection</li>
              <li>Documentation of existing IP registrations</li>
              <li>Engagement agreement for anti-counterfeiting services</li>
              <li>Proof of payment for service fees</li>
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
            <h2 className="text-4xl font-bold text-[#222831] mb-4">Ready to Fight Counterfeiting?</h2>
            <p className="text-[#393E46]/80 mb-6 max-w-2xl mx-auto">
              Partner with BrandSecure for expert anti-counterfeiting measures to protect your IP and brand from counterfeit threats worldwide. Start today.
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