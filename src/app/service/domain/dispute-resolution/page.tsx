'use client';

import { motion } from 'framer-motion';
import { FileCheck, Shield, Globe, Scale, FileText, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function DisputeResolutionPage() {
  const features = [
    {
      icon: Shield,
      title: "UDRP Proceedings",
      description: "Expert handling of UDRP complaints and responses with proven success rates."
    },
    {
      icon: Scale,
      title: "Mediation Services",
      description: "Professional mediation to resolve domain disputes amicably and cost-effectively."
    },
    {
      icon: Globe,
      title: "International Coverage",
      description: "Handle disputes across multiple jurisdictions and domain extensions."
    },
    {
      icon: FileText,
      title: "Documentation Support",
      description: "Comprehensive assistance with all required legal documentation and evidence."
    },
    {
      icon: AlertCircle,
      title: "Preventive Advice",
      description: "Strategic guidance to prevent future domain name disputes."
    },
    {
      icon: FileCheck,
      title: "Compliance Review",
      description: "Thorough review of domain usage and compliance requirements."
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
            Domain Dispute Resolution
            <span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Expert Resolution Services for Domain Name Conflicts
          </p>
        </motion.div>
      </motion.section>

      {/* Main Content */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto space-y-32">
          {/* Overview Section */}
          <motion.div className="relative max-w-3xl mx-auto px-8">
            {/* Corner Angles */}
            <div className="absolute -top-8 -left-8 w-8 h-8 border-t-2 border-l-2 border-[#00ADB5]" />
            <div className="absolute -top-8 -right-8 w-8 h-8 border-t-2 border-r-2 border-[#00ADB5]" />
            <div className="absolute -bottom-8 -left-8 w-8 h-8 border-b-2 border-l-2 border-[#00ADB5]" />
            <div className="absolute -bottom-8 -right-8 w-8 h-8 border-b-2 border-r-2 border-[#00ADB5]" />

            <div className="text-[#393E46] space-y-6">
              <h2 className="text-3xl font-bold text-center mb-8">
                <span className="text-[#00ADB5]">Comprehensive</span>{' '}
                <span className="text-[#222831]">Dispute Resolution</span>
              </h2>
              <p className="text-lg leading-relaxed">
                Our domain dispute resolution service provides expert handling of all types of domain name conflicts. With years of experience in UDRP proceedings and other dispute resolution mechanisms, we ensure efficient and favorable outcomes for our clients.
              </p>
              <p className="text-lg leading-relaxed">
                Whether you're facing cybersquatting issues, domain name hijacking, or other domain-related disputes, our team provides comprehensive support throughout the resolution process.
              </p>
            </div>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-[#00ADB5] rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#222831] mb-2">{feature.title}</h3>
                <p className="text-[#393E46]/80">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Process Section */}
          <motion.div className="relative max-w-4xl mx-auto px-8">
            {/* Corner Angles */}
            <div className="absolute -top-8 -left-8 w-8 h-8 border-t-2 border-l-2 border-[#00ADB5]" />
            <div className="absolute -top-8 -right-8 w-8 h-8 border-t-2 border-r-2 border-[#00ADB5]" />
            <div className="absolute -bottom-8 -left-8 w-8 h-8 border-b-2 border-l-2 border-[#00ADB5]" />
            <div className="absolute -bottom-8 -right-8 w-8 h-8 border-b-2 border-r-2 border-[#00ADB5]" />

            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="text-[#222831]">Our Resolution</span>{' '}
              <span className="text-[#00ADB5]">Process</span>
            </h2>
            
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Initial Assessment",
                  description: "Thorough evaluation of your case, including domain history, trademark rights, and potential outcomes."
                },
                {
                  step: "02",
                  title: "Strategy Development",
                  description: "Creating a customized approach based on your specific situation and objectives."
                },
                {
                  step: "03",
                  title: "Documentation Preparation",
                  description: "Comprehensive preparation of all required legal documents and supporting evidence."
                },
                {
                  step: "04",
                  title: "Filing & Representation",
                  description: "Expert handling of all proceedings and communications with relevant authorities."
                }
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <span className="absolute top-4 right-4 text-[#00ADB5] text-xl opacity-30 group-hover:opacity-100 transition-opacity duration-300">✦</span>
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-[#00ADB5]/10 rounded-lg flex items-center justify-center shrink-0">
                      <span className="text-[#00ADB5] font-bold">{item.step}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#222831] mb-2 group-hover:text-[#00ADB5] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-[#393E46]/80">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#00ADB5] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back Link */}
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/service/domain"
          className="inline-flex items-center text-[#393E46] hover:text-[#00ADB5] transition-colors"
        >
          <span className="mr-2">←</span> Back to Domain Services
        </Link>
      </div>
    </div>
  );
}
