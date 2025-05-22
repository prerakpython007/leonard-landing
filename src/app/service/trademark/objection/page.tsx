'use client';

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { X } from "lucide-react";

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
    title: "Understanding Trademark Objection",
    description: "A trademark objection is raised when the Trademark Examiner identifies issues with your application, such as similarity to existing marks or errors in documentation.",
    category: "Objection Basics",
    detailedContent: `
      • Occurs during the trademark examination process.
      • Raised due to issues like similar marks or incomplete details.
      • Not a rejection but a request for clarification or correction.
      • Issued via an examination report by the Trademark Registry.
      • Requires a response to proceed with registration.
      • Common in India under the Trademarks Act, 1999.
    `,
  },
  {
    id: 2,
    title: "Importance of Timely Action",
    description: "Addressing objections within 30 days is critical to keep your trademark application active and secure your brand’s legal protection.",
    category: "Timely Action",
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
    title: "Objection Handling Process",
    description: "The process includes reviewing the examination report, preparing a detailed response with evidence, and submitting it to the Trademark Registry online.",
    category: "Process Guide",
    detailedContent: `
      • Review the examination report to identify objection reasons.
      • Gather evidence like usage proof or distinctiveness claims.
      • Draft a detailed response addressing each objection point.
      • Include legal arguments and supporting documents.
      • Submit response online via the Trademark Registry portal.
      • Monitor application status post-submission.
    `,
  },
  {
    id: 4,
    title: "Frequent Objection Causes",
    description: "Common reasons include incorrect applicant details, improper trademark class, non-distinctive marks, or resemblance to registered trademarks.",
    category: "Objection Causes",
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
    title: "Next Steps After Response",
    description: "A successful response leads to journal publication. If unresolved, a hearing may be scheduled to argue your case before the examiner.",
    category: "Follow-Up",
    detailedContent: `
      • Successful response results in trademark journal publication.
      • Publication allows public opposition within four months.
      • Unresolved objections may lead to a hearing with the examiner.
      • Prepare legal arguments and evidence for the hearing.
      • Approval post-hearing leads to registration certificate.
      • Monitor status via Trademark Registry’s online portal.
    `,
  },
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

  // Add close handler for thank you popup
  const handleCloseThankYou = () => setShowThankYou(false);

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

      {/* Thank You Popup */}
      <AnimatePresence>
        {showThankYou && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1001] bg-black/60 backdrop-blur-sm flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl p-8 shadow-2xl border-2 border-[#00ADB5] relative"
            >
              <span className="absolute -top-4 -left-4 text-[#00ADB5] text-4xl">✦</span>
              <span className="absolute -bottom-4 -right-4 text-[#00ADB5] text-4xl">✦</span>
              <h3 className="text-2xl font-bold text-[#222831] mb-2">Thank You!</h3>
              <p className="text-[#393E46] mb-6">We'll get back to you shortly.</p>
              <button
                onClick={handleCloseThankYou}
                className="w-full px-4 py-2 bg-[#222831] text-white font-medium rounded-full hover:bg-[#00ADB5] transition-colors duration-300"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
            Trademark Objection
            <span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Resolve Objections with Confidence
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
                <span className="text-[#00ADB5]">Overcome</span>{' '}
                <span className="text-[#393E46]">Trademark Objections</span>
              </h2>
              <p className="text-[#393E46] text-lg leading-relaxed">
                Facing a trademark objection? BrandSecure’s expert team can prepare and file a professional response within 5-10 working days, ensuring compliance with the Trademark Registry. We simplify the process to keep your application on track and protect your brand.
              </p>
              <p className="text-[#393E46] text-lg font-medium">
                📩 Contact us at{' '}
                <a href="mailto:info@brandsecure.in" className="text-[#00ADB5] hover:underline">
                  info@brandsecure.in
                </a>{' '}
                to resolve your objection today.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Trademark Objection</span>{' '}
              <span className="text-[#00ADB5]">Assistance</span>
            </h2>
            <p className="text-[#393E46]/80 text-lg leading-relaxed max-w-2xl mx-auto">
              Connect with our specialists for personalized support in resolving your trademark objection.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 px-4 md:px-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-64 md:h-auto"
            >
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80"
                alt="Trademark Objection Assistance"
                className="w-full h-full object-cover rounded-xl shadow-md border border-[#00ADB5]/10"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-md border border-[#00ADB5]/10"
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[#222831] font-medium mb-1" htmlFor="fullName">Full Name</label>
                  <input
                    required
                    type="text"
                    name="fullName"
                    id="fullName"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00ADB5]"
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
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00ADB5]"
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
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00ADB5]"
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
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00ADB5]"
                    placeholder="Enter your state or region"
                  />
                </div>
                <div>
                  <label className="block text-[#222831] font-medium mb-1" htmlFor="referralSource">How did you find us?</label>
                  <select
                    id="referralSource"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00ADB5]"
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
                  className="w-full px-6 py-3 bg-[#00ADB5] text-white font-medium rounded-full hover:bg-[#222831] transition-colors duration-300"
                >
                  Submit Inquiry
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Objection Info Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Trademark Objection</span>{' '}
              <span className="text-[#00ADB5]">Essentials</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
            {objectionInfo.map((info: ObjectionInfo, index: number) => (
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

      {/* Reasons for Objection Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Common Causes of</span>{' '}
              <span className="text-[#00ADB5]">Trademark Objection</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 px-4 md:px-16">
            {[
              {
                title: 'Errors in Applicant Details',
                description: 'Mistakes in the applicant’s name or address can prompt objections, requiring accurate corrections.',
              },
              {
                title: 'Incorrect Class Filing',
                description: 'Submitting under the wrong trademark class for your goods or services may lead to an objection.',
              },
              {
                title: 'Similarity to Existing Marks',
                description: 'A mark resembling a registered trademark can cause objections due to potential market confusion.',
              },
              {
                title: 'Lack of Distinctiveness',
                description: 'Generic or descriptive marks, like ‘quality’ or ‘fresh,’ may be objected to for lacking uniqueness.',
              },
            ].map((reason, index) => (
              <motion.div
                key={reason.title}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#00ADB5]/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold text-[#222831] mb-3">{reason.title}</h3>
                <p className="text-[#393E46]/80 text-base leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Required Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Documents for</span>{' '}
              <span className="text-[#00ADB5]">Objection Response</span>
            </h2>
          </div>
          <motion.div
            className="bg-white p-8 rounded-xl shadow-md border border-[#00ADB5]/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <ul className="text-[#393E46]/80 list-disc list-inside text-base leading-relaxed">
              <li>Brand Logo or Mark</li>
              <li>Trademark Examination Report</li>
              <li>Evidence of Logo Ownership (e.g., marketing materials, receipts)</li>
              <li>Form TM-48 (if not previously submitted)</li>
              <li>Affidavit of Mark Usage (if required)</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Our Objection</span>{' '}
              <span className="text-[#00ADB5]">Handling Process</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
            {[
              {
                title: 'Submit Details & Pay',
                description: 'Complete our inquiry form and make the payment to start the objection process.',
              },
              {
                title: 'Expert Review',
                description: 'Our specialists will contact you to evaluate the objection report and plan the response.',
              },
              {
                title: 'Draft & Submit',
                description: 'We prepare the response, share it for your approval, and file it with the Trademark Registry.',
              },
            ].map((step, index) => (
              <motion.div
                key={step.title}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#00ADB5]/10 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold text-[#222831] mb-3">{index + 1}. {step.title}</h3>
                <p className="text-[#393E46]/80 text-base leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Trademark Objection</span>{' '}
              <span className="text-[#00ADB5]">Packages</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 px-4 md:px-16">
            {[
              {
                title: 'Basic Plan',
                price: '₹4,799',
                features: [
                  'Expert Consultation',
                  'Objection Response Drafting & Filing',
                  'Form-48 Preparation (if needed)',
                  'Email & Call Support',
                ],
                href: '/buy-basic',
              },
              {
                title: 'Advanced Plan',
                price: '₹11,499',
                features: [
                  'Expert Consultation',
                  'Objection Response Drafting & Filing',
                  'Trademark Hearing Assistance',
                  'Email & Call Support',
                ],
                href: '/buy-advanced',
              },
            ].map((plan, index) => (
              <motion.div
                key={plan.title}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#00ADB5]/10 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-2xl font-bold text-[#222831] mb-4">{plan.title}</h3>
                <p className="text-3xl font-bold text-[#00ADB5] mb-4">{plan.price}</p>
                <ul className="text-[#393E46]/80 list-disc list-inside mb-6 text-base leading-relaxed">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <Link
                  href={plan.href}
                  className="inline-flex items-center px-6 py-3 bg-[#00ADB5] text-white font-medium rounded-full hover:bg-[#222831] transition-colors duration-300"
                >
                  Purchase Now
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Why Trust</span>{' '}
              <span className="text-[#00ADB5]">BrandSecure?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
            {[
              {
                title: 'Proven Expertise',
                description: 'Government-recognized with thousands of satisfied clients across India.',
              },
              {
                title: 'Efficient & Cost-Effective',
                description: 'Swift service at affordable rates, ensuring secure and confidential handling.',
              },
              {
                title: 'Responsive Support',
                description: 'Dedicated team providing prompt email and call assistance for a smooth process.',
              },
            ].map((reason, index) => (
              <motion.div
                key={reason.title}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#00ADB5]/10 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold text-[#222831] mb-3">{reason.title}</h3>
                <p className="text-[#393E46]/80 text-base leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
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
              <span className="text-[#00ADB5]">Resolve Your</span>{' '}
              <span className="text-[#393E46]">Trademark Objection</span>
            </h2>
            <p className="text-[#393E46] text-lg leading-relaxed mb-6">
              Secure your brand with BrandSecure’s expert objection handling services. Contact us today to keep your trademark application on track.
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