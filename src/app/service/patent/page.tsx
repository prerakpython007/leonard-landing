"use client"

import { motion } from "framer-motion"
import { BookOpen, Briefcase, FileSearch, Gavel, Globe, Search, Shield, FileText } from "lucide-react"
import Link from "next/link"

export default function PatentPage() {
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
            <span className="text-5xl md:text-6xl font-bold text-[#222831] tracking-wider">
              <strong className="text-white mr-2 relative">
                PATENT
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-white/20 rounded-full"></span>
              </strong>
              SERVICES
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
            Protecting Your Innovations with Strategic Excellence
          </motion.p>
        </div>
      </motion.section>

      {/* Patent Information Section */}
      <section className="py-16 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Patent Overview */}
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-12 border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#222831] mb-6 relative">
              <span className="relative z-10">Patent Overview</span>
              <span className="absolute bottom-0 left-0 h-3 w-20 bg-[#00ADB5]/20 -z-10"></span>
            </h2>
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
    title: "Patentability & Infringement Opinions",
    description: "Expert opinions on patentability, infringement, and validity to guide your IP strategy."
  },
  {
    icon: Shield,
    title: "Clearance & Right to Use",
    description: "Assess clearance and right-to-use to ensure your products avoid infringing existing patents."
  },
  {
    icon: Search,
    title: "Prior Art Searching",
    description: "Conduct thorough prior art searches to support patent applications and avoid conflicts."
  },
  {
    icon: BookOpen,
    title: "Patent Audits",
    description: "Perform comprehensive patent audits to evaluate and optimize your patent portfolio."
  },
  {
    icon: FileSearch,
    title: "Indian Patent Filing",
    description: "Prepare and file patent applications in India with precision and compliance."
  },
  {
    icon: Globe,
    title: "Global Patent Filing",
    description: "Manage filing and prosecution of patents in the United States and worldwide."
  },
  {
    icon: Briefcase,
    title: "Patent Licensing",
    description: "Facilitate patent licensing agreements to maximize the value of your IP."
  },
  {
    icon: FileText,
    title: "Due Diligence",
    description: "Conduct due diligence for commercial transactions involving patents."
  },
  {
    icon: Gavel,
    title: "Patent Litigation",
    description: "Represent clients in patent litigation to protect and enforce patent rights."
  }
]

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ")
}