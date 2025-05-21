'use client';

import { motion } from 'framer-motion';
import { Lock, FileText, Scale, Briefcase, Shield, Users, Globe } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function PrivacyDataProtectionPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const serviceCards = [
    {
      icon: Lock,
      title: 'Privacy Policy Drafting',
      description: 'Craft comprehensive privacy policies tailored to your business.',
      route: '#privacy-policy-drafting',
    },
    {
      icon: FileText,
      title: 'Data Processor Compliance',
      description: 'Ensure contracts meet data processor obligations.',
      route: '#data-processor-compliance',
    },
    {
      icon: Scale,
      title: 'Regulatory Advisory',
      description: 'Navigate complex data protection laws with expert guidance.',
      route: '#regulatory-advisory',
    },
    {
      icon: Globe,
      title: 'Global Compliance',
      description: 'Advise on multi-national data protection obligations.',
      route: '#global-compliance',
    },
    {
      icon: Shield,
      title: 'E-commerce & SaaS Support',
      description: 'Help e-commerce and SaaS providers meet privacy standards.',
      route: '#ecommerce-saas-support',
    },
    {
      icon: Users,
      title: 'Staff Training Workshops',
      description: 'Deliver tailored data protection training for all staff levels.',
      route: '#staff-training',
    },
  ];

  const expertiseItems = [
    'Drafting all manner of privacy policies.',
    'Assisting various companies with regulations over the data processor obligations/clauses in contracts with its customers and suppliers.',
    'Advising a company that provides ‘know your customer’ services on how to comply with the legislation.',
    'Providing advice to a mobile virtual network operator regarding the legality of location-based services (prior to these becoming widely available).',
    'Assisting numerous providers of e-commerce websites and SaaS comply with their obligations under data protection and privacy law.',
    'Advising on cookies, behavioral advertising, and other marketing activities.',
    'Advising multi-national corporations regarding their obligations in India and several other countries.',
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
            Privacy & Data Protection
            <span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Expert Guidance for Data Protection Compliance
          </p>
        </motion.div>
      </motion.section>

      {/* Privacy and Data Protection Information Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 relative">
        <div className="max-w-6xl mx-auto relative">
          {/* Privacy and Data Protection Overview */}
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
                  <span className="text-[#00ADB5]">Privacy &</span>{' '}
                  <span className="text-[#393E46]">Data Protection Overview</span>
                </h2>
                <p className="text-[#393E46] text-lg leading-relaxed">
                  At Leonard Corporate Solutions, our data protection experts have extensive experience helping clients navigate the complex landscape of data protection legislation. We have advised a diverse range of businesses on a wide array of privacy and data protection issues, ensuring compliance while supporting business growth.
                </p>
                <p className="text-[#393E46] text-lg leading-relaxed">
                  Our practical, risk-focused approach ensures that legal requirements do not hinder your operations. We also offer tailored data protection training workshops, using real-life examples from your business, suitable for everyone from junior sales staff to in-house counsel.
                </p>
                <p className="text-[#393E46] text-lg font-medium">
                  📩 Contact us at{' '}
                  <a href="mailto:info@leonardsolutions.in" className="text-[#00ADB5] hover:underline">
                    info@leonardsolutions.in
                  </a>{' '}
                  for expert data protection and privacy law support.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Key Areas of Expertise */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-[#222831]">Key Areas</span>{' '}
                <span className="text-[#00ADB5]">of Expertise</span>
              </h2>
            </div>
            <motion.div
              className="relative max-w-3xl mx-auto px-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative bg-white rounded-xl p-8 shadow-md border border-[#00ADB5]/10">
                {/* Corner Angles */}
                <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-[#00ADB5]" />
                <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-[#00ADB5]" />
                <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-[#00ADB5]" />
                <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-[#00ADB5]" />

                <h3 className="text-2xl font-bold text-[#222831] mb-6 flex items-center gap-2">
                  <FileText className="h-7 w-7 text-[#00ADB5]" />
                  Privacy and Compliance Services
                </h3>
                <ul className="text-[#393E46] text-base leading-relaxed space-y-4">
                  {expertiseItems.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3 group"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <span className="h-2 w-2 rounded-full bg-[#00ADB5] mt-2 flex-shrink-0 group-hover:scale-125 transition-transform" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Our Services Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Our Privacy</span>{' '}
              <span className="text-[#00ADB5]">& Data Protection Services</span>
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
                  transition={{ duration: 0.2 }}
                >
                  <span className="absolute top-4 right-4 text-[#00ADB5] text-xl opacity-30 group-hover:opacity-100 transition-opacity duration-300">✦</span>
                  <div className="flex flex-col gap-5 relative z-10">
                    <div className="w-14 h-14 bg-[#00ADB5] rounded-xl flex items-center justify-center text-white">
                      <service.icon className="h-7 w-7" />
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
                At Leonard Corporate Solutions, our privacy and data protection services ensure your business complies with global regulations while fostering growth. We provide practical, risk-focused solutions and tailored training to empower your team.
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