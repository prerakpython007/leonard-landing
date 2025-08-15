"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { X } from "lucide-react"

// Define the interface for Consulting info
interface ConsultingInfo {
  id: number
  title: string
  description: string
  category: string
  detailedContent: string
}

const consultingInfo: ConsultingInfo[] = [
  {
    id: 1,
    title: "What is Cross-Border Consulting?",
    description:
      "Cross-border brand and legal consulting provides strategic guidance for protecting and managing intellectual property across multiple jurisdictions.",
    category: "Consulting Basics",
    detailedContent: `• Covers trademarks, patents, copyrights, and designs.
      • Addresses legal compliance in multiple countries.
      • Assists with international IP portfolio management.
      • Offers expertise in global brand enforcement.
      • Navigates cross-border licensing and disputes.
      • Tailored strategies for businesses expanding globally.
    `,
  },
  {
    id: 2,
    title: "Benefits of Consulting Services",
    description:
      "Consulting services streamline global IP protection, reduce legal risks, and enhance brand value through expert strategies and compliance.",
    category: "Advantages",
    detailedContent: `• Minimizes risks of IP infringement globally.
      • Simplifies compliance with diverse national laws.
      • Enhances brand value through strategic protection.
      • Optimizes costs of international IP management.
      • Provides tailored solutions for market entry.
      • Strengthens enforcement against unauthorized use.
    `,
  },
  {
    id: 3,
    title: "Consulting Engagement Process",
    description:
      "The consulting process involves assessing client needs, developing strategies, and implementing solutions for global IP and brand protection.",
    category: "Process Guide",
    detailedContent: `• Initial consultation to understand business goals.
      • Comprehensive IP portfolio and risk assessment.
      • Develop tailored strategies for global protection.
      • Assist with filings, registrations, and compliance.
      • Monitor and enforce IP rights internationally.
      • Provide ongoing support and updates.
    `,
  },
  {
    id: 4,
    title: "Managing Global IP Portfolios",
    description:
      "Effective IP portfolio management ensures consistent protection, renewals, and enforcement across jurisdictions for sustained brand value.",
    category: "IP Management",
    detailedContent: `• Centralize tracking of IP assets globally.
      • Manage renewals and maintenance deadlines.
      • Monitor for infringements in key markets.
      • Coordinate licensing and assignment agreements.
      • Address disputes or oppositions promptly.
      • Align IP strategy with business objectives.
    `,
  },
  {
    id: 5,
    title: "Challenges of Cross-Border IP",
    description:
      "Cross-border IP management faces challenges like varying legal frameworks, enforcement difficulties, and high compliance costs.",
    category: "Considerations",
    detailedContent: `• Diverse IP laws and regulations across countries.
      • High costs for multi-jurisdictional filings.
      • Enforcement challenges in some jurisdictions.
      • Complexity of managing global licensing.
      • Risk of brand dilution without proper strategy.
      • Need for local expertise in key markets.
    `,
  },
]

export default function CrossBorderBrandLegalConsultingPage() {
  const [showPopup, setShowPopup] = useState(false)
  const [selectedInfo, setSelectedInfo] = useState<ConsultingInfo | null>(null)

  const handleExploreClick = (info: ConsultingInfo) => {
    setSelectedInfo(info)
    setShowPopup(true)
  }

  const closePopup = () => {
    setShowPopup(false)
    setSelectedInfo(null)
  }

  return (
    <div className="min-h-screen bg-[#EEEEEE] relative  font-sans overflow-hidden">
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
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1600&q=80)`,
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
            Cross-Border Consulting
            
          </h1>
          <p className="mt-8 text-xl text-white/90 max-w-2xl mx-auto font-light">
            Navigate Global IP with Expert Guidance
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
                      <span className="text-[#00ADB5]">Protect and Grow</span>{" "}
                      <span className="text-[#393E46]">Your Brand Globally</span>
                    </h2>
                    <p className="text-base sm:text-lg text-[#393E46] leading-relaxed">
                      Cross-border brand and legal consulting offers tailored solutions for businesses and creators to
                      protect their intellectual property (IP) and manage legal risks across international markets. At
                      BrandSecure, our expert team provides strategic guidance to ensure your brand thrives globally
                      while staying compliant with diverse legal frameworks.
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-[#393E46] text-lg font-medium mb-4">
                      📩 Contact us at{" "}
                      <a href="mailto:info@brandsecure.in" className="text-[#00ADB5] hover:underline">
                        info@brandsecure.in
                      </a>{" "}
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

      {/* Consulting Info Section */}
      <section className="py-32 px-4 md:px-16 bg-black lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#eeeeee]">Consulting</span> <span className="text-[#00ADB5]">Essentials</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 md:gap-12 px-2 sm:px-4 md:px-16">
            {consultingInfo.map((info: ConsultingInfo, index: number) => {
              const images = [
                "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=600&q=80",
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

      {/* Key Consulting Services Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-[#000000]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#eeeeee]">Key Consulting</span> <span className="text-[#00ADB5]">Services</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 md:gap-12 px-2 sm:px-4 md:px-16">
            {[
              {
                title: "Trademark Strategy",
                description:
                  "Develop strategies for global trademark registration and enforcement via systems like the Madrid Protocol.",
                category: "Strategy",
              },
              {
                title: "Patent Consulting",
                description:
                  "Guide patent filings through the PCT and national phases for robust invention protection.",
                category: "Patents",
              },
              {
                title: "Copyright Management",
                description: "Advise on copyright protection under the Berne Convention and voluntary registrations.",
                category: "Copyright",
              },
              {
                title: "Design Protection",
                description: "Support international design registrations through the Hague System for global coverage.",
                category: "Design",
              },
              {
                title: "IP Dispute Resolution",
                description:
                  "Provide legal support for resolving IP disputes, including oppositions and infringements.",
                category: "Legal",
              },
              {
                title: "Licensing and Contracts",
                description: "Draft and negotiate cross-border licensing agreements to maximize IP value.",
                category: "Contracts",
              },
            ].map((service, index) => {
              const images = [
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=600&q=80",
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

      {/* Engagement Process Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-black ">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#eeeeee]">How We</span> <span className="text-[#00ADB5]">Work with You</span>
            </h2>
          </div>
          <div className="flex flex-col gap-6 sm:gap-10 md:gap-12 px-2 sm:px-4 md:px-16">
            {[
              {
                step: "1. Initial Consultation",
                description: "Understand your business needs, IP assets, and global expansion goals.",
                category: "Step 1",
              },
              {
                step: "2. IP Assessment",
                description: "Conduct a thorough review of your IP portfolio and potential risks.",
                category: "Step 2",
              },
              {
                step: "3. Strategy Development",
                description: "Create a customized plan for IP protection and brand management globally.",
                category: "Step 3",
              },
              {
                step: "4. Implementation",
                description: "Execute filings, registrations, and enforcement actions as needed.",
                category: "Step 4",
              },
              {
                step: "5. Ongoing Support",
                description: "Provide continuous monitoring and updates to maintain IP protection.",
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
              <span className="text-[#222831]">Who Can</span> <span className="text-[#00ADB5]">Benefit?</span>
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
                <h3 className="text-xl font-bold text-white mb-3">Eligible Clients</h3>
                <ul className="text-[#e0e0e0] list-disc list-inside mb-6">
                  <li>Businesses expanding into international markets</li>
                  <li>Creators with IP assets like trademarks or designs</li>
                  <li>Startups seeking global brand protection</li>
                  <li>Corporations managing multi-jurisdictional IP portfolios</li>
                  <li>Individuals or entities involved in cross-border licensing</li>
                </ul>
                <h3 className="text-xl font-bold text-white mb-3">Requirements for Engagement</h3>
                <p className="text-[#e0e0e0] mb-4">Requirements vary by case but generally include:</p>
                <ul className="text-[#e0e0e0] list-disc list-inside">
                  <li>Details of existing IP assets (e.g., trademarks, patents)</li>
                  <li>Business goals and target markets</li>
                  <li>Documentation of ownership or licensing agreements</li>
                  <li>Information on prior IP filings or disputes</li>
                </ul>
              </div>
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300 pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>
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

      {/* Back to Home Link */}
      
    </div>
  )
}
