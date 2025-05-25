'use client';

import { motion } from 'framer-motion';
import { Lock, FileText, Scale, Briefcase, Shield, Users, Globe } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import Head from 'next/head';

export default function PrivacyDataProtectionPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const serviceCards = [
    {
      icon: Lock,
      title: 'Privacy Policy Drafting',
      description: 'Craft comprehensive privacy policies tailored to your business.',
      route: '/service/other_service/privacy-data-protection/privacy-policy-drafting',
    },
    {
      icon: FileText,
      title: 'Data Processor Compliance',
      description: 'Ensure contracts meet data processor obligations.',
      route: '/service/other_service/privacy-data-protection/data-processor-compliance',
    },
    {
      icon: Scale,
      title: 'Regulatory Advisory',
      description: 'Navigate complex data protection laws with expert guidance.',
      route: '/service/other_service/privacy-data-protection/regulatory-advisory',
    },
    {
      icon: Globe,
      title: 'Global Compliance',
      description: 'Advise on multi-national data protection obligations.',
      route: '/service/other_service/privacy-data-protection/global-compliance',
    },
    {
      icon: Shield,
      title: 'E-commerce & SaaS Support',
      description: 'Help e-commerce and SaaS providers meet privacy standards.',
      route: '/service/other_service/privacy-data-protection/ecommerce-saas-support',
    },
    {
      icon: Users,
      title: 'Staff Training Workshops',
      description: 'Deliver tailored data protection training for all staff levels.',
      route: '/service/other_service/privacy-data-protection/staff-training',
    },
  ];

  const expertiseItems = [
    'Drafting all manner of privacy policies.',
    'Assisting various companies with regulations over the data processor obligations/clauses in contracts with its customers and suppliers.',
    'Advising a company that provides ‘know your customer’ services on how to comply with the legislation.',
    'Providing advice to a mobile virtual network operator regarding the legality of location-based services (prior to these becoming widely available).',
    'Assisting numerous providers of e-commerce websites and SaaS comply with their obligations under data protection and privacy law.',
    'Advising on cookies, behavioral advertising, and other marketing activities.',
    'Advising multi-national corporations regarding their obligations in India and several other countries.',
  ];

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Ensure compliance with global data protection regulations with Leonard Corporate Solutions. Expert guidance for privacy and data protection."
        />
        <meta
          name="keywords"
          content="privacy data protection, GDPR compliance, DPDP compliance, data protection services"
        />
        <title>Privacy & Data Protection | Leonard Corporate Solutions</title>
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
              Privacy & Data Protection
              <span className="absolute top-1/2 -left-8 sm:-left-12 md:-left-16 -translate-y-1/2 text-[#00ADB5] text-3xl sm:text-4xl md:text-5xl animate-pulse opacity-50">✦</span>
              <span className="absolute top-1/2 -right-8 sm:-right-12 md:-right-16 -translate-y-1/2 text-[#00ADB5] text-3xl sm:text-4xl md:text-5xl animate-pulse opacity-50">✦</span>
            </h1>
            <p className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
              Expert Guidance for Data Protection Compliance
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
            >
              <div className="absolute -top-4 -left-4 w-6 h-6 sm:-top-6 sm:-left-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-[#00ADB5]" />
              <div className="absolute -top-4 -right-4 w-6 h-6 sm:-top-6 sm:-right-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-[#00ADB5]" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 sm:-bottom-6 sm:-left-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-[#00ADB5]" />
              <div className="absolute -bottom-4 -right-4 w-6 h-6 sm:-bottom-6 sm:-right-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-[#00ADB5]" />
              <div className="text-center space-y-4 sm:space-y-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  <span className="text-[#00ADB5]">Privacy &</span>{' '}
                  <span className="text-[#222831]">Data Protection Overview</span>
                </h2>
                <p className="text-[#393E46] text-base sm:text-lg leading-relaxed">
                  At Leonard Corporate Solutions, our data protection experts have extensive experience helping clients navigate the complex landscape of data protection legislation. We have advised a diverse range of businesses on a wide array of privacy and data protection issues, ensuring compliance while supporting business growth.
                </p>
                <p className="text-[#393E46] text-base sm:text-lg font-medium">
                  📩 Contact us at{' '}
                  <a href="mailto:info@leonardcorporatesolutions.com" className="text-[#00ADB5] hover:underline">
                    info@leonardcorporatesolutions.com
                  </a>
                </p>
              </div>
            </motion.div>
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
                <span className="text-[#222831]">Key Areas</span>{' '}
                <span className="text-[#00ADB5]">of Expertise</span>
              </h2>
              <motion.div
                className="relative max-w-3xl mx-auto px-4 sm:px-6 md:px-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative bg-white rounded-xl p-6 sm:p-8 shadow-md border border-[#00ADB5]/10">
                  <div className="absolute -top-4 -left-4 w-6 h-6 sm:-top-6 sm:-left-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-[#00ADB5]" />
                  <div className="absolute -top-4 -right-4 w-6 h-6 sm:-top-6 sm:-right-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-[#00ADB5]" />
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 sm:-bottom-6 sm:-left-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-[#00ADB5]" />
                  <div className="absolute -bottom-4 -right-4 w-6 h-6 sm:-bottom-6 sm:-right-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-[#00ADB5]" />
                  <h3 className="text-lg sm:text-xl font-bold text-[#222831] mb-4 sm:mb-6 flex items-center gap-2">
                    <FileText className="h-5 sm:h-6 w-5 sm:w-6 text-[#00ADB5]" />
                    Privacy and Compliance Services
                  </h3>
                  <ul className="text-[#393E46] text-sm sm:text-base leading-relaxed space-y-3 sm:space-y-4">
                    {expertiseItems.map((item, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start gap-2 sm:gap-3 group"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <span className="h-2 w-2 rounded-full bg-[#00ADB5] mt-1 sm:mt-2 flex-shrink-0 group-hover:scale-125 transition-transform" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
                <span className="text-[#222831]">Our Privacy</span>{' '}
                <span className="text-[#00ADB5]">& Data Protection Services</span>
              </h2>
              <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
                {serviceCards.map((service, index) => (
                  <Link
                    key={service.title}
                    href={service.route}
                    className="group relative"
                    onMouseEnter={() => setHoveredCard(service.title)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <motion.div
                      className="h-full bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <span className="absolute top-4 right-4 text-[#00ADB5] text-lg sm:text-xl opacity-30 group-hover:opacity-100 transition-opacity duration-300">✦</span>
                      <div className="flex flex-col gap-4 sm:gap-5 relative z-10">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#00ADB5] rounded-xl flex items-center justify-center text-white">
                          <service.icon className="h-5 sm:h-7 w-5 sm:w-7" />
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-[#222831] mb-2 sm:mb-3 group-hover:text-[#00ADB5] transition-colors duration-300">
                            {service.title}
                          </h3>
                          <p className="text-[#393E46]/80 text-sm sm:text-base leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </motion.div>
            </div>
            <motion.div
              className="relative max-w-3xl mx-auto px-4 sm:px-6 md:px-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative py-8 sm:py-12">
                <div className="absolute -top-4 -left-4 w-6 h-6 sm:-top-6 sm:-left-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-[#00ADB5]" />
                <div className="absolute -top-4 -right-4 w-6 h-6 sm:-top-6 sm:-right-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-[#00ADB5]" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 sm:-bottom-6 sm:-left-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-[#00ADB5]" />
                <div className="absolute -bottom-4 -right-4 w-6 h-6 sm:-bottom-6 sm:-right-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-[#00ADB5]" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                  <span className="text-[#00ADB5]">Ready to Ensure</span>{' '}
                  <span className="text-[#222831]">Data Protection Compliance?</span>
                </h2>
                <p className="text-[#393E46] text-sm sm:text-base leading-relaxed mb-6">
                  At Leonard Corporate Solutions, our privacy and data protection services ensure your business complies with global regulations while fostering growth. Partner with us for practical, risk-focused solutions and tailored training to empower your team.
                </p>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-[#00ADB5] text-white font-medium rounded-full hover:bg-[#222831] transition-colors duration-300 text-sm sm:text-base"
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
