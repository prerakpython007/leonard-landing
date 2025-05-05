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
    <nav className="bg-gradient-to-r from-gray-50 to-white border-y border-gray-200 sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          {/* Desktop Navigation - Left Side */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-800 hover:text-[#00ADB5] font-medium transition-all duration-200 text-sm uppercase tracking-wide relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#00ADB5] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Logo */}
          <div className="flex items-center justify-center px-4">
            <div className="h-14 w-auto flex items-center">
              <img
                src="/lion-logo.png"
                alt="Law Firm Logo"
                className="h-full w-auto object-contain"
              />
            </div>
          </div>

          {/* Desktop Navigation - Right Side */}
          <div className="hidden md:flex items-center gap-8">
            {rightNavItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-800 hover:text-[#00ADB5] font-medium transition-all duration-200 text-sm uppercase tracking-wide relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#00ADB5] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} py-4 space-y-2`}>
          {[...navItems, ...rightNavItems].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block py-2 text-gray-800 hover:text-[#00ADB5] font-medium text-sm uppercase tracking-wide"
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
