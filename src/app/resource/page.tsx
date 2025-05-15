
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// Define the interface for resource information
interface ResourceInfo {
  id: number;
  title: string;
  description: string;
  category: string;
  link: string;
}

const resourceInfo: ResourceInfo[] = [
  {
    id: 1,
    title: "Trademark Services",
    description: "Register, search, and manage trademarks through Intellectual Property India’s official portal.",
    category: "Trademark",
    link: "https://ipindia.gov.in/trade-marks.htm",
  },
  {
    id: 2,
    title: "Copyright Services",
    description: "Protect your creative works by registering with the Copyright Office India.",
    category: "Copyright",
    link: "https://copyright.gov.in/",
  },
  {
    id: 3,
    title: "Patent Services",
    description: "File and search patents using Intellectual Property India’s e-filing and search tools.",
    category: "Patent",
    link: "https://ipindia.gov.in/patents.htm",
  },
  {
    id: 4,
    title: "Geographical Indications",
    description: "Protect regional products with the Geographical Indications Registry.",
    category: "GI",
    link: "https://ipindia.gov.in/gi.htm",
  },
  {
    id: 5,
    title: "Design Services",
    description: "Register industrial designs via Intellectual Property India’s design wing.",
    category: "Design",
    link: "https://ipindia.gov.in/designs.htm",
  },
  {
    id: 6,
    title: "Startup India IP Support",
    description: "Access IP facilitation for startups, including fee concessions and guidance.",
    category: "Startup",
    link: "https://www.startupindia.gov.in/content/sih/en/startupgov/startup_india_ipr.html",
  },
];

export default function GovernmentResourcesPage() {
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
          backgroundSize: "30px 30px",
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
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#222831] relative inline-block tracking-tight">
            Government IP Resources
            <span className="absolute top-1/2 -left-12 -translate-y-1/2 text-[#00ADB5] text-4xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-12 -translate-y-1/2 text-[#00ADB5] text-4xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Access official government resources for trademarks, copyrights, patents, and more in India
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
            <h2 className="text-3xl font-bold text-[#222831] mb-4">Your Gateway to IP Protection</h2>
            <p className="text-[#393E46]/80 mb-6">
              Navigate India’s intellectual property landscape with ease. Our curated list of official government resources helps you register, protect, and manage trademarks, copyrights, patents, and other IP assets efficiently.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 px-4 md:px-16 lg:px-24 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#222831] mb-4">Official Government Resources</h2>
            <div className="w-24 h-1 bg-[#00ADB5] mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourceInfo.map((info: ResourceInfo, index: number) => (
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
                    <span className="text-sm font-medium text-[#393E46]">Visit Portal</span>
                    <Link
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#00ADB5] font-medium hover:text-[#222831] transition-colors duration-300"
                    >
                      Explore
                      <svg
                        className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
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

      {/* Contact Information Section */}
      <section className="py-16 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#222831] mb-4">Contact Government Authorities</h2>
            <div className="w-24 h-1 bg-[#00ADB5] mx-auto rounded-full"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-xl font-bold text-[#222831] mb-3">Office of CGPDTM</h3>
            <p className="text-[#393E46]/80 mb-4">
              For assistance with IP-related queries, contact the Controller General of Patents, Designs & Trade Marks (CGPDTM):
            </p>
            <ul className="text-[#393E46]/80 list-disc list-inside">
              <li>
                <strong>Website</strong>:{" "}
                <Link
                  href="https://ipindia.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00ADB5] hover:text-[#222831]"
                >
                  ipindia.gov.in
                </Link>
              </li>
              <li>
                <strong>Email</strong>: cgpdm@nic.in
              </li>
              <li>
                <strong>Phone</strong>: +91-22-24912407 (Mumbai Office)
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 md:px-16 lg:px-24 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#222831] mb-4">Need Expert IP Guidance?</h2>
            <p className="text-[#393E46]/80 mb-6 max-w-2xl mx-auto">
              Our team can help you navigate government IP resources and protect your intellectual property effectively. Get started today!
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center px-6 py-3 bg-[#00ADB5] text-white font-medium rounded-full hover:bg-[#222831] transition-colors duration-300"
            >
              Contact Us
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

