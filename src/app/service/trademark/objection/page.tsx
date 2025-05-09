"use client"

import { motion } from "framer-motion"
import Link from "next/link"

// Define the interface for objection info
interface ObjectionInfo {
  id: number;
  title: string;
  description: string;
  category: string;
}

const objectionInfo: ObjectionInfo[] = [
  {
    id: 1,
    title: "Understanding Trademark Objection",
    description: "A trademark objection is raised when the Trademark Examiner identifies issues with your application, such as similarity to existing marks or errors in documentation.",
    category: "Objection Basics"
  },
  {
    id: 2,
    title: "Importance of Timely Action",
    description: "Addressing objections within 30 days is critical to keep your trademark application active and secure your brand’s legal protection.",
    category: "Timely Action"
  },
  {
    id: 3,
    title: "Objection Handling Process",
    description: "The process includes reviewing the examination report, preparing a detailed response with evidence, and submitting it to the Trademark Registry online.",
    category: "Process Guide"
  },
  {
    id: 4,
    title: "Frequent Objection Causes",
    description: "Common reasons include incorrect applicant details, improper trademark class, non-distinctive marks, or resemblance to registered trademarks.",
    category: "Objection Causes"
  },
  {
    id: 5,
    title: "Next Steps After Response",
    description: "A successful response leads to journal publication. If unresolved, a hearing may be scheduled to argue your case before the examiner.",
    category: "Follow-Up"
  }
]

export default function TrademarkObjectionPage() {
  return (
    <div className="min-h-screen bg-[#EEEEEE] relative rounded-b-[5%] font-montserrat">
      {/* Grid Pattern Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.025) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }}
      />

      {/* Hero Section */}
      <motion.section
        className="relative h-[80vh] flex items-center justify-center px-4 md:px-16 lg:px-24 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
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
            Navigate Trademark Objections with Expert Guidance
          </p>
        </motion.div>
      </motion.section>

      {/* Introduction Section */}
      <section className="py-16 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-3xl font-bold text-[#222831] mb-4">Overcome Trademark Objections Seamlessly</h2>
            <p className="text-[#393E46]/80 mb-6">
              Received a trademark objection? Don’t worry—BrandSecure is here to help. Our experienced team can prepare and file a professional response to trademark objections within 5-10 working days, ensuring compliance with the Trademark Registry’s standards. We simplify the process to protect your brand and keep your application on track.
            </p>
            <Link
              href="/contact"
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

      {/* Contact Form Section */}
      <section className="py-16 px-4 md:px-16 lg:px-24 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#222831] mb-4">Assistance with Trademark Objection</h2>
            <p className="text-[#393E46]/80 mb-6 max-w-2xl mx-auto">
              Complete the form below to connect with our trademark specialists for personalized support.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-64 md:h-auto"
            >
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80"
                alt="Trademark Objection Assistance"
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="space-y-4">
                <div>
                  <label className="block text-[#222831] font-medium mb-1" htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00ADB5]"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-[#222831] font-medium mb-1" htmlFor="emailAddress">Email Address</label>
                  <input
                    type="email"
                    id="emailAddress"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00ADB5]"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label className="block text-[#222831] font-medium mb-1" htmlFor="mobileNumber">Mobile Number</label>
                  <input
                    type="tel"
                    id="mobileNumber"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00ADB5]"
                    placeholder="Enter your mobile number (without 0 or +91)"
                  />
                </div>
                <div>
                  <label className="block text-[#222831] font-medium mb-1" htmlFor="region">State/Region</label>
                  <input
                    type="text"
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
                  className="w-full px-6 py-3 bg-[#00ADB5] text-white font-medium rounded-full hover:bg-[#222831] transition-colors duration-300"
                >
                  Submit Inquiry
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Objection Info Section */}
      <section className="py-16 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#222831] mb-4">Trademark Objection Essentials</h2>
            <div className="w-24 h-1 bg-[#00ADB5] mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {objectionInfo.map((info: ObjectionInfo, index: number) => (
              <motion.div
                key={info.id}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="p-6">
                  <div className="mb-4">
                    <span className="px-3 py-1 text-xs font-medium bg-white/90 backdrop-blur-sm rounded-full text-[#00ADB5]">
                      {info.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#222831] mb-3 group-hover:text-[#00ADB5] transition-colors duration-300">
                    {info.title}
                  </h3>
                  <p className="text-[#393E46]/80 mb-4 line-clamp-3">{info.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm font-medium text-[#393E46]">Learn More</span>
                    <Link
                      href={`/objection/${info.id}`}
                      className="inline-flex items-center text-[#00ADB5] font-medium hover:text-[#222831] transition-colors duration-300"
                    >
                      Explore
                      <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons for Objection Section */}
      <section className="py-16 px-4 md:px-16 lg:px-24 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#222831] mb-4">Common Causes of Trademark Objection</h2>
            <div className="w-24 h-1 bg-[#00ADB5] mx-auto rounded-full"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">Errors in Applicant Details</h3>
              <p className="text-[#393E46]/80">Mistakes in the applicant’s name or address can prompt objections, requiring accurate corrections.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">Incorrect Class Filing</h3>
              <p className="text-[#393E46]/80">Submitting under the wrong trademark class for your goods or services may lead to an objection.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">Similarity to Existing Marks</h3>
              <p className="text-[#393E46]/80">A mark resembling a registered trademark can cause objections due to potential market confusion.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">Lack of Distinctiveness</h3>
              <p className="text-[#393E46]/80">Generic or descriptive marks, like ‘quality’ or ‘fresh,’ may be objected to for lacking uniqueness.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Documents Required Section */}
      <section className="py-16 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#222831] mb-4">Documents Needed for Objection Response</h2>
            <div className="w-24 h-1 bg-[#00ADB5] mx-auto rounded-full"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <ul className="text-[#393E46]/80 list-disc list-inside">
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
      <section className="py-16 px-4 md:px-16 lg:px-24 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#222831] mb-4">Our Process for Handling Objections</h2>
            <div className="w-24 h-1 bg-[#00ADB5] mx-auto rounded-full"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">1. Submit Details & Pay</h3>
              <p className="text-[#393E46]/80">Complete our inquiry form and make the payment to start the objection process.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">2. Expert Review</h3>
              <p className="text-[#393E46]/80">Our specialists will contact you to evaluate the objection report and plan the response.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">3. Draft & Submit</h3>
              <p className="text-[#393E46]/80">We prepare the response, share it for your approval, and file it with the Trademark Registry.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#222831] mb-4">Our Trademark Objection Packages</h2>
            <div className="w-24 h-1 bg-[#00ADB5] mx-auto rounded-full"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-lg text-center"
            >
              <h3 className="text-2xl font-bold text-[#222831] mb-4">Basic Plan</h3>
              <p className="text-3xl font-bold text-[#00ADB5] mb-4">₹4,799</p>
              <ul className="text-[#393E46]/80 list-disc list-inside mb-6">
                <li>Expert Consultation</li>
                <li>Objection Response Drafting & Filing</li>
                <li>Form-48 Preparation (if needed)</li>
                <li>Email & Call Support</li>
              </ul>
              <Link
                href="/buy-basic"
                className="inline-flex items-center px-6 py-3 bg-[#00ADB5] text-white font-medium rounded-full hover:bg-[#222831] transition-colors duration-300"
              >
                Purchase Now
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg text-center"
            >
              <h3 className="text-2xl font-bold text personally-identifiable-information text-[#222831] mb-4">Advanced Plan</h3>
              <p className="text-3xl font-bold text-[#00ADB5] mb-4">₹11,499</p>
              <ul className="text-[#393E46]/80 list-disc list-inside mb-6">
                <li>Expert Consultation</li>
                <li>Objection Response Drafting & Filing</li>
                <li>Trademark Hearing Assistance</li>
                <li>Email & Call Support</li>
              </ul>
              <Link
                href="/buy-advanced"
                className="inline-flex items-center px-6 py-3 bg-[#00ADB5] text-white font-medium rounded-full hover:bg-[#222831] transition-colors duration-300"
              >
                Purchase Now
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-16 px-4 md:px-16 lg:px-24 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#222831] mb-4">Why Trust BrandSecure?</h2>
            <div className="w-24 h-1 bg-[#00ADB5] mx-auto rounded-full"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">Proven Expertise</h3>
              <p className="text-[#393E46]/80">Government-recognized with thousands of satisfied clients across India.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">Efficient & Cost-Effective</h3>
              <p className="text-[#393E46]/80">Swift service at affordable rates, ensuring secure and confidential handling.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">Responsive Support</h3>
              <p className="text-[#393E46]/80">Dedicated team providing prompt email and call assistance for a smooth process.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#222831] mb-4">Ready to Tackle Your Trademark Objection?</h2>
            <p className="text-[#393E46]/80 mb-6 max-w-2xl mx-auto">
              Secure your brand with BrandSecure’s expert objection handling services. Take the first step to keep your trademark application on track today.
            </p>
            <Link
              href="/contact"
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
    </div>
  )
}