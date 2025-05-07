"use client"

import { motion } from "framer-motion"
import { Briefcase, FileText, UserCheck, Package, Lock, Scale } from "lucide-react"
import Link from "next/link"

export default function LegalOfferings() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#EEEEEE] via-white to-[#EEEEEE]">
      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-r from-[#00ADB5] to-[#00959c] text-white py-16 px-4 md:px-16 lg:px-24 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-grid-white/[0.1]" />
        <div className="relative text-center mb-12 w-full">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative inline-block"
          >
            <span className="text-5xl md:text-6xl font-bold tracking-wider">
              <strong className="text-white mr-2 relative">
                LEGAL
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-white/20 rounded-full"></span>
              </strong>
              <span className="text-black">OFFERINGS</span>
            </span>
            <span className="absolute top-1/2 -left-16 -translate-y-1/2 text-white text-5xl hidden md:block animate-pulse">✦</span>
            <span className="absolute top-1/2 -right-16 -translate-y-1/2 text-white text-5xl hidden md:block animate-pulse">✦</span>
          </motion.div>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl mt-6 text-white/90 max-w-2xl mx-auto"
          >
            Tailored Legal Offerings for Your Business Needs
          </motion.p>
        </div>
      </motion.section>

      {/* Legal Offerings Section */}
      <section className="py-16 px-4 md:px-16 lg:px-24">
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
            </p>
            <p className="text-[#393E46] text-lg leading-relaxed mt-4">
              Contact us at{" "}
              <a href="mailto:contact@leonard.com" className="text-[#00ADB5] hover:underline">
                contact@leonard.com
              </a>{" "}
              for personalized assistance with your legal needs.
            </p>
          </motion.div>

          {/* Legal Offerings Cards */}
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center">
              <h2 className="text-4xl font-bold text-[#222831] mb-4">Our Legal Offerings</h2>
              <div className="w-24 h-1 bg-[#00ADB5] mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {legalOfferings.map((offering, index) => (
                <Link
                  key={offering.name}
                  href={offering.route}
                  className="group bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100/20"
                  aria-label={`Learn more about ${offering.name}`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.95)" }}
                    className="flex items-start gap-4"
                  >
                    <div className="bg-gradient-to-br from-[#00ADB5] to-[#00959c] p-3 rounded-lg text-white transform group-hover:scale-110 transition-transform duration-300">
                      <offering.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#222831] mb-2">{offering.name}</h3>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back to Home Link */}
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-8">
        <Link
          href="/"
          className="text-[#393E46] hover:text-[#00ADB5] transition-colors text-sm"
          aria-label="Navigate back to home page"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}

const legalOfferings = [
  { name: "Company Law And Legal Support", icon: Briefcase, route: "/company-law" },
  { name: "Commercial Contracts", icon: FileText, route: "/commercial-contracts" },
  { name: "Employment & HR Law", icon: UserCheck, route: "/employment-law" },
  { name: "Outsourcing & Procurement", icon: Package, route: "/outsourcing-procurement" },
  { name: "Privacy & Data Protection", icon: Lock, route: "/privacy-data-protection" },
  { name: "FSSAI Licensing", icon: Scale, route: "/fssai-licensing" },
]

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ")
}