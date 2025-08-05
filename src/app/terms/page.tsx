"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Back Button */}
      <div className="pt-8 px-4 md:px-8 lg:px-16">
        <button
          onClick={() => window.history.back()}
          className="inline-flex items-center gap-2 text-[#01adb4] hover:text-gray-800 transition-colors group"
        >
          <ArrowLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Home
        </button>
      </div>

      {/* Title Section */}
      <div className="py-16 px-4">
        <motion.h1
          className="text-gray-800 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-center mb-12 md:mb-20 relative z-10 px-4"
          style={{
            letterSpacing: "0.2em",
            textShadow:
              "-2px 0px 0px rgba(100, 100, 100, 0.8), -6px 2px 0px rgba(80, 80, 80, 0.6)",
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          TERMS OF SERVICE
        </motion.h1>
      </div>

      {/* Content Section */}
      <div className="px-4 md:px-8 lg:px-16 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Left Content Container */}
            <div
              className="w-full lg:w-3/5 bg-white p-8 md:p-12 shadow-2xl lg:z-10 lg:ml-auto lg:-mr-40 min-h-[300px]"
            >
              <h3 className="text-2xl font-bold text-[#01adb4] mb-4">
                Acceptance of Terms
              </h3>
              <div className="text-gray-800 leading-relaxed">
                <p>
                  By accessing and using the services of Leonard Corporate
                  Solutions Pvt. Ltd., you agree to be bound by these Terms of
                  Service and our Privacy Policy. If you do not agree to these
                  terms, please do not use our services.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-full lg:order-last">
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
                alt="Legal Terms Document"
                className="w-full h-96 lg:h-[450px] object-cover shadow-lg"
              />
            </div>
          </div>

          {/* Legal Services Section */}
          <div className="mt-12 lg:mt-24">
            <div className="flex flex-col lg:flex-row items-stretch gap-4 lg:gap-8">
              {/* Left Services Container */}
              <div
                className="w-full lg:w-1/5 bg-white p-4 md:p-6 shadow-2xl lg:z-10 min-h-[350px] flex flex-col justify-center"
              >
                <h3 className="text-xl font-bold text-[#01adb4] mb-4">
                  Legal Services
                </h3>
                <p className="text-gray-800 mb-4 leading-relaxed text-sm">
                  Our services include:
                </p>
                <ul className="space-y-3 text-gray-800 text-sm">
                  <li className="flex items-start">
                    <span className="text-[#01adb4] mr-2 mt-1">•</span>
                    <span>Intellectual Property Law</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#01adb4] mr-2 mt-1">•</span>
                    <span>Corporate Law Services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#01adb4] mr-2 mt-1">•</span>
                    <span>Taxation Advisory</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#01adb4] mr-2 mt-1">•</span>
                    <span>Legal Consultation</span>
                  </li>
                </ul>
              </div>

              {/* Right Container */}
              <div className="w-full lg:w-4/5">
                <div className="relative min-h-[350px] bg-gradient-to-br from-gray-800 to-gray-700 p-8 md:p-12 shadow-2xl flex items-center justify-center overflow-hidden">
                  {/* Legal Background Image with Dark Opacity */}
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-15"
                    style={{
                      backgroundImage:
                        'url("https://images.unsplash.com/photo-1436450412740-6b988f486c6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")',
                    }}
                  />

                  {/* Content Overlay */}
                  <div className="text-left text-gray-100 relative z-10 max-w-4xl">
                    <h4 className="text-3xl font-bold text-[#01adb4] mb-6">
                      Professional Legal Standards & Client Obligations
                    </h4>

                    <div className="space-y-4 text-base leading-relaxed">
                      <p className="text-lg opacity-95">
                        Leonard Corporate Solutions Pvt. Ltd. operates under the
                        highest professional standards as regulated by the Bar
                        Council of India. Our attorney-client relationships are
                        governed by strict ethical guidelines and legal
                        obligations.
                      </p>

                      <p className="opacity-90">
                        We provide comprehensive legal services across intellectual
                        property, corporate law, and taxation domains. Our fee
                        structure is transparent and based on the complexity of
                        legal matters, ensuring fair and professional billing
                        practices for all our clients.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Comprehensive Terms Statement */}
          <div className="mt-12 lg:mt-24">
            <div className="bg-white rounded-lg p-8 md:p-12 border border-gray-200">
              <div className="max-w-4xl mx-auto text-gray-800 leading-relaxed text-lg">
                <p className="mb-8">
                  <strong className="text-[#01adb4]">
                    Leonard Corporate Solutions Pvt. Ltd.
                  </strong>{" "}
                  operates as a{" "}
                  <strong>professional legal practice</strong> governed by the laws
                  of India and regulations of the Bar Council of India. Our{" "}
                  <strong>terms of engagement</strong> ensure mutual understanding
                  between our firm and clients regarding service delivery,
                  professional obligations, and legal responsibilities. We
                  maintain <strong>strict confidentiality</strong> through
                  attorney-client privilege and provide services with the utmost
                  professional diligence. Our <strong>fee structure</strong> is
                  transparent and communicated upfront, with payment terms
                  clearly specified in engagement letters.{" "}
                  <strong>Liability limitations</strong> are applied as per
                  professional standards while maintaining comprehensive
                  professional indemnity insurance. All{" "}
                  <strong>disputes are resolved</strong> through established legal
                  mechanisms including good faith negotiations, mediation, and
                  arbitration under Indian law. The{" "}
                  <strong>attorney-client relationship</strong> may be terminated
                  by either party with appropriate notice, with all confidentiality
                  obligations remaining in effect. For any questions regarding
                  these terms, please contact us at{" "}
                  <strong className="text-[#01adb4]">
                    info@leonardsolutions.in
                  </strong>{" "}
                  or{" "}
                  <strong className="text-[#01adb4]">+91 123 456 7890</strong>.
                  These Terms of Service are effective from{" "}
                  <strong>January 1, 2025</strong> and are governed by the laws of
                  India.
                </p>

                <p className="text-gray-700 mb-6">
                  For questions regarding these Terms of Service, please contact
                  us at:
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-[#01adb4]/10 rounded-lg flex items-center justify-center mr-4">
                      <svg
                        className="w-4 h-4 text-[#01adb4]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[#01adb4] font-semibold">
                        Leonard Corporate Solutions Pvt. Ltd.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-[#01adb4]/10 rounded-lg flex items-center justify-center mr-4">
                      <svg
                        className="w-4 h-4 text-[#01adb4]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-700">info@leonardsolutions.in</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-[#01adb4]/10 rounded-lg flex items-center justify-center mr-4">
                      <svg
                        className="w-4 h-4 text-[#01adb4]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-700">+91 123 456 7890</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-[#01adb4]/10 rounded-lg flex items-center justify-center mr-4">
                      <svg
                        className="w-4 h-4 text-[#01adb4]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-700">Mumbai, Maharashtra, India</p>
                    </div>
                  </div>
                </div>

                {/* Legal Compliance Card */}
                <div className="bg-white p-8 md:p-10 shadow-2xl border border-gray-200">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-[#01adb4] rounded-full flex items-center justify-center mr-4">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-[#01adb4]">
                      Legal Compliance
                    </h2>
                  </div>

                  <p className="text-gray-800 leading-relaxed mb-8">
                    These Terms of Service are governed by the laws of India and
                    comply with Bar Council of India regulations. Any disputes
                    will be subject to the exclusive jurisdiction of Mumbai courts.
                  </p>

                  <div className="bg-[#01adb4]/5 rounded-xl p-6 border-l-4 border-[#01adb4]">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-800">
                          Effective Date:
                        </span>
                        <span className="text-[#01adb4] font-bold">
                          January 1, 2025
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-800">
                          Last Updated:
                        </span>
                        <span className="text-[#01adb4] font-bold">
                          January 1, 2025
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-800">
                          Governed by:
                        </span>
                        <span className="text-[#01adb4] font-bold">Laws of India</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
