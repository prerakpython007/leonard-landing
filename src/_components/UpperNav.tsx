import React from 'react';
import { Phone, Mail } from 'lucide-react';

const UpperNav: React.FC = () => {
  return (
    <div className="bg-[#00ADB5] text-white py-3 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
          {/* Left side - Contact Information */}
          <div className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-[#222831]" />
              <span className="text-sm text-[#EEEEEE]">+91 9930032215</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-[#222831]" />
              <span className="text-sm text-[#EEEEEE]">info@leonardsolutions.in</span>
            </div>
          </div>

         
   
      </div>
    </div>
  );
};

export default UpperNav;