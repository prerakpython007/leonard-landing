"use client";
import { motion } from "framer-motion";
import { BookOpen, Briefcase, FileText, Gavel, Globe, Shield, MapPin, FileCheck, Scale, UserCheck, Package, Lock } from "lucide-react";
import Link from "next/link";

export default function Services() {
  return (
    <div className="min-h-screen bg-[#EEEEEE]">
      {/* Hero Section */}
      <motion.section
        className="bg-[#00ADB5] text-white py-8 px-4 md:px-16 lg:px-24 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative text-center mb-12 w-full">
          <span className="text-4xl font-bold text-[#222831] tracking-wider">
            <strong className="text-white mr-2">OUR</strong>
            SERVICES
          </span>
          <span className="absolute top-1/2 left-10 -translate-y-1/2 text-white text-5xl hidden md:block">✦</span>
          <span className="absolute top-1/2 right-10 -translate-y-1/2 text-white text-5xl hidden md:block">✦</span>
        </div>
      </motion.section>

      {/* Services Information Section */}
      <section className="py-12 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Services Overview */}
          <motion.div
            className="bg-white rounded-xl shadow-sm p-8 mb-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-[#222831] mb-4">Services Overview</h2>
            <p className="text-[#393E46] text-lg leading-relaxed">
              Combining extensive industry knowledge with deep legal expertise, we work on transactions and cases that define and shape the market.
            </p>
            <p className="text-[#393E46] text-lg leading-relaxed mt-4">
              Contact us at{" "}
              <a href="mailto:contact@leonard.com" className="text-[#00ADB5] hover:underline">
                contact@leonard.com
              </a>{" "}
              for personalized assistance with your legal needs.
            </p>
          </motion.div>

          {/* Intellectual Property Laws */}
          <motion.div
            className="bg-white rounded-xl shadow-sm p-8 mb-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-[#222831] mb-6">Intellectual Property Laws</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: 'Patents', icon: FileText, description: 'Protect your inventions with robust patent strategies.', route: '/patents' },
                { name: 'Trademarks', icon: Shield, description: 'Safeguard your brand identity with trademark registration.', route: '/trademarks' },
                { name: 'Copyright', icon: BookOpen, description: 'Secure your creative works with copyright protection.', route: '/copyright' },
                { name: 'Industrial Designs', icon: FileCheck, description: 'Protect the aesthetic aspects of your products.', route: '/industrial-designs' },
                { name: 'Geographical Indications', icon: MapPin, description: 'Preserve the unique identity of regional products.', route: '/geographical-indications' },
                { name: 'Anti-Counterfeiting', icon: Gavel, description: 'Combat counterfeit goods to protect your brand.', route: '/anti-counterfeiting' },
                { name: 'Domain Name Law', icon: Globe, description: 'Manage and protect your online presence.', route: '/domain-name-law' },
              ].map((service, index) => (
                <Link
                  key={service.name}
                  href={service.route}
                  className="flex items-start gap-3 p-4 rounded-lg hover:bg-[#00ADB5] hover:text-white transition-colors group"
                  aria-label={`Learn more about ${service.name}`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start gap-3 w-full"
                  >
                    <service.icon className="h-6 w-6 text-[#00ADB5] flex-shrink-0 group-hover:text-white" />
                    <div>
                      <h3 className="text-lg font-semibold text-[#222831] group-hover:text-white">{service.name}</h3>
                      <p className="text-[#393E46] text-lg group-hover:text-white">{service.description}</p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Other Laws Services */}
          <motion.div
            className="bg-white rounded-xl shadow-sm p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-[#222831] mb-6">Other Laws Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: 'Company Law And Legal Support', icon: Briefcase, description: 'Comprehensive legal support for corporate governance.', route: '/company-law' },
                { name: 'Commercial Contracts', icon: FileText, description: 'Draft and review contracts to secure your business deals.', route: '/commercial-contracts' },
                { name: 'Employment & HR Law', icon: UserCheck, description: 'Navigate employment laws for compliant HR practices.', route: '/employment-law' },
                { name: 'Outsourcing & Procurement', icon: Package, description: 'Streamline outsourcing and procurement processes.', route: '/outsourcing-procurement' },
                { name: 'Privacy & Data Protection', icon: Lock, description: 'Ensure compliance with data protection regulations.', route: '/privacy-data-protection' },
                { name: 'FSSAI Licensing', icon: Scale, description: 'Obtain FSSAI licenses for food safety compliance.', route: '/fssai-licensing' },
              ].map((service, index) => (
                <Link
                  key={service.name}
                  href={service.route}
                  className="flex items-start gap-3 p-4 rounded-lg hover:bg-[#00ADB5] hover:text-white transition-colors group"
                  aria-label={`Learn more about ${service.name}`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start gap-3 w-full"
                  >
                    <service.icon className="h-6 w-6 text-[#00ADB5] flex-shrink-0 group-hover:text-white" />
                    <div>
                      <h3 className="text-lg font-semibold text-[#222831] group-hover:text-white">{service.name}</h3>
                      <p className="text-[#393E46] text-lg group-hover:text-white">{service.description}</p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back to Home Link */}
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-8">
        <Link
          href="/"
          className="text-[#393E46] hover:text-[#00ADB5] transition-colors text-sm"
          aria-label="Navigate back to home page"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}