"use client"

import { motion } from "framer-motion"
import { Scale, MessageSquare, FileText, FileCheck, Search, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function LegalOfferings() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const legalOfferings = [
    {
      name: "IP Litigation",
      icon: Scale,
      description: "Expert representation in intellectual property disputes to protect your rights.",
      route: "/service/legal/ip-litigation",
    },
    {
      name: "Legal Consultation",
      icon: MessageSquare,
      description: "Personalized legal advice to address your business’s unique challenges.",
      route: "/service/legal/consultation",
    },
    {
      name: "Contract Review",
      icon: FileText,
      description: "Thorough analysis of contracts to ensure compliance and safeguard interests.",
      route: "/service/legal/contract-review",
    },
    {
      name: "Legal Documentation",
      icon: FileCheck,
      description: "Professional drafting and preparation of legal documents for your needs.",
      route: "/service/legal/documentation",
    },
    {
      name: "Due Diligence",
      icon: Search,
      description: "Comprehensive investigations to support informed business decisions.",
      route: "/service/legal/due-diligence",
    },
    {
      name: "Legal Notices",
      icon: AlertTriangle,
      description: "Crafting and managing legal notices to enforce rights and obligations.",
      route: "/service/legal/notices",
    },
  ]

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
          backgroundSize: "30px 30px",
        }}
      />

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
            Legal Offerings
            <span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Tailored Legal Offerings for Your Business Needs
          </p>
        </motion.div>
      </motion.section>

      {/* Legal Offerings Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Offerings Overview */}
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-12 border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#222831] mb-6 relative">
              <span className="relative z-10">Offerings Overview</span>
              <span className="absolute bottom-0 left-0 h-3 w-20 bg-[#00ADB5]/20 -z-10"></span>
            </h2>
            <p className="text-[#393E46] text-lg leading-relaxed">
              We provide a wide range of legal offerings to support your business, ensuring compliance and strategic growth.
              Our services cover intellectual property disputes, legal consultations, contract analysis, document preparation,
              due diligence, and legal notices, tailored to meet your specific needs.
            </p>
            <p className="text-[#393E46] text-lg leading-relaxed mt-4">
              Contact us at{" "}
              <a href="mailto:info@leonardsolutions.in" className="text-[#00ADB5] hover:underline">
                info@leonardsolutions.in
              </a>{" "}
              for personalized assistance with your legal needs.
            </p>
          </motion.div>

          {/* Legal Offerings Cards */}
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-[#222831] mb-6 relative">
                <span className="relative z-10">Our Legal Offerings</span>
                <span className="absolute bottom-0 left-0 h-3 w-20 bg-[#00ADB5]/20 -z-10"></span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {legalOfferings.map((offering, index) => (
                <Link
                  key={offering.name}
                  href={offering.route}
                  data-testid={`legal-offering-link-${offering.name}`}
                  className="group relative"
                  onMouseEnter={() => setHoveredCard(offering.name)}
                  onMouseLeave={() => setHoveredCard(null)}
                  aria-label={`Learn more about ${offering.name}`}
                  onClick={() => console.log(`Navigating to ${offering.route}`)}
                >
                  <motion.div
                    className="h-full bg-white/80 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20 relative overflow-hidden"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex flex-col gap-4 relative z-10">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#00ADB5] to-[#00959c] rounded-lg flex items-center justify-center text-white">
                        <offering.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-[#222831] mb-2">{offering.name}</h3>
                        <p className="text-[#393E46]/80 text-sm md:text-base">{offering.description}</p>
                      </div>
                    </div>
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#00ADB5] to-[#00959c]"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back to Home Link */}
      <div className="container mx-auto px-4 sm:px-6 md:px-16 lg:px-24 py-8">
        <Link
          href="/"
          data-testid="back-to-home-link"
          className="inline-flex items-center text-[#393E46] hover:text-[#00ADB5] transition-colors"
          aria-label="Navigate back to home page"
          onClick={() => console.log("Navigating to /")}
        >
          <span className="mr-2">←</span> Back to Home
        </Link>
      </div>
    </div>
  )
}