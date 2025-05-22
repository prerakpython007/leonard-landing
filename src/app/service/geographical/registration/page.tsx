'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { X } from 'lucide-react';

// Define the interface for GI registration info
interface GIRegistrationInfo {
  id: number;
  title: string;
  description: string;
  category: string;
  detailedContent: string;
}

const giRegistrationInfo: GIRegistrationInfo[] = [
  {
    id: 1,
    title: 'What is GI Registration?',
    description: 'GI registration protects products tied to a specific region, ensuring their unique qualities are legally recognized under the GI Act, 1999.',
    category: 'Basics',
    detailedContent: `
      • Geographical Indication (GI) identifies products with specific qualities, reputation, or characteristics linked to their place of origin.
      • Governed by the Geographical Indications of Goods (Registration and Protection) Act, 1999 in India.
      • Protects products like Darjeeling Tea, Kancheepuram Silk, or Basmati Rice.
      • Prevents unauthorized use and ensures authenticity.
      • Enhances market recognition and economic value.
      • Recognized internationally under agreements like TRIPS.
    `,
  },
  {
    id: 2,
    title: 'Benefits of Registration',
    description: 'Grants exclusive rights, prevents misuse, and enhances market value by linking products to their geographical origin.',
    category: 'Benefits',
    detailedContent: `
      • Provides legal protection against imitation or misuse.
      • Enhances product credibility and marketability.
      • Boosts economic value for producers and communities.
      • Prevents unauthorized parties from using the GI name.
      • Facilitates export opportunities with global recognition.
      • Supports rural development by promoting regional products.
    `,
  },
  {
    id: 3,
    title: 'Eligibility Criteria',
    description: 'Only producer groups or associations linked to the product’s region can apply for GI registration.',
    category: 'Eligibility',
    detailedContent: `
      • Open to associations of producers, trade organizations, or local authorities.
      • Applicants must be linked to the product’s geographical region.
      • Products must have unique qualities tied to their origin.
      • Requires evidence of historical or cultural significance.
      • Excludes generic products without regional specificity.
      • Must comply with GI Act, 1999 regulations.
    `,
  },
  {
    id: 4,
    title: 'Registration Duration',
    description: 'A registered GI is protected for 10 years, renewable indefinitely every 10 years.',
    category: 'Timeline',
    detailedContent: `
      • Initial GI registration is valid for 10 years.
      • Renewable indefinitely every 10 years upon application.
      • Renewal requires payment of prescribed fees.
      • Maintains continuous protection if renewed on time.
      • Ensures long-term exclusivity for registered products.
      • Managed by the GI Registry in Chennai, India.
    `,
  },
  {
    id: 5,
    title: 'Application Process',
    description: 'Involves submitting detailed evidence of origin, product specifications, and producer details to the GI Registry.',
    category: 'Process',
    detailedContent: `
      • Identify the product’s unique qualities and regional link.
      • File application with GI Registry, including Form GI-1.
      • Submit proof of origin, product specs, and applicant details.
      • GI Registry examines application for compliance.
      • Respond to objections, if any, within stipulated time.
      • Receive GI certificate upon approval, published in GI Journal.
    `,
  },
];

export default function GIRegistrationPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState<GIRegistrationInfo | null>(null);

  const handleExploreClick = (info: GIRegistrationInfo) => {
    setSelectedInfo(info);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedInfo(null);
  };

  const features = [
    {
      title: 'Legal Protection',
      description: 'Prevent unauthorized use of your product\'s name.',
    },
    {
      title: 'Market Advantage',
      description: 'Enhance your product\'s value and authenticity in the market.',
    },
    {
      title: 'Cultural Preservation',
      description: 'Safeguard your region\'s heritage and traditions.',
    }
  ];

  const registrationSteps = [
    {
      title: 'Assessment',
      description: 'We evaluate your product\'s eligibility for GI status.'
    },
    {
      title: 'Documentation',
      description: 'We help prepare and submit all required documents.'
    },
    {
      title: 'Liaison',
      description: 'We work with regulatory authorities to ensure smooth approval.'
    },
    {
      title: 'Follow-Up',
      description: 'We provide ongoing support to maintain your GI status.'
    }
  ];

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
        className="relative h-[80vh] flex items-center justify-center px-4 md:px-16 lg:px-24"
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
          <h1 className="text-6xl md:text-7xl font-extrabold text-[#222831] relative inline-block tracking-tight">
            GI Registration
            <span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Secure Legal Protection for Regional Products
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
                Registering a Geographical Indication (GI) is the first step to legally protecting your regional products. At Leonard Corporate Solutions, we streamline the GI registration process, ensuring your products gain the recognition and protection they deserve.
              </p>
            </div>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#00ADB5]/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold text-[#222831] mb-3">{feature.title}</h3>
                <p className="text-[#393E46]/80 text-base leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Registration Process */}
          <motion.div className="relative max-w-3xl mx-auto px-8">
            <h2 className="text-3xl font-bold text-center mb-8">
              <span className="text-[#00ADB5]">Our GI</span>{' '}
              <span className="text-[#222831]">Registration Process</span>
            </h2>
            <div className="space-y-6">
              {registrationSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#00ADB5]/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-bold text-[#222831] mb-3">{step.title}</h3>
                  <p className="text-[#393E46]/80 text-base leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div className="relative max-w-3xl mx-auto px-8 text-center">
            <p className="text-lg text-[#393E46]">
              Ready to register your Geographical Indication? Let us handle the process for you. Contact us now!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Back Link */}
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