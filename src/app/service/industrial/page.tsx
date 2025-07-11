'use client';

import { motion } from 'framer-motion';
import { Brush, FileText, Shield, Scale, FileCheck, Briefcase } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function IndustrialDesignPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const serviceCards = [
    {
      icon: FileCheck,
      title: 'Design Application Filing',
      description: 'Prepare and file industrial design applications in India and internationally with precision.',
      route: '#design-application-filing',
    },
    {
      icon: Brush,
      title: 'Design Creation Support',
      description: 'Collaborate with creators and draftspersons to accurately capture and protect innovative designs.',
      route: '#design-creation-support',
    },
    {
      icon: Shield,
      title: 'Design Enforcement',
      description: 'Enforce industrial design registrations to safeguard your aesthetic creations from infringement.',
      route: '#design-enforcement',
    },
    {
      icon: Scale,
      title: 'IP Interplay Expertise',
      description: 'Navigate the overlap of industrial design, patents, copyrights, and trademarks for comprehensive protection.',
      route: '#ip-interplay-expertise',
    },
    {
      icon: FileText,
      title: 'Legal Advisory',
      description: 'Provide tailored legal advice to secure cost-effective and timely protection for your designs.',
      route: '#legal-advisory',
    },
    {
      icon: Briefcase,
      title: 'Portfolio Management',
      description: 'Manage and optimize your industrial design portfolio to maximize value and protection.',
      route: '#portfolio-management',
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
          backgroundSize: '30px 30px',
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
        <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-black hidden lg:block" />
        <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-black hidden lg:block" />
        <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-black hidden lg:block" />
        <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-black hidden lg:block" />

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto text-center"
        >
          <h1 className="text-6xl md:text-8xl font-extrabold text-[#222831] relative inline-block tracking-tight">
            Industrial Design
            <span className="absolute top-1/2 -left-16 -translate-y-1/2 text-black text-5xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-16 -translate-y-1/2 text-black text-5xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Protecting the Aesthetic Value of Your Creations
          </p>
        </motion.div>
      </motion.section>

      {/* Industrial Design Information Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Industrial Design Overview */}
          <motion.div
            className="mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative max-w-3xl mx-auto px-8">
              {/* Corner Angles */}
              <div className="absolute -top-8 -left-8 w-8 h-8 border-t-2 border-l-2 border-black" />
              <div className="absolute -top-8 -right-8 w-8 h-8 border-t-2 border-r-2 border-black" />
              <div className="absolute -bottom-8 -left-8 w-8 h-8 border-b-2 border-l-2 border-black" />
              <div className="absolute -bottom-8 -right-8 w-8 h-8 border-b-2 border-r-2 border-black" />

              <div className="text-center space-y-6">
                <h2 className="text-4xl font-bold mb-4">
                  <span className="text-black">Industrial</span>{' '}
                  <span className="text-[#393E46]">Design</span>
                </h2>
                <p className="text-[#393E46] text-lg leading-relaxed">
                  Leonard Corporate Solutions specializes in the preparation, filing, and enforcement of industrial design applications in India and abroad. Our team collaborates with creators to capture and protect innovative designs while navigating the interplay between industrial design, patents, copyrights, and trademarks for comprehensive, cost-effective protection.
                </p>
                <p className="text-[#393E46] text-lg font-medium">
                  📩 Contact us at{' '}
                  <a href="mailto:info@leonardsolutions.in" className="text-black hover:underline">
                    info@leonardsolutions.in
                  </a>{' '}
                  for tailored assistance with your industrial design needs.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Our Services Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Our Design</span>{' '}
              <span className="text-black">Services</span>
            </h2>
          </div>

          {/* Services Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {serviceCards.map((service, index) => (
              <Link
                key={service.title}
                href={service.route}
                data-testid={`service-link-${service.title}`}
                className="group relative"
                onMouseEnter={() => setHoveredCard(service.title)}
                onMouseLeave={() => setHoveredCard(null)}
                aria-label={`Learn more about ${service.title}`}
              >
                <motion.div
                  className="h-full bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-black/10 relative overflow-hidden"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="absolute top-4 right-4 text-black text-xl opacity-30 group-hover:opacity-100 transition-opacity duration-300">✦</span>
                  <div className="flex flex-col gap-5 relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-br from-black to-[#00959c] rounded-lg flex items-center justify-center text-white">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#222831] mb-3 group-hover:text-black transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-[#393E46]/80 text-base leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-1 bg-black"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    data-testid={`service-underline-${service.title}`}
                  />
                </motion.div>
              </Link>
            ))}
          </motion.div>

          {/* Closing Message */}
          <motion.div
            className="mt-32 relative max-w-3xl mx-auto px-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative py-12">
              {/* Corner Angles */}
              <div className="absolute -top-8 -left-8 w-8 h-8 border-t-2 border-l-2 border-black" />
              <div className="absolute -top-8 -right-8 w-8 h-8 border-t-2 border-r-2 border-black" />
              <div className="absolute -bottom-8 -left-8 w-8 h-8 border-b-2 border-l-2 border-black" />
              <div className="absolute -bottom-8 -right-8 w-8 h-8 border-b-2 border-r-2 border-black" />

              <p className="text-[#393E46] text-lg text-center leading-relaxed">
                Leonard Corporate Solutions protects your industrial designs with tailored legal expertise, ensuring robust protection and maximum value for your creations.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back to Home Link */}
      <div className="container mx-auto px-4 sm:px-6 md:px-16 lg:px-24 py-8">
        <Link
          href="/"
          data-testid="back-to-home-link"
          className="inline-flex items-center text-[#393E46] hover:text-black transition-colors"
          aria-label="Navigate back to home page"
        >
          <span className="mr-2">←</span> Back to Home
        </Link>
      </div>
    </div>
  );
}