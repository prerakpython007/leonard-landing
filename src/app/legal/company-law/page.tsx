"use client"

import { motion } from "framer-motion"
import { Briefcase, FileText, Scale, FileCheck, Building, Users, Shield } from "lucide-react"
import Link from "next/link"

export default function CompanyLawPage() {
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
                COMPANY LAW
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-white/20 rounded-full"></span>
              </strong>
              <span className="text-black">SERVICES</span>
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
            Comprehensive Legal Support for Corporate Governance
          </motion.p>
        </div>
      </motion.section>

      {/* Company Law Information Section */}
      <section className="py-16 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Company Law Overview */}
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-12 border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#222831] mb-6 relative">
              <span className="relative z-10">Company Law Overview</span>
              <span className="absolute bottom-0 left-0 h-3 w-20 bg-[#00ADB5]/20 -z-10"></span>
            </h2>
            <p className="text-[#393E46] text-lg leading-relaxed">
              We offer expert compliance and advisory services for company law matters, Securities and Exchange Board of
              India (SEBI) regulations, and other corporate laws. Our services include representation before the Registrar
              of Companies and other authorities, as well as the preparation of various commercial and legal documentation.
              From incorporation to dissolution, we provide end-to-end support to ensure your business operates within the
              legal framework.
            </p>
            <p className="text-[#393E46] text-lg leading-relaxed mt-4">
              Contact us at{" "}
              <a href="mailto:info@leonardsolutions.in" className="text-[#00ADB5] hover:underline">
                info@leonardsolutions.in
              </a>{" "}
              for tailored assistance with your corporate legal needs.
            </p>
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
    icon: Building,
    title: "Company Incorporation",
    description: "Incorporate companies and LLPs in India and abroad with seamless compliance."
  },
  {
    icon: FileCheck,
    title: "Entity Conversion",
    description: "Convert companies or partnerships into LLPs and vice versa efficiently."
  },
  {
    icon: FileText,
    title: "Regulatory Filings",
    description: "Handle e-filing of documents and returns with regulatory authorities."
  },
  {
    icon: Shield,
    title: "Secretarial Compliance",
    description: "Ensure compliance with secretarial records and regulatory requirements."
  },
  {
    icon: Users,
    title: "Corporate Meetings",
    description: "Organize and conduct board and shareholder meetings with legal compliance."
  },
  {
    icon: Scale,
    title: "Mergers & Acquisitions",
    description: "Provide advisory for mergers, amalgamations, and joint ventures."
  },
  {
    icon: Briefcase,
    title: "Compliance Audits",
    description: "Design legal compliance frameworks and conduct thorough audits."
  }
]

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ")
}