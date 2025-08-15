'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface DropdownItem {
  title: string;
  items: { label: string; href: string }[];
}

interface MobileDropdownProps {
  dropdown: DropdownItem[];
  onClose: () => void;
}

const MobileDropdownContent: React.FC<MobileDropdownProps> = ({ dropdown, onClose }) => (
  <div className="pl-4 pr-2 py-2 space-y-3">
    {dropdown.map((section, idx) => (
      <div key={idx} className="space-y-2">
        <h3 className="text-sm font-semibold text-gray-800 p-1 uppercase">{section.title}</h3>
        <div className="pl-2 space-y-1">
          {section.items.map((subItem, subIdx) => (
            <Link
              key={subIdx}
              href={subItem.href}
              data-testid={`mobile-dropdown-link-${subItem.label.replace(/\s+/g, '-')}`}
              className="block p-2 text-gray-600 hover:text-[#00ADB5] text-sm rounded-md hover:bg-white/50 transition-all"
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

interface NavItem {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSecondaryNav, setShowSecondaryNav] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState<Record<string, boolean>>({});
  const [isInteracting, setIsInteracting] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdownLabel, setOpenDropdownLabel] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('showSecondaryNav');
    if (saved) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      setShowSecondaryNav(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('showSecondaryNav', JSON.stringify(showSecondaryNav));
  }, [showSecondaryNav]);

  useEffect(() => {
    if (isOpen || isInteracting) return;

    const timer = setInterval(() => {
      setShowSecondaryNav((prev: unknown) => !prev);
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

  const leftNavItems = [
    { 
      label: 'Who are we?', 
      href: '/about-us',
      dropdown: [
        {
          title: "About Our Firm",
          items: [
            { label: "About Us", href: "/about-us" },
            { label: "Our Team", href: "/our-team" },
            { label: "Contact Us", href: "/contact-us" },
          ]
        }
      ]
    },
    { 
      label: 'IP India', 
      href: '/service/national', 
      dropdown: nationalDropdown 
    },
    { 
      label: 'IP International', 
      href: '/service/international', 
      dropdown: internationalDropdown 
    },
  ];

  const rightNavItems = [
    { 
      label: 'Careers', 
      href: '/careers',
      dropdown: [
        {
          title: "Career Opportunities",
          items: [
            { label: "Law Intern", href: "/careers/law-intern" },
            { label: "For Students", href: "/careers/students" },
            { label: "Others", href: "/careers/others" },
          ]
        }
      ]
    },
    { 
      label: 'Blogs', 
      href: '/blogs',
      dropdown: [
        {
          title: "Recent Articles",
          items: [
  { label: "Trademark Registration Guide", href: "/blog/Trademark-Registration-Guide" }, // ID for that blog
  { label: "Patent Filing Process", href: "/blog/patent-filing-process" },
  { label: "Copyright Protection Tips", href: "/blog/copyright-protection-tips" },
  { label: "Startup IP Strategy", href: "/blog/startupIpStrategy" }, // if you add more blogs
]

        }
      ]
    },
    { 
      label: 'Insights', 
      href: '/insights',
      dropdown: [
        {
          title: "Industry Insights",
          items: [
            { label: "IP Market Trends", href: "/insights/ipMarketTrends" },
            { label: "Legal Updates", href: "/insights/legal-updates" },
            { label: "Case Studies", href: "/insights/case-studies" },
            { label: "Industry Reports", href: "/insights/reports" },
          ]
        }
      ]
    },
  ];

  // Combine all navigation items for mobile menu
  const allNavItems: NavItem[] = [...leftNavItems, ...rightNavItems];

  const toggleMobileDropdown = (label: string) => {
    setMobileDropdowns(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  return (
    <motion.nav 
      className={`sticky top-0 w-full transition-all duration-300 z-[100] ${
        scrolled ? 'bg-[#FFFFFF]/95 backdrop-blur-sm shadow-sm' : 'bg-[#FFFFFF]'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      onMouseEnter={() => setIsInteracting(true)}
      onMouseLeave={() => setIsInteracting(false)}
    >
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20">
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center w-full h-full">
            {/* Left Navigation Items */}
            <div className="flex flex-1 justify-between items-center max-w-[40%]">
              {leftNavItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdownLabel(item.dropdown ? item.label : null)}
                  onMouseLeave={() => setOpenDropdownLabel(null)}
                >
                  <div className="flex items-center gap-1">
                    <Link
                      href={item.href}
                      className="text-gray-800 whitespace-nowrap hover:text-[#00ADB5] font-medium transition-all duration-200 text-sm lg:text-base uppercase tracking-wider relative py-2"
                      onClick={() => console.log(`Left Nav: Navigating to ${item.href}`)}
                    >
                      {item.label}
                    </Link>
                    {item.dropdown && (
                      <ChevronDown size={16} className="text-gray-500 ml-1" />
                    )}
                  </div>
                  
                  {/* Desktop dropdown - animated with framer-motion */}
                  <AnimatePresence>
                    {item.dropdown && openDropdownLabel === item.label && (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: -6, scale: 0.98 }}
                        animate={{ opacity: 1, y: 6, scale: 1 }}
                        exit={{ opacity: 0, y: -6, scale: 0.98 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-0 top-full pt-3 w-[300px] sm:w-[380px] md:w-[420px] lg:w-[480px] max-w-[calc(100vw-16px)] z-[9999]"
                      >
                        <div className="bg-white border border-gray-100 shadow-lg p-4">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {item.dropdown.map((column, idx) => (
                              <div key={idx}>
                                <h3 className="font-semibold text-gray-800 mb-2 uppercase text-xs sm:text-sm">
                                  {column.title}
                                </h3>
                                <ul className="space-y-2">
                                  {column.items.map((subItem, subIdx) => (
                                    <li key={subIdx}>
                                      <Link
                                        href={subItem.href}
                                        data-testid={`dropdown-link-${subItem.label.replace(/\s+/g, '-')}`}
                                        className="text-gray-600 hover:text-[#00ADB5] text-sm transition-colors flex items-center gap-2"
                                        onClick={() => console.log(`Desktop: Navigating to ${subItem.href}`)}
                                      >
                                        <span className="w-1 h-1 bg-gray-300 rounded-full group-hover:bg-[#00ADB5] transition-colors"></span>
                                        {subItem.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Centered Logo */}
            <div className="flex items-center h-full py-2 flex-shrink-0 mx-auto">
              <Link href="/" className="h-20 w-auto flex items-center justify-center">
                <div className="w-20 h-16 relative p-1">
                  {/* Background SVG - Static with low opacity */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="78" height="63" viewBox="-5 -5 90 80" fill="none" className="w-full h-full absolute inset-0">
                    <path d="M 78.041 23.5 C 75.725 23.5 69.301 25.181 69.301 30 C 69.283 30.4 68.573 32.895 71.675 35.036 C 75.892 37.946 76.426 38.815 77.013 40.5 C 78.903 45.935 66.601 47.39 60.401 46.5 C 50.421 45.067 40.512 42.605 40.512 36 C 40.512 30.45 45.454 28.398 47.401 26.5 C 49.349 24.602 52.607 23.965 56.401 23.5 C 60.196 23.035 55.669 22.175 48.901 25.5 C 42.134 28.825 31.431 41.602 30.401 41.5 C 24.962 40.961 19.893 26.365 20.901 17.5 C 21.91 8.635 30.368 0 37.059 0 C 43.75 0 38.581 11.903 31.901 26.5 C 25.221 41.097 17.03 58.387 12.954 62.535 C 4.684 70.953 -7.88 23.334 6.689 18.54"
                      fill="transparent"
                      stroke="rgb(200, 200, 200)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.5"
                    />
                  </svg>

                  {/* Foreground SVG - Animated drawing/undrawing */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="78" height="63" viewBox="-5 -5 90 80" fill="none" className="w-full h-full absolute inset-0">
                    <motion.path
                      d="M 78.041 23.5 C 75.725 23.5 69.301 25.181 69.301 30 C 69.283 30.4 68.573 32.895 71.675 35.036 C 75.892 37.946 76.426 38.815 77.013 40.5 C 78.903 45.935 66.601 47.39 60.401 46.5 C 50.421 45.067 40.512 42.605 40.512 36 C 40.512 30.45 45.454 28.398 47.401 26.5 C 49.349 24.602 52.607 23.965 56.401 23.5 C 60.196 23.035 55.669 22.175 48.901 25.5 C 42.134 28.825 31.431 41.602 30.401 41.5 C 24.962 40.961 19.893 26.365 20.901 17.5 C 21.91 8.635 30.368 0 37.059 0 C 43.75 0 38.581 11.903 31.901 26.5 C 25.221 41.097 17.03 58.387 12.954 62.535 C 4.684 70.953 -7.88 23.334 6.689 18.54"
                      fill="transparent"
                      stroke="rgb(0, 0, 0)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
                      animate={{ strokeDashoffset: [1000, 0, 1000] }}
                      transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    />
                  </svg>
                </div>
              </Link>
            </div>

            {/* Right Navigation Items */}
            <div className="flex flex-1 justify-between items-center max-w-[40%]">
              {rightNavItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdownLabel(item.dropdown ? item.label : null)}
                  onMouseLeave={() => setOpenDropdownLabel(null)}
                >
                  <div className="flex items-center gap-1">
                    <Link
                      href={item.href}
                      className="text-gray-800 whitespace-nowrap hover:text-[#00ADB5] font-medium transition-all duration-200 text-sm lg:text-base uppercase tracking-wider relative py-2"
                      onClick={() => console.log(`Right Nav: Navigating to ${item.href}`)}
                    >
                      {item.label}
                    </Link>
                    {item.dropdown && (
                      <ChevronDown size={16} className="text-gray-500 ml-1" />
                    )}
                  </div>

                  <AnimatePresence>
                    {item.dropdown && openDropdownLabel === item.label && (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: -6, scale: 0.98 }}
                        animate={{ opacity: 1, y: 6, scale: 1 }}
                        exit={{ opacity: 0, y: -6, scale: 0.98 }}
                        transition={{ duration: 0.18 }}
                        className="absolute right-0 top-full pt-3 w-[300px] sm:w-[380px] md:w-[420px] lg:w-[480px] max-w-[calc(100vw-16px)] z-[9999]"
                      >
                        <div className="bg-white border border-gray-100 shadow-lg  p-4">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {item.dropdown.map((column, idx) => (
                              <div key={idx}>
                                <h3 className="font-semibold text-gray-800 mb-2 uppercase text-xs sm:text-sm">
                                  {column.title}
                                </h3>
                                <ul className="space-y-2">
                                  {column.items.map((subItem, subIdx) => (
                                    <li key={subIdx}>
                                      <Link
                                        href={subItem.href}
                                        data-testid={`dropdown-link-${subItem.label.replace(/\s+/g, '-')}`}
                                        className="text-gray-600 hover:text-[#00ADB5] text-sm transition-colors flex items-center gap-2"
                                        onClick={() => console.log(`Desktop: Navigating to ${subItem.href}`)}
                                      >
                                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                        {subItem.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Logo (visible only on mobile) */}
          <div className="flex md:hidden items-center h-full py-2 ml-auto">
            <Link href="/" className="h-16 w-auto flex items-center">
              <div className="w-16 h-12 relative p-1">
                {/* SVGs same as above (kept for consistency) */}
                <svg xmlns="http://www.w3.org/2000/svg" width="78" height="63" viewBox="-5 -5 90 80" fill="none" className="w-full h-full absolute inset-0">
                  <path d="M 78.041 23.5 C 75.725 23.5 69.301 25.181 69.301 30 C 69.283 30.4 68.573 32.895 71.675 35.036 C 75.892 37.946 76.426 38.815 77.013 40.5 C 78.903 45.935 66.601 47.39 60.401 46.5 C 50.421 45.067 40.512 42.605 40.512 36 C 40.512 30.45 45.454 28.398 47.401 26.5 C 49.349 24.602 52.607 23.965 56.401 23.5 C 60.196 23.035 55.669 22.175 48.901 25.5 C 42.134 28.825 31.431 41.602 30.401 41.5 C 24.962 40.961 19.893 26.365 20.901 17.5 C 21.91 8.635 30.368 0 37.059 0 C 43.75 0 38.581 11.903 31.901 26.5 C 25.221 41.097 17.03 58.387 12.954 62.535 C 4.684 70.953 -7.88 23.334 6.689 18.54"
                    fill="transparent"
                    stroke="rgb(200, 200, 200)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.5"
                  />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="78" height="63" viewBox="-5 -5 90 80" fill="none" className="w-full h-full absolute inset-0">
                  <motion.path
                    d="M 78.041 23.5 C 75.725 23.5 69.301 25.181 69.301 30 C 69.283 30.4 68.573 32.895 71.675 35.036 C 75.892 37.946 76.426 38.815 77.013 40.5 C 78.903 45.935 66.601 47.39 60.401 46.5 C 50.421 45.067 40.512 42.605 40.512 36 C 40.512 30.45 45.454 28.398 47.401 26.5 C 49.349 24.602 52.607 23.965 56.401 23.5 C 60.196 23.035 55.669 22.175 48.901 25.5 C 42.134 28.825 31.431 41.602 30.401 41.5 C 24.962 40.961 19.893 26.365 20.901 17.5 C 21.91 8.635 30.368 0 37.059 0 C 43.75 0 38.581 11.903 31.901 26.5 C 25.221 41.097 17.03 58.387 12.954 62.535 C 4.684 70.953 -7.88 23.334 6.689 18.54"
                    fill="transparent"
                    stroke="rgb(0, 0, 0)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
                    animate={{ strokeDashoffset: [1000, 0, 1000] }}
                    transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  />
                </svg>
              </div>
            </Link>
          </div>

          {/* Mobile Dropdown Menu */}
          <motion.div 
            className={`md:hidden fixed inset-0 z-[9999] ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpen ? 1 : 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="absolute left-0 top-0 bottom-0 w-[300px] bg-white z-[10000] h-[100vh] overflow-y-auto"
              initial={{ x: "-100%" }}
              animate={{ x: isOpen ? 0 : "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 h-full flex flex-col">
                <div className="flex justify-between items-center mb-6">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-gray-700 hover:text-[#00ADB5] transition-colors"
                  >
                    <X size={24} />
                  </button>
                  <span className="text-[#00ADB5] text-2xl font-medium"> </span>
                </div>

                <div className="flex-1 overflow-y-auto custom-scrollbar">
                  <div className="space-y-1">
                    {allNavItems.map((item) => (
                      <div key={item.label} className="border-b border-gray-100/50 last:border-0">
                        {'dropdown' in item ? (
                          <div className="py-2">
                            <button
                              onClick={() => toggleMobileDropdown(item.label)}
                              className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-gray-50 text-gray-800 hover:text-[#00ADB5] font-medium text-base transition-all"
                            >
                              <span className="flex items-center gap-2">
                                {item.label}
                              </span>
                              <ChevronDown
                                size={18}
                                className={`transform transition-transform duration-300 ${mobileDropdowns[item.label] ? 'rotate-180' : 'rotate-0'}`}
                              />
                            </button>
                            
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ 
                                height: mobileDropdowns[item.label] ? "auto" : 0,
                                opacity: mobileDropdowns[item.label] ? 1 : 0
                              }}
                              transition={{ duration: 0.28 }}
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
                            className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-50 text-gray-800 hover:text-[#00ADB5] font-medium text-base transition-all"
                            onClick={() => setIsOpen(false)}
                          >
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
      </div>
    </motion.nav>
  );
};

export default Nav;
