'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const legalConsultationInfo = [
  {
    id: 1,
    title: 'What is Legal Consultation?',
    description: 'Legal consultation provides tailored advice on legal matters to help you navigate complex issues effectively.',
    category: 'Basics',
  },
  {
    id: 2,
    title: 'Benefits of Consultation',
    description: 'Informed decision-making, risk mitigation, and strategic planning with expert legal guidance.',
    category: 'Benefits',
  },
  {
    id: 3,
    title: 'Who Needs It?',
    description: 'Businesses, startups, individuals, or anyone facing legal questions or decisions.',
    category: 'Eligibility',
  },
  {
    id: 4,
    title: 'Consultation Timeline',
    description: 'Flexible sessions, from one-off meetings to ongoing support, based on your needs.',
    category: 'Timeline',
  },
  {
    id: 5,
    title: 'Our Approach',
    description: 'Client-focused consultations with clear, actionable advice tailored to your situation.',
    category: 'Process',
  },
];

export default function LegalConsultationPage() {
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

      {/* Hero Section */}
      <motion.section
        className="relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[80vh] flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
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
            Legal Consultation
            <span className="absolute top-1/2 -left-8 sm:-left-12 md:-left-16 -translate-y-1/2 text-[#00ADB5] text-3xl sm:text-4xl md:text-5xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-8 sm:-right-12 md:-right-16 -translate-y-1/2 text-[#00ADB5] text-3xl sm:text-4xl md:text-5xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Expert Legal Guidance for Your Business and Personal Needs
          </p>
        </motion.div>
      </motion.section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16 md:space-y-24 lg:space-y-32">
          {/* Introduction Section */}
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
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#222831] mb-4">Navigate Legal Challenges with Confidence</h2>
              <p className="text-[#393E46]/80 text-sm sm:text-base">
                Our legal consultation services provide personalized advice to businesses, startups, and individuals. At Leonard Corporate Solutions, we help you understand your legal options, mitigate risks, and make informed decisions with expert guidance.
              </p>
            </div>
          </motion.div>

          {/* Legal Consultation Info Section */}
          <div>
            <motion.div
              className="text-center mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#222831] mb-4">Legal Consultation Essentials</h2>
              <div className="w-16 sm:w-24 h-1 bg-[#00ADB5] mx-auto rounded-full"></div>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
              {legalConsultationInfo.map((info, index) => (
                <motion.div
                  key={info.id}
                  className="group bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="absolute top-4 right-4 text-[#00ADB5] text-lg sm:text-xl opacity-30 group-hover:opacity-100 transition-opacity duration-300">✦</span>
                  <div className="mb-4">
                    <span className="px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium bg-white/90 backdrop-blur-sm rounded-full text-[#00ADB5]">
                      {info.category}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#222831] mb-3 group-hover:text-[#00ADB5] transition-colors duration-300">
                    {info.title}
                  </h3>
                  <p className="text-[#393E46]/80 text-sm sm:text-base mb-4 line-clamp-3">{info.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm font-medium text-[#393E46]">Learn More</span>
                    <Link
                      href={`/legal/consultation/${info.id}`}
                      className="inline-flex items-center text-[#00ADB5] font-medium hover:text-[#222831] transition-colors duration-300 text-sm sm:text-base"
                    >
                      Explore
                      <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Types of Consultations Section */}
          <div className="bg-[#F7F7F7] py-12 sm:py-16 rounded-xl">
            <motion.div
              className="text-center mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#222831] mb-4">Types of Legal Consultations</h2>
              <div className="w-16 sm:w-24 h-1 bg-[#00ADB5] mx-auto rounded-full"></div>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
              {[
                { title: 'Corporate Law', description: 'Guidance on business formation, compliance, and governance.' },
                { title: 'Intellectual Property', description: 'Advice on protecting trademarks, patents, and copyrights.' },
                { title: 'Employment Law', description: 'Support for workplace policies, disputes, and contracts.' },
                { title: 'Regulatory Compliance', description: 'Ensuring adherence to industry-specific regulations.' },
              ].map((type, index) => (
                <motion.div
                  key={type.title}
                  className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="absolute top-4 right-4 text-[#00ADB5] text-lg sm:text-xl opacity-30 group-hover:opacity-100 transition-opacity duration-300">✦</span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#222831] mb-3 group-hover:text-[#00ADB5] transition-colors duration-300">
                    {type.title}
                  </h3>
                  <p className="text-[#393E46]/80 text-sm sm:text-base">{type.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Consultation Process Section */}
          <div>
            <motion.div
              className="text-center mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#222831] mb-4">Legal Consultation Process</h2>
              <div className="w-16 sm:w-24 h-1 bg-[#00ADB5] mx-auto rounded-full"></div>
            </motion.div>
            <div className="space-y-6 sm:space-y-8">
              {[
                { step: '1. Initial Meeting', description: 'Discuss your legal needs and objectives with our experts.' },
                { step: '2. Issue Analysis', description: 'We analyze your situation to identify risks and opportunities.' },
                { step: '3. Advice Delivery', description: 'Receive clear, actionable legal advice tailored to your needs.' },
                { step: '4. Follow-Up', description: 'Ongoing support to ensure your legal strategy remains effective.' },
              ].map((process, index) => (
                <motion.div
                  key={process.step}
                  className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="absolute top-4 right-4 text-[#00ADB5] text-lg sm:text-xl opacity-30 group-hover:opacity-100 transition-opacity duration-300">✦</span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#222831] mb-3 group-hover:text-[#00ADB5] transition-colors duration-300">
                    {process.step}
                  </h3>
                  <p className="text-[#393E46]/80 text-sm sm:text-base">{process.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Eligibility and Documents Section */}
          <div className="bg-[#F7F7F7] py-12 sm:py-16 rounded-xl">
            <motion.div
              className="text-center mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#222831] mb-4">Eligibility and Required Documents</h2>
              <div className="w-16 sm:w-24 h-1 bg-[#00ADB5] mx-auto rounded-full"></div>
            </motion.div>
            <motion.div
              className="bg-white p-6 sm:p-8 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg sm:text-xl font-bold text-[#222831] mb-3">Who Can Seek Consultation?</h3>
              <ul className="text-[#393E46]/80 list-disc list-inside mb-6 text-sm sm:text-base">
                <li>Businesses and corporations</li>
                <li>Startups and entrepreneurs</li>
                <li>Individuals with legal queries</li>
                <li>Non-profit organizations</li>
              </ul>
              <h3 className="text-lg sm:text-xl font-bold text-[#222831] mb-3">Required Documents</h3>
              <p className="text-[#393E46]/80 mb-4 text-sm sm:text-base">Documents may include:</p>
              <ul className="text-[#393E46]/80 list-disc list-inside text-sm sm:text-base">
                <li>Basic client information (name, contact details)</li>
                <li>Relevant contracts or agreements</li>
                <li>Business registration documents (if applicable)</li>
                <li>Details of the legal issue</li>
              </ul>
            </motion.div>
          </div>

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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Ready for Expert Legal Advice?</h2>
              <p className="text-[#393E46] text-sm sm:text-lg leading-relaxed mb-6">
                Get personalized legal guidance with Leonard Corporate Solutions’ consultation services. Contact us today to address your legal needs with confidence.
              </p>
              <Link
                href="/contact-us"
                className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-[#00ADB5] text-white font-medium rounded-full hover:bg-[#222831] transition-colors duration-300 text-sm sm:text-base"
              >
                Schedule Consultation
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