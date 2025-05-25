'use client';

import { motion } from 'framer-motion';
import { UserCheck, FileText, Scale, Briefcase, Package, DollarSign } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function StartupLegalSupportPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const serviceCards = [
    {
      icon: Briefcase,
      title: 'Incorporation & Structuring',
      description: 'Seamless company formation with expert guidance on choosing the optimal legal structure.',
      route: '/service/startup/incorporation',
    },
    {
      icon: FileText,
      title: 'Founder Agreements',
      description: 'Draft robust founder agreements to clarify roles, equity, and responsibilities.',
      route: '/service/startup/founder-agreements',
    },
    {
      icon: DollarSign,
      title: 'Investor Agreements',
      description: 'Craft investor-friendly term sheets, SAFE notes, and equity agreements.',
      route: '/service/startup/investor-agreements',
    },
    {
      icon: Scale,
      title: 'Regulatory Compliance',
      description: 'Navigate startup-specific regulations to ensure compliance and avoid penalties.',
      route: '/service/startup/regulatory-compliance',
    },
    {
      icon: Package,
      title: 'Intellectual Property Protection',
      description: 'Safeguard your startup\'s IP with trademark, patent, and copyright services.',
      route: '/service/startup/ip-protection',
    },
    {
      icon: UserCheck,
      title: 'Employee & Contractor Agreements',
      description: 'Create clear, compliant contracts for your team and freelancers.',
      route: '/service/startup/employee-agreements',
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

      {/* Hero Section */}
      <motion.section className="relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[80vh] flex items-center justify-center">
        {/* Corner Angles - Desktop only */}
        <div className="absolute top-8 left-8 hidden h-12 w-12 border-t-2 border-l-2 border-[#00ADB5] lg:block" />
        <div className="absolute top-8 right-8 hidden h-12 w-12 border-t-2 border-r-2 border-[#00ADB5] lg:block" />
        <div className="absolute bottom-8 left-8 hidden h-12 w-12 border-b-2 border-l-2 border-[#00ADB5] lg:block" />
        <div className="absolute bottom-8 right-8 hidden h-12 w-12 border-b-2 border-r-2 border-[#00ADB5] lg:block" />

        <motion.div className="max-w-7xl mx-auto text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-extrabold text-[#222831] relative inline-block tracking-tight">
            Startup Legal Support
            <span className="absolute top-1/2 -left-6 sm:-left-8 md:-left-12 lg:-left-16 -translate-y-1/2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#00ADB5] opacity-50 animate-pulse">✦</span>
            <span className="absolute top-1/2 -right-6 sm:-right-8 md:-right-12 lg:-right-16 -translate-y-1/2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#00ADB5] opacity-50 animate-pulse">✦</span>
          </h1>
          <p className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Protect & Grow Your Startup with Comprehensive Legal Support
          </p>
        </motion.div>
      </motion.section>

      {/* Startup Legal Support Information Section */}
      <section className="py-12 sm:py-16 md:py-24 space-y-12 sm:space-y-16 md:space-y-24">
        <div className="max-w-6xl mx-auto">
          {/* Startup Legal Support Overview */}
          <motion.div
            className="mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative max-w-3xl mx-auto px-8">
              {/* Corner Angles */}
              <div className="absolute -top-8 -left-8 w-8 h-8 border-t-2 border-l-2 border-[#00ADB5]" />
              <div className="absolute -top-8 -right-8 w-8 h-8 border-t-2 border-r-2 border-[#00ADB5]" />
              <div className="absolute -bottom-8 -left-8 w-8 h-8 border-b-2 border-l-2 border-[#00ADB5]" />
              <div className="absolute -bottom-8 -right-8 w-8 h-8 border-b-2 border-r-2 border-[#00ADB5]" />

              <div className="text-center space-y-6">
                <h2 className="text-4xl font-bold mb-4">
                  <span className="text-[#00ADB5]">Startup Legal</span>{' '}
                  <span className="text-[#393E46]">Support</span>
                </h2>
                <p className="text-[#393E46] text-lg leading-relaxed">
                  BrandSecure empowers startups with tailored legal support, from incorporation to IP protection, ensuring a solid foundation for growth and compliance.
                </p>
                <p className="text-[#393E46] text-lg font-medium">
                  📩 Contact us at{' '}
                  <a href="mailto:info@brandsecure.in" className="text-[#00ADB5] hover:underline">
                    info@brandsecure.in
                  </a>{' '}
                  for personalized startup legal solutions.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Our Services Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Our Startup</span>{' '}
              <span className="text-[#00ADB5]">Legal Services</span>
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
                className="group relative"
                onMouseEnter={() => setHoveredCard(service.title)}
                onMouseLeave={() => setHoveredCard(null)}
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
                    transition={{ duration: 0.3, ease: "easeOut" }}
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
              <div className="absolute -top-8 -left-8 w-8 h-8 border-t-2 border-l-2 border-[#00ADB5]" />
              <div className="absolute -top-8 -right-8 w-8 h-8 border-t-2 border-r-2 border-[#00ADB5]" />
              <div className="absolute -bottom-8 -left-8 w-8 h-8 border-b-2 border-l-2 border-[#00ADB5]" />
              <div className="absolute -bottom-8 -right-8 w-8 h-8 border-b-2 border-r-2 border-[#00ADB5]" />

              <p className="text-[#393E46] text-lg text-center leading-relaxed">
                BrandSecure’s startup legal services are designed to support your entrepreneurial journey, providing the legal foundation needed to thrive.
              </p>
            </div>
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
  );
}