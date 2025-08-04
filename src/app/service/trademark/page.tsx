'use client';

import { motion } from "framer-motion";
import { FileText, RefreshCw, ShieldOff, Gavel, FileSignature, Palette, Layers, Copyright } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

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
      description: "Handle timely renewals to maintain your trademark's legal protection and validity.",
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
    <div className="min-h-screen bg-[#EEEEEE] relative font-roboto overflow-x-hidden">
      {/* Large Gradient "L" Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div
          className="text-[60rem] sm:text-[80rem] md:text-[100rem] lg:text-[120rem] font-extrabold opacity-[0.08] select-none"
          style={{
            background:
              "linear-gradient(135deg, #00ADB5 0%, #0099A8 50%, #007B8A 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            transform: "translateX(-5%) translateY(-5%)",
          }}
        >
          L
        </div>
      </div>

      <div className="relative z-10 space-y-12 sm:space-y-16 md:space-y-24">
        {/* Hero Section with Trademark Services and Image */}
        <motion.section
          className="relative min-h-[70vh] flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full flex items-center">
            {/* Left Side - Trademark Services Text (Centered Vertically) */}
            <motion.div
              className="w-1/2 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="max-w-xl">
                <motion.h1
                  className="text-[#000000] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-left relative z-10"
                  style={{
                    letterSpacing: "0.3em",
                    textShadow:
                      "-2px 0px 0px rgba(100, 100, 100, 0.8), -6px 2px 0px rgba(80, 80, 80, 0.6), -10px 4px 0px rgba(60, 60, 60, 0.4)",
                  }}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  TRADEMARK SERVICES
                </motion.h1>
                <div className="mt-8 space-y-4">
                  <p className="text-lg sm:text-xl text-[#393E46] font-light leading-relaxed">
                    Strengthen Your Brand Identity with Comprehensive Legal Protection
                  </p>
                  <div className="flex items-center space-x-2 text-[#00ADB5]">
                    <span className="text-sm font-medium tracking-wider uppercase">
                      Expert Solutions
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Horizontal Rectangle Image */}
            <motion.div
              className="w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative h-[300px] sm:h-[350px] md:h-[400px] w-full">
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src="/WhatWeDo.jpg"
                    alt="Trademark Services - Leonard Corporate Solutions"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Overview & Services Section */}
        <section className="py-16 sm:py-32 px-4 md:px-16 lg:px-24 relative bg-[#EEEEEE]">
          <div className="max-w-7xl mx-auto space-y-16 sm:space-y-32">
            {/* Overview Section */}
            <motion.div 
              className="grid md:grid-cols-2 gap-16 items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div className="relative h-[500px] overflow-hidden shadow-xl">
                  <div className="absolute inset-0 bg-[#00ADB5]/10 transform rotate-3"></div>
                  <Image
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
                    alt="Trademark Overview"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="relative">
                <h2 className="text-4xl font-bold text-[#222831] mb-6">Trademark Overview</h2>
                <div className="space-y-6">
                  <p className="text-[#393E46] text-lg leading-loose">
                    A trademark protects your brand's unique signs or symbols, ensuring legal safeguards against unauthorized use. Leonard Corporate Solutions offers comprehensive trademark services to secure your intellectual property.
                  </p>
                  <p className="text-[#393E46] text-lg leading-loose">
                    Our expert team provides end-to-end trademark solutions, from initial registration to ongoing protection and enforcement, ensuring your brand remains secure in the competitive marketplace.
                  </p>
                  <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl space-y-4 shadow-lg">
                    <h3 className="text-xl font-bold text-[#222831]">Ready to Protect Your Brand?</h3>
                    <p className="text-[#393E46] font-medium">
                      Contact us for expert trademark solutions tailored to your business needs.
                    </p>
                    <p className="text-[#393E46] text-lg font-medium">
                      📩 Email us at{' '}
                      <a href="mailto:info@leonardsolutions.in" className="text-[#00ADB5] hover:underline font-medium">
                        info@leonardsolutions.in
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Services Grid Section */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-[#222831] mb-12 text-center">Our Trademark Services</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
                {serviceCards.map((service, index) => (
                  <Link
                    key={service.title}
                    href={service.route}
                    className="group relative"
                    onMouseEnter={() => setHoveredCard(service.title)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <motion.div
                      className="h-full bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#00ADB5]/10 relative overflow-hidden"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      style={{ transitionDelay: `${index * 0.1}s` }}
                    >
                      <span className="absolute top-4 right-4 text-[#00ADB5] text-xl opacity-30 group-hover:opacity-100 transition-opacity duration-300">✦</span>
                      <div className="flex flex-col gap-4 relative z-10">
                        <div className="flex items-center justify-center w-12 h-12 text-[#00ADB5] transition-transform duration-300 group-hover:scale-110">
                          <service.icon className="h-8 w-8" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-[#222831] mb-2 group-hover:text-[#00ADB5] transition-colors duration-300">
                            {service.title}
                          </h3>
                          <p className="text-[#393E46] text-sm leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-[#00ADB5] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}