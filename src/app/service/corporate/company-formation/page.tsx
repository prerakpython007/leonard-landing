'use client';

import { motion } from 'framer-motion';
import { Building, FileText, Shield } from 'lucide-react';
import Link from 'next/link';

export default function CompanyFormationPage() {
  const features = [
    {
      icon: Building,
      title: 'Structure Selection',
      description: 'We help you choose the best business structure for your goals.',
    },
    {
      icon: FileText,
      title: 'Incorporation Process',
      description: 'We handle registration, documentation, and filings with ROC.',
    },
    {
      icon: Shield,
      title: 'Compliance Setup',
      description: 'We ensure your business meets all legal and regulatory requirements.',
    },
  ];

  const benefits = [
    'Minimize legal and financial risks with the right structure',
    'Ensure compliance with Indian and international business laws',
    'Build a strong foundation for future growth and investment',
  ];

  return (
    <div className="min-h-screen bg-[#EEEEEE] relative rounded-b-[50px] sm:rounded-b-[100px] md:rounded-b-[170px] font-montserrat overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12">
      {/* Grid Pattern */}
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
        className="relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[80vh] flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Corner Angles */}
        <div className="absolute top-4 left-4 w-8 h-8 sm:top-6 sm:left-6 sm:w-10 sm:h-10 md:top-8 md:left-8 md:w-12 md:h-12 border-t-2 border-l-2 border-black hidden lg:block" />
        <div className="absolute top-4 right-4 w-8 h-8 sm:top-6 sm:right-6 sm:w-10 sm:h-10 md:top-8 md:right-8 md:w-12 md:h-12 border-t-2 border-r-2 border-black hidden lg:block" />
        <div className="absolute bottom-4 left-4 w-8 h-8 sm:bottom-6 sm:left-6 sm:w-10 sm:h-10 md:bottom-8 md:left-8 md:w-12 md:h-12 border-b-2 border-l-2 border-black hidden lg:block" />
        <div className="absolute bottom-4 right-4 w-8 h-8 sm:bottom-6 sm:right-6 sm:w-10 sm:h-10 md:bottom-8 md:right-8 md:w-12 md:h-12 border-b-2 border-r-2 border-black hidden lg:block" />

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto text-center px-4"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#222831] relative inline-block tracking-tight">
            Company Formation
            <span className="absolute top-1/2 -left-8 sm:-left-12 md:-left-16 -translate-y-1/2 text-black text-3xl sm:text-4xl md:text-5xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-8 sm:-right-12 md:-right-16 -translate-y-1/2 text-black text-3xl sm:text-4xl md:text-5xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Start Your Business with Expert Formation & Structuring
          </p>
        </motion.div>
      </motion.section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16 md:space-y-24 lg:space-y-32">
          {/* Overview */}
          <motion.div
            className="relative max-w-3xl mx-auto px-4 sm:px-6 md:px-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Corner Angles */}
            <div className="absolute -top-4 -left-4 w-6 h-6 sm:-top-6 sm:-left-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-black" />
            <div className="absolute -top-4 -right-4 w-6 h-6 sm:-top-6 sm:-right-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-black" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 sm:-bottom-6 sm:-left-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-black" />
            <div className="absolute -bottom-4 -right-4 w-6 h-6 sm:-bottom-6 sm:-right-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-black" />

            <div className="text-[#393E46] space-y-4 sm:space-y-6 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#222831]">
                <span className="text-black">Build Your</span> Business Foundation
              </h2>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Setting up a business requires careful planning and legal expertise. At Leonard Corporate Solutions, we provide expert guidance on company formation and structuring, helping you choose the right structure—whether Proprietorship, Partnership, OPC, LLP, or Pvt Ltd—and ensuring compliance with all legal requirements in India and beyond.
              </p>
            </div>
          </motion.div>

          {/* Services Section */}
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
              <span className="text-[#222831]">Our Company</span> <span className="text-black">Formation Services</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group border border-black/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <span className="absolute top-4 right-4 text-black text-lg sm:text-xl opacity-30 group-hover:opacity-100 transition-opacity duration-300">✦</span>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#222831] mb-3 group-hover:text-black transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-[#393E46]/80 text-sm sm:text-base">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <motion.div
            className="relative max-w-3xl mx-auto px-4 sm:px-6 md:px-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
              <span className="text-[#222831]">Benefits of</span> <span className="text-black">Proper Structuring</span>
            </h2>
            <ul className="space-y-4 list-none pl-5 text-sm sm:text-base text-[#393E46]">
              {benefits.map((benefit, index) => (
                <li key={index} className="relative pl-6 before:content-['✦'] before:absolute before:left-0 before:text-black">
                  {benefit}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="relative max-w-3xl mx-auto px-4 sm:px-6 md:px-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Corner Angles */}
            <div className="absolute -top-4 -left-4 w-6 h-6 sm:-top-6 sm:-left-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-black" />
            <div className="absolute -top-4 -right-4 w-6 h-6 sm:-top-6 sm:-right-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-black" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 sm:-bottom-6 sm:-left-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-black" />
            <div className="absolute -bottom-4 -right-4 w-6 h-6 sm:-bottom-6 sm:-right-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-black" />

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              <span className="text-black">Launch Your</span> Business with Expert Formation
            </h2>
            <p className="text-[#393E46] text-sm sm:text-base md:text-lg leading-relaxed mb-6">
              Set up your business for success. Contact us for company formation services today!
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-black text-white font-medium rounded-full hover:bg-[#222831] transition-colors duration-300 text-sm sm:text-base"
              aria-label="Contact us for company formation"
            >
              Contact Us
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Back to Home Link */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8">
        <Link
          href="/"
          className="inline-flex items-center text-[#393E46] hover:text-black transition-colors text-sm sm:text-base"
          aria-label="Back to home"
        >
          <span className="mr-2">←</span> Back to Home
        </Link>
      </div>
    </div>
  );
}