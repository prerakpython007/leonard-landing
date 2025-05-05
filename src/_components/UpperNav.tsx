import React from 'react';
import { Phone, Mail } from 'lucide-react';

const UpperNav: React.FC = () => {
  return (
    <div className="bg-[#00ADB5] text-white py-3 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
          {/* Left side - Contact Information */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-[#222831]" />
              <span className="text-sm text-[#EEEEEE]">+91 9930032215</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-[#222831]" />
              <span className="text-sm text-[#EEEEEE]">info@leonardsolutions.in</span>
            </div>
          </div>

          {/* Right side - Authentication */}
          <div className="flex items-center gap-4">
            <button className="text-sm hover:text-[#222831] transition-colors">
              Already Registered?
            </button>
            <button className="bg-[#EEEEEE] hover:bg-[#393E46] px-4 py-1.5 text-black hover:text-[#EEEEEE] text-sm rounded-md transition-colors duration-200">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpperNav;