"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { X } from "lucide-react"

// Define the interface for Market Entry info
interface MarketEntryInfo {
  id: number
  title: string
  description: string
  category: string
  detailedContent: string
}

const marketEntryInfo: MarketEntryInfo[] = [
  {
    id: 1,
    title: "What is Market Entry Strategy?",
    description:
      "A market entry legal strategy for India involves tailored legal and IP solutions to ensure compliance and protection for foreign businesses.",
    category: "Strategy Basics",
    detailedContent: `
      • Addresses India’s regulatory and IP frameworks.
      • Ensures compliance with FDI policies and sectoral caps.
      • Protects trademarks, patents, and other IP assets.
      • Navigates corporate and tax laws for business setup.
      • Mitigates risks of non-compliance or infringement.
      • Supports seamless market entry and brand establishment.
    `,
  },
  {
    id: 2,
    title: "Benefits of Legal Strategy",
    description:
      "A robust legal strategy minimizes risks, ensures compliance, and strengthens IP protection for foreign businesses in India.",
    category: "Advantages",
    detailedContent: `
      • Simplifies compliance with Indian laws and regulations.
      • Protects IP assets from infringement or misuse.
      • Reduces legal and financial risks during market entry.
      • Enhances brand credibility in the Indian market.
      • Streamlines business setup and operations.
      • Supports long-term growth and market success.
    `,
  },
  {
    id: 3,
    title: "Market Entry Process",
    description:
      "The process involves assessing legal requirements, securing IP, setting up operations, and ensuring ongoing compliance in India.",
    category: "Process Guide",
    detailedContent: `
      • Assess regulatory and IP requirements for India.
      • Secure trademarks, patents, or copyrights as needed.
      • Choose the right business structure (e.g., LLP, subsidiary).
      • Obtain necessary approvals (e.g., FDI, FSSAI, RBI).
      • Establish operations with tax and labor compliance.
      • Monitor and enforce IP rights in the Indian market.
    `,
  },
  {
    id: 4,
    title: "IP Protection in India",
    description:
      "Protecting IP in India involves registering trademarks, patents, and designs while monitoring for infringements in a dynamic market.",
    category: "IP Management",
    detailedContent: `
      • Register trademarks with the Indian Trademark Office.
      • File patents via national or PCT routes.
      • Protect designs under the Designs Act, 2000.
      • Monitor for infringements in India’s competitive market.
      • Enforce IP rights through legal action if needed.
      • Leverage India’s IP laws for robust protection.
    `,
  },
  {
    id: 5,
    title: "Challenges of Market Entry",
    description:
      "Foreign businesses face challenges like complex regulations, cultural differences, and IP enforcement issues in India.",
    category: "Considerations",
    detailedContent: `
      • Complex and evolving regulatory environment.
      • Variations in state-level compliance requirements.
      • Cultural and language barriers in business operations.
      • Challenges in enforcing IP rights effectively.
      • High competition in India’s fast-growing market.
      • Need for local legal and market expertise.
    `,
  },
]

export default function MarketEntryLegalStrategyIndiaPage() {
  const [showPopup, setShowPopup] = useState(false)
  const [selectedInfo, setSelectedInfo] = useState<MarketEntryInfo | null>(null)

  const handleExploreClick = (info: MarketEntryInfo) => {
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
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1600&q=80)`,
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
            Market Entry India
          </h1>
          <p className="mt-8 text-xl text-white/90 max-w-2xl mx-auto font-light">Expert Legal Strategy for India</p>
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
                      <span className="text-[#00ADB5]">Succeed in India's</span>{" "}
                      <span className="text-[#393E46]">Dynamic Market</span>
                    </h2>
                    <p className="text-base sm:text-lg text-[#393E46] leading-relaxed">
                      Entering the Indian market requires navigating complex legal, regulatory, and IP landscapes. At
                      BrandSecure, we provide foreign businesses with tailored market entry legal strategies to ensure
                      compliance, protect intellectual property, and establish a strong foothold in India. Our expertise
                      helps you succeed in one of the world's fastest-growing economies.
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-[#393E46] text-lg font-medium mb-4">
                      📩 Contact us at{" "}
                      <a href="mailto:info@brandsecure.in" className="text-[#00ADB5] hover:underline">
                        info@brandsecure.in
                      </a>{" "}
                      to start your Indian journey today.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative z-10 h-[420px] w-full lg:w-2/5">
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1400"
                    alt="Market entry India visual"
                    className="h-full w-full object-cover object-right"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Market Entry Info Section */}
      <section className="py-32 px-4 md:px-16 bg-black lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#eeeeee]">Market Entry</span> <span className="text-[#00ADB5]">Essentials</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 md:gap-12 px-2 sm:px-4 md:px-16">
            {marketEntryInfo.map((info: MarketEntryInfo, index: number) => {
              const images = [
                "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80",
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

      {/* Key Legal Services Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-[#000000]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#eeeeee]">Key Legal</span> <span className="text-[#00ADB5]">Services</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 md:gap-12 px-2 sm:px-4 md:px-16">
            {[
              {
                title: "IP Registration",
                description: "Secure trademarks, patents, and designs with India's IP offices for robust protection.",
                category: "Registration",
              },
              {
                title: "FDI Compliance",
                description: "Navigate India's FDI policies and sectoral regulations for smooth investment.",
                category: "Compliance",
              },
              {
                title: "Business Setup",
                description: "Establish LLPs, subsidiaries, or joint ventures with full legal compliance.",
                category: "Setup",
              },
              {
                title: "Tax and Labor Compliance",
                description: "Ensure adherence to GST, corporate tax, and labor laws for operations.",
                category: "Compliance",
              },
              {
                title: "Contract Drafting",
                description: "Draft compliant agreements for partnerships, licensing, and distribution.",
                category: "Contracts",
              },
              {
                title: "Dispute Resolution",
                description: "Provide legal support for resolving IP or commercial disputes in India.",
                category: "Resolution",
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

      {/* Market Entry Process Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#eeeeee]">How to Enter</span>{" "}
              <span className="text-[#00ADB5]">the Indian Market</span>
            </h2>
          </div>
          <div className="flex flex-col gap-6 sm:gap-10 md:gap-12 px-2 sm:px-4 md:px-16">
            {[
              {
                step: "1. Market and Legal Assessment",
                description: "Evaluate India's regulatory, IP, and market requirements for your business.",
                category: "Step 1",
              },
              {
                step: "2. IP Protection",
                description: "Register trademarks, patents, or designs to safeguard your brand in India.",
                category: "Step 2",
              },
              {
                step: "3. Business Structure Setup",
                description: "Establish a compliant business entity, such as an LLP or subsidiary.",
                category: "Step 3",
              },
              {
                step: "4. Regulatory Approvals",
                description: "Obtain necessary approvals, including FDI, tax, or sector-specific licenses.",
                category: "Step 4",
              },
              {
                step: "5. Ongoing Compliance",
                description: "Maintain compliance with IP, tax, and labor laws for sustained operations.",
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
                  <li>Foreign companies planning to enter the Indian market</li>
                  <li>Businesses with IP assets requiring protection in India</li>
                  <li>Multinationals seeking FDI or joint ventures in India</li>
                  <li>Startups targeting India's consumer or tech markets</li>
                  <li>Entities needing compliance with Indian regulations</li>
                </ul>
                <h3 className="text-xl font-bold text-white mb-3">Requirements for Engagement</h3>
                <p className="text-[#e0e0e0] mb-4">Requirements vary by case but generally include:</p>
                <ul className="text-[#e0e0e0] list-disc list-inside">
                  <li>Details of business objectives and IP assets</li>
                  <li>Information on target sectors and market entry plans</li>
                  <li>Documentation for IP registration (if applicable)</li>
                  <li>Details of proposed business structure in India</li>
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
              backgroundImage: `url(https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80)`,
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
              backgroundImage: `url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80)`,
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
              Ready to Enter <br />
              <span className="text-[#00ADB5]">the Indian Market?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#e0e0e0] leading-relaxed mb-8">
              Partner with BrandSecure for expert legal strategies to navigate India's regulatory and IP landscape,
              ensuring a successful market entry. Start today to establish your brand in one of the world's
              fastest-growing economies.
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
