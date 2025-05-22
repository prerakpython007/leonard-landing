'use client';

import { motion } from 'framer-motion';
import { FileText, Check, AlertTriangle, Shield, Search, Scale } from 'lucide-react';
import Link from 'next/link';

export default function ContractDraftingPage() {
  const features = [
    {
      icon: FileText,
      title: "Contract Drafting",
      description: "Expert drafting of comprehensive commercial contracts."
    },
    {
      icon: Search,
      title: "Contract Review",
      description: "Thorough review and analysis of existing agreements."
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Identification and mitigation of contractual risks."
    },
    {
      icon: Check,
      title: "Compliance Check",
      description: "Ensuring adherence to legal requirements and regulations."
    },
    {
      icon: Scale,
      title: "Negotiation Support",
      description: "Expert assistance in contract negotiations."
    },
    {
      icon: AlertTriangle,
      title: "Risk Assessment",
      description: "Evaluation of contractual terms and potential issues."
    }
  ];

  const contractPoints = [
    'Commercial agreements',
    'Service contracts',
    'Employment agreements',
    'Partnership agreements',
    'Licensing contracts',
    'Distribution agreements'
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
            Contract Services
            <span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Expert Contract Drafting & Review Services
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
                Our contract drafting and review services ensure your business agreements are comprehensive, protective, and legally sound. We provide expert guidance throughout the contract lifecycle, from initial drafting to final execution.
              </p>
              <ul className="space-y-4 list-none pl-5">
                {contractPoints.map((item, index) => (
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

          {/* Additional Information */}
          <motion.div className="relative max-w-3xl mx-auto px-8">
            <div className="text-[#393E46] space-y-6">
              <h2 className="text-3xl font-bold text-center mb-8">
                <span className="text-[#00ADB5]">Expert</span>{' '}
                <span className="text-[#222831]">Contract Services</span>
              </h2>
              <p className="text-lg leading-relaxed">
                Contact us to learn how our contract drafting and review services can help protect your business interests through well-crafted agreements.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back Link */}
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/service/corporate"
          className="inline-flex items-center text-[#393E46] hover:text-[#00ADB5] transition-colors"
        >
          <span className="mr-2">←</span> Back to Corporate Services
        </Link>
      </div>
    </div>
  );
}
