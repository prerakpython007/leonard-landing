'use client';

import { motion } from 'framer-motion';
import { FileText, CheckSquare, Globe } from 'lucide-react';
import Link from 'next/link';

export default function RegistrationPage() {
  const services = [
    {
      icon: FileText,
      title: 'Design Filing',
      description: 'Prepare and file your design applications with precision and accuracy.',
    },
    {
      icon: CheckSquare,
      title: 'Documentation Support',
      description: 'Get expert assistance in preparing all necessary documentation for registration.',
    },
    {
      icon: Globe,
      title: 'Global Registration',
      description: 'Secure design protection in multiple jurisdictions worldwide.',
    },
  ];

  const steps = [
    {
      title: 'Design Submission',
      description: 'Submit your design details for initial assessment and preparation.',
    },
    {
      title: 'Application Filing',
      description: 'We file your design application with the relevant authorities.',
    },
    {
      title: 'Registration Approval',
      description: 'Track and manage the approval process for successful registration.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#EEEEEE] relative font-montserrat overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12">
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
        className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-[#222831] to-[#00ADB5]/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {/* Diamond Markers */}
        <div className="absolute top-6 left-6 w-4 h-4 sm:w-6 sm:h-6 rotate-45 bg-[#00ADB5]/50 hidden lg:block" />
        <div className="absolute top-6 right-6 w-4 h-4 sm:w-6 sm:h-6 rotate-45 bg-[#00ADB5]/50 hidden lg:block" />
        <div className="absolute bottom-6 left-6 w-4 h-4 sm:w-6 sm:h-6 rotate-45 bg-[#00ADB5]/50 hidden lg:block" />
        <div className="absolute bottom-6 right-6 w-4 h-4 sm:w-6 sm:h-6 rotate-45 bg-[#00ADB5]/50 hidden lg:block" />

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center px-4"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Design <span className="text-[#00ADB5]">Registration</span>
          </h1>
          <p className="mt-3 sm:mt-4 md:mt-6 text-base sm:text-lg md:text-xl text-[#EEEEEE]/80 max-w-lg mx-auto font-light">
            Lock in your intellectual property with seamless design registration.
          </p>
        </motion.div>
      </motion.section>

      {/* Overview Section (Timeline) */}
      <motion.section
        className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#222831] mb-8 sm:mb-10">
            <span className="text-[#00ADB5]">How We</span> Register Your Design
          </h2>
          <div className="space-y-8 sm:space-y-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="relative flex items-start gap-4 sm:gap-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#00ADB5] rounded-full flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <div className="flex-1 bg-white p-4 sm:p-6 rounded-lg shadow-md border border-[#00ADB5]/10">
                  <h3 className="text-lg sm:text-xl font-bold text-[#222831] mb-2">{step.title}</h3>
                  <p className="text-[#393E46]/80 text-sm sm:text-base">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute left-4 sm:left-5 top-12 sm:top-14 w-0.5 h-12 sm:h-16 bg-[#00ADB5]/30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12">
          <span className="text-[#222831]">Our Registration</span> <span className="text-[#00ADB5]">Services</span>
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-md relative overflow-hidden group border border-[#00ADB5]/10"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="absolute top-4 left-4 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center"
                whileHover={{ backgroundColor: '#00ADB5', color: '#FFFFFF' }}
                transition={{ duration: 0.3 }}
              >
                <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-[#00ADB5] group-hover:text-white" />
              </motion.div>
              <h3 className="text-lg sm:text-xl font-bold text-[#222831] mb-3 mt-14 sm:mt-16 group-hover:text-[#00ADB5] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-[#393E46]/80 text-sm sm:text-base">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <motion.section
        className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#222831] mb-4">
            <span className="text-[#00ADB5]">Secure</span> Your Design Today
          </h2>
          <p className="text-[#393E46] text-sm sm:text-base md:text-lg leading-relaxed mb-6 max-w-xl mx-auto">
            Start protecting your intellectual property with our expert design registration services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <Link
                href="/contact-us"
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-[#00ADB5] text-white font-medium rounded-full hover:bg-[#222831] transition-colors duration-300 text-base sm:text-lg"
                aria-label="Contact us for design registration services"
              >
                Contact Us
                <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: 0.3 }}
            >
              <Link
                href="/learn-more"
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-[#222831] text-white font-medium rounded-full hover:bg-[#00ADB5] transition-colors duration-300 text-base sm:text-lg"
                aria-label="Learn more about design registration"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Back to Home Link */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8">
        <Link
          href="/"
          className="inline-flex items-center text-[#393E46] hover:text-[#00ADB5] transition-colors text-sm sm:text-base"
          aria-label="Back to home"
        >
          <span className="mr-2">←</span> Back to Home
        </Link>
      </div>
    </div>
  );
}