'use client';

import { motion } from 'framer-motion';
import { Scale, FileText, Shield, Briefcase, Lock, Gavel } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function BusinessLawCompliancePage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const serviceCards = [
    {
      icon: Scale,
      title: 'Regulatory Compliance Audits',
      description: 'Conduct thorough audits to ensure your business meets all regulatory requirements.',
      route: '/service/business-law/compliance-audits',
    },
    {
      icon: FileText,
      title: 'Contract Management',
      description: 'Draft, review, and manage contracts to secure your business transactions.',
      route: '/service/business-law/contract-management',
    },
    {
      icon: Shield,
      title: 'Risk Assessment & Mitigation',
      description: 'Identify and address legal risks to protect your business operations.',
      route: '/service/business-law/risk-assessment',
    },
    {
      icon: Briefcase,
      title: 'Corporate Policy Development',
      description: 'Create compliant policies to govern your business operations effectively.',
      route: '/service/business-law/policy-development',
    },
    {
      icon: Lock,
      title: 'Data Protection Compliance',
      description: 'Ensure compliance with GDPR, DPDP, and other data protection regulations.',
      route: '/service/business-law/data-protection',
    },
    {
      icon: Gavel,
      title: 'Dispute Resolution Support',
      description: 'Navigate business disputes with expert legal guidance and representation.',
      route: '/service/business-law/dispute-resolution',
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
        <div className="absolute top-8 left-8 hidden h-12 w-12 border-t-2 border-l-2 border-black lg:block" />
        <div className="absolute top-8 right-8 hidden h-12 w-12 border-t-2 border-r-2 border-black lg:block" />
        <div className="absolute bottom-8 left-8 hidden h-12 w-12 border-b-2 border-l-2 border-black lg:block" />
        <div className="absolute bottom-8 right-8 hidden h-12 w-12 border-b-2 border-r-2 border-black lg:block" />

        <motion.div className="max-w-7xl mx-auto text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-extrabold text-[#222831] relative inline-block tracking-tight">
            Business Law & Compliance Services
            <span className="absolute top-1/2 -left-6 sm:-left-8 md:-left-12 lg:-left-16 -translate-y-1/2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black opacity-50 animate-pulse">✦</span>
            <span className="absolute top-1/2 -right-6 sm:-right-8 md:-right-12 lg:-right-16 -translate-y-1/2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black opacity-50 animate-pulse">✦</span>
          </h1>
          <p className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Ensure Legal Security for Your Business Operations
          </p>
        </motion.div>
      </motion.section>

      {/* Content Sections */}
      <section className="py-12 sm:py-16 md:py-24 space-y-12 sm:space-y-16 md:space-y-24">
        <div className="max-w-6xl mx-auto relative">
          {/* Business Law & Compliance Overview */}
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
                <h2 className="text-4xl font-bold mb-4 relative inline-block">
                  <span className="text-black">Business Law &</span>{' '}
                  <span className="text-[#393E46]">Compliance Overview</span>
                </h2>
                <p className="text-[#393E46] text-lg leading-relaxed">
                  At Leonard Corporate Solutions, we provide expert business law and compliance services to ensure your operations adhere to all legal requirements. Our tailored guidance helps businesses of all sizes navigate complex regulations with confidence.
                </p>
                <p className="text-[#393E46] text-lg leading-relaxed">
                  From regulatory audits to dispute resolution, our team delivers strategic solutions to keep your business legally sound and competitive in the Indian market.
                </p>
                <p className="text-[#393E46] text-lg font-medium">
                  📩 Need expert business law support? Reach out at{' '}
                  <a href="mailto:info@leonardsolutions.in" className="text-black hover:underline">
                    info@leonardsolutions.in
                  </a>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Our Services Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Our Business Law</span>{' '}
              <span className="text-black">& Compliance Services</span>
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
            {serviceCards.map((service) => (
              <Link
                key={service.title}
                href={service.route}
                className="group relative"
                onMouseEnter={() => setHoveredCard(service.title)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <motion.div
                  className="h-full bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-black/10 relative overflow-hidden"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="absolute top-4 right-4 text-black text-xl opacity-30 group-hover:opacity-100 transition-opacity duration-300">✦</span>
                  <div className="flex flex-col gap-5 relative z-10">
                    <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center text-white">
                      <service.icon className="h-7 w-7" />
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
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
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
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-black" />
              <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-black" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-black" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-black" />

              <p className="text-[#393E46] text-lg text-center leading-relaxed">
                At Leonard Corporate Solutions, our business law and compliance services safeguard your operations while fostering growth. We provide strategic, tailored solutions to ensure compliance and mitigate risks, empowering your business to thrive.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back to Home Link */}
      <div className="container mx-auto px-4 sm:px-6 md:px-16 lg:px-24 py-8">
        <Link
          href="/"
          className="inline-flex items-center text-[#393E46] hover:text-black transition-colors"
        >
          <span className="mr-2">←</span> Back to Home
        </Link>
      </div>
    </div>
  );
}
