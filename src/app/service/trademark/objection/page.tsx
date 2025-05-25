'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Gavel, Clock } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { X } from 'lucide-react';

// Define the interface for objection info
interface ObjectionInfo {
  id: number;
  title: string;
  description: string;
  category: string;
  detailedContent: string;
}

const objectionInfo: ObjectionInfo[] = [
  {
    id: 1,
    title: 'Understanding Trademark Objection',
    description: 'Issues raised by the Examiner during application review.',
    category: 'Objection Basics',
    detailedContent: `
      • Occurring during the trademark examination process.
      • Raised due to issues like similar marks or incomplete details.
      • Not a rejection but a request for clarification or correction.
      • Issued via an examination report by the Trademark Registry.
      • Requiring a response to proceed with registration.
      • Common in India under the Trademarks Act, 1999.
    `,
  },
  {
    id: 2,
    title: 'Importance of Timely Action',
    description: 'Respond within 30 days to keep your application active.',
    category: 'Timely Action',
    detailedContent: `
      • 30-day deadline to respond to the examination report.
      • Failure to respond may lead to application abandonment.
      • Timely response ensures continued processing of your mark.
      • Prevents loss of priority and brand protection.
      • Allows correction of errors or clarification of issues.
      • Demonstrates compliance with Trademark Registry rules.
    `,
  },
  {
    id: 3,
    title: 'Objection Handling Process',
    description: 'Review report, draft response, and submit online.',
    category: 'Process Guide',
    detailedContent: `
      • Reviewing the examination report to identify objection reasons.
      • Gathering evidence like usage proof or distinctiveness claims.
      • Drafting a detailed response addressing each objection point.
      • Including legal arguments and supporting documents.
      • Submitting response online via the Trademark Registry portal.
      • Monitoring application status post-submission.
    `,
  },
  {
    id: 4,
    title: 'Frequent Objection Causes',
    description: 'Includes errors, wrong class, or similar marks.',
    category: 'Objection Causes',
    detailedContent: `
      • Errors in applicant’s name, address, or entity type.
      • Filing under incorrect trademark class for goods/services.
      • Marks that are descriptive, generic, or lack distinctiveness.
      • Similarity to existing registered or pending trademarks.
      • Incomplete or incorrect documentation (e.g., Form TM-48).
      • Non-compliance with trademark rules or regulations.
    `,
  },
  {
    id: 5,
    title: 'Next Steps After Response',
    description: 'Leads to publication or hearing if unresolved.',
    category: 'Follow-Up',
    detailedContent: `
      • Successful response results in trademark journal publication.
      • Publication allows public opposition within four months.
      • Unresolved objections may lead to a hearing with the examiner.
      • Preparing legal arguments and evidence for the hearing.
      • Approval post-hearing leads to registration certificate.
      • Monitoring status via Trademark Registry’s online portal.
    `,
  },
];

const objectionServices = [
  {
    icon: FileText,
    title: 'Report Analysis',
    description: 'We review the examination report to identify issues.',
  },
  {
    icon: Gavel,
    title: 'Response Drafting',
    description: 'We prepare a detailed response with legal arguments.',
  },
  {
    icon: Clock,
    title: 'Timely Filing',
    description: 'We submit your response within the 30-day deadline.',
  },
];

const benefits = [
  'Keep your trademark application on track',
  'Avoid abandonment with timely responses',
  'Secure your brand’s legal protection',
];

export default function TrademarkObjectionPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState<ObjectionInfo | null>(null);

  const handleExploreClick = (info: ObjectionInfo) => {
    setSelectedInfo(info);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedInfo(null);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Check if all fields are filled
    const isComplete = Array.from(formData.values()).every(value => value !== '');

    if (isComplete) {
      setShowThankYou(true);
      form.reset();
    }
  };

  const handleCloseThankYou = () => setShowThankYou(false);

  return (
    <div className="min-h-screen bg-[#EEEEEE] relative rounded-b-[50px] sm:rounded-b-[100px] md:rounded-b-[170px] font-montserrat overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12">
      {/* Grid Pattern */}
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

      {/* Popup */}
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

      {/* Thank You Popup */}
      <AnimatePresence>
        {showThankYou && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1001] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl p-6 sm:p-8 max-w-md w-full shadow-md relative"
            >
              <span className="absolute -top-4 -left-4 text-[#00ADB5] text-2xl sm:text-3xl">✦</span>
              <span className="absolute -bottom-4 -right-4 text-[#00ADB5] text-2xl sm:text-3xl">✦</span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#222831] mb-2">Thank You!</h3>
              <p className="text-[#393E46] text-sm sm:text-base mb-4 sm:mb-6">We'll get back to you shortly.</p>
              <button
                onClick={handleCloseThankYou}
                className="w-full px-4 sm:px-6 py-2 sm:py-3 bg-[#00ADB5] text-white font-medium rounded-full hover:bg-[#222831] transition-colors duration-300 text-sm sm:text-base"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
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
            Trademark Objection
            <span className="absolute top-1/2 -left-8 sm:-left-12 md:-left-16 -translate-y-1/2 text-[#00ADB5] text-3xl sm:text-4xl md:text-5xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-8 sm:-right-12 md:-right-16 -translate-y-1/2 text-[#00ADB5] text-3xl sm:text-4xl md:text-5xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Resolve Objections with Confidence
          </p>
        </motion.div>
      </motion.section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16 md:space-y-24 lg:space-y-32">
          {/* Overview */}
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
                Trademark objections arise when the Trademark Registry identifies issues in your application. BrandSecure’s experts analyze the examination report, draft compliant responses, and file them within the 30-day deadline to keep your application active and protect your brand under India’s Trademarks Act, 1999.
              </p>
            </div>
          </motion.div>

          {/* Contact Form Section */}
          <div className="space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
              <span className="text-[#222831]">Get</span>{' '}
              <span className="text-[#00ADB5]">Objection Assistance</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative h-64 md:h-auto"
              >
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80"
                  alt="Trademark Objection Assistance"
                  className="w-full h-full object-cover rounded-xl shadow-md"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 sm:p-8 rounded-xl shadow-md"
              >
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[#222831] font-medium mb-1" htmlFor="fullName">Full Name</label>
                    <input
                      required
                      type="text"
                      name="fullName"
                      id="fullName"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00ADB5] text-sm sm:text-base"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-[#222831] font-medium mb-1" htmlFor="emailAddress">Email Address</label>
                    <input
                      required
                      type="email"
                      name="emailAddress"
                      id="emailAddress"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00ADB5] text-sm sm:text-base"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div>
                    <label className="block text-[#222831] font-medium mb-1" htmlFor="mobileNumber">Mobile Number</label>
                    <input
                      required
                      type="tel"
                      name="mobileNumber"
                      id="mobileNumber"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00ADB5] text-sm sm:text-base"
                      placeholder="Enter your mobile number (without 0 or +91)"
                    />
                  </div>
                  <div>
                    <label className="block text-[#222831] font-medium mb-1" htmlFor="region">State/Region</label>
                    <input
                      required
                      type="text"
                      name="region"
                      id="region"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00ADB5] text-sm sm:text-base"
                      placeholder="Enter your state or region"
                    />
                  </div>
                  <div>
                    <label className="block text-[#222831] font-medium mb-1" htmlFor="referralSource">How did you find us?</label>
                    <select
                      id="referralSource"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00ADB5] text-sm sm:text-base"
                    >
                      <option value="">Select an option</option>
                      <option value="website">Our Website</option>
                      <option value="social-media">Social Media</option>
                      <option value="friend">Friend/Colleague</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-4 sm:px-6 py-2 sm:py-3 bg-[#00ADB5] text-white font-medium rounded-full hover:bg-[#222831] transition-colors duration-300 text-sm sm:text-base"
                  >
                    Submit Inquiry
                  </button>
                </form>
              </motion.div>
            </div>
          </div>

          {/* Objection Info Section */}
          <div className="space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
              <span className="text-[#222831]">Explore</span>{' '}
              <span className="text-[#00ADB5]">Trademark Objections</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
              {objectionInfo.map((info, index) => (
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
                    <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
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

          {/* Strategy Section */}
          <div className="space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
              <span className="text-[#222831]">How We</span>{' '}
              <span className="text-[#00ADB5]">Handle Trademark Objections</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
              {objectionServices.map((service, index) => (
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

          {/* Benefits Section */}
          <motion.div
            className="relative max-w-3xl mx-auto px-4 sm:px-6 md:px-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
              <span className="text-[#222831]">Why You Need</span>{' '}
              <span className="text-[#00ADB5]">Objection Handling</span>
            </h2>
            <ul className="space-y-4 list-none pl-5">
              {benefits.map((benefit, index) => (
                <li key={index} className="relative pl-6 text-sm sm:text-base before:content-['✦'] before:absolute before:left-0 before:text-[#00ADB5]">
                  {benefit}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Call to Action */}
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Resolve Your Objection</h2>
              <p className="text-[#393E46] text-sm sm:text-lg leading-relaxed mb-6">
                Keep your trademark application on track with our expert objection handling. Contact us today!
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

      {/* Back to Home Link */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8">
        <Link
          href="/"
          className="inline-flex items-center text-[#393E46] hover:text-[#00ADB5] transition-colors text-sm sm:text-base"
        >
          <span className="mr-2">←</span> Back to Home
        </Link>
      </div>
    </div>
  );
}