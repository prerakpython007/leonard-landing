'use client';

import { motion } from 'framer-motion';
import { Globe, Shield, FileCheck, Scale } from 'lucide-react';
import Link from 'next/link';

export default function InternationalGIPage() {
  const features = [
    {
      icon: Globe,
      title: 'Global Registration',
      description: 'We assist with GI registration in multiple countries.',
    },
    {
      icon: Shield,
      title: 'International Protection',
      description: 'We safeguard your GI against global misuse.',
    },
    {
      icon: FileCheck,
      title: 'Compliance',
      description: 'We ensure adherence to international GI laws and treaties.',
    },
  ];

  const benefits = [
    'Protect your regional products in global markets',
    "Enhance your product's international reputation and value",
    'Navigate complex international regulations with ease',
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
            International GI
            <span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">
              ✦
            </span>
            <span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">
              ✦
            </span>
          </h1>
          <p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Global Registration & Protection for Your GIs
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
                Expanding your Geographical Indication (GI) protection internationally is essential in today's global market. At Leonard Corporate Solutions, we specialize in international GI services, helping you manage registration and protection worldwide.
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
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#00ADB5]/10 mr-4">
                    <feature.icon className="w-6 h-6 text-[#00ADB5]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#222831]">{feature.title}</h3>
                </div>
                <p className="text-[#393E46]/80 text-base leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Benefits Section */}
          <motion.div className="relative max-w-3xl mx-auto px-8">
            <h2 className="text-3xl font-bold text-center mb-8">
              <span className="text-[#00ADB5]">Benefits of</span>{' '}
              <span className="text-[#222831]">International GI Management</span>
            </h2>
            <ul className="space-y-4 list-none pl-5">
              {benefits.map((benefit, index) => (
                <li key={index} className="relative pl-6 before:content-['✦'] before:absolute before:left-0 before:text-[#00ADB5]">
                  {benefit}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Back Link */}
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
