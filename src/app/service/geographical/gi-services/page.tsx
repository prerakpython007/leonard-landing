'use client';

import { motion } from 'framer-motion';
import { Shield, FileCheck, Scale, Search, Globe, BadgeAlert } from 'lucide-react';
import Link from 'next/link';

export default function GIServicesPage() {
  const features = [
    {
      title: 'Registration Support',
      description: 'Comprehensive assistance with GI registration and documentation.',
      icon: FileCheck
    },
    {
      title: 'Protection Strategy',
      description: 'Effective strategies for GI protection and enforcement.',
      icon: Shield
    },
    {
      title: 'Expert Consultation',
      description: 'Professional consultation for optimizing your GI portfolio.',
      icon: Scale
    },
    {
      title: 'Global Management',
      description: 'International GI management for worldwide protection.',
      icon: Globe
    },
    {
      title: 'Documentation',
      description: 'Complete support with GI documentation and compliance.',
      icon: Search
    },
    {
      title: 'Rights Enforcement',
      description: 'Robust enforcement of your GI rights and interests.',
      icon: BadgeAlert
    }
  ];

  return (
    <div className="min-h-screen bg-[#EEEEEE] relative rounded-b-[170px] font-montserrat overflow-hidden">
      {/* Grid Pattern */}
      <div className="fixed inset-0 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(to right, rgba(0,0,0,0.025) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0,0,0,0.025) 1px, transparent 1px)
        `,
        backgroundSize: '30px 30px'
      }} />

      {/* Hero Section */}
      <motion.section
        className="relative h-[80vh] flex items-center justify-center px-4 md:px-16 lg:px-24"
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
            Comprehensive GI Services
            <span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Protect Your Regional Products with Expert GI Services
          </p>
        </motion.div>
      </motion.section>

      {/* Content Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 relative">
        <div className="max-w-6xl mx-auto relative">
          {/* Overview */}
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

              <div className="text-[#393E46] space-y-6">
                <p className="text-lg leading-relaxed">
                  At Leonard Corporate Solutions, we offer end-to-end Geographical Indications (GI) services to help you protect and manage your regional products. Whether you're looking to register a new GI, enforce your rights, or expand internationally, our expert team is here to support you every step of the way.
                </p>
                <h3 className="text-2xl font-bold text-[#222831] mt-8 mb-4">Why Choose Our GI Services?</h3>
                <ul className="space-y-4 list-none pl-5">
                  <li className="relative pl-6 before:content-['✦'] before:absolute before:left-0 before:text-[#00ADB5]">
                    Holistic Support: We cover every aspect of GI management, from registration to enforcement.
                  </li>
                  <li className="relative pl-6 before:content-['✦'] before:absolute before:left-0 before:text-[#00ADB5]">
                    Expert Guidance: Our team has extensive experience in GI laws and regulations worldwide.
                  </li>
                  <li className="relative pl-6 before:content-['✦'] before:absolute before:left-0 before:text-[#00ADB5]">
                    Tailored Solutions: We customize our services to meet the unique needs of your regional products.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-[#00ADB5] rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#222831] mb-2">{feature.title}</h3>
                <p className="text-[#393E46]/80">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <section className="py-32 px-4 md:px-16 lg:px-24">
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="relative max-w-3xl mx-auto px-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="absolute -top-8 -left-8 w-8 h-8 border-t-2 border-l-2 border-[#00ADB5]" />
                <div className="absolute -top-8 -right-8 w-8 h-8 border-t-2 border-r-2 border-[#00ADB5]" />
                <div className="absolute -bottom-8 -left-8 w-8 h-8 border-b-2 border-l-2 border-[#00ADB5]" />
                <div className="absolute -bottom-8 -right-8 w-8 h-8 border-b-2 border-r-2 border-[#00ADB5]" />
                <h2 className="text-4xl font-bold mb-4">Safeguard Your GI with Comprehensive Services</h2>
                <p className="text-[#393E46] text-lg leading-relaxed mb-6">
                  Protect your regional heritage and ensure the authenticity of your products with our comprehensive GI services. Contact us today to get started!
                </p>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center px-6 py-3 bg-[#00ADB5] text-white font-medium rounded-full hover:bg-[#222831] transition-colors duration-300"
                >
                  Contact Us
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}