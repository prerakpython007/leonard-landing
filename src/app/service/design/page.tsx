'use client';

import { motion } from 'framer-motion';
import { Palette, Brush, Layers, PenTool, Eye, Globe, Search } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function DesignPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const serviceCards = [
    {
      icon: Layers,
      title: 'Industrial Designs',
      description: 'Protect the aesthetic and functional aspects of industrial products through design registration.',
      slug: 'industrial',
    },
    {
      icon: Brush,
      title: 'Fashion Designs',
      description: 'Safeguard unique clothing, accessories, and fashion items with tailored design protection.',
      slug: 'fashion',
    },
    {
      icon: Palette,
      title: 'Textile Designs',
      description: 'Secure protection for patterns, prints, and weaves used in textiles and fabrics.',
      slug: 'textile',
    },
    {
      icon: PenTool,
      title: 'Surface Designs',
      description: 'Protect ornamental designs applied to product surfaces, enhancing their visual appeal.',
      slug: 'surface',
    },
    {
      icon: Globe,
      title: 'Design Services',
      description: 'Comprehensive support for design registration, prosecution, and portfolio management.',
      slug: 'services',
    },
    {
      icon: Search,
      title: 'Design Search',
      description: 'Conduct thorough searches to ensure your design is unique and avoid conflicts.',
      slug: 'search',
    },
    {
      icon: Eye,
      title: 'Design Renewal',
      description: 'Manage timely renewals to maintain ongoing protection for your registered designs.',
      slug: 'renewal',
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
          backgroundSize: '30px 30px',
        }}
      />

      {/* Hero Section - Updated for responsiveness */}
      <motion.section className="relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[80vh] flex items-center justify-center">
        {/* Corner Angles - Desktop only */}
        <div className="absolute top-8 left-8 hidden h-12 w-12 border-t-2 border-l-2 border-[#00ADB5] lg:block" />
        <div className="absolute top-8 right-8 hidden h-12 w-12 border-t-2 border-r-2 border-[#00ADB5] lg:block" />
        <div className="absolute bottom-8 left-8 hidden h-12 w-12 border-b-2 border-l-2 border-[#00ADB5] lg:block" />
        <div className="absolute bottom-8 right-8 hidden h-12 w-12 border-b-2 border-r-2 border-[#00ADB5] lg:block" />

        <motion.div className="max-w-7xl mx-auto text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-extrabold text-[#222831] relative inline-block tracking-tight">
            Design Services
            <span className="absolute top-1/2 -left-6 sm:-left-8 md:-left-12 lg:-left-16 -translate-y-1/2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#00ADB5] opacity-50 animate-pulse">✦</span>
            <span className="absolute top-1/2 -right-6 sm:-right-8 md:-right-12 lg:-right-16 -translate-y-1/2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#00ADB5] opacity-50 animate-pulse">✦</span>
          </h1>
          <p className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Elevating Your Brand with Innovative Design Protection
          </p>
        </motion.div>
      </motion.section>

      {/* Content Section - Improved spacing */}
      <section className="py-12 sm:py-16 md:py-24 space-y-12 sm:space-y-16 md:space-y-24">
        <div className="max-w-6xl mx-auto">
          {/* Design Overview - Better padding */}
          <motion.div className="mb-12 sm:mb-16 md:mb-24">
            <div className="relative max-w-3xl mx-auto p-8 sm:p-12">
              {/* Corner Angles - Responsive spacing */}
              <div className="absolute -top-6 -left-6 w-8 h-8 border-t-2 border-l-2 border-[#00ADB5]" />
              <div className="absolute -top-6 -right-6 w-8 h-8 border-t-2 border-r-2 border-[#00ADB5]" />
              <div className="absolute -bottom-6 -left-6 w-8 h-8 border-b-2 border-l-2 border-[#00ADB5]" />
              <div className="absolute -bottom-6 -right-6 w-8 h-8 border-b-2 border-r-2 border-[#00ADB5]" />

              <div className="text-center space-y-6">
                <h2 className="text-4xl font-bold mb-4">
                  <span className="text-[#00ADB5]">Design</span>{' '}
                  <span className="text-[#393E46]">Services</span>
                </h2>
                <p className="text-[#393E46] text-lg leading-relaxed">
                  Leonard Corporate Solutions specializes in protecting the visual and functional aspects of your creations. From industrial to fashion and textile designs, we offer expert registration, search, and renewal services to safeguard your intellectual property and maintain a competitive edge.
                </p>
                <p className="text-[#393E46] text-lg font-medium">
                  📩 Contact us at{' '}
                  <a href="mailto:info@leonardsolutions.in" className="text-[#00ADB5] hover:underline">
                    info@leonardsolutions.in
                  </a>{' '}
                  for tailored design protection solutions.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Our Services Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Our Design</span>{' '}
              <span className="text-[#00ADB5]">Services</span>
            </h2>
          </div>

          {/* Services Grid - Updated grid layout */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {serviceCards.map((service, index) => (
              <Link
                key={service.title}
                href={`/service/design/${service.slug}`}
                data-testid={`service-link-${service.title}`}
                className="group relative"
                onMouseEnter={() => setHoveredCard(service.title)}
                onMouseLeave={() => setHoveredCard(null)}
                aria-label={`Learn more about ${service.title}`}
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
                      <h3 className="text-xl font-bold text-[#222831] mb-3 group-hover:text-[#00ADB5] transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-[#393E46]/80 text-base leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-1 bg-[#00ADB5]"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    data-testid={`service-underline-${service.title}`}
                  />
                </motion.div>
              </Link>
            ))}
          </motion.div>

          {/* Closing Message - Responsive margins */}
          <motion.div className="mt-16 sm:mt-24 md:mt-32 relative max-w-3xl mx-auto px-4 sm:px-8">
            <div className="relative py-12">
              {/* Corner Angles */}
              <div className="absolute -top-8 -left-8 w-8 h-8 border-t-2 border-l-2 border-[#00ADB5]" />
              <div className="absolute -top-8 -right-8 w-8 h-8 border-t-2 border-r-2 border-[#00ADB5]" />
              <div className="absolute -bottom-8 -left-8 w-8 h-8 border-b-2 border-l-2 border-[#00ADB5]" />
              <div className="absolute -bottom-8 -right-8 w-8 h-8 border-b-2 border-r-2 border-[#00ADB5]" />

              <p className="text-[#393E46] text-lg text-center leading-relaxed">
                Leonard Corporate Solutions protects your designs with tailored legal expertise, ensuring robust protection and a competitive edge in the market.
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
          className="inline-flex items-center text-[#393E46] hover:text-[#00ADB5] transition-colors"
          aria-label="Navigate back to home page"
        >
          <span className="mr-2">←</span> Back to Home
        </Link>
      </div>
    </div>
  );
}