'use client';

import { motion } from 'framer-motion';
import { Globe, Shield, Search, Eye, Gavel, Target, Scale, BarChart } from 'lucide-react';
import Link from 'next/link';

export default function GlobalEnforcementPage() {
  const features = [
    {
      icon: Search,
      title: "International Monitoring",
      description: "We track domain infringements across global markets."
    },
    {
      icon: Shield,
      title: "Cross-Border Legal Action",
      description: "We initiate legal proceedings in multiple jurisdictions."
    },
    {
      icon: Globe,
      title: "Customs Collaboration",
      description: "We work with customs authorities to stop counterfeit domain use."
    }
  ];

  const antiCounterfeitingFeatures = [
    {
      icon: Eye,
      title: "Counterfeit Detection",
      description: "Identify and track counterfeit products threatening your brand using advanced techniques."
    },
    {
      icon: Globe,
      title: "Customs Enforcement",
      description: "Collaborate with customs authorities to seize counterfeit goods at borders."
    },
    {
      icon: Gavel,
      title: "Legal Action Support",
      description: "Pursue legal action against counterfeiters to protect your brand and reputation."
    },
    {
      icon: Target,
      title: "Anti-Counterfeiting Strategy",
      description: "Develop tailored strategies to proactively combat counterfeiting threats."
    },
    {
      icon: Scale,
      title: "IP Rights Advisory",
      description: "Strengthen your IP portfolio to enhance enforcement against counterfeiters."
    },
    {
      icon: BarChart,
      title: "Market Monitoring",
      description: "Monitor markets and online platforms to detect and address counterfeiting activities."
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
            Global Enforcement
            <span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Enforce Your Domain Name Rights Worldwide
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
                Protecting your domain name rights doesn't stop at borders. At Leonard Corporate Solutions, we provide global enforcement services to combat infringers worldwide, ensuring your intellectual property is secure in every jurisdiction.
              </p>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <h2 className="text-4xl font-bold mb-4">Enforce Your Domain Rights Globally</h2>
                <p className="text-[#393E46] text-lg leading-relaxed mb-6">
                  Secure your domain rights globally. Contact us for worldwide enforcement support!
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

      {/* Anti-Counterfeiting Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-[#F9F9F9]">
        <div className="max-w-6xl mx-auto space-y-32">
          {/* Overview */}
          <motion.div className="relative max-w-3xl mx-auto px-8">
            <div className="text-[#393E46] space-y-6">
              <h2 className="text-3xl font-bold text-center mb-8">
                <span className="text-[#00ADB5]">Anti-Counterfeiting &</span>{' '}
                <span className="text-[#222831]">Brand Protection Services</span>
              </h2>
              <p className="text-lg leading-relaxed">
                Safeguard your brand and intellectual property with our comprehensive anti-counterfeiting services. From detection to enforcement, we provide end-to-end solutions to combat counterfeiting threats.
              </p>
            </div>
          </motion.div>

          {/* Anti-Counterfeiting Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {antiCounterfeitingFeatures.map((feature, index) => (
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
                <Link
                  href="#"
                  className="inline-flex items-center text-[#00ADB5] font-medium hover:text-[#222831] transition-colors duration-300 mt-4"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Anti-Counterfeiting Call to Action */}
          <motion.div className="relative max-w-3xl mx-auto px-8">
            <div className="text-[#393E46] space-y-6">
              <p className="text-lg leading-relaxed text-center">
                Protect your brand from counterfeiting. Contact us for expert anti-counterfeiting solutions!
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}