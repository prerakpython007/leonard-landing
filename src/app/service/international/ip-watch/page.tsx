'use client';

import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

// Define the interface for IP Watch info
interface IPWatchInfo {
  id: number;
  title: string;
  description: string;
  category: string;
  detailedContent: string;
}

const ipWatchInfo: IPWatchInfo[] = [
  {
    id: 1,
    title: "What are IP Watch Services?",
    description: "IP watch services monitor trademarks, patents, and other IP assets across jurisdictions to detect infringements and protect rights.",
    category: "Service Basics",
    detailedContent: `
      • Tracks IP registrations and applications globally.
      • Identifies potential infringements or unauthorized uses.
      • Monitors online platforms, marketplaces, and domains.
      • Provides real-time alerts for suspicious activities.
      • Supports enforcement actions to protect IP rights.
      • Covers trademarks, patents, copyrights, and designs.
    `,
  },
  {
    id: 2,
    title: "Benefits of IP Watch Services",
    description: "IP watch services safeguard brand integrity, prevent losses, and enhance enforcement efficiency in multiple jurisdictions.",
    category: "Advantages",
    detailedContent: `
      • Early detection of IP infringements globally.
      • Reduces financial losses from unauthorized use.
      • Strengthens brand reputation and market position.
      • Simplifies enforcement with timely evidence.
      • Minimizes risks of brand dilution or confusion.
      • Enhances compliance with international IP laws.
    `,
  },
  {
    id: 3,
    title: "IP Watch Process",
    description: "The process involves monitoring, analyzing, reporting, and enforcing IP rights across jurisdictions for comprehensive protection.",
    category: "Process Guide",
    detailedContent: `
      • Set up monitoring for specific IP assets.
      • Use advanced tools to scan global registries and markets.
      • Analyze findings for potential infringements.
      • Generate detailed reports with actionable insights.
      • Recommend enforcement strategies (e.g., cease-and-desist).
      • Provide ongoing updates and monitoring support.
    `,
  },
  {
    id: 4,
    title: "Technology in IP Monitoring",
    description: "Advanced AI and data analytics tools enhance the accuracy and efficiency of IP watch services across jurisdictions.",
    category: "Technology Integration",
    detailedContent: `
      • AI-powered tools scan registries and online platforms.
      • Real-time analytics identify infringement patterns.
      • Automated alerts for new filings or suspicious activities.
      • Monitors social media and e-commerce platforms.
      • Integrates with global IP databases for coverage.
      • Ensures data security for sensitive IP information.
    `,
  },
  {
    id: 5,
    title: "Challenges of IP Monitoring",
    description: "Monitoring IP across jurisdictions involves navigating diverse laws, high costs, and complex enforcement landscapes.",
    category: "Considerations",
    detailedContent: `
      • Variations in IP laws across jurisdictions.
      • High costs for comprehensive global monitoring.
      • Challenges in detecting online or cross-border infringements.
      • Complexity of enforcing rights in multiple countries.
      • Need for localized expertise in key markets.
      • Risk of delayed detection without robust tools.
    `,
  },
];

export default function IPWatchServicesMultipleJurisdictionsPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState<IPWatchInfo | null>(null);

  const handleExploreClick = (info: IPWatchInfo) => {
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
            IP Watch Services in Multiple Jurisdictions
            <span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Protect Your IP Globally
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
            <h2 className="text-3xl font-bold text-[#222831] mb-4">Safeguard Your IP Worldwide</h2>
            <p className="text-[#393E46]/80 mb-6">
              IP watch services are essential for businesses operating in multiple jurisdictions to protect their trademarks, patents, and other IP assets. At BrandSecure, we provide comprehensive monitoring and enforcement solutions to detect infringements, ensure compliance, and maintain brand integrity across global markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* IP Watch Info Section */}
      <section className="py-16 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#222831] mb-4">IP Watch Essentials</h2>
            <div className="w-24 h-1 bg-[#00ADB5] mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ipWatchInfo.map((info: IPWatchInfo, index: number) => (
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
            <h2 className="text-4xl font-bold text-[#222831] mb-4">Key IP Watch Services</h2>
            <div className="w-24 h-1 bg-[#00ADB5] mx-auto rounded-full"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">Trademark Monitoring</h3>
              <p className="text-[#393E46]/80">Track trademark filings and infringements across global registries and markets.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">Patent Surveillance</h3>
              <p className="text-[#393E46]/80">Monitor patent applications and infringements in key jurisdictions.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">Online IP Monitoring</h3>
              <p className="text-[#393E46]/80">Scan e-commerce, social media, and domains for unauthorized IP use.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">Enforcement Support</h3>
              <p className="text-[#393E46]/80">Assist with cease-and-desist letters and legal actions to protect IP.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">Customized Alerts</h3>
              <p className="text-[#393E46]/80">Provide real-time notifications for IP-related activities or threats.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">Reporting and Analytics</h3>
              <p className="text-[#393E46]/80">Deliver detailed reports with insights for strategic IP management.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* IP Watch Process Section */}
      <section className="py-16 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#222831] mb-4">How IP Watch Services Work</h2>
            <div className="w-24 h-1 bg-[#00ADB5] mx-auto rounded-full"></div>
          </motion.div>
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">1. Asset Identification</h3>
              <p className="text-[#393E46]/80">Identify and catalog IP assets for monitoring across jurisdictions.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">2. Monitoring Setup</h3>
              <p className="text-[#393E46]/80">Configure tools to track IP in registries, markets, and online platforms.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">3. Data Analysis</h3>
              <p className="text-[#393E46]/80">Analyze monitoring data to identify potential infringements or risks.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">4. Reporting</h3>
              <p className="text-[#393E46]/80">Provide detailed reports with findings and enforcement recommendations.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">5. Enforcement</h3>
              <p className="text-[#393E46]/80">Support legal actions to address infringements and protect IP rights.</p>
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
              <li>Businesses with IP assets in multiple jurisdictions</li>
              <li>Multinationals seeking global brand protection</li>
              <li>Startups expanding into international markets</li>
              <li>Companies operating in e-commerce or tech sectors</li>
              <li>Entities needing proactive IP enforcement</li>
            </ul>
            <h3 className="text-xl font-bold text-[#222831] mb-3">Requirements for Engagement</h3>
            <p className="text-[#393E46]/80 mb-4">Requirements vary by case but generally include:</p>
            <ul className="text-[#393E46]/80 list-disc list-inside">
              <li>Inventory of IP assets (trademarks, patents, etc.)</li>
              <li>Details of target jurisdictions for monitoring</li>
              <li>Business objectives and risk priorities</li>
              <li>Documentation of existing IP registrations</li>
              <li>Engagement agreement for watch services</li>
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
            <h2 className="text-4xl font-bold text-[#222831] mb-4">Ready to Protect Your IP Globally?</h2>
            <p className="text-[#393E46]/80 mb-6 max-w-2xl mx-auto">
              Partner with BrandSecure for expert IP watch services to monitor and protect your intellectual property across multiple jurisdictions. Start today.
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