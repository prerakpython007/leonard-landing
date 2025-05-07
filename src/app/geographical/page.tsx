"use client"

import { motion } from "framer-motion"
import { Briefcase, FileCheck, Gavel, Search } from "lucide-react"
import Link from "next/link"

export default function GeographicalIndicationPage() {
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
            <strong className="text-white mr-2">GEOGRAPHICAL INDICATION</strong>
            SERVICES
          </span>
          <span className="absolute top-1/2 left-10 -translate-y-1/2 text-white text-5xl hidden md:block">✦</span>
          <span className="absolute top-1/2 right-10 -translate-y-1/2 text-white text-5xl hidden md:block">✦</span>
        </div>
      </motion.section>

      {/* Geographical Indication Information Section */}
      <section className="py-12 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Geographical Indication Overview */}
          <motion.div
            className="bg-white rounded-xl shadow-sm p-8 mb-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-[#222831] mb-4">Geographical Indication Overview</h2>
            <p className="text-[#393E46] text-lg leading-relaxed">
              Our company deals in all aspects of geographical indications. We conduct search and due diligence; assist
              clients in registration of geographical indications and renewal. We draft sale, purchase and license
              agreements for geographical indications and related documents. Our law firm represents clients in
              infringement proceedings and passing off actions.
            </p>
            <p className="text-[#393E46] text-lg leading-relaxed mt-4">
              Contact us at{" "}
              <a href="mailto:info@leonardsolutions.in" className="text-[#00ADB5] hover:underline">
                info@leonardsolutions.in
              </a>{" "}
              for personalized assistance with your geographical indication needs.
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
            <h2 className="text-2xl font-bold text-[#222831] mb-6">Our Geographical Indication Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* GI Search and Due Diligence */}
              <motion.div
                className="flex items-start gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Search className="h-6 w-6 text-[#00ADB5] flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-[#222831]">GI Search & Due Diligence</h3>
                  <p className="text-[#393E46] text-lg">
                    Conduct thorough searches and due diligence to ensure the validity of geographical indications.
                  </p>
                </div>
              </motion.div>
              {/* GI Registration and Renewal */}
              <motion.div
                className="flex items-start gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <FileCheck className="h-6 w-6 text-[#00ADB5] flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-[#222831]">GI Registration & Renewal</h3>
                  <p className="text-[#393E46] text-lg">
                    Assist clients in registering and renewing geographical indications for legal protection.
                  </p>
                </div>
              </motion.div>
              {/* GI Licensing and Agreements */}
              <motion.div
                className="flex items-start gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Briefcase className="h-6 w-6 text-[#00ADB5] flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-[#222831]">GI Licensing & Agreements</h3>
                  <p className="text-[#393E46] text-lg">
                    Draft sale, purchase, and license agreements for geographical indications.
                  </p>
                </div>
              </motion.div>
              {/* GI Infringement and Passing Off */}
              <motion.div
                className="flex items-start gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Gavel className="h-6 w-6 text-[#00ADB5] flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-[#222831]">GI Infringement & Passing Off</h3>
                  <p className="text-[#393E46] text-lg">
                    Represent clients in infringement proceedings and passing off actions to protect GI rights.
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