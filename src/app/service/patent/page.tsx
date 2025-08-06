"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Briefcase,
  FileText,
  Gavel,
  Globe,
  Search,
  Filter,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState, useMemo } from "react";

const serviceSlugs: { [key: string]: string } = {
  "Patent Registration": "registration",
  "Patent Search": "search",
  "Patent Drafting": "drafting",
  "Patent Opposition": "opposition",
  "Patent Licensing": "licensing",
  "International Patent": "international",
  "Patent Consultation": "consultation",
};

const serviceCards = [
  {
    icon: FileText,
    title: "Patent Registration",
    description:
      "Secure your intellectual property by registering your patent with expert guidance and compliance.",
    image:
      "https://bsmedia.business-standard.com/_media/bs/img/article/2018-11/23/full/1542994170-9888.jpg?im=FeatureCrop,size=(826,465)",
    category: "Registration",
  },
  {
    icon: Search,
    title: "Patent Search",
    description:
      "Conduct comprehensive patent searches to identify existing patents and avoid conflicts.",
    image: "https://amr.co.id/wp-content/uploads/2024/01/patent-search.png",
    category: "Search",
  },
  {
    icon: FileText,
    title: "Patent Drafting",
    description:
      "Prepare detailed and precise patent applications to protect your innovations.",
    image: "https://tmwala.com/wp-content/uploads/2024/09/PATENT-DRAFTING-scaled.jpg",
    category: "Drafting",
  },
  {
    icon: Gavel,
    title: "Patent Opposition",
    description:
      "Handle patent opposition proceedings to defend or challenge patent grants.",
    image: "https://excelonip.com/wp-content/uploads/2022/07/Blog-4.jpg",
    category: "Enforcement",
  },
  {
    icon: Briefcase,
    title: "Patent Licensing",
    description:
      "Facilitate patent licensing agreements to maximize the value of your IP.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1400",
    category: "Commercial",
  },
  {
    icon: Globe,
    title: "International Patent",
    description:
      "Manage filing and prosecution of patents globally for worldwide protection.",
    image:
      "https://t3.ftcdn.net/jpg/03/76/42/72/360_F_376427215_ZZ8oSrVkkZkijSkKi4joP05VbrmeLDCk.jpg",
    category: "International",
  },
  {
    icon: BookOpen,
    title: "Patent Consultation",
    description:
      "Receive expert advice to strategize and optimize your patent portfolio.",
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=1400",
    category: "Consultation",
  },
];

export default function PatentPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const categories = ["All", ...Array.from(new Set(serviceCards.map((s) => s.category)))];

  const filteredServices = useMemo(() => {
    const q = searchTerm.toLowerCase();
    return serviceCards.filter((service) => {
      const matchesSearch =
        service.title.toLowerCase().includes(q) ||
        service.description.toLowerCase().includes(q) ||
        service.category.toLowerCase().includes(q);
      const matchesCategory = selectedCategory === "All" || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="font-montserrat relative min-h-screen overflow-hidden bg-[#EEEEEE]">
      {/* HERO — large image with dark overlay (unchanged) */}
      <section className="relative h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">
        <div className="absolute inset-0">
          <img src="/patent.jpg" alt="Patent hero" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 mx-auto max-w-6xl h-full flex flex-col justify-center items-center text-center px-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight">
            Patent Services
          </h1>
          <p className="mt-6 max-w-3xl text-base sm:text-lg md:text-xl text-white/90 font-light">
            Protect your inventions — from search and drafting to prosecution and international filing.
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
                      Patent Overview
                    </motion.h2>

                    <p className="text-lg leading-relaxed text-[#393E46]">
                      Patents protect your innovations and create commercial value. We help clients across technologies prepare robust applications, navigate prosecution, and build global protection strategies.
                    </p>

                    <p className="text-lg leading-relaxed text-[#393E46]">
                      Our services cover prior art searching, drafting, filing, prosecution, oppositions, licensing and global portfolio management.
                    </p>

                    <p className="text-lg font-medium text-[#393E46]">
                      📩 For tailored guidance, write to{" "}
                      <a href="mailto:info@brandsecure.in" className="text-[#00ADB5] hover:underline">
                        info@brandsecure.in
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative z-10 h-[480px] w-4/5">
                <div className="absolute inset-0">
                  <img src="https://blog.ipleaders.in/wp-content/uploads/2021/12/patent-translation.jpg" alt="Patent visual" className="h-full w-full object-cover object-right" />
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
              Our Patent Services
            </motion.h3>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              From searches to global prosecution — offerings built for inventors, startups and companies.
            </p>
          </div>

          {/* Search & Filters */}
          <motion.div className="mb-10 space-y-6" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <div className="relative max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4  border border-gray-800 bg-black/60 backdrop-blur-sm focus:border-[#00ADB5] focus:outline-none text-[#EEEEEE] placeholder-gray-400 text-lg shadow-sm"
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

              <motion.div className={`flex flex-wrap justify-center gap-3 transition-all duration-300 ${showFilters ? "opacity-100 max-h-40" : "opacity-0 max-h-0 overflow-hidden"}`}>
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
          <motion.div className="grid grid-cols-1 gap-8 px-2 sm:grid-cols-2 md:gap-10 lg:grid-cols-3" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            {filteredServices.map((service, index) => (
              <Link
                key={service.title}
                href={`/service/patent/${serviceSlugs[service.title] ?? "overview"}`}
                className="group relative block"
                onMouseEnter={() => setHoveredCard(service.title)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <motion.div
                  className="relative h-96 overflow-hidden  shadow-lg transition-all duration-300 group-hover:shadow-2xl"
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
                  setSearchTerm("");
                  setSelectedCategory("All");
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
                At Leonard Corporate Solutions, our patent services combine technical depth with strategic vision — protecting your inventions and helping you commercialize them globally.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back to Home Link */}
      
    </div>
  );
}
