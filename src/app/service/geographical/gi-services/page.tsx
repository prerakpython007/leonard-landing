'use client';

import { motion } from 'framer-motion';
import { Shield, FileCheck, Scale, Search, Globe, BadgeAlert } from 'lucide-react';
import Link from 'next/link';

export default function GIServicesPage() {
  const features = [
    {
      title: 'GI Application Support',
      description: 'Comprehensive assistance in preparing and filing GI applications, ensuring all requirements are met.',
      icon: FileCheck
    },
    {
      title: 'Documentation Review',
      description: 'Thorough review of historical evidence, product specifications, and geographical linkage documentation.',
      icon: Search
    },
    {
      title: 'Legal Compliance',
      description: 'Ensuring adherence to all legal requirements and regulations for GI protection.',
      icon: Scale
    },
    {
      title: 'Market Protection',
      description: 'Safeguarding your GI rights in the market and preventing unauthorized use.',
      icon: Shield
    },
    {
      title: 'Global Protection',
      description: 'International registration and protection strategies for geographical indications.',
      icon: Globe
    },
    {
      title: 'Risk Assessment',
      description: 'Evaluation of potential risks and challenges to your GI protection.',
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
            GI Services
            <span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Comprehensive Geographical Indication Services for Your Products
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
                  Our GI services encompass everything from initial application support to long-term protection strategies. We help producers and organizations secure and maintain geographical indication rights for their unique regional products.
                </p>
                <p className="text-lg leading-relaxed">
                  With extensive experience in GI protection, we ensure your products' geographical identity remains protected while maximizing their market potential.
                </p>
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
        </div>
      </section>

      {/* Back Link */}
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/service/geographical"
          className="inline-flex items-center text-[#393E46] hover:text-[#00ADB5] transition-colors"
        >
          <span className="mr-2">←</span> Back to Geographical Indication Services
        </Link>
      </div>
    </div>
  );
}
