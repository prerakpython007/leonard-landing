
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { X } from 'lucide-react';

// Define the interface for Portfolio Management info
interface PortfolioManagementInfo {
  id: number;
  title: string;
  description: string;
  category: string;
  detailedContent: string;
}

const portfolioManagementInfo: PortfolioManagementInfo[] = [
  {
    id: 1,
    title: 'What is Portfolio Management?',
    description: 'Trademark and patent portfolio management involves strategically overseeing IP assets across jurisdictions to maximize value and ensure compliance.',
    category: 'Management Basics',
    detailedContent: `
      • Centralizes oversight of trademarks and patents globally.
      • Ensures compliance with renewal and maintenance deadlines.
      • Optimizes IP assets for business goals and market expansion.
      • Mitigates risks of infringement or loss of rights.
      • Tracks and manages licensing or assignment agreements.
      • Aligns IP strategy with multinational operations.
    `,
  },
  {
    id: 2,
    title: 'Benefits of Portfolio Management',
    description: 'Effective portfolio management enhances IP value, reduces costs, and strengthens brand protection for multinationals in global markets.',
    category: 'Advantages',
    detailedContent: `
      • Streamlines IP administration across jurisdictions.
      • Reduces costs through centralized management.
      • Enhances brand and invention protection globally.
      • Improves decision-making with comprehensive IP insights.
      • Minimizes risks of lapses or infringements.
      • Supports strategic expansion into new markets.
    `,
  },
  {
    id: 3,
    title: 'Portfolio Management Process',
    description: 'The process involves auditing, strategizing, implementing, and monitoring trademark and patent portfolios for optimal performance.',
    category: 'Process Guide',
    detailedContent: `
      • Conduct a comprehensive IP portfolio audit.
      • Develop a tailored strategy for IP protection and growth.
      • File and maintain trademarks and patents as needed.
      • Monitor deadlines, renewals, and market activities.
      • Enforce IP rights against infringements.
      • Provide regular updates and strategic recommendations.
    `,
  },
  {
    id: 4,
    title: 'Technology in Portfolio Management',
    description: 'Advanced tools and platforms streamline IP tracking, analytics, and compliance for multinational portfolios.',
    category: 'Technology Integration',
    detailedContent: `
      • Use IP management software for centralized tracking.
      • Leverage analytics for portfolio optimization.
      • Automate renewal and maintenance reminders.
      • Monitor global infringement risks with AI tools.
      • Integrate with business systems for efficiency.
      • Ensure data security for sensitive IP information.
    `,
  },
  {
    id: 5,
    title: 'Challenges of Portfolio Management',
    description: 'Managing multinational IP portfolios involves navigating complex legal systems, high costs, and coordination across jurisdictions.',
    category: 'Considerations',
    detailedContent: `
      • Diverse legal requirements across countries.
      • High costs for multi-jurisdictional filings and renewals.
      • Coordination challenges for global teams.
      • Risk of missed deadlines or lapsed rights.
      • Complexity of enforcing IP in multiple markets.
      • Need for localized expertise in key jurisdictions.
    `,
  },
];

export default function TrademarkPatentPortfolioManagementPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState<PortfolioManagementInfo | null>(null);

  const handleExploreClick = (info: PortfolioManagementInfo) => {
    setSelectedInfo(info);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedInfo(null);
  };

  return (
    <div className="min-h-screen bg-[#EEEEEE] relative rounded-b-[170px] font-montserrat overflow-hidden">
      {/* Grid Pattern Overlay */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.025) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px',
        }}
      />

      {/* Popup */}
      {showPopup && selectedInfo && (
        <motion.div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-[1000] p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={closePopup}
        >
          <motion.div
            className="bg-white rounded-xl max-w-5xl w-full max-h-[95vh] overflow-y-auto p-10 shadow-xl border border-[#00ADB5]/20 relative"
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
              <X size={32} />
            </button>
            <h2 className="text-3xl font-bold text-[#222831] mb-6 border-b-2 border-[#00ADB5]/30 pb-2">{selectedInfo.title}</h2>
            <div className="text-[#393E46]/85 text-lg leading-relaxed">
              {selectedInfo.detailedContent.split('\n').map((line, index) => {
                line = line.trim();
                if (!line) return null;
                return (
                  <p key={index} className="mb-2">
                    {line.startsWith('•') ? line : `• ${line}`}
                  </p>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Hero Section */}
      <motion.section
        className="relative h-[80vh] flex items-center justify-center px-4 md:px-16 lg:px-24 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Corner Angles */}
        <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-[#00ADB5] hidden lg:block" />
        <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-[#00ADB5] hidden lg:block" />
        <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-[#00ADB5] hidden lg:block" />
        <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-[#00ADB5] hidden lg:block" />

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto text-center"
        >
          <h1 className="text-6xl md:text-8xl font-extrabold text-[#222831] relative inline-block tracking-tight">
            IP Portfolio Management
            <span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Optimize Your Global IP Assets
          </p>
        </motion.div>
      </motion.section>

      {/* Introduction Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="relative max-w-3xl mx-auto px-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Corner Angles */}
            <div className="absolute -top-8 -left-8 w-8 h-8 border-t-2 border-l-2 border-[#00ADB5]" />
            <div className="absolute -top-8 -right-8 w-8 h-8 border-t-2 border-r-2 border-[#00ADB5]" />
            <div className="absolute -bottom-8 -left-8 w-8 h-8 border-b-2 border-l-2 border-[#00ADB5]" />
            <div className="absolute -bottom-8 -right-8 w-8 h-8 border-b-2 border-r-2 border-[#00ADB5]" />

            <div className="text-center space-y-6">
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-[#00ADB5]">Maximize Your</span>{' '}
                <span className="text-[#393E46]">IP Value Globally</span>
              </h2>
              <p className="text-[#393E46] text-lg leading-relaxed">
                Trademark and patent portfolio management for multinationals involves strategically overseeing IP assets to ensure protection, compliance, and alignment with global business objectives. At BrandSecure, we provide tailored solutions to streamline IP management, reduce risks, and enhance value for multinational corporations operating across jurisdictions.
              </p>
              <p className="text-[#393E46] text-lg font-medium">
                📩 Contact us at{' '}
                <a href="mailto:info@brandsecure.in" className="text-[#00ADB5] hover:underline">
                  info@brandsecure.in
                </a>{' '}
                to optimize your IP portfolio today.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Management Info Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Portfolio Management</span>{' '}
              <span className="text-[#00ADB5]">Essentials</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
            {portfolioManagementInfo.map((info: PortfolioManagementInfo, index: number) => (
              <motion.div
                key={info.id}
                className="group bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#00ADB5]/10 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <span className="absolute top-4 right-4 text-[#00ADB5] text-xl opacity-30 group-hover:opacity-100 transition-opacity duration-300">✦</span>
                <div className="flex flex-col gap-5 relative z-10">
                  <div className="px-3 py-1 text-xs font-medium bg-[#00ADB5]/10 text-[#00ADB5] rounded-full w-fit">
                    {info.category}
                  </div>
                  <h3 className="text-xl font-bold text-[#222831] mb-3 group-hover:text-[#00ADB5] transition-colors duration-300">
                    {info.title}
                  </h3>
                  <p className="text-[#393E46]/80 text-base leading-relaxed line-clamp-3">{info.description}</p>
                  <button
                    onClick={() => handleExploreClick(info)}
                    className="inline-flex items-center text-[#00ADB5] font-medium hover:text-[#222831] transition-colors duration-300 mt-4 cursor-pointer"
                  >
                    Explore
                    <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#00ADB5] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Management Services Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Key Management</span>{' '}
              <span className="text-[#00ADB5]">Services</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
            {[
              {
                title: 'Trademark Monitoring',
                description: 'Track trademark registrations and infringements globally to maintain brand integrity.',
              },
              {
                title: 'Patent Maintenance',
                description: 'Manage patent renewals and compliance across jurisdictions to protect inventions.',
              },
              {
                title: 'IP Portfolio Audits',
                description: 'Conduct thorough audits to assess and optimize trademark and patent portfolios.',
              },
              {
                title: 'Enforcement Support',
                description: 'Assist with legal actions to enforce IP rights against infringements worldwide.',
              },
              {
                title: 'Licensing Management',
                description: 'Oversee cross-border licensing agreements to maximize IP value.',
              },
              {
                title: 'Strategic Planning',
                description: 'Align IP portfolios with business strategies for global market success.',
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#00ADB5]/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold text-[#222831] mb-3">{service.title}</h3>
                <p className="text-[#393E46]/80 text-base leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Management Process Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">How We Manage</span>{' '}
              <span className="text-[#00ADB5]">Your Portfolio</span>
            </h2>
          </div>
          <div className="space-y-8">
            {[
              {
                step: '1. Portfolio Audit',
                description: 'Review existing trademarks and patents to assess status and gaps.',
              },
              {
                step: '2. Strategy Development',
                description: 'Create a customized plan for IP protection, renewals, and expansion.',
              },
              {
                step: '3. Implementation',
                description: 'Execute filings, renewals, and enforcement actions across jurisdictions.',
              },
              {
                step: '4. Monitoring',
                description: 'Track deadlines, infringements, and market developments globally.',
              },
              {
                step: '5. Optimization',
                description: 'Continuously refine the portfolio to align with business goals.',
              },
            ].map((step, index) => (
              <motion.div
                key={step.step}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#00ADB5]/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold text-[#222831] mb-3">{step.step}</h3>
                <p className="text-[#393E46]/80 text-base leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility and Requirements Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Who Can</span>{' '}
              <span className="text-[#00ADB5]">Benefit?</span>
            </h2>
          </div>
          <motion.div
            className="bg-white rounded-xl p-8 shadow-md border border-[#00ADB5]/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-[#222831] mb-3">Eligible Clients</h3>
            <ul className="text-[#393E46]/80 list-disc list-inside mb-6">
              <li>Multinational corporations with global IP portfolios</li>
              <li>Businesses with trademarks or patents in multiple countries</li>
              <li>Companies expanding into new international markets</li>
              <li>Organizations seeking centralized IP management</li>
              <li>Entities involved in global licensing or enforcement</li>
            </ul>
            <h3 className="text-xl font-bold text-[#222831] mb-3">Requirements for Engagement</h3>
            <p className="text-[#393E46]/80 mb-4">Requirements vary by case but generally include:</p>
            <ul className="text-[#393E46]/80 list-disc list-inside">
              <li>Inventory of existing trademarks and patents</li>
              <li>Details of current IP filings and renewals</li>
              <li>Business objectives and target markets</li>
              <li>Documentation of ownership or licensing agreements</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="relative max-w-3xl mx-auto px-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Corner Angles */}
            <div className="absolute -top-8 -left-8 w-8 h-8 border-t-2 border-l-2 border-[#00ADB5]" />
            <div className="absolute -top-8 -right-8 w-8 h-8 border-t-2 border-r-2 border-[#00ADB5]" />
            <div className="absolute -bottom-8 -left-8 w-8 h-8 border-b-2 border-l-2 border-[#00ADB5]" />
            <div className="absolute -bottom-8 -right-8 w-8 h-8 border-b-2 border-r-2 border-[#00ADB5]" />

            <h2 className="text-4xl font-bold mb-4">
              <span className="text-[#00ADB5]">Ready to Optimize</span>{' '}
              <span className="text-[#393E46]">Your IP Portfolio?</span>
            </h2>
            <p className="text-[#393E46] text-lg leading-relaxed mb-6">
              Partner with BrandSecure to streamline your trademark and patent portfolio management, ensuring global protection and value for your multinational operations. Start today with our expert guidance.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center px-6 py-3 bg-[#00ADB5] text-white font-medium rounded-full hover:bg-[#222831] transition-colors duration-300"
            >
              Get Started
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Back to Home Link */}
      <div className="container mx-auto px-4 sm:px-6 md:px-16 lg:px-24 py-8">
        <Link
          href="/"
          className="inline-flex items-center text-[#393E46] hover:text-[#00ADB5] transition-colors"
        >
          <span className="mr-2">←</span> Back to Home
        </Link>
      </div>
    </div>
  );
}
