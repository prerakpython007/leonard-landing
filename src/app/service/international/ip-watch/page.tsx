"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { X } from "lucide-react"

// Define the interface for IP Watch info
interface IPWatchInfo {
  id: number
  title: string
  description: string
  category: string
  detailedContent: string
}

const ipWatchInfo: IPWatchInfo[] = [
  {
    id: 1,
    title: "What are IP Watch Services?",
    description:
      "IP watch services monitor trademarks, patents, and other IP assets across jurisdictions to detect infringements and protect rights.",
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
    description:
      "IP watch services safeguard brand integrity, prevent losses, and enhance enforcement efficiency in multiple jurisdictions.",
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
    description:
      "The process involves monitoring, analyzing, reporting, and enforcing IP rights across jurisdictions for comprehensive protection.",
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
    description:
      "Advanced AI and data analytics tools enhance the accuracy and efficiency of IP watch services across jurisdictions.",
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
    description:
      "Monitoring IP across jurisdictions involves navigating diverse laws, high costs, and complex enforcement landscapes.",
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
]

export default function IPWatchServicesMultipleJurisdictionsPage() {
  const [showPopup, setShowPopup] = useState(false)
  const [selectedInfo, setSelectedInfo] = useState<IPWatchInfo | null>(null)

  const handleExploreClick = (info: IPWatchInfo) => {
    setSelectedInfo(info)
    setShowPopup(true)
  }

  const closePopup = () => {
    setShowPopup(false)
    setSelectedInfo(null)
  }

  return (
    <div className="min-h-screen bg-black relative font-sans overflow-hidden">
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
            style={{ scrollbarWidth: "thin", scrollbarColor: "#00ADB5 #222831" }}
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
            <h2 className="text-3xl font-bold text-[#222831] mb-6 border-b-2 border-[#00ADB5]/30 pb-2">
              {selectedInfo.title}
            </h2>
            <div className="text-[#393E46]/85 text-lg leading-relaxed">
              {selectedInfo.detailedContent.split("\n").map((line, index) => {
                line = line.trim()
                if (!line) return null
                return (
                  <p key={index} className="mb-2">
                    {line.startsWith("•") ? line : `• ${line}`}
                  </p>
                )
              })}
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Hero Section */}
      <motion.section
        className="relative h-[90vh] flex items-center justify-center px-4 md:px-16 lg:px-24 overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1600&q=80)`,
        }}
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
          <h1 className="text-6xl md:text-8xl font-extrabold text-white relative inline-block tracking-tight">
            IP Watch Services
          </h1>
          <p className="mt-8 text-xl text-white/90 max-w-2xl mx-auto font-light">Global IP Protection & Monitoring</p>
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
                      <span className="text-[#00ADB5]">Safeguard Your IP</span>{" "}
                      <span className="text-[#393E46]">Worldwide</span>
                    </h2>
                    <p className="text-base sm:text-lg text-[#393E46] leading-relaxed">
                      IP watch services are essential for businesses operating in multiple jurisdictions to protect
                      their trademarks, patents, and other IP assets. At BrandSecure, we provide comprehensive
                      monitoring and enforcement solutions to detect infringements, ensure compliance, and maintain
                      brand integrity across global markets.
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-[#393E46] text-lg font-medium mb-4">
                      📩 Contact us at{" "}
                      <a href="mailto:info@brandsecure.in" className="text-[#00ADB5] hover:underline">
                        info@brandsecure.in
                      </a>{" "}
                      to protect your IP today.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative z-10 h-[420px] w-full lg:w-2/5">
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1400"
                    alt="IP Watch services visual"
                    className="h-full w-full object-cover object-right"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* IP Watch Essentials Section */}
      <section className="py-32 px-4 md:px-16 bg-black lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#eeeeee]">IP Watch</span> <span className="text-[#00ADB5]">Essentials</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 md:gap-12 px-2 sm:px-4 md:px-16">
            {ipWatchInfo.map((info: IPWatchInfo, index: number) => {
              const images = [
                "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80",
              ]
              const bgImg = images[index % images.length]
              return (
                <motion.div
                  key={info.id}
                  className="group bg-cover bg-center p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-[#222]/40 hover:border-[#00ADB5] relative overflow-hidden"
                  style={{
                    borderRadius: 0,
                    backgroundImage: `linear-gradient(120deg, rgba(0,0,0,0.85) 80%, rgba(0,0,0,0.7)), url(${bgImg})`,
                    backgroundBlendMode: "multiply",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="flex flex-col gap-5 relative z-10">
                    <div
                      className="px-3 py-1 text-xs font-medium bg-white/10 text-white w-fit uppercase tracking-wider"
                      style={{ borderRadius: 0 }}
                    >
                      {info.category}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{info.title}</h3>
                    <p className="text-[#e0e0e0] text-base leading-relaxed">{info.description}</p>
                    <button
                      onClick={() => handleExploreClick(info)}
                      className="inline-flex items-center text-[#00ADB5] font-medium hover:text-white transition-colors duration-300 mt-4 cursor-pointer group"
                    >
                      Explore
                      <svg
                        className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300 pointer-events-none" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Key IP Watch Services Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-[#000000]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#eeeeee]">Key IP Watch</span> <span className="text-[#00ADB5]">Services</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 md:gap-12 px-2 sm:px-4 md:px-16">
            {[
              {
                title: "Trademark Monitoring",
                description: "Track trademark filings and infringements across global registries and markets.",
                category: "Monitoring",
              },
              {
                title: "Patent Surveillance",
                description: "Monitor patent applications and infringements in key jurisdictions.",
                category: "Surveillance",
              },
              {
                title: "Online IP Monitoring",
                description: "Scan e-commerce, social media, and domains for unauthorized IP use.",
                category: "Digital",
              },
              {
                title: "Enforcement Support",
                description: "Assist with cease-and-desist letters and legal actions to protect IP.",
                category: "Enforcement",
              },
              {
                title: "Customized Alerts",
                description: "Provide real-time notifications for IP-related activities or threats.",
                category: "Alerts",
              },
              {
                title: "Reporting and Analytics",
                description: "Deliver detailed reports with insights for strategic IP management.",
                category: "Analytics",
              },
            ].map((service, index) => {
              const images = [
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&q=80",
              ]
              const bgImg = images[index % images.length]
              return (
                <motion.div
                  key={service.title}
                  className="group bg-cover bg-center p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-[#222]/40 hover:border-[#00ADB5] relative overflow-hidden"
                  style={{
                    borderRadius: 0,
                    backgroundImage: `linear-gradient(120deg, rgba(0,0,0,0.85) 80%, rgba(0,0,0,0.7)), url(${bgImg})`,
                    backgroundBlendMode: "multiply",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="flex flex-col gap-5 relative z-10">
                    <div
                      className="px-3 py-1 text-xs font-medium bg-white/10 text-white w-fit uppercase tracking-wider"
                      style={{ borderRadius: 0 }}
                    >
                      {service.category}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-[#e0e0e0] text-base leading-relaxed">{service.description}</p>
                    <button className="inline-flex items-center text-[#00ADB5] font-medium hover:text-white transition-colors duration-300 mt-4 cursor-pointer group">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300 pointer-events-none" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* IP Watch Process Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#eeeeee]">How IP Watch</span> <span className="text-[#00ADB5]">Services Work</span>
            </h2>
          </div>
          <div className="flex flex-col gap-6 sm:gap-10 md:gap-12 px-2 sm:px-4 md:px-16">
            {[
              {
                step: "1. Asset Identification",
                description: "Identify and catalog IP assets for monitoring across jurisdictions.",
                category: "Step 1",
              },
              {
                step: "2. Monitoring Setup",
                description: "Configure tools to track IP in registries, markets, and online platforms.",
                category: "Step 2",
              },
              {
                step: "3. Data Analysis",
                description: "Analyze monitoring data to identify potential infringements or risks.",
                category: "Step 3",
              },
              {
                step: "4. Reporting",
                description: "Provide detailed reports with findings and enforcement recommendations.",
                category: "Step 4",
              },
              {
                step: "5. Enforcement",
                description: "Support legal actions to address infringements and protect IP rights.",
                category: "Step 5",
              },
            ].map((step, index) => {
              const images = [
                "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=600&q=80",
              ]
              const bgImg = images[index % images.length]
              return (
                <motion.div
                  key={step.step}
                  className="group bg-cover bg-center p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-[#222]/40 hover:border-[#00ADB5] relative overflow-hidden"
                  style={{
                    borderRadius: 0,
                    backgroundImage: `linear-gradient(120deg, rgba(0,0,0,0.85) 80%, rgba(0,0,0,0.7)), url(${bgImg})`,
                    backgroundBlendMode: "multiply",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="flex flex-col gap-5 relative z-10">
                    <div
                      className="px-3 py-1 text-xs font-medium bg-white/10 text-white w-fit uppercase tracking-wider"
                      style={{ borderRadius: 0 }}
                    >
                      {step.category}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{step.step}</h3>
                    <p className="text-[#e0e0e0] text-base leading-relaxed">{step.description}</p>
                    <button className="inline-flex items-center text-[#00ADB5] font-medium hover:text-white transition-colors duration-300 mt-4 cursor-pointer group">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300 pointer-events-none" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Eligibility and Requirements Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-[#000000]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#eeeeee]">Who Can</span> <span className="text-[#00ADB5]">Benefit?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 px-2 sm:px-4 md:px-16">
            <motion.div
              className="group bg-cover bg-center p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-[#222]/40 hover:border-[#00ADB5] relative overflow-hidden"
              style={{
                borderRadius: 0,
                backgroundImage: `linear-gradient(120deg, rgba(0,0,0,0.85) 80%, rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=600&q=80)`,
                backgroundBlendMode: "multiply",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -8 }}
            >
              <div className="flex flex-col gap-5 relative z-10">
                <div
                  className="px-3 py-1 text-xs font-medium bg-white/10 text-white w-fit uppercase tracking-wider"
                  style={{ borderRadius: 0 }}
                >
                  Eligibility
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Eligible Businesses</h3>
                <ul className="text-[#e0e0e0] list-disc list-inside mb-6">
                  <li>Businesses with IP assets in multiple jurisdictions</li>
                  <li>Multinationals seeking global brand protection</li>
                  <li>Startups expanding into international markets</li>
                  <li>Companies operating in e-commerce or tech sectors</li>
                  <li>Entities needing proactive IP enforcement</li>
                </ul>
                <h3 className="text-xl font-bold text-white mb-3">Requirements for Engagement</h3>
                <p className="text-[#e0e0e0] mb-4">Requirements vary by case but generally include:</p>
                <ul className="text-[#e0e0e0] list-disc list-inside">
                  <li>Inventory of IP assets (trademarks, patents, etc.)</li>
                  <li>Details of target jurisdictions for monitoring</li>
                  <li>Business objectives and risk priorities</li>
                  <li>Documentation of existing IP registrations</li>
                </ul>
              </div>
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300 pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-black relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Left Diagonal Image */}
          <div
            className="absolute left-0 top-0 w-[45%] h-full"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              clipPath: "polygon(0 0, 100% 0, 80% 100%, 0 100%)",
              opacity: 0.1,
            }}
          />

          {/* Right Diagonal Image */}
          <div
            className="absolute right-0 top-0 w-[45%] h-full"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%)",
              opacity: 0.1,
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
              <span className="text-[#00ADB5]">Your IP Globally?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#e0e0e0] leading-relaxed mb-8">
              Partner with BrandSecure for expert IP watch services to monitor and protect your intellectual property
              across multiple jurisdictions. Start today to ensure your brand's global security.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center px-8 py-4 bg-[#00ADB5] text-white font-medium hover:bg-[#222831] transition-colors duration-300 group"
              style={{ borderRadius: 0 }}
            >
              Get Started
              <svg
                className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Back to Home Link */}
      <div className="container mx-auto px-4 sm:px-6 md:px-16 lg:px-24 py-8">
        <Link href="/" className="inline-flex items-center text-[#393E46] hover:text-[#00ADB5] transition-colors">
          <span className="mr-2">←</span> Back to Home
        </Link>
      </div>
    </div>
  )
}
