"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft } from "lucide-react";
import { useInView } from "framer-motion";

// Add counting animation hook
const useCountAnimation = (target: number, duration: number = 2000) => {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
      let startTime: number
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        // Easing function for smooth animation
        const easeOut = 1 - Math.pow(1 - progress, 3)
        setCount(Math.floor(easeOut * target))
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [isInView, hasAnimated, target, duration])

  return { count, ref }
}

export default function PrivacyPolicy() {
  // Add count animations
  const { count: clientsCount, ref: clientsRef } = useCountAnimation(500, 2500)
  const { count: yearsCount, ref: yearsRef } = useCountAnimation(18, 2000)

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Back Button */}
      <div className="pt-8 px-4 md:px-8 lg:px-16">
        <button 
          onClick={() => window.history.back()}
          className="inline-flex items-center gap-2 text-[#01adb4] hover:text-gray-800 transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>
      </div>

      {/* Title Section */}
      <div className="py-16 px-4">
        <h2
          className="text-gray-800 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-center mb-12 md:mb-20 relative z-10 px-4"
          style={{
            letterSpacing: "0.2em",
            textShadow: "-2px 0px 0px rgba(100, 100, 100, 0.8), -6px 2px 0px rgba(80, 80, 80, 0.6)"
          }}
        >
          PRIVACY POLICY
        </h2>
      </div>

      {/* Content Section */}
      <div className="px-4 md:px-8 lg:px-16 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Left Content Container */}
            <div 
              className="w-full lg:w-3/5 bg-white p-8 md:p-12 shadow-2xl lg:z-10 lg:ml-auto lg:-mr-40 min-h-[300px]"
            >
              <h3 className="text-2xl font-bold text-[#01adb4] mb-4">Information We Collect</h3>
              <div className="text-gray-800 leading-relaxed">
                <p>
                  Leonard Corporate Solutions Pvt. Ltd. collects information you provide directly to us, such as when you contact us for legal services, subscribe to our newsletter, or communicate with us through our website.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-full lg:order-last">
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
                alt="Privacy Policy Document"
                className="w-full h-96 lg:h-[450px] object-cover shadow-lg"
              />
            </div>
          </div>

          {/* Your Rights Section */}
          <div className="mt-12 lg:mt-24">
            <div className="flex flex-col lg:flex-row items-stretch gap-4 lg:gap-8">
              {/* Left Rights Container */}
              <div 
                className="w-full lg:w-1/5 bg-white p-4 md:p-6 shadow-2xl lg:z-10 min-h-[350px] flex flex-col justify-center"
              >
                <h3 className="text-xl font-bold text-[#01adb4] mb-4">Your Rights</h3>
                <p className="text-gray-800 mb-4 leading-relaxed text-sm">You have the right to:</p>
                <ul className="space-y-3 text-gray-800 text-sm">
                  <li className="flex items-start">
                    <span className="text-[#01adb4] mr-2 mt-1">•</span>
                    <span>Access and update your personal information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#01adb4] mr-2 mt-1">•</span>
                    <span>Request deletion of your personal data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#01adb4] mr-2 mt-1">•</span>
                    <span>Opt-out of marketing communications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#01adb4] mr-2 mt-1">•</span>
                    <span>Request a copy of the information we hold about you</span>
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
                      backgroundImage: 'url("https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")'
                    }}
                  />
                  
                  {/* Content Overlay */}
                  <div className="text-left text-gray-100 relative z-10 max-w-4xl">
                    <h4 className="text-3xl font-bold text-[#01adb4] mb-6">Comprehensive Data Protection & Legal Compliance</h4>
                    
                    <div className="space-y-4 text-base leading-relaxed">
                      <p className="text-lg opacity-95">
                        At Leonard Corporate Solutions Pvt. Ltd., we understand that your privacy is not just a preference—it's a fundamental right. Our commitment to data protection goes beyond mere compliance; it's embedded in our core values and operational practices.
                      </p>
                      
                      <p className="opacity-90">
                        We implement a multi-layered security framework that includes advanced encryption protocols, secure data transmission channels, and restricted access controls. Our legal team continuously monitors evolving privacy regulations, including the Personal Data Protection Act and international standards, to ensure our practices exceed industry requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Comprehensive Privacy Statement */}
          <div className="mt-12 lg:mt-24">
            <div className="bg-white rounded-lg p-8 md:p-12  border border-gray-200">
              <div className="max-w-4xl mx-auto text-gray-800 leading-relaxed text-lg">
                {/* Add animated stats before the main content */}
                

                <p className="mb-8">
                  At <strong className="text-[#01adb4]">Leonard Corporate Solutions Pvt. Ltd.</strong>, we maintain the <strong>highest standards of confidentiality</strong> and data protection in accordance with Indian privacy laws and international best practices. Our commitment extends beyond legal compliance to encompass <strong>ethical responsibility</strong> towards our clients' sensitive information. We employ <strong>advanced security measures</strong> including end-to-end encryption, secure data transmission protocols, and restricted access controls to safeguard all client communications and documentation. As your <strong>trusted legal partners</strong>, we are bound by attorney-client privilege, ensuring that all information shared with us remains strictly confidential. Our <strong>comprehensive privacy framework</strong> includes regular security audits, staff training on data protection protocols, and continuous monitoring of emerging privacy regulations. We believe that <strong>transparency and trust</strong> are fundamental to our client relationships, which is why we maintain clear policies regarding data collection, usage, and retention. For any questions regarding our privacy practices or to exercise your data rights, please contact us at <strong className="text-[#01adb4]">info@leonardsolutions.in</strong> or <strong className="text-[#01adb4]">+91 123 456 7890</strong>. This Privacy Policy is effective from <strong>January 1, 2025</strong> and will be updated as necessary to reflect changes in our practices or applicable laws.
                </p>
                
                <p className="text-gray-700 mb-6">
                  If you have any questions about this Privacy Policy or our data practices, please contact us at:
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-[#01adb4]/10 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-4 h-4 text-[#01adb4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[#01adb4] font-semibold">Leonard Corporate Solutions Pvt. Ltd.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-[#01adb4]/10 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-4 h-4 text-[#01adb4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <a 
                        href="mailto:info@leonardsolutions.in"
                        className="text-gray-700 hover:text-[#01adb4] transition-colors cursor-pointer"
                      >
                        info@leonardsolutions.in
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-[#01adb4]/10 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-4 h-4 text-[#01adb4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-700">+91 123 456 7890</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-[#01adb4]/10 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-4 h-4 text-[#01adb4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-700">Mumbai, Maharashtra, India</p>
                    </div>
                  </div>
                </div>

                {/* Updates Policy Card */}
                <div className="bg-white  p-8 md:p-10 shadow-2xl border border-gray-200">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-[#01adb4] rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-[#01adb4]">Updates to This Policy</h2>
                  </div>
                  
                  <p className="text-gray-800 leading-relaxed mb-8">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page with an updated effective date.
                  </p>
                  
                  <div className="bg-[#01adb4]/5 rounded-xl p-6 border-l-4 border-[#01adb4]">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-800">Effective Date:</span>
                        <span className="text-[#01adb4] font-bold">January 1, 2025</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-800">Last Updated:</span>
                        <span className="text-[#01adb4] font-bold">January 1, 2025</span>
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