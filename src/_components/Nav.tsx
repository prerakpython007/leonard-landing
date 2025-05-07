"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSecondaryNav, setShowSecondaryNav] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('showSecondaryNav');
      return saved ? JSON.parse(saved) : false;
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem('showSecondaryNav', JSON.stringify(showSecondaryNav));
  }, [showSecondaryNav]);

  const primaryNavItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: 'service' },
    { label: 'About Us', href: 'about-us' },
    { label: 'Contact Us', href: 'contact-us' },
    { label: 'Blogs', href: '/blogs' },
    { label: 'Pricing', href: 'price' },
  ];

  const secondaryNavItems = [
    { label: 'Trade Mark', href: 'trademark' },
    { label: 'Patent', href: 'patent' },
    { label: 'Copyright', href: 'copyright' },
    { label: 'Design', href: 'design' },
    { label: 'Geographical Indications', href: 'geographical' },
    { label: 'Legal Matters', href: 'legal' },
  ];

  return (
    <nav className="bg-[#EEEEEE] sticky top-0 z-50 w-full">
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
            <Link href="/" className="h-16 md:h-20 w-auto flex items-center">
              <img
                src="/lion-logo.png"
                alt="Law Firm Logo"
                className="h-full w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation - All items on right */}
          <div className="hidden md:flex items-center h-full">
            <div className="relative h-full w-[600px] lg:w-[800px] xl:w-[1000px] overflow-hidden">
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
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-gray-800 whitespace-nowrap hover:text-[#00ADB5] font-medium transition-all duration-200 text-sm lg:text-base uppercase tracking-wider relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#00ADB5] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full py-2"
                  >
                    {item.label}
                  </Link>
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
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} py-6 space-y-4`}>
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setShowSecondaryNav(!showSecondaryNav)}
              className="p-2 text-gray-700 hover:text-[#00ADB5] transition-colors"
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
          {(showSecondaryNav ? secondaryNavItems : primaryNavItems).map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block py-3 text-gray-800 hover:text-[#00ADB5] font-medium text-base uppercase tracking-wider"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
