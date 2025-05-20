'use client';

import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";

// Define the interface for resource information
interface ResourceInfo {
  id: number;
  title: string;
  description: string;
  category: string;
  link: string;
  detailedLinks: { purpose: string; link: string }[];
}

// Define the detailed links for each resource category
const resourceInfo: ResourceInfo[] = [
  {
    id: 1,
    title: "Trademark Services",
    description: "Register, search, and manage trademarks through Intellectual Property India’s official portal.",
    category: "Trademark",
    link: "https://ipindia.gov.in/trade-marks.htm",
    detailedLinks: [
      { purpose: "Trademark Public Search", link: "https://ipindiaonline.gov.in/tmrpublicsearch/frmrpublicsearch.aspx" },
      { purpose: "Trademark Status Check (TMR Application Status)", link: "https://ipindiaonline.gov.in/eregister/eregister.aspx" },
      { purpose: "Trademark Class Finder (Nice Classification)", link: "https://ipindia.gov.in/tmr_classification.htm" },
      { purpose: "Trademark E-Filing Portal", link: "https://ipindiaonline.gov.in/trademarkefiling/user/frmLoginNew.aspx" },
      { purpose: "TM Journal", link: "https://ipindia.gov.in/journal-tm.htm" },
    ],
  },
  {
    id: 2,
    title: "Copyright Services",
    description: "Protect your creative works by registering with the Copyright Office India.",
    category: "Copyright",
    link: "https://copyright.gov.in/",
    detailedLinks: [
      { purpose: "Official Copyright Website", link: "https://copyright.gov.in" },
      { purpose: "Online Registration", link: "https://copyright.gov.in/UserRegistration/frmLoginPage.aspx" },
      { purpose: "Status of Copyright Application", link: "https://copyright.gov.in/Status/Status.aspx" },
      { purpose: "Copyright Rules & FAQs", link: "https://copyright.gov.in/frmFAQs.aspx" },
      { purpose: "Literary Work Registration Guide", link: "https://copyright.gov.in/Documents/LiteraryWork.pdf" },
    ],
  },
  {
    id: 3,
    title: "Patent Services",
    description: "File and search patents using Intellectual Property India’s e-filing and search tools.",
    category: "Patent",
    link: "https://ipindia.gov.in/patents.htm",
    detailedLinks: [
      { purpose: "Patent Search (InPASS 2.0)", link: "https://ipindiaservices.gov.in/publicsearch" },
      { purpose: "Patent E-Filing Portal", link: "https://ipindiaonline.gov.in/epatentfiling/" },
      { purpose: "Status of Patent Applications", link: "https://ipindiaonline.gov.in/eregister/eregister.aspx" },
      { purpose: "Patent Agent Examination Info", link: "https://ipindia.gov.in/writereaddata/Portal/IPExam/examinations" },
      { purpose: "Patent Office Manual & Guidelines", link: "https://ipindia.gov.in/ipr-policy.htm" },
    ],
  },
  {
    id: 4,
    title: "Geographical Indications",
    description: "Protect regional products with the Geographical Indications Registry.",
    category: "GI",
    link: "https://ipindia.gov.in/gi.htm",
    detailedLinks: [
      { purpose: "GI Registry India", link: "https://ipindia.gov.in/gi.htm" },
      { purpose: "GI Application Status", link: "https://search.ipindia.gov.in/GIRPublic/ApplicationStatus" },
      { purpose: "GI Application Forms", link: "https://ipindia.gov.in/forms-gi.htm" },
      { purpose: "GI Products List", link: "https://ipindia.gov.in/writereaddata/Portal/Images/pdf/GI_Products_List.pdf" },
      { purpose: "GI FAQs", link: "https://ipindia.gov.in/faq-gi.htm" },
    ],
  },
  {
    id: 5,
    title: "Design Services",
    description: "Register industrial designs via Intellectual Property India’s design wing.",
    category: "Design",
    link: "https://ipindia.gov.in/designs.htm",
    detailedLinks: [
      { purpose: "Design E-Filing", link: "https://ipindiaonline.gov.in/designefiling/" },
      { purpose: "Design Search Database", link: "https://search.ipindia.gov.in/DesignApplicationSearch/" },
      { purpose: "Design Classification (Locarno)", link: "https://ipindia.gov.in/design-classification.htm" },
      { purpose: "Design Journal", link: "https://ipindia.gov.in/utility-models-designs-journal.htm" },
      { purpose: "Design Manual", link: "https://ipindia.gov.in/writereaddata/Portal/Images/pdf/ManualDesigns_06March2019.pdf" },
    ],
  },
  {
    id: 6,
    title: "Startup India IP Support",
    description: "Access IP facilitation for startups, including fee concessions and guidance.",
    category: "Startup",
    link: "https://www.startupindia.gov.in/content/sih/en/startupgov/startup_india_ipr.html",
    detailedLinks: [
      { purpose: "WIPO", link: "https://www.wipo.int" },
      { purpose: "PCT Filing Portal (India)", link: "https://www.ipindia.gov.in/pct.htm" },
      { purpose: "Madrid Protocol (India Guide)", link: "https://ipindia.gov.in/wipo.htm" },
    ],
  },
];

export default function GovernmentResourcesPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedResource, setSelectedResource] = useState<ResourceInfo | null>(null);

  const handleExploreClick = (resource: ResourceInfo) => {
    setSelectedResource(resource);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedResource(null);
  };

  // Icons for categories
  const categoryIcons: { [key: string]: string } = {
    Trademark: "🏷️",
    Copyright: "📄",
    Patent: "🧠",
    GI: "🗺️",
    Design: "🌐",
    Startup: "🌍",
  };

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

      {/* Popup */}
      {showPopup && selectedResource && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-[1000] p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={closePopup}
        >
          <motion.div
            className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6 relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-[#393E46] hover:text-[#00ADB5]"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold text-[#222831] mb-4 flex items-center gap-2">
              <span>{categoryIcons[selectedResource.category]}</span>
              {selectedResource.category} Resources
            </h2>
            <div className="space-y-4">
              {selectedResource.detailedLinks.map((linkItem, index) => (
                <div key={index} className="border-b border-gray-100 pb-2">
                  <p className="text-[#393E46] font-medium">{linkItem.purpose}</p>
                  <Link
                    href={linkItem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00ADB5] hover:text-[#222831] text-sm break-all"
                  >
                    {linkItem.link}
                  </Link>
                </div>
              ))}
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
                    <button
                      onClick={() => handleExploreClick(info)}
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
                    </button>
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