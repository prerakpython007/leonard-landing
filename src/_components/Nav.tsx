'use client'; // Optional: Use this if you want to avoid SSR entirely

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import type { UrlObject } from 'url';
import { motion } from 'framer-motion';

interface DropdownItem {
  title: string;
  items: { label: string; href: string }[];
}

interface MobileDropdownProps {
  dropdown: DropdownItem[];
  onClose: () => void;
}

const MobileDropdownContent: React.FC<MobileDropdownProps> = ({ dropdown, onClose }) => (
  <div className="pl-6 pr-2 py-2 space-y-4">
    {dropdown.map((section, idx) => (
      <div key={idx} className="space-y-2">
        <h3 className="text-sm font-semibold text-gray-900 flex items-center gap-2 p-2">
          <span className="text-[#00ADB5] text-xs">✦</span>
          {section.title}
        </h3>
        <div className="pl-4 space-y-1">
          {section.items.map((subItem, subIdx) => (
            <Link
              key={subIdx}
              href={subItem.href}
              className="block p-2 text-gray-600 hover:text-[#00ADB5] text-sm rounded-lg hover:bg-white/50 transition-all"
              onClick={onClose}
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSecondaryNav, setShowSecondaryNav] = useState(false); // Default to false for both server and client
  const [mobileDropdowns, setMobileDropdowns] = useState<{ [key: string]: boolean }>({});
  const [isInteracting, setIsInteracting] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Read from localStorage only on the client after mount
  useEffect(() => {
    const saved = localStorage.getItem('showSecondaryNav');
    if (saved) {
      setShowSecondaryNav(JSON.parse(saved));
    }
  }, []); // Empty dependency array: runs once after mount

  // Update localStorage when showSecondaryNav changes
  useEffect(() => {
    localStorage.setItem('showSecondaryNav', JSON.stringify(showSecondaryNav));
  }, [showSecondaryNav]);

  useEffect(() => {
    if (isOpen || isInteracting) return; // Don't auto-switch if menu is open or user is interacting

    const timer = setInterval(() => {
      setShowSecondaryNav((prev: any) => !prev);
    }, 7000);

    return () => clearInterval(timer);
  }, [isOpen, isInteracting]);

  // Add scroll lock when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Add scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const primaryNavItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/service' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Contact Us', href: '/contact-us' },
    { label: 'Blogs', href: '/blogs' },
    { label: 'Pricing', href: '/price' }, // Fixed typo: removed space
  ];

  const trademarkDropdown: DropdownItem[] = [
    {
      title: "Trademark",
      items: [
        { label: "Trademark Registration", href: "/service/trademark/registration" },
        { label: "Trademark Renewal", href: "/service/trademark/renewal" },
        { label: "Trademark Objection", href: "/service/trademark/objection" },
        { label: "Trademark Opposition", href: "/service/trademark/opposition" },
        { label: "Trademark Assignment", href: "/service/trademark/assignment" },
        { label: "Logo Design", href: "/service/trademark/logo-design" },
        { label: "Series Trademark", href: "/service/trademark/series" },
      ]
    },
    {
      title: "Copyright",
      items: [
        { label: "Copyright Registration", href: "/service/copyright/registration" },
      ]
    }
  ];

  const patentDropdown: DropdownItem[] = [
    {
      title: "Patent Services",
      items: [
        { label: "Patent Registration", href: "/service/patent/registration" },
        { label: "Patent Search", href: "/service/patent/search" },
        { label: "Patent Drafting", href: "/service/patent/drafting" },
        { label: "Patent Opposition", href: "/service/patent/opposition" },
        { label: "Patent Licensing", href: "/service/patent/licensing" },
      ]
    },
    {
      title: "Additional Services",
      items: [
        { label: "International Patent", href: "/service/patent/international" },
        { label: "Patent Consultation", href: "/service/patent/consultation" },
      ]
    }
  ];

  const copyrightDropdown: DropdownItem[] = [
    {
      title: "Copyright Services",
      items: [
        { label: "Copyright Registration", href: "/service/copyright/registration" },
        { label: "Literary Works", href: "/service/copyright/literary" },
        { label: "Artistic Works", href: "/service/copyright/artistic" },
        { label: "Musical Works", href: "/service/copyright/musical" },
      ]
    },
    {
      title: "Other Services",
      items: [
        { label: "Copyright Assignment", href: "/service/copyright/assignment" },
        { label: "Copyright Notice", href: "/service/copyright/notice" },
      ]
    }
  ];

  const designDropdown: DropdownItem[] = [
    {
      title: "Design Registration",
      items: [
        { label: "Industrial Designs", href: "/service/design/industrial" },
        { label: "Fashion Designs", href: "/service/design/fashion" },
        { label: "Textile Designs", href: "/service/design/textile" },
        { label: "Surface Designs", href: "/service/design/surface" },
      ]
    },
    {
      title: "Design Services",
      items: [
        { label: "Design Search", href: "/service/design/search" },
        { label: "Design Renewal", href: "/service/design/renewal" },
      ]
    }
  ];

  const geographicalDropdown: DropdownItem[] = [
    {
      title: "GI Services",
      items: [
        { label: "GI Registration", href: "/service/geographical/registration" },
        { label: "GI Protection", href: "/service/geographical/protection" },
        { label: "GI Enforcement", href: "/service/geographical/enforcement" },
      ]
    },
    {
      title: "Additional Services",
      items: [
        { label: "GI Consultation", href: "/service/geographical/consultation" },
        { label: "International GI", href: "/service/geographical/international" },
      ]
    }
  ];

  const legalDropdown: DropdownItem[] = [
    {
      title: "Legal Services",
      items: [
        { label: "IP Litigation", href: "/service/legal/ip-litigation" },
        { label: "Legal Consultation", href: "/service/legal/consultation" },
        { label: "Contract Review", href: "/service/legal/contract-review" },
        { label: "Legal Documentation", href: "/service/legal/documentation" },
      ]
    },
    {
      title: "Other Services",
      items: [
        { label: "Due Diligence", href: "/service/legal/due-diligence" },
        { label: "Legal Notices", href: "/service/legal/notices" },
      ]
    }
  ];

  interface SecondaryNavItem {
    label: string;
    href: string;
    dropdown?: DropdownItem[];
  }
  
  const secondaryNavItems: SecondaryNavItem[] = [
      { 
        label: 'TradeMark', 
        href: '#',
        dropdown: trademarkDropdown 
      },
      { 
        label: 'Patent', 
        href: '#',
        dropdown: patentDropdown 
      },
      { 
        label: 'Copyright', 
        href: '#',
        dropdown: copyrightDropdown 
      },
      { 
        label: 'Design', 
        href: '#',
        dropdown: designDropdown 
      },
      { 
        label: 'Geographical Indications', 
        href: '#',
        dropdown: geographicalDropdown 
      },
      { 
        label: 'Legal Matters', 
        href: '#',
        dropdown: legalDropdown 
      },
    ];

  // Add dropdown position handler
  const getDropdownPosition = (label: string) => {
    if (label === 'Legal Matters' || label === 'Geographical Indications') {
      return 'right-0'
    }
    return 'left-0'
  };

  const toggleMobileDropdown = (label: string) => {
    setMobileDropdowns(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  return (
    <motion.nav 
      className={`sticky top-0 w-full transition-all duration-300 z-[100] ${
        scrolled ? 'bg-[#EEEEEE]/90 backdrop-blur-lg' : 'bg-[#EEEEEE]'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsInteracting(true)}
      onMouseLeave={() => setIsInteracting(false)}
    >
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex items-center h-full py-2">
            <Link href="/" className="h-20 md:h-30 w-auto flex items-center">
              <img
                src="/lion-logo.png"
                alt="Law Firm Logo"
                className="h-full w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation - All items on right */}
          <div className="hidden md:flex items-center h-full">
            <div className="relative h-full w-[600px] lg:w-[800px] xl:w-[1000px]">
              {/* Primary Navigation */}
              <div
                className={`absolute w-full h-full flex items-center justify-between transition-all duration-500 ease-in-out transform ${
                  showSecondaryNav
                    ? '-translate-y-full opacity-0'
                    : 'translate-y-0 opacity-100'
                }`}
              >
                {primaryNavItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-gray-800 hover:text-[#00ADB5] font-medium transition-all duration-200 text-sm lg:text-base uppercase tracking-wider relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#00ADB5] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full py-2"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Secondary Navigation */}
              <div
                className={`absolute w-full h-full flex items-center justify-between transition-all duration-500 ease-in-out transform ${
                  showSecondaryNav
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-full opacity-0'
                }`}
              >
                {secondaryNavItems.map((item) => (
                  <div key={item.label} className="relative group">
                    <div className="flex items-center gap-1">
                      <Link
                        href={item.href}
                        className="text-gray-800 whitespace-nowrap hover:text-[#00ADB5] font-medium transition-all duration-200 text-sm lg:text-base uppercase tracking-wider relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#00ADB5] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full py-2"
                      >
                        {item.label}
                      </Link>
                      {item.dropdown && (
                        <ChevronDown size={16} className="text-gray-600 transition-transform duration-300 group-hover:rotate-180" />
                      )}
                    </div>
                    
                    {item.dropdown && (
                      <div className={`absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 ${getDropdownPosition(item.label)} top-full pt-4 w-[300px] sm:w-[380px] md:w-[420px] lg:w-[480px] z-[9999]`}>
                        <div className="bg-white shadow-2xl rounded-lg p-3 sm:p-4 md:p-5 relative">
                          <div className="absolute top-4 right-4 text-gray-200 opacity-20 text-4xl hidden sm:block">✦</div>
                          <div className="absolute bottom-4 left-4 text-gray-200 opacity-20 text-4xl hidden sm:block">✦</div>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 relative z-10">
                            {Array.isArray(item.dropdown) && item.dropdown.map((column, idx) => (
                              <div key={idx}>
                                <h3 className="font-semibold text-gray-900 mb-2 sm:mb-4 uppercase text-xs sm:text-sm flex items-center gap-2">
                                  <span className="text-[#00ADB5]">✦</span>
                                  {column.title}
                                </h3>
                                <ul className="space-y-1.5 sm:space-y-2">
                                  {column.items.map((subItem, subIdx) => (
                                    <li key={subIdx}>
                                      <Link
                                        href={subItem.href}
                                        className="text-gray-600 hover:text-[#00ADB5] text-xs sm:text-sm transition-colors duration-200 flex items-center gap-2 group/item"
                                      >
                                        <span className="w-1 h-1 bg-gray-300 rounded-full group-hover/item:bg-[#00ADB5] transition-colors"></span>
                                        {subItem.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => setShowSecondaryNav(!showSecondaryNav)}
              className="p-2 ml-4 lg:ml-8 text-gray-700 hover:text-[#00ADB5] transition-all duration-500 h-12 flex items-center"
              aria-label={showSecondaryNav ? 'Show Main Menu' : 'Show Services Menu'}
            >
              <ChevronDown
                size={24}
                className={`transform transition-transform duration-500 ${
                  showSecondaryNav ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div 
          className={`md:hidden fixed inset-0 z-[9999] ${
            isOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-[300px] bg-[#EEEEEE] z-[10000] h-[100vh] overflow-y-auto"
            initial={{ x: "-100%" }}
            animate={{ x: isOpen ? 0 : "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 h-full flex flex-col">
              <div className="flex justify-between items-center mb-8">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-700 hover:text-[#00ADB5] transition-colors"
                >
                  <X size={24} />
                </button>
                <span className="text-[#00ADB5] text-2xl">✦</span>
              </div>

              <div className="flex justify-center mb-8">
                <button
                  onClick={() => setShowSecondaryNav(!showSecondaryNav)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md text-gray-700 hover:text-[#00ADB5] transition-colors"
                >
                  {showSecondaryNav ? 'Main Menu' : 'Services Menu'}
                  <ChevronDown
                    size={20}
                    className={`transform transition-transform duration-300 ${
                      showSecondaryNav ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto custom-scrollbar">
                <div className="space-y-1">
                  {(showSecondaryNav ? secondaryNavItems : primaryNavItems).map((item) => (
                    <div key={item.label} className="border-b border-gray-100/50 last:border-0">
                      {'dropdown' in item ? (
                        <div className="py-2">
                          <button
                            onClick={() => toggleMobileDropdown(item.label)}
                            className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-white/50 text-gray-800 hover:text-[#00ADB5] font-medium text-base transition-all"
                          >
                            <span className="flex items-center gap-2">
                              <span className="text-[#00ADB5] opacity-50 text-sm">✦</span>
                              {item.label}
                            </span>
                            <ChevronDown
                              size={18}
                              className={`transform transition-transform duration-300 ${
                                mobileDropdowns[item.label] ? 'rotate-180' : 'rotate-0'
                              }`}
                            />
                          </button>
                          
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ 
                              height: mobileDropdowns[item.label] ? "auto" : 0,
                              opacity: mobileDropdowns[item.label] ? 1 : 0
                            }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            {item.dropdown && (
                              <MobileDropdownContent 
                                dropdown={item.dropdown} 
                                onClose={() => {
                                  setIsOpen(false);
                                  setMobileDropdowns({});
                                }}
                              />
                            )}
                          </motion.div>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className="flex items-center gap-2 p-3 rounded-lg hover:bg-white/50 text-gray-800 hover:text-[#00ADB5] font-medium text-base transition-all"
                          onClick={() => setIsOpen(false)}
                        >
                          <span className="text-[#00ADB5] opacity-50 text-sm">✦</span>
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Nav;