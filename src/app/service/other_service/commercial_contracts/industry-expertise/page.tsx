
'use client';

import { motion } from 'framer-motion';
import { FileText, Shield, Briefcase } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { X } from 'lucide-react';
import Head from 'next/head';

interface IndustrySpecificInfo {
  id: number;
  title: string;
  description: string;
  category: string;
  detailedContent: string;
}

const industrySpecificInfo: IndustrySpecificInfo[] = [
  {
    id: 1,
    title: 'Tech Industry Contracts',
    description: 'We tailor contracts for software, SaaS, and tech startups.',
    category: 'Technology',
    detailedContent: `
      • Draft contracts for software development and licensing.
      • Create SaaS agreements with clear usage terms.
      • Address IP ownership in tech partnerships.
      • Ensure compliance with data protection laws.
      • Include clauses for tech-specific risks.
    `,
  },
  {
    id: 2,
    title: 'Healthcare Contracts',
    description: 'We address compliance and patient data in healthcare.',
    category: 'Healthcare',
    detailedContent: `
      • Draft contracts compliant with healthcare regulations.
      • Protect patient data with HIPAA-compliant clauses.
      • Address vendor and supplier agreements in healthcare.
      • Include risk management clauses for medical services.
      • Ensure contracts meet Indian healthcare laws.
    `,
  },
  {
    id: 3,
    title: 'Construction Contracts',
    description: 'We draft contracts for projects, labor, and timelines.',
    category: 'Construction',
    detailedContent: `
      • Draft contracts for large-scale construction projects.
      • Address labor, safety, and subcontractor terms.
      • Include clauses for project delays and cost overruns.
      • Ensure compliance with construction regulations.
      • Protect against disputes in project timelines.
    `,
  },
];

const industrySpecificServices = [
  {
    icon: Briefcase,
    title: 'Tech Contracts',
    description: 'Tailored for software and startups.',
  },
  {
    icon: FileText,
    title: 'Healthcare Compliance',
    description: 'Compliant healthcare agreements.',
  },
  {
    icon: Shield,
    title: 'Construction Contracts',
    description: 'Protect construction projects.',
  },
];

const benefits = [
  'Industry-tailored contract solutions',
  'Minimized legal risks',
  'Compliance with sector-specific laws',
];

export default function IndustrySpecificExpertisePage() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState<IndustrySpecificInfo | null>(null);

  const handleExploreClick = (info: IndustrySpecificInfo) => {
    setSelectedInfo(info);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedInfo(null);
  };

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Get industry-specific contract solutions with BrandSecure. Tailored contracts for tech, healthcare, and construction in India and globally."
        />
        <meta
          name="keywords"
          content="industry-specific contracts, tech contract solutions, healthcare contracts, construction agreements, tailored legal services"
        />
        <title>Industry-Specific Expertise Services | BrandSecure</title>
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

        {showPopup && selectedInfo && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-[1000] p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closePopup}
          >
            <motion.div
              className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-md relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              style={{ scrollbarWidth: 'thin', scrollbarColor: '#00ADB5 #222831' }}
            >
              <style>{`
                ::-webkit-scrollbar { width: 8px; }
                ::-webkit-scrollbar-track { background: #222831; border-radius: 4px; }
                ::-webkit-scrollbar-thumb { background: #00ADB5; border-radius: 4px; }
                ::-webkit-scrollbar-thumb:hover { background: #008b91; }
              `}</style>
              <button
                onClick={closePopup}
                className="absolute top-4 right-4 p-2 text-[#393E46] hover:text-[#00ADB5] hover:bg-[#00ADB5]/10 rounded-full"
              >
                <X size={24} />
              </button>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#222831] mb-4 sm:mb-6">{selectedInfo.title}</h2>
              <ul className="text-[#393E46]/85 text-sm sm:text-base leading-relaxed space-y-2">
                {selectedInfo.detailedContent.split('\n').map((line, index) => {
                  line = line.trim();
                  if (!line) return null;
                  return (
                    <li key={index} className="relative pl-6 before:content-['✦'] before:absolute before:left-0 before:text-[#00ADB5]">
                      {line.replace(/^•\s*/, '')}
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </motion.div>
        )}

        <motion.section
          className="relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[80vh] flex items-center justify-center"
        >
          <div className="absolute top-4 left-4 w-8 h-8 sm:top-6 sm:left-6 sm:w-10 sm:h-10 md:top-8 md:left-8 md:w-12 md:h-12 border-t-2 border-l-2 border-[#00ADB5] hidden lg:block" />
          <div className="absolute top-4 right-4 w-8 h-8 sm:top-6 sm:right-6 sm:w-10 sm:h-10 md:top-8 md:right-8 md:w-12 md:h-12 border-t-2 border-r-2 border-[#00ADB5] hidden lg:block" />
          <div className="absolute bottom-4 left-4 w-8 h-8 sm:bottom-6 sm:left-6 sm:w-10 sm:h-10 md:bottom-8 md:left-8 md:w-12 md:h-12 border-b-2 border-l-2 border-[#00ADB5] hidden lg:block" />
          <div className="absolute bottom-4 right-4 w-8 h-8 sm:bottom-6 sm:right-6 sm:w-10 sm:h-10 md:bottom-8 md:right-8 md:w-12 md:h-12 border-b-2 border-r-2 border-[#00ADB5] hidden lg:block" />

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl mx-auto text-center px-4"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#222831] relative inline-block tracking-tight">
              Industry-Specific Expertise
              <span className="absolute top-1/2 -left-8 sm:-left-12 md:-left-16 -translate-y-1/2 text-[#00ADB5] text-3xl sm:text-4xl md:text-5xl animate-pulse opacity-50">✦</span>
              <span className="absolute top-1/2 -right-8 sm:-right-12 md:-right-16 -translate-y-1/2 text-[#00ADB5] text-3xl sm:text-4xl md:text-5xl animate-pulse opacity-50">✦</span>
            </h1>
            <p className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
              Tailored Contract Solutions
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
              <div className="text-[#393E46] space-y-4 sm:space-y-6">
                <p className="text-base sm:text-lg leading-relaxed">
                  At BrandSecure, we provide tailored contract solutions for industries like tech, healthcare, and construction, ensuring compliance and protection in India and globally.
                </p>
                <p className="text-base sm:text-lg font-medium">
                  📧 Reach out at{' '}
                  <a href="mailto:info@brandsecure.in" className="text-[#00ADB5] hover:underline">
                    info@brandsecure.in
                  </a>
                </p>
              </div>
            </motion.div>

            <div className="space-y-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
                <span className="text-[#222831]">Explore</span>{' '}
                <span className="text-[#00ADB5]">Industry-Specific Expertise</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
                {industrySpecificInfo.map((info, index) => (
                  <motion.div
                    key={info.id}
                    className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="absolute top-4 right-4 text-[#00ADB5] text-lg sm:text-xl opacity-30 group-hover:opacity-100 transition-opacity duration-300">✦</span>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#00ADB5] rounded-lg flex items-center justify-center mb-4">
                      <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#222831] mb-3 group-hover:text-[#00ADB5] transition-colors duration-300">
                      {info.title}
                    </h3>
                    <p className="text-[#393E46]/80 text-sm sm:text-base">{info.description}</p>
                    <button
                      onClick={() => handleExploreClick(info)}
                      className="mt-4 inline-flex items-center text-[#00ADB5] font-medium hover:text-[#222831] transition-colors duration-300 text-sm sm:text-base"
                    >
                      Explore
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
                <span className="text-[#222831]">Our</span>{' '}
                <span className="text-[#00ADB5]">Industry Services</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
                {industrySpecificServices.map((service, index) => (
                  <motion.div
                    key={service.title}
                    className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="absolute top-4 right-4 text-[#00ADB5] text-lg sm:text-xl opacity-30 group-hover:opacity-100 transition-opacity duration-300">✦</span>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#00ADB5] rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#222831] mb-3 group-hover:text-[#00ADB5] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-[#393E46]/80 text-sm sm:text-base">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              className="relative max-w-3xl mx-auto px-4 sm:px-6 md:px-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
                <span className="text-[#222831]">Why Choose</span>{' '}
                <span className="text-[#00ADB5]">Our Expertise?</span>
              </h2>
              <ul className="space-y-4 list-none pl-5">
                {benefits.map((benefit, index) => (
                  <li key={index} className="relative pl-6 text-sm sm:text-base before:content-['✦'] before:absolute before:left-0 before:text-[#00ADB5]">
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>

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
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Tailored Industry Solutions</h2>
                <p className="text-[#393E46] text-sm sm:text-lg leading-relaxed mb-6">
                  Protect your business with our industry-specific contract services. Contact us today!
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
