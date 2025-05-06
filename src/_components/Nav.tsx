"use client";

import React, { useState } from 'react';
import { Menu, X, Grid } from 'lucide-react';

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSecondaryNav, setShowSecondaryNav] = useState(false);

  const primaryNavItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact Us', href: '#contact' },
    { label: 'Blogs', href: '#blogs' },
    { label: 'Pricing', href: '#pricing' },
  ];

  const secondaryNavItems = [
    { label: 'Trade Mark', href: '#trademark' },
    { label: 'Patent', href: '#patent' },
    { label: 'Copyright', href: '#copyright' },
    { label: 'Design', href: '#design' },
    { label: 'Geographical Indications', href: '#geographical' },
    { label: 'Legal Matters', href: '#legal' },
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
            <div className="h-16 md:h-20 w-auto flex items-center">
              <img
                src="/lion-logo.png"
                alt="Law Firm Logo"
                className="h-full w-auto object-contain"
              />
            </div>
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
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-gray-800 hover:text-[#00ADB5] font-medium transition-all duration-200 text-sm lg:text-base uppercase tracking-wider relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#00ADB5] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full py-2"
                  >
                    {item.label}
                  </a>
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
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-gray-800 whitespace-nowrap hover:text-[#00ADB5] font-medium transition-all duration-200 text-sm lg:text-base uppercase tracking-wider relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#00ADB5] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full py-2"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <button
              onClick={() => setShowSecondaryNav(!showSecondaryNav)}
              className="p-2 ml-4 lg:ml-8 text-gray-700 hover:text-[#00ADB5] transition-all duration-500 h-12 flex items-center"
              style={{
                transform: showSecondaryNav ? 'rotate(180deg)' : 'rotate(0deg)'
              }}
              aria-label={showSecondaryNav ? 'Show Main Menu' : 'Show Services Menu'}
            >
              <Grid size={24} />
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
              <Grid size={24} />
            </button>
          </div>
          {(showSecondaryNav ? secondaryNavItems : primaryNavItems).map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block py-3 text-gray-800 hover:text-[#00ADB5] font-medium text-base uppercase tracking-wider"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
