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
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-6 z-[9999] overflow-y-auto">
      <div className="relative bg-[#EEEEEE] p-4 md:p-8 w-full max-w-[95%] md:max-w-[85%] lg:max-w-[1000px] rounded-lg shadow-2xl max-h-[90vh] overflow-y-auto">
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

        <span className="absolute top-4 left-4 text-[#00ADB5] text-4xl">✦</span>
        <span className="absolute top-4 right-4 text-[#393E46] text-4xl">✦</span>
        <span className="absolute bottom-4 left-4 text-[#393E46] text-4xl">✦</span>
        <span className="absolute bottom-4 right-4 text-[#00ADB5] text-4xl">✦</span>

        <div className="text-center mb-4 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-montserrat font-light tracking-wider uppercase relative inline-block">
            <span className="text-[#00ADB5] font-extrabold">
              Disclaimer & <span className='text-[#222831]'>Confirmation</span>
            </span>
          </h2>
        </div>

        <div className="text-[#393E46] font-bold space-y-4 sm:space-y-6 font-montserrat text-xs sm:text-sm md:text-base leading-relaxed">
          <p>
            As per the rules of the Bar Council of India, we are not permitted to solicit work and advertise through website except as permitted under the aforesaid rules. The information provided under this website is solely available for informational purposes only and should not be interpreted as soliciting or advertisement.
          </p>
          
          <p>By accessing the website, you hereby acknowledge the following:</p>
          
          <ul className="space-y-4 list-none pl-5">
            {listItems.map((item, index) => (
              <li key={index} className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#00ADB5]">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full h-[1px] bg-[#393E46] my-8 opacity-20"></div>

        <div className="flex flex-col sm:flex-row justify-end items-center gap-4 mt-6 sm:mt-8">
          <button
            onClick={handleDisagree}
            className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 border border-[#393E46]/20 text-[#393E46] font-montserrat text-sm tracking-wide hover:bg-[#EEEEEE]/10 transition-colors"
          >
            I Disagree
          </button>
          <button
            onClick={handleAgree}
            className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-[#00ADB5] text-white font-montserrat text-sm tracking-wide hover:bg-[#00ADB5]/90 transition-colors"
          >
            I Agree
          </button>
        </div>
      </div>
    </div>
  ) : null;
}
