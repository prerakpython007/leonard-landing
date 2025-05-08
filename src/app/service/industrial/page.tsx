"use client"

import { motion } from "framer-motion"
import { Brush, FileText, Shield, Scale, FileCheck, Briefcase } from "lucide-react"
import Link from "next/link"

export default function IndustrialDesignPage() {
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
                INDUSTRIAL
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-white/20 rounded-full"></span>
              </strong>
              <span className="text-black">DESIGN</span>
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
            Protecting the Aesthetic Value of Your Creations
          </motion.p>
        </div>
      </motion.section>

      {/* Industrial Design Information Section */}
      <section className="py-16 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Industrial Design Overview */}
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-12 border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#222831] mb-6 relative">
              <span className="relative z-10">Industrial Design Overview</span>
              <span className="absolute bottom-0 left-0 h-3 w-20 bg-[#00ADB5]/20 -z-10"></span>
            </h2>
            <p className="text-[#393E46] text-lg leading-relaxed">
              Recognizing the importance of protecting the aesthetic features of useful articles, our industrial designs
              group specializes in the preparation, filing, and enforcement of industrial design applications and
              registrations in India and their equivalents abroad. Our professionals work closely with creators and
              in-house draftspersons to accurately capture and creatively protect new designs, maximizing their value.
            </p>
            <p className="text-[#393E46] text-lg leading-relaxed mt-4">
              Our team also understands the complex interplay between industrial design law and other forms of
              intellectual property. This expertise allows us to collaborate with our patent, copyright, and trademark
              practice groups to provide comprehensive legal advice and secure cost-effective, timely protection for our
              clients' products.
            </p>
            <p className="text-[#393E46] text-lg leading-relaxed mt-4">
              Contact us at{" "}
              <a href="mailto:info@leonardsolutions.in" className="text-[#00ADB5] hover:underline">
                info@leonardsolutions.in
              </a>{" "}
              for tailored assistance with your industrial design needs.
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
    icon: FileCheck,
    title: "Design Application Filing",
    description: "Prepare and file industrial design applications in India and internationally with precision."
  },
  {
    icon: Brush,
    title: "Design Creation Support",
    description: "Collaborate with creators and draftspersons to accurately capture and protect innovative designs."
  },
  {
    icon: Shield,
    title: "Design Enforcement",
    description: "Enforce industrial design registrations to safeguard your aesthetic creations from infringement."
  },
  {
    icon: Scale,
    title: "IP Interplay Expertise",
    description: "Navigate the overlap of industrial design, patents, copyrights, and trademarks for comprehensive protection."
  },
  {
    icon: FileText,
    title: "Legal Advisory",
    description: "Provide tailored legal advice to secure cost-effective and timely protection for your designs."
  },
  {
    icon: Briefcase,
    title: "Portfolio Management",
    description: "Manage and optimize your industrial design portfolio to maximize value and protection."
  }
]

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ")
}