"use client";

import { motion } from "framer-motion";
import { FileText, Scale, Shield, AlertTriangle, Search, CheckCircle } from "lucide-react";
import Link from "next/link";

const CeaseAndEnforcePage = () => {
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
        {/* Corner Angles - Desktop only */}
        <div className="absolute top-8 left-8 hidden lg:block h-12 w-12 border-t-2 border-l-2 border-[#00ADB5]" />
        <div className="absolute top-8 right-8 hidden lg:block h-12 w-12 border-t-2 border-r-2 border-[#00ADB5]" />
        <div className="absolute bottom-8 left-8 hidden lg:block h-12 w-12 border-b-2 border-l-2 border-[#00ADB5]" />
        <div className="absolute bottom-8 right-8 hidden lg:block h-12 w-12 border-b-2 border-r-2 border-[#00ADB5]" />

        <motion.div className="max-w-7xl mx-auto text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-extrabold text-[#222831] relative inline-block tracking-tight">
            Cease & Enforce
            <span className="absolute top-1/2 -left-6 sm:-left-8 md:-left-12 lg:-left-16 -translate-y-1/2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#00ADB5] opacity-50 animate-pulse">
              ✦
            </span>
            <span className="absolute top-1/2 -right-6 sm:-right-8 md:-right-12 lg:-right-16 -translate-y-1/2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#00ADB5] opacity-50 animate-pulse">
              ✦
            </span>
          </h1>
          <p className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Professional IP Enforcement & Protection Services
          </p>
        </motion.div>
      </motion.section>

      {/* Content Sections */}
      <section className="py-12 sm:py-16 md:py-24 space-y-12 sm:space-y-16 md:space-y-24">
        <div className="max-w-7xl mx-auto">{/* Add your service-specific content here */}</div>
      </section>

      {/* Back to Services Link */}
      <div className="container mx-auto pb-8 sm:pb-12 md:pb-16">
        <Link
          href="/service"
          className="inline-flex items-center text-[#393E46] hover:text-[#00ADB5] transition-colors"
        >
          <span className="mr-2">←</span> Back to Services
        </Link>
      </div>
    </div>
  );
};

export default CeaseAndEnforcePage;
