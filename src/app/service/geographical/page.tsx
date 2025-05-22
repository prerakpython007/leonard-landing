"use client"

import { motion } from "framer-motion"
import { Briefcase, FileCheck, Gavel, Search, Globe, BookOpen } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function GeographicalIndicationPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const serviceCards = [
    {
      icon: Briefcase,
      title: "GI Services",
      description: "Comprehensive support for all aspects of geographical indication protection and management.",
      slug: "gi-services",
    },
    {
      icon: FileCheck,
      title: "GI Registration",
      description: "Assist in registering geographical indications to secure legal protection for regional products.",
      slug: "registration",
    },
    {
      icon: Gavel,
      title: "GI Protection",
      description: "Safeguard geographical indications against misuse and unauthorized use.",
      slug: "protection",
    },
    {
      icon: Search,
      title: "GI Enforcement",
      description: "Enforce GI rights through legal actions to combat infringement and passing off.",
      slug: "enforcement",
    },
    {
      icon: BookOpen,
      title: "GI Consultation",
      description: "Provide expert advice to strategize and optimize your GI portfolio.",
      slug: "consultation",
    },
    {
      icon: Globe,
      title: "International GI",
      description: "Manage global registration and protection of geographical indications worldwide.",
      slug: "international",
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
      <motion.section className="relative h-[80vh] flex items-center justify-center px-4 md:px-16 lg:px-24 overflow-hidden">
        {/* Corner Angles */}
        <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-[#00ADB5] hidden lg:block" />
        <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-[#00ADB5] hidden lg:block" />
        <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-[#00ADB5] hidden lg:block" />
        <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-[#00ADB5] hidden lg:block" />

        <motion.div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-extrabold text-[#222831] relative inline-block tracking-tight">
            Geographical Indications 
            <span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Protect Your Regional Products
          </p>
        </motion.div>
      </motion.section>

      {/* Main Content Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Overview */}
          <motion.div className="relative max-w-3xl mx-auto px-8">
            {/* Corner Angles */}
            <div className="absolute -top-8 -left-8 w-8 h-8 border-t-2 border-l-2 border-[#00ADB5]" />
            <div className="absolute -top-8 -right-8 w-8 h-8 border-t-2 border-r-2 border-[#00ADB5]" />
            <div className="absolute -bottom-8 -left-8 w-8 h-8 border-b-2 border-l-2 border-[#00ADB5]" />
            <div className="absolute -bottom-8 -right-8 w-8 h-8 border-b-2 border-r-2 border-[#00ADB5]" />

            <div className="text-center space-y-6">
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-[#00ADB5]">Our</span>{' '}
                <span className="text-[#393E46]">Geographical Indications (GI) Services</span>
              </h2>
              <p className="text-[#393E46] text-lg leading-relaxed">
                Protect and manage your regional products with our comprehensive GI services. From registration to international protection, we've got you covered.
              </p>
            </div>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center pt-32">
              <h2 className="text-3xl font-bold text-[#222831] mb-6 relative">
                <span className="relative z-10">Our Services</span>
                <span className="absolute bottom-0 left-0 h-3 w-20 bg-[#00ADB5]/20 -z-10"></span>
              </h2>
            </div>

            <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {serviceCards.map((service, index) => (
                <Link
                  key={service.title}
                  href={`/service/geographical/${service.slug}`}
                  className="group relative"
                  onMouseEnter={() => setHoveredCard(service.title)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <motion.div
                    className="h-full bg-white/80 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20 relative overflow-hidden"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="absolute top-4 right-4 text-[#00ADB5] text-xl opacity-30 group-hover:opacity-100 transition-opacity duration-300">✦</span>
                    <div className="flex flex-col group-hover:text-white gap-4 relative z-10">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#00ADB5] to-[#00959c] rounded-lg flex items-center justify-center text-white">
                        <service.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-[#222831] group-hover:text-[#00ADB5] transition-colors duration-300 mb-2">{service.title}</h3>
                        <p className="text-[#393E46]/80 text-sm md:text-base">{service.description}</p>
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

          {/* Back to Home Link */}
          <div className="container mx-auto px-4 sm:px-6 md:px-16 lg:px-24 py-8">
            <Link
              href="/"
              className="inline-flex items-center text-[#393E46] hover:text-[#00ADB5] transition-colors"
            >
              <span className="mr-2">←</span> Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}