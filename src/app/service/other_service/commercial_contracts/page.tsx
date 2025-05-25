
'use client';

import { motion } from 'framer-motion';
import { FileText, Scale, Briefcase, Shield, Users, FileCheck, PenTool } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function CommercialContractsPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const serviceCards = [
    {
      icon: FileText,
      title: 'Contract Drafting',
      description: 'Draft precise and tailored commercial contracts for various industries.',
      route: '/service/other_service/commercial_contracts/contract-drafting',
    },
    {
      icon: PenTool,
      title: 'Contract Negotiation',
      description: 'Negotiate terms to secure favorable agreements for your business.',
      route: '/service/other_service/commercial_contracts/contract-negotiation',
    },
    {
      icon: Scale,
      title: 'Dispute Resolution',
      description: 'Resolve contract disputes through settlement or litigation support.',
      route: '/service/other_service/commercial_contracts/dispute-resolution',
    },
    {
      icon: Briefcase,
      title: 'Industry-Specific Expertise',
      description: 'Leverage our deep knowledge in specific sectors for customized contracts.',
      route: '/service/other_service/commercial_contracts/industry-expertise',
    },
    {
      icon: Shield,
      title: 'Pre-contractual Agreements',
      description: 'Prepare NDAs, MOUs, and Letters of Intent to protect your interests.',
      route: '/service/other_service/commercial_contracts/pre-contractual-agreements',
    },
    {
      icon: Users,
      title: 'Cross-disciplinary Support',
      description: 'Integrate corporate and employment law expertise for comprehensive contracts.',
      route: '/service/other_service/commercial_contracts/cross-disciplinary-support',
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
          backgroundSize: '20px 20px sm:30px 30px',
        }}
      />

      {/* Hero Section */}
      <motion.section
        className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Corner Angles */}
        <div className="absolute top-4 left-4 w-8 h-8 sm:top-6 sm:left-6 sm:w-10 sm:h-10 md:top-8 md:left-8 md:w-12 md:h-12 border-t-2 border-l-2 border-[#00ADB5] hidden sm:block" />
        <div className="absolute top-4 right-4 w-8 h-8 sm:top-6 sm:right-6 sm:w-10 sm:h-10 md:top-8 md:right-8 md:w-12 md:h-12 border-t-2 border-r-2 border-[#00ADB5] hidden sm:block" />
        <div className="absolute bottom-4 left-4 w-8 h-8 sm:bottom-6 sm:left-6 sm:w-10 sm:h-10 md:bottom-8 md:left-8 md:w-12 md:h-12 border-b-2 border-l-2 border-[#00ADB5] hidden sm:block" />
        <div className="absolute bottom-4 right-4 w-8 h-8 sm:bottom-6 sm:right-6 sm:w-10 sm:h-10 md:bottom-8 md:right-8 md:w-12 md:h-12 border-b-2 border-r-2 border-[#00ADB5] hidden sm:block" />

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#222831] relative inline-block tracking-tight">
            Commercial Contracts
            <span className="absolute top-1/2 -left-6 sm:-left-8 md:-left-12 lg:-left-16 -translate-y-1/2 text-[#00ADB5] text-2xl sm:text-3xl md:text-4xl lg:text-5xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-6 sm:-right-8 md:-right-12 lg:-right-16 -translate-y-1/2 text-[#00ADB5] text-2xl sm:text-3xl md:text-4xl lg:text-5xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-[#393E46]/80 max-w-md sm:max-w-lg md:max-w-2xl mx-auto font-light">
            Expert Drafting and Negotiation for Your Business Agreements
          </p>
        </motion.div>
      </motion.section>

      {/* Commercial Contracts Information Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-sm sm:max-w-md md:max-w-3xl lg:max-w-6xl mx-auto relative">
          {/* Commercial Contracts Overview */}
          <motion.div
            className="mb-12 sm:mb-16 md:mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-6 md:px-8">
              {/* Corner Angles */}
              <div className="absolute -top-4 -left-4 w-6 h-6 sm:-top-6 sm:-left-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-[#00ADB5]" />
              <div className="absolute -top-4 -right-4 w-6 h-6 sm:-top-6 sm:-right-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-[#00ADB5]" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 sm:-bottom-6 sm:-left-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-[#00ADB5]" />
              <div className="absolute -bottom-4 -right-4 w-6 h-6 sm:-bottom-6 sm:-right-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-[#00ADB5]" />

              <div className="text-center space-y-4 sm:space-y-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 relative inline-block">
                  <span className="text-[#00ADB5]">Commercial</span>{' '}
                  <span className="text-[#393E46]">Contracts Overview</span>
                </h2>
                <p className="text-[#393E46] text-sm sm:text-base md:text-lg leading-relaxed">
                  In need of commercial contract advice? We draft, advise on, and negotiate all manner of commercial contracts. While we have extensive expertise in specific industry sectors, many of the contracts we draft daily are applicable across all industries.
                </p>
                <p className="text-[#393E46] text-sm sm:text-base md:text-lg leading-relaxed">
                  Our services also include dispute resolution for alleged breaches of commercial contracts, offering assistance with settlements, small claims, and High Court litigation.
                </p>
                <p className="text-[#393E46] text-sm sm:text-base md:text-lg leading-relaxed">
                  There is some crossover between commercial contracts and other work we do, such as Shareholders Agreements, Partnership and LLP Agreements, and Business Sale and Acquisition Agreements, which typically fall under corporate work, or contracts related to employment law.
                </p>
                <p className="text-[#393E46] text-sm sm:text-base md:text-lg font-medium">
                  📩 Contact us at{' '}
                  <a href="mailto:info@leonardsolutions.in" className="text-[#00ADB5] hover:underline">
                    info@leonardsolutions.in
                  </a>{' '}
                  for tailored assistance with your commercial contract needs.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contract Types Section */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
              <span className="text-[#222831]">Types of</span>{' '}
              <span className="text-[#00ADB5]">Contracts</span>
            </h2>
          </div>

          {/* Contract Types Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 md:px-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Contracts for Services */}
            <div className="relative">
              <motion.div
                className="h-full bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#00ADB5]/10 relative overflow-hidden"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="absolute top-4 right-4 text-[#00ADB5] text-lg sm:text-xl opacity-30 group-hover:opacity-100 transition-opacity duration-300">✦</span>
                <div className="flex flex-col gap-4 sm:gap-5 relative z-10">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#00ADB5] rounded-xl flex items-center justify-center text-white">
                    <FileText className="h-6 w-6 sm:h-7 sm:w-7" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#222831] mb-3 group-hover:text-[#00ADB5] transition-colors duration-300">
                      Contracts for Services
                    </h3>
                    <ul className="text-[#393E46]/80 text-sm sm:text-base leading-relaxed space-y-2 sm:space-y-3">
                      {[
                        'Consultancy Agreements (fixed price and/or time & materials), also referred to as Services Agreements, Sub-contractor Agreements, and Supplier Agreements.',
                        'Master Services Agreements, also referred to as Framework Agreements or Call-off Agreements.',
                        'Subscription Service Agreements, which can include Software Platform as a Service or Application Service Provider Agreements.',
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="h-2 w-2 rounded-full bg-[#00ADB5] mt-1.5 sm:mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#00ADB5] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </motion.div>
            </div>

            {/* Contracts for Resale and Distribution */}
            <div className="relative">
              <motion.div
                className="h-full bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#00ADB5]/10 relative overflow-hidden"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="absolute top-4 right-4 text-[#00ADB5] text-lg sm:text-xl opacity-30 group-hover:opacity-100 transition-opacity duration-300">✦</span>
                <div className="flex flex-col gap-4 sm:gap-5 relative z-10">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#00ADB5] rounded-xl flex items-center justify-center text-white">
                    <Briefcase className="h-6 w-6 sm:h-7 sm:w-7" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#222831] mb-3 group-hover:text-[#00ADB5] transition-colors duration-300">
                      Contracts for Resale and Distribution
                    </h3>
                    <ul className="text-[#393E46]/80 text-sm sm:text-base leading-relaxed space-y-2 sm:space-y-3">
                      {[
                        'Reseller Agreements',
                        'Distribution Agreements',
                        'Lead-referral Agreements',
                        'Licensing Agreements, including data aggregation',
                        'Partnering Agreements',
                        'White-label Agreements',
                        'Joint Marketing Agreements',
                        'Agency Agreements',
                        'Value Added Reseller Agreements (“VAR”)',
                        'OEM Agreements',
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="h-2 w-2 rounded-full bg-[#00ADB5] mt-1.5 sm:mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#00ADB5] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </motion.div>
            </div>

            {/* Pre-contractual Documents and Other Agreements */}
            <div className="relative">
              <motion.div
                className="h-full bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#00ADB5]/10 relative overflow-hidden"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="absolute top-4 right-4 text-[#00ADB5] text-lg sm:text-xl opacity-30 group-hover:opacity-100 transition-opacity duration-300">✦</span>
                <div className="flex flex-col gap-4 sm:gap-5 relative z-10">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#00ADB5] rounded-xl flex items-center justify-center text-white">
                    <FileCheck className="h-6 w-6 sm:h-7 sm:w-7" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#222831] mb-3 group-hover:text-[#00ADB5] transition-colors duration-300">
                      Pre-contractual Documents and Other Agreements
                    </h3>
                    <ul className="text-[#393E46]/80 text-sm sm:text-base leading-relaxed space-y-2 sm:space-y-3">
                      {[
                        'Non-disclosure Agreements (also known as “NDAs” and “confidentiality agreements”)',
                        'Memoranda of Understanding',
                        'Letters of Intent',
                        'Franchise Agreements',
                        'Joint Venture Agreements',
                        'Marketing and Sponsorship Agreements',
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="h-2 w-2 rounded-full bg-[#00ADB5] mt-1.5 sm:mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#00ADB5] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </motion.div>
            </div>
          </motion.div>

          {/* Our Services Section */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16 mt-12 sm:mt-16 md:mt-24">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
              <span className="text-[#222831]">Our Commercial</span>{' '}
              <span className="text-[#00ADB5]">Contracts Services</span>
            </h2>
          </div>

          {/* Services Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 md:px-8"
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
                  className="h-full bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#00ADB5]/10 relative overflow-hidden"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="absolute top-4 right-4 text-[#00ADB5] text-lg sm:text-xl opacity-30 group-hover:opacity-100 transition-opacity duration-300">✦</span>
                  <div className="flex flex-col gap-4 sm:gap-5 relative z-10">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#00ADB5] rounded-xl flex items-center justify-center text-white">
                      <service.icon className="h-6 w-6 sm:h-7 sm:w-7" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#222831] mb-3 group-hover:text-[#00ADB5] transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-[#393E46]/80 text-sm sm:text-base leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#00ADB5] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </motion.div>
              </Link>
            ))}
          </motion.div>

          {/* Closing Message */}
          <motion.div
            className="mt-12 sm:mt-16 md:mt-24 lg:mt-32 relative max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-6 md:px-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative py-8 sm:py-12">
              {/* Corner Angles */}
              <div className="absolute -top-4 -left-4 w-6 h-6 sm:-top-6 sm:-left-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-[#00ADB5]" />
              <div className="absolute -top-4 -right-4 w-6 h-6 sm:-top-6 sm:-right-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-[#00ADB5]" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 sm:-bottom-6 sm:-left-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-[#00ADB5]" />
              <div className="absolute -bottom-4 -right-4 w-6 h-6 sm:-bottom-6 sm:-right-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-[#00ADB5]" />

              <p className="text-[#393E46] text-sm sm:text-base md:text-lg text-center leading-relaxed">
                At Leonard Corporate Solutions, our commercial contract services are designed to protect and empower your business. We provide tailored legal expertise to draft, negotiate, and resolve disputes, ensuring your agreements are robust and aligned with your goals.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back to Home Link */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8">
        <Link
          href="/"
          className="inline-flex items-center text-[#393E46] hover:text-[#00ADB5] transition-colors text-sm sm:text-base"
        >
          <span className="mr-2">←</span> Back to Home
        </Link>
      </div>
    </div>
  );
}
