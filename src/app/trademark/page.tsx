"use client"

import { motion } from "framer-motion"
import { FileText, Shield, Search } from "lucide-react"
import Link from "next/link"

export default function TrademarkPage() {
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
            <strong className="text-white mr-2">TRADEMARK</strong>
            SERVICES
          </span>
          <span className="absolute top-1/2 left-10 -translate-y-1/2 text-white text-5xl hidden md:block">✦</span>
          <span className="absolute top-1/2 right-10 -translate-y-1/2 text-white text-5xl hidden md:block">✦</span>
        </div>
      </motion.section>

      {/* Trademark Information Section */}
      <section className="py-12 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Trademark Overview */}
          <motion.div
            className="bg-white rounded-xl shadow-sm p-8 mb-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-[#222831] mb-4">Trademark Overview</h2>
            <p className="text-[#393E46] text-lg leading-relaxed">
              A trademark is a distinctive sign or symbol used to identify and protect your brand, products, or services.
              Registering a trademark ensures legal protection against unauthorized use and strengthens your brand identity.
              At Leonard Solutions, we provide comprehensive trademark services to safeguard your intellectual property.
            </p>
            <p className="text-[#393E46] text-lg leading-relaxed mt-4">
              Contact us at{" "}
              <a href="mailto:info@leonardsolutions.in" className="text-[#00ADB5] hover:underline">
                info@leonardsolutions.in
              </a>{" "}
              for personalized assistance with your trademark needs.
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
            <h2 className="text-2xl font-bold text-[#222831] mb-6">Our Trademark Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Trademark Search */}
              <motion.div
                className="flex items-start gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Search className="h-6 w-6 text-[#00ADB5] flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-[#222831]">Trademark Search</h3>
                  <p className="text-[#393E46] text-lg">
                    Conduct thorough searches to ensure your trademark is unique and available for registration.
                  </p>
                </div>
              </motion.div>
              {/* Trademark Registration */}
              <motion.div
                className="flex items-start gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <FileText className="h-6 w-6 text-[#00ADB5] flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-[#222831]">Trademark Registration</h3>
                  <p className="text-[#393E46] text-lg">
                    Assist with the complete registration process, from application to approval, ensuring compliance.
                  </p>
                </div>
              </motion.div>
              {/* Trademark Protection */}
              <motion.div
                className="flex items-start gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Shield className="h-6 w-6 text-[#00ADB5] flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-[#222831]">Trademark Protection</h3>
                  <p className="text-[#393E46] text-lg">
                    Monitor and enforce your trademark rights to prevent infringement and maintain brand integrity.
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