'use client';

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
              data-testid={`mobile-dropdown-link-${subItem.label.replace(/\s+/g, '-')}`}
              className="block p-2 text-gray-600 hover:text-[#00ADB5] text-sm rounded-lg hover:bg-white/50 transition-all"
              onClick={() => {
                console.log(`Mobile: Navigating to ${subItem.href}`);
                onClose();
              }}
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      </div>
    ))}
  </div>
);

interface SecondaryNavItem {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}

interface MobileNavItem extends SecondaryNavItem {
  dropdown?: DropdownItem[];
}

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSecondaryNav, setShowSecondaryNav] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState<{ [key: string]: boolean }>({});
  const [isInteracting, setIsInteracting] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('showSecondaryNav');
    if (saved) {
      setShowSecondaryNav(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('showSecondaryNav', JSON.stringify(showSecondaryNav));
  }, [showSecondaryNav]);

  useEffect(() => {
    if (isOpen || isInteracting) return;

    const timer = setInterval(() => {
      setShowSecondaryNav((prev: any) => !prev);
    }, 7000);

    return () => clearInterval(timer);
  }, [isOpen, isInteracting]);

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
    { label: 'Pricing', href: '/price' },
    { label: 'Resources', href: '/resource' },
  ];

  const nationalDropdown: DropdownItem[] = [
    {
      title: "Intellectual Property Services",
      items: [
        { label: "Trademark Services", href: "/service/trademark" },
        { label: "Patent Services", href: "/service/patent" },
        { label: "Copyright Services", href: "/service/copyright" },
        { label: "Design IP", href: "/service/design" },
        { label: "Geographical Indications (GI)", href: "/service/geographical" },
        { label: "Domain Name Law", href: "/service/domain" },
        { label: "Anti-Counterfeiting & Brand Protection", href: "/service/anti-counterfeiting" },
      ]
    },
    {
      title: "Business Legal Services",
      items: [
        { label: "Corporate Legal Services", href: "/service/corporate" },
        { label: "Startup Legal Support", href: "/service/startup" },
        { label: "Business Law & Compliance", href: "/service/business-law" },
        { label: "Investment & Fundraising Legal", href: "/service/investment" },
        { label: "Litigation & Dispute Resolution", href: "/service/litigation" },
      ]
    }
  ];

  const internationalDropdown: DropdownItem[] = [
    {
      title: "International IP Filing",
      items: [
        { label: "International Trademark Filing via Madrid Protocol", href: "/service/international/trademark-madrid" },
        { label: "National Filings in USA, EU, UK, UAE, Australia, etc.", href: "/service/international/national-filings" },
        { label: "International Patent Filing via PCT Application", href: "/service/international/patent-pct" },
        { label: "National Phase Entry", href: "/service/international/patent-national-phase" },
        { label: "Global Copyright Filing (as per Berne Convention)", href: "/service/international/copyright-berne" },
        { label: "International Design Protection under Hague System", href: "/service/international/design-hague" },
      ]
    },
    {
      title: "Global Legal & Brand Services",
      items: [
        { label: "Cross-Border Brand & Legal Consulting", href: "/service/international/brand-consulting" },
        { label: "Trademark & Patent Portfolio Management for Multinationals", href: "/service/international/portfolio-management" },
        { label: "Market Entry Legal Strategy for Foreign Businesses in India", href: "/service/international/market-entry-india" },
        { label: "Legal Support for Indian Startups Going Global", href: "/service/international/startup-global" },
        { label: "IP Watch Services in Multiple Jurisdictions", href: "/service/international/ip-watch" },
        { label: "Anti-Counterfeiting for Exporters", href: "/service/international/anti-counterfeiting" },
        { label: "Customs Watch Listing in International Markets", href: "/service/international/customs-watch" },
        { label: "Cease & Desist + Enforcement in Foreign Jurisdictions", href: "/service/international/enforcement" },
      ]
    }
  ];

  const secondaryNavItems: SecondaryNavItem[] = [
    { label: 'National Services', href: '/service/national', dropdown: nationalDropdown },
    { label: 'International Services', href: '/service/international', dropdown: internationalDropdown },
  ];

  const getDropdownPosition = (label: string) => {
    return 'right-0'; // Align dropdowns to the right of the parent link
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
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className="flex items-center h-full py-2">
            <Link href="/" className="h-20 md:h-30 w-auto flex items-center">
              <img
                src="/lion-logo.png"
                alt="Law Firm Logo"
                className="h-full w-auto object-contain"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center h-full">
            <div className="relative h-full w-[600px] lg:w-[800px] xl:w-[1000px]">
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

              <div
                className={`absolute w-full h-full flex items-center justify-end transition-all duration-500 ease-in-out transform ${
                  showSecondaryNav
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-full opacity-0'
                }`}
              >
                <div className="flex items-center gap-4">
                  {secondaryNavItems.map((item) => (
                    <div key={item.label} className="relative group">
                      <div className="flex items-center gap-1">
                        <Link
                          href={item.href}
                          className="text-gray-800 whitespace-nowrap hover:text-[#00ADB5] font-medium transition-all duration-200 text-sm lg:text-base uppercase tracking-wider relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#00ADB5] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full py-2"
                          onClick={() => console.log(`Parent: Navigating to ${item.href}`)}
                        >
                          {item.label}
                        </Link>
                        {item.dropdown && (
                          <ChevronDown size={16} className="text-gray-600 transition-transform duration-300 group-hover:rotate-180" />
                        )}
                      </div>
                      
                      {item.dropdown && (
                        <div className={`absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 ${getDropdownPosition(item.label)} top-full pt-4 w-[300px] sm:w-[380px] md:w-[420px] lg:w-[480px] max-w-[calc(100vw-16px)] z-[9999]`}>
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
                                          data-testid={`dropdown-link-${subItem.label.replace(/\s+/g, '-')}`}
                                          className="text-gray-600 hover:text-[#00ADB5] text-xs sm:text-sm transition-colors duration-200 flex items-center gap-2 group/item"
                                          onClick={() => console.log(`Desktop: Navigating to ${subItem.href}`)}
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
                            {(item as MobileNavItem).dropdown && (
                              <MobileDropdownContent 
                                dropdown={(item as MobileNavItem).dropdown!}
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