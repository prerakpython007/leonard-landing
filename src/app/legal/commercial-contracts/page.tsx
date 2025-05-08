"use client"

import { motion } from "framer-motion"
import { FileText, Scale, Briefcase, Shield, Users, FileCheck, PenTool } from "lucide-react"
import Link from "next/link"

export default function CommercialContractsPage() {
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
                COMMERCIAL
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-white/20 rounded-full"></span>
              </strong>
              <span className="text-black">CONTRACTS</span>
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
            Expert Drafting and Negotiation for Your Business Agreements
          </motion.p>
        </div>
      </motion.section>

      {/* Commercial Contracts Information Section */}
      <section className="py-16 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Commercial Contracts Overview */}
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-12 border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#222831] mb-6 relative">
              <span className="relative z-10">Commercial Contracts Overview</span>
              <span className="absolute bottom-0 left-0 h-3 w-20 bg-[#00ADB5]/20 -z-10"></span>
            </h2>
            <p className="text-[#393E46] text-lg leading-relaxed">
              In need of commercial contract advice? We draft, advise on, and negotiate all manner of commercial contracts.
              While we have extensive expertise in specific industry sectors, many of the contracts we draft daily are
              applicable across all industries. Our services also include dispute resolution for alleged breaches of
              commercial contracts, offering assistance with settlements, small claims, and High Court litigation.
            </p>
            <p className="text-[#393E46] text-lg leading-relaxed mt-4">
              There is some crossover between commercial contracts and other work we do, such as Shareholders Agreements,
              Partnership and LLP Agreements, and Business Sale and Acquisition Agreements, which typically fall under
              corporate work, or contracts related to employment law.
            </p>
            <p className="text-[#393E46] text-lg leading-relaxed mt-4">
              Contact us at{" "}
              <a href="mailto:info@leonardsolutions.in" className="text-[#00ADB5] hover:underline">
                info@leonardsolutions.in
              </a>{" "}
              for tailored assistance with your commercial contract needs.
            </p>
          </motion.div>

          {/* Contract Types Section */}
          <motion.div
            className="space-y-12 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center">
              <h2 className="text-4xl font-bold text-[#222831] mb-4">Types of Contracts</h2>
              <div className="w-24 h-1 bg-[#00ADB5] mx-auto rounded-full"></div>
            </div>

            {/* Contracts for Services */}
            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold text-[#222831] mb-4 flex items-center gap-2">
                <FileText className="h-6 w-6 text-[#00ADB5]" />
                Contracts for Services
              </h3>
              <ul className="text-[#393E46] text-lg leading-relaxed space-y-3">
                {[
                  "Consultancy Agreements (fixed price and/or time & materials), also referred to as Services Agreements, Sub-contractor Agreements, and Supplier Agreements.",
                  "Master Services Agreements, also referred to as Framework Agreements or Call-off Agreements.",
                  "Subscription Service Agreements, which can include Software Platform as a Service or Application Service Provider Agreements."
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-2 group"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <span className="h-2 w-2 rounded-full bg-[#00ADB5] mt-2 flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contracts for Resale and Distribution */}
            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold text-[#222831] mb-4 flex items-center gap-2">
                <Briefcase className="h-6 w-6 text-[#00ADB5]" />
                Contracts for Resale and Distribution
              </h3>
              <ul className="text-[#393E46] text-lg leading-relaxed space-y-3">
                {[
                  "Reseller Agreements",
                  "Distribution Agreements",
                  "Lead-referral Agreements",
                  "Licensing Agreements, including data aggregation",
                  "Partnering Agreements",
                  "White-label Agreements",
                  "Joint Marketing Agreements",
                  "Agency Agreements",
                  "Value Added Reseller Agreements (“VAR”)",
                  "OEM Agreements"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-2 group"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <span className="h-2 w-2 rounded-full bg-[#00ADB5] mt-2 flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Pre-contractual Documents and Other Agreements */}
            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold text-[#222831] mb-4 flex items-center gap-2">
                <FileCheck className="h-6 w-6 text-[#00ADB5]" />
                Pre-contractual Documents and Other Agreements
              </h3>
              <ul className="text-[#393E46] text-lg leading-relaxed space-y-3">
                {[
                  "Non-disclosure Agreements (also known as “NDAs” and “confidentiality agreements”)",
                  "Memoranda of Understanding",
                  "Letters of Intent",
                  "Franchise Agreements",
                  "Joint Venture Agreements",
                  "Marketing and Sponsorship Agreements"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-2 group"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <span className="h-2 w-2 rounded-full bg-[#00ADB5] mt-2 flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Our Services */}
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center">
              <h2 className="text-4xl font-bold text-[#222831] mb-4">Our Services</h2>
              <div className="w-24 h-1 bg-[#00ADB5] mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCards.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="group bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.95)" }}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-[#00ADB5] to-[#00959c] p-3 rounded-lg text-white transform group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#222831] mb-2">{service.title}</h3>
                      <p className="text-[#393E46]/80">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

const serviceCards = [
  {
    icon: FileText,
    title: "Contract Drafting",
    description: "Draft precise and tailored commercial contracts for various industries."
  },
  {
    icon: PenTool,
    title: "Contract Negotiation",
    description: "Negotiate terms to secure favorable agreements for your business."
  },
  {
    icon: Scale,
    title: "Dispute Resolution",
    description: "Resolve contract disputes through settlement or litigation support."
  },
  {
    icon: Briefcase,
    title: "Industry-Specific Expertise",
    description: "Leverage our deep knowledge in specific sectors for customized contracts."
  },
  {
    icon: Shield,
    title: "Pre-contractual Agreements",
    description: "Prepare NDAs, MOUs, and Letters of Intent to protect your interests."
  },
  {
    icon: Users,
    title: "Cross-disciplinary Support",
    description: "Integrate corporate and employment law expertise for comprehensive contracts."
  }
]

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ")
}