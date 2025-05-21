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
    <div className="min-h-screen bg-[#EEEEEE] relative rounded-b-[170px] font-montserrat overflow-hidden">
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
      <motion.section
        className="relative h-[80vh] flex items-center justify-center px-4 md:px-16 lg:px-24 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Corner Angles */}
        <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-[#00ADB5] hidden lg:block" />
        <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-[#00ADB5] hidden lg:block" />
        <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-[#00ADB5] hidden lg:block" />
        <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-[#00ADB5] hidden lg:block" />

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto text-center"
        >
          <h1 className="text-6xl md:text-8xl font-extrabold text-[#222831] relative inline-block tracking-tight">
            Trademark Services
            <span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Strengthen Your Brand
          </p>
        </motion.div>
      </motion.section>

      {/* Trademark Information Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Trademark Overview */}
          <motion.div
            className="relative max-w-3xl mx-auto px-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Corner Angles */}
            <div className="absolute -top-8 -left-8 w-8 h-8 border-t-2 border-l-2 border-[#00ADB5]" />
            <div className="absolute -top-8 -right-8 w-8 h-8 border-t-2 border-r-2 border-[#00ADB5]" />
            <div className="absolute -bottom-8 -left-8 w-8 h-8 border-b-2 border-l-2 border-[#00ADB5]" />
            <div className="absolute -bottom-8 -right-8 w-8 h-8 border-b-2 border-r-2 border-[#00ADB5]" />

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

          {/* Our Services */}
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-[#222831]">Our</span>{' '}
                <span className="text-[#00ADB5]">Services</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
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
          </motion.div>
        </div>
      </section>

      {/* Back to Home Link */}
      <div className="container mx-auto px-4 sm:px-6 md:px-16 lg:px-24 py-8">
        <Link
          href="/"
          data-testid="back-to-home-link"
          className="inline-flex items-center text-[#393E46] hover:text-[#00ADB5] transition-colors"
          onClick={() => console.log("Navigating to /")}
        >
          <span className="mr-2">←</span> Back to Home
        </Link>
      </div>
    </div>
  );
}