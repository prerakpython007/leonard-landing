"use client"

import { motion } from "framer-motion"
import { Lock, FileText, Scale, Briefcase, Shield, Users, Globe } from "lucide-react"
import Link from "next/link"

export default function PrivacyDataProtectionPage() {
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
                PRIVACY & DATA
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-white/20 rounded-full"></span>
              </strong>
              <span className="text-black">PROTECTION</span>
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
            Expert Guidance for Data Protection Compliance
          </motion.p>
        </div>
      </motion.section>

      {/* Privacy and Data Protection Information Section */}
      <section className="py-16 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Privacy and Data Protection Overview */}
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-12 border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#222831] mb-6 relative">
              <span className="relative z-10">Privacy and Data Protection Overview</span>
              <span className="absolute bottom-0 left-0 h-3 w-20 bg-[#00ADB5]/20 -z-10"></span>
            </h2>
            <p className="text-[#393E46] text-lg leading-relaxed">
              LCS’s data protection experts have extensive experience helping clients navigate the complex landscape of data
              protection legislation. We have advised a diverse range of businesses on a wide array of privacy and data
              protection issues, ensuring compliance while supporting business growth. Our practical, risk-focused approach
              ensures that legal requirements do not hinder your operations.
            </p>
            <p className="text-[#393E46] text-lg leading-relaxed mt-4">
              Businesses have a legal obligation to ensure staff understand their responsibilities when handling personal
              information. We offer tailored data protection training workshops, using real-life examples from your business,
              suitable for everyone from junior sales staff to in-house counsel.
            </p>
            <p className="text-[#393E46] text-lg leading-relaxed mt-4">
              Contact us at{" "}
              <a href="mailto:info@leonardsolutions.in" className="text-[#00ADB5] hover:underline">
                info@leonardsolutions.in
              </a>{" "}
              for expert data protection and privacy law support.
            </p>
          </motion.div>

          {/* Key Areas of Expertise */}
          <motion.div
            className="space-y-12 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center">
              <h2 className="text-4xl font-bold text-[#222831] mb-4">Key Areas of Expertise</h2>
              <div className="w-24 h-1 bg-[#00ADB5] mx-auto rounded-full"></div>
            </div>

            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold text-[#222831] mb-4 flex items-center gap-2">
                <FileText className="h-6 w-6 text-[#00ADB5]" />
                Privacy and Compliance Services
              </h3>
              <ul className="text-[#393E46] text-lg leading-relaxed space-y-3">
                {[
                  "Drafting all manner of privacy policies.",
                  "Assisting various companies with regulations over the data processor obligations/clauses in contracts with its customers and suppliers.",
                  "Advising a company that provides ‘know your customer’ services on how to comply with the legislation.",
                  "Providing advice to a mobile virtual network operator regarding the legality of location-based services (prior to these becoming widely available).",
                  "Assisting numerous providers of e-commerce websites and SaaS comply with their obligations under data protection and privacy law.",
                  "Advising on cookies, behavioral advertising, and other marketing activities.",
                  "Advising multi-national corporations regarding their obligations in India and several other countries."
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
    icon: Lock,
    title: "Privacy Policy Drafting",
    description: "Craft comprehensive privacy policies tailored to your business."
  },
  {
    icon: FileText,
    title: "Data Processor Compliance",
    description: "Ensure contracts meet data processor obligations."
  },
  {
    icon: Scale,
    title: "Regulatory Advisory",
    description: "Navigate complex data protection laws with expert guidance."
  },
  {
    icon: Globe,
    title: "Global Compliance",
    description: "Advise on multi-national data protection obligations."
  },
  {
    icon: Shield,
    title: "E-commerce & SaaS Support",
    description: "Help e-commerce and SaaS providers meet privacy standards."
  },
  {
    icon: Users,
    title: "Staff Training Workshops",
    description: "Deliver tailored data protection training for all staff levels."
  }
]

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ")
}