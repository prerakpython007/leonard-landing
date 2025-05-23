'use client';

import { motion } from "framer-motion";
import { FileText, RefreshCw, ShieldOff, Gavel, FileSignature, Palette, Layers, Copyright } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function TrademarkPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const serviceCards = [
    {
      icon: FileText,
      title: "Trademark Registration",
      description: "Assist with the complete registration process, from application to approval, ensuring compliance.",
      route: "/service/trademark/registration",
    },
    {
      icon: RefreshCw,
      title: "Trademark Renewal",
      description: "Handle timely renewals to maintain your trademark’s legal protection and validity.",
      route: "/service/trademark/renewal",
    },
    {
      icon: ShieldOff,
      title: "Trademark Objection",
      description: "Expertly respond to objections raised during the trademark registration process.",
      route: "/service/trademark/objection",
    },
    {
      icon: Gavel,
      title: "Trademark Opposition",
      description: "Defend or challenge trademark applications through opposition proceedings.",
      route: "/service/trademark/opposition",
    },
    {
      icon: FileSignature,
      title: "Trademark Assignment",
      description: "Facilitate the transfer of trademark ownership with legal precision.",
      route: "/service/trademark/assignment",
    },
    {
      icon: Palette,
      title: "Logo Design",
      description: "Create unique, brand-aligned logos eligible for trademark protection.",
      route: "/service/trademark/logo-design",
    },
    {
      icon: Layers,
      title: "Series Trademark",
      description: "Register a series of related trademarks under a single application.",
      route: "/service/trademark/series",
    },
    {
      icon: Copyright,
      title: "Copyright Registration",
      description: "Secure copyright protection for your creative works alongside trademarks.",
      route: "/service/copyright/registration",
    },
  ];

  return (
    <div className="min-h-screen bg-[#EEEEEE] relative rounded-b-[50px] sm:rounded-b-[100px] md:rounded-b-[170px] font-montserrat overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12">
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
      <motion.section className="relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[80vh] flex items-center justify-center">
        {/* Corner Angles - Desktop only with better spacing */}
        <div className="absolute top-8 left-8 hidden h-12 w-12 border-t-2 border-l-2 border-[#00ADB5] lg:block" />
        <div className="absolute top-8 right-8 hidden h-12 w-12 border-t-2 border-r-2 border-[#00ADB5] lg:block" />
        <div className="absolute bottom-8 left-8 hidden h-12 w-12 border-b-2 border-l-2 border-[#00ADB5] lg:block" />
        <div className="absolute bottom-8 right-8 hidden h-12 w-12 border-b-2 border-r-2 border-[#00ADB5] lg:block" />

        <motion.div className="max-w-7xl mx-auto text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-extrabold text-[#222831] relative inline-block tracking-tight">
            Trademark Services
            <span className="absolute top-1/2 -left-6 sm:-left-8 md:-left-12 lg:-left-16 -translate-y-1/2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#00ADB5] opacity-50 animate-pulse">✦</span>
            <span className="absolute top-1/2 -right-6 sm:-right-8 md:-right-12 lg:-right-16 -translate-y-1/2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#00ADB5] opacity-50 animate-pulse">✦</span>
          </h1>
          <p className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Strengthen Your Brand
          </p>
        </motion.div>
      </motion.section>

      {/* Content Sections */}
      <section className="py-12 sm:py-16 md:py-24 space-y-12 sm:space-y-16 md:space-y-24">
        <div className="max-w-7xl mx-auto">
          {/* Overview Section */}
          <motion.div className="mb-12 sm:mb-16 md:mb-24">
            {/* Trademark Overview */}
            <motion.div
              className="relative max-w-3xl mx-auto p-8 sm:p-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Corner Angles - Visible on all screens with better spacing */}
              <div className="absolute -top-6 -left-6 w-8 h-8 border-t-2 border-l-2 border-[#00ADB5]" />
              <div className="absolute -top-6 -right-6 w-8 h-8 border-t-2 border-r-2 border-[#00ADB5]" />
              <div className="absolute -bottom-6 -left-6 w-8 h-8 border-b-2 border-l-2 border-[#00ADB5]" />
              <div className="absolute -bottom-6 -right-6 w-8 h-8 border-b-2 border-r-2 border-[#00ADB5]" />

              <div className="text-center space-y-6">
                <h2 className="text-4xl font-bold mb-4">
                  <span className="text-[#00ADB5]">Trademark</span>{' '}
                  <span className="text-[#393E46]">Overview</span>
                </h2>
                <p className="text-[#393E46] text-lg leading-relaxed">
                  A trademark protects your brand’s unique signs or symbols, ensuring legal safeguards against unauthorized use. BrandSecure offers comprehensive trademark services to secure your intellectual property.
                </p>
                <p className="text-[#393E46] text-lg font-medium">
                  📩 Contact us at{' '}
                  <a href="mailto:info@brandsecure.in" className="text-[#00ADB5] hover:underline">
                    info@brandsecure.in
                  </a>{' '}
                  for expert trademark solutions.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {serviceCards.map((service, index) => (
              <Link
                key={service.title}
                href={service.route}
                data-testid={`trademark-service-link-${service.title.replace(/\s+/g, '-')}`}
                className="group relative"
                onMouseEnter={() => setHoveredCard(service.title)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => console.log(`Navigating to ${service.route}`)}
              >
                <motion.div
                  className="h-full bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#00ADB5]/10 relative overflow-hidden"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="absolute top-4 right-4 text-[#00ADB5] text-xl opacity-30 group-hover:opacity-100 transition-opacity duration-300">✦</span>
                  <div className="flex flex-col gap-5 relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#00ADB5] to-[#00959c] rounded-lg flex items-center justify-center text-white">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#222831] mb-3 group-hover:text-[#00ADB5] transition-colors duration-300">{service.title}</h3>
                      <p className="text-[#393E46]/80 text-base leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-1 bg-[#00ADB5]"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}