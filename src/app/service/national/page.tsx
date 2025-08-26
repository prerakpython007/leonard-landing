"use client";

import { motion } from "framer-motion";
import {
  Shield,
  PenTool,
  BookOpen,
  Scale,
  MapPin,
  Globe,
  AlertTriangle,
  Briefcase,
  UserCheck,
  DollarSign,
  Gavel,
  FileText,
  Search,
  Filter,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState, useMemo } from "react";

export default function NationalServices() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const nationalServices = [
    {
      name: "Trademark Services",
      icon: Shield,
      description:
        "Protect your brand name, logo, and tagline with expert registration, enforcement, and litigation support.",
      route: "/service/trademark",
      category: "Intellectual Property",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "Patent Services",
      icon: PenTool,
      description:
        "Safeguard your inventions with professional drafting, filing, prosecution, and patent litigation.",
      route: "/service/patent",
      category: "Intellectual Property",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "Copyright Services",
      icon: BookOpen,
      description:
        "Secure your creative work across digital, media, and tech with bulletproof copyright protection.",
      route: "/service/copyright",
      category: "Intellectual Property",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "Design IP",
      icon: Scale,
      description:
        "Protect the aesthetic value of your products with industrial design registration and legal protection.",
      route: "/service/design",
      category: "Intellectual Property",
      image:
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "Geographical Indications",
      icon: MapPin,
      description:
        "Register and protect GI tags to preserve and promote regional specialties.",
      route: "/service/geographical",
      category: "Intellectual Property",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "Domain Name Law",
      icon: Globe,
      description:
        "Defend your digital identity through domain dispute resolution and cybersquatting actions.",
      route: "/service/domain",
      category: "Digital Law",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "Anti-Counterfeiting",
      icon: AlertTriangle,
      description:
        "Combat fakes with strategic cease & desist, customs watchlisting, and enforcement support.",
      route: "/service/anti-counterfeiting",
      category: "Enforcement",
      image:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "Corporate Legal Services",
      icon: Briefcase,
      description:
        "Navigate company law, regulatory compliance, and governance with precision and clarity.",
      route: "/service/corporate",
      category: "Corporate Law",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "Startup Legal Support",
      icon: UserCheck,
      description:
        "From incorporation to investor agreements — everything your startup needs to stay legally sound.",
      route: "/service/startup",
      category: "Corporate Law",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "Business Law & Compliance",
      icon: FileText,
      description:
        "Ensure your operations are legally compliant with expert business law guidance.",
      route: "/service/business-law",
      category: "Corporate Law",
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "Investment & Fundraising",
      icon: DollarSign,
      description:
        "Legal advisory for venture capital, angel rounds, SAFE notes, and investor relations.",
      route: "/service/investment",
      category: "Corporate Law",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "Litigation & Disputes",
      icon: Gavel,
      description:
        "Resolve commercial disputes swiftly — from pre-litigation notices to courtroom representation.",
      route: "/service/litigation",
      category: "Litigation",
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800",
    },
  ];

  const categories = [
    "All",
    ...Array.from(new Set(nationalServices.map((service) => service.category))),
  ];
  const [videoLoaded, setVideoLoaded] = useState(false);

  const filteredServices = useMemo(() => {
    return nationalServices.filter((service) => {
      const matchesSearch =
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="font-montserrat relative min-h-screen overflow-hidden rounded-b-[170px] bg-[#EEEEEE]">
      {/* Hero Section with Video Background */}
      <motion.section
        className="relative flex h-[90vh] items-center justify-center overflow-hidden px-4 md:px-16 lg:px-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Video Background - Only for Hero Section */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          >
            <source src="/indian-flag.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 mx-auto max-w-7xl text-center"
        >
          <h1 className="relative inline-block text-6xl font-extrabold tracking-tight text-white md:text-8xl">
            National Services
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-xl font-light text-white/80">
            Expert Legal & IP Solutions for Businesses in India
          </p>
        </motion.div>
      </motion.section>

      {/* National Services Information Section - White Background */}
      <section className="relative bg-white px-4 py-32 md:px-16 lg:px-24">
        <div className="relative mx-auto max-w-7xl">
          {/* National Services Overview with Indian Map */}
          <motion.div
            className="mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative flex items-center">
              {/* Left Container - Overlapping - Moved more to the left */}
              <div
                className="relative w-3/5 z-20 mr-[-150px] ml-[-100px]"
                style={{
                  filter:
                    "drop-shadow(0 25px 80px rgba(0, 0, 0, 0.25))", // drop-shadow keeps sharp edges
                }}
              >
                <div
                  className="bg-white/95 p-12"
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 40px) 0, 100% 100%, 0 100%)",
                  }}
                >
                  <div className="space-y-6">
                    <motion.h1
                      className="text-[#000000] text-4xl sm:text-5xl w-[600px] md:text-6xl lg:text-4xl font-extrabold  relative z-10 px-4"
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
                      National Services Overview
                    </motion.h1>

                    <p className="text-lg leading-relaxed text-[#393E46]">
                      At Leonard Corporate Solutions, we provide comprehensive
                      legal and intellectual property services tailored to
                      businesses operating in India. From protecting your brand to
                      ensuring regulatory compliance, our expert team delivers
                      strategic solutions to fuel your growth and safeguard your
                      operations.
                    </p>
                    <p className="text-lg leading-relaxed text-[#393E46]">
                      Our services are designed to evolve with your business,
                      offering clarity and precision in navigating India's legal
                      landscape.
                    </p>
                    <p className="text-lg font-medium text-[#393E46]">
                      📩 Need tailored legal support? Reach out at{" "}
                      <a
                        href="mailto:info@leonardsolutions.in"
                        className="text-[#00ADB5] hover:underline"
                      >
                        info@leonardsolutions.in
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Indian Map Image - Diagonal Cut */}
              <div
                className="relative z-10 h-[750px] w-4/5"
                style={{
                  clipPath: "polygon(50px 0, 100% 0, 100% 100%, 0 100%)",
                }}
              >
                <div className="absolute inset-0">
                  <img
                    src="/indian-map.png"
                    alt="India Map"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Services Section - Original Background */}
      <section className="relative px-4 bg-[#000000] py-16 md:px-16 lg:px-24">
        <div className="relative mx-auto max-w-7xl">
          {/* Our Services Section */}
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
              Our National Services
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
                <span className="text-gray-700 font-medium">
                  Filter by Category
                </span>
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
                Showing{" "}
                <span className="font-bold text-[#00ADB5]">
                  {filteredServices.length}
                </span>{" "}
                of{" "}
                <span className="font-bold">{nationalServices.length}</span>{" "}
                services
                {searchTerm && (
                  <span> for "{searchTerm}"</span>
                )}
                {selectedCategory !== "All" && (
                  <span> in {selectedCategory}</span>
                )}
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
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
                  </div>

                  {/* Service Name - Center */}
                  <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                      {service.name}
                    </h3>
                  </div>

                  {/* Category Badge - Top Right */}
                  <div className="absolute top-4 right-4 opacity-80">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-white/90 text-gray-800">
                      {service.category}
                    </span>
                  </div>

                  {/* Know More - Bottom on Hover */}
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <div className="bg-[#00ADB5] text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                      Know more
                    </div>
                  </div>

                  {/* Animated border on hover */}
                  <div className="absolute inset-0  border-2 border-transparent group-hover:border-[#00ADB5] transition-colors duration-300" />
                </motion.div>
              </Link>
            ))}
          </motion.div>

          {/* No Results Message */}
          {filteredServices.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-600 mb-4">
                No services found
              </h3>
              <p className="text-gray-500 mb-6">
                Try adjusting your search terms or filter criteria
              </p>
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
          <motion.div
            className="relative mx-auto mt-32 max-w-3xl px-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl  py-12 backdrop-blur-sm">
              <p className="text-center text-lg leading-relaxed text-[#eeeeee]">
                At Leonard Corporate Solutions, our national services empower
                Indian businesses with robust legal and IP solutions. We provide
                strategic guidance to protect your innovation, ensure
                compliance, and resolve disputes, tailored to your unique needs.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back to Home Link */}
   
    </div>
  );
}
