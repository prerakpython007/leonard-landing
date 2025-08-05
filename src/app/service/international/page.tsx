"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  FileText,
  Gavel,
  Shield,
  Globe as LucideGlobe,
  UserCheck,
  Package,
  Lock,
  Scale,
  PenTool,
  Watch,
  Truck,
  AlertTriangle,
  Search,
  Filter,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState, useMemo } from "react";
import { Globe } from "~/_components/ui/globe";

export default function InternationalServices() {
  // fixed: properly name hovered state variable
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const internationalServices = [
    {
      name: "International Trademark Filing",
      icon: Shield,
      description:
        "File trademarks via Madrid Protocol or national filings in USA, EU, UK, UAE, Australia, and more.",
      route: "service/international/trademark-filing",
      category: "Intellectual Property",
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "International Patent Filing",
      icon: PenTool,
      description:
        "File global patents via PCT applications and handle national phase entries efficiently.",
      route: "service/international/patent-filing",
      category: "Intellectual Property",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "Global Copyright Protection",
      icon: BookOpen,
      description: "Secure your work internationally under the Berne Convention.",
      route: "service/international/copyright-protection",
      category: "Intellectual Property",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "International Design Protection",
      icon: Scale,
      description: "File under the Hague Agreement for international industrial design rights.",
      route: "service/international/design-protection",
      category: "Intellectual Property",
      image:
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "IP & Legal Consulting Across Borders",
      icon: LucideGlobe, // use lucide globe icon (not the canvas Globe)
      description: "Strategic advisory for multinational IP portfolios, licensing, and market entry strategies.",
      route: "service/international/ip-legal-consulting",
      category: "Consulting",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "IP Watch Services",
      icon: Watch,
      description: "Monitor and protect trademarks, patents, and designs across jurisdictions.",
      route: "service/international/ip-watch",
      category: "Monitoring",
      image:
        "https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "Anti-Counterfeiting for Exporters",
      icon: AlertTriangle,
      description:
        "Customs watchlisting, global cease & desist, and enforcement in international markets.",
      route: "service/international/anti-counterfeiting",
      category: "Enforcement",
      image:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "Customs Watch Listing in International Markets",
      icon: Truck,
      description: "Register IP with customs to stop counterfeits at borders.",
      route: "service/international/customs-watch",
      category: "Enforcement",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "Cease & Desist + Enforcement in Foreign Jurisdictions",
      icon: Gavel,
      description: "Enforce IP rights through notices and legal actions abroad.",
      route: "service/international/enforcement",
      category: "Enforcement",
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "Commercial Contracts",
      icon: FileText,
      description: "Draft, negotiate, and vet business contracts with airtight legal precision.",
      route: "service/international/commercial-contracts",
      category: "Corporate Law",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "Employment & HR Law",
      icon: UserCheck,
      description: "Stay compliant with labour laws, HR policies, and employee agreements.",
      route: "service/international/employment-hr-law",
      category: "Corporate Law",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "Outsourcing & Procurement",
      icon: Package,
      description: "Manage vendor and procurement contracts with risk-free strategies.",
      route: "service/international/outsourcing-procurement",
      category: "Corporate Law",
      image:
        "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "Privacy & Data Protection",
      icon: Lock,
      description:
        "Get GDPR and international data protection compliance right with privacy-first legal consulting.",
      route: "service/international/privacy-data-protection",
      category: "Compliance",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800",
    },
  ];

  const categories = ["All", ...Array.from(new Set(internationalServices.map((service) => service.category)))];

  const filteredServices = useMemo(() => {
    return internationalServices.filter((service) => {
      const matchesSearch =
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-[#EEEEEE] relative rounded-b-[170px] font-montserrat overflow-hidden">
      {/* Hero Section with Earth Video Background */}
      <motion.section
        className="relative h-[90vh] flex items-center justify-center px-4 md:px-16 lg:px-24 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Video Background - Only for Hero Section */}
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="/earth-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto text-center relative z-10"
        >
          <h1 className="text-6xl md:text-8xl font-extrabold text-white relative inline-block tracking-tight">International Services</h1>
          <p className="mt-8 text-xl text-white/80 max-w-2xl mx-auto font-light">
            Comprehensive Legal & IP Solutions for a Global Business World
          </p>
        </motion.div>
      </motion.section>

      {/* International Services Information Section - White Background */}
      <section className="py-32 px-4 md:px-16 lg:px-24 relative bg-white">
        <div className="max-w-7xl mx-auto relative">
          <motion.div className="mb-24" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <div className="flex items-center relative">
              {/* Left Container - Overlapping */}
              <div
                className="relative w-3/5 z-20 mr-[-150px] ml-[-100px]"
                style={{
                  filter: "drop-shadow(0 25px 80px rgba(0, 0, 0, 0.25))",
                }}
              >
                <div
                  className="bg-white p-12"
                  style={{
                    clipPath: "polygon(0 0, calc(100% - 40px) 0, 100% 100%, 0 100%)",
                  }}
                >
                  <div className="space-y-6">
                    <motion.h1
                      className="text-[#000000] text-4xl sm:text-5xl w-[600px] md:text-6xl lg:text-4xl font-extrabold relative z-10 px-4"
                      style={{
                        letterSpacing: "0.1em",
                        textShadow:
                          "-2px 0px 0px rgba(100, 100, 100, 0.8), -6px 2px 0px rgba(80, 80, 80, 0.6), -10px 4px 0px rgba(60, 60, 60, 0.4)",
                      }}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7 }}
                      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                    >
                      International Services Overview
                    </motion.h1>

                    <p className="text-lg leading-relaxed text-[#393E46]">
                      At Leonard Corporate Solutions, we deliver sharp, scalable legal services built to protect innovation, fuel growth, and ensure compliance — globally. Whether you're expanding internationally or protecting your IP across borders, our legal strategies give your business a competitive edge.
                    </p>
                    <p className="text-lg leading-relaxed text-[#393E46]">
                      Our international services evolve with global markets, providing tailored solutions for intellectual property, compliance, and commercial contracts across multiple jurisdictions.
                    </p>
                    <p className="text-lg font-medium text-[#393E46]">
                      📩 Need global legal support? Reach out at{" "}
                      <a href="mailto:info@leonardsolutions.in" className="text-[#00ADB5] hover:underline">
                        info@leonardsolutions.in
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Globe Component - Diagonal Cut */}
              <div className="relative z-10 h-[500px] w-4/5" style={{ clipPath: "polygon(50px 0, 100% 0, 100% 100%, 0 100%)" }}>
               <div
  className="relative z-10 h-[500px] bg-black w-4/5"
  style={{
    clipPath: "polygon(50px 0, 100% 0, 100% 100%, 0 100%)",
    position: "relative",
  }}
>
  <div
    className="absolute bottom-0 right-0 overflow-hidden"
    style={{ transform: "translate(0%, 58%)" }} // fine-tunes placement
  >
    <Globe className="w-[600px]  h-[600px]" />
  </div>
</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Services Section - Original Background */}
      <section className="py-16 px-4 bg-[#000000] md:px-16 lg:px-24 relative">
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <motion.h1
              className="text-[#eeeeee] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center my-10 relative z-10 px-4"
              style={{
                letterSpacing: "0.3em",
                textShadow:
                  "-2px 0px 0px rgba(100, 100, 100, 0.8), -6px 2px 0px rgba(80, 80, 80, 0.6), -10px 4px 0px rgba(60, 60, 60, 0.4)",
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              Our International Services
            </motion.h1>
          </div>

          {/* Search and Filter Section */}
          <motion.div className="mb-12 space-y-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search international services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 bg-white/90 backdrop-blur-sm focus:border-[#00ADB5] focus:outline-none text-gray-700 placeholder-gray-400 text-lg shadow-lg"
                />
                {searchTerm && (
                  <button onClick={() => setSearchTerm("")} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>
            </div>

            {/* Filter Toggle and Categories */}
            <div className="flex flex-col items-center space-y-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-xl border-2 border-gray-200 hover:border-[#00ADB5] transition-colors shadow-lg"
              >
                <Filter className="h-5 w-5 text-[#00ADB5]" />
                <span className="text-gray-700 font-medium">Filter by Category</span>
              </button>

              {/* Category Filters */}
              <motion.div className={`flex flex-wrap justify-center gap-3 transition-all duration-300 ${showFilters ? "opacity-100 max-h-40" : "opacity-0 max-h-0 overflow-hidden"}`}>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category ? "bg-[#00ADB5] text-white shadow-lg" : "bg-white/90 text-gray-600 hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </motion.div>
            </div>

            {/* Results Counter */}
            <div className="text-center">
              <p className="text-gray-600">
                Showing <span className="font-bold text-[#00ADB5]">{filteredServices.length}</span> of <span className="font-bold">{internationalServices.length}</span> services
                {searchTerm && <span> for "{searchTerm}"</span>}
                {selectedCategory !== "All" && <span> in {selectedCategory}</span>}
              </p>
            </div>
          </motion.div>

          {/* Services Grid */}
          <motion.div className="grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 md:gap-10 md:px-16 lg:grid-cols-3" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            {filteredServices.map((service, index) => (
              <Link
                key={service.name}
                href={service.route}
                className="group relative"
                onMouseEnter={() => setHoveredCard(service.name)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <motion.div
                  className="relative h-80 overflow-hidden  shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
                  </div>

                  {/* Service Name - Center */}
                  <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">{service.name}</h3>
                  </div>

                  {/* Category Badge - Top Right */}
                  <div className="absolute top-4 right-4 opacity-80">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-white/90 text-gray-800">{service.category}</span>
                  </div>

                  {/* Know More - Bottom on Hover */}
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <div className="bg-[#00ADB5] text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">Know more</div>
                  </div>

                  {/* Animated border on hover */}
                  <div className="absolute inset-0  border-2 border-transparent group-hover:border-[#00ADB5] transition-colors duration-300" />
                </motion.div>
              </Link>
            ))}
          </motion.div>

          {/* No Results Message */}
          {filteredServices.length === 0 && (
            <motion.div className="text-center py-16" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-600 mb-4">No services found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your search terms or filter criteria</p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="px-6 py-3 bg-[#00ADB5] text-white rounded-xl hover:bg-[#00959c] transition-colors"
              >
                Clear All Filters
              </button>
            </motion.div>
          )}

          {/* Closing Message */}
          <motion.div className="mt-32 relative max-w-3xl mx-auto px-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <div className="relative py-12  backdrop-blur-sm rounded-2xl">
              <p className="text-[#eeeeee] text-lg text-center leading-relaxed">
                At Leonard Corporate Solutions, our international services empower your business with robust legal and IP solutions across global markets. We provide strategic guidance to protect your innovation and ensure compliance worldwide, tailored to your unique needs.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back to Home Link */}
    
    </div>
  );
}
