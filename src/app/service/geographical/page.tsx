"use client"

import { motion } from "framer-motion"
import { Briefcase, FileCheck, Gavel, Search, Globe, BookOpen, Filter, X } from "lucide-react"
import Link from "next/link"
import { useState, useMemo } from "react"

export default function GeographicalIndicationPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [showFilters, setShowFilters] = useState(false)

  const serviceCards = [
    {
      icon: Briefcase,
      title: "GI Services",
      description: "Comprehensive support for all aspects of geographical indication protection and management.",
      slug: "gi-services",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=1400",
      category: "Services",
    },
    {
      icon: FileCheck,
      title: "GI Registration",
      description: "Assist in registering geographical indications to secure legal protection for regional products.",
      slug: "registration",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1400",
      category: "Registration",
    },
    {
      icon: Gavel,
      title: "GI Protection",
      description: "Safeguard geographical indications against misuse and unauthorized use.",
      slug: "protection",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=1400",
      category: "Enforcement",
    },
    {
      icon: Search,
      title: "GI Enforcement",
      description: "Enforce GI rights through legal actions to combat infringement and passing off.",
      slug: "enforcement",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80&w=1400",
      category: "Enforcement",
    },
    {
      icon: BookOpen,
      title: "GI Consultation",
      description: "Provide expert advice to strategize and optimize your GI portfolio.",
      slug: "consultation",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1400",
      category: "Consultation",
    },
    {
      icon: Globe,
      title: "International GI",
      description: "Manage global registration and protection of geographical indications worldwide.",
      slug: "international",
      image: "https://images.unsplash.com/photo-1505765050661-0b2f0c0c9b87?auto=format&fit=crop&q=80&w=1400",
      category: "International",
    },
  ]

  const categories = ["All", ...Array.from(new Set(serviceCards.map((s) => s.category)))]

  const filteredServices = useMemo(() => {
    const q = searchTerm.toLowerCase()
    return serviceCards.filter((service) => {
      const matchesSearch =
        service.title.toLowerCase().includes(q) ||
        service.description.toLowerCase().includes(q) ||
        service.category.toLowerCase().includes(q)
      const matchesCategory = selectedCategory === "All" || service.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  return (
    <div className="font-montserrat relative min-h-screen overflow-hidden bg-[#EEEEEE]">
      {/* HERO — large image with dark overlay (matches other pages) */}
      <section className="relative h-[75vh] md:h-[85vh] lg:h-[95vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&q=80&w=1600"
            alt="GI hero"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 mx-auto max-w-7xl h-full flex flex-col justify-center items-center text-center px-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight">
            Geographical Indications
          </h1>
          <p className="mt-6 max-w-3xl text-base sm:text-lg md:text-xl text-white/90 font-light">
            Protect your regional products — registration, enforcement and global protection.
          </p>
        </motion.div>
      </section>

      {/* Overview Section (white clipped block overlapping hero) */}
      <section className="relative bg-white px-4 py-28 md:px-16 lg:px-24">
        <div className="relative mx-auto max-w-7xl">
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative flex items-center">
              <div
                className="relative w-3/5 z-20 mr-[-120px] ml-[-80px]"
                style={{ filter: "drop-shadow(0 25px 80px rgba(0, 0, 0, 0.15))" }}
              >
                <div className="bg-white/98 p-10" style={{ clipPath: "polygon(0 0, calc(100% - 40px) 0, 100% 100%, 0 100%)" }}>
                  <div className="space-y-6">
                    <motion.h2
                      className="text-[#000000] text-4xl sm:text-5xl md:text-6xl font-extrabold px-4"
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7 }}
                      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                    >
                      GI Overview
                    </motion.h2>

                    <p className="text-lg leading-relaxed text-[#393E46]">
                      Geographical indications protect the reputation and unique qualities of region-specific products. We assist producers and associations with registration, enforcement and international protection strategies.
                    </p>

                    <p className="text-lg leading-relaxed text-[#393E46]">
                      Our services include prior-art checks, filing with local authorities, enforcement actions, licensing and cross-border protection.
                    </p>

                    <p className="text-lg font-medium text-[#393E46]">
                      📩 For tailored guidance, write to{" "}
                      <a href="mailto:info@leonardsolutions.in" className="text-[#00ADB5] hover:underline">
                        info@leonardsolutions.in
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative z-10 h-[480px] w-4/5">
                <div className="absolute inset-0">
                  <img
                    src="https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&q=80&w=1400"
                    alt="GI visual"
                    className="h-full w-full object-cover object-right"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================
          SERVICES SECTION — FULL-WIDTH BLACK (edge-to-edge)
         ========================= */}
      <section className="w-full bg-black text-[#EEEEEE]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16">
          {/* Heading */}
          <div className="mb-12 text-center">
            <motion.h3
              className="text-[#EEEEEE] text-4xl sm:text-5xl md:text-6xl font-extrabold"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our GI Services
            </motion.h3>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              Registration, protection, enforcement and international strategy for region-specific products.
            </p>
          </div>

          {/* Search & Filters */}
          <motion.div
            className="mb-10 space-y-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-300 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-800 bg-black/60 backdrop-blur-sm focus:border-[#00ADB5] focus:outline-none text-[#EEEEEE] placeholder-gray-400 text-lg shadow-sm"
                />
                {searchTerm && (
                  <button onClick={() => setSearchTerm("")} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-300 hover:text-gray-100">
                    <X className="h-5 w-5 text-white" />
                  </button>
                )}
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 px-6 py-3 bg-white/6 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-[#00ADB5] transition-colors"
              >
                <Filter className="h-5 w-5 text-[#00ADB5]" />
                <span className="text-[#EEEEEE] font-medium">Filter by Category</span>
              </button>

              <motion.div
                className={`flex flex-wrap justify-center gap-3 transition-all duration-300 ${showFilters ? "opacity-100 max-h-40" : "opacity-0 max-h-0 overflow-hidden"}`}
              >
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? "bg-[#00ADB5] text-white shadow-lg"
                        : "bg-white/6 text-[#EEEEEE] hover:bg-white/10 border border-gray-800"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </motion.div>
            </div>

            {/* Results counter */}
            <div className="text-center">
              <p className="text-gray-300">
                Showing <span className="font-bold text-[#00ADB5]">{filteredServices.length}</span> of <span className="font-bold">{serviceCards.length}</span> services
                {searchTerm && <span> for &quot;{searchTerm}&quot;</span>}
                {selectedCategory !== "All" && <span> in {selectedCategory}</span>}
              </p>
            </div>
          </motion.div>

          {/* Services Grid (image-backed tiles) */}
          <motion.div
            className="grid grid-cols-1 gap-8 px-2 sm:grid-cols-2 md:gap-10 lg:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {filteredServices.map((service, index) => (
              <Link
                key={service.title}
                href={`/service/geographical/${service.slug}`}
                className="group relative block"
                onMouseEnter={() => setHoveredCard(service.title)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <motion.div
                  className="relative h-96 overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/45 group-hover:bg-black/30 transition-colors duration-300" />
                  </div>

                  {/* Title & Category */}
                  <div className="absolute inset-0 flex flex-col justify-between p-6">
                    <div className="flex justify-between items-start">
                      <span className="px-3 py-1 text-xs rounded-full bg-white/90 text-gray-800">{service.category}</span>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/90 px-4 py-2 rounded-full text-sm font-medium text-[#222831]">Know more</div>
                      </div>
                    </div>

                    <div className="max-w-[85%]">
                      <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight drop-shadow-lg">{service.title}</h3>
                      <p className="mt-3 text-white/90 text-sm md:text-base leading-relaxed">{service.description}</p>
                    </div>
                  </div>

                  {/* Animated border */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#00ADB5] transition-colors duration-300" />
                </motion.div>
              </Link>
            ))}
          </motion.div>

          {/* No results message (dark styled) */}
          {filteredServices.length === 0 && (
            <motion.div className="text-center py-16" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-300 mb-4">No services found</h3>
              <p className="text-gray-400 mb-6">Try adjusting your search terms or filter criteria</p>
              <button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("All")
                }}
                className="px-6 py-3 bg-[#00ADB5] text-white rounded-xl hover:bg-[#00959c] transition-colors"
              >
                Clear All Filters
              </button>
            </motion.div>
          )}

          {/* Closing message inside black section */}
          <motion.div className="relative mx-auto mt-16 max-w-3xl px-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <div className="relative rounded-2xl py-12">
              <p className="text-center text-lg leading-relaxed text-[#eeeeee]">
                At Leonard Corporate Solutions, our GI services protect the reputation and value of your regional products through registration, enforcement and global strategy.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

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
  )
}
