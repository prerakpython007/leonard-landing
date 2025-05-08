"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { BookOpen, Briefcase, FileText, Gavel, Shield, Globe } from "lucide-react"
import Link from "next/link"
import { useState, useRef } from 'react'

export default function Services() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const createLineTransforms = (lineCount: number, charsPerLine: number) => {
    const transforms = [];
    for (let i = 0; i < lineCount; i++) {
      const lineChars = [];
      for (let j = 0; j < charsPerLine; j++) {
        const progress = useTransform(
          scrollYProgress,
          [
            (i * 0.2) + (j * 0.002),
            (i * 0.2) + (j * 0.002) + 0.1
          ],
          ["#22283110", "#222831"]
        );
        lineChars.push(progress);
      }
      transforms.push(lineChars);
    }
    return transforms;
  };

  const lines = [
    "We provide comprehensive",
    "legal solutions for your",
    "business needs with",
    "expertise and dedication"
  ];

  const maxChars = Math.max(...lines.map(line => line.length));
  const colorTransforms = createLineTransforms(lines.length, maxChars);

  const services = [
    { name: "Patents", icon: FileText, description: "Protect your inventions with robust patent strategies.", route: "service/patent" },
    { name: "Trademarks", icon: Shield, description: "Safeguard your brand identity with trademark registration.", route: "service/trademark" },
    { name: "Copyright", icon: BookOpen, description: "Secure your creative works with copyright protection.", route: "service/copyright" },
    { name: "Company Law", icon: Briefcase, description: "Comprehensive legal support for corporate governance.", route: "service/company-law" },
    { name: "Legal Consulting", icon: Gavel, description: "Expert legal guidance for your business needs.", route: "service/consulting" },
    { name: "International Law", icon: Globe, description: "Navigate global legal landscapes effectively.", route: "service/international" },
  ];

  return (
    <div className="min-h-screen bg-[#EEEEEE] relative rounded-b-[5%] font-montserrat" onMouseMove={handleMouseMove}>
      {/* Grid Pattern Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.025) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }}
      />

      {/* Hover Blob */}
      {hoveredCard && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            transition: {
              type: "spring",
              stiffness: 260,
              damping: 20
            }
          }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed pointer-events-none z-50 px-6 py-3 rounded-full font-medium backdrop-blur-sm"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            transform: 'translate(-50%, -50%)',
            background: 'rgba(0, 173, 181, 0.9)',
            boxShadow: '0 8px 32px rgba(0, 173, 181, 0.2)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}
        >
          <span className="relative z-10 text-white tracking-wider">View</span>
        </motion.div>
      )}

      {/* Hero Section */}
      <motion.section
        className="relative py-32 px-4 md:px-16 lg:px-24 overflow-hidden text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          <h1 className="text-6xl md:text-8xl font-extrabold text-[#222831] relative inline-block tracking-tight">
            Our Services
            <span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Empowering businesses with comprehensive legal solutions
          </p>
        </motion.div>
      </motion.section>

      {/* Description Section with Letter Animation */}
      <section ref={containerRef} className="py-20 px-4 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 flex flex-col">
            {lines.map((line, lineIndex) => (
              <div key={lineIndex} className="py-4 overflow-hidden">
                <div className="text-6xl md:text-7xl font-bold flex flex-wrap">
                  {line.split('').map((char, charIndex) => (
                    <motion.span
                      key={charIndex}
                      style={{ 
                        color: colorTransforms[lineIndex]?.[charIndex] ?? "#22283110",
                        transition: "color 0.2s ease",
                        display: "inline-block",
                        willChange: "color"
                      }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {services.map((service, index) => (
              <Link
                key={service.name}
                href={service.route}
                className="group relative"
                onMouseEnter={() => setHoveredCard(service.name)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <motion.div
                  className="h-full bg-white/90 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#00ADB5]/20 relative overflow-hidden"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex flex-col gap-4 relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#00ADB5] to-[#00959c] rounded-lg flex items-center justify-center text-white">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-[#222831] mb-2">{service.name}</h3>
                      <p className="text-[#393E46]/70 text-sm md:text-base">{service.description}</p>
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

// Add this CSS at the start of your global CSS file or in a style tag
const styles = `
  @keyframes fillText {
    to {
      background-size: 100% 100%;
    }
  }
`;