'use client';

import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import Link from 'next/link';

const ContactUsSection = () => {
  return (
    <div className="bg-white">
      <section className="py-12 px-4 md:px-16 lg:px-24 relative overflow-hidden">
        {/* Background Stars */}
        <span className="absolute left-0 top-[45%] text-[#00ADB5] text-[150px] md:text-[300px] opacity-10 -z-10">✦</span>
        <span className="absolute right-0 top-[45%] text-[#00ADB5] text-[150px] md:text-[300px] opacity-10 -z-10">✦</span>

        <div className="max-w-6xl mx-auto relative z-10">
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
            <h2 className="text-4xl font-bold text-[#222831] mb-4">
              Get in Touch <span className="text-[#00ADB5]">✦</span>
            </h2>
            <p className="text-[#393E46] text-lg leading-relaxed mb-6">
              Ready t o protect your intellectual property? Contact Leonard Corporate Solutions for expert guidance on design protection and legal services.
            </p>
            <div className="flex justify-center gap-6 mb-6 flex-wrap">
              <div className="flex items-center gap-2">
                <Mail size={20} color="#00ADB5" />
                <a
                  href="mailto:info@leonardsolutions.in"
                  className="text-[#393E46] hover:text-[#00ADB5] transition-colors duration-300"
                >
                  info@leonardsolutions.in
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={20} color="#00ADB5" />
                <a
                  href="tel:+91-123-456-7890"
                  className="text-[#393E46] hover:text-[#00ADB5] transition-colors duration-300"
                >
                  +91-123-456-7890
                </a>
              </div>
            </div>
            <Link
              href="/contact-us"
              className="inline-flex items-center px-6 py-3 bg-[#00ADB5] text-white font-medium rounded-full hover:bg-[#222831] hover:border hover:border-[#00ADB5] transition-colors duration-300"
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
  );
};

export default ContactUsSection;