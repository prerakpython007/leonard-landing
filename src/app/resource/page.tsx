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
    <div className="min-h-screen bg-[#EEEEEE] relative rounded-b-[50px] sm:rounded-b-[100px] md:rounded-b-[170px] font-montserrat overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12">
      {/* Grid Pattern Overlay */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.015) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.015) 1px, transparent 1px)
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
      <motion.section className="relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[80vh] flex items-center justify-center">
        {/* Corner Angles - Desktop only */}
        <div className="absolute top-8 left-8 hidden h-12 w-12 border-t-2 border-l-2 border-[#00ADB5] lg:block" />
        <div className="absolute top-8 right-8 hidden h-12 w-12 border-t-2 border-r-2 border-[#00ADB5] lg:block" />
        <div className="absolute bottom-8 left-8 hidden h-12 w-12 border-b-2 border-l-2 border-[#00ADB5] lg:block" />
        <div className="absolute bottom-8 right-8 hidden h-12 w-12 border-b-2 border-r-2 border-[#00ADB5] lg:block" />

        <motion.div className="max-w-7xl mx-auto text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-extrabold text-[#222831] relative inline-block tracking-tight">
            Government IP Resources
            <span className="absolute top-1/2 -left-6 sm:-left-8 md:-left-12 lg:-left-16 -translate-y-1/2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#00ADB5] opacity-50 animate-pulse">✦</span>
            <span className="absolute top-1/2 -right-6 sm:-right-8 md:-right-12 lg:-right-16 -translate-y-1/2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#00ADB5] opacity-50 animate-pulse">✦</span>
          </h1>
          <p className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Access official government resources for trademarks, copyrights, patents, and more in India
          </p>
        </motion.div>
      </motion.section>

      {/* Content Sections */}
      <section className="py-12 sm:py-16 md:py-24 space-y-12 sm:space-y-16 md:space-y-24">
        <div className="max-w-7xl mx-auto">
          {/* Introduction Section */}
          <motion.div className="mb-16 sm:mb-24 md:mb-32">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-[#222831] mb-4">Your Gateway to IP Protection</h2>
            </motion.div>
            
            <motion.div
              className="relative max-w-3xl mx-auto p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Corner Angles */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-[#00ADB5]" />
              <div className="absolute -top-4 -right-4 w-8 h-8 border-r-2 border-t-2 border-[#00ADB5]" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border-l-2 border-b-2 border-[#00ADB5]" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-[#00ADB5]" />

              <p className="text-[#393E46]/80 text-lg text-center leading-relaxed">
                Navigate India's intellectual property landscape with ease. Our curated list of official government resources helps you register, protect, and manage trademarks, copyrights, patents, and other IP assets efficiently.
              </p>
            </motion.div>
          </motion.div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {resourceInfo.map((info: ResourceInfo, index: number) => (
              <motion.div
                key={info.id}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-white/95 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-20 h-20 bg-[#00ADB5]/5 rounded-br-[100px]" />
                <div className="absolute top-4 left-4 w-2 h-2 bg-[#00ADB5] rounded-full" />
                
                <div className="p-8 relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#00ADB5]/10 flex items-center justify-center">
                      <span className="text-[#00ADB5]">{categoryIcons[info.category]}</span>
                    </div>
                    <span className="px-3 py-1 text-xs font-medium bg-[#00ADB5]/10 text-[#00ADB5] rounded-full">
                      {info.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#222831] mb-4">{info.title}</h3>
                  <p className="text-[#393E46]/80 mb-6 text-sm">{info.description}</p>
                  
                  <button
                    onClick={() => handleExploreClick(info)}
                    className="w-full bg-[#222831] text-white py-3.5 rounded-xl hover:bg-[#00ADB5] transition-colors duration-300 flex items-center justify-center gap-2 group relative overflow-hidden"
                  >
                    <span className="relative z-10">Explore Resources</span>
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1 relative z-10"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <motion.div className="mt-16 sm:mt-24 md:mt-32">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-[#222831] mb-4">Contact Government Authorities</h2>
            </motion.div>

            <motion.div
              className="relative max-w-3xl mx-auto p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Corner Angles */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-[#00ADB5]" />
              <div className="absolute -top-4 -right-4 w-8 h-8 border-r-2 border-t-2 border-[#00ADB5]" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border-l-2 border-b-2 border-[#00ADB5]" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-[#00ADB5]" />

              <h3 className="text-xl font-bold text-[#222831] mb-6">Office of CGPDTM</h3>
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
          </motion.div>

          {/* Call to Action */}
          <motion.div className="mt-16 sm:mt-24 md:mt-32">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-[#222831] mb-4">Need Expert IP Guidance?</h2>
            </motion.div>
            
            <motion.div
              className="relative max-w-3xl mx-auto p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Corner Angles */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-[#00ADB5]" />
              <div className="absolute -top-4 -right-4 w-8 h-8 border-r-2 border-t-2 border-[#00ADB5]" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border-l-2 border-b-2 border-[#00ADB5]" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-[#00ADB5]" />

              <div className="text-center space-y-6">
                <p className="text-lg text-[#393E46]/80">
                  Our team can help you navigate government IP resources and protect your intellectual property effectively. Let's secure your innovations together!
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <Link
                    href="/price"
                    className="inline-flex items-center px-8 py-3 bg-[#222831] text-white font-medium rounded-xl hover:bg-[#00ADB5] transition-all duration-300 group"
                  >
                    Get Started Today
                    <svg
                      className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <span className="text-[#393E46]/60">or</span>
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center px-8 py-3 border-2 border-[#222831] text-[#222831] font-medium rounded-xl hover:bg-[#222831] hover:text-white transition-all duration-300"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}