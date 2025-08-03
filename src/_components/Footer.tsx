"use client";
import Link from 'next/link';
import { Linkedin, Twitter, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const tickerVariants = {
  animate: {
    x: [0, -1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 25,
        ease: "linear",
      },
    },
  },
};

export default function Footer() {
  return (
    <footer className="bg-[#222831] text-white relative flex flex-col justify-between pt-16 sm:pt-20 md:pt-24 lg:pt-32 overflow-hidden">
      {/* Background Stars - Improved Desktop Alignment */}
      <span className="absolute left-[5%] top-[15%] sm:left-[10%] lg:left-[15%] text-[#EEEEEE] text-[150px] sm:text-[200px] md:text-[250px] lg:text-[300px] opacity-[0.03]">✦</span>
      <span className="absolute left-1/2 top-[15%] text-[#EEEEEE] text-[200px] sm:text-[250px] md:text-[300px] lg:text-[350px] opacity-[0.02] transform -translate-x-1/2">✦</span>
      <span className="absolute right-[5%] top-[15%] sm:right-[10%] lg:right-[15%] text-[#EEEEEE] text-[150px] sm:text-[200px] md:text-[250px] lg:text-[300px] opacity-[0.03]">✦</span>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-[#00ADB5] text-xl font-bold">Leonard Solutions</h3>
            <p className="text-gray-300">
              Providing excellent legal services in intellectual property, taxation, and corporate law since 2013.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Linkedin, href: "https://www.linkedin.com/company/leonard-corporate-solutions-pvt-ltd/" },
                { Icon: Twitter, href: "https://twitter.com/leonardsolutions" },
                { Icon: Instagram, href: "https://www.instagram.com/leonardsolutionspvt?igsh=Y2drampjMGhyN3Yz" },
              ].map(({ Icon, href }, i) => (
                <Link key={i} href={href} target="_blank" rel="noopener noreferrer">
                  <Icon className="text-[#00ADB5] hover:text-white transition-all cursor-pointer" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-6 sm:mt-0">
            <h3 className="text-[#00ADB5] text-xl font-bold mb-4 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#00ADB5] transform origin-left scale-x-0 transition-transform group-hover:scale-x-100" />
            </h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about-us' },
                { name: 'Services', href: '/service' },
                { name: 'Blogs', href: '/blogs' },
                { name: 'Contact', href: '/contact-us' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-[#00ADB5] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="mt-6 lg:mt-0">
            <h3 className="text-[#00ADB5] text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                'Intellectual Property',
                'Corporate Law',
                'Taxation',
                'Legal Consultation',
                'Documentation',
              ].map((service) => (
                <li key={service} className="text-gray-300">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mt-6 lg:mt-0">
            <h3 className="text-[#00ADB5] text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="text-[#00ADB5]" size={20} />
                <span className="text-gray-300">+91 123 456 7890</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-[#00ADB5]" size={20} />
                <span className="text-gray-300">info@leonardsolutions.in</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-[#00ADB5]" size={20} />
                <span className="text-gray-300">Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Ticker with Star */}
      <div className="w-full bg-[#1B1F27] overflow-hidden border-t border-white/10 mt-16 sm:mt-20 md:mt-24 lg:mt-32">
        {/* Copyright bar */}
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 py-4 sm:py-6 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © 2025 Leonard Corporate Solutions Pvt. Ltd.
            </p>
            <div className="flex gap-4 sm:gap-6">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-[#00ADB5] text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-[#00ADB5] text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Ticker */}
        <motion.div
          className="whitespace-nowrap flex items-center py-4 sm:py-6"
          variants={tickerVariants}
          animate="animate"
        >
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter">
                <span className="text-[#00ADB5]">IPR IS OUR  </span>
                <span className="text-[#EEEEEE]">GAME</span>
              </span>
              <span className="text-[#00ADB5] text-4xl sm:text-5xl md:text-6xl lg:text-7xl mx-6 sm:mx-8 md:mx-12">✦</span>
            </div>
          ))}
        </motion.div>
      </div>
    </footer>
  );
};