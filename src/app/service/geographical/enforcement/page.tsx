'use client';

import { motion } from 'framer-motion';
import { Search, Gavel, HandshakeIcon } from 'lucide-react';
import Link from 'next/link';

export default function GIEnforcementPage() {
  const features = [
    {
      icon: Search,
      title: 'Investigation',
      description: 'We identify instances of infringement or passing off.',
    },
    {
      icon: Gavel,
      title: 'Legal Action',
      description: 'We initiate legal proceedings to stop violations.',
    },
    {
      icon: HandshakeIcon,
      title: 'Resolution',
      description: 'We work to resolve disputes efficiently, protecting your GI.',
    },
  ];

  const benefits = [
    'Deter future violations by taking a strong stance',
    "Protect your product's market value and consumer trust",
    'Ensure compliance with GI regulations',
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
          <h1 className="text-6xl md:text-7xl font-extrabold text-[#222831] relative inline-block tracking-tight">
            GI Enforcement
            <span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">
              ✦
            </span>
            <span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">
              ✦
            </span>
          </h1>
          <p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Combat Infringement of Geographical Indications
          </p>
        </motion.div>
      </motion.section>

      {/* Main Content */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto space-y-32">
          {/* Overview */}
          <motion.div className="relative max-w-3xl mx-auto px-8">
            {/* Corner Angles */}
            <div className="absolute -top-8 -left-8 w-8 h-8 border-t-2 border-l-2 border-[#00ADB5]" />
            <div className="absolute -top-8 -right-8 w-8 h-8 border-t-2 border-r-2 border-[#00ADB5]" />
            <div className="absolute -bottom-8 -left-8 w-8 h-8 border-b-2 border-l-2 border-[#00ADB5]" />
            <div className="absolute -bottom-8 -right-8 w-8 h-8 border-b-2 border-r-2 border-[#00ADB5]" />

            <div className="text-[#393E46] space-y-6">
              <p className="text-lg leading-relaxed">
                Infringement and passing off can damage the reputation and value of your Geographical Indication (GI). At
                Leonard Corporate Solutions, we offer expert GI enforcement services to protect your rights through
                strategic legal actions.
              </p>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#00ADB5]/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-[#00ADB5]/10 rounded-full mr-4">
                    <feature.icon className="w-6 h-6 text-[#00ADB5]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#222831]">{feature.title}</h3>
                </div>
                <p className="text-[#393E46]/80 text-base leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Benefits Section */}
          <motion.div className="relative max-w-3xl mx-auto px-8">
            <h2 className="text-3xl font-bold text-center mb-8">
              <span className="text-[#00ADB5]">Benefits of</span>{' '}
              <span className="text-[#222831]">GI Enforcement</span>
            </h2>
            <ul className="space-y-4 list-none pl-5">
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="relative pl-6 before:content-['✦'] before:absolute before:left-0 before:text-[#00ADB5]"
                >
                  {benefit}
                </li>
              ))}
            </ul>
          </motion.div>

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
                <h2 className="text-4xl font-bold mb-4">Defend Your GI with Expert Enforcement</h2>
                <p className="text-[#393E46] text-lg leading-relaxed mb-6">
                  Take action against GI infringement today. Contact us to enforce your rights!
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