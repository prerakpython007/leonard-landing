"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { X } from "lucide-react"

// Define the interface for Anti-Counterfeiting info
interface AntiCounterfeitingInfo {
  id: number
  title: string
  description: string
  category: string
  detailedContent: string
}

const antiCounterfeitingInfo: AntiCounterfeitingInfo[] = [
  {
    id: 1,
    title: "What are Anti-Counterfeiting Measures?",
    description:
      "Anti-counterfeiting measures protect IP by detecting, preventing, and enforcing against unauthorized use of trademarks, patents, and designs.",
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
    description:
      "Effective measures reduce financial losses, strengthen brand integrity, and enhance consumer safety across markets.",
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
    description:
      "The process involves monitoring, investigating, enforcing, and educating to combat counterfeiting effectively.",
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
    description:
      "Advanced technologies like AI, blockchain, and holograms enhance detection and prevention of counterfeit goods.",
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
    description:
      "Combating counterfeiting involves navigating complex supply chains, evolving technologies, and jurisdictional differences.",
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
]

export default function AntiCounterfeitingMeasuresPage() {
  const [showPopup, setShowPopup] = useState(false)
  const [selectedInfo, setSelectedInfo] = useState<AntiCounterfeitingInfo | null>(null)

  const handleExploreClick = (info: AntiCounterfeitingInfo) => {
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
            Anti-Counterfeiting Measures
          </h1>
          <p className="mt-8 text-xl text-white/90 max-w-2xl mx-auto font-light">Defend Your Brand Globally</p>
        </motion.div>
      </motion.section>

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
                      <span className="text-[#00ADB5]">Combat</span>{" "}
                      <span className="text-[#393E46]">Counterfeiting Effectively</span>
                    </h2>
                    <p className="text-base sm:text-lg text-[#393E46] leading-relaxed">
                      Counterfeiting threatens brand integrity and consumer safety. At BrandSecure, our
                      anti-counterfeiting measures combine advanced technology, legal expertise, and global enforcement
                      to detect and eliminate counterfeit goods, protecting your intellectual property and maintaining
                      trust in your brand worldwide.
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-[#393E46] text-lg font-medium mb-4">
                      📩 Contact us at{" "}
                      <a href="mailto:info@brandsecure.in" className="text-[#00ADB5] hover:underline">
                        info@brandsecure.in
                      </a>{" "}
                      to start protecting your brand today.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative z-10 h-[420px] w-full lg:w-2/5">
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1400"
                    alt="Anti-counterfeiting measures visual"
                    className="h-full w-full object-cover object-right"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-32 px-4 md:px-16 bg-black lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#eeeeee]">Anti-Counterfeiting</span>{" "}
              <span className="text-[#00ADB5]">Essentials</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 md:gap-12 px-2 sm:px-4 md:px-16">
            {antiCounterfeitingInfo.map((info: AntiCounterfeitingInfo, index: number) => {
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

      <section className="py-32 px-4 md:px-16 lg:px-24 bg-[#000000]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#eeeeee]">Key Anti-Counterfeiting</span>{" "}
              <span className="text-[#00ADB5]">Services</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 md:gap-12 px-2 sm:px-4 md:px-16">
            {[
              {
                title: "Market Monitoring",
                description: "Track physical and online markets for counterfeit goods and IP misuse.",
                category: "Monitoring",
              },
              {
                title: "Investigative Services",
                description: "Conduct investigations to identify counterfeit sources and networks.",
                category: "Investigation",
              },
              {
                title: "Enforcement Actions",
                description: "Issue takedowns, seizures, and legal actions against counterfeiters.",
                category: "Enforcement",
              },
              {
                title: "Technology Integration",
                description: "Use AI, blockchain, and holograms to prevent and detect counterfeits.",
                category: "Technology",
              },
              {
                title: "Customs Collaboration",
                description: "Work with global customs to intercept counterfeit goods at borders.",
                category: "Collaboration",
              },
              {
                title: "Training and Awareness",
                description: "Educate stakeholders on identifying and reporting counterfeits.",
                category: "Education",
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

      <section className="py-32 px-4 md:px-16 lg:px-24 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#eeeeee]">How Anti-Counterfeiting</span>{" "}
              <span className="text-[#00ADB5]">Works</span>
            </h2>
          </div>
          <div className="flex flex-col gap-6 sm:gap-10 md:gap-12 px-2 sm:px-4 md:px-16">
            {[
              {
                step: "1. Risk Assessment",
                description: "Identify IP assets and markets at risk of counterfeiting.",
                category: "Step 1",
              },
              {
                step: "2. Monitoring Setup",
                description: "Deploy tools to track counterfeits in markets and online platforms.",
                category: "Step 2",
              },
              {
                step: "3. Investigation",
                description: "Investigate suspected counterfeiting activities and sources.",
                category: "Step 3",
              },
              {
                step: "4. Enforcement",
                description: "Execute takedowns, seizures, or legal actions against counterfeiters.",
                category: "Step 4",
              },
              {
                step: "5. Prevention",
                description: "Implement technologies and training to deter future counterfeiting.",
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
                <h3 className="text-xl font-bold text-white mb-3">Eligible Clients</h3>
                <ul className="text-[#e0e0e0] list-disc list-inside mb-6">
                  <li>Businesses with valuable IP assets globally</li>
                  <li>Brands in consumer goods, luxury, or tech sectors</li>
                  <li>Companies facing counterfeiting in online or physical markets</li>
                  <li>Multinationals seeking robust brand protection</li>
                  <li>Startups expanding into high-risk markets</li>
                </ul>
                <h3 className="text-xl font-bold text-white mb-3">Requirements for Engagement</h3>
                <p className="text-[#e0e0e0] mb-4">Requirements vary by case but generally include:</p>
                <ul className="text-[#e0e0e0] list-disc list-inside">
                  <li>Inventory of IP assets (trademarks, patents, etc.)</li>
                  <li>Details of target markets or counterfeiting risks</li>
                  <li>Business objectives for brand protection</li>
                  <li>Documentation of existing IP registrations</li>
                  <li>Engagement agreement for anti-counterfeiting services</li>
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
              Ready to Fight <br />
              <span className="text-[#00ADB5]">Counterfeiting?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#e0e0e0] leading-relaxed mb-8">
              Partner with BrandSecure for expert anti-counterfeiting measures to protect your intellectual property and
              brand from counterfeit threats worldwide. Start today to safeguard your market presence.
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

      <div className="container mx-auto px-4 sm:px-6 md:px-16 lg:px-24 py-8">
        <Link href="/" className="inline-flex items-center text-[#393E46] hover:text-[#00ADB5] transition-colors">
          <span className="mr-2">←</span> Back to Home
        </Link>
      </div>
    </div>
  )
}
