"use client";

import { motion } from "framer-motion";
import {
  FileText,
  RefreshCw,
  ShieldOff,
  Gavel,
  FileSignature,
  Palette,
  Layers,
  Copyright,
  Search,
  Filter,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState, useMemo } from "react";

const serviceCards = [
  {
    icon: FileText,
    title: "Trademark Registration",
    description:
      "Full-service filing and prosecution to secure your brand identity across classes and territories.",
    route: "/service/trademark/registration",
    // legal / documents / filing
    image:
      "/trademark.jpg",
    category: "Registration",
  },
  {
    icon: RefreshCw,
    title: "Trademark Renewal",
    description:
      "Keep protection active with our renewal reminders and filing management.",
    route: "/service/trademark/renewal",
    // calendar / reminders
    image:
      "https://chithragupta.com/cdn/shop/products/TMrenewal-1280x720_2508be5a-7151-4758-a132-350c7fd39a1a.jpg?v=1594191997",
    category: "Maintenance",
  },
  {
    icon: ShieldOff,
    title: "Trademark Objection",
    description:
      "Professional responses and arguments to overcome examiner objections.",
    route: "/service/trademark/objection",
    // legal review / documents
    image:
      "https://www.legalwiz.in/wp-content/uploads/imgpsh_fullsize_anim-2-1.jpeg",
    category: "Enforcement",
  },
  {
    icon: Gavel,
    title: "Trademark Opposition",
    description:
      "Representation and strategy for opposition proceedings and disputes.",
    route: "/service/trademark/opposition",
    // courtroom / gavel
    image:
      "https://www.indiafilings.com/learn/wp-content/uploads/2024/02/Trademark-Opposition-vs.-Litigation.jpg",
    category: "Enforcement",
  },
  {
    icon: FileSignature,
    title: "Trademark Assignment",
    description:
      "Securely transfer trademark ownership with clear documentation and filings.",
    route: "/service/trademark/assignment",
    // signing documents
    image:
      "https://www.kanakkupillai.com/learn/wp-content/uploads/2024/06/How-Do-I-Record-a-Trademark-Assignment.jpg",
    category: "Maintenance",
  },
  {
    icon: Palette,
    title: "Logo Clearance",
    description:
      "Search and clearance opinions to reduce registration risk for new logos.",
    route: "/service/trademark/logo-design",
    // design / logo / creative
    image:
      "https://t4.ftcdn.net/jpg/00/82/10/21/360_F_82102162_tki5BtuUPJ0LWLQmV1phpPFHHVEufJ8O.jpg",
    category: "Design",
  },
  {
    icon: Layers,
    title: "Series Trademark",
    description:
      "Register related marks in a series to protect variations of your brand.",
    route: "/service/trademark/series",
    // multiple products / packaging
    image:
      "https://depenning.com/wp-content/uploads/2024/05/associated-and-series-trademarks-in-india-1170x612-1.jpg",
    category: "Registration",
  },
  {
    icon: Copyright,
    title: "Copyright Support",
    description:
      "Complementary copyright registration for creative assets tied to your brand.",
    route: "/service/copyright/registration",
    // creative / copyright
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200",
    category: "Registration",
  },
];

export default function TrademarkPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const categories = ["All", ...Array.from(new Set(serviceCards.map((s) => s.category)))];

  const filteredServices = useMemo(() => {
    return serviceCards.filter((service) => {
      const matchesSearch =
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="font-montserrat relative min-h-screen overflow-hidden bg-[#EEEEEE]">
      {/* HERO — keep local /trademark.jpg */}
      <section className="relative h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/trademark.jpg"
            alt="Trademark hero"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 mx-auto max-w-6xl h-full flex flex-col justify-center items-center text-center px-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight">
            Trademark Services
          </h1>
          <p className="mt-6 max-w-3xl text-base sm:text-lg md:text-xl text-white/90 font-light">
            Protect what makes your business distinct — names, logos, slogans and more. We provide end-to-end trademark services tailored to Indian and global markets.
          </p>
        </motion.div>
      </section>

      {/* Overview Section */}
      <section className="relative bg-white px-4 py-32 md:px-16 lg:px-24">
        <div className="relative mx-auto max-w-7xl">
          <motion.div
            className="mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative flex items-center">
              <div
                className="relative w-3/5 z-20 mr-[-150px] ml-[-100px]"
                style={{
                  filter: "drop-shadow(0 25px 80px rgba(0, 0, 0, 0.25))",
                }}
              >
                <div className="bg-white/95 p-12" style={{ clipPath: "polygon(0 0, calc(100% - 40px) 0, 100% 100%, 0 100%)" }}>
                  <div className="space-y-6">
                    <motion.h1
                      className="text-[#000000] text-4xl sm:text-5xl md:text-6xl font-extrabold relative z-10 px-4"
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
                      Trademark Overview
                    </motion.h1>

                    <p className="text-lg leading-relaxed text-[#393E46]">
                      A trademark protects your brand’s distinct signs — words, logos, shapes, or combinations. Registration grants exclusive rights and remedies against unauthorised use.
                    </p>
                    <p className="text-lg leading-relaxed text-[#393E46]">
                      We assist with searches, filing, prosecution, renewals, assignments, and enforcement — giving brands legal certainty.
                    </p>
                    <p className="text-lg font-medium text-[#393E46]">
                      📩 For tailored advice, reach out:{" "}
                      <a href="mailto:info@leonardsolutions.in" className="text-[#00ADB5] hover:underline">info@leonardsolutions.in</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative z-10 h-[520px] w-4/5">
                <div className="absolute inset-0">
                  <img src="/trademark.jpg" alt="Trademark visual" className="h-full w-full object-cover object-right" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------- Services Section — MATCHED TO NATIONAL PAGE ---------- */}
      <section className="relative px-4 bg-[#000000] py-16 md:px-16 lg:px-24">
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
              Our Trademark Services
            </motion.h1>
          </div>

          {/* Search and Filter Section */}
          <motion.div
            className="mb-12 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 bg-white/90 backdrop-blur-sm focus:border-[#00ADB5] focus:outline-none text-gray-700 placeholder-gray-400 text-lg shadow-lg"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
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
              <motion.div
                className={`flex flex-wrap justify-center gap-3 transition-all duration-300 ${
                  showFilters ? "opacity-100 max-h-40" : "opacity-0 max-h-0 overflow-hidden"
                }`}
              >
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? "bg-[#00ADB5] text-white shadow-lg"
                        : "bg-white/90 text-gray-600 hover:bg-gray-100 border border-gray-200"
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
                Showing <span className="font-bold text-[#00ADB5]">{filteredServices.length}</span> of <span className="font-bold">{serviceCards.length}</span> services
                {searchTerm && <span> for "{searchTerm}"</span>}
                {selectedCategory !== "All" && <span> in {selectedCategory}</span>}
              </p>
            </div>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            className="grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 md:gap-10 md:px-16 lg:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {filteredServices.map((service, index) => (
              <Link
                key={service.title}
                href={service.route}
                className="group relative"
                onMouseEnter={() => setHoveredCard(service.title)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <motion.div
                  className="relative h-80 overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
                  </div>

                  {/* Service Name - Center */}
                  <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">{service.title}</h3>
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
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#00ADB5] transition-colors duration-300" />
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
          <motion.div className="relative mx-auto mt-32 max-w-3xl px-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <div className="relative rounded-2xl py-12 backdrop-blur-sm">
              <p className="text-center text-lg leading-relaxed text-[#eeeeee]">
                At Leonard Corporate Solutions, our trademark services protect your brand through proactive advice, meticulous filings, and robust enforcement.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Extra informational blocks with rectangular images + text containers (no rounding) */}
      
    </div>
  );
}
