'use client';

import { motion } from 'framer-motion';
import { Handshake, Scale, MessageSquare } from 'lucide-react';
import Link from 'next/link';

const settlementServices = [
  {
    icon: Handshake,
    title: 'Negotiation Strategy',
    description: 'We develop strategies to secure the best possible settlement.',
  },
  {
    icon: MessageSquare,
    title: 'Mediation Support',
    description: 'We facilitate discussions to reach mutually beneficial agreements.',
  },
  {
    icon: Scale,
    title: 'Legal Oversight',
    description: 'We ensure settlements are legally sound and enforceable.',
  },
];

export default function SettlementNegotiationsPage() {
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
            Settlement Negotiations
            <span className="absolute top-1/2 -left-8 sm:-left-12 md:-left-16 -translate-y-1/2 text-black text-3xl sm:text-4xl md:text-5xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-8 sm:-right-12 md:-right-16 -translate-y-1/2 text-black text-3xl sm:text-4xl md:text-5xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Negotiate Favorable Settlements to Avoid Litigation
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
            <div className="absolute -top-4 -left-4 w-6 h-6 sm:-top-6 sm:-left-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-black" />
            <div className="absolute -top-4 -right-4 w-6 h-6 sm:-top-6 sm:-right-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-black" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 sm:-bottom-6 sm:-left-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-black" />
            <div className="absolute -bottom-4 -right-4 w-6 h-6 sm:-bottom-6 sm:-right-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-black" />
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md">
              <p className="text-[#393E46] text-sm sm:text-base">
                Prolonged litigation can be costly and disruptive. At Leonard Corporate Solutions, we specialize in settlement negotiations, helping you achieve favorable outcomes and avoid the courtroom in India and worldwide.
              </p>
            </div>
          </motion.div>

          {/* Services Section */}
          <div className="bg-[#F7F7F7] py-12 sm:py-16 rounded-xl">
            <motion.div
              className="text-center mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#222831] mb-4">
                <span className="text-black">Our Settlement</span> Negotiation Services
              </h2>
              <div className="w-16 sm:w-24 h-1 bg-black mx-auto rounded-full"></div>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
              {settlementServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="group bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="absolute top-4 right-4 text-black text-lg sm:text-xl opacity-30 group-hover:opacity-100 transition-opacity duration-300">✦</span>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#222831] mb-3 group-hover:text-black transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-[#393E46]/80 text-sm sm:text-base">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            className="relative max-w-3xl mx-auto px-4 sm:px-6 md:px-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative py-8 sm:py-12">
              <div className="absolute -top-4 -left-4 w-6 h-6 sm:-top-6 sm:-left-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-black" />
              <div className="absolute -top-4 -right-4 w-6 h-6 sm:-top-6 sm:-right-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-black" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 sm:-bottom-6 sm:-left-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-black" />
              <div className="absolute -bottom-4 -right-4 w-6 h-6 sm:-bottom-6 sm:-right-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-black" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Settle Disputes Favorably with Expert Negotiations</h2>
              <p className="text-[#393E46] text-sm sm:text-lg leading-relaxed mb-6">
                Settle disputes favorably. Contact us for settlement negotiation services today!
              </p>
              <Link
                href="/contact-us"
                className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-black text-white font-medium rounded-full hover:bg-[#222831] transition-colors duration-300 text-sm sm:text-base"
              >
                Contact Us
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back to Home Link */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8">
        <Link
          href="/"
          className="inline-flex items-center text-[#393E46] hover:text-black transition-colors text-sm sm:text-base"
        >
          <span className="mr-2">←</span> Back to Home
        </Link>
      </div>
    </div>
  );
}