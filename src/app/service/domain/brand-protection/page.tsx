'use client';

import { motion } from 'framer-motion';
import { Shield, Search, Globe, AlertTriangle, Lock, FileCheck } from 'lucide-react';
import Link from 'next/link';

export default function BrandProtectionPage() {
  const features = [
    {
      icon: Search,
      title: "Brand Monitoring",
      description: "Continuous surveillance of domain registrations and online presence for brand infringement."
    },
    {
      icon: Shield,
      title: "Preventive Protection",
      description: "Proactive measures to prevent domain name abuse and cybersquatting."
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Worldwide brand protection across multiple jurisdictions and TLDs."
    },
    {
      icon: AlertTriangle,
      title: "Threat Detection",
      description: "Early warning system for potential domain name misuse and brand abuse."
    },
    {
      icon: Lock,
      title: "Domain Security",
      description: "Enhanced security measures to protect your domain portfolio."
    },
    {
      icon: FileCheck,
      title: "Compliance Management",
      description: "Ensure adherence to international brand protection standards."
    }
  ];

  const brandProtectionDetails = [
    {
      title: "Domain Name Monitoring",
      content: "Our comprehensive monitoring system tracks domain registrations worldwide, identifying potential threats to your brand. We use advanced algorithms to detect variations, typos, and similar domains that could be used for brand abuse."
    },
    {
      title: "Enforcement Strategy",
      content: "We develop and implement custom enforcement strategies to combat unauthorized use of your brand online. This includes takedown procedures, cease and desist actions, and coordinated legal responses."
    },
    {
      title: "Preventive Measures",
      content: "Proactive domain registration strategies and defensive registrations help prevent cybersquatting and brand abuse before they occur. We identify and secure key domains across relevant TLDs."
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
      <motion.section className="relative h-[80vh] flex items-center justify-center px-4 md:px-16 lg:px-24">
        {/* Corner Angles */}
        <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-[#00ADB5] hidden lg:block" />
        <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-[#00ADB5] hidden lg:block" />
        <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-[#00ADB5] hidden lg:block" />
        <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-[#00ADB5] hidden lg:block" />

        <motion.div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-extrabold text-[#222831] relative inline-block tracking-tight">
            Brand Protection
            <span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Safeguarding Your Digital Brand Identity
          </p>
        </motion.div>
      </motion.section>

      {/* Content Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 relative">
        <div className="max-w-6xl mx-auto space-y-32">
          {/* Overview Section */}
          <motion.div className="relative max-w-3xl mx-auto px-8">
            {/* Corner Angles */}
            <div className="absolute -top-8 -left-8 w-8 h-8 border-t-2 border-l-2 border-[#00ADB5]" />
            <div className="absolute -top-8 -right-8 w-8 h-8 border-t-2 border-r-2 border-[#00ADB5]" />
            <div className="absolute -bottom-8 -left-8 w-8 h-8 border-b-2 border-l-2 border-[#00ADB5]" />
            <div className="absolute -bottom-8 -right-8 w-8 h-8 border-b-2 border-r-2 border-[#00ADB5]" />

            <div className="text-[#393E46] space-y-6">
              <h2 className="text-3xl font-bold text-center mb-8">
                <span className="text-[#00ADB5]">Comprehensive</span>{' '}
                <span className="text-[#222831]">Brand Protection</span>
              </h2>
              <p className="text-lg leading-relaxed">
                Our brand protection services offer comprehensive solutions to safeguard your digital assets and brand identity. We employ advanced monitoring systems and legal expertise to protect your brand from unauthorized use and domain abuse.
              </p>
              <ul className="space-y-4 list-none pl-5">
                {[
                  'Domain name monitoring and protection',
                  'Anti-cybersquatting measures',
                  'Brand abuse prevention',
                  'Online brand enforcement',
                  'Domain recovery services',
                  'Strategic brand protection planning'
                ].map((item, index) => (
                  <li key={index} className="relative pl-6 before:content-['✦'] before:absolute before:left-0 before:text-[#00ADB5]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className="absolute top-4 right-4 text-[#00ADB5] text-xl opacity-30 group-hover:opacity-100 transition-opacity duration-300">✦</span>
                <div className="w-12 h-12 bg-[#00ADB5] rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#222831] mb-3 group-hover:text-[#00ADB5] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-[#393E46]/80">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Detailed Sections */}
          {brandProtectionDetails.map((detail, index) => (
            <motion.div 
              key={detail.title}
              className="relative max-w-3xl mx-auto px-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Corner Angles */}
              <div className="absolute -top-8 -left-8 w-8 h-8 border-t-2 border-l-2 border-[#00ADB5]" />
              <div className="absolute -top-8 -right-8 w-8 h-8 border-t-2 border-r-2 border-[#00ADB5]" />
              <div className="absolute -bottom-8 -left-8 w-8 h-8 border-b-2 border-l-2 border-[#00ADB5]" />
              <div className="absolute -bottom-8 -right-8 w-8 h-8 border-b-2 border-r-2 border-[#00ADB5]" />

              <div className="text-[#393E46] space-y-6">
                <h2 className="text-3xl font-bold mb-6">
                  <span className="text-[#00ADB5]">{detail.title}</span>
                </h2>
                <p className="text-lg leading-relaxed">{detail.content}</p>
              </div>
            </motion.div>
          ))}

          {/* Call to Action */}
          <motion.div 
            className="relative max-w-3xl mx-auto px-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-[#393E46] space-y-6">
              <h2 className="text-3xl font-bold mb-6">
                <span className="text-[#00ADB5]">Ready to Protect</span>{' '}
                <span className="text-[#222831]">Your Brand?</span>
              </h2>
              <p className="text-lg leading-relaxed">
                Contact us today to discuss your brand protection needs and develop a customized strategy for your business.
              </p>
              <p className="text-lg font-medium">
                📩 Email us at{' '}
                <a href="mailto:info@leonardsolutions.in" className="text-[#00ADB5] hover:underline">
                  info@leonardsolutions.in
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back Link */}
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/service/domain"
          className="inline-flex items-center text-[#393E46] hover:text-[#00ADB5] transition-colors"
        >
          <span className="mr-2">←</span> Back to Domain Services
        </Link>
      </div>
    </div>
  );
}
