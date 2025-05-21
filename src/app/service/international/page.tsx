
'use client';

import { motion } from 'framer-motion';
import { 
  BookOpen, FileText, Gavel, Shield, Globe, UserCheck, Package, Lock, Scale, 
  PenTool, Watch, Truck, AlertTriangle 
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function InternationalServices() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const internationalServices = [
    { name: 'International Trademark Filing', icon: Shield, description: 'File trademarks via Madrid Protocol or national filings in USA, EU, UK, UAE, Australia, and more.', route: 'service/international/trademark-filing' },
    { name: 'International Patent Filing', icon: PenTool, description: 'File global patents via PCT applications and handle national phase entries efficiently.', route: 'service/international/patent-filing' },
    { name: 'Global Copyright Protection', icon: BookOpen, description: 'Secure your work internationally under the Berne Convention.', route: 'service/international/copyright-protection' },
    { name: 'International Design Protection', icon: Scale, description: 'File under the Hague Agreement for international industrial design rights.', route: 'service/international/design-protection' },
    { name: 'IP & Legal Consulting Across Borders', icon: Globe, description: 'Strategic advisory for multinational IP portfolios, licensing, and market entry strategies.', route: 'service/international/ip-legal-consulting' },
    { name: 'IP Watch Services', icon: Watch, description: 'Monitor and protect trademarks, patents, and designs across jurisdictions.', route: 'service/international/ip-watch' },
    { name: 'Anti-Counterfeiting for Exporters', icon: AlertTriangle, description: 'Customs watchlisting, global cease & desist, and enforcement in international markets.', route: 'service/international/anti-counterfeiting' },
    { name: 'Customs Watch Listing in International Markets', icon: Truck, description: 'Register IP with customs to stop counterfeits at borders.', route: 'service/international/customs-watch' },
    { name: 'Cease & Desist + Enforcement in Foreign Jurisdictions', icon: Gavel, description: 'Enforce IP rights through notices and legal actions abroad.', route: 'service/international/enforcement' },
    { name: 'Commercial Contracts', icon: FileText, description: 'Draft, negotiate, and vet business contracts with airtight legal precision.', route: 'service/international/commercial-contracts' },
    { name: 'Employment & HR Law', icon: UserCheck, description: 'Stay compliant with labour laws, HR policies, and employee agreements.', route: 'service/international/employment-hr-law' },
    { name: 'Outsourcing & Procurement', icon: Package, description: 'Manage vendor and procurement contracts with risk-free strategies.', route: 'service/international/outsourcing-procurement' },
    { name: 'Privacy & Data Protection', icon: Lock, description: 'Get GDPR and India DPDP compliance right with privacy-first legal consulting.', route: 'service/international/privacy-data-protection' },
    { name: 'FSSAI Licensing & Compliance', icon: Scale, description: 'Legal assistance for obtaining food licenses and staying compliant in the F&B industry.', route: 'service/international/fssai-licensing' },
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
            International Services
            <span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Comprehensive Legal & IP Solutions for a Modern Business World
          </p>
        </motion.div>
      </motion.section>

      {/* International Services Information Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 relative">
        <div className="max-w-6xl mx-auto relative">
          {/* International Services Overview */}
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
                <h2 className="text-4xl font-bold mb-4 relative inline-block">
                  <span className="text-[#00ADB5]">International</span>{' '}
                  <span className="text-[#393E46]">Services Overview</span>
                </h2>
                <p className="text-[#393E46] text-lg leading-relaxed">
                  At Leonard Corporate Solutions, we deliver sharp, scalable legal services built to protect innovation, fuel growth, and ensure compliance — in India and globally. Whether you're a startup, enterprise, or multinational, our legal strategies are crafted to give your business a competitive edge.
                </p>
                <p className="text-[#393E46] text-lg leading-relaxed">
                  Our services evolve with your business needs. We continuously update and expand our offerings to serve you better, providing tailored solutions for intellectual property, compliance, and commercial contracts across borders.
                </p>
                <p className="text-[#393E46] text-lg font-medium">
                  📩 Need tailored legal support? Reach out at{' '}
                  <a href="mailto:info@leonardsolutions.in" className="text-[#00ADB5] hover:underline">
                    info@leonardsolutions.in
                  </a>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Our Services Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Our International</span>{' '}
              <span className="text-[#00ADB5]">Services</span>
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
            {internationalServices.map((service) => (
              <Link
                key={service.name}
                href={service.route}
                className="group relative"
                onMouseEnter={() => setHoveredCard(service.name)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <motion.div
                  className="h-full bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#00ADB5]/10 relative overflow-hidden"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="absolute top-4 right-4 text-[#00ADB5] text-xl opacity-30 group-hover:opacity-100 transition-opacity duration-300">✦</span>
                  <div className="flex flex-col gap-5 relative z-10">
                    <div className="w-14 h-14 bg-[#00ADB5] rounded-xl flex items-center justify-center text-white">
                      <service.icon className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#222831] mb-3 group-hover:text-[#00ADB5] transition-colors duration-300">
                        {service.name}
                      </h3>
                      <p className="text-[#393E46]/80 text-base leading-relaxed">
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
            className="mt-32 relative max-w-3xl mx-auto px-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative py-12">
              {/* Corner Angles */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-[#00ADB5]" />
              <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-[#00ADB5]" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-[#00ADB5]" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-[#00ADB5]" />

              <p className="text-[#393E46] text-lg text-center leading-relaxed">
                At Leonard Corporate Solutions, our international services empower your business with robust legal and IP solutions. We provide strategic guidance to protect your innovation and ensure compliance in a global market, tailored to your unique needs.
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
