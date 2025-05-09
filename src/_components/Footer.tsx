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

const Footer = () => {
  return (
    <footer className="bg-[#222831] text-white relative flex flex-col justify-between pt-24 overflow-hidden">
      <span className="absolute left-0 top-[25%] text-[#EEEEEE] text-[250px] md:text-[300px] opacity-[0.03] transform -translate-y-1/2">
        ✦
      </span>
      <span className="absolute left-1/2 top-[25%] text-[#EEEEEE] text-[300px] md:text-[350px] opacity-[0.02] transform -translate-x-1/2 -translate-y-1/2">
        ✦
      </span>
      <span className="absolute right-0 top-[25%] text-[#EEEEEE] text-[250px] md:text-[300px] opacity-[0.03] transform -translate-y-1/2">
        ✦
      </span>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-16 lg:px-24 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-[#00ADB5] text-xl font-bold">Leonard Solutions</h3>
            <p className="text-gray-300">
              Providing excellent legal services in intellectual property, taxation, and corporate law since 2013.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Linkedin, href: "https://www.linkedin.com/company/leonard-solutions" },
                { Icon: Twitter, href: "https://twitter.com/leonardsolutions" },
                { Icon: Instagram, href: "https://www.instagram.com/leonardsolutions" },
              ].map(({ Icon, href }, i) => (
                <Link key={i} href={href} target="_blank" rel="noopener noreferrer">
                  <Icon className="text-[#00ADB5] hover:text-white transition-all cursor-pointer" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#00ADB5] text-xl font-bold mb-4 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#00ADB5] transform origin-left scale-x-0 transition-transform group-hover:scale-x-100" />
            </h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about-us' },
                { name: 'Services', href: '/services' },
                { name: 'Experience', href: '/experience' },
                { name: 'Contact', href: '/contact' },
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
          <div>
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
          <div>
            <h3 className="text-[#00ADB5] text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="text-[#00ADB5]" size={20} />
                <span className="text-gray-300">+91 123 456 7890</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-[#00ADB5]" size={20} />
                <span className="text-gray-300">contact@leonard.com</span>
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
      <div className="w-full bg-[#1B1F27] overflow-hidden border-t border-white/10 mt-24">
        {/* Copyright bar */}
        <div className="container mx-auto px-4 md:px-16 lg:px-24 py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Leonard Corporate Solutions Pvt. Ltd.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-[#00ADB5] text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-[#00ADB5] text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
        <motion.div
          className="whitespace-nowrap flex items-center"
          variants={tickerVariants}
          animate="animate"
        >
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="text-[6rem] md:text-[8rem] font-bold tracking-tighter">
                <span className="text-[#00ADB5]">LEONARD </span>
                <span className="text-[#EEEEEE]">SOLUTIONS</span>
              </span>
              <span className="text-[#00ADB5] text-7xl mx-12">✦</span>
            </div>
          ))}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;