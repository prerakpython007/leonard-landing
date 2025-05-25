
'use client';

import { motion } from 'framer-motion';
import { Package, FileText, Scale, Briefcase, Shield, Users } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import Head from 'next/head';

export default function OutsourcingProcurementPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const serviceCards = [
    {
      icon: Package,
      title: 'Outsourcing Advisory',
      description: 'Provide pragmatic legal advice for IT and outsourcing contracts.',
      category: 'Legal Advisory',
      route: '/service/other_service/outsourcing-procurement/outsourcing-advisory',
    },
    {
      icon: FileText,
      title: 'Contract Negotiation',
      description: 'Level the playing field in negotiations with larger companies.',
      category: 'Negotiation Support',
      route: '/service/other_service/outsourcing-procurement/contract-negotiation',
    },
    {
      icon: Scale,
      title: 'Risk Management',
      description: 'Minimize financial risks in supplier contractual commitments.',
      category: 'Risk Mitigation',
      route: '/service/other_service/outsourcing-procurement/risk-management',
    },
    {
      icon: Briefcase,
      title: 'Financial Services Expertise',
      description: 'Specialized advice for outsourcing in the financial sector.',
      category: 'Sector Expertise',
      route: '/service/other_service/outsourcing-procurement/financial-services-expertise',
    },
    {
      icon: Shield,
      title: 'Public Sector Compliance',
      description: 'Navigate complex public sector procurement regulations.',
      category: 'Compliance Services',
      route: '/service/other_service/outsourcing-procurement/public-sector-compliance',
    },
    {
      icon: Users,
      title: 'Procurement Support',
      description: 'Strengthen customer-side procurement with supplier risk insights.',
      category: 'Procurement Enhancement',
      route: '/service/other_service/outsourcing-procurement/procurement-support',
    },
  ];

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Expert legal advice for outsourcing and procurement, specializing in IT, financial services, and public sector compliance in India and globally."
        />
        <meta
          name="keywords"
          content="outsourcing procurement, legal advice outsourcing, IT outsourcing, financial services outsourcing, public sector procurement"
        />
        <title>Outsourcing & Procurement Services | Leonard Corporate Solutions</title>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <div className="min-h-screen bg-[#EEEEEE] relative rounded-b-[50px] sm:rounded-b-[100px] md:rounded-b-[170px] font-montserrat overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12">
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
        <motion.section className="relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[80vh] flex items-center justify-center px-4">
          <div className="absolute top-4 left-4 w-8 h-8 sm:top-6 sm:left-6 sm:w-10 sm:h-10 md:top-8 md:left-8 md:w-12 md:h-12 border-t-2 border-l-2 border-[#00ADB5] hidden lg:block" />
          <div className="absolute top-4 right-4 w-8 h-8 sm:top-6 sm:right-6 sm:w-10 sm:h-10 md:top-8 md:right-8 md:w-12 md:h-12 border-t-2 border-r-2 border-[#00ADB5] hidden lg:block" />
          <div className="absolute bottom-4 left-4 w-8 h-8 sm:bottom-6 sm:left-6 sm:w-10 sm:h-10 md:bottom-8 md:left-8 md:w-12 md:h-12 border-b-2 border-l-2 border-[#00ADB5] hidden lg:block" />
          <div className="absolute bottom-4 right-4 w-8 h-8 sm:bottom-6 sm:right-6 sm:w-10 sm:h-10 md:bottom-8 md:right-8 md:w-12 md:h-12 border-b-2 border-r-2 border-[#00ADB5] hidden lg:block" />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl mx-auto text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#222831] relative inline-block tracking-tight">
              Outsourcing & Procurement
              <span className="absolute top-1/2 -left-8 sm:-left-12 md:-left-16 -translate-y-1/2 text-[#00ADB5] text-3xl sm:text-4xl md:text-5xl animate-pulse opacity-50">✦</span>
              <span className="absolute top-1/2 -right-8 sm:-right-12 md:-right-16 -translate-y-1/2 text-[#00ADB5] text-3xl sm:text-4xl md:text-5xl animate-pulse opacity-50">✦</span>
            </h1>
            <p className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
              Pragmatic Legal Advice for Outsourcing and Procurement
            </p>
          </motion.div>
        </motion.section>
        <section className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16 md:space-y-24 lg:space-y-32">
            <motion.div
              className="relative max-w-3xl mx-auto px-4 sm:px-6 md:px-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-4 -left-4 w-6 h-6 sm:-top-6 sm:-left-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-[#00ADB5]" />
              <div className="absolute -top-4 -right-4 w-6 h-6 sm:-top-6 sm:-right-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-[#00ADB5]" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 sm:-bottom-6 sm:-left-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-[#00ADB5]" />
              <div className="absolute -bottom-4 -right-4 w-6 h-6 sm:-bottom-6 sm:-right-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-[#00ADB5]" />
              <div className="text-[#393E46] space-y-4 sm:space-y-6 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  <span className="text-[#00ADB5]">Outsourcing &</span>{' '}
                  <span className="text-[#222831]">Procurement Overview</span>
                </h2>
                <p className="text-base sm:text-lg leading-relaxed">
                  At Leonard Corporate Solutions, we specialize in providing pragmatic, commercially focused legal advice to the outsourcing industry since 2008. With unrivalled experience in IT and outsourcing, we have advised outsourced and managed services providers for some of the world’s largest businesses, particularly in the financial services sector and public sector procurement regulations.
                </p>
                <p className="text-base sm:text-lg leading-relaxed">
                  We primarily represent suppliers, ensuring contractual commitments are deliverable with minimal financial risk. In unequal bargaining situations, we level the playing field, bringing confidence and experience to negotiations dominated by larger companies and their in-house legal teams. We also support customer-side clients procuring services, leveraging our deep understanding of supplier risks to strengthen procurement teams.
                </p>
                <p className="text-base sm:text-lg font-medium">
                  📩 Contact us at{' '}
                  <a href="mailto:info@leonardcorporatesolutions.com" className="text-[#00ADB5] hover:underline">
                    info@leonardcorporatesolutions.com
                  </a>{' '}
                  for expert outsourcing and procurement legal support.
                </p>
              </div>
            </motion.div>
            <div className="space-y-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
                <span className="text-[#222831]">Our Outsourcing</span>{' '}
                <span className="text-[#00ADB5]">& Procurement Services</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
                {serviceCards.map((service, index) => (
                  <Link
                    key={service.title}
                    href={service.route}
                    className="group relative"
                    onMouseEnter={() => setHoveredCard(service.title)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <motion.div
                      className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <span className="absolute top-4 right-4 text-[#00ADB5] text-lg sm:text-xl opacity-30 group-hover:opacity-100 transition-opacity duration-300">✦</span>
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#00ADB5] rounded-lg flex items-center justify-center mb-4">
                        <service.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </div>
                      <div className="px-3 py-1 text-xs font-medium bg-[#00ADB5]/10 text-[#00ADB5] rounded-full w-fit mb-3">
                        {service.category}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#222831] mb-3 group-hover:text-[#00ADB5] transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-[#393E46]/80 text-sm sm:text-base">{service.description}</p>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
            <motion.div
              className="relative max-w-3xl mx-auto px-4 sm:px-6 md:px-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative py-8 sm:py-12">
                <div className="absolute -top-4 -left-4 w-6 h-6 sm:-top-6 sm:-left-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-[#00ADB5]" />
                <div className="absolute -top-4 -right-4 w-6 h-6 sm:-top-6 sm:-right-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-[#00ADB5]" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 sm:-bottom-6 sm:-left-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-[#00ADB5]" />
                <div className="absolute -bottom-4 -right-4 w-6 h-6 sm:-bottom-6 sm:-right-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-[#00ADB5]" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                  <span className="text-[#00ADB5]">Ready to Optimize</span>{' '}
                  <span className="text-[#222831]">Your Outsourcing?</span>
                </h2>
                <ul className="space-y-4 list-none pl-5 mb-6 text-[#393E46] text-sm sm:text-base">
                  <li className="relative pl-6 before:content-['✦'] before:absolute before:left-0 before:text-[#00ADB5]">
                    Empower your business with pragmatic legal advice
                  </li>
                  <li className="relative pl-6 before:content-['✦'] before:absolute before:left-0 before:text-[#00ADB5]">
                    Develop robust contract strategies
                  </li>
                  <li className="relative pl-6 before:content-['✦'] before:absolute before:left-0 before:text-[#00ADB5]">
                    Minimize risks and enhance negotiation outcomes
                  </li>
                </ul>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-[#00ADB5] text-white font-medium rounded-full hover:bg-[#222831] transition-colors duration-300 text-sm sm:text-base"
                >
                  Get Started
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8">
          <Link
            href="/"
            className="inline-flex items-center text-[#393E46] hover:text-[#00ADB5] transition-colors text-sm sm:text-base"
          >
            <span className="mr-2">←</span> Back to Home
          </Link>
        </div>
      </div>
    </>
  );
}
