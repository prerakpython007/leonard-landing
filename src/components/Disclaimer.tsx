'use client';
import { useState, useEffect } from 'react';

const listItems = [
  'That you have requested for the access to the website to gain more information about us for your information and use;',
  'There has been no advertisement, personal communication, solicitation, invitation or inducement of any sort whatsoever from us or any of our members to solicit any work through this website;',
  'The information about us is provided to the user only on request and any information obtained or materials downloaded from this website and any transmission, receipt or use of this site would not create any lawyer-client relationship;',
  'No liability can arise for any action taken by the user relying on the material/ information provided under this website;',
  'In cases where the user has any legal issues, he/she in all cases must seek independent legal advice;',
  'You hereby agree to the Privacy Policy of the firm.'
];

export default function Disclaimer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after a small delay to ensure smooth loading
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleAgree = () => setIsVisible(false);
  const handleDisagree = () => window.location.href = 'https://www.google.com';

  return isVisible ? (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 md:p-6 z-[9999] overflow-y-auto">
      <div className="relative bg-[#EEEEEE] p-4 md:p-6 lg:p-8 w-full max-w-[98%] md:max-w-[85%] lg:max-w-[1000px] rounded-lg shadow-2xl my-auto">
        {/* Pattern Background */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <div className="absolute inset-0" style={{ 
            backgroundImage: `
              radial-gradient(#393E46 1px, transparent 1px),
              radial-gradient(#393E46 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 10px 10px',
          }} />
        </div>

        {/* Corner Decorations */}
        <span className="absolute top-2 left-2 md:top-4 md:left-4 text-[#00ADB5] text-2xl md:text-4xl">✦</span>
        <span className="absolute top-2 right-2 md:top-4 md:right-4 text-[#393E46] text-2xl md:text-4xl">✦</span>
        <span className="absolute bottom-2 left-2 md:bottom-4 md:left-4 text-[#393E46] text-2xl md:text-4xl">✦</span>
        <span className="absolute bottom-2 right-2 md:bottom-4 md:right-4 text-[#00ADB5] text-2xl md:text-4xl">✦</span>

        {/* Title */}
        <div className="text-center mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-montserrat font-light tracking-wider uppercase relative inline-block">
            <span className="text-[#00ADB5] font-extrabold">
              Disclaimer & <span className='text-[#222831]'>Confirmation</span>
            </span>
          </h2>
        </div>

        {/* Content */}
        <div className="text-[#393E46] font-bold space-y-3 sm:space-y-4 md:space-y-6 font-montserrat text-xs sm:text-sm md:text-base leading-relaxed max-h-[60vh] md:max-h-[50vh] overflow-y-auto px-2">
          <p className="text-sm md:text-base">
            As per the rules of the Bar Council of India, we are not permitted to solicit work and advertise through website except as permitted under the aforesaid rules. The information provided under this website is solely available for informational purposes only and should not be interpreted as soliciting or advertisement.
          </p>
          
          <p className="text-sm md:text-base pt-2">By accessing the website, you hereby acknowledge the following:</p>
          
          <ul className="space-y-3 md:space-y-4 list-none pl-4 md:pl-5">
            {listItems.map((item, index) => (
              <li key={index} className="relative pl-4 md:pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#00ADB5] text-sm md:text-base">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full h-[1px] bg-[#393E46] my-4 md:my-6 opacity-20"></div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-end items-stretch sm:items-center gap-3 md:gap-4 mt-4 sm:mt-6">
          <button
            onClick={handleDisagree}
            className="w-full sm:w-auto px-4 md:px-6 py-2 md:py-3 border border-[#393E46]/20 text-[#393E46] font-montserrat text-sm tracking-wide hover:bg-[#EEEEEE]/10 transition-colors rounded"
          >
            I Disagree
          </button>
          <button
            onClick={handleAgree}
            className="w-full sm:w-auto px-4 md:px-6 py-2 md:py-3 bg-[#00ADB5] text-white font-montserrat text-sm tracking-wide hover:bg-[#00ADB5]/90 transition-colors rounded"
          >
            I Agree
          </button>
        </div>
      </div>
    </div>
  ) : null;
}
