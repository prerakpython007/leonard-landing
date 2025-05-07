"use client"

import { motion } from "framer-motion"
import { BookOpen, Briefcase, FileSearch, Gavel, Globe, Search, Shield, FileText } from "lucide-react"
import Link from "next/link"

export default function PatentPage() {
  return (
    <div className="min-h-screen bg-[#EEEEEE]">
      {/* Hero Section */}
      <motion.section
        className="bg-[#00ADB5] text-white py-8 px-4 md:px-16 lg:px-24 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative text-center mb-12 w-full">
          <span className="text-4xl font-bold text-[#222831] tracking-wider">
            <strong className="text-white mr-2">PATENT</strong>
            SERVICES
          </span>
          <span className="absolute top-1/2 left-10 -translate-y-1/2 text-white text-5xl hidden md:block">✦</span>
          <span className="absolute top-1/2 right-10 -translate-y-1/2 text-white text-5xl hidden md:block">✦</span>
        </div>
      </motion.section>

      {/* Patent Information Section */}
      <section className="py-12 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Patent Overview */}
          <motion.div
            className="bg-white rounded-xl shadow-sm p-8 mb-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-[#222831] mb-4">Patent Overview</h2>
            <p className="text-[#393E46] text-lg leading-relaxed">
              For many of our clients, their patent portfolio is their most important asset and is critical to their
              success. We are therefore proud to be recognized as a team of professionals with extensive technical depth
              and strategic expertise. Our recognized strength in patent law and our ability to provide superior service is
              the basis for our having prepared and filed more patent applications than any other firm in India and
              overseas. But our patent practice is not limited to acquiring patent rights. We recognize that obtaining
              strong patents without a developed strategy can result in both increased risks and missed opportunities.
            </p>
            <p className="text-[#393E46] text-lg leading-relaxed mt-4">
              Contact us at{" "}
              <a href="mailto:info@leonardsolutions.in" className="text-[#00ADB5] hover:underline">
                info@leonardsolutions.in
              </a>{" "}
              for personalized assistance with your patent needs.
            </p>
          </motion.div>

          {/* Our Services */}
          <motion.div
            className="bg-white rounded-xl shadow-sm p-8 mb-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-[#222831] mb-6">Our Patent Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Patentability, Infringement Validity Opinions */}
              <motion.div
                className="flex items-start gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <FileText className="h-6 w-6 text-[#00ADB5] flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-[#222831]">Patentability & Infringement Opinions</h3>
                  <p className="text-[#393E46] text-lg">
                    Provide expert opinions on patentability, infringement, and validity to guide your IP strategy.
                  </p>
                </div>
              </motion.div>
              {/* Clearance and Right to Use Opinions */}
              <motion.div
                className="flex items-start gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Shield className="h-6 w-6 text-[#00ADB5] flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-[#222831]">Clearance & Right to Use</h3>
                  <p className="text-[#393E46] text-lg">
                    Assess clearance and right-to-use to ensure your products avoid infringing existing patents.
                  </p>
                </div>
              </motion.div>
              {/* Prior Art Searching */}
              <motion.div
                className="flex items-start gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Search className="h-6 w-6 text-[#00ADB5] flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-[#222831]">Prior Art Searching</h3>
                  <p className="text-[#393E46] text-lg">
                    Conduct thorough prior art searches to support patent applications and avoid conflicts.
                  </p>
                </div>
              </motion.div>
              {/* Performing Patent Audits */}
              <motion.div
                className="flex items-start gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <BookOpen className="h-6 w-6 text-[#00ADB5] flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-[#222831]">Patent Audits</h3>
                  <p className="text-[#393E46] text-lg">
                    Perform comprehensive patent audits to evaluate and optimize your patent portfolio.
                  </p>
                </div>
              </motion.div>
              {/* Indian Patent Application Preparation and Filing */}
              <motion.div
                className="flex items-start gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <FileSearch className="h-6 w-6 text-[#00ADB5] flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-[#222831]">Indian Patent Filing</h3>
                  <p className="text-[#393E46] text-lg">
                    Prepare and file patent applications in India with precision and compliance.
                  </p>
                </div>
              </motion.div>
              {/* Filing and Prosecution Worldwide */}
              <motion.div
                className="flex items-start gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Globe className="h-6 w-6 text-[#00ADB5] flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-[#222831]">Global Patent Filing</h3>
                  <p className="text-[#393E46] text-lg">
                    Manage filing and prosecution of patents in the United States and worldwide.
                  </p>
                </div>
              </motion.div>
              {/* Patent Licensing */}
              <motion.div
                className="flex items-start gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Briefcase className="h-6 w-6 text-[#00ADB5] flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-[#222831]">Patent Licensing</h3>
                  <p className="text-[#393E46] text-lg">
                    Facilitate patent licensing agreements to maximize the value of your IP.
                  </p>
                </div>
              </motion.div>
              {/* Due Diligence in Commercial Transactions */}
              <motion.div
                className="flex items-start gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <FileText className="h-6 w-6 text-[#00ADB5] flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-[#222831]">Due Diligence</h3>
                  <p className="text-[#393E46] text-lg">
                    Conduct due diligence for commercial transactions involving patents.
                  </p>
                </div>
              </motion.div>
              {/* Patent Litigation */}
              <motion.div
                className="flex items-start gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Gavel className="h-6 w-6 text-[#00ADB5] flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-[#222831]">Patent Litigation</h3>
                  <p className="text-[#393E46] text-lg">
                    Represent clients in patent litigation to protect and enforce patent rights.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ")
}