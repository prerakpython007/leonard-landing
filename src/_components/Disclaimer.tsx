'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Disclaimer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAgreed = localStorage.getItem('disclaimerAgreed');
    if (!hasAgreed) {
      setIsVisible(true);
    }
  }, []);

  const handleAgree = () => {
    localStorage.setItem('disclaimerAgreed', 'true');
    setIsVisible(false);
  };

  const handleDisagree = () => window.location.href = 'https://www.google.com';

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm grid place-items-center p-2 sm:p-5 z-[9999]"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-[#EEEEEE] p-4 sm:p-8 md:p-12 w-[98%] sm:w-[95%] md:w-[90%] lg:w-[1100px] max-w-[1100px] shadow-2xl overflow-y-auto max-h-[90vh]"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
              <div className="absolute inset-0" style={{ 
                backgroundImage: `
                  radial-gradient(#393E46 1px, transparent 1px),
                  radial-gradient(#393E46 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0, 10px 10px',
              }} />
              <svg className="absolute bottom-0 right-0 w-96 h-96" viewBox="0 0 100 100">
                <path
                  d="M0,50 Q25,25 50,50 T100,50"
                  fill="none"
                  stroke="#00ADB5"
                  strokeWidth="0.5"
                  strokeDasharray="2,2"
                />
              </svg>
            </div>

            {/* Corner Stars */}
            <span className="absolute top-4 left-4 text-[#00ADB5] text-4xl">✦</span>
            <span className="absolute top-4 right-4 text-[#393E46] text-4xl">✦</span>
            <span className="absolute bottom-4 left-4 text-[#393E46] text-4xl">✦</span>
            <span className="absolute bottom-4 right-4 text-[#00ADB5] text-4xl">✦</span>

            {/* Title with gradient */}
            <div className="text-center mb-4 sm:mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-montserrat font-light tracking-wider uppercase relative inline-block">
                <span className="text-[#00ADB5] font-extrabold">
                  Disclaimer & <span className='text-[#222831]'>Confirmation</span>
                </span>
              </h2>
            </div>

            {/* Content */}
            <div className="text-[#393E46] font-bold space-y-4 sm:space-y-6 font-montserrat text-xs sm:text-sm md:text-base leading-relaxed">
              <p>
                As per the rules of the Bar Council of India, we are not permitted to solicit work and advertise through website except as permitted under the aforesaid rules. The information provided under this website is solely available for informational purposes only and should not be interpreted as soliciting or advertisement.
              </p>
              
              <p>By accessing the website, you hereby acknowledge the following:</p>
              
              <ul className="space-y-4 list-none pl-5">
                {[
                  'That you have requested for the access to the website to gain more information about us for your information and use;',
                  'There has been no advertisement, personal communication, solicitation, invitation or inducement of any sort whatsoever from us or any of our members to solicit any work through this website;',
                  'The information about us is provided to the user only on request and any information obtained or materials downloaded from this website and any transmission, receipt or use of this site would not create any lawyer-client relationship;',
                  'No liability can arise for any action taken by the user relying on the material/ information provided under this website;',
                  'In cases where the user has any legal issues, he/she in all cases must seek independent legal advice;',
                  'You hereby agree to the Privacy Policy of the firm.'
                ].map((item, index) => (
                  <li key={index} className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#00ADB5]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Divider line */}
            <div className="w-full h-[1px] bg-[#393E46] my-8 opacity-20"></div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-end items-center gap-4 mt-6 sm:mt-8">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleDisagree}
                className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 border border-[#393E46]/20 text-[#393E46] font-montserrat text-sm tracking-wide hover:bg-[#EEEEEE]/10 transition-colors"
              >
                I Disagree
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAgree}
                className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-[#00ADB5] text-white font-montserrat text-sm tracking-wide hover:bg-[#00ADB5]/90 transition-colors"
              >
                I Agree
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Disclaimer;
