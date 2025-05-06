"use client";

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Practice Areas', href: '#practice-areas' },
    { label: 'Our Team', href: '#team' },
    { label: 'Experience', href: '#experience' },
    { label: 'Resources', href: '#resources' },
  ];

  const rightNavItems = [
    { label: 'About Us', href: '#about' },
    { label: 'Case Studies', href: '#cases' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className= " bg-[#EEEEEE] sticky top-0 z-50 w-full">
      <div className="max-w-[1800px] mx-auto px-8 sm:px-12 lg:px-16">
        <div className="flex justify-between items-center h-24">
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation - Left Side */}
          <div className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-800 hover:text-[#00ADB5] font-medium transition-all duration-200 text-base uppercase tracking-wider relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#00ADB5] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full py-2"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Logo */}
          <div className="flex items-center justify-center px-8">
            <div className="h-16 w-auto flex roundedfu items-center">
              <img
                src="/lion-logo.png"
                alt="Law Firm Logo"
                className="h-full w-auto  object-contain"
              />
            </div>
          </div>

          {/* Desktop Navigation - Right Side */}
          <div className="hidden md:flex items-center gap-12">
            {rightNavItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-800 hover:text-[#00ADB5] font-medium transition-all duration-200 text-base uppercase tracking-wider relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#00ADB5] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full py-2"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} py-6 space-y-4`}>
          {[...navItems, ...rightNavItems].map((item) => (
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
