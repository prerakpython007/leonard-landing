"use client"

import { motion } from "framer-motion"
import { BookOpen, Briefcase, FileText, Gavel, Globe, Shield, MapPin, FileCheck, Scale, UserCheck, Package, Lock } from "lucide-react"
import Link from "next/link"

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#EEEEEE] via-white to-[#EEEEEE]">
      {/* Hero Section */}
      <motion.section
        className="relative bg-[#222831] text-white py-24 px-4 md:px-16 lg:px-24 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative inline-block"
          >
            <h1 className="text-6xl md:text-7xl font-bold">
              Our Services
              <span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
              <span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
            </h1>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"/>
      </motion.section>

      {/* Services Grid */}
      <section className="py-20 px-4 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[...ipServices, ...otherServices].map((service, index) => (
              <Link
                key={service.name}
                href={service.route}
                className="group relative"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#00ADB5]/20"
                >
                  <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#00ADB5] to-[#00959c] rounded-lg flex items-center justify-center text-white">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#222831] mb-2">{service.name}</h3>
                      <p className="text-[#393E46]/70 text-sm">{service.description}</p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#00ADB5] to-[#00959c] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl"/>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Back to Home Link */}
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-8">
        <Link
          href="/"
          className="inline-flex items-center text-[#393E46] hover:text-[#00ADB5] transition-colors"
        >
          <span className="mr-2">←</span> Back to Home
        </Link>
      </div>
    </div>
  )
}

const ipServices = [
  { name: "Patents", icon: FileText, description: "Protect your inventions with robust patent strategies.", route: "service/patent" },
  { name: "Trademarks", icon: Shield, description: "Safeguard your brand identity with trademark registration.", route: "service/trademark" },
  { name: "Copyright", icon: BookOpen, description: "Secure your creative works with copyright protection.", route: "service/copyright" },
  { name: "Industrial Designs", icon: FileCheck, description: "Protect the aesthetic aspects of your products.", route: "service/industrial" },
  { name: "Geographical Indications", icon: MapPin, description: "Preserve the unique identity of regional products.", route: "service/geographical" },
  { name: "Anti-Counterfeiting", icon: Gavel, description: "Combat counterfeit goods to protect your brand.", route: "service/anti-counterfeiting" },
  { name: "Domain Name Law", icon: Globe, description: "Manage and protect your online presence.", route: "service/domain-name-law" },
]

const otherServices = [
  { name: "Company Law", icon: Briefcase, description: "Comprehensive legal support for corporate governance.", route: "service/company-law" },
  { name: "Commercial Contracts", icon: FileText, description: "Draft and review contracts to secure your business deals.", route: "service/commercial-contracts" },
  { name: "Employment & HR Law", icon: UserCheck, description: "Navigate employment laws for compliant HR practices.", route: "service/employment-law" },
  { name: "Outsourcing & Procurement", icon: Package, description: "Streamline outsourcing and procurement processes.", route: "service/outsourcing" },
  { name: "Privacy & Data Protection", icon: Lock, description: "Ensure compliance with data protection regulations.", route: "service/privacy" },
  { name: "FSSAI Licensing", icon: Scale, description: "Obtain FSSAI licenses for food safety compliance.", route: "service/fssai" },
]