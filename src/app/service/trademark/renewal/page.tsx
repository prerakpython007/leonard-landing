"use client"

import { motion } from "framer-motion"
import Link from "next/link"

// Define the interface for renewal info
interface RenewalInfo {
  id: number;
  title: string;
  description: string;
  category: string;
}

const renewalInfo: RenewalInfo[] = [
  {
    id: 1,
    title: "What is Trademark Renewal?",
    description: "Trademark renewal extends the legal protection of your brand for another ten years, ensuring continued exclusivity of your logo, name, or slogan in the market.",
    category: "Renewal Basics"
  },
  {
    id: 2,
    title: "Benefits of Renewal",
    description: "Renewing your trademark maintains brand protection, prevents loss of rights, enables legal action against infringements, and supports licensing opportunities.",
    category: "Brand Protection"
  },
  {
    id: 3,
    title: "Renewal Process",
    description: "The process involves filing Form TM-R, scrutiny by the Trademark Registry, journal publication, and issuance of a renewal certificate if unopposed.",
    category: "Process Guide"
  },
  {
    id: 4,
    title: "Trademark Restoration",
    description: "If a trademark expires, it can be restored within one year from the expiry date by filing an application with the required fees and documentation.",
    category: "Restoration"
  },
  {
    id: 5,
    title: "Timelines and Forms",
    description: "Renewal can be filed up to one year before expiry, with specific forms like TM-R and TM-18, along with applicable fees for physical or e-filing.",
    category: "Filing Requirements"
  }
]

export default function TrademarkRenewalPage() {
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
            Trademark Renewal
            <span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Extend Your Brand Protection with Expert Renewal Services
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
            <h2 className="text-3xl font-bold text-[#222831] mb-4">Safeguard Your Brand with Trademark Renewal</h2>
            <p className="text-[#393E46]/80 mb-6">
              A trademark sets your business apart by protecting its unique symbols, logos, or names, marked with an ® symbol. In India, trademarks are valid for ten years under the Trade Marks Act, 1999. Renewing your trademark ensures continued legal protection, preventing competitors from using similar marks. At BrandSecure, we streamline the online trademark renewal process, helping businesses and individuals maintain their brand identity effortlessly.
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

      {/* Renewal Info Section */}
      <section className="py-16 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#222831] mb-4">Trademark Renewal Essentials</h2>
            <div className="w-24 h-1 bg-[#00ADB5] mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {renewalInfo.map((info: RenewalInfo, index: number) => (
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
                      href={`/renewal/${info.id}`}
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

      {/* Benefits of Renewal Section */}
      <section className="py-16 px-4 md:px-16 lg:px-24 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#222831] mb-4">Benefits of Trademark Renewal</h2>
            <div className="w-24 h-1 bg-[#00ADB5] mx-auto rounded-full"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">Sustained Brand Protection</h3>
              <p className="text-[#393E46]/80">Renewal extends legal protection for your brand for another decade, preventing competitors from using similar marks.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">Retains Exclusive Rights</h3>
              <p className="text-[#393E46]/80">Avoid losing exclusive rights to your brand, which could allow others to register similar marks and create market confusion.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">Supports Legal Action</h3>
              <p className="text-[#393E46]/80">A renewed trademark empowers you to take legal steps against unauthorized use, safeguarding your brand’s reputation.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">Boosts Licensing Opportunities</h3>
              <p className="text-[#393E46]/80">A valid trademark supports licensing or franchising, creating new revenue streams with confident partners.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Renewal Process Section */}
      <section className="py-16 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#222831] mb-4">How to Renew a Trademark in India</h2>
            <div className="w-24 h-1 bg-[#00ADB5] mx-auto rounded-full"></div>
          </motion.div>
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">1. File Application</h3>
              <p className="text-[#393E46]/80">Submit Form TM-R online via the Indian Patent Office portal or through an authorized agent.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">2. Application Review</h3>
              <p className="text-[#393E46]/80">The Trademark Registry examines the application to ensure compliance with all requirements.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">3. Journal Publication</h3>
              <p className="text-[#393E46]/80">Approved renewals are published in the Trademark Journal for public review.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#222831] mb-3">4. Renewal Certificate</h3>
              <p className="text-[#393E46]/80">Upon successful publication, a renewal certificate is issued, extending protection for ten years.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Documents and Forms Section */}
      <section className="py-16 px-4 md:px-16 lg:px-24 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#222831] mb-4">Documents and Forms for Renewal</h2>
            <div className="w-24 h-1 bg-[#00ADB5] mx-auto rounded-full"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-[#222831] mb-3">Required Documents</h3>
            <ul className="text-[#393E46]/80 list-disc list-inside mb-6">
              <li>Form TM-R (Renewal Application)</li>
              <li>Copy of Trademark Registration Certificate</li>
              <li>Original Trademark Application Form (TM-A)</li>
              <li>Applicant’s Identity and Address Proof</li>
              <li>Power of Attorney (if filed by an agent)</li>
            </ul>
            <h3 className="text-xl font-bold text-[#222831] mb-3">Forms and Fees</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[#393E46]/80">
                <thead>
                  <tr className="bg-[#00ADB5]/10">
                    <th className="p-4 font-bold text-[#222831]">Form</th>
                    <th className="p-4 font-bold text-[#222831]">Purpose</th>
                    <th className="p-4 font-bold text-[#222831]">Physical Filing Cost</th>
                    <th className="p-4 font-bold text-[#222831]">E-Filing Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4">TM-R</td>
                    <td className="p-4">Renewal of registered trademark</td>
                    <td className="p-4">₹10,000</td>
                    <td className="p-4">₹9,000</td>
                  </tr>
                  <tr>
                    <td className="p-4">TM-R</td>
                    <td className="p-4">Renewal with surcharge</td>
                    <td className="p-4">₹5,000 + Renewal fee</td>
                    <td className="p-4">₹4,500 + Renewal fee</td>
                  </tr>
                  <tr>
                    <td className="p-4">TM-18</td>
                    <td className="p-4">Affidavit for statement of case</td>
                    <td className="p-4">-</td>
                    <td className="p-4">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Restoration Section */}
      <section className="py-16 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#222831] mb-4">Trademark Restoration</h2>
            <div className="w-24 h-1 bg-[#00ADB5] mx-auto rounded-full"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-xl font-bold text-[#222831] mb-3">Restoring an Expired Trademark</h3>
            <p className="text-[#393E46]/80 mb-4">
              If your trademark expires due to non-renewal, it can be restored within six months to one year from the expiry date. The Trademark Registry issues a notice six months prior to expiry, but failure to renew within six months post-expiry leads to removal from the Register. Restoration requires filing Form TM-R with a surcharge and supporting documents.
            </p>
            <p className="text-[#393E46]/80">
              Restoration Fees: ₹10,000 (physical) or ₹9,000 (e-filing) plus renewal fee for Form TM-R, and Form TM-18 for affidavit support.
            </p>
          </motion.div>
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
            <h2 className="text-4xl font-bold text-[#222831] mb-4">Ready to Renew Your Trademark?</h2>
            <p className="text-[#393E46]/80 mb-6 max-w-2xl mx-auto">
              Ensure your brand remains protected with BrandSecure’s expert trademark renewal services. Start the process today to extend your trademark’s validity and maintain your market exclusivity.
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